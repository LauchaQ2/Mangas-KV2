const url = "https://mocki.io/v1/59285147-f4e7-48f1-9a26-fdcc493d0e51";

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
        
        return `<div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
            <img  id="prodcard${numId}" class="card-img-top" src="${data[i].portada}" alt="Card image cap">
                <div class="card-body text-center">
                    <h4 id="prodtitle${numId}" class="card-text">${data[i].titulo}</h4>
                    <p id="prodmangaka${numId}" class="card-text">${data[i].mangaka}</p>
                    <p id="prodmangaka${numId}" class="card-text">$${data[i].precio}</p>
                </div>
        </div>`;
        });
         document.getElementById("productShop2").innerHTML = productos.join(" ") ;


         
})
.catch(err=>console.log(err))
