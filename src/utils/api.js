const API_URL = 'https://jsonplaceholder.typicode.com';

export async function getPosts() {
    const response = await fetch(`${API_URL}/posts`);
    return response.json();
}

export async function getUser(userId = 1) {  // Usa el parámetro correctamente
    const response = await fetch(`${API_URL}/users/${userId}`);
    return response.json();
}

export async function getUserPosts(userId) {
    const response = await fetch(`${API_URL}/posts?userId=${userId}`);  // Paréntesis corregidos
    return response.json();
}
