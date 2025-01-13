import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Add the icons to the library
library.add(fas);

const baseURL = "127.0.0.1:8080";

const app = createApp(App);

app.config.globalProperties.$baseURL;

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router).mount('#app');
