<script setup>
import { useCharactersStore } from "@/stores/characters";
const store = useCharactersStore();
</script>

<template>
  <div style="margin-top: 15px">
    <button
      @click="store.prevPage"
      :class="{ disabled: store.currentPage === 1 }"
    >
      Prev
    </button>

    <span>Page {{ store.currentPage }} of {{ store.totalPages }}</span>

    <button
      @click="store.nextPage"
      :class="{ disabled: store.currentPage === store.totalPages }"
    >
      Next
    </button>
  </div>
</template>

<style scoped>
.buttons {
  display: flex;
  flex-direction: column;
}

a {
  padding: 15px 20px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  margin: 1em;
}

a:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
}
button {
  padding: 7px 15px;
  color: white;
  text-transform: uppercase;
  font-weight: 800;
  background: linear-gradient(to right, #8041f2, #3095ed);
  border-radius: 8px;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  border: none;
}
span {
  padding: 0 10px;
  color: #fff;
  font-weight: 600;
}
button:hover {
  border-radius: 30px;
}
.disabled {
  background: linear-gradient(to right, #d4bdff, #abd8ff);
}
</style>
