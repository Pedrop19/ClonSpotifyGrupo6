let listaElement = document.querySelector('.lista');

fetch('./songs.json')
.then(response => response.json())
.then(data => {
    const songs = data;
    console.log(songs);

    songs.forEach(song => {
        let listElement = document.createElement("li");
        listElement.className = "song";
        listElement.style.background = `url(${song.img}) no-repeat top center / cover, linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))`;
        listElement.innerHTML = `
            <div class="song-info">
                <h2>${song.title}</h2>
                <h3>${song.artist}</h3>
                <p>${song.album}</p>
                <p>${song.duration}</p>
                <div class="song-play">
                <i class="fa-regular fa-circle-play"></i>
                </div>
            </div>
        `;
        listaElement.appendChild(listElement);
    }); 
})