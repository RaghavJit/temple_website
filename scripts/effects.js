document.addEventListener('scroll', function() {
    const about = document.querySelector('.about');
    const rect = about.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
        about.classList.add('visible');
    } else {
        about.classList.remove('visible');
    }
});

document.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.cards');
    const windowHeight = window.innerHeight;

    setTimeout(function() {
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
    
            if (rect.top < windowHeight && rect.bottom > 0) {
                card.classList.add('visible');
            } else {
                card.classList.remove('visible');
            }
        });
    }, 700);      
});