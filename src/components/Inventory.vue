<script setup>
import { getTradeItems } from '../stores/trade';

const items = getTradeItems();
console.log(items);
</script>

<template>
  <div className="c-inventory">
    <button name="weapon">Weapon</button>
    <button name="weapon2">Weapon 2</button>

    <button name="helmet">Helmet</button>
    <button name="gloves">Gloves</button>
    <button name="boots">Boots</button>

    <button name="armor">Armor</button>
    <button name="belt">Belt</button>

    <button name="flaskHealth">Health</button>
    <button name="flaskMana">Mana</button>

    <button name="amulet">Amulet</button>
    <button name="ring1">Ring 1</button>
    <button name="ring2">Ring 2</button>
  </div>
</template>

<style>
@import "./Inventory.css";
</style>
