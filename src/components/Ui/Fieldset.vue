<script setup>
import { defineProps } from "vue";

const { label } = defineProps({ label: String });
</script>

<template>
  <div class="ui-fieldset">
    <label>{{ label }}</label>
    <slot />
  </div>
</template>

<style>
.ui-fieldset {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.ui-fieldset:nth-child(2n + 1) {
  background-color: rgba(255,255,255,0.03);
}
</style>
