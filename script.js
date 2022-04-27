const container = document.querySelector('.smv-container');
const messaggio = document.querySelector('#messaggio');
const numeriArr = [];
const numeriArrRandom = [];
let secondi = 5;

messaggio.innerHTML = `Hai 5 secondi per ricordarti i numeri`;

createNumber(); 
setTimeout(resetText,5 * 1000);
setTimeout(memory,6 * 1000);


const countDown = setInterval(function(){
   messaggio.innerHTML = `Hai ${--secondi} secondi per ricordarti i numeri`;
}, 1000);

function resetText(){
  container.innerHTML = '';
  messaggio.innerHTML = '';
  clearInterval(countDown);
}

function memory(){
  promptNumbers();
  results();
}

function createNumber(){
  for(let i = 0; i < 5; i++){
    while(numeriArrRandom.length < 5){
      const numero = random();
      if (!numeriArrRandom.includes(numero)) {
        const sq = createSquare(container)
        sq.innerHTML = `<span>${numero}</span>`;
        numeriArrRandom.push(numero);
        console.log(numeriArrRandom);
      }
    }
  }
}

function random(){
  return Math.floor(Math.random() * 100 + 1);
}

function createSquare(container){
  const sq = document.createElement('div');
  sq.className = 'square';
  container.append(sq);
  return sq;
}

function promptNumbers(){
  for (let i = 0; i < 5; i++) {
    const numero = prompt('inserisci un numero da 1 a 100');
    numeriArr.push(numero);
  }
  console.log(numeriArr);
}

function results() {
  let c= 0;
  for(let i = 0; i < 5; i++){
    const sq = createSquare(container)
    if (numeriArr[i] == numeriArrRandom[i]) {
      sq.className = 'square win';
      sq.innerHTML = `<span>${numeriArr[i]}</span>`;
      c++;
    }else{
      sq.className = 'square lose';
      sq.innerHTML = `<span>X</span>`;
    }
  document.querySelector('h1').innerHTML = `Hai indovinato ${c} numeri!`
    
  }
}
