const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');

const baseURL = 'https://api.github.com/user'

btnSearch.addEventListener("click", () => {
    const userName = inputSearch.value;
    if(userName) {
        const response = `${baseURL}/${userName}`

        if(!response) {
            alert('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente');
            return;
        }

        const data = response.json();
        console.log(data);
    } else {
        alert('Digite o nome do usuário')
    }
});