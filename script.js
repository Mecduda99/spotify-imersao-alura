// console.log("Funcionou");
const searchInput = document.getElementById('search-input');
const resultsArtists = document.getElementById('result-artist')
const resultPlaylist = document.getElementById('result-playlists')

document.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLocaleLowerCase();
    if(searchTerm === '') {
        resultPlaylist.classList.add('hidden');
    }
})