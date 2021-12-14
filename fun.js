/*Cano*/
var rot = 0;
var pontos = 0;;
var origem = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] //10x10
];
var A = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] //10x10
];

function reset() {
    A = origem;
}
function RODA(id, i, j, muda) {
    rot += 90;
    if (rot >= 360){ rot = 0; }
    document.querySelector(`#${id}`).style.transform = `rotate(${rot}deg)`;
    A[i][j] = rot / 90;
    if (muda == 'B') { 
        A[i][j] = 0;
    }
    if (muda == 'C') {
        A[i][j] = 0;
    }
    if (muda == 'N') {
        if (A[i][j] == 2) { A[i][j] = 0; }
        if (A[i][j] == 3) { A[i][j] = 1; }
    }
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max - min)) + min;
}
function setup(id, i, j, muda) {
    var mul;
    if (muda == 'M') {
        mul = getRandomInt(0, 3);
        A[i][j] = mul;
    }
    if (muda == 'N') {
        mul = getRandomInt(0, 2);
        A[i][j] = mul;
    }
    var rotation = mul * 90
    document.querySelector(`#${id}`).style.transform = `rotate(${rotation}deg)`;
}

function gabarito1() {
    var soma = 0;
    var B = [
        [1, 0, 0, 0, 0, 2, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ];
    for (let a = 0; a < 2; a++) {
        for (let b = 0; b < 7; b++) {
            if (A[a][b] == B[a][b]){ soma++; }
            if (soma == 14) {
                pontos++;
                alert("Parabéns!! Correto!");
                window.location.replace('cano_fases.html');
            }
        }
    }
}
function gabarito2(){
    var soma = 0;
    var B = [
        [1, 0, 2, 2],
        [1, 0, 1, 3],
        [1, 0, 1, 1],
        [1, 0, 1, 1],
        [0, 0, 0, 3]
    ];
    for (let a = 0; a < 5; a++) {
        for (let b = 0; b < 4; b++) {
            if (A[a][b] == B[a][b]){ soma++; }
            if (soma == 20) {
                pontos++;
                alert("Parabéns!! Correto!");
                window.location.replace('cano_fases.html');
            }
        }
    } 
}
function gabarito3(){
    var soma = 0;
    var B = [
        [1, 0, 0, 2, 2],
        [1, 0, 0, 3, 1],
        [0, 0, 0, 0, 3]
    ];
    for (let a = 0; a < 3; a++) {
        for (let b = 0; b < 5; b++) {
            if (A[a][b] == B[a][b]){ soma++; }
            if (soma == 15) {
                pontos++;
                alert("Parabéns!! Correto!");
                window.location.replace('cano_fases.html');
            }
        }
    } 
}
function gabarito4(){
    var soma = 0;
    var B = [
        [0, 1, 0, 2, 0],
        [1, 0, 0, 0, 2],
        [1, 0, 0, 0, 1],
        [0, 0, 2, 0, 3],
        [0, 0, 0, 0, 0]
    ];
    for (let a = 0; a < 5; a++) {
        for (let b = 0; b < 5; b++) {
            if (A[a][b] == B[a][b]){ soma++; }
            if (soma == 25) {
                pontos++;
                alert("Parabéns!! Correto!");
                window.location.replace('cano_fases.html');
            }
        }
    } 
}
function gabarito5(){
    var soma = 0;
    var B = [
        [1, 0, 2, 2],
        [1, 0, 3, 1],
        [1, 0, 1, 3],
        [0, 0, 0, 3]
    ];
    for (let a = 0; a < 4; a++) {
        for (let b = 0; b < 4; b++) {
            if (A[a][b] == B[a][b]){ soma++; }
            if (soma == 16) {
                pontos++;
                alert("Parabéns!! Correto!");
                window.location.replace('cano_fases.html');
            }
        }
    } 
}
function gabarito6(){
    var soma = 0;
    var B = [
        [1, 0, 2, 0, 2],
        [1, 0, 1, 0, 1],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 3]
    ];
    for (let a = 0; a < 4; a++) {
        for (let b = 0; b < 5; b++) {
            if (A[a][b] == B[a][b]){ soma++; }
            if (soma == 20) {
                pontos++;
                alert("Parabéns!! Correto!");
                window.location.replace('cano_fases.html');
            }
        }
    } 
}
function gabarito7(){
    var soma = 0;
    var B = [
        [1, 0, 2, 2, 2],
        [1, 0, 0, 1, 1],
        [1, 0, 0, 1, 1],
        [0, 0, 2, 0, 3]
    ];
    for (let a = 0; a < 4; a++) {
        for (let b = 0; b < 5; b++) {
            if (A[a][b] == B[a][b]){ soma++; }
            if (soma == 20) {
                pontos++;
                alert("Parabéns!! Correto!");
                window.location.replace('cano_fases.html');
            }
        }
    } 
}
function gabarito8(){
    var soma = 0;
    var B = [
        [0, 0, 1, 2, 0, 2],
        [1, 0, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 1],
        [0, 0, 2, 0, 0, 3],
        [0, 0, 0, 0, 0, 0]
    ];
    for (let a = 0; a < 5; a++) {
        for (let b = 0; b < 6; b++) {
            if (A[a][b] == B[a][b]){ soma++; }
            if (soma == 30) {
                pontos++;
                alert("Parabéns!! Correto!");
                window.location.replace('cano_fases.html');
            }
        }
    } 
}
function gabarito9(){
    var soma = 0;
    var B = [
        [1, 0, 2, 0, 2],
        [1, 0, 1, 0, 1],
        [1, 0, 0, 0, 3],
        [1, 0, 1, 0, 1],
        [0, 0, 0, 0, 3]
    ];
    for (let a = 0; a < 5; a++) {
        for (let b = 0; b < 5; b++) {
            if (A[a][b] == B[a][b]){ soma++; }
            if (soma == 25) {
                pontos++;
                alert("Parabéns!! Correto!");
                window.location.replace('cano_fases.html');
            }
        }
    } 
}
function gabarito10(){
    var soma = 0;
    var B = [
        [0, 0, 1, 2, 0, 2, 0, 0, 2],
        [0, 0, 0, 1, 0, 1, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 1, 2, 2, 1],
        [1, 0, 0, 1, 0, 1, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 3],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    for (let a = 0; a < 7; a++) {
        for (let b = 0; b < 9; b++) {
            if (A[a][b] == B[a][b]){ soma++; }
            if (soma == 63) {
                pontos++;
                alert("Parabéns!! Correto!");
                window.location.replace('cano_fases.html');
            }
            /*if (soma != 63){
                alert("O circuito não está correto! Tente novamente");
            }*/
        }
    } 
}

/*Quiz*/
function alternativa(tentativa, resposta) {
    var R = resposta;
    if (tentativa == R) {
        alert("Acertou");
        return 0;
    } 
    else {
        alert("Errou");
    }
}