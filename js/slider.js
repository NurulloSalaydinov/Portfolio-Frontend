const activateSlider = (elem_attr) => {
    let elem = document.querySelector(elem_attr);
    let cloned_elem = elem.cloneNode(true);
    let x = 0;
    elem.classList.add('start-run');
    setTimeout(() => {
        elem.parentNode.prepend(cloned_elem);
        elem.parentNode.removeChild(elem);
    });
};

export {
    activateSlider
};
