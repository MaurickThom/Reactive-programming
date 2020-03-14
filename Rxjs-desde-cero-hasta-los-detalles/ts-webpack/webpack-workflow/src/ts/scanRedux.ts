// Redux Example

import { from } from "rxjs"
import { scan, map } from "rxjs/operators"

interface IUSer{
    id?: string
    authenticated?: boolean
    token?: string | null
    name? : string
    age? : number
}

const arrUsers: IUSer[] = [
    { id: '1', authenticated: false, token: null,name:'thom' },
    { id: '2', authenticated: true, token: 'ABC',name:'carlos' },
    { id: '3', authenticated: true, token: 'ABC123',name:'asasd ' },
]

const state$ = from(arrUsers).pipe(
    scan<IUSer>((acc,curr)=>{
        return {...acc,...curr}
    },{age:33})
)
// .subscribe(console.log)

const id$ = state$.pipe(
    map((state:IUSer)=>state.id)
)
.subscribe(console.log)