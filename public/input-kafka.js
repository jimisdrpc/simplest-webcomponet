const template = document.createElement('template');
template.innerHTML = `<input id="inputKafka"/> `;
 
class InputKafka extends HTMLElement {
  constructor() {
    super();
  }
 
  connectedCallback() {

    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    const inputKafka = this.shadowRoot.getElementById('inputKafka');

    var source = new EventSource('http://localhost:5000/kafka_sse');

    source.addEventListener('sendMsgFromKafka', function(e) {
      console.log('fromKafka');
      inputKafka.value = e.data;
    }, false);
    
  }
  attributeChangedCallback(name, oldVal, newVal) {
    console.log('attributeChangedCallback');
  }

  disconnectedCallback() {
    console.log('disconnectedCallback');
  }
}

window.customElements.define("input-kafka", InputKafka);