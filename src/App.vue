<script setup>
import { ref } from 'vue';
import { getTradeData } from './stores/trade';

const data = ref(getTradeData());
</script>

<template>
  <div>
    <h1>Pretty filters from Hicugi</h1>
    <pre>{{ data }}</pre>
  </div>
</template>

