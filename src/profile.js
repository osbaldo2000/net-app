import { getUser, getUserPosts } from './utils/api.js';

export async function renderProfile() {
  const app = document.getElementById('app');
  const user = await getUser(1);
  const posts = await getUserPosts(user.id);

  app.innerHTML = `
  <main class="container" id="container">
    <div class="profile">
      <h2>${user.name}</h2>
      <p>Email: ${user.email}</p>
    </div>
    <div class="posts">
      ${posts.map(post => `
        <div class="post">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </div>
      `).join('')
    }
    </div >
  </main >
  `
}

renderProfile();