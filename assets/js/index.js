import $ from 'jquery'
import 'materialize-css/dist/js/materialize'

$('.button-collapse').sideNav()
$('#textarea1').trigger('autoresize')

const scrollToAnchor = aid => {
  const aTag = $(`${aid}`)
  $('html,body').animate({scrollTop: aTag.offset().top}, 'slow')
}

$('#landing-link').click(() => {
  scrollToAnchor('#landing')
})

$('#past-projects-link').click(() => {
  scrollToAnchor('#old-projects')
})

$('#current-projects-link').click(() => {
  scrollToAnchor('#current-projects')
})

$('#about-link').click(event => {
  scrollToAnchor('#about')
})

$('#contact-link').click(() => {
  scrollToAnchor('#contact')
})
