<script setup>
import Header from './components/Header.vue';
import Inventory from './components/Inventory.vue';
import { getTradeItems } from './stores/trade';

const items = getTradeItems();

function handleSelect(key) {
  console.log(key, items[key]);
}
</script>

<template>
  <div>
    <Header title="Select category" />
    <Inventory @select="handleSelect" />
  </div>
</template>

