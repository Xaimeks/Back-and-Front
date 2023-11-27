<script setup>
import { useSearchStore } from "@/stores/search.js";
const searchStore = useSearchStore();

const props = defineProps({
  placeholder: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <input
    v-model="searchStore.search"
    type="search"
    :placeholder="props.placeholder"
    class="u-input" />
</template>
<style lang="scss" scoped>
.u-input {
  outline: none;
  max-width: 300px; // change here
  width: 100%;
  min-width: 200px; // change here
  height: 50px; // change here

  padding: 20px 10px; // change here

  outline: 0; // change here
  border-radius: 5px; // change here

  color: #fff; // change here

  transition: all 0.3s ease-in-out; // change here
  background-color: black;

  &:hover {
    // change here
    box-shadow: 5px -5px 5px red;
  }

  &:focus {
    // change here
    outline: 2px solid black;
    box-shadow: 5px -5px 5px #fff;
  }
}
</style>
