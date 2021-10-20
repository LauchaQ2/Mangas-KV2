const url = "https://kitsu.io/api/edge";

fetch(url)
.then(response => response.json() )
.then(data => {
    console.log(data);
})
.catch(err=>console.log(err))
