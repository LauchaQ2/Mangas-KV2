const url = "https://mocki.io/v1/da8165da-40f9-47a8-9ad0-581ebc14fc59";

fetch(url)
.then(response => response.json())
.then(data =>{
    
    console.log(data);

// ESTO ME LO TOMA BÁRBARO, SON LAS CARDS DEL INICIO 

    let destacados = document.getElementById("destacados");
    destacados.innerHTML = 
    `
    <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
            <img id="imgcard" class="card-img-top" src="${data[0].portada}" alt="Card image cap">
                <div class="card-body text-center">
                    <h4 id="titlecard" class="card-text">${data[0].titulo}</h4>
                    <p id="mangakacard" class="card-text">${data[0].mangaka}</p>
                </div>
        </div>
        <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
            <img id="imgcard2" class="card-img-top" src="${data[3].portada}" alt="Card image cap">
                <div class="card-body text-center">
                    <h4 id="titlecard2" class="card-text">${data[3].titulo}</h4>
                    <p id="mangakacard2" class="card-text">${data[3].mangaka}</p>
                </div>
        </div>
        <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
          <img id="imgcard3" class="card-img-top" src="${data[6].portada}" alt="Card image cap">
              <div class="card-body text-center">
                  <h4 id="titlecard3" class="card-text">${data[6].titulo}</h4>
                  <p id="mangakacard3" class="card-text">${data[6].mangaka}</p>
              </div>
      </div>
      <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
            <img id="imgcard4" class="card-img-top" src="${data[9].portada}" alt="Card image cap">
                <div class="card-body text-center">
                    <h4 id="titlecard4" class="card-text">${data[9].titulo}</h4>
                    <p id="mangakacard4" class="card-text">${data[9].mangaka}</p>
                </div>
        </div>
        <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
            <img id="imgcard5" class="card-img-top" src="${data[12].portada}" alt="Card image cap">
                <div class="card-body text-center">
                    <h4 id="titlecard5" class="card-text">${data[12].titulo}</h4>
                    <p id="mangakacard5" class="card-text">${data[12].mangaka}</p>
                </div>
        </div>
        `;
        
    document.getElementById("imgcard6").src = data[15].portada;
    document.getElementById("titlecard6").innerHTML = data[15].titulo;
    document.getElementById("mangakacard6").innerHTML = data[15].mangaka + "<br/>" + "$" + data[15].precio;
    
    document.getElementById("imgcard7").src = data[16].portada;
    document.getElementById("titlecard7").innerHTML = data[16].titulo;
    document.getElementById("mangakacard7").innerHTML = data[16].mangaka + "<br/>" + "$" + data[16].precio;
    
    document.getElementById("imgcard8").src = data[17].portada;
    document.getElementById("titlecard8").innerHTML = data[17].titulo;
    document.getElementById("mangakacard8").innerHTML = data[17].mangaka + "<br/>" + "$" + data[17].precio;

})
.catch(err=>console.log(err));






