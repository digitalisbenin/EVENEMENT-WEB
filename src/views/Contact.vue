<template>
  <div class="bg-slate-800" id="contact">
        <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div class="mb-4 ">
                <div class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12 ">
                    <p class="text-base font-semibold h-9 uppercase tracking-wide text-blue-600">
                        
                    </p>
                    <h2
                        class="font-heading mb-4 font-bold tracking-tight text-gray-900 text-white text-3xl sm:text-5xl">
                        Contact
                    </h2>
                    <p class="mx-auto mt-4 max-w-3xl text-xl text-gray-600 text-white">
                    </p>
                </div>
            </div>
            <div class="flex items-stretch justify-center">
                <div class="grid md:grid-cols-2">
                    <div class="h-full pr-6">
                        <p class="mt-3 mb-12 text-lg text-gray-600 text-white">
                            
                        </p>
                        <ul class="mb-6 md:mb-0">
                            <li class="flex">
                                <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="h-6 w-6">
                                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                        <path
                                            d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                        </path>
                                    </svg>
                                </div>
                                <div class="ml-4 mb-4">
                                    <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 text-white"> Address
                                    </h3>
                                    <p class="text-gray-600 text-white">IITA ,Immeuble à droite près de l'églises des Assemblées de Dieu</p>
                                    <p class="text-gray-600 text-white">Calavi, Togoudo</p>
                                </div>
                            </li>
                            <li class="flex">
                                <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="h-6 w-6">
                                        <path
                                            d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                        </path>
                                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                                    </svg>
                                </div>
                                <div class="ml-4 mb-4">
                                    <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 text-white">Contact
                                    </h3>
                                    <p class="text-gray-600 text-white">Mobile:(+229) 94863786</p>
                                    <p class="text-gray-600 text-white">Mail: evenement@wadounnou.com</p>
                                </div>
                            </li>
                            <li class="flex">
                                <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="h-6 w-6">
                                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                        <path d="M12 7v5l3 3"></path>
                                    </svg>
                                </div>
                                <div class="ml-4 mb-4">
                                    <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 text-white">
                                        Heure d'ouverture</h3>
                                    <p class="text-gray-600 text-white">Lundi - Vendredi: 08:00 - 19:00</p>

                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="card h-fit max-w-6xl p-5 md:p-12" id="form">
                        <h2 class="mb-4 text-2xl font-bold text-white">Ready to Get Started?</h2>
                        <form id="contactForm" @submit.prevent="submitForm">
                            <div class="mb-6">
                                <div class="mx-0 mb-1 sm:mb-4">
                                    <div class="mx-0 mb-1 sm:mb-4">
                                        <label for="name" class="pb-1 text-xs uppercase tracking-wider"></label><input v-model="formData.name" type="text" id="name" autocomplete="given-name" placeholder="Votre nom" class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" name="name">
                                    </div>
                                    <div class="mx-0 mb-1 sm:mb-4">
                                        <label for="email" class="pb-1 text-xs uppercase tracking-wider"></label><input v-model="formData.email" type="email" id="email" autocomplete="email" placeholder="E-mail" class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" name="email">
                                    </div>
                                </div>
                                <div class="mx-0 mb-1 sm:mb-4">
                                    <label for="textarea" class="pb-1 text-xs uppercase tracking-wider"></label><textarea v-model="formData.message" id="textarea" name="textarea" cols="30" rows="5" placeholder="Votre message..." class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"></textarea>
                                </div>
                            </div>
                            <div class="text-center">
                                <button type="submit" class="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Envoyer</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

  <!-- Composant de modal -->
  <ModalComponent :isOpen="isModalOpen" @close="closeModal" />
</template>

<script>
import ModalComponent from "../components/ModalComponent .vue";
//import spiner from "../components/spiner.vue";
import axios from 'axios';
export default {
  name: "App",
  components: {
    ModalComponent,
    //spiner
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      isModalOpen: false,
      isLoading: false,
    };
  },
 
  methods: {
   
    submitForm() {
      this.isLoading = true;
      axios.post('/api/sendemail', this.formData)
        .then(response => {
          this.formData={},
           this.$router.push("/");
          this.isLoading = false;
          console.log(response.data);
        })
        .catch(error => {
         this.isLoading = false;
          console.error(error);
        });
    }
  },
};
</script>

<style scoped>
.custom-background2 {
  /* Remplacez 'votre-image.jpg' par le nom de votre image */
  background-size: cover;
  /* Ajustez la taille de l'image */
  background-repeat: no-repeat;
  background-position: center center;
  /* Centrez l'image */
  /* Ajoutez d'autres styles Tailwind CSS ou CSS personnalisés au besoin */
}
/* Ajoutez des styles personnalisés pour le slider ici */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slider-item {
  animation: slide 15s linear infinite;
}

@keyframes slide {
  0%,
  100% {
    transform: translateX(0%);
  }

  25% {
    transform: translateX(-100%);
  }

  50% {
    transform: translateX(-200%);
  }

  75% {
    transform: translateX(-300%);
  }
}
</style>
