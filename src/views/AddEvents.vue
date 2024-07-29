<template>
  <div class="overflow-x-auto shadow-md sm:rounded-lg bg-white p-4">
    <div v-show="showAlert">
      <AlertComponent :content="alert.message" type-alert="error" />
    </div>

    <div>
      <form action="#" method="POST" @submit.prevent="addRestaurant()">
        <div>
          <div class=" py-5 bg-white p-6 lg:mx-24">
            <div class="flex">
              <div class="w-full mr-9">
                <BaseLabel
                  value="Nom de l'evenement"
                  class="text-left font-bold"
                />
                <BaseInput id="nom" v-model="addform.name" class="mt-1" />
                <div class="col-span-8 sm:col-span-8">
                  <BaseLabel value="Lieux" class="text-left mt-2 font-bold" />
                  <BaseInput id="prenom" v-model="addform.lieu" class="mt-1" />
                </div>

                <div class="col-span-8 sm:col-span-8">
                  <BaseLabel
                    value="Téléphone"
                    class="text-left mt-2 font-bold"
                  />
                  <div class="relative mt-1">
                    <BaseInput
                      v-model="addform.telephone"
                      placeholder="62333333"
                      class="mt-1"
                    />
                  </div>
                </div>

                <div class="col-span-8 sm:col-span-8">
                  <BaseLabel value="Prix" class="text-left mt-2 font-bold" />
                  <div class="relative mt-1">
                    <BaseInput
                    type="number"
                      v-model="addform.montant"
                      placeholder="100"
                      class="mt-1"
                    />
                  </div>
                </div>
                <div class="col-span-8 sm:col-span-8">
                  <BaseLabel
                    value="Type d'evenement"
                    class="text-left mt-2 font-bold"
                  />
                  <div class="relative mt-1">
                    <select
                      name="category"
                      id="category"
                      v-model="addform.type_demande_id"
                      class="block w-full p-2 border border-input-disable rounded-md focus:outline-none focus:ring-primary-normal focus:ring focus:ring-opacity-50 shadow-sm focus:border"
                    >
                      <option
                        v-for="(specualite, index) in specualites"
                        :key="index"
                        :value="specualite.id"
                      >
                        {{ specualite.name }}
                      </option>
                      <!-- Ajoutez plus d'options au besoin -->
                    </select>
                  </div>
                </div>
                <div class="col-span-8 sm:col-span-8">
                  <BaseLabel value="Image" class="text-left mt-2 font-bold" />
                  <BaseInput
                    id="image"
                    type="file"
                    @change="onFileChange"
                    class="mt-1"
                  />
                </div>
                <div class="col-span-8 sm:col-span-8">
                  <BaseLabel value="Vidéo" class="text-left mt-2 font-bold" />
                  <BaseInput
                    id="images"
                    type="file"
                    @change="onFileChanges"
                    class="mt-1"
                  />
                </div>
                <div class="col-span-8 sm:col-span-8">
                  <BaseLabel
                    value="Type de media à afficher"
                    class="text-left mt-2 font-bold"
                  />
                  <div class="relative mt-1">
                    <select
                      name="category"
                      id="category"
                      v-model="addform.is_correct"
                      class="block w-full p-2 border border-input-disable rounded-md focus:outline-none focus:ring-primary-normal focus:ring focus:ring-opacity-50 shadow-sm focus:border"
                    >
                      <option value="0">Image</option>
                    <option value="1">Video</option>
                      <!-- Ajoutez plus d'options au besoin -->
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex mr-9">
              <div class="w-1/2">
                <BaseLabel
                  value="Date debuit"
                  class="text-left mt-2 font-bold"
                />
                <BaseInput
                  type="datetime-local"
                  id="time"
                  v-model="addform.date_debuit"
                  class="mt-2"
                />
              </div>
              <div class="w-1/2 ml-2">
                <BaseLabel value="Date fin" class="text-left mt-2 font-bold" />
                <BaseInput
                  type="datetime-local"
                  id="time"
                  v-model="addform.date_fin"
                  class="mt-2"
                />
              </div>
            </div>

            <div class="col-span-8 sm:col-span-8 mr-9">
              <BaseLabel
                value="Description "
                class="text-left mt-2 font-bold"
              />
              <div class="mt-1">
                <textarea
                  class="block w-full p-2 border border-input-disable rounded-md focus:outline-none focus:ring-primary-normal focus:ring focus:ring-opacity-50 shadow-sm focus:border"
                  v-model="addform.description"
                  autocomplete="current-password"
                />
              </div>
            </div>
          </div>
        </div>

        <Button
          type="submit"
          class="bg-green-600 text-white px-8 py-2 mx-24 focus:outline-none rounded-lg mt-2 transform transition duration-300"
        >
          <span v-if="isLoading">
            <spiner />
          </span>
          <span v-else>Envoyer</span>
        </Button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Noty from "noty";
