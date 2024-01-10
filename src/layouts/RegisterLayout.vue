<template>

<div class="flex relative">
  <!-- Barre latérale -->
  <div class="w-2/4 relative">
    <!-- Logo du tableau de bord -->
    <router-link class="" to="/">
      <img src="../assets/login.jpg" alt="Logo" class="w-full h-screen" />
    </router-link>
    <div class="absolute top-0 w-full flex items-center justify-center">
    <span class="text-4xl text-white mt-4 text-left font-semibold">WELCOME</span>
  </div>
  </div>

  <!-- Contenu du tableau de bord -->
  <div class="w-2/4 p-4 ">
    <slot />
    
  </div>
</div>

</template>

<script>
export default {
  name: 'RegisterLayout',
};
</script>
