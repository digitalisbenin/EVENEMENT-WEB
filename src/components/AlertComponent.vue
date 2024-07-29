<script setup>
import { defineProps  } from "vue";
defineProps({
  content: {
    type: String,
    default: "",
  },
  typeAlert: { type: String, default: "" },
});
</script>

<template>
  <div
    v-if="typeAlert === 'error'"
    class="p-3 text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
    role="alert"
  >
    <p class="text-sm">{{ content }}</p>
  </div>
  <div
    v-if="typeAlert === 'success'"
    class="p-3 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
    role="alert"
  >
    <p class="text-sm">{{ content }}</p>
  </div>
  <div
    v-if="typeAlert === 'info'"
    class="p-3 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
    role="alert"
  >
    <p class="text-sm">{{ content }}</p>
  </div>
  <div
    v-if="typeAlert === 'warning'"
    class="p-3 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800"
    role="alert"
  >
    <p class="text-sm">{{ content }}</p>
  </div>
</template>

<style scoped></style>
