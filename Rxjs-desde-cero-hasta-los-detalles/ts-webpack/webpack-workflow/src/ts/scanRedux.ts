// Redux Example

/**
 * https://dev.to/fallenstedt/scan-operator-for-mini-redux-stores-41m9
 * 
 * Mini gestion de estados
 * 
 *  el scan podria ser la base del patron redux
 *  por cada cambio de estado que haya en un objeto este notificara,es decir administrar el 
 * estado global de la aplicacion en un solo objeto
 */

/**
 * 
 * con este ejemplo se va a simular que se tendrá varias emisiones
 * de cambios que recibira el usuario
 */
import { from } from "rxjs"
import { scan, map } from "rxjs/operators"

interface IUser{
    id?: string
    authenticated?: boolean
    token?: string | null
    name? : string
    age? : number
}

const arrUsers: IUser[] = [
    { id: '1', authenticated: false, token: null,name:'thom' },
    { id: '2', authenticated: true, token: 'ABC',name:'carlos' },
    { id: '3', authenticated: true, token: 'ABC123',name:'asasd ' },
]

const state$ = from(arrUsers).pipe(
    scan<IUser>((acc,curr)=>{
        return {...acc,...curr}
    },{age:33})
)
// .subscribe(console.log)

const id$ = state$.pipe(
    map((state:IUser)=>state.id)
)
.subscribe(console.log)