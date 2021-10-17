const cartItem = {
  props: ['cart_item', 'img'],
  template: `
    <div class="cart-item">
      <div class="goods-bio">
        <img :src="img" alt="Some image">
        <div class="goods-desc">
          <p class="goods-title">{{ cart_item.product_name }}</p>
          <p class="goods-quantity">Quantity: {{ cart_item.quantity }}</p>
          <p class="goods-single-price">$ {{ cart_item.price }} each</p>
        </div>
      </div>
      <div class="right-block">
          <p class="goods-price">{{ cart_item.quantity * cart_item.price }}</p>
          <button class="del-btn" @click="$root.$refs.cart.removeItem(cart_item)">&times;</button>
      </div>
    </div>`,
}

const cart = {
  components: { 'cart-item': cartItem },
  data() {
    return {
      cartItems: [],
      cartUrl: '/getBasket.json',
      imgCart: 'https://placehold.it/50x100',
      showCart: false,
    }
  },
  mounted() {
    const promise = this.$root.makeGETRequest(`/getCart`)
    promise.then((ans) => {
      ans = JSON.parse(ans)
      for (let item of ans) {
        let productId = +item.id_product
        let find = this.cartItems.find(
          (product) => product.id_product === productId
        )
        if (find) {
          find.quantity++
        } else {
          let product = {
            id_product: productId,
            price: +item.price,
            product_name: item.product_name,
            quantity: 1,
          }
          this.cartItems.push(product)
        }
      }
    })
  },
  methods: {
    addItem(element) {
      const promise = this.$root.makePOSTRequest(
        `/addToCart`,
        JSON.stringify(element)
      )
      promise.then((goods) => {
        let ans = JSON.parse(goods)
        if (ans.result === 1) {
          let productId = +element.id_product
          let find = this.cartItems.find(
            (product) => product.id_product === productId
          )
          if (find) {
            find.quantity++
          } else {
            let product = {
              id_product: productId,
              price: +element.price,
              product_name: element.product_name,
              quantity: 1,
            }
            this.cartItems.push(product)
          }
        } else {
          alert('Error')
        }
      })
    },
    removeItem(element) {
      const promise = this.$root.makePOSTRequest(
        `/delFromCart`,
        `{"id_product" : ${element.id_product} }`
      )
      promise.then((ansBody) => {
        let ans = JSON.parse(ansBody)
        if (ans.result === 1) {
          if (element.quantity > 1) {
            element.quantity--
          } else {
            this.cartItems.splice(this.cartItems.indexOf(element), 1)
          }
        } else {
          alert('Error')
        }
      })
    },
  },
  template: `
  <div>
    <button class="cart-button" type="button" @click="showCart = !showCart">Корзина</button>
    <div class="cart-block" v-show="showCart">
      <cart-item v-for="product of cartItems"
      :key="product.id_product"
      :img="imgCart"
      :cart_item="product"></cart-item>
    </div>
  </div>
`,
}

export default {
  cart: cart,
}
