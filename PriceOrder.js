function PriceOrderCheap(){

    fetch("https://mocki.io/v1/da8165da-40f9-47a8-9ad0-581ebc14fc59")
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

        fetch("https://mocki.io/v1/da8165da-40f9-47a8-9ad0-581ebc14fc59")
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
                    <img  id="prodcard${numId.titulo}" class="card-img-top" src="${data[i].portada}" alt="Card image cap">
                        <div class="card-body text-center">
                            <h4 id="prodtitle${numId.titulo}" class="card-text">${data[i].titulo}</h4>
                            <p id="prodmangaka${numId.titulo}" class="card-text">${data[i].mangaka}</p>
                            <p id="prodmangaka${numId.titulo}" class="card-text">$${data[i].precio}</p>
                        </div>
                </div>`;
        
                
                });
                console.log(ordenados);
                
               
                
                 document.getElementById("productShop2").innerHTML = ordenados2.join(" ") ;
        
        })
        .catch(err=>console.log(err))
        }