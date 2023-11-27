import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTabsStore = defineStore('tabs', () => {
  const currentTab = ref('');

  return { currentTab };
})