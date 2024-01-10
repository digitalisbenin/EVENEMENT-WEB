<template>
  <div class="">
    <div class="relative w-full">
      <img class="w-full h-3/4" src="../assets/concept-controle.jpg" alt="" />
      <div class="absolute top-24 left-24 text-white p-4">
        <h1 class="text-4xl font-mono text-left">Notre<br />Mission</h1>
        <hr class="border-2 border-white my-4 mr-80" />
        <div class="font-serif text-left mt-2">
          <p class="text-3xl">
            Changer votre vie grâce à une<br />
            formation et un enseignement<br />
            abordable.
          </p>
          <p class="text-3xl mt-2">
            Faire évoluer votre carrière dans<br />
            le domaine des technologies<br />
            et de l'information.
          </p>
        </div>
      </div>
      <div
        class="absolute bottom-72 left-1/2 transform -translate-x-1/2 text-white p-4 text-6xl text-center font-mono w-full"
      >
        Prêt à devenir <br />un meilleur ingénieur<br />
        en sécurité réseau ?
      </div>

      <div
        class="flex absolute -bottom-32 text-black p-4 h-64 mx-64 font-sans text-4xl text-center"
      >
        <div class="bg-white mt-6 ml-6 rounded-2xl">
          <p class="ml-9 mr-9 mt-9">
            VOUS TROUVEREZ ICI DES TUTORIAUX GRATUITS QUI VOUS PERMETTRONT
            D'ACQUÉRIR DE NOUVELLES COMPÉTENCES.
          </p>
        </div>
      </div>
    </div>

    <div class="bg-blue-900 h-screen">
      <div class="h-44"></div>
      <div class="mx-72">
        <div class="flex mt-4">
          <div class="justify-start">
            <img
              class="object-cover w-16 h-16 rounded-full"
              src="../assets/checklist.png"
            />
          </div>

          <a href="#" class="text-xl font-sans text-white mt-4 text-left ml-6"
            >Si vous êtes un débutant absolu, c'est parfait !
          </a>
        </div>
        <div class="flex mt-4">
          <div class="justify-start">
            <img
              class="object-cover w-16 h-16 rounded-full"
              src="../assets/checklist.png"
            />
          </div>

          <a href="#" class="text-xl font-sans text-white mt-4 text-left ml-6"
            >Nous avons des cours destinés à vous aider à démarrer.
          </a>
        </div>
        <div class="flex mt-4">
          <div class="justify-start">
            <img
              class="object-cover w-16 h-16 rounded-full"
              src="../assets/checklist.png"
            />
          </div>

          <a href="#" class="text-xl font-sans text-white mt-4 text-left ml-6"
            >Vous souhaitez acquérir des compétences plus avancées ? C'est
            parfait !
          </a>
        </div>
        <div class="flex mt-4">
          <div class="justify-start">
            <img
              class="object-cover w-16 h-16 rounded-full"
              src="../assets/checklist.png"
            />
          </div>

          <a href="#" class="text-xl font-sans text-white mt-4 text-left ml-6"
            >Nous avons des tutoriaux qui vous permettent de passer au niveau
            supérieur
          </a>
        </div>
        
      </div>
      
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
