particlesJS.load('particles-js', 'js/particles.json', function() {
    console.log('callback - particles.js config loaded');
});
$(document).ready(function () {
    $('h1').click(function () {
        console.log('test');
    });
});
