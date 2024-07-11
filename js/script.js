const topButton = document.getElementById('topButton');
const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = 'block';
    } else {
        topButton.style.display = 'none';
    }
};
const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
window.onscroll = () => {
    scrollFunction();
};

topButton.addEventListener('click', topFunction);


document.querySelectorAll('.page-item').forEach(item => {
    item.addEventListener('click', event => {
        document.querySelectorAll('.page-item').forEach(item => {
            item.classList.remove('active');
        });
        event.currentTarget.classList.add('active');
    });
});