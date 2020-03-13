const { operators,from,fromEvent } = rxjs
const {filter,tap,map,distinct,toArray,debounceTime} = operators
const listHeroes = document.getElementById('typesHeroes')
const txtUser = document.getElementById('txtUser')
const result = document.getElementById('result')
result.innerHTML=``
let select
listHeroes.innerHTML = ``


// range(1,10).pipe(
//      tap( value=>console.log('antes' ,value) ),
//     filter( val => val % 2 === 1 ),
//     tap({
//          next = value => console.log('despues',value),
//          error = err => console.log(err),
//          complete: () => console.log('on complete')
//     })

// ).subscribe( console.log );

const users = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    }
]
from(users)
    .pipe(
        map(user=>user.tipo),
        distinct(),
        toArray()
    ).subscribe({
        next : types=>{
            select = types[0]
            // listHeroes.innerHTML+=`<option value="${type}">${type}</option>`
            types.map(type=>listHeroes.innerHTML+=`<option value="${type}">${type}</option>`)
        },
        complete(){
            users.filter(user=>user.tipo===select).map(hero=>result.innerHTML+=`<li>${hero.nombre}</li>`)
        }
    })


const input$ = fromEvent(txtUser,'keyup')
                .pipe(
                    debounceTime(500),
                    map(tag=>tag.target.value)
                ).subscribe(value=>{
                    if(!value) {
                        result.innerHTML = ``
                        users.filter(user=>user.tipo===select).map(hero=>result.innerHTML+=`<li>${hero.nombre}</li>`)
                        return
                    }
                    const arrResult = users.filter(user=>user.tipo===select)
                    arrResult.filter(user=>user.nombre.toLocaleLowerCase().startsWith(value.toLocaleLowerCase())).map(user=>{
                        result.innerHTML=``
                        result.innerHTML+=`<li>${user.nombre}</li>`
                    })
                })

const endpoint_stream = fromEvent(listHeroes, 'click').
    pipe(
        map(event  => event.target),
        filter(tag=>tag.tagName!=='SELECT'),
        map(tag=>tag.value)
        // map(target => (target.options[target.selectedIndex].text.toLowerCase()))
    ).subscribe({
        next:value=>{
            select = value
            result.innerHTML = ``
            users.filter(user=>user.tipo===select).map(hero=>result.innerHTML+=`<li>${hero.nombre}</li>`)
        }
    })








// from( users).pipe(
//     filter( p => p.tipo !== 'heroe' )
// ).subscribe( console.log );

// const keyup$ = fromEvent( document, 'keyup' ).pipe(
//     map( event => event.code ), // keyboardEvent, string
//     filter( key => key === 'Enter' ),
// );

// keyup$.subscribe( console.log );



