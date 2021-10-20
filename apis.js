const url = "https://api.jikan.moe/v3/manga/1/news";

fetch(url)
.then(response => response.json() )
.then(data => {
    console.log(data);
})
.catch(err=>console.log(err))
