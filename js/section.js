let initSection = () => {

let lists = document.querySelectorAll('.list').forEach(listIterator);
let sectionWrapper = document.querySelector('.section-wrapper');

function listIterator(e, i) {
    e.addEventListener('click', (event) => {
        let totalMove;
        if(i==0) {
            console.log('bu 0 element')
            sectionWrapper.style = 'transform: translateY(100vh)'
        } else {
            totalMove=(i*100-100)
            sectionWrapper.style = `transform: translateY(-${totalMove}vh)`
        }
    })
}

}

export {initSection};