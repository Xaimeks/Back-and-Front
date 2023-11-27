<script setup>
const emits = defineEmits(["update:modelValue"]);
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
    type: String,
    required: true,
  },
  modelValue: {},
});
if (props.checked) {
  emits("update:modelValue", props.value);
}
</script>

<template>
  <input
    :name="props.name"
    @input="emits('update:modelValue', $event.target.value)"
    :id="props.id"
    type="radio"
    class="u-tab"
    :checked="props.checked"
    :value="props.value"
    :disabled="props.disabled" />
  <label :for="props.id" class="u-tab-label">{{ props.label }}</label>
</template>
<style lang="scss" scoped>
.u-tab {
  display: none;

  &-label {
    max-width: 300px;
    width: 100%;
    min-width: 100px;
    padding: 15px 0;

    display: block;

    text-align: center;
    cursor: pointer;

    color: #fff; // change here
    background-color: red;
    border: 0;
    border-radius: 8px;
    transition: border 0.3s ease-in-out, border-radius 0.5s ease-in-out;

    &:hover {
      background-color: rgb(241, 67, 67);
    }
  }

  &:checked + &-label {
    border: 1px solid #000;
    background-color: transparent;
    color: #000;
    border-radius: 0;
  }

  &:disabled + &-label {
    // change here
    background-color: lightgray;
    color: gray;
  }
}
</style>
