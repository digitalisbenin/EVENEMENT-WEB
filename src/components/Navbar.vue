<template>
  <nav class="h-16 shadow" style="background: #001928">
    <div class="container flex relative items-center">
      <!-- Logo -->
      <div class="flex lg:bg-white h-16 w-36">
        <router-link to="/">
          <img
            src="../assets/LOG0.png"
            alt="Logo"
            class="h-16 w-44 "
          />
        </router-link>
        <div class="bg-yellow-400 h-16 ml-4 w-4 hidden md:block">
          <p class="text-yellow-400">..</p>
        </div>
      </div>
      <!-- Burger menu for mobile -->
      <div class="flex block lg:hidden">
        <button @click="isOpen = !isOpen" class="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <p @click="toggDropdown">
          <router-link
            class="text-white hover:text-gray-300"
            active-class="text-white"
            to="#"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 ml-6 mt-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </router-link>
        </p>
      
       
        <router-link
              v-if="this.user === undefined || this.user === ''"
              class="py-1 bg-blue-500 text-white ml-16 px-4 poppins rounded-lg ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105"
              to="/auth/login"
              >Se connecter</router-link
            >
        <div v-else
          class="bg-white px-4 py-1 text-white poppins rounded-lg ring-red-300 transform transition duration-700 mt-1 ml-2"
          @click="toggleDropdownsfil"
        >
          <button
            type="button"
            class="relative flex rounded-full text-sm"
            id="user-menu-button"
            aria-expanded="false"
            aria-haspopup="true"
          >
            <img
              class="rounded-full w-6 h-6"
              src="../assets/c972ce3d5e2f4ea3d8d0b83ef3423dd1.png"
              alt=""
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 ml-2 -mr-1 text-black"
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

          <!-- Dropdown menu -->
          <div
                v-show="isDropdownOpenPrfile"
                class="absolute right-0 z-10 mt-1 origin-top-right rounded-md bg-white w-48 py-1 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
              >
                <!-- Active: "bg-gray-100", Not Active: "" -->

                <router-link
                  class="block px-4 py-2 flex text-sm text-black font-bold"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-1"
                  to="/profils"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  <span
                    class="ml-2 text-blue-800 font-bold font-serif hover:text-blue-900"
                    >Profils</span
                  ></router-link
                >
                <h1
                  class="text-xl font-bold border border-yellow-400 ml-4"
                ></h1>
              <router-link
                  class="block px-4 py-2 flex text-sm text-black font-bold"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-1"
                  to="/mesevents"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  <span
                    class="ml-2 text-blue-800 font-bold font-serif hover:text-blue-900"
                    >Mes evenements</span
                  ></router-link
                >

                <button
                  @click="logout()"
                  class="block px-4 py-2 flex text-sm mt-2"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-2"
                >
                  <svg
                    width="15"
                    height="23"
                    viewBox="0 0 15 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="ml-2"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.58739 1.80188L7.86025 1.13043C11.0808 0.624343 12.6911 0.371297 13.7414 1.26942C14.7917 2.16754 14.7917 3.79759 14.7917 7.0577V10.4995H8.53897L11.4059 6.91591L9.84414 5.66652L5.67747 10.8748L5.17772 11.4995L5.67747 12.1242L9.84414 17.3326L11.4059 16.0832L8.53897 12.4995H14.7917V15.9414C14.7917 19.2015 14.7917 20.8316 13.7414 21.7297C12.6911 22.6278 11.0808 22.3747 7.86025 21.8687L3.58739 21.1972C1.97466 20.9438 1.16829 20.8171 0.688319 20.2558C0.208344 19.6945 0.208344 18.8782 0.208344 17.2457V5.7534C0.208344 4.12087 0.208344 3.30461 0.688319 2.74332C1.16829 2.18203 1.97466 2.05531 3.58739 1.80188Z"
                      fill="#001928"
                    />
                  </svg>

                  <span
                    class="ml-2 text-blue-800 font-bold font-serif hover:text-blue-900"
                    >Déconnexion</span
                  >
                </button>
              </div>
        </div>
      </div>
      <div
        :class="isOpen ? 'flex' : 'hidden'"
        class="w-full absolute z-20 h-80 top-10 right-0 md:left-auto md:right-auto justify-center border-b-8 border-yellow-400"
        style="background: #013854"
      >
        <ul class="list-none text-white mt-9">
          <li @click="toggDropdown" class="flex items-center justify-center">
            <router-link
              class="text-white hover:text-gray-300"
              active-class=""
              to="/"
              >Accueil</router-link
            >
          </li>
          <li class="flex items-center justify-center mt-6">
            <div
              class="flex items-center justify-center text-white hover:text-gray-300 ml-4"
              active-class="text-blue-500"
            >
              <div
                class="relative inline-block text-left text-lg whitespace-nowrap"
              >
                <button
                  @click="toggleDropdowns"
                  class="flex text-white hover:text-gray-300 whitespace-nowrap"
                  active-class="text-white"
                >
                 Nos offres

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
                  class=" absolute left-0 mt-2  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
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
                      class="text-black hover:text-black"
                      active-class="text-slate-950"
                      to="/evenementPro"
                    >
                      Evènement Pro
                    </router-link>
                  </div>
                </div>
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
                      class="text-black hover:text-black"
                      active-class="text-slate-950"
                      to="/evenementEtudiant"
                    >
                      Evènement Etudiants
                    </router-link>
                  </div>
                </div>
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
                      class="text-black hover:text-black"
                      active-class="text-slate-950"
                      to="/evenementDigitals"
                    >
                      Evènement Digitaux
                    </router-link>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </li>
         
          <li
            @click="toggDropdown"
            class="flex items-center justify-center mt-6"
          >
            <router-link
              class="text-white hover:text-white ml-4 whitespace-nowrap"
              active-class="text-white whitespace-nowrap"
              to="/propos"
              >A propos</router-link
            >
          </li>
          <li
            @click="toggDropdown"
            class="flex items-center justify-center mt-6"
          >
            <router-link
              class="text-white hover:text-white ml-4 whitespace-nowrap"
              active-class="text-white whitespace-nowrap"
              to="/contact"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
      <!-- Menu -->
      <ul
        :class="{ hidden: !isMobileMenuOpen }"
        class="lg:flex lg:space-x-6 lg:text-lg ml-80 "
      >
        <li @click="toggDropdown">
          <router-link class="text-white" to="/">
            <span
              style="text-decoration-color: rgb(250 204 21); margin-bottom: 2px"
              class="hover:underline"
              >Accueil</span
            ></router-link
          >
        </li>
        <li class="">
          <div
            class="flex items-center justify-center text-white hover:text-gray-300 ml-9 hover:text-yellow-400 hover:underline"
            active-class="text-blue-500"
          >
            <div
              class="relative inline-block text-left text-lg whitespace-nowrap"
            >
              <button
                @click="toggleDropdowns"
                class="flex text-white whitespace-nowrap"
                active-class="text-white"
              >
                Nos offres

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
                class="origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
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
                    @click="toggDropdown"
                      class="text-black hover:text-black"
                      active-class="text-slate-950"
                        to="/evenementPro"
                    >
                      Evènement Pro
                    </router-link>
                  </div>
                </div>
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
                    @click="toggDropdown"
                      class="text-black hover:text-black"
                      active-class="text-slate-950"
                      to="/evenementEtudiant"
                    >
                      Evènement Etudiants
                    </router-link>
                  </div>
                </div>
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
                    @click="toggDropdown"
                      class="text-black hover:text-black"
                      active-class="text-slate-950"
                      to="/evenementDigitals"
                    >
                      Evènement Digitaux
                    </router-link>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </li>
     
        <li @click="toggDropdown">
          <router-link class="text-white ml-9 whitespace-nowrap" to="/propos"
            ><span
              style="text-decoration-color: rgb(250 204 21); margin-bottom: 2px"
              class="hover:underline"
              >A prpos</span
            ></router-link
          >
        </li>
        <li @click="toggDropdown">
          <router-link class="text-white ml-9 whitespace-nowrap" to="/contact"
            ><span
              style="text-decoration-color: rgb(250 204 21); margin-bottom: 2px"
              class="hover:underline"
              >Contact</span
            ></router-link
          >
        </li>
        

        <!-- Ajoutez les autres éléments de menu ici -->

        <!-- Sign in -->
        <li class=" hidden lg:block">
          <router-link
              v-if="this.user === undefined || this.user === ''"
              class="py-1 bg-blue-500 text-white ml-16 px-4 poppins rounded-lg ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105"
              to="/auth/login"
              >Se connecter</router-link
            >
          <div v-else>
            <div
              class="bg-white px-4 py-1 ml-16 text-white poppins rounded-lg ring-red-300 transform transition duration-700"
            >
              <button
                type="button"
                class="relative flex rounded-full text-sm"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
                @click="toggleDropdownsfil"
              >
                <img
                  class="rounded-full w-6 h-6"
                  src="../assets/c972ce3d5e2f4ea3d8d0b83ef3423dd1.png"
                  alt=""
                />
                <span class="ml-4 text-black whitespace-nowrap"
                  >{{this.name}}</span
                >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 ml-2 -mr-1 text-black"
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

              <!-- Dropdown menu -->
              <div
                v-show="isDropdownOpenPrfile"
                class="absolute right-0 z-10 mt-1 origin-top-right rounded-md bg-white w-48 py-1 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
              >
                <!-- Active: "bg-gray-100", Not Active: "" -->

                <router-link
                  class="block px-4 py-2 flex text-sm text-black font-bold"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-1"
                  to="/profils"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  <span
                    class="ml-2 text-blue-800 font-bold font-serif hover:text-blue-900"
                    >Profils</span
                  ></router-link
                >
                <h1
                  class="text-xl font-bold border border-yellow-400 ml-4"
                ></h1>
                <router-link
                  class="block px-4 py-2 flex text-sm text-black font-bold"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-1"
                  to="/mesevents"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  <span
                    class="ml-2 text-blue-800 font-bold font-serif hover:text-blue-900"
                    >Mes evenements</span
                  ></router-link
                >


                <button
                  @click="logout()"
                  class="block px-4 py-2 flex text-sm mt-2"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-2"
                >
                  <svg
                    width="15"
                    height="23"
                    viewBox="0 0 15 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="ml-2"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.58739 1.80188L7.86025 1.13043C11.0808 0.624343 12.6911 0.371297 13.7414 1.26942C14.7917 2.16754 14.7917 3.79759 14.7917 7.0577V10.4995H8.53897L11.4059 6.91591L9.84414 5.66652L5.67747 10.8748L5.17772 11.4995L5.67747 12.1242L9.84414 17.3326L11.4059 16.0832L8.53897 12.4995H14.7917V15.9414C14.7917 19.2015 14.7917 20.8316 13.7414 21.7297C12.6911 22.6278 11.0808 22.3747 7.86025 21.8687L3.58739 21.1972C1.97466 20.9438 1.16829 20.8171 0.688319 20.2558C0.208344 19.6945 0.208344 18.8782 0.208344 17.2457V5.7534C0.208344 4.12087 0.208344 3.30461 0.688319 2.74332C1.16829 2.18203 1.97466 2.05531 3.58739 1.80188Z"
                      fill="#001928"
                    />
                  </svg>

                  <span
                    class="ml-2 text-blue-800 font-bold font-serif hover:text-blue-900"
                    >Déconnexion</span
                  >
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
import TokenService from "../services/storage.service";
//import ApiService from "../services/api.service";
export default {
  name: "Navbar",
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
  created() {
    this.profile();
  },
  methods: {
    toggleDropdownsfil() {
      this.isDropdownOpenPrfile = !this.isDropdownOpenPrfile;
      this.isDropdownOpens = false;
      this.isDropdownOpen = false;
    },
    ClotoggleDropdownsfil() {
      this.isDropdownOpenPrfile = false;
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
      this.isDropdownOpens = false;
      this.isDropdownOpenPrfile = false;
    },
    ClotoggleDropdown() {
      this.isDropdownOpen = false;
    },
    toggDropdown() {
      this.isDropdownOpens = false;
      this.isDropdownOpen = false;
      this.isDropdownOpenPrfile = false;
    },
    toggleDropdowns() {
      this.isDropdownOpens = !this.isDropdownOpens;
      this.isDropdownOpen = false;
      this.isDropdownOpenPrfile = false;
    },
    toggleDrop() {
      this.isDropdownOpens = !this.isDropdownOpens;
      this.isOpen = !this.isOpen;
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
    },
    async profile() {
      try {
        const response = await axios.get("/api/profile");
        if (response.data) {
          this.name = response.data.name;
          this.user = response.data.id;
          this.imageUrl = response.data.profile_photo_path;
          console.log(this.user);
        }
      } catch (error) {
        this.user = error.data;
        console.log(this.user);
      }
    },
    async logout() {
      try {
        const response = await axios.get("/api/logout");
        if (response.status === 204) {
          TokenService.removeToken();
          this.user = "";
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {},
};
</script>
