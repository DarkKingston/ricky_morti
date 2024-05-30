import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
const HOOK = import.meta.env.VITE_HOOK;

export const useCharactersStore = defineStore("characters", () => {
  const currentPage = ref(1);
  const totalCharacters = ref(0);
  const infoApi = ref([]);
  const characters = ref([]);
  const firstSeenNames = ref({});
  const totalPages = ref(0);

  function setPage(page) {
    console.log("Setting page to:", page);
    console.log(page, totalPages.value);
    if (page > 0) {
      currentPage.value = page;
      getCharacters(page);
    }
  }

  function prevPage() {
    if (currentPage.value > 1) {
      setPage(currentPage.value - 1);
    }
  }

  function nextPage() {
    if (currentPage.value < totalPages.value) {
      setPage(currentPage.value + 1);
    }
  }

  async function getCharacters(page) {
    try {
      const response = await axios.get(`${HOOK}/character/?page=${page}`);
      const data = response.data;
      let char = data.results;
      char.map((e) => {
        firstSeenName(e.id, e.episode[0]);
      });
      console.log("Data received:", data);
      infoApi.value = data.info;
      characters.value = data.results;
      totalCharacters.value = data.info.count;
      totalPages.value = data.info.pages;
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  }
  async function firstSeenName(charId, episode) {
    const episodeFirst = await axios.get(episode);
    firstSeenNames.value[charId] = episodeFirst.data.name;
  }

  return {
    currentPage,
    totalPages,
    infoApi,
    characters,
    setPage,
    prevPage,
    nextPage,
    firstSeenNames,
  };
});
