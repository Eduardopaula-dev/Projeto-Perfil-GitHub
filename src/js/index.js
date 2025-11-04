const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');

const baseURL = 'https://api.github.com/users'

btnSearch.addEventListener("click", async () => {
    const userName = inputSearch.value;

    if (userName) {

        try {
            const response = await fetch(`${baseURL}/${userName}`)

            if (!response.ok) {
                alert('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente');
                return;
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Erro ao buscar o perfil de usuário:', error);
            alert('Ocorreu um erro ao buscar o perfil do usuário. Por favor, tente mais tarde.')

        }
    } else {
        alert('Digite o nome do usuário')
    }
});