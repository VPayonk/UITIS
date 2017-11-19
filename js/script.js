            // Menu
var wrapper = document.querySelector(".nav");
var nav = priorityNav.init({
    mainNavWrapper: ".nav",
    mainNav: ".menu",
    navDropdownLabel: "&#9679 &#9679 &#9679",
    navDropdownClassName: "dropdown",
    navDropdownToggleClassName: "dropdown-btn",
    breakPoint: 300, 
    throttleDelay: 00,
}) 			

            // Accordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}

			

$(document).ready(function($){
            // Hamburger animation
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
        $('.mobile-menu .small-menu').slideToggle(300);
    });

})