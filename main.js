const pantallaInicio = document.querySelector(".pantallaInicio");
const pantallaFinal = document.querySelector(".pantallaFinal");

const modoFacil = document.querySelector(".modoFacil");
const modoDificil = document.querySelector(".modoDificil");

const btnFacil = document.getElementById("btnFacil");
const btnDificil = document.getElementById("btnDificil");

const btnVolverEmpezar = document.getElementById("btnVolverEmpezar");

const puntajeFinal = document.getElementById("puntajeFinal");

const txtPuntaje = document.getElementById("txtPuntaje");
let puntaje = 0;

const preguntaFacil = document.getElementById("preguntaFacil");
const preguntaDificil = document.getElementById("preguntaDificil");

const btnRtaAzul = document.getElementById("btnAzul");
const btnRtaAmarillo = document.getElementById("btnAmarillo");
const btnRtaRojo = document.getElementById("btnRojo");
const btnRtaVerde = document.getElementById("btnVerde");

const btnEnviar = document.getElementById("btnEnviar");

const inputRta = document.getElementById("inputRta");

let respuestaInput;

let numeroAleatorio =  Math.floor(Math.random() * 10);

const preguntas = [
    "Cuándo acabó la Segunda Guerra Mundial",
    "Qué rama de la Biología se encarga del estudio de los animales",
    "Cuál es conocida como la ciudad de los racacielos",
    "Cuál es el tercer planeta del sistema solar",
    "Quién dijo 'Yo sólo sé que no sé nada'",
    "Cómo se llama el triángulo que tiene sus tres lados iguales",
    "Dónde se encuentra la Guayana Francesa",
    "Cuál es el océano más grande",
    "Cómo se llama la agencia de inteligencia británica",
    "Quién escribió 'La Odisea'"
];

const respuestasFaciles = [
    {
        azul: "1942",
        amarillo: "1945",
        rojo: "1985",
        verde: "1939"
    }, 
    {
        azul: "Zoología",
        amarillo: "Botánica",
        rojo: "Ecología",
        verde: "Genética"
    },{
        azul: "Florida",
        amarillo: "Dubai",
        rojo: "Hong Kong",
        verde: "Nueva York"
    },{
        azul: "Venus",
        amarillo: "Marte",
        rojo: "Tierra",
        verde: "Saturno"
    },{
        azul: "Demócrito",
        amarillo: "Pitágoras",
        rojo: "Platón",
        verde: "Sócrates"
    },{
        azul: "Equilátero",
        amarillo: "Escaleno",
        rojo: "Isósceles",
        verde: "Obtuso"
    },{
        azul: "Este de Francia",
        amarillo: "Dentro de Francia",
        rojo: "Norte de Argentina",
        verde: "Sur de Brasil"
    },{
        azul: "Índico",
        amarillo: "Glacial Antártico",
        rojo: "Pacífico",
        verde: "Atlántico"
    },{
        azul: "FBI",
        amarillo: "MI5",
        rojo: "CIA",
        verde: "Mossad"
    },{
        azul: "Píndaro",
        amarillo: "Shakespeare",
        rojo: "Hesíodo",
        verde: "Homero"
    },
];

const respuestasCorrectas = [
    respuestasFaciles[0].amarillo, 
    respuestasFaciles[1].azul,
    respuestasFaciles[2].verde,
    respuestasFaciles[3].rojo,    
    respuestasFaciles[4].verde,
    respuestasFaciles[5].azul,
    respuestasFaciles[6].verde,
    respuestasFaciles[7].rojo,
    respuestasFaciles[8].amarillo,
    respuestasFaciles[9].verde
];

btnFacil.addEventListener("click", () => {
    pantallaInicio.classList.remove("d-flex");
    pantallaInicio.style.display = "none";

    modoFacil.style.display = "flex";

    txtPuntaje.innerText = "Puntaje: " + puntaje;

    HacerPregunta();
});

btnDificil.addEventListener("click", () => {
    pantallaInicio.classList.remove("d-flex");
    pantallaInicio.style.display = "none";

    modoDificil.style.display = "flex";

    txtPuntaje.innerText = "Puntaje: " + puntaje;

    HacerPregunta();
});

btnRtaAzul.addEventListener("click", () => {
    if(respuestasFaciles[numeroAleatorio].azul == respuestasCorrectas[numeroAleatorio]) {
        puntaje++;
        txtPuntaje.innerText = "Puntaje: " + puntaje;

        preguntas.splice(numeroAleatorio, 1);
        respuestasFaciles.splice(numeroAleatorio, 1);
        respuestasCorrectas.splice(numeroAleatorio, 1);

        HacerPregunta();
    } else {
        puntaje--;
        txtPuntaje.innerText = "Puntaje: " + puntaje;
    }

    if(preguntas.length == 1) {
        modoFacil.style.display = "none";
        pantallaFinal.style.display = "flex";
    
        puntajeFinal.innerText = "Puntaje Final: " + puntaje;
    }
}); 

