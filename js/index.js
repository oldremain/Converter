class Converter {
  constructor(root) {
    this.celcius = root.querySelector('[name="celcius"]');
    this.farengheit = root.querySelector('[name="farengheit"]');
    this.init();
  }

  init() {
    this.celcius.addEventListener('input', () => this.printFarengheit());
    this.farengheit.addEventListener('input', () => this.printCelcius());
    this.celcius.addEventListener('focus', () => this.clearData());
    this.farengheit.addEventListener('focus', () => this.clearData());
  }

  printFarengheit() {
    let celciusValue = this.celcius.value;
    let toFarengheit = ((celciusValue * 9) / 5 + 32).toFixed(2);

    this.farengheit.value = `${toFarengheit}`;
  }

  printCelcius() {
    let farengheitValue = this.farengheit.value;
    let toCelcius = (((farengheitValue - 32) * 5) / 9).toFixed(2);

    this.celcius.value = `${toCelcius}`;
  }

  clearData() {
    this.farengheit.value = '';
    this.celcius.value = '';
  }
}

let converter = new Converter(document.getElementById('converter'));

console.log(converter);
