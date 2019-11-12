const {ReplaySubject} = rxjs


const replay = new ReplaySubject(3)// esto quiere decir que emita las 3ultimas informaciones que detectee

replay.next(1)
replay.next(2)
replay.next(3)
replay.next(4)
replay.next(5)
replay.next(6)
replay.next(7)
replay.subscribe(data=>{
    console.log('observer A',data);
})
replay.next(8)
replay.next(9)
replay.next(10)
replay.subscribe(data=>{
    console.log('observer b',data);
})
