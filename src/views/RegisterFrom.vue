<script>
import axios from "axios";
import TokenService from "../services/storage.service";
import ApiService from "../services/api.service";
import Noty from "noty";
import "noty/lib/noty.css";
import "noty/lib/themes/mint.css";
import spiner from "../components/spiner.vue";
import AlertComponent from "../components/AlertComponent.vue";
export default {
  name: "RegisterFrom",
  components: {
    spiner,
     AlertComponent,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
        role_id: "2",
      },
      alert: {
        type: "",
        message: "",
      },
      processing: false,
      showAlert: false,
      isLoading: false,
      passwordErrorMessage:"",
    };
  },
  // created() {
  //   this.form.local = this.$i18n.locale;
  // },
  methods: {
    async register() {
      try {
        this.isLoading = true;
        const response = await axios.post("/api/auth/register", this.form);
        if (response.status === 200) {
          TokenService.saveToken(response.data.access_token);
          ApiService.setHeader();
          this.isLoading = false;
          new Noty({
            type: "success",
            layout: "topRight",
            text: "Merci, votre compte a été créé avec succès.",
            timeout: 5000,
          }).show();
          this.form = {};
          this.$router.push("/");
          //this.profile();
          //this.role();
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
    preventPaste(event) {
    event.preventDefault();
    const clipboardData = event.clipboardData || window.clipboardData;
    if (clipboardData) {
      const text = clipboardData.getData('text/plain');
      const passwordInput = document.getElementById('passwordInput');
      const startPosition = passwordInput.selectionStart;
      const endPosition = passwordInput.selectionEnd;
      const currentValue = this.form.password || '';
      const newValue =
        currentValue.substring(0, startPosition) +
        text +
        currentValue.substring(endPosition);
      this.form.password = newValue;
      this.validatePassword(); // Valider le mot de passe après le collage
    }
  },
 validatePassword() {
  // eslint-disable-next-line no-useless-escape
  const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

  if (!passwordPattern.test(this.form.password)) {
    this.passwordErrorMessage = 'Le mot de passe doit contenir au moins 8 caractères, dont au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.';
  } else {
    this.passwordErrorMessage = '';
  }
}

  },
};
</script>

<template>
  <div
    class="p-6 space-y-4 md:space-y-6 sm:p-8 lg:w-2/3 mx-auto my-auto mt-9 lg:mt-0 box-shadow-all-sides"
  >
  <div v-show="showAlert">
        <AlertComponent :content="alert.message" type-alert="error" />
      </div>
    <h1 class="font-bold text-xl">Créez votre compte gratuit</h1>
    <form
      method="POST"
      action="#"
      class="space-y-4 md:space-y-6"
      @submit.prevent="!passwordErrorMessage && register()"
    >
      <div class="">
        <label class="block font-bold text-sm text-gray-700 text-left"
          >Nom et prenom</label
        >
        <div class="mt-1">
          <input
          
            class="block w-full p-2 border border-input-disable rounded-md focus:outline-none focus:ring-primary-normal focus:ring focus:ring-opacity-50 shadow-sm focus:border"
            type="text"
            autocomplete="name"
            v-model="form.name"
            required
          />
        </div>
      </div>

      <div class="">
        <label class="block font-bold text-sm text-gray-700 text-left"
          >Email</label
        >
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
      
      <div class="space-y-1 mt-5">
        <label class="block font-bold text-sm text-gray-700 text-left"
          >Password</label
        >
        
        <div class="mt-1">
          <input
          
            class="block w-full p-2 border border-input-disable rounded-md focus:outline-none focus:ring-primary-normal focus:ring focus:ring-opacity-50 shadow-sm focus:border"
            type="password"
            autocomplete="current-password"
            v-model="form.password"
           
            required
          />
        </div>
         <div class="text-red-500" v-if="passwordErrorMessage">{{ passwordErrorMessage }}</div>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex sm:items-start">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="rounded border-gray-300 mt-1 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div class="lg:ml-1 ml-4 text-sm mt-4 lg:mt-0">
            <label
              for="remember"
              class="text-sm font-medium text-primary-normal dark:text-gray-300"
              >J'ai lu et accepté les conditions d'utilisation
            </label>
          </div>
        </div>

        <router-link
          to="/"
          class="text-sm font-medium text-blue-700 hover:underline dark:text-primary-500"
        >
          Retourner au site
        </router-link>
      </div>
      <button
        type="submit"
        class="bg-blue-500 text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105"
      >
        <span v-if="isLoading">
          <spiner />
        </span>
        <spam v-else class="ml-2 flex">
          <span> S'inscrire</span>
        </spam>
      </button>
    </form>
    <p class="text-sm text-gray-500">
      Vous avez déjà un compte
      <router-link
        to="/auth/login"
        class="font-sans text-blue-700 hover:underline dark:text-primary-500"
      >
        Se connecter</router-link
      >
      <router-link
        to="/condition"
        class="font-sans text-blue-700 hover:underline dark:text-primary-500 ml-4"
      >
        Conditions Générales</router-link
      >
    </p>
  </div>
</template>
<style scoped>
.box-shadow-all-sides {
  box-shadow: 1px 1px 8px rgba(0.2, 0.2, 0.2, 0.2); /* Ajustez les valeurs en conséquence */
}
#passwordInput {
  /* Désactivez la fonction de collage en cachant le curseur lors du survol */
  pointer-events: none;
}
</style>