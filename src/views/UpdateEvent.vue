<template>
  <div class="overflow-x-auto shadow-md sm:rounded-lg bg-white p-4">
    <div>
      <form action="#" method="POST" @submit.prevent="UpdatEvenementNew()">
        <div class="">
          <div class="flex mt-6 mb-9">
            <div class="flex-1 border-r-2 pr-4">
              <!-- Contenu à gauche -->
              <h1 class="text-4xl font-bold border border-red-200 mt-4"></h1>
            </div>
            <div class="flex-1 text-center">
              <!-- Contenu au milieu -->
              <h1 class="lg:text-xl text-xl font-bold bg-green-500 rounded-lg">
                Mise à jour de l'événement
              </h1>
            </div>
            <div class="flex-1 border-l-2 pl-4">
              <!-- Contenu à droite -->
              <h1 class="text-4xl font-bold border border-red-200 mt-4"></h1>
            </div>
          </div>
          <div class="py-5 bg-white p-6 lg:mx-24 border border-black">
            <div class="flex">
              <div class="w-full lg:mr-9">
                <div class="lg:flex flex-wrap items-center gap-4 mb-2">
                  <!-- Champ "Nom de l'événement" -->
                  <div class="flex flex-col flex-1">
                    <BaseLabel
                      value="Nom de l'événement"
                      class="text-left font-bold"
                    />
                    <BaseInput id="nom" v-model="demandes.name" class="mt-1" />
                  </div>

                  <!-- Champ "Lieux" -->
                  <div class="flex flex-col flex-1">
                    <BaseLabel value="Lieux (Ex:Cotonou)" class="text-left font-bold" />
                    <BaseInput id="lieu" v-model="demandes.lieu" class="mt-1" />
                  </div>
                </div>
                <div class="col-span-8 sm:col-span-8 mb-2">
                  <BaseLabel
                    value="Description "
                    class="text-left mt-2 font-bold"
                  />
                  <div class="mt-1">
                    <textarea
                      class="block w-full p-2 border border-input-disable rounded-md focus:outline-none focus:ring-primary-normal focus:ring focus:ring-opacity-50 shadow-sm focus:border"
                      v-model="demandes.description"
                      autocomplete="current-password"
                    />
                  </div>
                  <div v-show="showAlert" class="text-center text-2xl">
                    <AlertComponent
                      :content="alert.message"
                      type-alert="error"
                    />
                  </div>
                </div>
                <div class="lg:flex flex-wrap items-center gap-4 mb-2">
                  <div class="flex flex-col flex-1">
                    <BaseLabel
                      value="Tarification"
                      class="text-left font-bold"
                    />
                    <div class="relative mt-1">
                      <div class="flex items-center space-x-4">
                        <!-- Checkbox Gratuit -->
                        <label class="flex items-center space-x-2">
                          <input
                            type="radio"
                            value="0"
                            v-model="demandes.payement"
                            class="form-radio h-4 w-4 text-green-600"
                          />
                          <span>Gratuit</span>
                        </label>
                        <!-- Checkbox Payant -->
                        <label class="flex items-center space-x-2">
                          <input
                            type="radio"
                            value="1"
                            v-model="demandes.payement"
                            class="form-radio h-4 w-4 text-red-600"
                          />
                          <span>Payant</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col flex-1">
                    <BaseLabel
                      value="Lien du ticket"
                      class="text-left font-bold"
                    />
                    <div class="relative mt-1">
                      <BaseInput v-model="demandes.nombre_jour" class="mt-1" />
                    </div>
                  </div>
                </div>

                <div class="lg:flex flex-wrap items-center gap-4 mb-2">
                  <!-- Champ "Téléphone" -->
                  <div
                    :class="
                      demandes.payement === '0'
                        ? 'flex flex-col flex-1'
                        : 'flex flex-col flex-1'
                    "
                  >
                    <BaseLabel value="Téléphone" class="text-left font-bold" />
                    <div class="relative mt-1">
                      <BaseInput
                        v-model="demandes.telephone"
                        placeholder="62333333"
                        class="mt-1"
                      />
                    </div>
                  </div>

                  <!-- Champ "Prix" (masqué si Gratuit) -->
                  <div
                    v-if="demandes.payement !== '0'"
                    class="flex flex-col flex-1"
                  >
                    <BaseLabel value="Prix" class="text-left font-bold" />
                    <div class="relative mt-1">
                      <BaseInput
                        type="number"
                        v-model="demandes.montant"
                        placeholder="100"
                        class="mt-1"
                      />
                    </div>
                  </div>
                </div>

                <div class="lg:flex flex-wrap items-center gap-4 mb-2">
                  <!-- Champ "Type d'événement" -->
                  <div class="flex flex-col flex-1">
                    <BaseLabel
                      value="Type d'événement"
                      class="text-left font-bold"
                    />
                    <div class="relative mt-1">
                      <select
                        name="category"
                        id="category"
                        v-model="demandes.type_demande_id"
                        class="block w-full p-2 border border-input-disable rounded-md focus:outline-none focus:ring-primary-normal focus:ring focus:ring-opacity-50 shadow-sm focus:border"
                      >
                        <option
                          v-for="(specualite, index) in specualites"
                          :key="index"
                          :value="specualite.id"
                        >
                          {{ specualite.name }}
                        </option>
                      </select>
                    </div>
                  </div>

                  <!-- Champ "Type de média à afficher" -->
                  <div class="flex flex-col flex-1">
                    <BaseLabel
                      value="Type de média à afficher"
                      class="text-left font-bold"
                    />
                    <div class="relative mt-1">
                      <select
                        name="category"
                        id="media-type"
                        v-model="demandes.is_correct"
                             @change="handleMediaTypeChange"
                        class="block w-full p-2 border border-input-disable rounded-md focus:outline-none focus:ring-primary-normal focus:ring focus:ring-opacity-50 shadow-sm focus:border"
                      >
                        <option value="0">Image</option>
                        <option value="1">Video</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:flex flex-wrap items-center gap-4 mb-2">
  <!-- Champ Image -->
  <div class="flex flex-col flex-1">
    <BaseLabel value="Image" class="text-left font-bold" />
    <BaseInput
      id="image"
      type="file"
      @change="onFileChange"
      :required="demandes.is_correct === '0'"
      class="mt-1"
    />
  </div>

  <!-- Champ Vidéo -->
  <div class="flex flex-col flex-1">
    <BaseLabel value="Vidéo" class="text-left font-bold" />
    <BaseInput
      id="video"
      type="file"
      @change="onFileChanges"
      :required="demandes.is_correct === '1'"
      class="mt-1"
    />
  </div>
