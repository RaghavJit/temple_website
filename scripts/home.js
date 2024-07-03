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