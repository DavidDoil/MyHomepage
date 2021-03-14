const nameApp = {
  data() {
    return {
      first: '',
      last: ''
    }
  }
}

Vue.createApp(nameApp).mount('#app')

nameApp.component('first-name-input', {
  template: `<input v-model='first' placeholder='First Name' />`
})

nameApp.component('last-name-input', {
  template: `<input v-model='last' placeholder='Last Name' />`
})

nameApp.component('name-display', {
  template: `<div>{{ first }}{{ last }}</div>`
})

