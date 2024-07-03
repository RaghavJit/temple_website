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
    const eventInfo = expand_button.nextElementSibling;

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

function togglePayment(){
    var googlePaySection = document.getElementById('google_pay');
    var bankDetailsSection = document.getElementById('bank_details');

    if(googlePaySection.classList.contains('active')){
        googlePaySection.classList.remove('active');
        bankDetailsSection.classList.add('active');
    } 
    else {
        googlePaySection.classList.add('active');
        bankDetailsSection.classList.remove('active');
    }
}