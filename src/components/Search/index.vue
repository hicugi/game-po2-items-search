<script setup>
import { defineProps, ref, computed } from "vue";

import UiFieldset from "../Ui/Fieldset.vue";
import UiSelect from "../Ui/Select.vue";
import { getTradeItems } from "../../stores/trade";

function compare(word1, word2) {
  const rLen = word2.length + 1;
  const cLen = word1.length + 1;
  const grid = Array.from({ length: rLen }, () => new Array(cLen).fill(0));

  for (let i = 0; i < rLen; i++) {
    grid[i][0] = i;
  }
  for (let i = 0; i < cLen; i++) {
    grid[0][i] = i;
  }

  for (let r = 1; r < rLen; r++) {
    for (let c = 1; c < cLen; c++) {
      grid[r][c] = Math.min(
        grid[r - 1][c - 1] + !(word2[r] == word1[c]),
        grid[r - 1][c] + 1,
        grid[r][c - 1] + 1,
      );
    }
  }

  return cLen - grid.at(-1).at(-1) === rLen;
}

const props = defineProps({ category: String });
const inputCategory = ref("");

const categoryOptions = computed(() => {
  const results = getTradeItems()[props.category].map((item) => item.type);

  const value = inputCategory.value.toLowerCase();
  if (value.length === 0) return results;

  return results.filter((v) => compare(v.toLowerCase(), value));
});
</script>

<template>
  <div class="c-search">
    <h2>Filters</h2>

    <UiFieldset label="Name">
      <UiSelect v-model="inputName" :options="nameOptions" />
    </UiFieldset>

    <pre>{{ items }}</pre>
  </div>
</template>

<style>
.c-search {
  color: #dbc692;
}
.c-search h2 {
  color: #ecdfbe;
}
</style>