btnRtaAmarillo.addEventListener("click", () => {
    if(respuestasFaciles[numeroAleatorio].amarillo == respuestasCorrectas[numeroAleatorio]) {
        puntaje++;
        txtPuntaje.innerText = "Puntaje: " + puntaje;

        preguntas.splice(numeroAleatorio, 1);
        respuestasFaciles.splice(numeroAleatorio, 1);
        respuestasCorrectas.splice(numeroAleatorio, 1);

        HacerPregunta();
    } else {
        puntaje--;
        txtPuntaje.innerText = "Puntaje: " + puntaje;
    }

    if(preguntas.length == 1) {
        modoFacil.style.display = "none";
        pantallaFinal.style.display = "flex";
    
        puntajeFinal.innerText = "Puntaje Final: " + puntaje;
    }
}); 

btnRtaRojo.addEventListener("click", () => {
    if(respuestasFaciles[numeroAleatorio].rojo == respuestasCorrectas[numeroAleatorio]) {
        puntaje++;
        txtPuntaje.innerText = "Puntaje: " + puntaje;

        preguntas.splice(numeroAleatorio, 1);
        respuestasFaciles.splice(numeroAleatorio, 1);
        respuestasCorrectas.splice(numeroAleatorio, 1);

        HacerPregunta();
    } else {
        puntaje--;
        txtPuntaje.innerText = "Puntaje: " + puntaje;
    }

    if(preguntas.length == 1) {
        modoFacil.style.display = "none";
        pantallaFinal.style.display = "flex";
    
        puntajeFinal.innerText = "Puntaje Final: " + puntaje;
    }
}); 

btnRtaVerde.addEventListener("click", () => {
    if(respuestasFaciles[numeroAleatorio].verde == respuestasCorrectas[numeroAleatorio]) {
        puntaje++;
        txtPuntaje.innerText = "Puntaje: " + puntaje;

        preguntas.splice(numeroAleatorio, 1);
        respuestasFaciles.splice(numeroAleatorio, 1);
        respuestasCorrectas.splice(numeroAleatorio, 1);

        HacerPregunta();
    } else {
        puntaje--;
        txtPuntaje.innerText = "Puntaje: " + puntaje;
    }

    if(preguntas.length == 1) {
        modoFacil.style.display = "none";
        pantallaFinal.style.display = "flex";
    
        puntajeFinal.innerText = "Puntaje Final: " + puntaje;
    }
}); 

btnEnviar.addEventListener("click", () => {
    respuestaInput = inputRta.value;

    CompararRespuestas(respuestaInput);
});

btnVolverEmpezar.addEventListener("click", () => {
    location.reload();
});

function HacerPregunta() {
    numeroAleatorio =  Math.floor(Math.random() * preguntas.length);

    if(modoDificil.style.display == "flex") {
        setTimeout(() => {
            inputRta.style.borderColor = "gray";
        }, 500);

        preguntaDificil.innerText = "¿" + preguntas[numeroAleatorio] + "?";

        if(preguntaDificil.innerText == "¿Dónde se encuentra la Guayana Francesa?") {
            preguntaDificil.innerText = "¿Dónde se encuentra la Guayana Francesa con relación a Brasil?";
        }
    }    
    
    if(modoFacil.style.display == "flex") {
        preguntaFacil.innerText = "¿" + preguntas[numeroAleatorio] + "?";

        btnRtaAzul.innerText = respuestasFaciles[numeroAleatorio].azul;
        btnRtaAmarillo.innerText = respuestasFaciles[numeroAleatorio].amarillo;
        btnRtaRojo.innerText = respuestasFaciles[numeroAleatorio].rojo;
        btnRtaVerde.innerText = respuestasFaciles[numeroAleatorio].verde;
    }
}

function CompararRespuestas(rta) {
    rta = rta.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    if (rta.toLowerCase() == (respuestasCorrectas[numeroAleatorio]).normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()) {
        puntaje++;
        txtPuntaje.innerText = "Puntaje: " + puntaje;

        preguntas.splice(numeroAleatorio, 1);
        respuestasCorrectas.splice(numeroAleatorio, 1);

        inputRta.value = "";
        inputRta.style.borderColor = "green";

        HacerPregunta();
    } else {
        puntaje--;
        txtPuntaje.innerText = "Puntaje: " + puntaje;

        inputRta.value = "";
        inputRta.style.borderColor = "red";

        setTimeout(() => {
            inputRta.style.borderColor = "gray";
        }, 500);
    }

    if(preguntas.length == 1) {
        modoDificil.style.display = "none";
        pantallaFinal.style.display = "flex";
    
        puntajeFinal.innerText = "Puntaje Final: " + puntaje;
    }
}