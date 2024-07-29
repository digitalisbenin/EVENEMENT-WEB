<template class="bg-white">
  <div class="lg:flex font-sans mt-28 lg:mx-52">
    <div class=" ">
      <template v-if="demandes.is_correct === 1">
        <video class="h-full w-96" :src="demandes.video" controls></video>
      </template>
      <template v-else>
        <img class="h-full w-96" :src="demandes.image" alt="" />
      </template>
    </div>
    <form class="flex-auto p-6">
      <div class="flex flex-wrap">
        <h1 class="flex-auto text-2xl font-semibold text-black">
          {{ demandes.name }}
        </h1>
        <div class="text-lg font-semibold text-green-500">
          {{ demandes.prix }}
        </div>
        <div class="w-full flex-none text-lg font-medium text-green-500 mt-2">
          En cours
        </div>
      </div>
      <div class="items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
        <div class="space-x-2 text-lg">
          <label>
            {{ demandes.description }}
          </label>
        </div>
        <div class="space-x-2 text-lg">
          <label> {{ demandes.lieu }} à {{ demandes.date_debuit }}</label>
        </div>
      </div>
      <div class="flex space-x-4 mb-6 text-sm font-medium">
        <div class="flex-auto flex space-x-4">
          <button
            class="h-10 px-6 font-semibold rounded-md bg-green-700 text-white"
            type="submit"
          >
            Achat ticket
          </button>
          <button
            class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
            type="button"
            @click="callNumber"
          >
            Contacter
          </button>
        </div>
        <button
          class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-red-500 border border-slate-200"
          type="button"
          aria-label="Like"
        >
          <svg width="20" height="20" fill="currentColor" aria-hidden="true">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            />
          </svg>
        </button>
      </div>
      <div
        class="rounded-full p-1 box-border border border-orange-500 bg-white overflow-hidden ring-red-300 focus:ring-4 w-full mt-6 flex items-center py-1"
      >
        <input
          type="text"
          v-model="addform.content"
          class="rounded-full px-4 focus:outline-none w-full"
          placeholder="Votre commentaire ......."
        />

        <button
          @click="comment()"
          class="text-sm bg-green-600 py-2 px-6 rounded-full text-white poppins ring-red-300 focus:ring-4 transition duration-300 hover:scale-105 transform"
        >
          Envoyer
        </button>
      </div>
    </form>
  </div>
  <div class="h-2"></div>
  <div class="h-9"></div>
</template>

<script>
import axios from "axios";
export default {
  name: "Detail",
  data() {
    return {
      addform: {
        content: "",
        demande_id:"",
      },
       addforms: {
        vue: 1,
        demande_id:"",
      },
      demandes: [],
      currentPage: 1,
      itemsPerPage: 5,
      phoneNumber: "",
    };
  },
  mounted() {
    this.getdemande();
    this.vue();
  },

  methods: {
    async getdemande() {
      try {
        const response = await axios.get(
          `/api/demandes/${this.$route.params.id}`
        );
        if (response.data) {
          this.demandes = response.data.data;
          this.phoneNumber = this.demandes.telephone;
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    async comment() {
      try {
        this.addform.demande_id = this.$route.params.id;
        const response = await axios.post("/api/commentaires", this.addform);
        if (response.status === 201 || response.status === 200) {
          this.addform = {};
           this.$router.push("/");
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
     async vue() {
      try {
        this.addforms.demande_id = this.$route.params.id;
        const response = await axios.post("/api/vues", this.addforms);
        if (response.status === 201 || response.status === 200) {
          this.addforms = {};
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
    callNumber() {
      window.location.href = `tel:${this.phoneNumber}`;
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

input:checked {
  background-color: #22c55e; /* bg-green-500 */
}

input:checked ~ span:last-child {
  --tw-translate-x: 1.75rem; /* translate-x-7 */
}
</style>
