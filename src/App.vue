<script setup>
import { ref } from 'vue';

import Header from './components/Header.vue';
import Inventory from './components/Inventory.vue';
import Search from './components/Search/index.vue';

const category = ref(null);

function handleSelect(key) {
  category.value = key;
}
</script>

<template>
  <div>
    <Header title="Select category" />
    <Inventory @select="handleSelect" />

    <Search v-if="category" v-bind="{ category }" />
  </div>
</template>

