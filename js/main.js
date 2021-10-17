import filt from './FilterComp.js'
import prod from './ProdComp.js'
import cr from './CartComp.js'

const filter_el = filt.filter_el
const products = prod.products
const cart = cr.cart

const app = new Vue({
  el: '#app',
  components: { filter_el, products, cart },
  methods: {
    makeGETRequest(url) {
      return new Promise((resolve, reject) => {
        let xhr
        if (window.XMLHttpRequest) {
          xhr = new XMLHttpRequest()
        } else if (window.ActiveXObject) {
          xhr = new ActiveXObject('Microsoft.XMLHTTP')
        }
        // установить функцию на событие по изменению состоянию готовности
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            resolve(xhr.responseText)
          }
        }
        xhr.open('GET', url, true)
        xhr.send()
      })
    },

    makePOSTRequest(url, data) {
      return new Promise((resolve, reject) => {
        let xhr
        if (window.XMLHttpRequest) {
          xhr = new XMLHttpRequest()
        } else if (window.ActiveXObject) {
          xhr = new ActiveXObject('Microsoft.XMLHTTP')
        }

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            resolve(xhr.responseText)
          }
        }

        xhr.open('POST', url, true)
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')

        xhr.send(data)
      })
    },
  },
})
