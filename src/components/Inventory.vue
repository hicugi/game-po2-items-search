<script setup>
import { defineEmits } from "vue";

const $emit = defineEmits(["select"]);

function select(key) {
  $emit('select', key);
}
</script>

<template>
  <div className="c-inventory">
    <button name="weapon" @click="select('weapon')">Weapon</button>
    <button name="weapon2" @click="select('weapon2')">Weapon 2</button>

    <button name="helmet" @click="select('helmet')">Helmet</button>
    <button name="gloves" @click="select('gloves')">Gloves</button>
    <button name="boots" @click="select('boots')">Boots</button>

    <button name="armor" @click="select('armor')">Armor</button>
    <button name="belt" @click="select('belt')">Belt</button>

    <button name="flaskLife" @click="select('flaskLife')">Health</button>
    <button name="flaskMana" @click="select('flaskMana')">Mana</button>

    <button name="amulet" @click="select('amulet')">Amulet</button>
    <button name="ring1" @click="select('ring')">Ring 1</button>
    <button name="ring2" @click="select('ring')">Ring 2</button>
  </div>
</template>

<style>
@import "./Inventory.css";
</style>
