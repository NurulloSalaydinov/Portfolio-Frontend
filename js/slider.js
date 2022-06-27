const activateSlider = (elem_attr) => {
    let elem = document.querySelector(elem_attr);
    let elem_items = [...elem.querySelectorAll('article')];
    let x = 0;
    let scrollPos;
    let clones = [];
    let clonesWidth;
    let sliderWidth;

    elem_items.forEach(item => {
        let clone = item.cloneNode(true);
        clone.classList.add('clone');
        elem.appendChild(clone);
        clones.push(clone);
    });

    function getClonesWidth() {
        let width = 0;
        clones.forEach(clone => {
            width += clone.offsetWidth;
        })
        return width
    }

    function getScrollPos() {
        return window.scrollY;
    }

    function setScrollPos(pos) {
        window.scrollTo({
            top: pos
        })
    }

    function scrollUpdate() {
        scrollPos = getScrollPos();
        if (clonesWidth + scrollPos >= sliderWidth) {
            window.scrollTo({
                top: 1
            });
        } else if (scrollPos <= 0) {
            window.scrollTo({
                top: sliderWidth - clonesWidth - 1
            });
        };

        elem.style.tranform = `translateX(${-window.scrollY}px)`;
        requestAnimationFrame(scrollUpdate);
    };

    function onLoad() {
        document.body.style.height = `${sliderWidth}px`;
    }

    onLoad()
    // console.dir(elem);
    // console.log(elem_items);
    // setInterval(() => {
    // x += 10;
    // elem.style = `transform: translateX(${x}px)`
    // }, 100);
};

export {
    activateSlider
};