const {Observable,operators,interval,from} = rxjs
const {zip} = operators
const textElement = document.getElementById('text')
textElement.innerHTML = ``

let word = 'hello world'
const arrLetters = word.split('')

const timer$ = from(arrLetters)
        .pipe(
            zip(
                interval(120),
                (value,index)=>value // ['h',0]
            )
        )

timer$.subscribe({
    next:value=>textElement.textContent+=value
})