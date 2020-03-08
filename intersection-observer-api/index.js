const video = document.getElementById('video')

const options = {
    // root : , // elemento que estará escuchando
    rootMargin: '0px 0px 0px 0px', // algunos pixel antes para ejecutar el callback o pixeles despues para apagar el callback
    threshold : 1// ejecutaŕa el callback cuando se encuentr en un cierto porcentaje del elemento , por defecto es cero , el cero significa que se ejecutará apenas se ve , el 1 el elemento completo tambien puede recibir un arrar
    // [.5,1] que el callback se ejecute cuando se encuentra en el 50% y cuando este en el 100%
}
const callback = (entries,observer) => {
    if(entries[0].isIntersecting){
        video.play()
        video.setAttribute('controls',true)
    }else{
        video.pause()
    }
}

const observer = new IntersectionObserver(callback) // callback, opciones
observer.observe(video)