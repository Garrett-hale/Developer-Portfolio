var navCountDown = 500;
var mouseOverNav = false;
var mouseOverDropDown = false;

function websiteLink(link) {
  window.location.href = link;
}

function scrollToView(scrollToId) {
  document.getElementById(scrollToId).scrollIntoView();
}

function navShow(trueOrFalse) {
  if (trueOrFalse == true) {
    document.getElementById("dropdown-content").style.visibility = "visible";
  } else {
    document.getElementById("dropdown-content").style.visibility = "hidden";
  }
}

function navHideTimer() {
  var timer = setTimeout(function() {
    if (mouseOverNav == false && mouseOverDropDown == false) {
      document.getElementById("dropdown-content").style.visibility = "hidden";
    }
  }, navCountDown);
}

function mouseNav(trueOrFalse) {
  mouseOverNav = trueOrFalse;
}

function mouseDropDown(trueOrFalse) {
  mouseOverDropDown = trueOrFalse;
}

//Calculator app

function calculatorButtonPress() {
  console.log("Calculator Button Pressed!");
}

function createElementAndAppend(elementTag, elementText, parentId) {
  // Create element
  const element = document.createElement(elementTag);
  //Change text of element
  element.innerHTML = "<p>" + elementText + "</p>";
  //Add Attribute
  addAttributeToElement(element, "class", "button-calculator");
  addAttributeToElement(element, "onclick", "test()");
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
