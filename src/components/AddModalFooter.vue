<script>

export default {
  name: "AddModalFooter",
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["send", "cancel"],
};
</script>

<template>
  <div class="pl-8 pr-8 py-3 sm:flex sm:flex-row-reverse">
    <button
      type="submit"
      class="inline-flex w-full justify-center rounded-md border border-transparent bg-green-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-normal focus:outline-none focus:ring-2 focus:ring-primary-normal focus:ring-offset-2 sm:ml-3 sm:w-1/2 sm:text-sm"
      :disabled="isActive"
      :class="{ 'opacity-50': isActive }"
      @click.prevent="$emit('send')"
    >
      
      Envoyer
    </button>
    <button
      type="button"
      class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:text-sm"
      @click="$emit('cancel')"
    >
     Anuuler
    </button>
  </div>
</template>

<style scoped></style>
