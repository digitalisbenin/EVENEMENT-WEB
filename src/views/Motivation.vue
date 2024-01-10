<template>
  <div class="">
    <div class="mt-16 relative text-center mx-auto">
      <p class="text-4xl text-blue-400 font-mono">MOTIVATION ET PROVERBES </p>
    </div>

    <div class="flex mx-12 mt-6">
      <div class="mt-4 rounded-lg relative w-1/3">
        <img class="w-full" src="../assets/image1.png" alt="" />
      </div>
      <div class="mt-4 rounded-lg relative w-1/3">
        <img class="w-full" src="../assets/Image2.png" alt="" />
      </div>

      <div class="mt-4 rounded-lg relative w-1/3">
        <img class="w-full" src="../assets/image3.png" alt="" />
      </div>
    </div>
    <div class="flex mx-12 mt-6">
      <div class="mt-4 rounded-lg relative w-1/3">
        <img class="w-full" src="../assets/image1.png" alt="" />
      </div>
      <div class="mt-4 rounded-lg relative w-1/3">
        <img class="w-full" src="../assets/Image2.png" alt="" />
      </div>

      <div class="mt-4 rounded-lg relative w-1/3">
        <img class="w-full" src="../assets/image3.png" alt="" />
      </div>
    </div>
    <div class="h-9"></div>
  </div>
</template>
  
  <script>
export default {
  name: "Motivation",
  data() {
    return {};
  },
};
</script>
  
  <style scoped>
/* Ajoutez des styles personnalisés pour le slider ici */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
  