</div>

            <div class="lg:flex lg:mr-9">
              <div class="lg:w-1/2">
                <BaseLabel
                  value="Date debut"
                  class="text-left mt-2 font-bold"
                />
                <BaseInput
                  type="datetime-local"
                  id="time"
                  v-model="demandes.date_debuit"
                  class="mt-2"
                />
              </div>
              <div class="lg:w-1/2 lg:ml-2">
                <BaseLabel value="Date fin" class="text-left mt-2 font-bold" />
                <BaseInput
                  type="datetime-local"
                  id="time"
                  v-model="demandes.date_fin"
                  class="mt-2"
                />
              </div>
            </div>
              <div class="flex flex-col flex-1 mt-2">
              <BaseLabel
                value="Jour de la semaine (uniquement pour les événements à répétition)"
                class="text-left font-bold"
              />
              <div class="relative mt-1">
                <select
                  name="day"
                  id="day-select"
                  v-model="demandes.jours"
                  
                  class="block w-full p-2 border border-input-disable rounded-md focus:outline-none focus:ring-primary-normal focus:ring focus:ring-opacity-50 shadow-sm focus:border"
                >
                  <option disabled selected>Choisissez un jour</option>
                  <option value="Lundi">Lundi</option>
                  <option value="Mardi">Mardi</option>
                  <option value="Mercredi">Mercredi</option>
                  <option value="Jeudi">Jeudi</option>
                  <option value="Vendredi">Vendredi</option>
                  <option value="Samedi">Samedi</option>
                  <option value="Dimanche">Dimanche</option>
                </select>
              </div>
            </div>
            <div class="flex gap-4 mt-4">
              <!-- Bouton "Envoyer" -->

              <Button
                type="submit"
                class="bg-green-600 text-white px-8 py-2 focus:outline-none rounded-lg transform transition duration-300"
              >
                <span v-if="isLoading">
                  <spiner />
                </span>
                <span v-else>Mise à jour</span>
              </Button>

              <!-- Bouton "Annuler" -->
              <!-- <Button
                type="button"
                class="bg-gray-500 text-white px-8 py-2 focus:outline-none rounded-lg transform transition duration-300"
                @click="resetForm"
              >
                Annuler
              </Button> -->
            </div>
          </div>
        </div>
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
        nombre_jour: "",
        payement: "",
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
      userStatus: "",
      dataUpdat: [],
      demandes: [],
    };
  },
  created() {
    this.profile();
    this.getSpecialite();
  },
  mounted() {
    this.getdemande();
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
    handleMediaTypeChange() {
      // Ici, la valeur de addform.is_correct a déjà été mise à jour grâce à v-model
      console.log("Type de média sélectionné:", this.demandes.is_correct);

      // Vous pouvez effectuer des actions supplémentaires en fonction de la valeur choisie
      if (this.demandes.is_correct === "0") {
        // Si l'utilisateur choisit "Image", vous pouvez effectuer une action ici
        console.log("Image sélectionnée");
      } else if (this.demandes.is_correct === "1") {
        // Si l'utilisateur choisit "Vidéo", vous pouvez effectuer une autre action ici
        console.log("Vidéo sélectionnée");
      }
    },
    deleteRestaurantModal(id) {
      this.showDeleteRestaurantModal = !this.showDeleteRestaurantModal;
      this.deleteRestaurantID = id;
    },
    MenuModal(id) {
      this.showModalRepasCreate = !this.showModalRepasCreate;
      this.RestaurantID = id;
      console.log(this.RestaurantID);
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
    async profile() {
      try {
        const response = await axios.get("/api/profile");
        if (response.data) {
          this.user = response.data.id;
          this.filter = response.data.id;
          this.userStatus = response.data.status;
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
UpdatEvenementNew() {
  
    this.isLoading = true;

    if (this.image && this.images) {
   this.Sendimage()

    } else if (this.image) {
      // Si seule l'image est sélectionnée
      this.uploadImage();
    } else if (this.images) {
      // Si seule la vidéo est sélectionnée
      this.uploadVideo();
    } else {
      // Aucun fichier sélectionné
      this.UpdateEvenement();
    }
  },
    Sendimage() {
      if (this.userStatus === "valider") {
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
              this.demandes.image = response.data.data.media_url;
              this.SendVideo();
            }
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        // Affiche une alerte si le statut utilisateur n'est pas "valider"
        this.alert.message = "Votre compte n'ai pas encore valider.";
        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false;
        }, 5000);
      }
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
            this.demandes.video = response.data.data.media_url;
            this.UpdateEvenement();
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
   async uploadImage() {
  try {
    const formData = new FormData();
    formData.append("file", this.image);

    const response = await axios.post("api/medias", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    if (response.status === 201) {
      this.demandes.image = response.data.data.media_url;

      // Si seule l'image est sélectionnée
      if (!this.images) {
        this.UpdateEvenement();
      }
    }
  } catch (error) {
    console.error("Erreur lors de l'upload de l'image:", error);
  }
},

async uploadVideo() {
  try {
    const formData = new FormData();
    formData.append("file", this.images);

    const response = await axios.post("api/medias", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    if (response.status === 201) {
      this.demandes.video = response.data.data.media_url;

      // Si seule la vidéo est sélectionnée
      if (!this.image) {
        this.UpdateEvenement();
      }
    }
  } catch (error) {
    console.error("Erreur lors de l'upload de la vidéo:", error);
  }
},
    async UpdateEvenement() {
      try {
        this.isLoading = true;
        //this.addform.user_id = this.user;
        const response = await axios.put(
          `/api/demandes/${this.$route.params.id}`,
          this.demandes
        );
        if (response.status == 200) {
          this.isLoading = false;
          this.$router.push("/mesevents");
          new Noty({
            type: "success",
            layout: "topRight",
            text: "Votre evenement à été mise à jour avec succés",
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
