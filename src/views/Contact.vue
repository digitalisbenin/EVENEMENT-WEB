<template>
  <div class="bg-blue-800">
    <div class="relative text-center mx-64 text-white">
      <h1 class="text-6xl font-mono">Contactez<br />nous !</h1>
      <div class="flex mt-16 justify-center items-center">
        <div class="bg-purple-900 rounded-full h-16 w-16 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="ml-3 mt-3 w-9 h-9"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
        </div>

        <a href="#" class="text-xl font-medium text-white  text-left ml-6"
          >support@csetrainings.com
        </a>
      </div>
      <div class="mt-24 text-center mx-auto">
        <p class="text-4xl text-white font-mono">Plus de questions ?</p>
        <p class="text-lg text-white font-serif mt-4 mx-32">
          Si vous avez d'autres problèmes ou des questions non liées aux
          tutoriaux, envoyez-nous un courriel à l'adresse support@csetrainings.com
          pour toute autre question. Nous répondons généralement dans un délai
          de 1 à 3 jours ouvrable
        </p>
        <form class=" mt-6">
          <div class="mb-4">
            <div class="mb-6">
              <input
                class="shadow appearance-none border mt-4 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                placeholder="Nom"
              />
            </div>
            <div class="mb-6">
              <input
                class="shadow appearance-none border mt-4 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                placeholder="E-mail"
              />
            </div>
            <textarea
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="question"
              name="question"
              placeholder="Message"
              rows="4"
            ></textarea>
          </div>

          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
      <div class="h-9"></div>
    </div>
  </div>

  <!-- Composant de modal -->
  <ModalComponent :isOpen="isModalOpen" @close="closeModal" />
</template>

<script>
import ModalComponent from "../components/ModalComponent .vue";

export default {
  name: "App",
  components: {
    ModalComponent,
  },
  data() {
    return {
      isModalOpen: false,
    };
  },
  mounted() {
    this.startSlider();
  },
  methods: {
    startSlider() {
      setInterval(() => {
        this.currentImage = (this.currentImage + 1) % this.images.length;
      }, 5000); // Défilement toutes les 5 secondes
    },
    openModal() {
      this.isModalOpen = true; // Ouvrir le modal
    },
    closeModal() {
      this.isModalOpen = false; // Fermer le modal
    },
  },
};
</script>

<style scoped>
.custom-background2 {
  background-image: url("~@/assets/degrade.jpg");
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
