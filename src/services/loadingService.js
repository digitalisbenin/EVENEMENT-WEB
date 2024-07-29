// loadingService.js
import { ref } from 'vue';

const loading = ref(false);

export default {
  getLoading() {
    return loading.value;
  },
  setLoading(value) {
    loading.value = value;
  },
};
