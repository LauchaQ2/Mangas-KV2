const url = "https://api.jikan.moe/v3/manga/1/characters";

fetch(url)
.then(response => response.JSON() )
.then(data => {
    console.log(data);
})
.catch(err=>console.log(err))
