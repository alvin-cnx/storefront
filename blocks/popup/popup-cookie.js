import defaultExport from './aep-push-phone.js';

export function initPopupCookie() {
  var modal = document.getElementById('coupon-popup-box');
  var visited = getCookie('visited');
  if (visited !== null) {
    if (!visited) {
      modal.style.display = 'block';
    }
    if (visited) {
      modal.style.display = 'none';
    }
  }
  var closePopupButtons = document.getElementsByClassName("close-popup");
  Object.values(closePopupButtons).forEach((btn) => {
    btn.addEventListener("click", (event) => {
      modal.style.display = 'none';
      setCookie();
    })
  })
};

export function getCookie(name) {
  var cookieArr = document.cookie.split(';');
  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split('=');
    if (name == cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
}

export function setCookie() {
  var name = "visited";
  var value = "true";
  var days = 7;
  var date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  var expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + encodeURIComponent(value) + "; " + expires + "; path=/";
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cp-form');
  const phoneInput = document.getElementById('phone');
  // const submitBtn = document.getElementById('submit-btn');
  const thankYouMsg = document.getElementById('thank-you');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the form from submitting normally
    console.log("submit event from popup-cookie.js", event);

    if (!phoneInput.checkValidity()) {
      alert('Please enter a valid phone number.');
      return;
    }
    setCookie();
    sendProfilePromoDataToAep(phoneInput.value, true);

    phoneInput.value = ''; // clear the input field
    form.style.display = 'none'; // hide the form
    thankYouMsg.style.display = 'block'; // show the thank you message

  });

})
