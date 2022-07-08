import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/font.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

// font-awesome配置
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCheck, faTrash, faXmark);

// createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(store).use(router).mount('#app')
createApp(App).use(store).use(router).mount('#app')
document.body.style.backgroundColor = 'lightpink'; // 设置背景颜色
