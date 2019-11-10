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
                (a,b)=>a
            )
        )

timer$.subscribe({
    next:value=>textElement.textContent+=value
})