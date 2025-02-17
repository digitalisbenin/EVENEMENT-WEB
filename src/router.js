// src/routes.js
import { createRouter, createWebHistory } from 'vue-router';
import loadingService from '@/services/loadingService';


// Importez les composants associés à chaque route
import Home from './views/Home.vue';
import Blog from './views/Blog.vue';
import EvenTernimer from './views/EvenTernimer.vue';
import EvenementEncours from './views/EvenementEncours.vue';
import EvenementCategorieEncours from './views/EvenementCategorieEncours.vue';
import EventCategorieTerminer from './views/EventCategorieTerminer.vue';
import UpdateEvent from './views/UpdateEvent.vue';
import Propos from './views/Propos.vue';
import Show from './views/Show.vue';
import Foire from './views/Foire.vue';
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
  { path: '/concert/:id', component: Blog },
  { path: '/shows/:id', component: Show },
  { path: '/eventcategorieterminer/:id', component: EventCategorieTerminer },
  { path: '/eventcategoriencours/:id', component: EvenementCategorieEncours },
  { path: '/foires/:id', component: Foire },
  { path: '/contact', component: Contact },
  { path: '/mesevents', component: MesEvenement },
  { path: '/addevents', component: AddEvents },
  { path: '/updatevents/:id', component: UpdateEvent },
  { path: '/detailevents/:id', component: DetailEvents },
  { path: '/autres', component: BlogDetail },
  { path: '/eventsterminer', component: EvenTernimer },
  { path: '/eventsencours', component: EvenementEncours },


  { path: '/promotions/:id', component: conditionForum },
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
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition; // Restaure la position sauvegardée (utile pour "Précédent"/"Suivant").
      } else {
        return { top: 0 }; // Défile jusqu'en haut pour chaque nouvelle navigation.
      }
    },
  });
  
  router.beforeEach((to, from, next) => {
    
    loadingService.setLoading(true);
    setTimeout(() => {
      loadingService.setLoading(false);
    }, 1000);
    next();
  });

export default router;