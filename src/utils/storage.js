import { CONFIG } from "../config";

export function getLikes() {
  const data = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.LIKES)) || {};
  console.log(data);
  return data;
}

export function toggleLike(postId) {
  const likes = getLikes();
  const newLikes = { ...likes, [postId]: !likes[postId] }
  localStorage.setItem(CONFIG.STORAGE_KEYS.LIKES, JSON.stringify(newLikes));
  return newLikes;
}