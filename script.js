document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('fade').classList.remove('fade');
        setTimeout(() => {
            window.location = this.href;
        }, 2000);
    });
});