// src/routes.js
import { createRouter, createWebHistory } from 'vue-router';


// Importez les composants associés à chaque route
import Home from './views/Home.vue';
import Blog from './views/Blog.vue';
import Motivation from './views/Motivation.vue';
import SalleReseau from './views/SalleReseau.vue';
import Video from './views/Video.vue';
import Propos from './views/Propos.vue';
import SalleDefence from './views/SalleDefence.vue';
import LoginForm from './views/LoginForm.vue';
import Contact from './views/Contact.vue';
import RegisterFrom from './views/RegisterFrom.vue';
import BlogDetail from './views/BlogDetail.vue';
import LoginLayout from './layouts/LoginLayout.vue';
import RegisterLayout from './layouts/RegisterLayout.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/blog', component: Blog },
  { path: '/contact', component: Contact },
  { path: '/motivation', component: Motivation },
  { path: '/sallereseau', component: SalleReseau },
  { path: '/video', component: Video },
  { path: '/blogplus', component: BlogDetail },
  { path: '/salledefence', component: SalleDefence },
  { path: '/propos', component: Propos },
  {
    path: '/auth/login',
    component: LoginForm,
    meta: { layout: LoginLayout, public: false },
  },
  {
    path: '/auth/register',
    component: RegisterFrom,
    meta: { layout: RegisterLayout, public: false }
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;