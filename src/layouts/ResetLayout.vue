<template>
 <!-- Barre latérale -->
  <div class="custom-background h-screen  ">
    <!-- Logo du tableau de bord -->
    <router-link class=" " to="/">
        <img src="../assets/LOG0.png" alt="Logo" class="h-32  w-auto mx-auto my-auto " />
        
      </router-link>
  <!-- Contenu du tableau de bord -->
  <div class="w-full ">
    <slot/>
  </div>
</div>
</template>

<script>
export default {
  name: 'LoginLayout',
};
</script>
<style scoped>
.custom-background {
  background-image: url('~@/assets/5120285.jpg');
  /* Remplacez 'votre-image.jpg' par le nom de votre image */
  background-size: cover;
  /* Ajustez la taille de l'image */
  background-repeat: no-repeat;
  background-position: center center;
  /* Centrez l'image */
  /* Ajoutez d'autres styles Tailwind CSS ou CSS personnalisés au besoin */
}
</style>
