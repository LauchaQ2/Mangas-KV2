var imagenes = [];
    
    imagenes[0] = "https://i.ibb.co/g4cBt1g/Shingeki-no-Kyojin-3-x-1000.png";
    imagenes[1] = "ONE PIECE.png";
    imagenes[2] = "https://i.ibb.co/c1zCtSX/Shingeki-no-Kyojin-3-x-1000-1.png";
    
    
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