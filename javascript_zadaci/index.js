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
}
average = sum / n;
console.log("Suma brojeva od 1 do " + n + " je: " + sum);
console.log("Prosjek brojeva od 1 do " + n + " je: " + average);

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
console.log("Prosjek ocjena je: " + average2);
console.log("Najveca ocjena je: " + highest);

//zad 4
let broj = prompt("Unesite broj: ");
let brojParnih = 0;
for(let i = 1; i <= broj; i++){
    if(i % 2 === 0){
        console.log("Broj " + i + " je paran.");
        brojParnih++;
    }
    else {
        console.log("Broj " + i + " je neparan.");
    }
}
console.log("Broj parnih brojeva: " + brojParnih);

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
let found = false;
let index = -1;
for(let i = 0; i < array.length; i++){
    if(array[i] == number) {
        found = true;
        console.log("Broj " + number + " se nalazi u nizu.");
        index = i;
        console.log("Indeks broja " + number + " u nizu je: " + index);
        break;
    }
}
if (!found) {
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
let rezultatDijeljenja = dijeljenje(broj1, broj2);
console.log("Zbroj: " + zbroj(broj1, broj2).toFixed(2));
console.log("Oduzimanje: " + oduzimanje(broj1, broj2).toFixed(2));
console.log("Mnozenje: " + mnozenje(broj1, broj2).toFixed(2));
console.log("Dijeljenje: " + (typeof rezultatDijeljenja === "number" ? rezultatDijeljenja : rezultatDijeljenja.toFixed(2)));
console.log("Potencija: " + potencija(broj1, broj2).toFixed(2));

//zad 10
let visina = parseFloat(prompt("Unesite visinu u metrima: "));
let tezina = parseFloat(prompt("Unesite težinu u kilogramima: "));
function izracunajBMI(visina, tezina) {
    return tezina / (visina * visina);
}
function KategorijaBMI(bmi) {
    if (bmi < 18.5) return "Pothranjenost";
    if (bmi < 25) return "Normalna težina";
    if (bmi < 30) return "Prekomjerna težina";
    return "Pretilost";
}

if (visina <= 0 || tezina <= 0) {
    console.log("Pogrešan unos. Visina i težina moraju biti pozitivni brojevi.");
} else {
    let bmi = izracunajBMI(visina, tezina);
    console.log("BMI: " + bmi.toFixed(2));
    console.log("Kategorija: " + KategorijaBMI(bmi));
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
console.log("Originalno polje: " + polje1.join(', '));
console.log("Okrenuto polje: " + okrenutoPolje.join(', '));

//zad 12 - 17 za dz, improve all zadaci dodatno + popravi neke logove
/*zad 12. Za polje rezultata izračunaj minimum, maksimum, prosjek i broj prolaznih rezultata.
• Obradi i slučaj praznog polja.

Dodatno: Ispiši rezultate u urednom obliku, svaki u zasebnom retku.*/
let polje2 = [45, 78, 90, 34, 56, 67, 89, 23, 12, 100];
function izracunajProsjek(polje) {
    if (polje.length === 0) return 0;
    let suma = 0;
    for (let i = 0; i < polje.length; i++) {
        suma += polje[i];
    }
    return suma / polje.length;
}
function izracunajMinMax(polje) {
    if (polje.length === 0) return { min: null, max: null };
    let min = polje[0];
    let max = polje[0];
    for (let i = 1; i < polje.length; i++) {
        if (polje[i] < min) min = polje[i];
        if (polje[i] > max) max = polje[i];
    }
    return { min, max };
}
function prebrojiProlazne(polje) {
    let count = 0;
    for (let i = 0; i < polje.length; i++) {
        if (polje[i] >= 50) count++;
    }
    return count;
}
function analizaRezultata(polje) {
    const {min, max} = izracunajMinMax(polje);
    console.log("Analiza rezultata:" + polje.join(', '));
    console.log("Minimum: " + min);
    console.log("Maksimum: " + max);
    console.log("Prosjek: " + izracunajProsjek(polje).toFixed(2));
    console.log("Broj prolaznih rezultata (>=50): " + prebrojiProlazne(polje) + " od " + polje.length);
}
/*zad 13. Ispiši prvih N članova Fibonaccijeva niza(0,1,1,2,3,5,8,13,21….).

Upute:

• N unesi pomoću prompta.

• Niz počinje s 0 i 1; svaki sljedeći član zbroj je prethodna dva.

• Napiši funkciju fibonacci(n) koja vraća polje članova niza.

• Koristi petlju za generiranje članova.

• Ispiši dobiveno polje.

Dodatno: Provjeri posebne slučajeve N = 1 i N = 2.*/
let N = parseInt(prompt("Unesite broj N za Fibonaccijev niz: "));
function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}
console.log("Fibonaccijev niz: " + fibonacci(N).join(', '));
/* zad 14. Iz polja ukloni ponovljene vrijednosti bez korištenja Set-a.

Upute:

• Primjer ulaza: [2, 5, 2, 7, 5, 9].

• Izradi novo prazno polje.

• Za svaki element provjeri postoji li već u novom polju.

• Dodaj samo vrijednosti koje još nisu dodane.

Dodatno: Napiši funkciju ukloniDuplikate(polje) koja vraća novo polje.*/
let polje3 = [2, 5, 2, 7, 5, 9];
function ukloniDuplikate(polje) {
    let novoPolje = [];
    for (let i = 0; i < polje.length; i++) {
        if (!novoPolje.includes(polje[i])) {
            novoPolje.push(polje[i]);
        }
    }
    return novoPolje;
}
console.log("Originalno polje: " + polje3.join(', '));
console.log("Polje bez duplikata: " + ukloniDuplikate(polje3).join(', '));
/** zad 15. Analiziraj dnevne temperature spremljene u polju.

Upute:

• Unesi ili zadaj temperature za 7 dana.

• Funkcijom izračunaj prosječnu temperaturu.

• Petljom pronađi najvišu i najnižu temperaturu.

• Prebroji dane s temperaturom višom od prosjeka.

• Ispiši sažetak.

Dodatno: Dodaj poruku za najtopliji i najhladniji dan. */
let temperature = [25, 28, 22, 30, 27, 24, 29];
function analizaTemperatura(temp) {
    if (temp.length === 0) return "Nema podataka o temperaturama.";
    let suma = 0;
    let minTemp = temp[0];
    let maxTemp = temp[0];
    let danMin = 1;
    let danMax = 1;
    for (let i = 0; i < temp.length; i++) {
        suma += temp[i];
        if (temp[i] < minTemp) {
            minTemp = temp[i];
            danMin = i + 1;
        }
        if (temp[i] > maxTemp) {
            maxTemp = temp[i];
            danMax = i + 1;
        }
    }
    let prosjek = suma / temp.length;
    let countAboveAverage = 0;
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] > prosjek) countAboveAverage++;
    }
    return `Prosječna temperatura: ${prosjek.toFixed(2)}°C\nNajniža temperatura: ${minTemp}°C (Dan ${danMin})\nNajviša temperatura: ${maxTemp}°C (Dan ${danMax})\nBroj dana s temperaturom višom od prosjeka: ${countAboveAverage}`;
}
console.log(analizaTemperatura(temperature));

