var Mangas = function (titulo, portada, mangaka){
    this.titulo = titulo;
    this.portada = portada;
    this.mangaka = mangaka;
}

// "Base de Datos"

var naruto1 = new Mangas("Naruto #1", "https://m.media-amazon.com/images/I/61blY+DiS4L.jpg", "Kishimoto");
var naruto2 = new Mangas("Naruto #2", "https://i.ibb.co/GJ6mq6t/naruto2.jpg", "Kishimoto");
var naruto3 = new Mangas("Naruto #3", "https://i.ibb.co/VtRV5Jx/naruto3.jpg", "Kishimoto");
var onePiece1 = new Mangas("One Piece #1", "https://m.media-amazon.com/images/I/51T6jmOtLYL.jpg", "Oda");
var onePiece2 = new Mangas("One Piece #2", "https://i.ibb.co/RYky4jB/onepiece2.png", "Oda"); 
var onePiece3 = new Mangas("One Piece #3", "https://i.ibb.co/Nsn2WnT/onepiece3.png", "Oda"); 
var SNK1 = new Mangas("Attack on Titan #1", "https://images-na.ssl-images-amazon.com/images/I/51QWSFImgvL._SX342_SY445_QL70_ML2_.jpg", "Isayama");
var SNK2 = new Mangas("Attack on Titan #2", "https://i.ibb.co/RzxtSr5/snk2.jpg", "Isayama"); 
var SNK3 = new Mangas("Attack on Titan #2", "https://i.ibb.co/rffvF3M/snk3.jpg", "Isayama"); 
var tokyo1 = new Mangas("Tokyo Revengers #1", "https://i.ibb.co/mSs9pLy/tokyo1.jpg", "Wakui");
var tokyo2 = new Mangas("Tokyo Revengers #2", "https://i.ibb.co/4YJwJyC/tokyo2.jpg", "Wakui");
var tokyo3 = new Mangas("Tokyo Revengers #3", "https://i.ibb.co/18FG16v/tokyo3.jpg.jpg", "Wakui");
var kimetsu1 = new Mangas("Demon Slayer #1", "https://i.ibb.co/Bg1dqBH/kimetsu1.jpg", "Gotouge");
var kimetsu2 = new Mangas("Demon Slayer #2", "https://i.ibb.co/vjqTB7H/kimetsu2.jpg", "Gotouge");
var kimetsu3 = new Mangas("Demon Slayer #3", "https://i.ibb.co/CszwfJD/kimetsu3.jpg", "Gotouge");


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
    
    
    // Listado de Productos Shop
    
    document.getElementById("prodimg1").src = naruto2.portada;
    document.getElementById("prodtitle1").innerHTML = naruto2.titulo;
    document.getElementById("prodmangaka1").innerHTML = "Mangaka: " + naruto2.mangaka;

   /* const naruto = [naruto1, naruto2, naruto3];
    const onepiece = [onePiece1, onePiece2, onePiece3];
    const attack = [SNK1, SNK2, SNK3];
    const tokrev = [tokyo1, tokyo2, tokyo3];
    const demon = [kimetsu1, kimetsu2, kimetsu3];*/

    


    
    
    
    
    
    
    
