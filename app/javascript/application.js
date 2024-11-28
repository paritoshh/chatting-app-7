// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "@hotwired/turbo-rails"
import * as jquery from "jquery"
import "semantic-ui"
import "jquery";
import "semantic-ui-css/semantic.min.js";
// Import jQuery
import * as jQuery from "jquery"; // Import jQuery
window.$ = window.jQuery = jQuery; // Assign jQuery to the global scope

$('.ui.dropdown')
    .dropdown()
;

document.addEventListener('turbo:load', () => {
    console.log("Turbo loaded");
    console.log(jQuery); // Debug jQuery initialization
    $('.ui.dropdown')
        .dropdown()
    ;
});


