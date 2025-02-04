<script setup>
import { defineProps } from 'vue';

const $props = defineProps({ title: String });
</script>

<template>
  <h2 class="hg-header">{{ $props.title }}</h2>
</template>

<style>
.hg-header {
  height: 118px;
  padding-bottom: 11px;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: url(img/header.jpeg) no-repeat center;
  background-size: auto 100%;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
}
</style>
