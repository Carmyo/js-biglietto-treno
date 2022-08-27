

//document.writeln('Document')



// document.getElementById('mio-id').innerHTML = 'ID TEXT'

/*let miaVariabile15 = 10;
miaVariabile15 = miaVariabile15 + 5;

alert(miaVariabile15)*/
/*lconst PIGRECO = 3.14;
let raggio = 5;
const circonferenza = raggio * PIGRECO * 2;
const risposta = "La circonferenza è ";
alert(risposta + circonferenza);*/




/*lconsole.log(
    `
    ${raggio} per ${PIGRECO} per 2
    ti da la circonferenza
    `
)*/

/*const text = prompt('Quando sei nato?');
const anni = 2022 - text;
console.log('la tua età è ' + anni);*/

/*const semaforo = prompt('di che colore è il semaforo?');

if (semaforo === 'verde') {
    console.log('attraversa')
}
else if (semaforo === 'giallo') {
    console.log('guarda')
}

else {
    console.log('aspetta')
}*/
/*const number = parseInt(prompt('inserisci numero'));

if (!isNaN(number)) {
    const divisibilePerDue = number % 2 === 0;
    const divisibilePerTre = number % 3 === 0;


    if (divisibilePerDue)
        console.log('è divisibile per 2')

    if (divisibilePerTre)
        console.log('è divisibile per 3')
}*/

const distance = prompt('Quanta distanza vuoi percorrere?');
const age = prompt('Quanti anni hai?');
let earlyprice = distance * 0.21 + ' €';
console.log(earlyprice);

if (18 > (age)) {
    console.log(earlyprice / 100 * 20) + ' €';
}
if (65 < (age)) {
    console.log(earlyprice / 100 * 40 + ' €');
}


