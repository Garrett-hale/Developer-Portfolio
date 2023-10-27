function cookieToObject() {
  var cookieObject = document.cookie
  .split(';')
  .map(cookie => cookie.split('='))
  .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});
}

function createCookie(cname, cvalue, expires) {
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

createCookie("Test", "Input here", "expires=Thu, 01 Jan 2025 00:00:00 UTC");

//console.log(document.cookie);

alert(document.cookie);
