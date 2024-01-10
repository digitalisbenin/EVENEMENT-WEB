<template>
  <nav class="bg-slate-50 p-4">
    <div
      class="container mx-auto flex justify-between relative h-12 items-center"
    >
      <!-- Logo -->
      <div>
        <img src="../assets/CSE-TRAININGS.png" alt="Logo" class="h-28 w-48" />
      </div>

      <!-- Menu -->
      <ul class="flex space-x-4 text-lg">
        <li @click="toggDropdown">
          <router-link
            class="text-slate-950 hover:text-gray-300"
            active-class="text-blue-500"
            to="/"
            >Maison</router-link
          >
        </li>
        <li @click="toggDropdown">
          <router-link
            class="text-slate-950 hover:text-gray-300"
            active-class="text-blue-500"
            to="/video"
            >Vidéo</router-link
          >
        </li>

        <li>
          <div
            class="flex items-center justify-center text-slate-950 hover:text-gray-300"
            active-class="text-blue-500"
          >
            <div class="relative inline-block text-left text-lg">
              <button
                @click="toggleDropdowns"
                class="flex text-slate-950 hover:text-gray-300"
                active-class="text-blue-500"
              >
               Communauté CSE

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 ml-2 -mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <div
                v-if="isDropdownOpens"
                id="dropdown-menu"
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-blue-500 ring-1 ring-black ring-opacity-5"
              >
                <div
                  class="py-2 p-2"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="dropdown-button"
                >
                  <div
                    class=""
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="dropdown-button"
                  >
                    <router-link
                      class="text-white hover:text-slate-950"
                      active-class="text-slate-950"
                      to="/sallereseau"
                    >
                      Forum
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li @click="toggDropdown">
          <router-link
            class="text-slate-950 hover:text-gray-300"
            active-class="text-blue-500"
            to="/blog"
            >Blog</router-link
          >
        </li>
        <li @click="toggDropdown">
          <router-link
            class="text-slate-950 hover:text-gray-300"
            active-class="text-blue-500"
            to="/motivation"
            >Motivation</router-link
          >
        </li>
        <li @click="toggDropdown">
          <router-link
            class="text-slate-950 hover:text-gray-300"
            active-class="text-blue-500"
            to="/propos"
            >A propos
          </router-link>
        </li>
        <li @click="toggDropdown">
          <router-link
            class="text-slate-950 hover:text-gray-300"
            active-class="text-blue-500"
            to="/contact"
            >Contact</router-link
          >
        </li>

        <li>
          <div
            class="flex items-center justify-center text-slate-950 hover:text-gray-300"
            active-class="text-blue-500"
          >
            <div class="relative inline-block text-left text-lg">
              <button
                @click="toggleDropdown"
                class="flex text-slate-950 hover:text-gray-300"
                active-class="text-blue-500"
              >
                Fr

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 ml-2 -mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <div
                v-if="isDropdownOpen"
                id="dropdown-menu"
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-blue-500 ring-1 ring-black ring-opacity-5"
              >
                <div
                  class="py-2 p-2"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="dropdown-button"
                >
                  <div
                    class="py-2 p-2"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="dropdown-button"
                  >
                    <a
                      class="flex block rounded-md px-4 py-1 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
                      role="menuitem"
                    >
                      Anglais
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <router-link
          class="bg-blue-400 px-4 py-1 text-white poppins rounded-lg ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105"
          to="/auth/login"
          >SIGN IN</router-link
        >
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isDropdownOpen: false,
      isDropdownOpens: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    toggDropdown() {
      this.isDropdownOpens = false;
      this.isDropdownOpen = false;
    },
    toggleDropdowns() {
      this.isDropdownOpens = !this.isDropdownOpens;
    },
  },
  mounted() {},
};
</script>

<style >
#dropdown-menu {
  z-index: 100;
}
</style>


