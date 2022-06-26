function initBlast() {
    document.querySelectorAll('.rubber>span').forEach(e => {
        e.addEventListener('mouseover', () => {
            e.classList.add('blast');
            setTimeout(() => {
                e.classList.remove('blast')
            }, 1000)
        })
    })
};
export {
    initBlast
}