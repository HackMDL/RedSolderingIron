autoSlider();
var left = 0;
var timer;

function autoSlider() {
    timer = setTimeout (function (){
        var polosa = document.getElementById('polosa');
        left = left - 950;
        if (left <-2850) {
            left = 0;
            clearTimeout(timer);
    }
    polosa.style.left = left + 'px';
    autoSlider ();
    }, 3000)
}