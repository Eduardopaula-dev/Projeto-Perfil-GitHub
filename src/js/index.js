const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results')

const baseURL = 'https://api.github.com/users'

btnSearch.addEventListener("click", async () => {
    const userName = inputSearch.value;

    if (userName) {
        profileResults.innerHTML = `<p class="loading">Carregando...</p>`

        try {
            const response = await fetch(`${baseURL}/${userName}`)

            if (!response.ok) {
                alert('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente');
                return;
            }

            const userData = await response.json();

            profileResults.innerHTML = `
            <div class="profile-card">
                <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
                <div class="profile-info">
                    <h2>${userData.name}</h2>
                    <p>${userData.bio || 'Não possui bio cadastrada 😅'}
                </div>
            </div
            
            <div class="profile-counters">
                <div class="followers"
                    <h4>👥Seguidores</h4>
                    <span>${userData.followers}</div>
                </div>
                <div class="following"
                    <h4>👥Seguindo</h4>
                    <span>${userData.following}</div>
                </div>
            </div`;
        } catch (error) {
            console.error('Erro ao buscar o perfil de usuário:', error);
            alert('Ocorreu um erro ao buscar o perfil do usuário. Por favor, tente mais tarde.')
            profileResults.innerHTML = ""

        }
    } else {
        alert('Digite o nome do usuário')
    }
});