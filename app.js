let firstPara = document.getElementById("para-one");
let x = document.getElementById("span-one");
let y = document.getElementById("span-second");

{
    document.getElementById('result').innerHTML =
        x + y >= 10 ? 'x supérieur à 10' : 'Le resultat de 5 + 12 est égale à 17 !';
}

function changeBackground(color) {
    document.body.style.backgroundColor = "#e27979";
}
