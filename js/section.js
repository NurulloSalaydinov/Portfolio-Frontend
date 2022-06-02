let initSection = () => {

    let lists = document.querySelectorAll('.list').forEach(listIterator);
    let sectionWrapper = document.querySelector('.section-wrapper');

    let circles = document.querySelectorAll('circle');

    function listIterator(e, i) {
        e.addEventListener('click', (event) => {
            let totalMove;
            if (i == 0) {
                sectionWrapper.style = 'transform: translateY(100vh)'
            } else {
                totalMove = (i * 100 - 100)
                sectionWrapper.style = `transform: translateY(-${totalMove}vh)`
            }
            if (i == 2) {
                setTimeout(() => {
                    let progressBar = document.querySelectorAll(".circular-progress").forEach(e => {
                        let progressValue = 0;
                        let progressEndValue = parseInt(e.getAttribute("data-end-percent"));
                        let speed = 15;
        
                        let progress = setInterval(() => {
                            progressValue++;
                            e.style.background = `conic-gradient(
                                var(--navigation-color) ${progressValue * 3.6}deg,
                                var(--gray) ${progressValue * 3.6}deg
                            )`;
                            if (progressValue == progressEndValue) {
                                clearInterval(progress);
                            }
                        }, speed);
                    });
    
                }, 950)

            };
        });
    };

};

export {
    initSection
};