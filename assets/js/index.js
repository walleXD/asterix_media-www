import $ from 'jquery'
import 'materialize-css/dist/js/materialize'

$('.button-collapse').sideNav()
$('#textarea1').trigger('autoresize')

const scrollToAnchor = aid => {
  const aTag = $(`${aid}`)
  $('html,body').animate({scrollTop: aTag.offset().top}, 'slow')
}

$('#landing-link').click(() => scrollToAnchor('#landing'))

$('#past-projects-link').click(() => scrollToAnchor('#old-projects'))

$('#current-projects-link').click(() => scrollToAnchor('#current-projects'))

$('#contact-link').click(() => scrollToAnchor('#contact'))

$('#about-link').click(() => scrollToAnchor('#about'))

$('#about-button-link').click(() => scrollToAnchor('#about'))
