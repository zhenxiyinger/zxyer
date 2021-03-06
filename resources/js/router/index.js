import Vue from 'vue';
import Router from 'vue-router';

import Main from "../components/Main";
import CategoryEdit from "../components/CategoryEdit";
import CategoryList from "../components/CategoryList";

Vue.use(Router);

export default new Router({
    routes: [
        {
            name: 'Main',
            path: '/',
            component: Main,
            children: [
                {path: '/categories/create', component: CategoryEdit},
                {path: '/categories/list', component: CategoryList},
            ]
        }
    ]
});
