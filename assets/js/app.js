import $ from 'jquery'

import montserrat from '@fontsource/montserrat'

import '/node_modules/font-awesome/css/font-awesome.css'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'

import '../sass/app.sass'

$(function() { 

    $('.avatar').addClass('rounded-circle')

    $('.nav-menu li').on('click', function(ev) {
        $('.nav-menu li').removeClass('active')
        $(this).addClass('active')

        $('.content').addClass('hidden')
        $("#" + $(this).data('target')).removeClass('hidden')
    })

    $('.nav-menu li:first-child').trigger('click')

    $('#number').on('change', function(ev) {
        ev.preventDefault()
        if ($(this).val() != undefined && $(this).val() != null && $(this).val().length < 4) {
            while ($(this).val().length < 4) {
                $(this).val('0' + $(this).val())
            }
        }
    })
})