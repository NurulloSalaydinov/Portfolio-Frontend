import {
    initSection
} from './section.js';
import {
    initCanvas
} from './canvas.js';
import {
    initBlast
} from './rubber.js';
import {
    initType
} from './initType.js';
import {
    addActiveClass
} from './navigation.js';
import {
    activateSlider
} from './slider.js';

window.addEventListener('DOMContentLoaded', () => {
    addActiveClass(); // add active class to list of navigation
    initCanvas(); // Start Canvas
    initBlast(); // Start blast animation
    initType(); // Start Typing animation
    initSection(); // Activate Section
    activateSlider('#sliderScroll'); // Activate Slider
    document.querySelector('.loader').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.loader').style.display = 'none';
    }, 600)
});