const video = document.getElementById('video'),
    pikachu = document.getElementById('pikachu'),
    videoContainer = document.getElementById('video-container')

const allowPlay = ()=> { // permitir play
    const canPlay = video.play();
    if (canPlay !== undefined) {
        canPlay
            .then(()=>{
                console.log('se pudo reproducir el video');
                video.style.display = 'block';
                pikachu.style.display = 'none';
            })
            .catch(err=> {
                console.log('no se pudo reproducir el video ',err);
            })
    }
}
window.addEventListener('scroll', () => {
    let viewportDiference = window.innerHeight - videoContainer.offsetHeight;
    const scrollableArea = document.body.offsetHeight - window.innerHeight;
    const scrollableToBottom = scrollableArea - (videoContainer.offsetTop - window.innerHeight);
    if (viewportDiference < 0) {
        viewportDiference = 0;
    }
    if (window.scrollY >= videoContainer.offsetTop - viewportDiference && window.scrollY <= scrollableToBottom - videoContainer.offsetHeight/2) {
        allowPlay();
    } else {
        video.pause();  
    }
})