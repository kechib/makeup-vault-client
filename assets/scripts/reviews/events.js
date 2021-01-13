const api = require('./api')
const ui = require('./ui')
const store = require('./../store')
const getFormFields = require('./../../../lib/get-form-fields')

const onCreateReview = function (event) {
console.log(event)
  const createReview = event.target

  event.preventDefault()
  const data = getFormFields(createReview)
  // console.log('data is ', data)
  api.createReview(data)
  .then(ui.onCreateReviewSuccess)
  .catch(ui.onCreateReviewFailure)
}
const onGetReviews = function (event) {
  // const getReviews = event.target
  event.preventDefault()
  // const data = getFormFields(getReviews)
  api.getReviews()
  .then(ui.onGetReviewsSuccess)
  .catch(ui.onGetReviewsFailure)
}

const onGetOneReview = function (event) {
  event.preventDefault()
const getOneReview = event.target

  const data = getFormFields(getOneReview)
  api.getOneReview(data)
  .then(ui.onGetOneReviewSuccess)
  .catch(ui.onGetOneReviewFailure)
}

const onDeleteReview = function (event) {

  event.preventDefault()
  const deleteReview = event.target

    const data = getFormFields(deleteReview)
  api.deleteReview(data)
  .then(() => ui.onDeleteReviewSuccess(data))
  .catch(ui.onDeleteReviewFailure)
}
const onUpdateReview = function (event) {
  const updateReview = event.target

  event.preventDefault()
  const data = getFormFields(updateReview)
  api.updateReview(data)
  .then(ui.onUpdateReviewSuccess)
  .catch(ui.onUpdateReviewFailure)
}

// const updateModal = function (event) {
//
// }
const getCarousel = function (event) {
  ('#update-review').show()
}
module.exports = {
  onCreateReview,
  onGetReviews,
  onGetOneReview,
  onDeleteReview,
  onUpdateReview
}
