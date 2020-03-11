import { fromEvent, Observer, Subscriber} from 'rxjs'

const mouseEvent$ = fromEvent<MouseEvent>(document,'click')
const keyboardEvent$ = fromEvent<KeyboardEvent>(document,'keyup')

// observer = {x,y}
mouseEvent$.subscribe(<Observer<MouseEvent>>{
    next(data:MouseEvent){
        console.log(data.x,data.y)
    },
    complete(){
        console.log("complete");
    },
    error(err){
        console.log("error -> err", err)
    }
})

keyboardEvent$.subscribe(<Observer<KeyboardEvent>>{
    next(data:KeyboardEvent){
        console.log("next -> data.key", data.key)
    }
})
