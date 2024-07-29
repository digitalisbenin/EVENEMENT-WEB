<template>
  <div class="bg-slate-800">
    

    <div
      class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 bg-gray-400"
    >
      <div class="flex flex-col lg:flex-row justify-between gap-8">
        <div class="w-full lg:w-5/12 flex flex-col justify-center">
          <h1
            class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 text-white pb-4"
          >
            A props de nous
          </h1>
          <p class="font-normal text-base leading-6 text-gray-600 text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.In the first place we have granted to God, and
            by this our present charter confirmed for us and our heirs forever
            that the English Church shall be free, and shall have her rights
            entire, and her liberties inviolate; and we will that it be thus
            observed; which is apparent from
          </p>
        </div>
        <div class="w-full lg:w-8/12">
          <img
            class="w-full h-full"
            src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
            alt="A group of People"
          />
        </div>
      </div>

      <div class="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div class="w-full lg:w-5/12 flex flex-col justify-center">
          <h1
            class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 text-white pb-4"
          >
            Our Story
          </h1>
          <p class="font-normal text-base leading-6 text-gray-600 text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.In the first place we have granted to God, and
            by this our present charter confirmed for us and our heirs forever
            that the English Church shall be free, and shall have her rights
            entire, and her liberties inviolate; and we will that it be thus
            observed; which is apparent from
          </p>
        </div>
        <div class="w-full lg:w-8/12 lg:pt-8">
          <div
            class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md"
          >
            <div class="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                class="md:block hidden"
                src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                alt="Alexa featured Image"
              />
              <img
                class="md:hidden block"
                src="https://i.ibb.co/zHjXqg4/Rectangle-118.png"
                alt="Alexa featured Image"
              />
              <p
                class="font-medium text-xl leading-5 text-gray-800 text-white mt-4"
              >
                Alexa
              </p>
            </div>
            <div class="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                class="md:block hidden"
                src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                alt="Olivia featured Image"
              />
              <img
                class="md:hidden block"
                src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
                alt="Olivia featured Image"
              />
              <p
                class="font-medium text-xl leading-5 text-gray-800 text-white mt-4"
              >
                Olivia
              </p>
            </div>
            <div class="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                class="md:block hidden"
                src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
                alt="Liam featued Image"
              />
              <img
                class="md:hidden block"
                src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
                alt="Liam featued Image"
              />
              <p
                class="font-medium text-xl leading-5 text-gray-800 text-white mt-4"
              >
                Liam
              </p>
            </div>
            <div class="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                class="md:block hidden"
                src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                alt="Elijah featured image"
              />
              <img
                class="md:hidden block"
                src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
                alt="Elijah featured image"
              />
              <p
                class="font-medium text-xl leading-5 text-gray-800 text-white mt-4"
              >
                Elijah
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="pt-12 pb-12 bg-red-50">
      <div
        class="container flex items-center justify-center p-6 mx-auto bg-white shadow-lg sm:p-12 md:w-1/2"
      >
        <div class="w-full">
          <h1
            class="mb-4 text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
          >
            Votre avis
          </h1>

          <div class="">
            <textarea
              name=""
              id=""
              v-model="addforms.content"
              rows="8"
              cols="30"
              class="w-full p-3 text-base border rounded-md focus:border-green-400 focus:outline-none focus:ring-1 focus:ring-green-600"
              placeholder=" Votre message"
            ></textarea>
          </div>
          <button
            class="px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-green"
            @click="AddAvis()"
          >
            Envoyer
          </button>
        </div>
      </div>
    </section>
  </div>
  <!-- Composant de modal -->
  <ModalComponent :isOpen="isModalOpen" @close="closeModal" />
</template>

<script>
import ModalComponent from "../components/ModalComponent .vue";
import axios from "axios";
import Noty from "noty";
import "noty/lib/noty.css";
import "noty/lib/themes/mint.css";
export default {
  name: "App",
  components: {
    ModalComponent,
  },
  data() {
    return {
      isModalOpen: false,
      addforms: {
        content: "",
        status: "En attente",
      },
    };
  },
  mounted() {
    //this.startSlider();
  },
  methods: {
    async AddAvis() {
      try {
        this.addforms.demande_id = this.$route.params.id;
        const response = await axios.post("/api/temoingnages", this.addforms);
        if (response.status === 201 || response.status === 200) {
          this.addforms = {};
          this.$router.push("/");
          new Noty({
            type: "success",
            layout: "topRight",
            text: "Merci, pour votre temoignage.",
            timeout: 5000,
          }).show();
        }
      } catch (error) {
        if (error.response.status !== 500) {
          this.showAlert = true;
          this.alert.message =
            "Quelque chose s'est mal passé. Merci d'essayer plus tard !";
          setTimeout(() => {
            this.showAlert = false;
          }, 5000);
        }
      }
    },
  },
};
</script>
<style scoped>
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
