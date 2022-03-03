let num = " "

function getValue() {
  num = document.getElementById('itire').value;
}

function lengthMeasure() {
  let toFeet = (num * 3.281).toFixed(3)
  let toMeter = (num / 3.281).toFixed(3)
  let check = document.getElementsByClassName("result");

  check[0].textContent = num + " meters = " + toFeet + " feet |  " + num + " feet = " + toMeter + " meters";
}

lengthMeasure()

function volumeMeasure() {
  let toGallon = (num / 3.785).toFixed(3)
  let toLiter = (num * 3.785).toFixed(3)
  let check = document.getElementsByClassName("result");
  check[1].textContent = num + " liters = " + toGallon + " gallons | " + num + " gallons = " + toLiter + " liters. ";
}
volumeMeasure()

function massMeasure() {
  let toPound = (num * 2.205).toFixed(3)
  let toKilo = (num / 2.205).toFixed(3)
  let check = document.getElementsByClassName("result");
  check[2].textContent = num + " kilos = " + toPound + " pound |  " + num + " pounds = " + toKilo + "  kilos. ";
}
massMeasure()

function calculateResult() {
  getValue();
  lengthMeasure();
  volumeMeasure();
  massMeasure();

}
