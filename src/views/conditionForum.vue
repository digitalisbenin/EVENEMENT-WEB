<template class="bg-white h-full">
<img src="../assets/1005.jpg" alt="" class="" loading="lazy" />
  <div class="bg-gray-900">
    
      <div class="h-9"></div>
       <div class="lg:flex lg:mx-12">
       
       <h1 class="text-white text-3xl font-bold mt-4 lg:mt-0">
        Événement Digitaux
      </h1>
   
      <div class="lg:ml-auto ">
        <div
          class="rounded-full ml-9 lg:ml-0 text-gray-900 p-1 py-2 border border-gray-300 bg-white overflow-hidden ring-red-300 focus:ring-4  mt-4 lg:mt-0 lg:w-96 flex items-center py-1"
        >
          <input
            type="text"
            v-model="filter"
            class="rounded-full px-4 focus:outline-none w-full bg-white text-gray-900"
            placeholder="Rechercher"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 mr-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
      </div>
 <div class="flex flex-wrap lg:mx-12 mt-4">
      <div
        v-for="event in demandes"
        :key="event.id"
        class=" mt-4 transition transform duration-700 hover:shadow-xl hover:scale-105 rounded-lg relative lg:ml-4 px-4"
      >
        <template v-if="event.is_correct === 1">
          <video
            class="transform transition duration-300 hover:scale-105 h-48 w-72 rounded-lg"
            :src="event.video"
            controls
          ></video>
        </template>
        <template v-else>
          <img
            class="transform transition duration-300 hover:scale-105 h-48 w-72 rounded-lg"
            :src="event.image"
            alt=""
          />
        </template>
        <div class="py-5 w-72">
          <p class="mb-2 text-sm flex font-semibold text-white text-left ">
            {{ event.name }} à {{ event.lieu }}
          </p>
          <div class="flex">
            <a class="flex" href="#">
              <p class="mb-2 text-xs font-semibold text-white text-left whitespace-nowrap">
                {{ event.date_debuit }}
              </p>
              <p class="mb-2 text-xs font-semibold text-white text-left ml-16">
                {{ event.montant }}FCFA
              </p>
            </a>
          </div>
          <p class="text-sm font-bold text-left text-green-500 mt-1">
            En cours
          </p>
          <div class="flex mt-2 space-x-2">
            <button class="btn" @click="callNumber( event.telephone)">
              <span>Contacter</span>
            </button>
            <router-link :to="'/detailevents/' + event.id" class="button">
              Détail
              <svg class="cartIcon" viewBox="0 0 576 512">
                <path
                  d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                ></path>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
   
  </div>
</template>
  
<script>
import axios from "axios";
//import spiner from "../components/spiner.vue";
export default {
  name: "App",
  components: {
    //spiner,
 
  },
  data() {
    return {
    addform: {
        user_id: "",
      },
      demandes: [],
      isLoading: false,
    };
  },
   mounted() { 
    this.getdemande();
  },
  methods: {
   async getdemande() {
      try {
        const response = await axios.get(`/api/demandestype?type_demande_id=${1}`);
        if (response.data) {
          this.demandes = response.data.data;
          
        }
      } catch (error) {
        console.log(error.data);
      }
    },
  },
};
</script>
  
<style scoped>

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slider-item {
  animation: slide 15s linear infinite;
}

.carousel img {
  flex-shrink: 0;
  min-width: 100%;
  min-height: 100%;
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
.btn {
  --fancy-button-gradient-0: #8d49fd;
  --fancy-button-gradient-50: #7f56f3;
  --fancy-button-gradient-100: #5691f3;
  --fancy-button-inner-shadow-top: rgba(233, 209, 255, 0.2);
  --fancy-button-inner-shadow-top-lg: rgba(9, 12, 60, 0.1);
  --fancy-button-inner-shadow-bottom: rgba(137, 222, 246, 0.3);
  --fancy-button-shine-top: #e9d1ff;
  --fancy-button-shine-bottom: #adfff9;
  font-family: "Poppins";
  font-weight: 500;
  font-size: 15px;
  line-height: 21px;
  text-shadow: 0px 0.5px 0.5px rgba(0, 0, 0, 0.2);
  padding: 0;
  margin: 0;
  appearance: none;
  border: none;
  outline: none;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  z-index: 1;
  border-radius: 25px;
  color: #fff;
  background-image: linear-gradient(
    to bottom,
    var(--fancy-button-gradient-0) 0%,
    var(--fancy-button-gradient-50) 50%,
    var(--fancy-button-gradient-100) 100%
  );
  box-shadow: 0px 4px 12px rgba(9, 12, 60, 0.15),
    0px 2px 8px rgba(9, 12, 60, 0.15),
    0px 1px 3px var(--fancy-button-inner-shadow-top-lg),
    inset 0px 1px 1px var(--fancy-button-inner-shadow-top),
    inset 0px -1px 3px var(--fancy-button-inner-shadow-bottom);
}

.btn:before,
.btn:after {
  content: "";
  position: absolute;
  border-radius: inherit;
  will-change: transform;
}

.btn:before {
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--fancy-button-shine-top);
  width: 96px;
  height: 6px;
  top: -3px;
  opacity: 0.6;
  filter: blur(6px);
  transition: opacity 0.25s;
}

.btn:after {
  inset: 0;
  background-size: cover;
  z-index: 2;
  opacity: 0.3;
  mix-blend-mode: overlay;
  pointer-events: none;
}

.btn span {
  display: block;
  padding: 12px 24px;
  border-radius: inherit;
  overflow: hidden;
  position: relative;
  background-image: linear-gradient(
    to bottom,
    var(--fancy-button-shine-top),
    transparent 8px
  );
  background-position: 0 -6px;
  background-repeat: no-repeat;
  z-index: 1;
}

.btn span:before,
.btn span:after {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  background-color: var(--fancy-button-shine-bottom);
  transition: opacity 0.25s, transform 0.25s;
  will-change: transform;
}

.btn span:before {
  width: 92px;
  height: 8px;
  bottom: -4px;
  opacity: 0.75;
  filter: blur(6px);
}

.btn span:after {
  width: 112px;
  height: 1px;
  bottom: 0;
  opacity: 0.9;
  filter: blur(1px);
}

.btn:hover span:before {
  opacity: 0.8;
}

.btn:hover span:before {
  transform: translateX(-50%) scale(1.25);
}

.btn:hover span:after {
  opacity: 1;
}

.button {
  width: 180px;
  height: 40px;
  background-image: linear-gradient(rgb(214, 202, 254), rgb(158, 129, 254));
  border: none;
  border-radius: 50px;
  color: rgb(255, 255, 255);
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  box-shadow: 1px 3px 0px rgb(139, 113, 255);
  transition-duration: 0.3s;
}

.cartIcon {
  width: 14px;
  height: fit-content;
}

.cartIcon path {
  fill: white;
}

.button:active {
  transform: translate(2px, 0px);
  box-shadow: 0px 1px 0px rgb(139, 113, 255);
  padding-bottom: 1px;
}
</style>
  