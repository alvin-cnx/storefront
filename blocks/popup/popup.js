export default function decorate(block) {

    const popupTextArray = [];
    [...block.children].forEach((row) => {
        const text = row.innerText.trim();
        popupTextArray.push(text);
    });

    const popupContainer = document.createElement('div');
    popupContainer.id = "coupon-popup-box";
    popupContainer.className = "black_overlay";

    const popupFormContainer = document.createElement('div');
    popupFormContainer.className = "coupon-popup__formbox";
    popupContainer.appendChild(popupFormContainer);

    const popupForm = document.createElement('form');
    popupForm.id = "cp-form";
    popupFormContainer.appendChild(popupForm);

    const popupHeadline = document.createElement('h2');
    popupHeadline.className = "coupon-popup__h2";
    popupHeadline.innerText = popupTextArray[0];
    popupForm.appendChild(popupHeadline);

    const popupDescription = document.createElement('label');
    popupDescription.className = "coupon-popup__label";
    popupDescription.setAttribute('for', 'phone');
    popupDescription.innerText = popupTextArray[1];
    popupForm.appendChild(popupDescription);

    const popupTextInput = document.createElement('input');
    popupTextInput.className = "coupon-popup__input";
    popupTextInput.setAttribute('type', 'tel');
    popupTextInput.setAttribute('id', 'phone');
    popupTextInput.setAttribute('name', 'phone');
    popupTextInput.setAttribute('required', '');
    popupTextInput.setAttribute('pattern', '[0-9]{10}');
    popupTextInput.setAttribute('autocomplete', 'on');
    popupForm.appendChild(popupTextInput);

    const submitButton = document.createElement('button');
    submitButton.className = "btn-primary coupon-popup__button btn-primary";
    submitButton.setAttribute('id', 'submit-btn');
    submitButton.setAttribute('type', 'submit');
    submitButton.innerText = popupTextArray[2];
    submitButton.addEventListener('click', () => {
        document.getElementById("cp-form").style.display = "none";
        document.getElementById("thank-you").style.display = "block";
        popupTextInput.value = ''; // clear the input field
    });
    popupForm.appendChild(submitButton);

    const popupCloseButton = document.createElement('button');
    popupCloseButton.className = "close-popup";
    popupCloseButton.setAttribute('type', 'button');
    popupCloseButton.innerText = '×';
    popupForm.prepend(popupCloseButton);

    const thankYouContainer = document.createElement('div');
    thankYouContainer.id = "thank-you";
    thankYouContainer.className = "thank-you";
    popupFormContainer.appendChild(thankYouContainer);

    const thankYouHeadline = document.createElement('h2');
    thankYouHeadline.className = "coupon-popup__h2";
    thankYouHeadline.innerText = popupTextArray[3];
    thankYouContainer.appendChild(thankYouHeadline);

    const thankYouDescription = document.createElement('p');
    thankYouDescription.className = "coupon-popup__p";
    thankYouDescription.innerText = popupTextArray[4];
    thankYouContainer.appendChild(thankYouDescription);

    const thankYouCloseButton = document.createElement('button');
    thankYouCloseButton.className = "close-popup";
    thankYouCloseButton.setAttribute('type', 'button');
    thankYouCloseButton.innerText = '×';
    thankYouContainer.prepend(thankYouCloseButton);

    block.innerHTML = '';
    block.append(popupContainer);

}
