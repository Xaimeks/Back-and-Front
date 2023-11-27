<script setup>
import { ref } from "vue";
const emits = defineEmits(["update:selected"]);
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    required: true,
  },
  checked: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  value: {
    required: true,
  },
});
const checked = ref(props.checked);
if (props.checked) {
  emits("update:selected", {
    value: props.value,
    checked: checked.value,
  });
}

function onChange(event) {
  checked.value = !checked.value;
  emits("update:selected", {
    value: event.target.value,
    checked: checked.value,
  });
  // change here
}
</script>

<template>
  <input
    :name="props.name"
    @input="onChange"
    :id="props.id"
    type="checkbox"
    class="u-task"
    :checked="props.checked"
    :value="props.value"
    :disabled="props.disabled" />
  <label :for="props.id" class="u-task-label">{{ props.label }}</label>
</template>
<style lang="scss" scoped>
.u-task {
  display: none;

  &-label {
    display: flex;
    align-items: center;
    gap: 8px; // change here

    cursor: pointer;

    color: red; // change here
    &::before {
      content: "";
      width: 20px; // change here
      height: 20px; // change here

      border: 1px solid red; // change here

      background-image: url(""); // change here
      background-repeat: no-repeat;
      background-size: 0%;
    }

    &:hover {
      // change here
      text-decoration: underline red;
    }
  }

  &:checked + &-label {
    &::before {
      background-size: 100%;
      background-color: red;
      // change here
    }
  }

  &:disabled + &-label {
    // change here
    color: gray;
  }
}
</style>
