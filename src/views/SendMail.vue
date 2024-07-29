<script>
import axios from "axios";
//import TheModal from "../components/TheModal.vue";


import Noty from "noty";
import "noty/lib/noty.css";
import "noty/lib/themes/mint.css";
import spiner from "../components/spiner.vue";
import AlertComponent from "../components/AlertComponent.vue";
export default {
  name: "LoginForm",
  components: {
    spiner,
    AlertComponent,
   
    //TheModal,
  },
  data() {
    return {
      form: {
        email: "",
        //password: "",
        // local: null,
      },
      alert: {
        type: "",
        message: "",
      },
      showAlert: false,
      processing: false,
        isLoading: false,
    };
  },
  // created() {
  //   this.form.local = this.$i18n.locale;
  // },
  methods: {
    async motdepasse() {
      try {
        this.isLoading = true;
        const response = await axios.post("/api/auth/password/email", this.form);
        if (response.status === 200) {
          this.isLoading = false;
         new Noty({
            type: "success",
            layout: "topRight",
            text: "Merci, nous allons vous envoyer un e-mail à votre adresse e-mail.",
            timeout: 5000,
          }).show();
          this.form = {};
          this.$router.push("/");
        }
      } catch (error) {
        this.isLoading = false;
        // Gestion des erreurs HTTP
        if (error.response && error.response.status === 422) {
          this.showAlert = true;
          this.alert.message = "Adresse e-mail ou mot de passe incorrect.";
        } else {
          this.showAlert = true;
          this.alert.message =
            "Quelque chose s'est mal passé. Merci d'essayer plus tard.";
        }

        setTimeout(() => {
          this.showAlert = false;
        }, 5000);
      }
    },
  },
};
</script>

<template class="">
  <div class="p-6 space-y-4 md:space-y-6 sm:p-8 lg:w-1/3 mx-auto my-auto mt-4 mb-4 box-shadow-all-sides">
  <div v-show="showAlert">
        <AlertComponent :content="alert.message" type-alert="error" />
      </div>
    <h1 class="font-bold text-xl text-white">Réinitialiser le mot de passe</h1>
    <form
      method="POST"
      action="#"
      class="space-y-4 md:space-y-6"
      @submit.prevent="motdepasse()"
    >
      <div class="">
        <label class="block font-bold text-sm text-white text-left">Email</label>
        <div class="mt-1">
          <input
          class="block w-full p-2 border border-input-disable rounded-md focus:outline-none focus:ring-primary-normal focus:ring focus:ring-opacity-50 shadow-sm focus:border"
            type="email"
            autocomplete="current-email"
            v-model="form.email"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        class="bg-blue-500 text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105"
      >
        <span v-if="isLoading">
          <spiner />
        </span>
        <spam v-else class="ml-2 flex">
          <span> Envoyer</span>
        </spam>
      </button>
    </form>
    <p class="text-sm text-white ">
      Pas encore de compte
      <router-link to="/auth/register"
        
        class="bg-blue-500 rounded-full px-4 font-sans text-black ml-4 hover:underline dark:text-primary-500"
      >
        Inscrivez vous ici</router-link
      >
    </p>
  </div>

</template>
<style scoped>
  .box-shadow-all-sides {
    box-shadow: 1px 1px 8px rgba(0.2, 0.2, 0.2, 0.2); /* Ajustez les valeurs en conséquence */
  }
</style>