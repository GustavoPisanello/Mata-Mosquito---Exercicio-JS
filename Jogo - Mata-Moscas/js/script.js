let altura = 0;
let largura = 0;

function ajustaTela(){

 altura = window.innerHeight;
 largura = window.innerWidth;

console.log(largura, altura);
}
ajustaTela();

function posRandomica(){

let posx = Math.floor(Math.random() * largura -90); 
let posy = Math.floor(Math.random()* altura -90);
posx = posx < 0 ? 0: posx;
posy = posy < 0 ? 0: posy;

console.log(posx,posy);

let mosquito = document.createElement('img');
mosquito.src = 'img/mosca.png';
document.body.appendChild(mosquito);
mosquito.className = 'mosq01';
mosquito.style.left = posx + 'px';
mosquito.style.top = posy + 'px';
// mosquito.style.position = 'absolute'; Pode ser assim, ou mudando na nossa classe "mosq01" no CSS.

};

