import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import "./index.css";
import store from "./store";
import Pusher from "pusher-js";
import Echo from "laravel-echo";
import { VueRecaptchaPlugin } from 'vue-recaptcha-v3';
import ApiService from "./services/api.service";
import TokenService from "./services/storage.service";

Pusher;

ApiService.init("https://evenement.wadounnou.com/");
if (TokenService.getToken()) {
  ApiService.setHeader();
}

window.Echo = new Echo({
  auth: {
    headers: {
      Authorization: `Bearer ${TokenService.getToken()}`,
    },
  },
});

createApp(App)
.use(VueRecaptchaPlugin, {
  siteKey: '6LdXFwwqAAAAADBJ53eIUzO87nBYHTt8rUWk5D5Y',
})
.use(store)
.use(router)
.mount('#app')
