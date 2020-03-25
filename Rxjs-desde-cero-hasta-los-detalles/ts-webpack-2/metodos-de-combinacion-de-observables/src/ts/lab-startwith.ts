import { ajax } from 'rxjs/ajax'
import { startWith } from 'rxjs/operators'

const loadingDiv = document.createElement('div')
loadingDiv.classList.add('loading')
loadingDiv.innerHTML = 'Loading ...'

const body = document.querySelector('body')

// streams

ajax({
    url:'https://reqres.in/api/users?delay=3',
    method: 'GET'
}).pipe(
    startWith(true)
).subscribe(response=>{
    response === true ? body?.append(loadingDiv) :
                document.querySelector('.loading')?.remove()
    console.log(response)
}

)
