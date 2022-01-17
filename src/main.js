import { createApp } from 'vue'
import App from './App.vue'
import DillyUI from '@/dilly-ui';

let app = createApp(App);
app.config.devtools = true
app.use(DillyUI).mount('#app');