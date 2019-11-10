const {Observable,operators,interval,from} = rxjs
const {zip} = operators

let word = 'hello world'
const arrLetters = word.split('')

const timer$ = from(arrLetters)
        .pipe(
            zip(
                interval(500),
                (a,b)=>a
            )
        )
        

timer$.subscribe({
    next:value=>console.log(value)
})