import $ from 'jquery'

import montserrat from '@fontsource/montserrat'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'

import '../sass/app.sass'

$(function() { 
    $('.avatar').addClass('rounded-circle')

    $('.nav-menu li').on('click', function(ev) {
        $('.nav-menu li').removeClass('active')
        $(this).addClass('active')
    })
})