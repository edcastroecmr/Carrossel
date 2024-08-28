const pegarButtonRight = document.querySelectorAll(".seta-right");
const pegarButtonLeft = document.querySelectorAll(".seta-left");

const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");
const slide3 = document.querySelector(".slide3");
const slide4 = document.querySelector(".slide4");

// Função para atualizar a opacidade dos botões
function atualizarOpacidadeBotoes() {
    if (slide1.classList.contains("mostrar")) {
        pegarButtonLeft.forEach(button => button.classList.add("seta-opaca"));
        pegarButtonRight.forEach(button => button.classList.remove("seta-opaca"));
    } else if (slide4.classList.contains("mostrar")) {
        pegarButtonLeft.forEach(button => button.classList.remove("seta-opaca"));
        pegarButtonRight.forEach(button => button.classList.add("seta-opaca"));
    } else {
        pegarButtonLeft.forEach(button => button.classList.remove("seta-opaca"));
        pegarButtonRight.forEach(button => button.classList.remove("seta-opaca"));
    }
}

// Função para avançar slides
let carroselRight = function() {
    if (slide1.classList.contains("mostrar")) {
        slide1.classList.remove("mostrar");
        slide2.classList.add("mostrar");
    } else if (slide2.classList.contains("mostrar")) {
        slide2.classList.remove("mostrar");
        slide3.classList.add("mostrar");
    } else if (slide3.classList.contains("mostrar")) {
        slide3.classList.remove("mostrar");
        slide4.classList.add("mostrar");
    } else if (slide4.classList.contains("mostrar")) {
        console.log("aqui é o último");
    }
    atualizarOpacidadeBotoes();
}

// Função para retroceder slides
let carroselLeft = function() {
    if (slide4.classList.contains("mostrar")) {
        slide4.classList.remove("mostrar");
        slide3.classList.add("mostrar");
    } else if (slide3.classList.contains("mostrar")) {
        slide3.classList.remove("mostrar");
        slide2.classList.add("mostrar");
    } else if (slide2.classList.contains("mostrar")) {
        slide2.classList.remove("mostrar");
        slide1.classList.add("mostrar");
    } else if (slide1.classList.contains("mostrar")) {
        return;
    }
    atualizarOpacidadeBotoes();
}

// Inicializa com a opacidade dos botões
atualizarOpacidadeBotoes();

// iterar com "FOR"
for (let i = 0; i < pegarButtonRight.length; i++) {
    pegarButtonRight[i].addEventListener('click', () => { carroselRight() });
}

//iterar com "forEach"
pegarButtonLeft.forEach(item => {
    item.addEventListener('click', () => { carroselLeft() });
});
