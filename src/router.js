// src/routes.js
import { createRouter, createWebHistory } from 'vue-router';
import loadingService from '@/services/loadingService';


// Importez les composants associés à chaque route
import Home from './views/Home.vue';
import Blog from './views/Blog.vue';

import Propos from './views/Propos.vue';
import DetailEvents from './views/DetailEvents.vue';
import LoginForm from './views/LoginForm.vue';
import SendMail from './views/SendMail.vue';
import MesEvenement from './views/MesEvenement.vue';
import AddEvents from './views/AddEvents.vue';
import ResetPassword from './views/ResetPassword.vue';

import conditionForum from './views/conditionForum.vue';
import Contact from './views/Contact.vue';

import RegisterFrom from './views/RegisterFrom.vue';
import Profils from './views/Profils.vue';
import BlogDetail from './views/BlogDetail.vue';
import LoginLayout from './layouts/LoginLayout.vue';
import ResetLayout from './layouts/ResetLayout.vue';
import RegisterLayout from './layouts/RegisterLayout.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/evenementPro', component: Blog },

  { path: '/contact', component: Contact },
  { path: '/mesevents', component: MesEvenement },
  { path: '/addevents', component: AddEvents },
  { path: '/detailevents/:id', component: DetailEvents },
  { path: '/evenementEtudiant', component: BlogDetail },


  { path: '/evenementDigitals', component: conditionForum },
  { path: '/propos', component: Propos },


  {
    path: "/profils",
    component: Profils
  },
  {
    path: '/auth/login',
    component: LoginForm,
    meta: { layout: LoginLayout, public: false },
  },
  {
    path: '/auth/password',
    component: SendMail,
    meta: { layout: LoginLayout, public: false },
  },
  { path: '/auth/password/reset', component: ResetPassword, 
  meta: { layout: ResetLayout, public: false },
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
  
  router.beforeEach((to, from, next) => {
    
    loadingService.setLoading(true);
    setTimeout(() => {
      loadingService.setLoading(false);
    }, 1000);
    next();
  });

export default router;