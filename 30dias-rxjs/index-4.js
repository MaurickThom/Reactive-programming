const {Observable,Subject,operators,from,of} = rxjs

const subject = new Subject()

subject.subscribe({
    next:value=>console.log(`Observer A ${value}`)
})

subject.subscribe({
    next:value=>console.log(`Observer B ${value}`)
})

const arrLetters = ['a','b','c','d','e','f','g']
const arrNumbers = [1,2,3,4,5,6,7]

const observableOf$ = of(...arrLetters)
const observableFrom$ = from(arrNumbers)

const subscription = observableOf$.subscribe(subject) // un subcription es un objecto que representa un objeto desechable
const childSubscription = observableFrom$.subscribe(subject)

subscription.add(childSubscription)

setTimeout(()=>{
    subscription.remove(childSubscription);
    subscription.unsubscribe()
}, 1000)
