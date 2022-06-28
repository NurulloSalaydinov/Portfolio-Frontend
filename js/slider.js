const activateSlider = (elem_attr) => {
    let elem = document.querySelector(elem_attr);
    let elem_items = [...elem.querySelectorAll('article')];
    let x = 0;
    // console.dir(elem);
    // console.log(elem_items);
    function startSlide() {
        setInterval(() => {
            x += 10;
            elem.style = `transform: translateX(${x}px)`
        }, 100);
    }
    elem.addEventListener('transitioned', () => {
        elem.appendChild(elem.firstElementChild);
        elem.style.transition = 'none';
        elem.style.transform = 'translateX(0)';
        setTimeout(() => {
            elem.style.transition = 'all 0.5s';
        })
    })
};

export {
    activateSlider
};