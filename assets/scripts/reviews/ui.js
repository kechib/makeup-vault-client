const store = require('../store')


const onCreateReviewSuccess = function (response) {
$('#message').text('Review Added To The Vault!')

store.review = response.review
// console.log(response.review)
$('form').trigger('reset')
}
const onCreateReviewFailure = function (error) {
$('#message').text('Review Was **Not** Posted, Here is your error: ' + error.message)
$('form').trigger('reset')
}
const onGetReviewsSuccess = function (response) {
  $('#message').text('Vault Unlocked')

  store.reviews = response.reviews
// console.log(response.reviews)
  let reviewsHTML = ''
  store.reviews.forEach(function (currentReview) {
    const currentReviewHTML = (`

             Owner: ${currentReview.owner}
             Title: ${currentReview.title}
             Product: ${currentReview.product}
            Company: ${currentReview.company}
            Description: ${currentReview.description}
            Rating: ${currentReview.rating}
             recommend: ${currentReview.recommend}
             id: ${currentReview._id}

        `)
    reviewsHTML += currentReviewHTML
  })
  $('#review-display').text(reviewsHTML)
  $('form').trigger('reset')
}

const onGetReviewsFailure = function (error) {
  ('#message').text(`Could **Not** Unlock The Vault, Here's Why: ${error.message}`)
  $('form').trigger('reset')
}
const onGetOneReviewSuccess = function (response) {
  $('#message').text("Vault Unlocked, Here's Your Review")

  store.review = response.review
  // console.log('response is ', response)
  // let reviewHTML = ''
  // store.review.forEach(function (currentReview) {
    const currentReviewHTML = (`

             Owner: ${store.review.owner}
             Title: ${store.review.title}
             Product: ${store.review.product}
            Company: ${store.review.company}
            Description: ${store.review.description}
            Rating: ${store.review.rating}
             recommend: ${store.review.recommend}
             id: ${store.review._id}

        `)
    // reviewHTML += currentReviewHTML

  $('#review-display').text(currentReviewHTML)
  $('form').trigger('reset')
}

const onGetOneReviewFailure = function (error) {
  ('#message').text(`Could **Not** Unlock The Vault, Here's Why: ${error.message}`)
  $('form').trigger('reset')
}

const onDeleteReviewSuccess = function (data) {

$('#message').text('Review is gone!')
store.review.owner = null
// const id = data.review._id
// const index = store.reviews.findIndex(r => r._id === id)
// store.reviews.splice(index, 1)
$('form').trigger('reset')
}
const onDeleteReviewFailure = function (error) {
$('#message').text('Review Was **Not** Deleted, Here is your error: ' + error.message)
$('form').trigger('reset')
}
const onUpdateReviewSuccess = function (response) {
  // store.review = response.review
  $('#message').text('New Review Added To The Vault!')
  // console.log(response.review)
  $('form').trigger('reset')
  }
  const onUpdateReviewFailure = function (error) {
  $('#message').text('New Review Was **Not** Posted, Here is your error: ' + error.message)
  $('form').trigger('reset')
  }


module.exports = {
  onCreateReviewSuccess,
  onCreateReviewFailure,
  onGetReviewsSuccess,
  onGetReviewsFailure,
  onGetOneReviewSuccess,
  onGetOneReviewFailure,
  onDeleteReviewSuccess,
  onDeleteReviewFailure,
  onUpdateReviewSuccess,
  onUpdateReviewFailure
}
