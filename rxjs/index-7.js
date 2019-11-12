const {BehaviorSubject} = rxjs

const behaviorSubject = new BehaviorSubject()

behaviorSubject.subscribe(data=>{
    console.log('subscription 1 ',data);
})

behaviorSubject.next(1)
behaviorSubject.next(2)
behaviorSubject.next(3)

behaviorSubject.subscribe(data => {
    console.log('Subscripción 2:', data);
});

behaviorSubject.next(3);