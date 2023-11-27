import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', () => {
  const search = ref('')

  function nullSearch() {
    search.value = '';
  }

  return { search, nullSearch }
})
