var Mangas = function (titulo, portada, mangaka, precio){
    this.titulo = titulo;
    this.portada = portada;
    this.mangaka = mangaka;
    this.precio = precio;
}

// "Base de Datos"

var naruto1 = new Mangas("Naruto #1", "https://m.media-amazon.com/images/I/61blY+DiS4L.jpg", "Kishimoto", 2500);
var naruto2 = new Mangas("Naruto #2", "https://i.ibb.co/GJ6mq6t/naruto2.jpg", "Kishimoto", 2500);
var naruto3 = new Mangas("Naruto #3", "https://i.ibb.co/VtRV5Jx/naruto3.jpg", "Kishimoto", 2500);
var onePiece1 = new Mangas("One Piece #1", "https://m.media-amazon.com/images/I/51T6jmOtLYL.jpg", "Oda", 2500);
var onePiece2 = new Mangas("One Piece #2", "https://i.ibb.co/RYky4jB/onepiece2.png", "Oda", 2500); 
var onePiece3 = new Mangas("One Piece #3", "https://i.ibb.co/Nsn2WnT/onepiece3.png", "Oda", 2500); 
var SNK1 = new Mangas("Attack on Titan #1", "https://images-na.ssl-images-amazon.com/images/I/51QWSFImgvL._SX342_SY445_QL70_ML2_.jpg", "Isayama", 2500);
var SNK2 = new Mangas("Attack on Titan #2", "https://i.ibb.co/RzxtSr5/snk2.jpg", "Isayama", 2500); 
var SNK3 = new Mangas("Attack on Titan #2", "https://i.ibb.co/rffvF3M/snk3.jpg", "Isayama", 2500); 
var tokyo1 = new Mangas("Tokyo Revengers #1", "https://i.ibb.co/mSs9pLy/tokyo1.jpg", "Wakui", 2500);
var tokyo2 = new Mangas("Tokyo Revengers #2", "https://i.ibb.co/4YJwJyC/tokyo2.jpg", "Wakui", 2500);
var tokyo3 = new Mangas("Tokyo Revengers #3", "https://i.ibb.co/18FG16v/tokyo3.jpg.jpg", "Wakui", 2500);
var kimetsu1 = new Mangas("Demon Slayer #1", "https://i.ibb.co/Bg1dqBH/kimetsu1.jpg", "Gotouge", 2500);
var kimetsu2 = new Mangas("Demon Slayer #2", "https://i.ibb.co/vjqTB7H/kimetsu2.jpg", "Gotouge", 2500);
var kimetsu3 = new Mangas("Demon Slayer #3", "https://i.ibb.co/CszwfJD/kimetsu3.jpg", "Gotouge", 2500);

var funko1 = new Mangas("Naruto","https://i.ibb.co/1b4rtQW/Screenshot-2021-10-21-MANGA-KV2.png","Funko Pop", 2500);
var funko2 = new Mangas("Luffy","https://i.ibb.co/BgSsp6j/onepiecefunkopop.jpg","Funko Pop", 3500);
var funko3 = new Mangas("Eren (Titan Form)","https://i.ibb.co/Bq6mMcD/snkfunkopop.jpg", "Funko Pop", 2999);


    //Productos Destacados Home

    document.getElementById("imgcard").src = naruto1.portada;
    document.getElementById("titlecard").innerHTML = naruto1.titulo;
    document.getElementById("mangakacard").innerHTML = "Mangaka: " + naruto1.mangaka;
    
    document.getElementById("imgcard2").src = onePiece1.portada;
    document.getElementById("titlecard2").innerHTML = onePiece1.titulo;
    document.getElementById("mangakacard2").innerHTML = "Mangaka: " + onePiece1.mangaka;

    document.getElementById("imgcard3").src = SNK1.portada;
    document.getElementById("titlecard3").innerHTML = SNK1.titulo;
    document.getElementById("mangakacard3").innerHTML = "Mangaka: " + SNK1.mangaka;
    
    document.getElementById("imgcard4").src = tokyo1.portada;
    document.getElementById("titlecard4").innerHTML = tokyo1.titulo;
    document.getElementById("mangakacard4").innerHTML = "Mangaka: " + tokyo1.mangaka;
    
    document.getElementById("imgcard5").src = kimetsu1.portada;
    document.getElementById("titlecard5").innerHTML = kimetsu1.titulo;
    document.getElementById("mangakacard5").innerHTML = "Mangaka: " + kimetsu1.mangaka;
    
    document.getElementById("imgcard6").src = funko1.portada;
    document.getElementById("titlecard6").innerHTML = funko1.titulo;
    document.getElementById("mangakacard6").innerHTML = funko1.mangaka + "<br/>" + "$" + funko1.precio;
    
    document.getElementById("imgcard7").src = funko2.portada;
    document.getElementById("titlecard7").innerHTML = funko2.titulo;
    document.getElementById("mangakacard7").innerHTML = funko2.mangaka + "<br/>" + "$" + funko2.precio;
    
    document.getElementById("imgcard8").src = funko3.portada;
    document.getElementById("titlecard8").innerHTML = funko3.titulo;
    document.getElementById("mangakacard8").innerHTML = funko3.mangaka + "<br/>" + "$" + funko3.precio;
    

    
    
    
    
    