import "noty/lib/noty.css";
import "noty/lib/themes/mint.css";
import BaseLabel from "../components/BaseLabel.vue";
import BaseInput from "../components/BaseInput.vue";
import AlertComponent from "../components/AlertComponent.vue";
import spiner from "../components/spiner.vue";
export default {
  name: "RestaurantDash",
  components: {
    AlertComponent,
    BaseLabel,
    BaseInput,
    spiner,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
        // local: null,
      },
      addform: {
        name: "",
        is_correct: "",
        lieu: "",
        telephone: "",
        description: "",
        image: "",
        user_id: "",
        video: "",
        type_demande_id: "",
        date_debuit: "",
        date_fin: "",
        montant: 0,
        status: "En attente",
      },
    
      showAlert: false,
      alert: {
        message: "",
      },
      processing: false,
      isLoading: false,
      showDeleteRestaurantModal: false,
      showModalRestaurant: false,
      showModalRestaurantUpdate: false,
      showModalRepasCreate: false,
      showModalRepas: false,
      filteredRestaurants: [],
      restaurants: [],
      user: "",
      deleteRestaurantID: "",
      repass: [],
      categorys: [],
      specualites: [],
      RestaurantID: "",
      filter: "",
      dataUpdat: [],
    };
  },
  created() {
    this.profile();
    this.getSpecialite();
  },
  computed: {
    filteredRestaurant() {
      const searchTerm = this.filter.toLowerCase();
      const filtered_data = this.restaurants.filter((restaurants) => {
        const name = restaurants.user.id.toLowerCase();
        return name.includes(searchTerm);
      });

      return filtered_data;
    },
  },
  methods: {
    deleteRestaurantModal(id) {
      this.showDeleteRestaurantModal = !this.showDeleteRestaurantModal;
      this.deleteRestaurantID = id;
    },
    MenuModal(id) {
      this.showModalRepasCreate = !this.showModalRepasCreate;
      this.RestaurantID = id;
      console.log(this.RestaurantID);
    },
   
    async profile() {
      try {
        const response = await axios.get("/api/profile");
        if (response.data) {
          this.user = response.data.id;
          this.filter = response.data.id;
          
        }
      } catch (error) {
        console.log(error.data);
      }
    },
  
    async getSpecialite() {
      try {
        const response = await axios.get("/api/typedemandes");
        if (response.data) {
          this.specualites = response.data.data;
        }
      } catch (error) {
        console.log(error.data);
      }
    },

    addRestaurant() {
      this.isLoading = true;
      const formData = new FormData();

      formData.append("file", this.image);

      axios
        .post("api/medias", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.status == 201) {
            this.addform.image = response.data.data.media_url;
            this.SendVideo();
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
      SendVideo() {
      this.isLoading = true;
      const formData = new FormData();

      formData.append("file", this.images);

      axios
        .post("api/medias", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.status == 201) {
            this.addform.video = response.data.data.media_url;
            this.sendRestaurant();
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    async sendRestaurant() {
      try {
        this.isLoading = true;
        this.addform.user_id = this.user;
        const response = await axios.post("/api/demandes", this.addform);
        if (response.status == 201) {
          this.isLoading = false;
           this.$router.push("/mesevents");
          new Noty({
            type: "success",
            layout: "topRight",
            text: "Votre Restaurant est créer avec succés",
            timeout: 5000,
          }).show();
          
        } else {
          this.showAlert = true;
          this.isLoading = false;
          this.alert.message =
            "Quelque chose c'est mal passé. Merci d'essayer plus tard!";
          setTimeout(() => {
            this.showAlert = false;
          }, 5000);
        }
      } catch (error) {
        if (error.response.status !== 500) {
          this.isLoading = false;
          this.showAlert = true;
          this.alert.message =
            "Quelque chose c'est mal passé. Merci d'essayer plus tard!";
          setTimeout(() => {
            this.showAlert = false;
          }, 5000);
        }
      }
    },

    onFileChange(e) {
      const file = e.target.files[0];
      this.image = file;
    },
    onFileChanges(e) {
      const file = e.target.files[0];
      this.images = file;
    },

  },
};
</script>
