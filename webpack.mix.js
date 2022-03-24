let mix = require('laravel-mix');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('src/js/tilemetrisi.js', 'dist/js/tilemetrisi.js');
mix.js('src/js/account-box.js', 'dist/js/account-box.js');
mix.sass('src/scss/tilemetrisi.scss', 'dist/css/tilemetrisi.css');
mix.copyDirectory('src/images', 'dist/images');
mix.copyDirectory('src/fonts', 'dist/fonts');
