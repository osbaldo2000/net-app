import { CONFIG } from "../config";

export async function getPosts() {
  const response = await fetch(`${CONFIG.API_URL}/posts`);
  return response.json();
}

export async function getUser(userId) {
  //const response = await fetch(`${CONFIG.API_URL}/users/${userId}`);
  //return response.json();
  try {
    const response = await fetch(`${CONFIG.API_URL}/users/${userId}`);
    if (!response.ok) throw new Error('Failed to read response');
    showToast("hola");
    return response.json();
  } catch (err) {
    showToast(`Error: ${err.message}`);
  }

}

export async function getUserPosts(userId) {
  const response = await fetch(`${CONFIG.API_URL}/posts?userId=${userId}`)
  return response.json();
}


export const showToast = (message) => {
  const app = document.getElementById("app");
  const toast = document.createElement('div');

  toast.className = 'toast';
  toast.setAttribute('role', 'alert')
  toast.setAttribute('aria-live', 'assertive')
  toast.setAttribute('aria-atomic', 'true')

  const toastBody = document.createElement('div');
  toastBody.className = "toast-body";
  toastBody.textContent = message;

  toast.append(toastBody);
  console.info(toast);

  app.append(toast);
  console.info(app);
  //setTimeout(() => toast.remove(), 5000);
}