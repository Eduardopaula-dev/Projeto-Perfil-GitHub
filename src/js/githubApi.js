export async function fetchGithubUser(userName) {
    const baseURL = 'https://api.github.com/users';
    const response = await fetch(`${baseURL}/${userName}`);
    if (!response.ok) {
      throw new Error('Usuário não encontrado.');
    }
    return await response.json();
  }