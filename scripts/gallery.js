function updateCarousel(direction, scroll_button){
    const image_count = scroll_button.parentNode.children[1].children[0].childElementCount
    const images = scroll_button.parentNode.children[1].children[0]
    const size = document.querySelectorAll('.carousel-images img')[0].clientWidth;

    let temp = scroll_button.parentNode.children[1].children[0].style.transform
    let div_position = temp.slice(11, temp.indexOf('p'))
    div_position = (div_position == '') ? 0 : parseInt(div_position)
    console.log(div_position)

    if ((direction == '>') && (div_position-3 > images.clientWidth - size*image_count)){        
        images.style.transform = `translateX(${div_position-size}px)`;        
    }
    else if ((direction == '<') && (div_position < 0)){        
        images.style.transform = `translateX(${div_position+size}px)`;        
    }
    
}

document.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');

    if (window.scrollY >= 70) {
        navbar.classList.add('full');
    } else {
        navbar.classList.remove('full');
    }
});
