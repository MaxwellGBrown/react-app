function component () {
  var element = document.createElement('h1');
  element.innerHTML = 'Hello world';
  return element;
}

document.body.appendChild(component())
