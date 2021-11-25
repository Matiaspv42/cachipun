//  Creo una funcion que retorna la jugada de la computadora
function random_cachipun(){
    const rndm = Math.floor(Math.random()*3);
    var compu = "";
    switch(rndm){
        case 0:
            compu = "piedra";
            break
        case 1:
            compu =  "papel";
            break;
        case 2:
            compu =  "tijera";
            break;
    }
    return compu
}

alert('Bienvenido a Cachipun vs la maquina!');

// Pido la cantidad de rondas que quiere jugar el usuario

const rondas = parseInt(prompt("Ingrese la cantidad de rondas que desea hacer",""));

// Inicializo contadores para determinar quien es el ganador

var victorias = 0;
var derrotas = 0;
var empates = 0;
var ganador =""

// Ciclo for para realizar todas las rondas
for(let i = 1; i<= rondas ; i++){
    var usuario = prompt("Ingrese su jugada (piedra, papel o tijera)","");
    var compu = random_cachipun();
    // La siguiente linea solo está para verificar que el programa realmente está viendo quien gana correctamente
    console.log(compu)

    switch(usuario){
        case "piedra":
            switch(compu){
                case "piedra":
                    alert(`La computadora sacó ${compu} así que es un empate!`);
                    empates +=1;
                    break;
                case  "tijera":
                    alert(`La computadora sacó ${compu} así que es una victoria!`);
                    victorias +=1;
                    break;
                case "papel":
                    alert(`La computadora sacó ${compu} así que es una derrota:(`);
                    derrotas +=1;
                    break;
            }
            break;
        case  "papel":
            switch(compu){
                case  "piedra":
                    alert(`La computadora sacó ${compu} así que es una victoria!`)
                    victorias +=1;
                    break;
                case  "tijera":
                    alert(`La computadora sacó ${compu} así que es una derrota :(`)
                    derrotas +=1;
                    break;
                case  "papel":
                    alert(`La computadora sacó ${compu} así que es un empate!`)
                    empates +=1;
                    break;
            }
            break;
        case  "tijera":
            switch(compu){
                case "piedra":
                    alert(`La computadora sacó ${compu} así que es una derrota :(`)
                    derrotas +=1;
                    break;
                case  "tijera":
                    alert(`La computadora sacó ${compu} así que es un empate!`)
                    empates +=1;
                    break;
                case "papel":
                    alert(`La computadora sacó ${compu} así que es una victoria!`)
                    victorias +=1;
                    break;
            }
    }
}
// Esta parte es para definir el ganador
if(victorias>derrotas){
    ganador = "Tú!"
}
else if (derrotas>victorias){
    ganador="La maquina!!!!"
}
else if(derrotas==victorias){
    ganador="Ninguno... Hubo un empate!"
}
// Escribir quien es el ganador en pantalla
document.write(`Jugaste ${rondas} rondas. Ganaste ${victorias} veces, Perdiste ${derrotas} veces y empataste ${empates} veces <br> Considerando esto... El ganador es: ${ganador}`)

// Y esta parte es solo por diversion jaja

if(victorias>derrotas){
    document.write(`<br> <br> <img src="https://thumbs.gfycat.com/EnchantingAggressiveArmadillo-size_restricted.gif"> 
    <h1> Haz derrotado a la maquina!!! </h1>`);
}
else if (derrotas>victorias){
    document.write(`<br> <br> <img src="https://c.tenor.com/ffxXBrAQw5wAAAAC/robot-attack-saturday-night-live.gif"> 
    <h1> La maquina ha ganado! La humanidad perecera :(... </h1>`);
}
else if(derrotas==victorias){
    document.write(`<br> <br> <img src="https://c.tenor.com/Pk3VLyNJvJ8AAAAC/robot-hug.gif"> 
    <h1> La humanidad y las maquinas pueden vivir en armonía <3 </h1>`);
}