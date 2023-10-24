var num1 = "";
var operator = "";
var num2 = "";
var total = 0;


//Calculator app

function calculatorAdd(num1, num2) {
  var num3 = num1 + num2;
  console.log(num3);
  return num3;
}

function calculatorSubtract(num1, num2) {
  var num3 = num1 - num2;
  console.log(num3);
  return num3;
}

function calculatorMultiply(num1, num2) {
  var num3 = num1 * num2;
  console.log(num3);
  return num3;
}

function calculatorDivide(num1, num2) {
  var num3 = num1 / num2;
  console.log(num3);
  return num3;
}

function calculatorNumberPress(elementText) {
  //console.log(elementText + " has been Pressed!");

  if (operator == "") {
    if (elementText != "+" && elementText != "-" && elementText != "/" && elementText != "*") {
      num1 = num1 + elementText;
      console.log(num1);
      //document.getElementById("calculator-value").innerHTML = num1;
    }
  } else {
    if (elementText != "+" && elementText != "-" && elementText != "/" && elementText != "*") {
      num2 = num2 + elementText;
      console.log(num2);
    //  document.getElementById("calculator-value").innerHTML = num2;
    }
  }
  document.getElementById("calculator-value").innerHTML = num1 + " " + operator + " " + num2;
}

function calculatorOperator(elementText) {
  console.log("This has been Pressed!");
  console.log(elementText);
  if (elementText == "+") {
    operator = "+";
  } else if (elementText == "Subtract") {
    operator = "-";
  } else if (elementText == "Divide") {
    operator = "/";
  } else if (elementText == "Multiply") {
   operator = "x";
  }
  console.log(operator + " has been Pressed!");
  document.getElementById("calculator-value").innerHTML = num1 + " " + operator + " " + num2;
}

function createElementAndAppend(elementTag, elementText, parentId) {

  // Create element
  const element = document.createElement(elementTag);
  //Add Attribute
  addAttributeToElement(element, "class", "button-calculator");

  //test = elementText;

  if (elementText == "1" || elementText == "2" || elementText == "3" || elementText == "4" || elementText == "5" || elementText == "6" ||
  elementText == "7" || elementText == "8" || elementText == "9" || elementText == "0") {
    addAttributeToElement(element, "onclick", `calculatorNumberPress(${elementText})`);
  } else if (elementText === "+" || elementText === "-" || elementText === "/" || elementText === "x") {
    addAttributeToElement(element, "onclick", `calculatorOperator('${elementText}')`);
  }

  // if (elementText == "Add") {
  //   elementText = "+";
  // } else if (elementText == "Subtract") {
  //   elementText = "-";
  // } else if (elementText == "Divide") {
  //   elementText = "/";
  // } else if (elementText == "Multiply") {
  //   elementText = "x";
  // }

  //Change text of element
  element.innerHTML = "<p>" + elementText + "</p>";

  // Append to parent
  document.getElementById(parentId).appendChild(element);
}

function addAttributeToElement(elementTarget, attributeName, attributeValue) {
  // Create a class attribute
  const att = document.createAttribute(attributeName);

  // Set the value of the class attribute
  att.value = attributeValue;

  // Add the class attribute
  const element = elementTarget;
  element.setAttributeNode(att);
}
