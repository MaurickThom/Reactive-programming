import './index.pug'
import './scss/style.scss'
import './img/clock.png'
import { fromEvent } from 'rxjs'
import { map, tap, switchMap, pluck } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'
// import './ts/fetch'
// import './ts/ajaxRxjs'
// import './ts/getJSON'
// import './ts/apiGithub'
// import './ts/mergeMap'
// import './ts/switchMap-2'
// import './ts/switchMap-3'
// import './ts/mergeMapvsSwitchMap'
// import './ts/contactMap'
// import './ts/exhaustMap'

// Ejercicios repaso

//  api https://reqres.in/


const form = document.createElement('form'),
    inputEmail = document.createElement('input'),
    inputPass = document.createElement('input'),
    submitBtn = document.createElement('button')

inputEmail.type = 'email'
inputEmail.name="email"
inputEmail.placeholder = 'Email'
inputEmail.value = "eve.holt@reqres.in"

inputPass.type = 'password'
inputPass.name="password"
inputPass.placeholder = 'Password'
inputPass.value = "cityslicka"

submitBtn.textContent = 'Submit'


form.append(inputEmail,inputPass,submitBtn)
document.querySelector('body')?.append(form)


const submitForm$ = fromEvent(form,'submit')
    .pipe(
        tap(data=>data.preventDefault()),
        pluck<any,HTMLFormElement>('target'),
        map((formElement:any)=>({
            email:formElement[0].value,
            password:formElement[0].value
        })),
        switchMap(data=>ajax({
            url:'https://reqres.in/api/login',
            method:'POST',
            body : {...data}
        }).pipe(pluck('response','token')))
    ).subscribe(console.log)

