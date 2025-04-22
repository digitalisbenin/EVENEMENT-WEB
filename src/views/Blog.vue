<template>
  <img src="../assets/2.jpg" alt="" class="" loading="lazy" />
  <div class="bg-white">
    <div class="lg:flex lg:mx-12 mx-6 mt-4">
      <h1 class="text-gray-900 lg:text-3xl text-lg font-bold lg:mt-0 lg:ml-4">
        Evènements de catégorie concert
      </h1>

      <div class="lg:ml-auto">
        <div
          class="rounded-lg lg:ml-0 text-gray-900 p-1 border border-gray-300 bg-white overflow-hidden ring-red-300 focus:ring-4 mt-4 lg:mt-0 lg:w-96 flex items-center"
        >
          <input
            type="text"
            v-model="filter"
            class="rounded-lg px-4 focus:outline-none w-full bg-white text-gray-900"
            placeholder="Rechercher"
          />
          <!-- Bouton pour effacer la recherche -->
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
          <!-- Bouton pour lancer la recherche -->
          <button
            type="button"
            @click="searchAction"
            class="flex items-center justify-center w-24 h-8 px-4 rounded-lg bg-orangeVif hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="Search"
          >
            Rechercher
          </button>
        </div>
      </div>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-1 gap-y-4 mt-4 lg:mx-14 mx-6"
    >
      <div
        v-if="filteredDemandes.length === 0"
        class="text-gray-500 h-full text-center"
      >
        Aucun événement disponible.
      </div>

      <div
        v-for="event in filteredDemandes"
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
              v-if="event.jours === null"
              class="mb-2 text-xs font-semibold text-gray-900 whitespace-nowrap"
            >
              {{ formatDateTime(event.date_debuit) }}
            </p>
            <p
              v-else
              class="mb-2 text-xs font-semibold text-gray-900 whitespace-nowrap"
            >
              Tous les {{ event.jours }}s à {{ formatTime(event.date_debuit) }}
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
                class="h-4 w-4 mt-1"
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
              <p class="ml-1">{{ event.nbr_reading }}</p>
            </div>
            <button @click="like(event.id)" class="flex text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="ml-2 h-4 w-4 mt-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                />
              </svg>
              <p class="ml-1">{{ event.nbr_likes }}</p>
            </button>
           <p v-if="event.jours === null"
              class="text-sm font-bold text-left mt-0.5 ml-4"
              :class="{
                'text-green-500': isEventInProgress(event.date_debuit),
                'text-yellow-500': isEventUpcoming(event.date_debuit),
              }"
            >
              {{ getEventStatus(event.date_debuit) }}
            </p>
            <p v-if="event.jours && event.jours.toLowerCase() === currentDay.toLowerCase()"
              class="text-sm font-bold text-left text-green-500 mt-0.5 ml-4"
              :class="{
                'text-green-500': isEventInProgress(event.date_debuit),
                'text-yellow-500': isEventUpcoming(event.date_debuit),
              }"
            >
              Aujourd'hui 
            </p>
             <p v-if="event.jours && event.jours.toLowerCase() !== currentDay.toLowerCase()"
              class="text-sm font-bold text-left mt-0.5 ml-4 text-yellow-500"
              :class="{
                'text-green-500': isEventInProgress(event.date_debuit),
                'text-yellow-500': isEventUpcoming(event.date_debuit),
              }"
            >
             
              À venir
            </p>
            <router-link
              :to="'/detailevents/' + event.id"
              class="ml-auto bg-orangeVif flex items-center px-1.5 py-0.5 text-xs text-white font-semibold rounded-md"
            >
              Détail
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="ml-1 w-3.5 h-3.5 text-white"
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
        <div class="relative bg-white p-6 rounded-lg w-11/12 max-w-lg">
          <!-- Bouton de fermeture avec SVG -->
          <button
            @click="closeModals"
            class="absolute top-0 right-0 text-gray-600 hover:text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 bg-red-500 p-1 rounded-tr-lg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <!-- Image ou vidéo -->
          <img
            v-if="selectedEvent.image"
            :src="selectedEvent.image"
            alt="Image de l'événement"
            class="transform transition duration-300 hover:scale-105 rounded-lg"
            style="height: 350px; width: 500px"
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
          <p v-if="selectedEvent.jours === null">
            <strong>Date :</strong>
            {{ formatDateTime(selectedEvent.date_debuit) }}
          </p>
          <p v-else>
            <strong>Date :</strong>
             Tous les {{ selectedEvent.jours }} à {{ formatTime(selectedEvent.date_debuit) }}
          </p>
          <p><strong>Description :</strong> {{ selectedEvent.description }}</p>
        </div>
      </div>
    </div>
    <!-- <router-link
      to="/eventcategoriencours/2"
      class="mx-auto mt-8 bg-orangeVif flex w-32 mb-4 justify-center items-center px-6 py-2 text-white font-bold rounded-lg shadow-md hover:bg-orange-600 transition duration-300 w-fit"
    >
      Voir plus
    </router-link> -->
    <section
      class="mt-6 rounded-lg shadow-md lg:mx-14 mx-6 bg-gray-200 lg:h-16 mb-4"
    >
      <div class="container mx-auto px-4">
        <div
          class="rounded-xl p-2 flex flex-col md:flex-row items-center justify-between md:space-y-0 md:space-x-6"
        >
          <!-- Icon + Text -->

          <div class="text-black">
            <h3
              class="text-xl md:text-2xl font-semibold normal-case animate-color-pulse italic"
            >
              Vous voulez voir plus d'événements en cours ou à venir ? Cliquez
              ici.
            </h3>
          </div>

          <!-- Button -->
          <router-link
            to="/eventcategoriencours/2"
            class="bg-white text-[#5DAE99] font-semibold px-6 italic py-3 rounded-lg shadow-md hover:bg-gray-100 transition animate-fadeInUp flex items-center space-x-2"
          >
            <span>Voir plus</span>
            <!-- <i class="fas fa-chevron-right"></i> -->
          </router-link>
        </div>
      </div>
    </section>
  </div>
  <div class="bg-white">
    <!-- Row -->
    <div class="lg:flex lg:mx-14 mx-6">
      <h1 class="text-red-500 lg:text-3xl text-lg font-bold">
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
                class="h-4 w-4 mt-1"
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
              <p class="ml-1">{{ event.nbr_reading }}</p>
            </div>
            <button @click="like(event.id)" class="flex text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="ml-2 h-4 w-4 mt-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                />
              </svg>
              <p class="ml-1">{{ event.nbr_likes }}</p>
            </button>
            <p class="text-sm font-bold text-left text-red-500 mt-0.5 ml-4">
              Terminé
            </p>
            <router-link
              :to="'/detailevents/' + event.id"
              class="ml-auto bg-orangeVif flex items-center px-1.5 py-0.5 text-xs text-white font-semibold rounded-md"
            >
              Détail
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="ml-1 w-3.5 h-3.5 text-white"
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
        <div class="relative bg-white p-6 rounded-lg w-11/12 max-w-lg">
          <!-- Bouton de fermeture avec SVG -->
          <button
            @click="closeModals"
            class="absolute top-0 right-0 text-gray-600 hover:text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 bg-red-500 p-1 rounded-tr-lg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <!-- Image ou vidéo -->
          <img
            v-if="selectedEvent.image"
            :src="selectedEvent.image"
            alt="Image de l'événement"
            class="transform transition duration-300 hover:scale-105 rounded-lg"
            style="height: 350px; width: 500px"
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
          <p v-if="selectedEvent.jours === null">
            <strong>Date :</strong>
            {{ formatDateTime(selectedEvent.date_debuit) }}
          </p>
          <p v-else>
            <strong>Date :</strong>
             Tous les {{ selectedEvent.jours }} à {{ formatTime(selectedEvent.date_debuit) }}
          </p>
          <p><strong>Description :</strong> {{ selectedEvent.description }}</p>
        </div>
      </div>
    </div>
    <!-- <router-link
      to="/eventcategorieterminer/2"
      class="mx-auto mt-8 bg-orangeVif flex w-32 mb-4 justify-center items-center px-6 py-2 text-white font-bold rounded-lg shadow-md hover:bg-orange-600 transition duration-300 w-fit"
    >
      Voir plus
    </router-link> -->
    <section
      class="mt-6 rounded-lg shadow-md lg:mx-14 mx-6 bg-gray-200 lg:h-16 mb-6"
    >
      <div class="container mx-auto px-4">
        <div
          class="rounded-xl p-2 flex flex-col md:flex-row items-center justify-between md:space-y-0 md:space-x-6"
        >
          <!-- Icon + Text -->

          <div class="text-white">
            <h3
              class="text-xl md:text-2xl font-semibold normal-case animate-color-pulses italic"
            >
              Vous voulez voir plus d'événements terminés ? cliquez ici.
            </h3>
            <!-- <p class="text-sm">Lorem ipsum dolor sit amet, consectetur notted adipisicin</p> -->
          </div>

          <router-link
            to="/eventcategorieterminer/2"
            class="bg-white text-[#5DAE99] font-semibold italic px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition animate-fadeInUp flex items-center space-x-2"
          >
            <span>Voir plus</span>
            <!-- <i class="fas fa-chevron-right"></i> -->
          </router-link>
        </div>
      </div>
    </section>
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
</template>

