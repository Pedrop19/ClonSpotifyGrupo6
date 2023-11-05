let listaElement = document.querySelector('.lista');

fetch('./songs.json')
.then(response => response.json())
.then(data => {
    const songs = data;
    console.log(songs);

    songs.forEach(song => {
        let listElement = document.createElement("li");
        listElement.className = "song";
        listElement.innerHTML = `
            <img src="${song.img}" width="100">
            <div class="song-info">
                <h2>${song.title}</h2>
                <h3>${song.artist}</h3>
                <p>${song.album}</p>
                <p>${song.duration}</p>
            </div>
        `;
        listaElement.appendChild(listElement);
    }); 
})