
// unicast

const {Observable,Subject} = rxjs
const {create} = Observable

const myObservable = create(observer=>{
    observer.next(Math.random())
})

const Subscription1 = myObservable.subscribe(data=>{
    console.log(data,' a');
})

const Subscription2 = myObservable.subscribe(data=>{
    console.log(data,' b');
})


// multicast
const subject = new Subject()

subject.subscribe(data => {
    console.log(data)
})

subject.subscribe(data => {
    console.log(data)
});

subject.next(Math.random())