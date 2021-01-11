'use strict'

const reviewEvents = require('./reviews/events')
const userEvents = require('./user/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('.background').show()
  $('#carouselExampleIndicators').hide()
  $('#menu').hide()
  $('.review1').hide()
$('.start').show()
$('#hide-modal').hide()

  $('#sign-up').on('submit', userEvents.onSignUp)
  $('#sign-in').on('submit', userEvents.onSignIn)
  $('#change-password').on('submit', userEvents.onChangePassword)
  $('#sign-out').on('click', userEvents.onSignOut)
  $('#create-a-review').on('submit', reviewEvents.onCreateReview)
  $('#get-reviews').on('submit', reviewEvents.onGetReviews)
  $('#get-one-review').on('submit', reviewEvents.onGetOneReview)
  $('#delete-review').on('submit', reviewEvents.onDeleteReview)
  $('#update-review').on('submit', reviewEvents.onUpdateReview)
  // $('#update-review').on('show.bs.modal', reviewEvents.updateModal)
  $('.carousel-item active').on('click', reviewEvents.getCarousel)
//   $('#open-modal').on('click', function() {
//
//    $('#modelWindow').modal('show')
// })
  $('#open-modal1').on('click', function(){
    jQuery.noConflict()
    $('#modalWindow1').modal('show')
  })

  $('.closebtn').on('click', function(){
    jQuery.noConflict()
    $('#modalWindow1').modal('hide')
  })
  $('#open-modal2').on('click', function(){
    jQuery.noConflict()
    $('#modalWindow2').modal('show')
  })

  $('.closebtn').on('click', function(){
    jQuery.noConflict()
    $('#modalWindow2').modal('hide')
  })
  $('#open-modal3').on('click', function(){
    jQuery.noConflict()
    $('#modalWindow3').modal('show')
  })

  $('.closebtn').on('click', function(){
    jQuery.noConflict()
    $('#modalWindow').modal('hide')
  })

})
