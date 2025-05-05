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
              v-if="demandes.jours === null"
              class="text-lg font-bold text-left mt-0.5"
              :class="{
                'text-green-500': isEventInProgress(demandes.date_debuit),
                'text-yellow-500': isEventUpcoming(demandes.date_debuit),
              }"
            >
              {{ getEventStatus(demandes.date_debuit) }}
            </p>
            <p
              v-if="
                demandes.jours &&
                demandes.jours.toLowerCase() === currentDay.toLowerCase()
              "
              class="text-lg font-bold text-left text-green-500 mt-0.5"
              :class="{
                'text-green-500': isEventInProgress(demandes.date_debuit),
                'text-yellow-500': isEventUpcoming(demandes.date_debuit),
              }"
            >
              Aujourd'hui
            </p>
            <p
              v-if="
                demandes.jours &&
                demandes.jours.toLowerCase() !== currentDay.toLowerCase()
              "
              class="text-lg font-bold text-left mt-0.5 text-yellow-500"
              :class="{
                'text-green-500': isEventInProgress(demandes.date_debuit),
                'text-yellow-500': isEventUpcoming(demandes.date_debuit),
              }"
            >
              À venir
            </p>
          </div>
        </div>
        <div class="items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
          <div class="space-x-2 text-lg">
            <label>
              {{ demandes.description }}
            </label>
          </div>
          <div v-if="demandes.jours === null" class="space-x-2 text-lg">
            <label> {{ demandes.lieu }} à {{ demandes.date_debuit }}</label>
          </div>
          <div v-else class="space-x-2 text-lg">
            <label>
              {{ demandes.lieu }} Tous les {{ demandes.jours }} à
              {{ formatTime(demandes.date_debuit) }}</label
            >
          </div>
        </div>
        <div class="lg:flex space-x-4 mb-6 text-sm font-medium">
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
              <button @click="like(demandes.id)" class="flex text-green-500 mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="ml-2 h-6 w-6 mt-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
              />
            </svg>
            <p class="ml-1 text-lg">{{ demandes.nbr_likes }}</p>
          </button>
          </div>
        <div class=" flex space-x-4 mt-4 lg:mt-0">
          <!-- <button
            class="flex text-lg py-2  focus:outline-none poppins rounded-lg transform transition duration-300 hover:scale-105"
          >
            Partager:
          </button> -->
          
          <button class="mt-2 focus:outline-none poppins transform transition duration-300 hover:scale-105">
            <a @click="shareOnWhatsApp(demandes.id)" >
              <svg
                style="color: rgb(82, 224, 31)"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-whatsapp ml-4"
                viewBox="0 0 16 16"
              >
                <path
                  d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                  fill="#52e01f"
                ></path>
              </svg>
            </a>
          </button>
          <button class="mt-2 focus:outline-none poppins transform transition duration-300 hover:scale-105">
            <a @click="shareOnFacebook(demandes.id)"
              ><svg
                fill="#1877F2"
                viewBox="0 0 24 24"
                class="h-8 w-8 ml-4"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                ></path></svg
            ></a>
          </button>
         </div>
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
      <div class="lg:h-96">
        <div
          v-for="event in commentaires.slice(0, 5)"
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
      <div class="lg:h-52"></div>
      <div class="mt-6 w-full max-w-full lg:mt-96 overflow-hidden shadow-lg">
        <div v-html="demandes.maps" class="w-full h-full"></div>
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
      forme: {
        description: "1",
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
    this.like();
  },
  computed: {
    currentDay() {
      const jours = [
        "Dimanche",
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
      ];
      return jours[new Date().getDay()];
    },
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
          if (this.demandes.maps) {
            this.demandes.maps = this.demandes.maps.replace(
              /width="\d+"/,
              'width="100%"'
            );
          }
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    async like() {
      try {
        this.forme.demande_id = this.$route.params.id;
        const response = await axios.post("/api/likes", this.forme);
        if (response.status === 201 || response.status === 200) {
          this.forme = {};
          this.getdemande();
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
      if (today === eventDate) return "Aujourd'hui";
      if (eventDate > today) return "À venir";
      return "Terminé";
    },
    formatTime(dateString) {
      if (!dateString) return "—"; // Affiche un tiret si vide

      const date = new Date(dateString);

      if (isNaN(date)) return "Date invalide"; // Vérifie que la date est valide

      const options = {
        hour: "2-digit",
        minute: "2-digit",
      };

      return new Intl.DateTimeFormat("fr-FR", options).format(date);
    },
    shareOnFacebook(id) {
      const urlToShare = `https://api-nouwiwa.api-mon-encadreur.com/partage/${id}`;
      const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        urlToShare
      )}`;
      window.open(facebookShareUrl, "_blank");
    },

    shareOnWhatsApp(id) {
      // const urlToShare = window.location.href;
      const urlToShare = `https://api-nouwiwa.api-mon-encadreur.com/partage/${id}`;
      // const imageUrl = this.demandes.image; // Assurez-vous que l'URL est publique et accessible
      // const message = `Regarde ceci ! ${urlToShare}\n\nImage: ${imageUrl}`;
      // const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
      // window.open(whatsappShareUrl, "_blank");
      // const message = `Découvrez cette image incroyable 👇\n\nhttps://bucetwadounou.s3.us-east-1.amazonaws.com/images/1735833494z.jpeg`;
      const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
        urlToShare
      )}`;
      window.open(whatsappUrl, "_blank");
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
