<script setup>
import { useCharactersStore } from "@/stores/characters";
import axios from "axios";
import { onMounted, ref } from "vue";

const store = useCharactersStore();
onMounted(() => {
  console.log("Component mounted");
  store.setPage(1);
});
</script>

<template>
  <ul class="characters">
    <li v-for="character in store.characters" :key="character.id">
      <div class="characters_item">
        <div class="content_image">
          <img :src="character.image" :alt="character.name" />
        </div>
        <div class="content_info">
          <div class="content_info_box">
            <a :href="character.url" class="content_info_title">{{
              character.name
            }}</a>
            <div class="content_info_about">
              <span></span>
              {{ character.status }} - {{ character.species }}
            </div>
          </div>
          <div class="content_info_box">
            <div class="content_info_label">Last known location:</div>
            <a :href="character.location.url" class="content_info_name">
              {{ character?.location.name }}
            </a>
          </div>
          <div class="content_info_box">
            <div class="content_info_label">First seen in:</div>
            <a :href="character.episode[0]" class="content_info_name">
              {{ store.firstSeenNames[character.id] }}
            </a>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<style>
.characters {
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 17px;
}

.characters_item {
  height: 220px;
  display: flex;
  overflow: hidden;
  background: rgb(60, 62, 68);
  border-radius: 0.5rem;
  margin: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}
.content_info {
  flex: 3 1 0%;
  position: relative;
  padding: 0.75rem;
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
}

.content_info_title {
  font-size: 1.5rem;
  color: rgb(245, 245, 245);
  font-family: -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto",
    "Helvetica", "Arial", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  font-weight: 800;
}
.content_info_about {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 500;
  color: rgb(245, 245, 245);
}
.content_info_about span {
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.375rem;
  background: rgb(85, 204, 68);
  border-radius: 50%;
  display: flex;
  align-items: center;
}
.content_info_box {
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
}

.content_info_label {
  color: rgb(158, 158, 158);
  font-size: 16px;
  font-weight: 500;
}

@media (max-width: 1750px) {
  .characters {
    grid-template-columns: repeat(2, auto);
    justify-content: center;
  }
  .characters_item {
    width: 600px;
    height: 220px;
    margin: 0 auto;
  }
}

@media (max-width: 1180px) {
  .characters {
    grid-template-columns: repeat(1, auto);
  }
  .characters_item {
    width: 600px;
    height: 220px;
    margin: 0 auto;
  }
}
</style>
