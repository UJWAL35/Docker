document.getElementById('antigravity-box').addEventListener('click', function () {
    this.classList.add('float-up');
    setTimeout(() => {
        this.classList.remove('float-up');
    }, 3000); // Resets after 3 seconds
});