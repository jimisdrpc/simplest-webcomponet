const template = document.createElement('template');
template.innerHTML = `<input id="inputInterval"/> `;
 
class InputInterval extends HTMLElement {
  constructor() {
    super();
  }
 
  connectedCallback() {

    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    const inputInterval = this.shadowRoot.getElementById('inputInterval');

    var source = new EventSource('http://localhost:5000/interval_sse');

    source.addEventListener('sendInterval', function(e) {
      console.log('interval');
      inputInterval.value = e.data;
    }, false);
    
  }
}

window.customElements.define("input-interval", InputInterval);