import { asyncScheduler } from "rxjs"

const deg = 6
const hr =<HTMLDivElement> document.querySelector('#hr')
const mn =<HTMLDivElement> document.querySelector('#mn')
const sc =<HTMLDivElement> document.querySelector('#sc')

const subscription = asyncScheduler.schedule(function(state){
    let day = new Date()
    let hh = day.getHours()*30
    let mm = day.getMinutes()*deg
    let ss = day.getSeconds()*deg

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`
    mn.style.transform = `rotateZ(${(mm)}deg)`
    sc.style.transform = `rotateZ(${(ss)}deg)`
    this.schedule(<number>state+1,1000)
},0,0)
