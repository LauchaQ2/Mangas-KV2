var Mangas = function (titulo, portada, mangaka){
    this.titulo = titulo;
    this.portada = portada;
    this.mangaka = mangaka;
}

var naruto = new Mangas("Naruto #1", "https://m.media-amazon.com/images/I/61blY+DiS4L.jpg", "Kishimoto");
var onePiece = new Mangas("One Piece #1", "https://m.media-amazon.com/images/I/51T6jmOtLYL.jpg", "Oda"); 
var SNK = new Mangas("Attack on Titan #1", "https://images-na.ssl-images-amazon.com/images/I/51QWSFImgvL._SX342_SY445_QL70_ML2_.jpg", "Isayama"); 

    document.getElementById("imgcard").src = naruto.portada;
    document.getElementById("titlecard").innerHTML = naruto.titulo;
    document.getElementById("mangakacard").innerHTML = "Mangaka: " + naruto.mangaka;
    
    document.getElementById("imgcard2").src = onePiece.portada;
    document.getElementById("titlecard2").innerHTML = onePiece.titulo;
    document.getElementById("mangakacard2").innerHTML = "Mangaka: " + onePiece.mangaka;

    document.getElementById("imgcard3").src = SNK.portada;
    document.getElementById("titlecard3").innerHTML = SNK.titulo;
    document.getElementById("mangakacard3").innerHTML = "Mangaka: " + SNK.mangaka;