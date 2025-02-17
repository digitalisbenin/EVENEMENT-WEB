<!-- Card.vue -->

<template>
    
    <div class="px-1 min-w-fit test">
      <div class="overflow-hidden flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100  sm:flex-col">

       
         <div class="flex items-center p-1 bg-gray-200">
      <img class="object-cover w-18 h-24 mr-1 rounded-full" :src="imageSrc" alt="Image de profil">
      <div class="flex-1">
        <h5 class="text-lg font-bold text-gray-900">{{ title }}</h5>
        <p class="text-gray-700">{{ description }}</p>
      </div>
    </div>
      </div>
    </div>
    
  </template>
  
  <script>
  export default {
    props: {
       
    imageSrc: {
      type: String,
      required: true,
    },
   
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    },
  };
  </script>
  
  <style>
  /* Ajoutez des styles spécifiques au besoin */
  .test{
    cursor: pointer;
  }
  </style>
  