<script>
import axios from "axios";
export default {
  name: "Blog",
  data() {
    return {
      demandes: [],
      currentPage: 1,
      itemsPerPage: 5,
      filter: "",
      filteredDemandes: [],
      demandetermine: [],
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
    this.getdemande();
    this.getdemandeTypeTerminer();
  },
  created() {},
  watch: {
    "$route.params.id": {
      immediate: true,
      handler(newVal, oldVal) {
        // Recharger les données ou actualiser la page ici
        if (newVal !== oldVal) {
          this.getdemande();
        }
      },
    },
  },
  computed: {
     currentDay() {
      const jours = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
      return jours[new Date().getDay()]
    },
    //   filtereddemande() {
    //   const searchTerm = this.filter.toLowerCase();
    //   const filtered_data = this.demandes.filter((restaurants) => {
    //     if (!restaurants.name) {
    //       console.log('Name is missing for:', restaurants); // Affiche l'objet sans `name`
    //     }
    //     const name = restaurants.name && typeof restaurants.name === 'string' ? restaurants.name.toLowerCase() : '';
    //     return name.includes(searchTerm);
    //   });
    //   return filtered_data;
    // }
    // ,

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
          this.getdemandeTypeTerminer();
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
    async getdemande() {
      try {
        const response = await axios.get(
          `/api/demandestype?type_demande_id=${this.$route.params.id}`
        );
        if (response.data) {
          this.demandes = response.data.data;
          this.filteredDemandes = this.demandes;
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    async getdemandeTypeTerminer() {
      try {
        const response = await axios.get(
          `/api/demandetypeterminer?type_demande_id=${this.$route.params.id}`
        );
        if (response.data) {
          this.demandetermine = response.data.data;
          //this.filteredDemandes = this.demandes;
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
    formatTime(dateString) {
      const options = {
        hour: "2-digit",
        minute: "2-digit",
      };

      const date = new Date(dateString);

      return new Intl.DateTimeFormat("fr-FR", options).format(date);
    },
    searchAction() {
      // Effectuer la recherche lorsque le bouton est cliqué
      const searchTerm = this.filter.toLowerCase();
      this.filteredDemandes = this.demandes.filter((restaurant) => {
        const lieu =
          restaurant.lieu && typeof restaurant.lieu === "string"
            ? restaurant.lieu.toLowerCase()
            : "";
        return lieu.includes(searchTerm);
      });
    },
    clearSearch() {
      // Réinitialiser le champ de recherche
      this.filter = "";
      this.filteredDemandes = this.demandes; // Réinitialiser les résultats
    },

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
      if (today === eventDate) return "Aujourd'hui";
      if (eventDate > today) return "À venir";
      return "Terminé"; // Si nécessaire
    },
  },
};
</script>
<style scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
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
@keyframes colorPulses {
  0%,
  49% {
    color: #000000; /* Noir */
  }
  50%,
  100% {
    color: #f01010; /* Vert */
  }
}

.animate-color-pulses {
  animation: colorPulses 12s infinite ease-in-out;
}

@keyframes colorPulse {
  0%,
  49% {
    color: #000000; /* Noir */
  }
  50%,
  100% {
    color: #17dc34; /* Vert */
  }
}

.animate-color-pulse {
  animation: colorPulse 12s infinite ease-in-out;
}
</style>
