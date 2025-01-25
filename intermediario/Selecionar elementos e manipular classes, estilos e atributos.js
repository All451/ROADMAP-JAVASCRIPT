// 1. Seleção de Elementos
const elemento = document.getElementById('meuElemento');
console.log(elemento);

const elemento2 = document.querySelector('#meuElemento');
console.log(elemento2);

const elementos3 = document.querySelectorAll('.minhaClasse');
console.log(elementos3);

const elementos4 = document.getElementsByClassName('minhaClasse');
console.log(elementos4);

const elementos5 = document.getElementsByTagName('h2');
console.log(elementos5);

// 2. Manipulação de Conteúdo
// innerHTML
elemento.innerHTML = '<h2>Novo título</h2>';
console.log(elemento.innerHTML);

// textContent
elemento.textContent = 'Novo texto';
console.log(elemento.textContent);

// 3. Manipulação de Eventos
elemento.addEventListener('click', function() {
  console.log('Elemento clicado!');
});

// 4. Manipulação de Estilos e Classes
// Alterando estilo diretamente
elemento.style.color = 'red';
elemento.style.backgroundColor = 'yellow'; // Modificando a cor de fundo
elemento.style.fontSize = '20px'; // Modificando o tamanho da fonte
console.log(elemento.style.color);

// Manipulando classes
elemento.className = 'novo-classe';
console.log(elemento.className);

// classList.add(), remove() e toggle()
elemento.classList.add('novaClasse');
console.log(elemento.classList);

elemento.classList.remove('novaClasse');
console.log(elemento.classList);

elemento.classList.toggle('ativa');
console.log(elemento.classList);

// 5. Criação e Manipulação de Elementos
const novoElemento = document.createElement('p');
novoElemento.textContent = 'Novo parágrafo';
console.log(novoElemento);

// 6. Manipulação de Atributos
// setAttribute, getAttribute e removeAttribute
elemento.setAttribute('data-status', 'ativo');
console.log(elemento.getAttribute('data-status'));

elemento.removeAttribute('data-status');
console.log(elemento.getAttribute('data-status')); // Retorna null

// 7. Manipulação de Elementos no DOM
// appendChild
const elementoPai = document.getElementById('pai');
const novoElementoDiv = document.createElement('div');
novoElementoDiv.textContent = 'Novo div';
elementoPai.appendChild(novoElementoDiv);

// insertBefore
const elementoFilho = document.getElementById('filho');
const novoElementoBefore = document.createElement('div');
novoElementoBefore.textContent = 'Novo div antes';
elementoPai.insertBefore(novoElementoBefore, elementoFilho);

// removeChild
elementoPai.removeChild(novoElementoBefore);


// 8. Eventos de Teclado
document.addEventListener('keydown', function(event) {
  console.log(`Tecla pressionada: ${event.key}`);
});

document.addEventListener('keyup', function(event) {
  console.log(`Tecla solta: ${event.key}`);
});



// 9. Eventos de Mouse
document.addEventListener('click', function(event) {
  console.log('Clicado no documento');
});

elemento.addEventListener('click', function(event) {
  console.log('Clicado no elemento');
});



// 10. Eventos de Drag and Drop
const elementoDrag = document.getElementById('elemento-drag');

elementoDrag.addEventListener('dragstart', function(event) {
  event.dataTransfer.setData('text/plain', this.textContent);
});

document.addEventListener('dragover', function(event) {
  event.preventDefault();
});



