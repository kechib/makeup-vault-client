const config = require('./../config')
const store = require('./../store')


const createReview = function (data) {
  return $.ajax({
    url: config.apiUrl + '/reviews',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data,
  })
}
const getReviews = function () {
  return $.ajax({
    url: config.apiUrl + '/reviews',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${store.user.token}`
     }
  })
}
const getOneReview = function (data) {
  return $.ajax({
    url: config.apiUrl + `/reviews/${data.review._id}`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })

}
const deleteReview = function (data) {
    return $.ajax({
      url: config.apiUrl + '/reviews/' + data.review._id,
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${store.user.token}`
      }
      // data: data,
    })
}

const updateReview = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + `/reviews/${data.review._id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
        },
    data: data
  })
}

module.exports = {
  createReview,
  getReviews,
  getOneReview,
  deleteReview,
  updateReview
}
