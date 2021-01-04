
let carColors = ['красный','золотой','зелёный','синий','белый','серый'];
let carBrands = ['Нисан','Лада','Рено','Фольксваген','Кийя','Роллс-Ройс'];

function randomIs(){
    return Number(String(Math.random())[2]);
} //переписать функцию так, чтобы в неё можно было сразу загонять массив в параметр

let rndColor = randomIs();
let rndBrand = randomIs();
let digit1 = randomIs();
let digit2 = randomIs();
let digit3 = randomIs(); //обслужить случай с 000

function speak() {
        speechSynthesis.speak(new SpeechSynthesisUtterance(`К вам подъедет ${carColors[rndColor]} ${carBrands[rndBrand]} ${digit1} ${digit2} ${digit3}`));
}
speak();

console.log(`К вам подъедет ${carColors[rndColor]}__${carBrands[rndBrand]}__${digit1} ${digit2} ${digit3}`); //улучшить строку


