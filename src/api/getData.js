import axios from "axios";
const HOOK = import.meta.env.VITE_HOOK;

export async function getCharacterByPage(page) {
  const character = await axios.get(`${HOOK}/character/?page=${page}`);
  return character.data;
}
