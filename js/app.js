initCanvas();
initBlast();
initType();

document.querySelectorAll('.list').forEach(elem=> {
    elem.addEventListener('click', preloader)
})

function preloader() {
    document.querySelectorAll('.section-loader').forEach(e => {
        e.classList.add('active')
        setTimeout(() => {
            e.classList.remove('active')
        }, 1700)
    })
    document.querySelectorAll('.section').forEach(e => {
        e.classList.add('hiding')
        setTimeout(() => {
            e.classList.remove('hiding')
        }, 1700)
    })
}