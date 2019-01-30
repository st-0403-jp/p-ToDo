import Vue from 'vue';
import 'normalize.css';
import './styleConfig.scss';
import './style.scss';
import rootComponet from './app/components/root/index.vue';
import headerComponet from './app/components/header/index.vue';
import mainComponet from './app/components/main/index.vue';
import todoListComponet from './app/components/todoList/index.vue';
import addTodoItemComponet from './app/components/add-todoItem/index.vue';

Vue.component('app-root', rootComponet);
Vue.component('app-header', headerComponet);
Vue.component('app-main', mainComponet);
Vue.component('app-todoList', todoListComponet);
Vue.component('app-add-todoItem', addTodoItemComponet);

// font-awesome
import 'vue-awesome/icons/flag';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon.vue';

Vue.component('v-icon', Icon)

new Vue({
    el: '#app-root'
});
