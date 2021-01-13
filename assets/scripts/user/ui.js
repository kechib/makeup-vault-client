const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Sign Up Successful!')
}

const onSignUpFailure = function (error) {
  $('form').trigger('reset')
  $('#message').text('Sign Up Failed! Here is your error: ' + error.message)
}

const onSignInSuccess = function (response) {
  $('.background').hide()
  $('#carouselExampleIndicators').show()
    $('#menu').show()

$('.start').hide()
$('.page-content').show()
$('.header-content').hide()
$('.end').hide()
$('.container-fluid').hide()
$('.end').show()
  $('form').trigger('reset')
  
  store.user = response.user
  $('#message').text('Sign In Successful! Hello '+ response.user.email + ' ! Here is your owner id! '+ response.user.token)


}

const onSignInFailure = function (error) {
  $('.step2').show()
  $('#message').text('Sign In Failed! Here is your error: ' + error.message)
  $('form').trigger('reset')
}
const onChangePasswordSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Password Changed!')

}
const onChangePasswordFailure = function (error) {
  $('#message').text('Password Change Failed, Here is your error: ' + error.message)
  $('form').trigger('reset')
}

const onSignOutSuccess = function () {
  $('#message').text('Signed out. Goodbye!')
  $('.start').show()
    $('.background').show()
    $('#carouselExampleIndicators').hide()
    $('.page-content').hide()
    $('.header-content').hide()
      $('#menu').hide()
      $('.end').hide()
  $('form').trigger('reset')
}

const onSignOutFailure = function (error) {
  $('#message').text('Sign out failed: ' + error.message)
  $('form').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
