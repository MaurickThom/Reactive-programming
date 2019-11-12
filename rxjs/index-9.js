const {AsyncSubject} = rxjs
// solo emitirá el último valor del Observable cuando éste haya finalizado,
//  es decir, cuando se haya ejecutado el método complete():

const subject = new AsyncSubject()
subject.subscribe(data => {
    console.log('Subscripción 1:', data);
});

subject.next(1);
subject.next(2);

subject.complete()

subject.next(3);
subject.complete()