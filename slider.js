var imagenes = [];
    
    imagenes[0] = "https://i.ibb.co/3hQjwWj/ONE-PIECE.jpg";
    imagenes[1] = "https://i.ibb.co/b6NyVM1/Shingeki-no-Kyojin-3-x-1000.jpg";
    imagenes[2] = "https://i.ibb.co/S5DK692/Tokyo-Revengers.jpg";
    
    var indiceimagenes = 0;

    document.getElementById("sliderImg").src = imagenes[indiceimagenes];

    function next(){
        if (indiceimagenes < 2){
            indiceimagenes++;
        } else{
            indiceimagenes = 0;
        }
        document.getElementById("sliderImg").src = imagenes[indiceimagenes];
    }
    
    function back(){
        if (indiceimagenes > 0){
            indiceimagenes--;
        } else{
            indiceimagenes = 2;
        }
        document.getElementById("sliderImg").src = imagenes[indiceimagenes];
    }
    setInterval(next, 3000);
    
    
    function searchBar(){
        document.getElementById("navbarsearch").style.visibility = "visible";
        document.getElementById("navbarsearch").style.height = "auto";
    }