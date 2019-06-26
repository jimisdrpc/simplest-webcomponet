const template = document.createElement('template');
template.innerHTML = `<input id="inputSimpleRequest"/>`;
 
class SimpleCall extends HTMLElement {
  constructor() {
    super();
  }
 
  connectedCallback() {

    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    const inputSimpleRequest = this.shadowRoot.getElementById('inputSimpleRequest');
    const url = 'http://localhost:8081/';

    fetch(url)
    .then(response => response.json())
    .then(data => {
      inputSimpleRequest.value = data.somephrase; 
    })
    .catch(error => console.error(error));

  }
}

window.customElements.define("simple-call", SimpleCall);