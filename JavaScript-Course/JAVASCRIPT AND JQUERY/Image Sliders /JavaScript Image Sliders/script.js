window.addEventListener('load', function() {

    // How many sliders? 
    const slideCount = document.querySelectorAll('#slider-wrapper ul li').length;

    // How wide is each slide? 
    const slideWidth = document.querySelector('#slider-wrapper').offsetWidth;

    // Total width of the slider 
    const totalWidth = slideCount * slideWidth + 'px';

    // Slider Dom Element 
    const slider = document.querySelector('#slider-wrapper ul');

    // Next Button         
    const next = document.getElementById('next') ;

    // Previous button
    const previous = document.getElementById('prev');

    let leftPosition = 0 ;
    let counter = 0 ;
    slider.style.width = totalWidth ;

    next.addEventListener('click', function(event) {
        event.preventDefault();
        counter++;

        if(counter == slideCount) { counter = 0;} 

        leftPosition = `-${counter * slideWidth}px` ;
        slider.style.left = leftPosition 
        
    });

    previous.addEventListener('click', function(event) {
        event.preventDefault();
        counter--;

        if(counter < 0) { counter = slideCount-1;} 

        leftPosition = `-${counter * slideWidth}px` ;
        slider.style.left = leftPosition ;
    });

});