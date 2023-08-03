import $ from 'jquery'

import montserrat from '@fontsource/montserrat'
import '/node_modules/font-awesome/scss/font-awesome.scss'
import faicons from 'fa-icons'

import '/node_modules/bootstrap/dist/css/bootstrap.min.css'

import '../sass/app.sass'

import jstree from 'jstree'
import '/node_modules/jstree/src/themes/default-dark/style.css'
import '/node_modules/jstree/src/themes/default/style.css'

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

    $('#technical-skills-tree').jstree({
        icons     :true
    }).on("changed.jstree", function (e, data) {
        //console.log(data.instance.get_node(data.node, true))
        let href = data.instance.get_node(data.node, true).attr('data-url')
        window.open(href, '_blank')
    })

    $('.contact-me').on('click', function(ev) {
        ev.preventDefault()

        $('.nav-menu li[data-target="about-content"]').trigger('click')
    })
})($)