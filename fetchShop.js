const url = "https://mocki.io/v1/da8165da-40f9-47a8-9ad0-581ebc14fc59";

var numId = 1;
var i = 0;


var numId = 1;
    var i = 0;
    let productos = []
fetch(url)
.then(response => response.json())
.then(data =>{
    
    console.log(data);
        productos = data.map(function(numId, i){
        
        return `<a href="#"><div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
            <img  id="prodcard${numId.titulo}" class="card-img-top" src="${data[i].portada}" alt="Card image cap">
                <div class="card-body text-center">
                    <h4 onclick="extraerDatos()" id="prodtitle${numId.titulo}" class="card-text">${data[i].titulo}</h4>
                    <p id="prodmangaka${numId.titulo}" class="card-text">${data[i].mangaka}</p>
                    <p id="prodmangaka${numId.titulo}" class="card-text">$${data[i].precio}</p>
                </div>
        </div></a>`;
        });
         document.getElementById("productShop2").innerHTML = productos.join(" ") ;


         
})
.catch(err=>console.log(err))
