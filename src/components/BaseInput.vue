<script setup>
import { onMounted, reactive, ref, defineProps ,defineEmits } from "vue";
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
});
defineEmits(["update:modelValue"]);
const input = ref(null);
const state = reactive({
  uniqueId: "",
});

onMounted(() => {
  if (input.value.hasAttribute("autofocus")) {
    input.value.focus();
  }
  state.uniqueId = props.id || Math.random().toString(16).slice(2);
});
</script>

<template>
  <input
    :id="state.uniqueId"
    ref="input"
    class="block w-full p-2 border border-input-disable rounded-md focus:outline-none focus:ring-primary-normal focus:ring focus:ring-opacity-50 shadow-sm focus:border"
    :value="modelValue"
    v-bind="$attrs"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