/**zad 16. Napravi kviz s pitanjima, ponuđenim odgovorima i bodovanjem.

Upute:

• U polju spremi pitanja, a u drugom polju točne odgovore.

• Petljom postavljaj pitanja pomoću prompta.

• Korisnik unosi, funkcija provjerava odgovor i vraća true ili false.

• Broji bodove i na kraju prikaži rezultat.

• Uspoređuj odgovore bez obzira na velika i mala slova.

Dodatno: Prikaži postotak točnih odgovora i završnu poruku o uspjehu. */
// Polje s pitanjima (s ponuđenim odgovorima)
const pitanja = [
  "Koji je glavni grad Hrvatske?\n(a) Split  (b) Zagreb  (c) Osijek  (d) Rijeka",
  "Koji jezik se koristi za interaktivnost web stranica?\n(a) HTML  (b) CSS  (c) JavaScript  (d) SQL",
  "Koliko je 7 x 8?\n(a) 54  (b) 56  (c) 58  (d) 64",
  "Koja je najveća rijeka u Hrvatskoj po dužini toka?\n(a) Sava  (b) Drava  (c) Kupa  (d) Neretva",
  "Koji planet je najbliži Suncu?\n(a) Venera  (b) Zemlja  (c) Merkur  (d) Mars"
];

// Polje s točnim odgovorima (isti redoslijed kao pitanja)
const tocniOdgovori = ["b", "c", "b", "a", "c"];

// Funkcija provjerava odgovor i vraća true ili false
function provjeriOdgovor(korisnikovOdgovor, tocanOdgovor) {
  if (korisnikovOdgovor === null) {
    return false; // korisnik je kliknuo "Odustani"
  }
  return korisnikovOdgovor.trim().toLowerCase() === tocanOdgovor.toLowerCase();
}

let bodovi = 0;

// Petlja postavlja pitanja pomoću prompta
for (let i = 0; i < pitanja.length; i++) {
  const odgovor = prompt(`Pitanje ${i + 1}/${pitanja.length}\n\n${pitanja[i]}\n\nUpiši slovo odgovora:`);

  if (provjeriOdgovor(odgovor, tocniOdgovori[i])) {
    bodovi++;
    alert("Točno! ✔");
  } else {
    alert(`Netočno! ✘\nTočan odgovor je: ${tocniOdgovori[i]}`);
  }
}

