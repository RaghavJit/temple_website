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

function toggleInfo(expand_button){
    console.log('clicked')
    const eventInfo = expand_button.children[2];

    document.querySelectorAll('.event-info').forEach(info => {
        if (info !== eventInfo) {
            info.classList.remove('show');
        }
    });

    if (eventInfo.classList.contains('show')) {
        eventInfo.classList.remove('show');
    } else {
        eventInfo.classList.add('show');
    }
}

document.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');

    if (window.scrollY >= 470) {
        navbar.classList.add('full');
    } else {
        navbar.classList.remove('full');
    }
});