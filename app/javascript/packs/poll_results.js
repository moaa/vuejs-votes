import Vue from 'vue'
import App from '../poll_results.vue'
import Vuetify from 'vuetify/lib'
import axios from 'axios'

const token = document.querySelector('[name="csrf-token"]') || {content: 'no-csrf-token'}
const ax = axios.create({
    responseType: 'json',
    headers: {
        common: {
            'X-CSRF-Token': token.content
        }
    }
})

Vue.prototype.$http = ax

Vue.use(Vuetify)


document.addEventListener('DOMContentLoaded', () => {
    const app = new Vue({
        el: '#app',
        vuetify: new Vuetify(),
        render: h => h(App)
    }).$mount()
    console.log(app)
})