// Postotak točnih odgovora
const postotak = (bodovi / pitanja.length) * 100;

// Završna poruka o uspjehu
let poruka;
if (postotak === 100) {
  poruka = "Savršeno! Odgovorio/la si točno na sva pitanja!";
} else if (postotak >= 80) {
  poruka = "Odlično! Vrlo dobro poznaješ gradivo!";
} else if (postotak >= 50) {
  poruka = "Dobro, ali ima još prostora za napredak.";
} else {
  poruka = "Pokušaj ponovno, uspjet će ti sljedeći put!";
}

alert(
  `Kviz je završen!\n\n` +
  `Bodovi: ${bodovi} / ${pitanja.length}\n` +
  `Postotak točnih odgovora: ${postotak.toFixed(0)}%\n\n` +
  poruka
);

/**zad 17 */
// Polje u kojem čuvamo zadatke kao objekte { naziv, obavljen }
const zadaci = [];

// Dodavanje zadatka
function dodajZadatak(naziv) {
  if (naziv === null) {
    return false; // korisnik je kliknuo "Odustani"
  }
  naziv = naziv.trim();
  if (naziv === "") {
    alert("Naziv zadatka ne smije biti prazan!");
    return false;
  }
  zadaci.push({ naziv: naziv, obavljen: false });
  alert(`Zadatak "${naziv}" je dodan.`);
  return true;
}

// Prikaz zadataka
function prikaziZadatke() {
  if (zadaci.length === 0) {
    alert("Popis zadataka je prazan.");
    return;
  }
  let ispis = "POPIS ZADATAKA\n\n";
  for (let i = 0; i < zadaci.length; i++) {
    const oznaka = zadaci[i].obavljen ? "[x]" : "[ ]";
    ispis += `${i + 1}. ${oznaka} ${zadaci[i].naziv}\n`;
  }
  alert(ispis);
}

// Pomoćna funkcija: pretvara unos u ispravan indeks polja ili vraća -1
function dohvatiIndeks(unos) {
  if (unos === null || unos.trim() === "") {
    alert("Unos ne smije biti prazan!");
    return -1;
  }
  const broj = Number(unos);
  if (!Number.isInteger(broj) || broj < 1 || broj > zadaci.length) {
    alert(`Neispravan unos! Upiši cijeli broj od 1 do ${zadaci.length}.`);
    return -1;
  }
  return broj - 1;
}

// Uklanjanje zadatka
function ukloniZadatak(unos) {
  const indeks = dohvatiIndeks(unos);
  if (indeks === -1) return false;
  const uklonjen = zadaci.splice(indeks, 1)[0];
  alert(`Zadatak "${uklonjen.naziv}" je uklonjen.`);
  return true;
}

// Označavanje zadatka kao obavljenog
function oznaciObavljenim(unos) {
  const indeks = dohvatiIndeks(unos);
  if (indeks === -1) return false;
  if (zadaci[indeks].obavljen) {
    alert("Zadatak je već označen kao obavljen.");
    return false;
  }
  zadaci[indeks].obavljen = true;
  alert(`Zadatak "${zadaci[indeks].naziv}" je označen kao obavljen.`);
  return true;
}

// Glavna petlja izbornika
let izlaz = false;

while (!izlaz) {
  const izbor = prompt(
    "TO-DO LISTA\n\n" +
    "1 - Dodaj zadatak\n" +
    "2 - Prikaži zadatke\n" +
    "3 - Ukloni zadatak\n" +
    "4 - Označi zadatak kao obavljen\n" +
    "0 - Izlaz\n\n" +
    "Odaberi operaciju:"
  );

  // "Odustani" ili prazan unos tretiramo kao neispravan odabir
  if (izbor === null) {
    izlaz = true;
    continue;
  }

  switch (izbor.trim()) {
    case "1":
      dodajZadatak(prompt("Upiši naziv zadatka:"));
      break;

    case "2":
      prikaziZadatke();
      break;

    case "3":
      if (zadaci.length === 0) {
        alert("Popis je prazan, nema se što ukloniti.");
      } else {
        prikaziZadatke();
        ukloniZadatak(prompt("Upiši redni broj zadatka za uklanjanje:"));
      }
      break;

    case "4":
      if (zadaci.length === 0) {
        alert("Popis je prazan, nema se što označiti.");
      } else {
        prikaziZadatke();
        oznaciObavljenim(prompt("Upiši redni broj obavljenog zadatka:"));
      }
      break;

    case "0":
      izlaz = true;
      break;

    default:
      alert("Neispravan odabir! Upiši broj od 0 do 4.");
  }
}

alert("Doviđenja!");