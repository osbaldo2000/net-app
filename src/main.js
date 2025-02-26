import './style.css'
import { getPosts } from './utils/api.js';
import { getLikes, toggleLike } from './utils/storage.js';

export async function renderHome() {
    const app = document.getElementById('app');
    const posts = await getPosts();
    const likes = getLikes();
    
    app.addEventListener('click', async (e) => {
     if (e.target.classList.contains('like-btn')) {
         const postId = parseInt(e.target.dataset.id);
         const newLikes = toggleLike(postId);
         e.target.classList.toggle('like');
         e.target.innerHTML = newLikes[postId] ? '🤍' : '❤️';
      }
    })

    app.innerHTML = `
    <main class="container">
      ${posts.map(post => `
        <div class="post">
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          <button class="like-btn" data-id="${post.id}" >${likes[post.id] ? '❤️' : '🤍'}</button>
        </div>
    `).join('')
    }
    </main>
`
}

renderHome();