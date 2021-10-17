// const API_URL =
//   'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

// const makeGETRequest = function (url) {
//   return new Promise((resolve, reject) => {
//     let xhr
//     if (window.XMLHttpRequest) {
//       xhr = new XMLHttpRequest()
//     } else if (window.ActiveXObject) {
//       xhr = new ActiveXObject('Microsoft.XMLHTTP')
//     }
//     // установить функцию на событие по изменению состоянию готовности
//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4) {
//         resolve(xhr.responseText)
//       }
//     }
//     xhr.open('GET', url, true)
//     xhr.send()
//   })
// }

// const makePOSTRequest = function (url, data) {
//   return new Promise((resolve, reject) => {
//     let xhr
//     if (window.XMLHttpRequest) {
//       xhr = new XMLHttpRequest()
//     } else if (window.ActiveXObject) {
//       xhr = new ActiveXObject('Microsoft.XMLHTTP')
//     }

//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4) {
//         resolve(xhr.responseText)
//       }
//     }

//     xhr.open('POST', url, true)
//     xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')

//     xhr.send(data)
//   })
// }

// export default {
//   makeGETRequest: makeGETRequest,
//   makePOSTRequest: makePOSTRequest,
// }
