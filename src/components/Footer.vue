<template>
  <footer class="bg-blue-500 text-gray-800 py-6">
    <div class="container lg:mx-auto">
      <div
        class="flex flex-col justify-center items-center md:flex-row md:justify-between font-serif text-2xl"
      >
        <!-- Section de contact -->
        <div
          class="md:w-1/3 lg:ml-12 flex justify-center md:justify-start items-center mb-4 md:mb-0"
        >
          <img src="../assets/LOG0.png" alt="Logo" class="h-28 w-44" />
          
        </div>
        <!-- Réseaux sociaux -->
        <div class="md:w-1/3 mt-4 md:mt-0 lg:ml-4 md:ml-16">
          <h2 class="text-2xl font-sans mb-4 ml-16">Suivez-nous</h2>
          <ul class="flex justify-center md:justify-start space-x-4">
        <li>
              <a href="#" class="hover:text-gray-400"
                ><img
                  class="h-9 w-9"
                  src="../assets/tik-tok_3046133.png"
                  alt=""
              /></a>
            </li>
            <li class="">
              <a href="https://www.youtube.com/channel/UCIMQ5e4gALHCoCc9nao0icQ" target="_blank" class="hover:text-gray-400"
                ><img class="h-9 w-9" src="../assets/YouTube_full-.png" alt=""
              /></a>
            </li>
          <li>
              <a href="#" class="hover:text-gray-400"
                ><svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  class="h-9 w-9"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  ></path></svg
              ></a>
            </li>
            <li>
              <a href="#" class="hover:text-gray-400"
                ><svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  class="h-9 w-9"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clip-rule="evenodd"
                  ></path></svg
              ></a>
            </li>
            <li>
              <a href="#" class="hover:text-gray-400"
                ><svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-9 h-9"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path
                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                  ></path></svg
              ></a>
            </li>
          </ul>
        </div>
        <!-- Liens rapides -->
        <div class="md:w-1/3 mt-4 md:mt-0 text-center md:text-left mr-12">
          <ul>
            <li>
              <router-link to="/propos">
              <p class="">A propos </p> </router-link></li>
            <li>
              <p  class=" ml-6 md:ml-0 lg:ml-0"
                >support@evenements.com</p
              >
            </li>
            <button
              class="bg-white px-4 py-1 text-blue-400 poppins rounded-lg ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105"
              @click="contactezNous"
              >CONTACTEZ-NOUS!</button
            >
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
  
<script>
export default {
  name: "Footer",
  methods: {
    contactezNous() {
      // Ouvrir un client de messagerie avec l'adresse e-mail pré-remplie
      window.location.href = "mailto:support@evenements.com";
    }
  }
};
</script>
  