<template>
  <div class="">
    <div class="relative w-full">
      <img class="w-full" src="../assets/Perso.png" alt="" />
      <div class="absolute top-64 left-24 text-white p-4">
        <h1 class="text-4xl font-mono text-left">
          Commencez à <br />apprendre <br />
          aujourd'hui
        </h1>
        <div class="text-2xl font-serif text-left mt-2">
          <span class="bg-blue-400 rounded-lg px-2"
            >et changer votre avenir !</span
          >
        </div>
      </div>
    </div>
    <div class="relative w-full">
      <div class="flex absolute top-0 left-0 text-blue-600 p-4">
        <div class="w-1/3">
          <img class="w-full ml-6" src="../assets/Pc.png" alt="" />
        </div>
        <div class="w-2/3">
          <h1 class="text-4xl font-serif text-left ml-9 mt-9">
            DEVENEZ MEMBRE DÈS AUJOURD’HUI EN VOUS INSCRIVANT DANS LA
            COMMUNAUTÉ.
          </h1>
          <div class="h-24 mt-12 ml-9 mr-4">
            <video-player
              :autoplay="true"
              :width="yourWidthVariable" 
              :height="yourHeightVariable" 
              src="http://test.csetrainings.com/WhatsApp%20Video%202023-12-30%20at%2002.17.19.mp4"
              controls
              :loop="true"
              :volume="0.6"
              
            />
            
          </div>
          <div class="text-left ml-32 mt-32 text-white">
            <h1 class="text-4xl font-mono">NOS VIDÉOS</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="custom-background2 mt-72">
      <div class="relative w-full">
        <div class="flex absolute top-0 left-0 text-white p-4">
          <div class="bg-purple-900 w-1/3 mt-6 ml-6 rounded-2xl">
            <p class="ml-9 mr-9 mt-4">
              Patrick Tahou fournit une variété de tutorial, matériel
              d’apprentissage / d’étude : préparation aux examens CCNA R&S, CCNA
              Security, JNCIA-junos, NSE4, automatisation des réseaux, Linux,
              SDN, GNS3, Packet Tracer, Defensive security, Offensive security
              et plus encore.
            </p>
          </div>
          <div class="w-2/3"></div>
        </div>
      </div>
      <div class="h-9">
        <h1 class="text-4xl font-serif"><span></span></h1>
      </div>
      <div class="flex mx-12 mt-80">
        <div
          class="h-48 mt-4 transition transform duration-700 hover:shadow-xl hover:scale-105 rounded-lg relative ml-4 w-1/4"
        >
          <img
            class="transform transition duration-300 hover:scale-105 h-48 rounded-lg"
            src="../assets/css.jpeg"
            alt=""
          />
          <div class="flex flex-col text-left my-3 space-y-2 mx-2">
            <h2 class="text-white text-2xl font-bold">1500 FCFA</h2>
            <p class="text-white text-justify text-sm text-center">
              Lorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet,
              consecteLorem ipsum dolor sit amet, consecte
            </p>
          </div>
        </div>
        <div
          class="ml-4 transition transform duration-700 mt-4 hover:shadow-xl hover:scale-105 rounded-lg relative w-1/4"
        >
          <img
            class="transform transition duration-300 hover:scale-105 rounded-lg h-48"
            src="../assets/js.jpeg"
            alt=""
          />
          <div class="flex flex-col text-white text-left my-3 space-y-2 mx-2">
            <h2 class="poppins text-2xl font-bold">1800 FCFA</h2>
            <p class="text-justify poppins text-sm text-center">
              Lorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet,
              consecteLorem ipsum dolor sit amet, consecte
            </p>
          </div>
        </div>
        <div
          class="h-48 ml-4 transition transform duration-700 hover:shadow-xl mt-4 hover:scale-105 rounded-lg relative w-1/4"
        >
          <img
            class="transform transition duration-300 hover:scale-105 rounded-lg h-48"
            src="../assets/mysql.jpg"
            alt=""
          />
          <div class="flex flex-col text-left my-3 space-y-2 mx-2">
            <h2 class="text-white poppins text-2xl font-bold">2500 FCFA</h2>
            <p class="text-white text-justify text-sm text-center">
              Lorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet,
              consecteLorem ipsum dolor sit amet, consecte
            </p>
          </div>
        </div>
        <div
          class="transition transform duration-700 hover:shadow-xl mt-4 hover:scale-105 rounded-lg relative ml-4 w-1/4"
        >
          <img
            class="transform transition duration-300 hover:scale-105 h-48 rounded-lg"
            src="../assets/php.png"
            alt=""
          />
          <div class="flex flex-col text-left my-3 space-y-2 mx-2">
            <h2 class="text-white text-2xl font-bold">1500 FCFA</h2>
            <p class="text-white text-justify text-sm text-center">
              Lorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet,
              consecteLorem ipsum dolor sit amet, consecte
            </p>
          </div>
        </div>
      </div>
      <div class="flex mt-4 mx-12">
        <div
          class="mt-4 transition transform duration-700 hover:shadow-xl hover:scale-105 rounded-lg relative ml-4 w-1/4"
        >
          <img
            class="transform transition duration-300 hover:scale-105 h-48 rounded-lg"
            src="../assets/css.jpeg"
            alt=""
          />
          <div class="flex flex-col text-left my-3 space-y-2 mx-2">
            <h2 class="text-white text-2xl font-bold">1500 FCFA</h2>
            <p class="text-white text-justify text-sm text-center">
              Lorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet,
              consecteLorem ipsum dolor sit amet, consecte
            </p>
          </div>
        </div>
        <div
          class="ml-4 transition transform duration-700 mt-4 hover:shadow-xl hover:scale-105 rounded-lg relative w-1/4"
        >
          <img
            class="transform transition duration-300 hover:scale-105 rounded-lg h-48"
            src="../assets/js.jpeg"
            alt=""
          />
          <div class="flex flex-col text-white text-left my-3 space-y-2 mx-2">
            <h2 class="poppins text-2xl font-bold">1800 FCFA</h2>
            <p class="text-justify poppins text-sm text-center">
              Lorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet,
              consecteLorem ipsum dolor sit amet, consecte
            </p>
          </div>
        </div>
        <div
          class="ml-4 transition transform duration-700 hover:shadow-xl mt-4 hover:scale-105 rounded-lg relative w-1/4"
        >
          <img
            class="transform transition duration-300 hover:scale-105 rounded-lg h-48"
            src="../assets/mysql.jpg"
            alt=""
          />
          <div class="flex flex-col text-left my-3 space-y-2 mx-2">
            <h2 class="text-white poppins text-2xl font-bold">2500 FCFA</h2>
            <p class="text-white text-justify text-sm text-center">
              Lorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet,
              consecteLorem ipsum dolor sit amet, consecte
            </p>
          </div>
        </div>
        <div
          class="transition transform duration-700 hover:shadow-xl mt-4 hover:scale-105 rounded-lg relative ml-4 w-1/4"
        >
          <img
            class="transform transition duration-300 hover:scale-105 h-48 rounded-lg"
            src="../assets/php.png"
            alt=""
          />
          <div class="flex flex-col text-left my-3 space-y-2">
            <h2 class="text-white text-2xl font-bold">1500 FCFA</h2>
            <p class="text-white text-justify text-sm text-center">
              Lorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet,
              consecteLorem ipsum dolor sit amet, consecte
            </p>
          </div>
        </div>
      </div>

      <div class="bg-purple-900">
        <div class="h-2 bg-purple-900"></div>
        <div class="my-16 text-center">
          <h2 class="text-3xl font-mono text-white">TEMOIGNAGES</h2>
        </div>
        <div class="grid gap-2 lg:grid-cols-3 mx-9 mt-6">
          <div class="max-w-md p-4 border border-white rounded-3xl shadow-lg">
            <div>
              <p class="mt-2 text-white text-left text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                dolores deserunt ea doloremque natus error, rerum quas odio
                quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                minus consequuntur!
              </p>
            </div>
            <div class="flex mt-4">
              <div class="justify-start">
                <img
                  class="object-cover w-16 h-16 border-2 border-green-500 rounded-full"
                  src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                />
              </div>

              <a
                href="#"
                class="text-xl font-medium text-white mt-4 text-left ml-6"
                >John Doe <br />
                <spam class="text-sm">Eleve Tle Scientifique</spam></a
              >
            </div>
          </div>
          <div class="max-w-md p-4 border border-white rounded-lg shadow-lg">
            <div>
              <p class="mt-2 text-white text-left text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                dolores deserunt ea doloremque natus error, rerum quas odio
                quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                minus consequuntur!
              </p>
            </div>
            <div class="flex mt-4">
              <div class="justify-start">
                <img
                  class="object-cover w-20 h-20 border-2 border-green-500 rounded-full"
                  src="https://cdn.pixabay.com/photo/2018/01/04/21/15/young-3061652__340.jpg"
                />
              </div>

              <a
                href="#"
                class="text-xl font-medium text-white mt-4 text-left ml-6"
                >John Doe <br />
                <spam class="text-sm">Eleve Tle Scientifique</spam></a
              >
            </div>
          </div>
          <div class="max-w-md p-4 border border-white rounded-lg shadow-lg">
            <div>
              <p class="mt-2 text-white text-sm text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                dolores deserunt ea doloremque natus error, rerum quas odio
                quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                minus consequuntur!
              </p>
            </div>
            <div class="flex mt-4">
              <div class="justify-start">
                <img
                  class="object-cover w-20 h-20 border-2 border-green-500 rounded-full"
                  src="https://cdn.pixabay.com/photo/2018/01/18/17/48/purchase-3090818__340.jpg"
                />
              </div>

              <a
                href="#"
                class="text-xl font-medium text-white mt-4 text-left ml-6"
                >John Doe <br />
                <spam class="text-sm">Eleve Tle Scientifique</spam></a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="h-6 bg-purple-900"></div>
    </div>
  </div>
  <!-- Composant de modal -->
  <ModalComponent :isOpen="isModalOpen" @close="closeModal" />
</template>

<script>
import ModalComponent from "../components/ModalComponent .vue";
import { VideoPlayer } from "@videojs-player/vue";
import "video.js/dist/video-js.css";

export default {
  name: "App",
  components: {
    ModalComponent,
    VideoPlayer,
  },
  data() {
    return {
      isModalOpen: false,
      yourWidthVariable: '700%', // Ajoutez la valeur de la largeur souhaitée ici
      yourHeightVariable: '300%',
      
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
  background-image: url("~@/assets/fond.jpg");
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
