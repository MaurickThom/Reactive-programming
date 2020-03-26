// https://blog.ng-classroom.com/blog/tips/fork-join/

import { forkJoin, of } from "rxjs"
import { ajax, AjaxError } from "rxjs/ajax"
import { catchError } from "rxjs/operators"


const API_GITHUB = `https://api.github.com/users`
const USER = 'MaurickThom'


forkJoin({
    user:ajax.getJSON(`${API_GITHUB}/${USER}`),
    respositories:ajax.getJSON(`${API_GITHUB}/${USER}/repos`),
    gists:ajax.getJSON(`${API_GITHUB}/${USER}/gists`),
})
.pipe(
    catchError((err:AjaxError)=>of(err.message)) // si hay un error en cualquiera de los observable se lanzará este observable y no mostrará nada aun así solo un observable haya
    //  fallado y los otros no , para poder recibir los otros streams es mejor colocar el carch Error a cada uno y no a todos de esa manera podre obtener al menos los que si se completaron con éxito
)
.subscribe(console.log)