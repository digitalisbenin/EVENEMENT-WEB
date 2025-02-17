<template>
  <div class="bg-white">
    <div
      class="lg:flex flex-col lg:flex-row space-x-1 hidden sm:block"
      style="height: 500px"
    >
      <!-- Première div -->
      <div class="lg:w-10/12 relative overflow-hidden w-full lg:h-auto h-1/2">
        <!-- Si aucun événement avec image n'est disponible -->
        <div
          v-if="usersdemande.length === 0"
          class="flex items-center justify-center text-gray-500 h-full"
        >
          <img
            src="../assets/1735650086soire.jpeg"
            alt="Default Image"
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <!-- Affichage des événements avec des images -->
        <div
          v-for="(event, index) in usersdemande"
          :key="event.id"
          :class="[
            'absolute inset-0 transition-opacity duration-1000',
            currentEventIndex === index ? 'opacity-100' : 'opacity-0',
          ]"
          :style="{ backgroundImage: `url(${event.image})` }"
          class="bg-cover bg-center flex items-center justify-center text-white h-full"
        >
          <!-- <div
        class="bg-black bg-opacity-50 p-4 rounded-lg text-center max-w-md"
      >
        <p class="text-lg font-bold">{{ event.name }} à {{ event.lieu }}</p>
        <p class="text-sm">
            {{ formatDateTime(event.date_debuit) }} - {{ event.montant }} FCFA
        </p>
        <p class="text-sm font-bold text-green-400 mt-1">En cours</p>
      </div> -->
        </div>
      </div>

      <!-- Deuxième div -->
      <div
        v-if="publications && publications.length > 0"
        class="flex-1 overflow-hidden lg:h-auto h-1/2 border-r-2 lg:border-green-500"
      >
        <!-- Boucle pour afficher les publications -->
        <div class="relative z-10" style="height: 250px; overflow: visible">
          <div class="carousel h-full">
            <div
              class="relative flex transition-transform duration-1000 h-full"
              :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
            >
              <div
                v-for="(event, index) in filteredPublications"
                :key="index"
                class="flex-shrink-0 w-full h-full"
              >
                <img 
                  :src="event.image"
                  class="w-full h-full object-contain"
                  alt="carousel image"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="mt-2" style="height: 250px; overflow: visible">
          <div class="carousel h-full">
            <div
              class="relative flex transition-transform duration-1000 h-full"
              :style="{ transform: `translateX(-${currentIndexs * 100}%)` }"
            >
              <div
                v-for="(event, index) in filteredPublications2"
                :key="index"
                class="flex-shrink-0 w-full h-full"
              >
                <img
                  :src="event.image"
                  class="w-full h-full object-contain"
                  alt="carousel image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="flex-1 overflow-hidden lg:h-auto h-1/2">
        <!-- Images fixes si le tableau est vide -->
        <div
          class="h-1/2 border-b-2 border-green-500 border-r-2 border-red-500"
        >
          <img
            src="../assets/Sitepourtous.jpg"
            alt="Default Image"
            class="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
        <div
          class="relative border-b-2 border-green-500 border-r-2 border-red-500"
          style="height: 250px"
        >
          <img
            src="../assets/mon-sitCopie.jpg"
            alt="Default Image"
            class="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
    <div class="lg:flex flex-col lg:flex-row block lg:hidden">
      <!-- Première div -->
      <div
        class="lg:w-10/12 relative overflow-hidden w-full lg:h-auto h-1/2"
        style="height: 400px"
      >
        <!-- Si aucun événement avec image n'est disponible -->
        <div
          v-if="usersdemande.length === 0"
          class="flex items-center justify-center text-gray-500 h-full"
        >
          <img
            src="../assets/1735650086soire.jpeg"
            alt="Default Image"
            class="w-full h-full"
            loading="lazy"
          />
        </div>

        <!-- Affichage des événements avec des images -->
        <div
          v-for="(event, index) in usersdemande"
          :key="event.id"
          :class="[
            'absolute inset-0 transition-opacity duration-1000',
            currentEventIndex === index ? 'opacity-100' : 'opacity-0',
          ]"
          :style="{ backgroundImage: `url(${event.image})` }"
          class="bg-cover bg-center flex items-center justify-center text-white h-full"
        >
          <!-- <div
        class="bg-black bg-opacity-50 p-4 rounded-lg text-center max-w-md"
      >
        <p class="text-lg font-bold">{{ event.name }} à {{ event.lieu }}</p>
        <p class="text-sm">
            {{ formatDateTime(event.date_debuit) }} - {{ event.montant }} FCFA
        </p>
        <p class="text-sm font-bold text-green-400 mt-1">En cours</p>
      </div> -->
        </div>
      </div>

      <!-- Deuxième div -->
      <div
        v-if="publications && publications.length > 0"
        class="flex-1 overflow-hidden lg:h-auto h-1/2 border-r-2 lg:border-green-500"
      >
        <!-- Boucle pour afficher les publications -->
        <div class="" style="height: 1500; overflow: visible">
          <div class="carousel h-full">
            <div
              class="relative flex transition-transform duration-1000 h-full"
              :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
            >
              <div
                v-for="(event, index) in publications"
                :key="index"
                class="flex-shrink-0 w-full h-full"
              >
                <img
                  :src="event.image"
                  class="w-full h-full border-t-2 border-green-400"
                  alt="carousel image"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="mt-2" style="height: 250px; overflow: visible">
          <div class="carousel h-full">
            <div
              class="relative flex transition-transform duration-1000 h-full"
              :style="{ transform: `translateX(-${currentIndexs * 100}%)` }"
            >
              <div
                v-for="(event, index) in publications.slice().reverse()"
                :key="index"
                class="flex-shrink-0 w-full h-full"
              >
                <img
                  :src="event.image"
                  class="w-full h-full object-contain"
                  alt="carousel image"
                />
              </div>
            </div>
          </div>
        </div> -->
      </div>

      <div v-else class="flex-1 overflow-hidden lg:h-auto h-1/2">
        <!-- Images fixes si le tableau est vide -->
        <!-- <div
          class="h-1/2 border-b-2 border-green-500 border-r-2 border-red-500"
        >
          <img
            src="../assets/Sitepourtous.jpg"
            alt="Default Image"
            class="w-full h-full object-contain"
            loading="lazy"
          />
        </div> -->
        <div
          class="relative border-b-2 border-green-500 border-r-2 border-red-500"
          style="height: 1500px"
        >
          <img
            src="../assets/mon-sitCopie.jpg"
            alt="Default Image"
            class="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white hidden sm:block">
    <div class="pb-8 mt-9 lg:mx-14 mx-6">
      <div class="relative">
        <div class="flex overflow-x-auto justify-center">
          <div
            v-for="(images, index) in partenairesAffiches"
            :key="index"
            class="flex-shrink-0 w-1/8 flex justify-center items-center p-4 bg-gray-200 m-2 rounded-lg"
          >
            <img
              :src="images.image"
              :alt="images.name"
              class="h-24 w-24 hover:text-gray-900 dark:hover:text-white object-contain"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- <div>
      <div class="hidden sm:block md:w-full lg:w-full my-6">
        <div class="flex">
          <div
            class="card-wrapper flex items-center justify-center"
            ref="cardWrapper"
          >
            <card-component
              v-for="(card, index) in partenaires"
              :key="index"
              :imageSrc="card.image"
              class="card-slider text-center md:card-md lg:card-lg"
            />
          </div>
        </div>
      </div>
    </div> -->
  </div>

  <div class="bg-white">
    <!-- Row -->

    <div class="lg:flex lg:mx-14 mx-6 mt-6 lg:mt-0">
      <h1 class="text-gray-900 lg:text-3xl text-lg font-bold">
        Événements à venir ou en cours
      </h1>
      <div class="lg:ml-auto">
        <!-- <div
          class="rounded-lg lg:ml-0 text-gray-900 p-1 border border-gray-300 bg-white overflow-hidden ring-red-300 focus:ring-4 mt-4 lg:mt-0 lg:w-96 flex items-center"
        >
          <input
            type="text"
            v-model="filter"
            class="rounded-lg px-4 focus:outline-none w-full bg-white text-gray-900"
            placeholder="Rechercher"
          />
        
          <button
            v-if="filter"
            type="button"
            @click="clearSearch"
            class="flex items-center justify-center w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 mr-2"
            aria-label="Clear"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-4 h-4 text-red-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
      
          <button
            type="button"
            @click="searchAction"
            class="flex items-center justify-center w-24 h-8 px-4 rounded-lg bg-orangeVif hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="Search"
          >
            Rechercher
          </button>
        </div> -->
        <div
          class="bg-white poppins rounded-lg ring-red-300 transform transition duration-700 mt-1 ml-2"
          @click="toggleDropdownsfil"
        >
          <!-- Dropdown Toggle Button -->
          <button
            type="button"
            class="relative flex rounded-md px-4 py-2 border border-gray-300"
            id="user-menu-button"
            aria-expanded="false"
            aria-haspopup="true"
          >
            <svg
              width="24"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12h12M2.25 7.5h19.5M9.75 16.5h4.5"
                stroke="#1A202C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="ml-2">Filtre</span>
          </button>

          <!-- Dropdown Menu -->
          <div
            v-show="isDropdownOpenPrfile"
            class="absolute right-0 z-10 bottom-full mb-2 origin-bottom-right rounded-md bg-white w-64 py-1 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            tabindex="-1"
          >
            <!-- Dropdown Content -->
            <div class="space-y-4 px-4">
              <!-- Ville Section -->
              <div>
                <label class="block text-sm font-bold mb-2">Ville</label>
                <div
                  class="flex items-center rounded-lg border border-gray-300 bg-white p-2"
                >
                  <input
                    type="text"
                    v-model="filter"
                    @click.stop
                    class="w-full rounded-lg px-4 focus:outline-none bg-white text-gray-900"
                    placeholder="Rechercher"
                  />
                  <button
                    v-if="filter"
                    type="button"
                    @click="clearSearch"
                    class="flex items-center justify-center w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 mr-2"
                    aria-label="Clear"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="w-4 h-4 text-red-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    @click="searchAction"
                    class="flex items-center justify-center px-4 h-8 rounded-lg bg-orangeVif hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    aria-label="Search"
                  >
                    Valider
                  </button>
                </div>
              </div>

              <!-- Categorie Section -->
              <div>
                <label class="block text-sm font-bold mb-2">Categorie</label>
                <div
                  class="flex items-center rounded-lg border border-gray-300 bg-white p-2"
                >
                  <input
                    type="text"
                    v-model="filters"
                    @click.stop
                    class="w-full rounded-lg px-4 focus:outline-none bg-white text-gray-900"
                    placeholder="Rechercher"
                  />
                  <button
                    v-if="filters"
                    type="button"
                    @click="clearSearchs"
                    class="flex items-center justify-center w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 mr-2"
                    aria-label="Clear"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="w-4 h-4 text-red-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    @click="searchActions"
                    class="flex items-center justify-center px-4 h-8 rounded-lg bg-orangeVif hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    aria-label="Search"
                  >
                    Valider
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-1 gap-y-4 mt-6 lg:mx-14 mx-6"
    >
      <div
        v-if="filteredDemandes.length === 0"
        class="text-gray-500 h-full text-center"
      >
        Aucun événement disponible.
      </div>

      <div
        v-for="event in filteredDemandes.slice(0, 16)"
        :key="event.id"
        class="bg-gray-200 p-4 rounded-lg shadow-md cursor-pointer"
      >
        <template v-if="event.is_correct === 1">
          <video
            @click="showEventDetails(event)"
            class="transform transition duration-300 hover:scale-105 h-56 w-full rounded-lg"
            :src="event.video"
            controls
          ></video>
        </template>
        <template v-else>
          <img
            @click="showEventDetails(event)"
            class="transform transition duration-300 hover:scale-105 h-56 w-full rounded-lg"
            :src="event.image"
            alt="Image de l'événement"
          />
        </template>
        <div class="py-5 w-full">
          <p
            class="mb-2 text-sm flex font-semibold text-gray-900 text-left h-12"
            @click="showEventDetails(event)"
          >
            {{ event.name.split(" ").slice(0, 5).join(" ")
            }}{{ event.name.split(" ").length > 5 ? "..." : "" }} à
            {{ event.lieu.split(" ").slice(0, 1).join(" ")
            }}{{ event.lieu.split(" ").length > 1 ? "..." : "" }}
          </p>

          <div class="flex justify-between items-center">
            <p
              class="mb-2 text-xs font-semibold text-gray-900 whitespace-nowrap"
            >
              {{ formatDateTime(event.date_debuit) }}
            </p>
            <p
              v-if="event.payement === 1"
              class="mb-2 text-lg font-semibold text-gray-900 text-right"
            >
              {{ event.montant }} FCFA
            </p>
            <p
              v-else-if="event.payement === 0"
              class="mb-2 text-lg font-semibold text-green-400 text-right"
            >
              Libre
            </p>
            <p
              v-else
              class="mb-2 text-lg font-semibold text-yellow-500 text-right"
            >
              Payant
            </p>
          </div>

          <div class="flex">
            <div class="flex text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6 mt-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <p class="ml-1 mt-1">{{ event.nbr_reading }}</p>
            </div>
            <div @click="like(event.id)" class="flex text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="ml-2 h-6 w-6 mt-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                />
              </svg>
              <p class="ml-1 mt-1">{{ event.nbr_likes }}</p>
            </div>

            <p
              class="text-lg font-bold text-left mt-1 ml-4"
              :class="{
                'text-green-500': isEventInProgress(event.date_debuit),
                'text-yellow-500': isEventUpcoming(event.date_debuit),
              }"
            >
              {{ getEventStatus(event.date_debuit) }}
            </p>
            <router-link
              :to="'/detailevents/' + event.id"
              class="ml-auto bg-orangeVif flex px-2 py-1 text-white font-bold rounded-lg"
            >
              Détail
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="cartIcon mt-1 ml-2 w-4 h-4 text-black"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div
        v-if="selectedEvent"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      >
        <div class="bg-white p-6 rounded-lg w-11/12 max-w-lg">
          <!-- Image de l'événement -->
          <!-- <img
      v-if="selectedEvent.image"
      :src="selectedEvent.image"
      alt="Image de l'événement"
      class="w-full h-48 object-cover rounded-t-lg mb-4"
    /> -->
          <img
            class="transform transition duration-300 hover:scale-105 h-56 w-full rounded-lg"
            v-if="selectedEvent.image"
            :src="selectedEvent.image"
            alt="Image de l'événement"
          />
          <video
            v-else-if="selectedEvent.video"
            :src="selectedEvent.video"
            controls
            class="w-full h-48 object-cover rounded-t-lg mb-4"
          ></video>

          <!-- Titre de l'événement -->
          <h2 class="text-2xl font-bold mb-4">{{ selectedEvent.name }}</h2>

          <!-- Informations supplémentaires -->
          <p><strong>Lieu :</strong> {{ selectedEvent.lieu }}</p>
          <p>
            <strong>Date :</strong>
            {{ formatDateTime(selectedEvent.date_debuit) }}
          </p>
          <p><strong>Description :</strong> {{ selectedEvent.description }}</p>

          <!-- Bouton de fermeture -->
          <button
            class="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            @click="closeModals"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
    <router-link
      to="/eventsencours"
      class="mx-auto mt-8 bg-orangeVif flex w-32 mb-4 justify-center items-center px-6 py-2 text-white font-bold rounded-lg shadow-md hover:bg-orange-600 transition duration-300 w-fit"
    >
      Voir plus
    </router-link>
    <!-- <div class="relative w-full h-64 overflow-hidden">
      <div class="carousel">
        <div
          class="absolute inset-0 flex transition-transform duration-1000"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <img
            v-for="(event, index) in publications"
            :key="index"
            :src="event.image"
            class="w-full h-64 object-cover"
            alt="carousel image"
          />
        </div>
      </div>
    </div> -->
    <!-- Row -->
  </div>

  <div class="bg-white">
    <!-- Row -->
    <div class="h-9"></div>
    <div class="lg:flex lg:mx-14 mx-6">
      <h1 class="text-gray-900 lg:text-3xl text-lg font-bold">
        Evénements terminés.
      </h1>
      <!-- <div class="lg:ml-auto">
        <div
          class="rounded-lg ml-9 lg:ml-0 text-gray-900 p-1 border border-gray-300 bg-white overflow-hidden ring-red-300 focus:ring-4 mt-4 lg:mt-0 lg:w-96 flex items-center"
        >
          <input
            type="text"
            v-model="filter"
            class="rounded-lg px-4 focus:outline-none w-full bg-white text-gray-900"
            placeholder="Rechercher"
          />
         
          <button
            v-if="filter"
            type="button"
            @click="clearSearch"
            class="flex items-center justify-center w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 mr-2"
            aria-label="Clear"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-4 h-4 text-red-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        
          <button
            type="button"
            @click="searchAction"
            class="flex items-center justify-center w-24 h-8 px-4 rounded-lg bg-orangeVif hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="Search"
          >
            Rechercher
          </button>
        </div>
      </div> -->
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-1 gap-y-4 mt-6 lg:mx-14 mx-6"
    >
      <div
        v-if="demandetermine.length === 0"
        class="text-gray-500 h-full text-center"
      >
        Aucun événement disponible.
      </div>

      <div
        v-for="event in demandetermine.slice(0, 8)"
        :key="event.id"
        class="bg-gray-200 p-4 rounded-lg shadow-md"
      >
        <template v-if="event.is_correct === 1">
          <video
            @click="showEventDetails(event)"
            class="transform transition duration-300 hover:scale-105 h-56 w-full rounded-lg"
            :src="event.video"
            controls
          ></video>
        </template>
        <template v-else>
          <img
            @click="showEventDetails(event)"
            class="transform transition duration-300 hover:scale-105 h-56 w-full rounded-lg"
            :src="event.image"
            alt=""
          />
        </template>
        <div class="py-5 w-full">
          <p
            class="mb-2 text-sm flex font-semibold text-gray-900 text-left h-12"
            @click="showEventDetails(event)"
          >
            {{ event.name.split(" ").slice(0, 5).join(" ")
            }}{{ event.name.split(" ").length > 5 ? "..." : "" }} à
            {{ event.lieu.split(" ").slice(0, 1).join(" ")
            }}{{ event.lieu.split(" ").length > 1 ? "..." : "" }}
          </p>

          <div class="flex justify-between items-center">
            <p
              class="mb-2 text-xs font-semibold text-gray-900 whitespace-nowrap"
            >
              {{ formatDateTime(event.date_debuit) }}
            </p>
            <p
              v-if="event.payement === 1"
              class="mb-2 text-lg font-semibold text-gray-900 text-right"
            >
              {{ event.montant }} FCFA
            </p>
            <p
              v-else-if="event.payement === 0"
              class="mb-2 text-lg font-semibold text-green-400 text-right"
            >
              Libre
            </p>
            <p
              v-else
              class="mb-2 text-lg font-semibold text-yellow-500 text-right"
            >
              Payant
            </p>
          </div>
          <div class="flex">
            <div class="flex text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6 mt-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <p class="ml-1 mt-1">{{ event.nbr_reading }}</p>
            </div>
            <div @click="like(event.id)" class="flex text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="ml-2 h-6 w-6 mt-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                />
              </svg>
              <p class="ml-1 mt-1">{{ event.nbr_likes }}</p>
            </div>
            <p class="text-sm font-bold text-left text-red-500 mt-1 ml-4">
              Terminer
            </p>
            <router-link
              :to="'/detailevents/' + event.id"
              class="ml-auto bg-orangeVif flex px-2 py-1 text-white font-bold rounded-lg"
            >
              Détail
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="cartIcon mt-1 ml-2 w-4 h-4 text-black"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </router-link>
          </div>
          <!-- <div class="flex mt-2 space-x-2">
            <button class="btn" @click="callNumber(event.telephone)">
              <span>Contacter</span>
            </button>
            
          </div> -->
        </div>
      </div>
      <!-- Modal -->
      <div
        v-if="selectedEvent"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      >
        <div class="bg-white p-6 rounded-lg w-11/12 max-w-lg">
          <!-- Image de l'événement -->
          <!-- <img
      v-if="selectedEvent.image"
      :src="selectedEvent.image"
      alt="Image de l'événement"
      class="w-full h-48 object-cover rounded-t-lg mb-4"
    /> -->
          <img
            class="transform transition duration-300 hover:scale-105 h-56 w-full rounded-lg"
            v-if="selectedEvent.image"
            :src="selectedEvent.image"
            alt="Image de l'événement"
          />
          <video
            v-else-if="selectedEvent.video"
            :src="selectedEvent.video"
            controls
            class="w-full h-48 object-cover rounded-t-lg mb-4"
          ></video>

          <!-- Titre de l'événement -->
          <h2 class="text-2xl font-bold mb-4">{{ selectedEvent.name }}</h2>

          <!-- Informations supplémentaires -->
          <p><strong>Lieu :</strong> {{ selectedEvent.lieu }}</p>
          <p>
            <strong>Date :</strong>
            {{ formatDateTime(selectedEvent.date_debuit) }}
          </p>
          <p><strong>Description :</strong> {{ selectedEvent.description }}</p>

          <!-- Bouton de fermeture -->
          <button
            class="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            @click="closeModals"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
    <router-link
      to="/eventsterminer"
      class="mx-auto mt-8 bg-orangeVif flex w-32 mb-4 justify-center items-center px-6 py-2 text-white font-bold rounded-lg shadow-md hover:bg-orange-600 transition duration-300 w-fit"
    >
      Voir plus
    </router-link>
    <!-- <div class="relative w-full h-64 overflow-hidden">
      <div class="carousel">
        <div
          class="absolute inset-0 flex transition-transform duration-1000"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <img
            v-for="(event, index) in publications"
            :key="index"
            :src="event.image"
            class="w-full h-64 object-cover"
            alt="carousel image"
          />
        </div>
      </div>
    </div> -->
    <!-- Row -->
  </div>
  <!-- <div class="bg-white">
    <div class="h-16"></div>
    <h1 class="text-white text-3xl font-bold mx-12">Événements terminé</h1>
    <div class="flex flex-wrap lg:mx-12 mt-4">
      <div
        v-for="event in filteredEvents"
        :key="event.id"
        class="mt-4 transition transform duration-700 hover:shadow-xl hover:scale-105 rounded-lg relative lg:ml-4 px-4"
      >
        <template v-if="event.is_correct === 1">
          <video
            class="transform transition duration-300 hover:scale-105 h-48 w-72 rounded-lg"
            :src="event.video"
            controls
          ></video>
        </template>
        <template v-else>
          <img
            class="transform transition duration-300 hover:scale-105 h-48 w-72 rounded-lg"
            :src="event.image"
            alt=""
          />
        </template>
        <div class="py-5 w-72">
          <p class="mb-2 text-sm flex font-semibold text-gray-900 text-left">
            {{ event.name }} à {{ event.lieu }}
          </p>
          <div class="flex">
            <a class="flex" href="#">
              <p
                class="mb-2 text-xs font-semibold text-gray-900 text-left whitespace-nowrap"
              >
                  {{ formatDateTime(event.date_debuit) }}
              </p>
              <p
                class="mb-2 text-xs font-semibold text-gray-900 text-left ml-16"
              >
                {{ event.montant }}FCFA
              </p>
            </a>
          </div>
          <p class="text-sm font-bold text-left text-red-500 mt-1">terminé</p>
          <div class="flex mt-2 space-x-2">
            <button class="btn" @click="callNumber(event.telephone)">
              <span>Contacter</span>
            </button>
            <router-link :to="'/detailevents/' + event.id" class="button">
              Détail
              <svg class="cartIcon" viewBox="0 0 576 512">
                <path
                  d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                ></path>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="relative w-full h-64 overflow-hidden">
      <div class="carousel">
        <div
          class="absolute inset-0 flex transition-transform duration-1000"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <img
            v-for="(event, index) in publications"
            :key="index"
            :src="event.image"
            class="w-full h-64 object-cover"
            alt="carousel image"
          />
        </div>
      </div>
    </div>
  </div> -->
  <div class="bg-white">
    <div class="h-9"></div>
    <div class="text-center">
      <h2 class="lg:text-3xl text-lg font-mono text-gray-900">TEMOIGNAGES</h2>
    </div>
    <div class="grid gap-2 lg:grid-cols-3 mx-9 mt-6">
      <div
        v-for="(temoignage, index) in temoingnages.filter(
          (t) => t.status === 'publier'
        )"
        :key="index"
        class="max-w-md p-4 border border-gray-900 rounded-3xl shadow-lg"
      >
        <div class="flex mt-4">
          <div
            v-if="temoignage.user.profile_photo_path === null"
            class="justify-start"
          >
            <img
              class="object-cover w-16 h-16 border-2 border-green-500 rounded-full"
              src="../assets/download.png"
              alt=""
            />
          </div>
          <div v-else class="justify-start">
            <img
              class="object-cover w-16 h-16 border-2 border-green-500 rounded-full"
              :src="temoignage.user.profile_photo_path"
              alt=""
            />
          </div>
          <a
            href="#"
            class="text-xl font-medium text-gray-900 mt-4 text-left ml-6"
          >
            {{ temoignage.user.name }} <br />
            <span class="text-sm">{{ temoignage.user.description }}</span>
          </a>
        </div>
        <div class="lg:h-24">
          <p class="mt-2 text-gray-900 text-left text-sm">
            {{ temoignage.content }}
          </p>
        </div>
      </div>
    </div>
    <div class="h-4"></div>
  </div>
  <ModalComponent :isOpen="isModalOpen" @close="closeModal" />
