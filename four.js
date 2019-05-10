/**
 * JavaScript file that goes along with Workbook 1, Page 3
 * 
 * this file is pretty empty - we expect the student to fill it in
 * 
 * everything is put into one big function that gets run "onload"
 */
// note that we don't do a global "use strict" because this can create a problem
// if we include another file
// "use strict";

// we do enable typescript type checking - see
// http://graphics.cs.wisc.edu/WP/cs559-sp2019/typed-js/
// and
// https://github.com/Microsoft/TypeScript/wiki/Type-Checking-JavaScript-Files
// @ts-check

/* Set options for jshint (my preferred linter)
 * disable the warning about using bracket rather than dot
 * even though dot is better 
 * https://stackoverflow.com/questions/13192466/how-to-suppress-variable-is-better-written-in-dot-notation
 */
/* jshint -W069, esversion:6 */

/* to make things easy, we'll define functions for each of the exercises
 * window.onload will call each in turn
 * the student should fill in these three functions
 */

function ex1() {
    /**
      * Student should put the code to solve exercise 1 here
      */
    /** @type{HTMLInputElement} */let slider1 = (/** @type{HTMLInputElement} */document.getElementById("box01-slider1"));
    /** @type{HTMLInputElement} */let slider2 = (/** @type{HTMLInputElement} */document.getElementById("box01-slider2"));
    /** @type{HTMLInputElement} */let slider3 = (/** @type{HTMLInputElement} */document.getElementById("box01-slider3"));
    slider1.oninput = function () {
        slider3.value = String(Number(slider2.value) - Number(slider1.value));
        document.getElementById("box01-li1").innerHTML = `Slider 1 - <b>oninput</b> - new value ${slider1.value}`;
        document.getElementById("box01-li2").innerHTML = `Slider 2 - <b>oninput</b> - new value ${slider2.value}`;
        document.getElementById("box01-li3").innerHTML = `Slider 3 - <b>oninput</b> - new value ${slider3.value}`;
    };
    slider2.oninput = function () {
        slider3.value = String(Number(slider2.value) - Number(slider1.value));
        document.getElementById("box01-li1").innerHTML = `Slider 1 - <b>oninput</b> - new value ${slider1.value}`;
        document.getElementById("box01-li2").innerHTML = `Slider 2 - <b>oninput</b> - new value ${slider2.value}`;
        document.getElementById("box01-li3").innerHTML = `Slider 3 - <b>oninput</b> - new value ${slider3.value}`;
    };
    slider3.oninput = function () {
        slider1.value = String(Number(slider2.value) - Number(slider3.value));
        slider2.value = String(Number(slider1.value) + Number(slider3.value));
        document.getElementById("box01-li1").innerHTML = `Slider 1 - <b>oninput</b> - new value ${slider1.value}`;
        document.getElementById("box01-li2").innerHTML = `Slider 2 - <b>oninput</b> - new value ${slider2.value}`;
        document.getElementById("box01-li3").innerHTML = `Slider 3 - <b>oninput</b> - new value ${slider3.value}`;
    };
}

function ex2() {
    /**
     * Student should put the code to solve exercise 2 here
     */
    /** @type{HTMLInputElement} */let slider = (/** @type{HTMLInputElement} */document.getElementById("box02-slider"));
    /** @type{HTMLInputElement} */let start_button = (/** @type{HTMLInputElement} */ document.getElementById("box02-buttonStart"));
    /** @type{HTMLInputElement} */let stop_button = (/** @type{HTMLInputElement} */ document.getElementById("box02-buttonStop"));
    let speed = 0;
    function start_stop_slider() {
        start_button.onclick = function () {
            speed = 1;
        }
        stop_button.onclick = function () {
            speed = 0;
        }
        let new_value = (Number(slider.value) + speed) % 100;
        if (new_value < 0) new_value = 100;
        slider.value = new_value.toString();
        window.requestAnimationFrame(start_stop_slider);
    }
    start_stop_slider();
}

function ex3() {
    /**
     * Student should put the code to solve exercise 3 here
     */
    // as a hint - this will at least change the background color (but not animate it)
    let text = document.getElementById("ex3-span");
    let red = 255;
    let green = 0;
    let blue = 0;
    let g = 0;
    let b = 0;
    let cont = 0;
    setInterval(function() {
        green += 1;
        blue += 1;
        if(Math.floor(green / 256) % 2 != 0) {  
            cont = 1;
        }
        else { 
            cont = 2;
        }
        if(cont == 2) {
            g = 255 - green % 256;
            b = 255 - blue % 256;
            text.style.backgroundColor = "rgb(" + red + "," + g + "," + b + ")";
        }
        if(cont == 1) {
            g = green % 256;
            b = blue % 256;
            text.style.backgroundColor = "rgb(" + red + "," + g + "," + b + ")";
        }
    }, 13);
}

window.onload = function() {
    ex1();
    ex2();
    ex3();
};