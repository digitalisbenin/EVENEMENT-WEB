<script>
import axios from "axios";
//import BaseInput from "../components/BaseInput.vue";
//import BaseLabel from "../components/BaseLabel.vue";
//import AddModalFooter from "../components/AddModalFooter.vue";
import AlertComponent from "../components/AlertComponent.vue";
import spiner from "../components/spiner.vue";

export default {
  name: "ResetPassword",
  components: {
    AlertComponent,
    spiner,
    //BaseLabel,
    //BaseInput,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
        token: "",
        password_confirmation: "",
      },
      alert: {
        type: "",
        message: "",
      },
      processing: false,
      isLoading: false,
      passwordErrorMessage:"",
    };
  },
  mounted() {
    if (this.$route.query.token) {
      this.getToken();
    }
  },
  methods: {

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
},
    getToken() {
      this.form.email = this.$route.query.token.split("=")[1];
      this.form.token = this.$route.query.token.split("?")[0];
    },

    async saveNewPassword() {
      try {
        this.isLoading = true;
        const response = await axios.post(
          "/api/auth/password/reset",
          this.form
        );
        if (response.status === 200) {
          this.alert.type = "success";
          this.alert.message = "Your password is successfully changed !";
          this.form.email = "";
          this.form.password = "";
          this.form.password_confirmation = "";
          this.isLoading = false;
          this.$router.push("/auth/login");
        }
      } catch (error) {
        if (error.response.status !== 500) {
          this.processing = false;
          this.alert.type = "error";
          this.alert.message = error.response.data.data[0];
        } else {
          this.processing = false;
          this.alert.type = "error";
          this.alert.message = "Something went wrong! Please, try again later!";
        }
      }
    },
  },
};
</script>

<template class="">
  <div
    class="p-6 space-y-4 md:space-y-6 sm:p-8 lg:w-1/3 mx-auto my-auto mt-4 mb-4 box-shadow-all-sides"
  >
    <div v-show="alert.type !== ''" class="my-2">
      <AlertComponent :content="alert.message" :type-alert="alert.type" />
    </div>
    <h1 class="font-bold text-xl text-white">Saisissez le nouveau mot de passe</h1>
    <form
      method="POST"
      action="#"
      class="space-y-4 md:space-y-6"
      @submit.prevent="!passwordErrorMessage && saveNewPassword()"
    >
      <div class="">
        <label class="block font-bold text-sm  text-left text-white"
          >Email</label
        >
        <div class="mt-1">
          <input
            class="block w-full p-2 border border-input-disable rounded-md focus:outline-none focus:ring-primary-normal focus:ring focus:ring-opacity-50 shadow-sm focus:border"
            type="email"
            v-model="form.email"
            required
            readonly
          />
        </div>
      </div>
      <div class="space-y-1 mt-5">
        <label class="block font-bold text-sm  text-left text-white"
          >Nouveau mot de passe</label
        >
        <div class="mt-1">
          <input
            class="block w-full p-2 border border-input-disable rounded-md focus:outline-none focus:ring-primary-normal focus:ring focus:ring-opacity-50 shadow-sm focus:border"
            v-model="form.password"
            type="password"
            @input="validatePassword"
            @paste="preventPaste"
            required
          />
        </div>
         <div class="text-red-500" v-if="passwordErrorMessage">{{ passwordErrorMessage }}</div>
      </div>
      <div class="space-y-1 mt-5">
        <label class="block font-bold text-sm text-gray-700 text-left">Confirmation du mot de passe</label>
        <div class="mt-1">
          <input
          class="block w-full p-2 border border-input-disable rounded-md focus:outline-none focus:ring-primary-normal focus:ring focus:ring-opacity-50 shadow-sm focus:border"
          v-model="form.password_confirmation"
          type="password"
          required
          />
        </div>
      </div>

      <button
        type="submit"
        class="bg-green-600 text-gray-700 px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105"
      >
        <span v-if="isLoading">
          <spiner />
        </span>
        <span v-else> Réinitialiser</span>
      </button>
    </form>
  </div>
</template>
