'use strict'
const reviewEvents = require('./reviews/events')
const userEvents = require('./user/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('.step2').hide()
  $('.review1').hide()
$('.step3').hide()
$('.start').show()
  $('#sign-up').on('submit', userEvents.onSignUp)
  $('#sign-in').on('submit', userEvents.onSignIn)
  $('#change-password').on('submit', userEvents.onChangePassword)
  $('#sign-out').on('click', userEvents.onSignOut)
  $('#create-a-review').on('submit', reviewEvents.onCreateReview)
  $('#get-reviews').on('submit', reviewEvents.onGetReviews)
  $('#get-one-review').on('submit', reviewEvents.onGetOneReview)
  $('#delete-review').on('submit', reviewEvents.onDeleteReview)
  $('#update-review').on('submit', reviewEvents.onUpdateReview)
})
