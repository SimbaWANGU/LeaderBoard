import './style.css';

function component() {
  const element = document.createElement('div');
  
  element.innerHTML = 'Hello Web Pack';
  element.classList.add('hello');
 

  return element;
}

document.body.appendChild(component());