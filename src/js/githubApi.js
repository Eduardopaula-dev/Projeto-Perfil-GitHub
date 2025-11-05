const baseURL = 'https://api.github.com/users';

export async function fetchGithubUser(userName) {
  const response = await fetch(`${baseURL}/${userName}`);
  if (!response.ok) {
    throw new Error('Usuário não encontrado.');
  }
  return await response.json();
}

export async function fetchGithubUserRepos(userName) {
  const reponse = await fetch(`${baseURL}/${userName}/repos?per_page=10&sort=created`)
  if (!reponse.ok) {
      throw new Error('Repositórios não encontrados.');
  }
  return await reponse.json();
};
  