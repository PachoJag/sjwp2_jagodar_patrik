//zad 1
for(let i = 1; i <= 10; i++){
    console.log(i);
}

//zad 1 dodatno
let i = 1;
while(i <= 10){
    console.log(i);
    i++;
}

//zad 2
let n = prompt("Unesite broj n: ");
let sum = 0;
let average = 0;
for(let i = 1; i <= n; i++){
    sum += i;
    average = sum / n;
}
console.log("Suma brojeva od 1 do " + n + " je: " + sum);
console.log("Prosek brojeva od 1 do " + n + " je: " + average);

//zad 3
let ocjene = [4,5,3,4,2];
let sum2 = 0;
let highest = ocjene[0];
for(let i = 0; i < ocjene.length; i++){
    sum2 += ocjene[i];
    if(ocjene[i] > highest) {
        highest = ocjene[i];
    }
}
let average2 = sum2 / ocjene.length;
console.log("Prosek ocjena je: " + average2);
console.log("Najveca ocjena je: " + highest);

//zad 4
let broj = prompt("Unesite broj: ");
for(let i = 1; i <= broj; i++){
    if(broj % 2 === 0){
        console.log("Broj " + broj + " je paran.");
    }
    else {
        console.log("Broj " + broj + " je neparan.");
    }
}

//zad 5
let polje = [12,7,25,4,19];
let max = polje[0];
let min = polje[0];
for(let i = 0; i < polje.length; i++){
    if(polje[i] > max) {
        max = polje[i];
    }
    if(polje[i] < min) {
        min = polje[i];
    }
}
console.log("Najveci element u polju je: " + max);
console.log("Najmanji element u polju je: " + min);

//zad 6
let number = prompt("Unesite broj: ");
let array = [1,2,3,4,5,6,7,8,9,10];
for(let i = 0; i < array.length; i++){
    if(array[i] == number) {
        console.log("Broj " + number + " se nalazi u nizu.");
        break;
    }
    console.log("Broj " + number + " se ne nalazi u nizu.");
}
//zad 7
function jePrijestupna(godina) {
    return (godina % 400 === 0) || (godina % 4 === 0 && godina % 100 !== 0);
}

let godina = parseInt(prompt("Unesite godinu: "));
if (jePrijestupna(godina)) {
    console.log("Godina " + godina + " je prijestupna.");
} else {
    console.log("Godina " + godina + " nije prijestupna.");
}

//zad 8
let tekst = prompt("Unesite tekst: ").toLowerCase();
let samoglasnici = ['a', 'e', 'i', 'o', 'u'];
let brojacSamoglasnika = 0;
let samoglasniciPolje = [];
for(let i = 0; i < tekst.length; i++){
    if(samoglasnici.includes(tekst[i])) {
        brojacSamoglasnika++;
        samoglasniciPolje.push(tekst[i]);
    }
}
console.log("Broj samoglasnika u tekstu je: " + brojacSamoglasnika);
console.log("Svi samoglasnici u tekstu su: " + samoglasniciPolje.join(', '));
console.log("Broj svih znakova u tekstu je: " + tekst.length);

//zad 9

let broj1 = parseFloat(prompt("Unesite prvi broj: "));
let broj2 = parseFloat(prompt("Unesite drugi broj: "));
function zbroj(a, b) {
    return a + b;
}
function oduzimanje(a, b) {
    return a - b;
}
function mnozenje(a, b) {
    return a * b;
}
function dijeljenje(a, b) {
    if(b === 0) {
        return "Dijeljenje s nulom nije dozvoljeno.";
    }
    return a / b;
}
function potencija(a, b) {
    return Math.pow(a, b);
}
console.log("Zbroj: " + zbroj(broj1, broj2).toFixed(2));
console.log("Oduzimanje: " + oduzimanje(broj1, broj2).toFixed(2));
console.log("Mnozenje: " + mnozenje(broj1, broj2).toFixed(2));
console.log("Dijeljenje: " + dijeljenje(broj1, broj2).toFixed(2));
console.log("Potencija: " + potencija(broj1, broj2).toFixed(2));

//zad 10
let visina = parseFloat(prompt("Unesite visinu u metrima: "));
let tezina = parseFloat(prompt("Unesite težinu u kilogramima: "));
function izracunajBMI(visina, tezina) {
    return tezina / (visina * visina);
}
if (visina <= 0 || tezina <= 0) {
    console.log("Pogrešan unos. Visina i težina moraju biti pozitivni brojevi.");
} else {
    console.log("BMI: " + izracunajBMI(visina, tezina).toFixed(2));
}

//zad 11
let polje1 = [1, 2, 3, 4, 5];
function okreniPolje(polje) {
    let novoPolje = [];
    for (let i = polje.length - 1; i >= 0; i--) {
        novoPolje.push(polje[i]);
    }
    return novoPolje;
}
let okrenutoPolje = okreniPolje(polje1);
console.log("Originalno polje: " + polje1);
console.log("Okrenuto polje: " + okrenutoPolje);

//zad 12 - 17 za dz, improve all zadaci dodatno + popravi neke logove
