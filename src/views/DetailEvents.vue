<template class="bg-white">
  <img src="../assets/dvfsvqsfv.jpg" alt="" class="" loading="lazy" />
  <div class="lg:flex mt-4">
    <div class="lg:w-2/3 font-sans lg:mx-9 mx-6">
      <div class=" ">
        <template v-if="demandes.is_correct === 1">
          <video class="h-1/2 w-full" :src="demandes.video" controls></video>
        </template>
        <template v-else>
          <img class="h-full w-full" :src="demandes.image" alt="" />
        </template>
      </div>
      <form class="flex-auto p-6">
        <div class="flex flex-wrap">
          <h1 class="flex-auto text-2xl font-semibold text-black">
            {{ demandes.name }}
          </h1>
          <div class="text-lg font-semibold text-green-500">
            <p
              v-if="demandes.payement === 1"
              class="mb-2 text-lg font-semibold text-gray-900 text-right"
            >
              {{ demandes.montant }} FCFA
            </p>
            <p
              v-else-if="demandes.payement === 0"
              class="mb-2 text-lg font-semibold text-green-400 text-right"
            >
              Libre
            </p>
            <p
              v-else
              class="mb-2 text-lg font-semibold text-yellow-500 text-right"
            >
              Payant
            </p>
          </div>
          <div class="w-full flex-none text-lg font-medium text-green-500 mt-2">
            <p
              class="text-lg font-bold text-left mt-1"
              :class="{
                'text-green-500': isEventInProgress(demandes.date_debuit),
                'text-yellow-500': isEventUpcoming(demandes.date_debuit),
              }"
            >
              {{ getEventStatus(demandes.date_debuit) }}
            </p>
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
              v-if="demandes.payement === 1"
              class="h-10 px-6 font-semibold rounded-md bg-green-700 text-white"
              @click="redirectToDemandes(demandes.nombre_jour)"
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
      </form>
    </div>
    <div class="lg:w-1/3 border border-gray-300 mx-9 lg:mx-0">
      <h1 class="lg:text-xl text-xl font-bold text-center mt-2">
        Commentaires
      </h1>
      <form
        class="flex-auto p-6"
        action="#"
        method="POST"
        @submit.prevent="comment"
      >
        <!-- Champ 'name' -->
        <div
          class="rounded-lg p-1 box-border border border-orange-500 bg-white overflow-hidden ring-red-300 focus:ring-4 w-full mt-6 flex items-center py-1"
        >
          <input
            type="text"
            v-model="addform.name"
            class="rounded-lg px-4 focus:outline-none w-full"
            placeholder="Votre nom ......."
          />
        </div>

        <!-- Champ 'content' -->
        <div
          class="rounded-lg p-1 box-border border border-orange-500 bg-white overflow-hidden ring-red-300 focus:ring-4 w-full mt-6 flex items-center py-1"
        >
          <input
            type="text"
            v-model="addform.content"
            class="rounded-lg px-4 focus:outline-none w-full"
            placeholder="Votre commentaire ......."
          />
        </div>

        <!-- Bouton 'Envoyer' -->
        <button
          class="text-sm bg-green-600 py-2 px-6 rounded-lg text-white poppins ring-red-300 focus:ring-4 transition duration-300 hover:scale-105 transform mt-4"
        >
          Envoyer
        </button>
      </form>

      <div
        v-for="event in commentaires.slice(0, 8)"
        :key="event.id"
        class="ml-6"
      >
        <div class=" ">
          <p class="mb-2 text-lg flex font-semibold text-gray-900 text-left">
            <img
              class="rounded-full w-6 h-6"
              src="../assets/c972ce3d5e2f4ea3d8d0b83ef3423dd1.png"
              alt=""
            />
            <span class="ml-2">{{ event.name }} :</span>
            <span class="ml-2"> {{ event.content }} </span>
          </p>
        </div>
      </div>
    </div>
  </div>
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
        demande_id: "",
        name: "",
        status: "masquer",
      },
      addforms: {
        vue: 1,
        demande_id: "",
      },
      demandes: [],
      currentPage: 1,
      itemsPerPage: 5,
      phoneNumber: "",
      commentaires: [],
    };
  },
  mounted() {
    this.getdemande();
    this.getCommentaire();
    this.vue();
  },

  methods: {
    redirectToDemandes(id) {
      window.location.href = id;
    },
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
    async getCommentaire() {
      try {
        const response = await axios.get(
          `/api/getcommentaires?demande_id=${this.$route.params.id}`
        );
        if (response.data) {
          this.commentaires = response.data.data;
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
          console.log(this.addform);

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
    formatDateTime(dateString) {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };

      const date = new Date(dateString);

      return new Intl.DateTimeFormat("fr-FR", options).format(date);
    },
    callNumber() {
      window.location.href = `tel:${this.phoneNumber}`;
    },
    parseDateToISO(dateString) {
      if (!dateString) return null; // Si la date est null ou indéfinie
      const isoDateString = dateString.replace(" ", "T"); // Remplace l'espace par 'T'
      const parsedDate = new Date(isoDateString);
      if (isNaN(parsedDate)) {
        console.error(`Date invalide : ${dateString}`);
        return null;
      }
      return parsedDate.toISOString().split("T")[0]; // Retourne uniquement la partie date (AAAA-MM-JJ)
    },
    isEventInProgress(date_debuit) {
      const today = new Date().toISOString().split("T")[0]; // Date du jour (AAAA-MM-JJ)
      const eventDate = this.parseDateToISO(date_debuit); // Formate correctement la date
      if (!eventDate) return false; // Si la date est invalide
      return today === eventDate; // Compare uniquement les dates
    },
    isEventUpcoming(date_debuit) {
      const today = new Date().toISOString().split("T")[0]; // Date du jour (AAAA-MM-JJ)
      const eventDate = this.parseDateToISO(date_debuit); // Formate correctement la date
      if (!eventDate) return false; // Si la date est invalide
      return eventDate > today; // Compare uniquement les dates
    },
    getEventStatus(date_debuit) {
      const today = new Date().toISOString().split("T")[0]; // Date du jour (AAAA-MM-JJ)
      const eventDate = this.parseDateToISO(date_debuit); // Formate correctement la date
      if (!eventDate) return "Date invalide"; // Si la date est invalide
      if (today === eventDate) return "En cours";
      if (eventDate > today) return "À venir";
      return "Terminé";
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
