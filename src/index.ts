import Vue from 'vue';
import 'normalize.css';
import './style.css';
import rootComponet from './app/components/root/index.vue';
import headerComponet from './app/components/header/index.vue';

Vue.component('app-root', rootComponet);
Vue.component('app-header', headerComponet);

new Vue({
    el: '#app-root'
});
