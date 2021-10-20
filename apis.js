const url = "https://api.jikan.moe/v3/manga/1/moreinfo";

fetch(url)
.then(response => response.JSON() )
.then(data => {
    let lista = document.getElementById('listaHTML');
    lista.innerHTML = '<p>${data}</p>';
    
    console.log(data);
    
})
.catch(err=>console.log(err))