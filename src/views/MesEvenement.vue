<template>
  <div class="overflow-x-auto shadow-md sm:rounded-lg bg-white p-4 mt-9">
    <div class="flex items-center justify-between pb-4">
      <label for="table-search" class="sr-only">Rechercher</label>
      <div class="relative hidden md:block">
        <div
          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
        >
          <svg
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="table-search"
          wire:model="search"
          class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Rechercher ..."
        />
      </div>
      <div>
        <router-link to="/addevents">
          <button
            class="inline-flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Ajouter un evenement
          </button>
        </router-link>
      </div>
    </div>
    <div class="flex" v-for="(book, index) in filteredBooks" :key="index">
      <div class="w-full">
        <div class="bg-gray-800 max-h-52 overflow-y-auto rounded-lg mt-4">
          <div class="h-6"></div>
          <div>
            <div class="flex">
              <div class="flex">
                <img
                  class="w-32 h-40 transform transition duration-300 hover:scale-105 relative ml-9"
                  :src="book.image"
                  alt=""
                />

                <div class="">
                  <p class="text-white text-lg font-bold ml-4 text-left">
                    {{ book.name }}
                  </p>

                  <p class="text-white mt-2 text-lg font-bold ml-4 text-left">
                    {{ book.status }}
                  </p>

                  <p
                    class="text-white mt-2 text-lg font-sans ml-4 text-left whitespace-nowrap lg:hidden"
                  >
                    Assurez-vous d'avoir rempli toutes les conditions listées
                    dans la page de histoire
                  </p>
                </div>
              </div>

              <div v-if=" book.status !=='valider'" class="flex ml-auto text-white">
                <router-link   :to="'/updatevents/' + book.id"
                  class="text-green-500 font-medium mb-32"
                  
                >
                  <span class="flex p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 pr-2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                    Modifier
                  </span>
                </router-link>
                <button
                  class="text-red-500 font-medium mb-32"
                  @click="deleteBookModal(book.id)"
                >
                  <span class="flex p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6 pr-2"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Supprimer
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <DeleteModalFooter
    width="w-full md:w-2/3 lg:w-1/3"
    :is-open="showDeleteRepasModal"
    @cancel="showDeleteRepasModal = !showDeleteRepasModal"
    @delete="deleteRepas()"
  >
    <template #header>Supprimer</template>
    <template #body> Vous voulez suppprimer l'evenement </template>
  </DeleteModalFooter>
   <TheModal
    width="w-full md:w-2/3 lg:w-1/2"
    :is-open="showModalRepasUpdate"
    @close-modal="showModalRepasUpdate = false"
  >
    <template #header> Mettre à jour le Repas</template>

    <template #body>
      <form action="#" method="POST" @submit.prevent="addContact()">
        <div>
          <div class="mt-3 sm:mt-0 sm:col-span-2">
            <div class="px-4 py-5 bg-white p-6">
              <div class="grid grid-cols-8 gap-6">
                <div class="col-span-8 sm:col-span-4">
                  <BaseLabel value="Nom " />
                  <BaseInput
                    id="nom"
                    v-model="addform.first_name"
                    class="mt-2"
                  />
                </div>
                <div class="col-span-8 sm:col-span-4">
                  <BaseLabel value="Prix" />
                  <BaseInput
                    id="prenom"
                    v-model="addform.last_name"
                    class="mt-2"
                  />
                </div>
                <div class="col-span-8 sm:col-span-8">
                  <BaseLabel value="Type" />
                  <div class="relative mt-1">
                    <BaseInput v-model="phone" class="mt-2" />
                  </div>
                </div>
                <div class="col-span-8 sm:col-span-8">
                  <BaseLabel value="Description" />
                  <BaseInput
                    id="language"
                    v-model="addform.language"
                    class="mt-2"
                  />
                </div>
                <div class="col-span-8 sm:col-span-8">
                  <BaseLabel value="Image" />
                  <BaseInput
                    id="language"
                    type="file"
                    v-model="addform.language"
                    class="mt-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </template>
    <template #footer>
      <AddModalFooter @cancel="showModalRepasUpdate = false" @send="addContact()" />
    </template>
  </TheModal>
</template>

<script>
import axios from "axios";
import DeleteModalFooter from "../components/DeleteModalFooter.vue";
//import TheModal from "../components/TheModal.vue";
import BaseLabel from "../components/BaseLabel.vue";
import BaseInput from "../components/BaseInput.vue";
import AddModalFooter from "../components/AddModalFooter.vue";
export default {
  name: "RepasDash",
  components: {
    DeleteModalFooter,
    //AlertComponent,
    //TheModal,
    BaseLabel,
    BaseInput,
    AddModalFooter,
  },
  data() {
    return {
      addform: {
        categoris_id: "",
        name: "",
        description: "",
        prix: "",
        image_url: "",
      },
      alert: {
        type: "",
        message: "",
      },
      processing: false,
      showDeleteRepasModal: false,
      showModalRepas: false,
      showModalRepasUpdate: false,
      books: [],
      user: "",
      filter: "",
      deleteBookID: "",
    };
  },
  computed: {
    filteredBooks() {
  // Vérifiez si filter est défini et non vide avant de filtrer
  if (this.filter) {
    return this.books.filter((book) => book.user_id === this.filter);
  } else {
    // Si filter est vide ou indéfini, retournez un tableau vide
    return [];
  }
},

  },
  created() {
    this.profile();
    this.book();
  },
  methods: {
    deleteRepasModal() {
      this.showDeleteRepasModal = !this.showDeleteRepasModal;
    },
    deleteBookModal(id) {
      this.deleteBookID = id;
      this.showDeleteRepasModal = !this.showDeleteRepasModal;
    },
    async deleteRepas() {
      try {
        const response = await axios.delete(`/api/demandes/${this.deleteBookID}`);
        if (response.status == 200) {
          this.books = response.data.data;
          this.showDeleteRepasModal = false;
          //this.book();
          this.$router.push("/");
          //statistique
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    async profile() {
      try {
        const response = await axios.get("/api/profile");
        if (response.data) {
          this.filter = response.data.id;
          //console.log(this.filter);
        }
      } catch (error) {
        console.error(error.response.data);
      }
    },
    async book() {
      try {
        const response = await axios.get("/api/demandesattante");
        if (response.data) {
          this.books = response.data.data;
          console.log(this.tags);
        }
      } catch (error) {
        console.log(error.data);
      }
    },

    onFileChange(e) {
      const file = e.target.files[0];
      this.image = file;
    },
  },
};
</script>
