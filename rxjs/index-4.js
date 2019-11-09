const {Observable,Subject,operators,from,of} = rxjs

const subject = new Subject()

subject.subscribe({
    next:value=>console.log(`Observer A ${value}`)
})

subject.subscribe({
    next:value=>console.log(`Observer B ${value}`)
})

const arr = [1,2,3,4,5]

const observableOf$ = of(...arr)
const observableFrom$ = from(arr)

const subscription = observableOf$.subscribe(subject) // un subcription es un objecto que representa un objeto desechable
const childSubscription = observableFrom$.subscribe(subject)

subscription.add(childSubscription)

setTimeout(()=>{
    subscription.remove(childSubscription);
    subscription.unsubscribe()
}, 1000)