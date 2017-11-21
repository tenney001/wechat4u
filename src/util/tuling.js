import axios from 'axios'

export function getAPI (userid, info, cb) {
  let key = 'c8a97c231faf43e490eded5a6f11ab90'
  let uri = 'http://www.tuling123.com/openapi/api'
  axios.post(uri, {
    key,
    info,
    userid
  }).then(function (response) {
    console.log('getTuLingAPI-data:', JSON.stringify(response.data))
    cb(response.data)
  }).catch(function (err) {
    console.log('getTuLingAPI-err:', err)
  })
}