// share no genera un observable : sino que comparte la fuente a multiples suscriptores
// mapto : mape las emisiones aa valores constantes

const {timer,operators,interval} = rxjs
const {tap,map,filter,share,mapTo} = operators

const timer$ = timer(1000)

const source = timer$.pipe(
    tap(()=>console.log('EFECTO OCULTO')),
    mapTo('resultado real')
)
// El efecto oculto se visualiza dos veces
// const subscribe$1 = source.subscribe(console.log)
// const subscribe$2 = source.subscribe(console.log)

const shareSource = source.pipe(share())

// El efecto oculto solo se visualiza una veces
const subscribe$1Best = shareSource.subscribe(console.log)
const subscribe$2Best = shareSource.subscribe(console.log)