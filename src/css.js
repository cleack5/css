import { createApp } from 'vue';
import App from './Css.vue';
import router from './router/css/css';

createApp(App)
  .use(router)
  .mount('#app');