</template>

<script>
import axios from "axios";
import ModalComponent from "../components/ModalComponent .vue";
//import CardComponent from "../components/Cards.vue";
//import { VideoPlayer } from "@videojs-player/vue";
//import "video.js/dist/video-js.css";

export default {
  name: "App",
  components: {
    ModalComponent,
    //CardComponent,
    //VideoPlayer,
  },
  data() {
    return {
      isModalOpen: false,
      yourWidthVariable: "700%", // Ajoutez la valeur de la largeur souhaitée ici
      yourHeightVariable: "300%",
      videos: [],
      publications: [],
      usersdemande: [],
      demandetermine: [],
      promotions: [],
      temoingnages: [],
      currentIndex: 0,
      isDropdownOpen: false,
      isDropdownOpens: false,
      isMobileMenuOpen: false,
      isDropdownOpenPrfile: false,
      currentIndexs: 0,
      currentEventIndex: 0,
      filter: "",
      filters: "",
      filteredDemandes: [],
      partenaires: [],
      scrollInterval: null,
      selectedEvent: null,
      addforms: {
        vue: 1,

        demande_id: "",
      },
      addform: {
        description: "1",
        demande_id: "",
      },
    };
  },
  mounted() {
    this.getdemandeusers();
    this.getpublicite();
    this.startEventCarousel();
    this.startCarousel();
    this.startCarousels();
    this.getdemande();
    this.getemoignage();

    this.getPartenaire();
    this.getdemandeTermine();
    //this.startAutoScroll();
  },
  // beforeUnmount() {
  //   clearInterval(this.scrollInterval);
  // },
  computed: {
    filteredPublications() {
    return this.publications.filter(event => event.status == 'valider');
  },
  filteredPublications2() {
    return this.publications.filter(event => event.status == 'terminer');
  },
    // filteredEvent() {
    //   // Filtre uniquement les événements qui ont une image définie
    //   return this.videos.filter(
    //     (event) => event.image && event.image.trim() !== ""
    //   );
    // },
    partenairesAffiches() {
      return this.partenaires.filter((image) => image.status === "afficher");
    },
    sortedBlogs() {
      // Triez les vidéos par date de création dans l'ordre décroissant
      return this.filteredDemandes
        .slice()
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    },
  },
  methods: {
    showEventDetails(event) {
      this.selectedEvent = event;
      this.vue(event.id);
      //this.like(event.id)
    },
    closeModals() {
      this.selectedEvent = null;
    },
    async vue(id) {
      try {
        this.addforms.demande_id = id;
        const response = await axios.post("/api/vues", this.addforms);
        if (response.status === 201 || response.status === 200) {
          this.addforms = {};
        }
      } catch (error) {
        if (error.response.status !== 500) {
          this.showAlert = true;
          this.alert.message =
            "Quelque chose s'est mal passé. Merci d'essayer plus tard !";
          setTimeout(() => {
            this.showAlert = false;
          }, 5000);
        }
      }
    },
    async like(id) {
      try {
        this.addform.demande_id = id;
        const response = await axios.post("/api/likes", this.addform);
        if (response.status === 201 || response.status === 200) {
          this.addform = {};
          this.getdemande();
          this.getdemandeTermine();
        }
      } catch (error) {
        if (error.response.status !== 500) {
          this.showAlert = true;
          this.alert.message =
            "Quelque chose s'est mal passé. Merci d'essayer plus tard !";
          setTimeout(() => {
            this.showAlert = false;
          }, 5000);
        }
      }
    },
    startEventCarousel() {
      this.carouselInterval = setInterval(() => {
        this.currentEventIndex =
          (this.currentEventIndex + 1) % this.usersdemande.length;
      }, 3000); // 3 secondes
    },
    startCarousel() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.publications.length;
      }, 180000);
    },
    startCarousels() {
      setInterval(() => {
        this.currentIndexs =
          (this.currentIndexs + 1) % this.publications.length;
      }, 240000);
    },
    async getdemandeusers() {
      try {
        const response = await axios.get(`/api/demandeusers`);
        if (response.data) {
          this.usersdemande = response.data.data;
          //this.filteredDemandes = this.demandes;
          this.startEventCarousel();
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    async getdemandeTermine() {
      try {
        const response = await axios.get("/api/demandeterminer");
        if (response.data) {
          this.demandetermine = response.data.data;
          this.filteredDemandes = this.videos;
          console.log(this.videos);
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    async getdemande() {
      try {
        const response = await axios.get("/api/demandes");
        if (response.data) {
          this.videos = response.data.data;
          this.filteredDemandes = this.videos;
          console.log(this.videos);
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    async getPartenaire() {
      try {
        const response = await axios.get("/api/partenaires");
        if (response.data) {
          this.partenaires = response.data.data;
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    searchAction() {
      // Effectuer la recherche lorsque le bouton est cliqué
      const searchTerm = this.filter.toLowerCase();
      this.filteredDemandes = this.videos.filter((restaurant) => {
        const lieu =
          restaurant.lieu && typeof restaurant.lieu === "string"
            ? restaurant.lieu.toLowerCase()
            : "";
        return lieu.includes(searchTerm);
      });
    },
    searchActions() {
      // Effectuer la recherche lorsque le bouton est cliqué
      const searchTerm = this.filters.toLowerCase();
      this.filteredDemandes = this.filteredDemandes.filter((restaurant) => {
        const name =
          restaurant.type_demande.name &&
          typeof restaurant.type_demande.name === "string"
            ? restaurant.type_demande.name.toLowerCase()
            : "";
        return name.includes(searchTerm);
      });
    },
    clearSearch() {
      // Réinitialiser le champ de recherche
      this.filter = "";
      this.filteredDemandes = this.videos; // Réinitialiser les résultats
    },
    clearSearchs() {
      // Réinitialiser le champ de recherche
      this.filters = "";
      this.filteredDemandes = this.videos; // Réinitialiser les résultats
    },
    async getpublicite() {
      try {
        const response = await axios.get("/api/publictes");
        if (response.data) {
          this.publications = response.data.data;
          this.promotions = response.data.data[1];
          this.getdemandeusers();
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    async getemoignage() {
      try {
        const response = await axios.get("/api/temoingnages");
        if (response.data) {
          this.temoingnages = response.data.data;
          console.log(this.publications);
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    formatDateTime(dateString) {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };

      const date = new Date(dateString);

      return new Intl.DateTimeFormat("fr-FR", options).format(date);
    },
    getImage(index) {
      return this.images[(this.currentIndex + index - 1) % this.images.length];
    },
    toggleDropdownsfil() {
      this.isDropdownOpenPrfile = !this.isDropdownOpenPrfile;
    },
    openModal() {
      this.isModalOpen = true; // Ouvrir le modal
    },
    closeModal() {
      this.isModalOpen = false; // Fermer le modal
    },
    callNumber(tele) {
      window.location.href = `tel:${tele}`;
    },
    //  startAutoScroll() {
    //     const container = this.$refs.scrollContainer;
    //     const scrollAmount = container.scrollWidth / this.partenaires.length; // Ajuste la quantité de défilement

    //     // Défilement automatique toutes les 2 secondes
    //     this.scrollInterval = setInterval(() => {
    //       if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
    //         container.scrollLeft = 0; // Repart de la gauche si on est à la fin
    //       } else {
    //         container.scrollLeft += scrollAmount; // Défile à droite
    //       }
    //     }, 2000); // Ajustez ce délai selon vos besoins
    //   },
    isEventInProgress(date_debuit) {
      const today = new Date().toISOString().split("T")[0]; // Date du jour (AAAA-MM-JJ)
      const eventDate = new Date(date_debuit).toISOString().split("T")[0];
      return today === eventDate; // Compare uniquement les dates
    },
    isEventUpcoming(date_debuit) {
      const today = new Date().toISOString().split("T")[0]; // Date du jour (AAAA-MM-JJ)
      const eventDate = new Date(date_debuit).toISOString().split("T")[0];
      return eventDate > today; // Compare uniquement les dates
    },
    getEventStatus(date_debuit) {
      const today = new Date().toISOString().split("T")[0];
      const eventDate = new Date(date_debuit).toISOString().split("T")[0];
      if (today === eventDate) return "En cours";
      if (eventDate > today) return "À venir";
      return "Terminé"; // Si nécessaire
    },
  },
};
</script>

<style scoped>
@keyframes swiperScroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(
      -100%
    ); /* Assurez-vous que la valeur correspond à la largeur d'un élément */
  }
}

.card-container {
  display: flex;
  width: 100%;
  overflow: hidden;
}
.card-wrapper {
  width: 100%;
  overflow: hidden;
  display: flex;
  animation: swiperScroll 60s linear infinite;
  white-space: nowrap;
}
.card-slide {
  flex: 0 0 auto;
}
.carousel-slide {
  flex: 0 0 100%;
  transition: transform 0.5s ease;
}

.active-slide {
  transform: translateX(0);
}

/* efrfz */
.bg-cover {
  background-size: cover;
}
.bg-center {
  background-position: center;
}
.transition-opacity {
  transition: opacity 1s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.scroll-smooth {
  scroll-behavior: smooth;
}

.no-scrollbar::-webkit-scrollbar {
  display: none; /* Cache la barre de défilement */
}
.slider-item {
  animation: slide 15s linear infinite;
}

.carousel img {
  flex-shrink: 0;
  min-width: 100%;
  min-height: 100%;
}
@keyframes slide {
  0%,
  100% {
    transform: translateX(0%);
  }

  25% {
    transform: translateX(-100%);
  }

  50% {
    transform: translateX(-200%);
  }

  75% {
    transform: translateX(-300%);
  }
}
.btn {
  --fancy-button-gradient-0: #fb5f0e;
  --fancy-button-gradient-50: #fb5f0e;
  --fancy-button-gradient-100: #fb5f0e;
  --fancy-button-inner-shadow-top: rgba(233, 209, 255, 0.2);
  --fancy-button-inner-shadow-top-lg: rgba(9, 12, 60, 0.1);
  --fancy-button-inner-shadow-bottom: rgba(137, 222, 246, 0.3);
  --fancy-button-shine-top: #e9d1ff;
  --fancy-button-shine-bottom: #adfff9;
  font-family: "Poppins";
  font-weight: 500;
  font-size: 15px;
  line-height: 21px;
  text-shadow: 0px 0.5px 0.5px rgba(0, 0, 0, 0.2);
  padding: 0;
  margin: 0;
  appearance: none;
  border: none;
  outline: none;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  z-index: 1;
  border-radius: 25px;
  color: #fff;
  background-image: linear-gradient(
    to bottom,
    var(--fancy-button-gradient-0) 0%,
    var(--fancy-button-gradient-50) 50%,
    var(--fancy-button-gradient-100) 100%
  );
  box-shadow: 0px 4px 12px rgba(9, 12, 60, 0.15),
    0px 2px 8px rgba(9, 12, 60, 0.15),
    0px 1px 3px var(--fancy-button-inner-shadow-top-lg),
    inset 0px 1px 1px var(--fancy-button-inner-shadow-top),
    inset 0px -1px 3px var(--fancy-button-inner-shadow-bottom);
}

.btn:before,
.btn:after {
  content: "";
  position: absolute;
  border-radius: inherit;
  will-change: transform;
}

.btn:before {
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--fancy-button-shine-top);
  width: 96px;
  height: 6px;
  top: -3px;
  opacity: 0.6;
  filter: blur(6px);
  transition: opacity 0.25s;
}

.btn:after {
  inset: 0;
  background-size: cover;
  z-index: 2;
  opacity: 0.3;
  mix-blend-mode: overlay;
  pointer-events: none;
}

.btn span {
  display: block;
  padding: 12px 24px;
  border-radius: inherit;
  overflow: hidden;
  position: relative;
  background-image: linear-gradient(
    to bottom,
    var(--fancy-button-shine-top),
    transparent 8px
  );
  background-position: 0 -6px;
  background-repeat: no-repeat;
  z-index: 1;
}

.btn span:before,
.btn span:after {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  background-color: var(--fancy-button-shine-bottom);
  transition: opacity 0.25s, transform 0.25s;
  will-change: transform;
}

.btn span:before {
  width: 92px;
  height: 8px;
  bottom: -4px;
  opacity: 0.75;
  filter: blur(6px);
}

.btn span:after {
  width: 112px;
  height: 1px;
  bottom: 0;
  opacity: 0.9;
  filter: blur(1px);
}

.btn:hover span:before {
  opacity: 0.8;
}

.btn:hover span:before {
  transform: translateX(-50%) scale(1.25);
}

.btn:hover span:after {
  opacity: 1;
}

.button {
  width: 180px;
  height: 40px;
  background-image: linear-gradient(rgb(63, 220, 15), rgb(63, 220, 15));
  border: none;
  border-radius: 50px;
  color: rgb(255, 255, 255);
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  box-shadow: 1px 3px 0px rgb(63, 220, 15);
  transition-duration: 0.3s;
}

.cartIcon {
  width: 14px;
  height: fit-content;
}

.cartIcon path {
  fill: white;
}

.button:active {
  transform: translate(2px, 0px);
  box-shadow: 0px 1px 0px rgb(139, 113, 255);
  padding-bottom: 1px;
}
</style>
