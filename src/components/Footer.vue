<template>
<footer class="text-white bg-green-600">
  <div class="container">
    <!-- Section de contact -->
    <div class="text-center">
      <div class="h-4"></div>
      <img src="../assets/LOG.png" alt="Logo" class="h-24 w-44 mx-auto" />

      <ul class="lg:flex lg:space-x-6 lg:text-lg justify-center text-center mt-4">
        <li @click="toggDropdown">
          <router-link
            class="text-yellow-400 hover:text-gray-300 hover:underline"
            to="/"
            >Accueil</router-link
          >
        </li>
        <li @click="toggDropdown">
          <router-link
            class="text-yellow-400 hover:text-gray-300 hover:underline"
            to="/autres"
            >Autres</router-link
          >
        </li>
        <li @click="toggDropdown">
          <router-link
            class="text-yellow-400 hover:text-gray-300 hover:underline"
            to="/contact"
            >Nous contacter</router-link
          >
        </li>
      </ul>

      <h1 class="text-4xl font-bold border border-white mt-4 lg:mx-24 mx-6 opacity-50"></h1>

      <div class="mt-4">
        <p class="lg:text-xl text-sm text-center lg:font-bold">
          Copyright © 2024 Digitalis. Tous droits réservés
        </p>
      </div>
      <div class="h-6"></div>
    </div>
  </div>
</footer>

</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      isDropdownOpen: false,
      isDropdownOpens: false,
      isMobileMenuOpen: false,
      isDropdownOpenPrfile: false,
      isOpen: false,
      user: "",
      name: "",
      imageUrl: "",
    };
  },
  methods: {
    contactezNous() {
      // Ouvrir un client de messagerie avec l'adresse e-mail pré-remplie
      window.location.href = "mailto:support@csetrainings.com";
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
      this.isDropdownOpens = false;
      this.isDropdownOpenPrfile = false;
    },
    ClotoggleDropdown(){
      this.isDropdownOpen= false
    }
  },
};
</script>
