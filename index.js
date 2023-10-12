var navCountDown = 500;
var mouseOverNav = false;
var mouseOverDropDown = false;

function websiteLink(link) {
  window.location.href = link;
}

function gitHub() {
  window.location.href = 'https://github.com/Garrett-hale';
}

function scrollToView(scrollToId) {
  document.getElementById(scrollToId).scrollIntoView();
}

function navShow(trueOrFalse) {
  if (trueOrFalse == true) {
    document.getElementById("dropdown-content").style.visibility = "visible";
  } else if (trueOrFalse == false) {
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

function createElementAndAppend(elementTag, elementText, parentId) {
  // Create element:
  const element = document.createElement(elementTag);
  element.innerText = elementText;

  // Append to body:
  //document.#header.appendChild(element);
  document.getElementById(parentId).appendChild(element);
}
