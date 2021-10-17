const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()

app.use(bodyParser.json())
app.use(express.static('.'))

app.get('/catalogData', (req, res) => {
  fs.readFile('catalog.json', 'utf8', (err, data) => {
    res.send(data)
  })
})

app.get('/getCart', (req, res) => {
  fs.readFile('cart.json', 'utf8', (err, data) => {
    res.send(data)
  })
})

app.post('/addToCart', (req, res) => {
  fs.readFile('cart.json', 'utf8', (err, data) => {
    if (err) {
      res.send('{"result": 0}')
    } else {
      const cart = JSON.parse(data)
      const item = req.body

      cart.push(item)

      fs.writeFile('cart.json', JSON.stringify(cart), (err) => {
        if (err) {
          res.send('{"result": 0}')
        } else {
          res.send('{"result": 1}')
        }
      })
    }
  })
})

app.post('/delFromCart', (req, res) => {
  fs.readFile('cart.json', 'utf8', (err, data) => {
    if (err) {
      res.send('{"result": 0}')
    } else {
      const cart = JSON.parse(data)
      const item = req.body

      let index = cart.findIndex(
        (product) => product.id_product == item.id_product
      )
      if (index < 0) {
        res.send('{"result": 0}')
      } else {
        cart.splice(index, 1)
        fs.writeFile('cart.json', JSON.stringify(cart), (err) => {
          if (err) {
            res.send('{"result": 0}')
          } else {
            res.send('{"result": 1}')
          }
        })
      }
    }
  })
})

app.listen(3000, function () {
  console.log('server is running on port 3000!')
})
