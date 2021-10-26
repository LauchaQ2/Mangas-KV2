const url = "https://mocki.io/v1/59285147-f4e7-48f1-9a26-fdcc493d0e51";

fetch(url)
.then(response => response.json())
.then(data =>{
    
    console.log(data);

    let productShop2 = document.getElementById("productShop2");
    
    productShop2.innerHTML = `<div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
            <img id="prodcard1" class="card-img-top" src="${data[0].portada}" alt="Card image cap">
                <div class="card-body text-center">
                    <h4 id="prodtitle1" class="card-text">${data[0].titulo}</h4>
                    <p id="prodmangaka1" class="card-text">${data[0].mangaka}</p>
                </div>
        </div>
        <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
            <img id="prodcard2" class="card-img-top" src="${data[1].portada}" alt="Card image cap">
                <div class="card-body text-center">
                    <h4 id="prodtitle2" class="card-text">${data[1].titulo}</h4>
                    <p id="prodmangaka2" class="card-text">${data[1].mangaka}</p>
                </div>
        </div>
        <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
          <img id="prodcard3" class="card-img-top" src="${data[2].portada}" alt="Card image cap">
              <div class="card-body text-center">
                  <h4 id="prodtitle3" class="card-text">${data[2].titulo}</h4>
                  <p id="prodmangaka3" class="card-text">${data[2].mangaka}</p>
              </div>
      </div>
      <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
            <img id="prodcard4" class="card-img-top" src="${data[3].portada}" alt="Card image cap">
                <div class="card-body text-center">
                    <h4 id="prodtitle4" class="card-text">${data[3].titulo}</h4>
                    <p id="prodmangaka4" class="card-text">${data[3].mangaka}</p>
                </div>
        </div>
        <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
            <img id="prodcard5" class="card-img-top" src="${data[4].portada}" alt="Card image cap">
                <div class="card-body text-center">
                    <h4 id="prodtitle5" class="card-text">${data[4].titulo}</h4>
                    <p id="prodmangaka5" class="card-text">${data[4].mangaka}</p>
                </div>
        </div>
        <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
            <img id="prodcard6" class="card-img-top" src="${data[5].portada}" alt="Card image cap">
                <div class="card-body text-center">
                    <h4 id="prodtitle6" class="card-text">${data[5].titulo}</h4>
                    <p id="prodmangaka6" class="card-text">${data[5].mangaka}</p>
                </div>
        </div>
        <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
            <img id="prodcard7" class="card-img-top" src="${data[6].portada}" alt="Card image cap">
                <div class="card-body text-center">
                    <h4 id="prodtitle7" class="card-text">${data[6].titulo}</h4>
                    <p id="prodmangaka7" class="card-text">${data[6].mangaka}</p>
                </div>
        </div>
        <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
            <img id="prodcard8" class="card-img-top" src="${data[7].portada}" alt="Card image cap">
                <div class="card-body text-center">
                    <h4 id="prodtitle8" class="card-text">${data[7].titulo}</h4>
                    <p id="prodmangaka8" class="card-text">${data[7].mangaka}</p>
                </div>
        </div>
        <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
            <img id="prodcard9" class="card-img-top" src="${data[8].portada}" alt="Card image cap">
                <div class="card-body text-center">
                    <h4 id="prodtitle9" class="card-text">${data[8].titulo}</h4>
                    <p id="prodmangaka9" class="card-text">${data[8].mangaka}</p>
                </div>
        </div>
        <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
            <img id="prodcard10" class="card-img-top" src="${data[9].portada}" alt="Card image cap">
                <div class="card-body text-center">
                    <h4 id="prodtitle10" class="card-text">${data[9].titulo}</h4>
                    <p id="prodmangaka10" class="card-text">${data[9].mangaka}</p>
                </div>
        </div>
        <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
            <img id="prodcard11" class="card-img-top" src="${data[10].portada}" alt="Card image cap">
                <div class="card-body text-center">
                    <h4 id="prodtitle11" class="card-text">${data[10].titulo}</h4>
                    <p id="prodmangaka11" class="card-text">${data[10].mangaka}</p>
                </div>
        </div>
        <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
            <img id="prodcard12" class="card-img-top" src="${data[11].portada}" alt="Card image cap">
                <div class="card-body text-center">
                    <h4 id="prodtitle12" class="card-text">${data[11].titulo}</h4>
                    <p id="prodmangaka12" class="card-text">${data[11].mangaka}</p>
                </div>
        </div>
        <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
            <img id="prodcard13" class="card-img-top" src="${data[12].portada}" alt="Card image cap">
                <div class="card-body text-center">
                    <h4 id="prodtitle13" class="card-text">${data[12].titulo}</h4>
                    <p id="prodmangaka13" class="card-text">${data[12].mangaka}</p>
                </div>
        </div>
        <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
            <img id="prodcard14" class="card-img-top" src="${data[13].portada}" alt="Card image cap">
                <div class="card-body text-center">
                    <h4 id="prodtitle14" class="card-text">${data[13].titulo}</h4>
                    <p id="prodmangaka14" class="card-text">${data[13].mangaka}</p>
                </div>
        </div>
        <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
            <img id="prodcard15" class="card-img-top" src="${data[14].portada}" alt="Card image cap">
                <div class="card-body text-center">
                    <h4 id="prodtitle15" class="card-text">${data[14].titulo}</h4>
                    <p id="prodmangaka15" class="card-text">${data[14].mangaka}</p>
                </div>
        </div>
    `;

})
.catch(err=>console.log(err))
