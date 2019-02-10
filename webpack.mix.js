const mix = require('laravel-mix');

mix.styles([
    'resources/notika/css/bootstrap.min.css',
    'resources/notika/css/font-awesome.min.css',
    'resources/notika/css/owl.carousel.css',
    'resources/notika/css/owl.theme.css',
    'resources/notika/css/owl.transitions.css',
    'resources/notika/css/meanmenu/meanmenu.min.css',
    'resources/notika/css/animate.css',
    'resources/notika/css/normalize.css',
    'resources/notika/css/wave/waves.min.css',
    'resources/notika/css/wave/button.css',
    'resources/notika/css/scrollbar/jquery.mCustomScrollbar.min.css',
    'resources/notika/css/notika-custom-icon.css',
    'resources/notika/css/responsive.css',
], 'public/css/libs.css')
.styles([
    'resources/notika/css/main.css',
    'resources/notika/style.css',
], 'public/css/main.css')
.scripts([
    'resources/notika/js/vendor/modernizr-2.8.3.min.js',
    'resources/notika/js/vendor/jquery-1.12.4.min.js',
    'resources/notika/js/bootstrap.min.js',
    'resources/notika/js/wow.min.js',
    'resources/notika/js/jquery-price-slider.js',
    'resources/notika/js/owl.carousel.min.js',
    'resources/notika/js/jquery.scrollUp.min.js',
    'resources/notika/js/meanmenu/jquery.meanmenu.js',
    'resources/notika/js/counterup/jquery.counterup.min.js',
    'resources/notika/js/counterup/waypoints.min.js',
    'resources/notika/js/counterup/counterup-active.js',
    'resources/notika/js/scrollbar/jquery.mCustomScrollbar.concat.min.js',
    'resources/notika/js/sparkline/jquery.sparkline.min.js',
    'resources/notika/js/sparkline/sparkline-active.js',
    'resources/notika/js/flot/jquery.flot.js',
    'resources/notika/js/flot/jquery.flot.resize.js',
    'resources/notika/js/flot/flot-active.js',
    'resources/notika/js/knob/jquery.knob.js',
    'resources/notika/js/knob/jquery.appear.js',
    'resources/notika/js/knob/knob-active.js',
    'resources/notika/js/icheck/icheck.min.js',
    'resources/notika/js/icheck/icheck-active.js',
    'resources/notika/js/chat/jquery.chat.js',
    'resources/notika/js/todo/jquery.todo.js',
    'resources/notika/js/wave/waves.min.js',
    'resources/notika/js/wave/wave-active.js',
    'resources/notika/js/autosize.min.js',
    'resources/notika/js/plugins.js',
    'resources/notika/js/tawk-chat.js',
], 'public/js/libs.js')
.scripts([
    'resources/notika/js/main.js',
], 'public/js/main.css')
.browserSync('http://localhost:8000');
