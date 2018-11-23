class LoginForm {
  constructor() {
    this.state = 'hide'
  }
  show() {
    if (this.state === 'show') {
      alert('已经显示')
    }
    this.state = 'show'
    console.log('登录框已显示')
  }
  hide() {
    if (this.state === 'hide') {
      alert('已经隐藏')
    }
    this.state = 'hide'
    console.log('登录框已隐藏')
  }
}
LoginForm.getInstance = (function () {
  let instance
  return function () {
    if (!instance) {
      instance = new LoginForm();
    }
    return instance
  }
})()

let login1 = LoginForm.getInstance()
login1.show()

let login2 = LoginForm.getInstance()
login2.hide()