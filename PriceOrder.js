function PriceOrderCheap(){

    fetch("https://mocki.io/v1/59285147-f4e7-48f1-9a26-fdcc493d0e51")
    .then(response => response.json())
    .then(data =>{
        
        console.log(data);    
        let ordenados = [];
    
        ordenados =  data.sort((a , b) => {
            if (a.precio > b.precio) {
                return 1;
            }
            if (a.precio < b.precio) {
                return -1;
            }
            return 0;})
        
        
            ordenados2 = ordenados.map(function(numId, i){
            
            return `<div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
                <img  id="prodcard${numId}" class="card-img-top" src="${data[i].portada}" alt="Card image cap">
                    <div class="card-body text-center">
                        <h4 id="prodtitle${numId}" class="card-text">${data[i].titulo}</h4>
                        <p id="prodmangaka${numId}" class="card-text">${data[i].mangaka}</p>
                        <p id="prodmangaka${numId}" class="card-text">$${data[i].precio}</p>
                    </div>
            </div>`;
    
            
            });
            console.log(ordenados);
            
           
            
             document.getElementById("productShop2").innerHTML = ordenados2.join(" ") ;
    
    })
    .catch(err=>console.log(err))
    }

    function PriceOrderExp(){

        fetch("https://mocki.io/v1/59285147-f4e7-48f1-9a26-fdcc493d0e51")
        .then(response => response.json())
        .then(data =>{
            
            console.log(data);    
            let ordenados = [];
        
            ordenados =  data.sort((a , b) => {
                if (a.precio > b.precio) {
                    return -1;
                }
                if (a.precio < b.precio) {
                    return 1;
                }
                return 0;})
            
            
                ordenados2 = ordenados.map(function(numId, i){
                
                return `<div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
                    <img  id="prodcard${numId}" class="card-img-top" src="${data[i].portada}" alt="Card image cap">
                        <div class="card-body text-center">
                            <h4 id="prodtitle${numId}" class="card-text">${data[i].titulo}</h4>
                            <p id="prodmangaka${numId}" class="card-text">${data[i].mangaka}</p>
                            <p id="prodmangaka${numId}" class="card-text">$${data[i].precio}</p>
                        </div>
                </div>`;
        
                
                });
                console.log(ordenados);
                
               
                
                 document.getElementById("productShop2").innerHTML = ordenados2.join(" ") ;
        
        })
        .catch(err=>console.log(err))
        }