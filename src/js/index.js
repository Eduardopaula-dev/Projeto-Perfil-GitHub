const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');

const baseURL = 'https://api.github.com/users'

btnSearch.addEventListener("click", async () => {
    const userName = inputSearch.value;
    if(userName) {
        const response = await fetch(`${baseURL}/${userName}`)

        if(!response.ok) {
            alert('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente');
            return;
        }

        const data = await response.json();
        console.log(data);
    } else {
        alert('Digite o nome do usuário')
    }
});