import $ from 'jquery'
import getCart from '../ShoppingCart/GetCart'
import StateMachine from 'javascript-state-machine'
import { log } from '../util/log'

export default class Item {
  constructor(list, data) {
    this.list = list
    this.data = data
    this.$el = $('<div class="item">')
    this.cart = getCart()
  }

  initContent() {
    let $el = this.$el
    let data = this.data
    let html = $(`
      <p>名称：${data.name}</p>
      <p>价格：${data.price}</p>
    `)
    $el.append(html)
  }

  initBtn() {
    let $el = this.$el
    let $btn = $('<button>')

    let fsm = new StateMachine({
      init: '加入购物车',
      transitions: [
        {
          name: 'addToCart',
          from: '加入购物车',
          to: '从购物车删除'
        },
        {
          name: 'deleteFromCart',
          from: '从购物车删除',
          to: '加入购物车'
        }
      ],
      methods: {
        // 添加到购物车
        onAddToCart: () => {
          this.addToCartHandle()
          updateText()
        },
        // 从购物车删除
        onDeleteFromCart: () => {
          this.deleteFromCartHandle()
          updateText()
        }
      }
    })

    function updateText() {
      $btn.text(fsm.state)
    }

    $btn.click(() => {
      if (fsm.is('加入购物车')) {
        fsm.addToCart()
      } else {
        fsm.deleteFromCart()
      }
    })

    updateText()
    $el.append($btn)
  }

  // 添加到购物车
  @log('添加到购物车')
  addToCartHandle() {
    this.cart.add(this.data)
  }

  // 从购物车删除
  @log('从购物车删除')
  deleteFromCartHandle() {
    this.cart.del(this.data.id)
  }

  render() {
    this.list.$el.append(this.$el)
  }

  init() {
    this.initContent()
    this.initBtn()
    this.render()
  }
}