const store = require('../store')


const onCreateReviewSuccess = function (response) {
$('#message').text('Review Added To The Vault!')

store.review = response.review
console.log(response.review)
}
const onCreateReviewFailure = function (error) {
$('#message').text('Review Was **Not** Posted, Here is your error: ' + error.message)
}
const onGetReviewsSuccess = function (response) {
  $('#message').text('Vault Unlocked')

  store.reviews = response.reviews
console.log(response.reviews)
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
}

const onGetReviewsFailure = function (error) {
  ('#message').text(`Could **Not** Unlock The Vault, Here's Why: ${error.message}`)
}
const onGetOneReviewSuccess = function (response) {
  $('#message').text("Vault Unlocked, Here's Your Review")

  store.review = response.review
  console.log('response is ', response)
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
}

const onGetOneReviewFailure = function (error) {
  ('#message').text(`Could **Not** Unlock The Vault, Here's Why: ${error.message}`)
}

const onDeleteReviewSuccess = function (data) {
  console.log()
$('#message').text('Review is gone!')
store.review = null
// const id = data.review._id
// const index = store.reviews.findIndex(r => r._id === id)
// store.reviews.splice(index, 1)
}
const onDeleteReviewFailure = function (error) {
$('#message').text('Review Was **Not** Deleted, Here is your error: ' + error.message)
}
const onUpdateReviewSuccess = function (response) {
  // store.review = response.review
  $('#message').text('New Review Added To The Vault!')
  // console.log(response.review)
  }
  const onUpdateReviewFailure = function (error) {
  $('#message').text('New Review Was **Not** Posted, Here is your error: ' + error.message)
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
