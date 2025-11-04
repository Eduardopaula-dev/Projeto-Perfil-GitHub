const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');

btnSearch.addEventListener("click", () => {
    const searchTerm = inputSearch.value;
    if(searchTerm) {
        console.log('O valor digitado é:', searchTerm);
    } else {
        alert('Digite o nome do usuáirio')
    }
});