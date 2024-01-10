<template>
<div class="custom-background2 h-screen">
  <div class="mt-2 ">
    <div class="flex ml-32 mr-32 ">
      <div class="flex bg-blue-500 rounded-full py-2 px-2 text-white mt-6">
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
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>

        <p class="ml-2 mt-1 font-sans">Posez votre question</p>
      </div>
      <div class="ml-auto mt-6">
        <div
          class="rounded-full text-gray-900 p-1 py-2 border border-gray-300 bg-white overflow-hidden ring-red-300 focus:ring-4 w-96 flex items-center py-1"
        >
          <input
            type="text"
            class="rounded-full px-4 focus:outline-none w-full bg-white text-gray-900"
            placeholder="Rechercher"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 mr-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div
      class="flex ml-32 mr-32 mt-9 bg-purple-900 rounded-lg text-white px-4 py-2"
    >
      <p class="font-sans">Résultats 1 - 50 sur un total d'environ 1090</p>
      <p class="ml-auto font-sans">Résolues | Fréquentes|</p>
    </div>
    <div class="flex ml-32 mr-32 mt-9">
      <div>
        <router-link  to="/blogplus" class="hover:text-blue-500">
        <h1 class="text-3xl font-mono">Lorem ipsum dolor, consectetuer</h1></router-link>
        <p class="text-left">Par Zar447, 27 janvier 2014</p>
      </div>
      <div class="ml-auto flex">
        <div class="mr-9">
          <p class="text-left">7 réponses</p>
          <p class="text-left">1,3k vues</p>
        </div>
        <div class="flex">
          <div class="justify-start">
            <img
              class="object-cover w-16 h-16 border-2 border-green-500 rounded-full"
              src="https://cdn.pixabay.com/photo/2018/01/18/17/48/purchase-3090818__340.jpg"
            />
          </div>
          <div class="mt-1 ml-2">
            <p class="text-left">Zitch Pierre</p>
            <p class="text-left">31 Août 2023</p>
          </div>
        </div>
      </div>
    </div>
    <hr class="border-b border-gray-300 my-4 ml-32 mr-32" />
    <div class="flex ml-32 mr-32 mt-4">
      <div>
        <h1 class="text-3xl font-mono">Lorem ipsum dolor, consectetuer</h1>
        <p class="text-left">Par Zar447, 27 janvier 2014</p>
      </div>
      <div class="ml-auto flex">
        <div class="mr-9">
          <p class="text-left">7 réponses</p>
          <p class="text-left">1,3k vues</p>
        </div>
        <div class="flex">
          <div class="justify-start">
            <img
              class="object-cover w-16 h-16 border-2 border-green-500 rounded-full"
              src="https://cdn.pixabay.com/photo/2018/01/18/17/48/purchase-3090818__340.jpg"
            />
          </div>
          <div class="mt-1 ml-2">
            <p class="text-left">Zitch Pierre</p>
            <p class="text-left">31 Août 2023</p>
          </div>
        </div>
      </div>
    </div>
    <hr class="border-b border-gray-300 my-4 ml-32 mr-32" />
    <div class="flex ml-32 mr-32 mt-4">
      <div>
        <h1 class="text-3xl font-mono">Lorem ipsum dolor, consectetuer</h1>
        <p class="text-left">Par Zar447, 27 janvier 2014</p>
      </div>
      <div class="ml-auto flex">
        <div class="mr-9">
          <p class="text-left">7 réponses</p>
          <p class="text-left">1,3k vues</p>
        </div>
        <div class="flex">
          <div class="justify-start">
            <img
              class="object-cover w-16 h-16 border-2 border-green-500 rounded-full"
              src="https://cdn.pixabay.com/photo/2018/01/18/17/48/purchase-3090818__340.jpg"
            />
          </div>
          <div class="mt-1 ml-2">
            <p class="text-left">Zitch Pierre</p>
            <p class="text-left">31 Août 2023</p>
          </div>
        </div>
      </div>
    </div>
    <hr class="border-b border-gray-300 my-4 ml-32 mr-32" />
    <div class="flex ml-32 mr-32 mt-4">
      <div>
        <h1 class="text-3xl font-mono">Lorem ipsum dolor, consectetuer</h1>
        <p class="text-left">Par Zar447, 27 janvier 2014</p>
      </div>
      <div class="ml-auto flex">
        <div class="mr-9">
          <p class="text-left">7 réponses</p>
          <p class="text-left">1,3k vues</p>
        </div>
        <div class="flex">
          <div class="justify-start">
            <img
              class="object-cover w-16 h-16 border-2 border-green-500 rounded-full"
              src="https://cdn.pixabay.com/photo/2018/01/18/17/48/purchase-3090818__340.jpg"
            />
          </div>
          <div class="mt-1 ml-2">
            <p class="text-left">Zitch Pierre</p>
            <p class="text-left">31 Août 2023</p>
          </div>
        </div>
      </div>
    </div>
    <hr class="border-b border-gray-300 my-4 ml-32 mr-32" />
    <div class="flex ml-32 mr-32 mt-4">
      <div>
        <h1 class="text-3xl font-mono">Lorem ipsum dolor, consectetuer</h1>
        <p class="text-left">Par Zar447, 27 janvier 2014</p>
      </div>
      <div class="ml-auto flex">
        <div class="mr-9">
          <p class="text-left">7 réponses</p>
          <p class="text-left">1,3k vues</p>
        </div>
        <div class="flex">
          <div class="justify-start">
            <img
              class="object-cover w-16 h-16 border-2 border-green-500 rounded-full"
              src="https://cdn.pixabay.com/photo/2018/01/18/17/48/purchase-3090818__340.jpg"
            />
          </div>
          <div class="mt-1 ml-2">
            <p class="text-left">Zitch Pierre</p>
            <p class="text-left">31 Août 2023</p>
          </div>
        </div>
      </div>
    </div>
    <hr class="border-b border-gray-300 my-4 ml-32 mr-32" />
  </div>
</div>
</template>
  
  <script>
export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
  
  <style scoped>
  
.custom-background2 {
  background-image: url("~@/assets/degrade.jpg");
  /* Remplacez 'votre-image.jpg' par le nom de votre image */
  background-size: cover;
  /* Ajustez la taille de l'image */
  background-repeat: no-repeat;
  background-position: center center;
  /* Centrez l'image */
  /* Ajoutez d'autres styles Tailwind CSS ou CSS personnalisés au besoin */
}
</style>
  