const container = document.querySelector('.container');
const numeriArr = [];
const numeriArrRandom = [];
let c= 0;

createNumber(); 
setTimeout(resetText,5 * 1000);
setTimeout(memory,6 * 1000);

function resetText(){
  container.innerHTML = '';
}

function memory(){
  promptNumbers();
  results();
}

function createNumber(){

  for(let i = 0; i < 5; i++){
    const numero = random();
    const sq = createSquare(container)
    sq.innerHTML = `<span>${numero}</span>`;
    numeriArrRandom.push(numero);
    console.log(numeriArrRandom);
  }

}

function random(){
  return Math.floor(Math.random() * 10 + 1);
}

function createSquare(container){
  const sq = document.createElement('div');
  sq.className = 'square';
  container.append(sq);
  return sq;
}

function promptNumbers(){
  for (let i = 0; i < 5; i++) {
    const numero = prompt('inserisci un numero da 1 a 10');
    numeriArr.push(numero);
  }
  console.log(numeriArr);
}

function results() {
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
