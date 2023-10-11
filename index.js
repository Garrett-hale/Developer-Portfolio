var navCountDown = 500;
var mouseOverNav = false;
var mouseOverDropDown = false;

function linkedIn() {
  window.location.href = 'https://www.linkedin.com/in/garrett-hale-73a0a384/';
}

function gitHub() {
  window.location.href = 'https://github.com/Garrett-hale';
}

function scrollToSkills() {
  document.getElementById('skills').scrollIntoView();
}

function scrollToProjects() {
  document.getElementById('projects').scrollIntoView();
}

function scrollToEducation() {
  document.getElementById('education').scrollIntoView();
}

function scrollToContacts() {
  document.getElementById('contacts').scrollIntoView();
}

function navShow() {
  document.getElementById("dropdown-content").style.visibility = "visible";
}

function navHide() {
  var timer = setTimeout(function() {
    if (mouseOverNav == false && mouseOverDropDown == false) {
      document.getElementById("dropdown-content").style.visibility = "hidden";
    }
  }, navCountDown);
}

function navClickHide() {
  document.getElementById("dropdown-content").style.visibility = "hidden";
}

function mouseNav(trueOrFalse) {
  mouseOverNav = trueOrFalse;
}

function mouseDropDown(trueOrFalse) {
  mouseOverDropDown = trueOrFalse;
}
