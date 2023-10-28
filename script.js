function showCardTitle(elementId, titleForadd) {
    const cardTitleShow = document.getElementById(elementId);
    const countChildElement = cardTitleShow.childElementCount;
    const cardTitleAddField = document.createElement('p');
    cardTitleAddField.classList.add('text-black');
    cardTitleAddField.classList.add('sans');
    cardTitleAddField.classList.add('text-2xl');
    cardTitleAddField.classList.add('font-medium');
    cardTitleAddField.classList.add('leading-[3rem]');
    // cardTitleAddField.classList.add('ml-6');
    // cardTitleAddField.classList.add('mt-6');
    cardTitleAddField.innerText = `${countChildElement + 1}. ${titleForadd.innerText}`;
    return cardTitleShow.appendChild(cardTitleAddField);
}


// find the card item price 
function findCardItemPrice(elementId) {

    const itemPriceFiled = document.getElementById(elementId);
    const itemPriceFiledString = itemPriceFiled.innerText;
    const itemPriceFiledInt = parseFloat(itemPriceFiledString);
    return itemPriceFiledInt;
}


//  the total price Filed Value Int

function totalPriceFieldValue(elementId) {
    const totalPriceField = document.getElementById(elementId);
    const totalPriceFieldString = totalPriceField.innerText;
    const totalPriceInt = parseFloat(totalPriceFieldString);
    return totalPriceInt;
}



// first card 


document.getElementById('first-row-first-card-accessories').addEventListener('click', function () {

    //find the card title
    const accessoriesCardTitle = document.getElementById('accessories-card-title');
    showCardTitle('cart-title-show-when-clicked', accessoriesCardTitle);

    // find the card item price
    const firstcardPriceValue = findCardItemPrice('first-card-accessories-price');

    // find the total price field value
    const totalPriceValue = totalPriceFieldValue('total-price-field');

    // calculate total price
    const totalPrice = totalPriceValue + firstcardPriceValue;

    //set the value in total price
    const totalPriceSetValue = document.getElementById('total-price-field');
    totalPriceSetValue.innerText = totalPrice;

    //make purchase button enabled 

    const makePurchaseButton = document.getElementById('make-purchase-button');
    if (parseFloat(totalPriceSetValue.innerText) > 0) {
        makePurchaseButton.removeAttribute('disabled');
    }
    else {
        makePurchaseButton.setAttribute('disabled', true);
    }

    // make coupon button enabled 
    const couponbutton = document.getElementById('coupon-apply-btn');
    if (parseFloat(totalPriceSetValue.innerText) >= 200) {
        couponbutton.removeAttribute('disabled');
    }
    else {
        couponbutton.setAttribute('disabled', true);
    }

    // calculate grand total 

    const grandTotalPriceField = document.getElementById('grand-total-field');
    grandTotalPriceField.innerText = totalPrice.toFixed(2);
    const hide = document.getElementById('grand-total-hide');
    hide.style.display='none';
})
// second card 


document.getElementById('second-row-first-card-accessories').addEventListener('click', function () {

    //find the card title
    const accessoriesCardTitle = document.getElementById('second-accessories-card-title');
    showCardTitle('cart-title-show-when-clicked', accessoriesCardTitle);

    // find the card item price
    const secondcardPriceValue = findCardItemPrice('second-card-accessories-price');

    // find the total price field value
    const totalPriceValue = totalPriceFieldValue('total-price-field');

    // calculate total price
    const totalPrice = totalPriceValue + secondcardPriceValue;

    //set the value in total price
    const totalPriceSetValue = document.getElementById('total-price-field');
    totalPriceSetValue.innerText = totalPrice;

    //make purchase button enabled 

    const makePurchaseButton = document.getElementById('make-purchase-button');
    if (parseFloat(totalPriceSetValue.innerText) > 0) {
        makePurchaseButton.removeAttribute('disabled');
    }
    else {
        makePurchaseButton.setAttribute('disabled', true);
    }

    // make coupon button enabled 
    const couponbutton = document.getElementById('coupon-apply-btn');
    if (parseFloat(totalPriceSetValue.innerText) >= 200) {
        couponbutton.removeAttribute('disabled');
    }
    else {
        couponbutton.setAttribute('disabled', true);
    }

    // calculate grand total 

    const grandTotalPriceField = document.getElementById('grand-total-field');
    grandTotalPriceField.innerText = totalPrice.toFixed(2);
    const hide = document.getElementById('grand-total-hide');
    hide.style.display='none';
})
// third card 


document.getElementById('third-row-first-card-accessories').addEventListener('click', function () {

    //find the card title
    const accessoriesCardTitle = document.getElementById('third-accessories-card-title');
    showCardTitle('cart-title-show-when-clicked', accessoriesCardTitle);

    // find the card item price
    const thirdcardPriceValue = findCardItemPrice('third-card-accessories-price');

    // find the total price field value
    const totalPriceValue = totalPriceFieldValue('total-price-field');

    // calculate total price
    const totalPrice = totalPriceValue + thirdcardPriceValue;

    //set the value in total price
    const totalPriceSetValue = document.getElementById('total-price-field');
    totalPriceSetValue.innerText = totalPrice;

    //make purchase button enabled 

    const makePurchaseButton = document.getElementById('make-purchase-button');
    if (parseFloat(totalPriceSetValue.innerText) > 0) {
        makePurchaseButton.removeAttribute('disabled');
    }
    else {
        makePurchaseButton.setAttribute('disabled', true);
    }

    // make coupon button enabled 
    const couponbutton = document.getElementById('coupon-apply-btn');
    if (parseFloat(totalPriceSetValue.innerText) >= 200) {
        couponbutton.removeAttribute('disabled');
    }
    else {
        couponbutton.setAttribute('disabled', true);
    }

    // calculate grand total 

    const grandTotalPriceField = document.getElementById('grand-total-field');
    grandTotalPriceField.innerText = totalPrice.toFixed(2);
    const hide = document.getElementById('grand-total-hide');
    hide.style.display='none';
})
// Fourth card 


document.getElementById('fourth-row-first-card-accessories').addEventListener('click', function () {

    //find the card title
    const accessoriesCardTitle = document.getElementById('fourth-accessories-card-title');
    showCardTitle('cart-title-show-when-clicked', accessoriesCardTitle);

    // find the card item price
    const fourthcardPriceValue = findCardItemPrice('fouth-card-accessories-price');

    // find the total price field value
    const totalPriceValue = totalPriceFieldValue('total-price-field');

    // calculate total price
    const totalPrice = totalPriceValue + fourthcardPriceValue;

    //set the value in total price
    const totalPriceSetValue = document.getElementById('total-price-field');
    totalPriceSetValue.innerText = totalPrice;

    //make purchase button enabled 

    const makePurchaseButton = document.getElementById('make-purchase-button');
    if (parseFloat(totalPriceSetValue.innerText) > 0) {
        makePurchaseButton.removeAttribute('disabled');
    }
    else {
        makePurchaseButton.setAttribute('disabled', true);
    }

    // make coupon button enabled 
    const couponbutton = document.getElementById('coupon-apply-btn');
    if (parseFloat(totalPriceSetValue.innerText) >= 200) {
        couponbutton.removeAttribute('disabled');
    }
    else {
        couponbutton.setAttribute('disabled', true);
    }

    // calculate grand total 

    const grandTotalPriceField = document.getElementById('grand-total-field');
    grandTotalPriceField.innerText = totalPrice.toFixed(2);
    const hide = document.getElementById('grand-total-hide');
    hide.style.display='none';
})

// Fifth card 


document.getElementById('fifth-row-first-card-accessories').addEventListener('click', function () {

    //find the card title
    const accessoriesCardTitle = document.getElementById('fifth-accessories-card-title');
    showCardTitle('cart-title-show-when-clicked', accessoriesCardTitle);

    // find the card item price
    const fifthcardPriceValue = findCardItemPrice('fifth-card-accessories-price');

    // find the total price field value
    const totalPriceValue = totalPriceFieldValue('total-price-field');

    // calculate total price
    const totalPrice = totalPriceValue + fifthcardPriceValue;

    //set the value in total price
    const totalPriceSetValue = document.getElementById('total-price-field');
    totalPriceSetValue.innerText = totalPrice;

    //make purchase button enabled 

    const makePurchaseButton = document.getElementById('make-purchase-button');
    if (parseFloat(totalPriceSetValue.innerText) > 0) {
        makePurchaseButton.removeAttribute('disabled');
    }
    else {
        makePurchaseButton.setAttribute('disabled', true);
    }

    // make coupon button enabled 
    const couponbutton = document.getElementById('coupon-apply-btn');
    if (parseFloat(totalPriceSetValue.innerText) >= 200) {
        couponbutton.removeAttribute('disabled');
    }
    else {
        couponbutton.setAttribute('disabled', true);
    }

    // calculate grand total 

    const grandTotalPriceField = document.getElementById('grand-total-field');
    grandTotalPriceField.innerText = totalPrice.toFixed(2);
    const hide = document.getElementById('grand-total-hide');
    hide.style.display='none';
})
// sixth card 


document.getElementById('sixth-row-first-card-accessories').addEventListener('click', function () {

    //find the card title
    const accessoriesCardTitle = document.getElementById('sixth-accessories-card-title');
    showCardTitle('cart-title-show-when-clicked', accessoriesCardTitle);

    // find the card item price
    const sixthcardPriceValue = findCardItemPrice('sixth-card-accessories-price');

    // find the total price field value
    const totalPriceValue = totalPriceFieldValue('total-price-field');

    // calculate total price
    const totalPrice = totalPriceValue + sixthcardPriceValue;

    //set the value in total price
    const totalPriceSetValue = document.getElementById('total-price-field');
    totalPriceSetValue.innerText = totalPrice;

    //make purchase button enabled 

    const makePurchaseButton = document.getElementById('make-purchase-button');
    if (parseFloat(totalPriceSetValue.innerText) > 0) {
        makePurchaseButton.removeAttribute('disabled');
    }
    else {
        makePurchaseButton.setAttribute('disabled', true);
    }

    // make coupon button enabled 
    const couponbutton = document.getElementById('coupon-apply-btn');
    if (parseFloat(totalPriceSetValue.innerText) >= 200) {
        couponbutton.removeAttribute('disabled');
    }
    else {
        couponbutton.setAttribute('disabled', true);
    }

    // calculate grand total 

    const grandTotalPriceField = document.getElementById('grand-total-field');
    grandTotalPriceField.innerText = totalPrice.toFixed(2);
    const hide = document.getElementById('grand-total-hide');
    hide.style.display='none';
})
// seventh card 


document.getElementById('seventh-row-first-card-accessories').addEventListener('click', function () {

    //find the card title
    const accessoriesCardTitle = document.getElementById('seventh-accessories-card-title');
    showCardTitle('cart-title-show-when-clicked', accessoriesCardTitle);

    // find the card item price
    const seventhcardPriceValue = findCardItemPrice('seventh-card-accessories-price');

    // find the total price field value
    const totalPriceValue = totalPriceFieldValue('total-price-field');

    // calculate total price
    const totalPrice = totalPriceValue + seventhcardPriceValue;

    //set the value in total price
    const totalPriceSetValue = document.getElementById('total-price-field');
    totalPriceSetValue.innerText = totalPrice;

    //make purchase button enabled 

    const makePurchaseButton = document.getElementById('make-purchase-button');
    if (parseFloat(totalPriceSetValue.innerText) > 0) {
        makePurchaseButton.removeAttribute('disabled');
    }
    else {
        makePurchaseButton.setAttribute('disabled', true);
    }

    // make coupon button enabled 
    const couponbutton = document.getElementById('coupon-apply-btn');
    if (parseFloat(totalPriceSetValue.innerText) >= 200) {
        couponbutton.removeAttribute('disabled');
    }
    else {
        couponbutton.setAttribute('disabled', true);
    }

    // calculate grand total 

    const grandTotalPriceField = document.getElementById('grand-total-field');
    grandTotalPriceField.innerText = totalPrice.toFixed(2);
    const hide = document.getElementById('grand-total-hide');
    hide.style.display='none';
})
// eight card 


document.getElementById('eight-row-first-card-accessories').addEventListener('click', function () {

    //find the card title
    const accessoriesCardTitle = document.getElementById('eight-accessories-card-title');
    showCardTitle('cart-title-show-when-clicked', accessoriesCardTitle);

    // find the card item price
    const eightcardPriceValue = findCardItemPrice('eight-card-accessories-price');

    // find the total price field value
    const totalPriceValue = totalPriceFieldValue('total-price-field');

    // calculate total price
    const totalPrice = totalPriceValue + eightcardPriceValue;

    //set the value in total price
    const totalPriceSetValue = document.getElementById('total-price-field');
    totalPriceSetValue.innerText = totalPrice;

    //make purchase button enabled 

    const makePurchaseButton = document.getElementById('make-purchase-button');
    if (parseFloat(totalPriceSetValue.innerText) > 0) {
        makePurchaseButton.removeAttribute('disabled');
    }
    else {
        makePurchaseButton.setAttribute('disabled', true);
    }

    // make coupon button enabled 
    const couponbutton = document.getElementById('coupon-apply-btn');
    if (parseFloat(totalPriceSetValue.innerText) >= 200) {
        couponbutton.removeAttribute('disabled');
    }
    else {
        couponbutton.setAttribute('disabled', true);
    }

    // calculate grand total 

    const grandTotalPriceField = document.getElementById('grand-total-field');
    grandTotalPriceField.innerText = totalPrice.toFixed(2);
    const hide = document.getElementById('grand-total-hide');
    hide.style.display='none';
})
// ninth card 


document.getElementById('ninth-row-first-card-accessories').addEventListener('click', function () {

    //find the card title
    const accessoriesCardTitle = document.getElementById('ninth-accessories-card-title');
    showCardTitle('cart-title-show-when-clicked', accessoriesCardTitle);

    // find the card item price
    const ninthcardPriceValue = findCardItemPrice('ninth-card-accessories-price');

    // find the total price field value
    const totalPriceValue = totalPriceFieldValue('total-price-field');

    // calculate total price
    const totalPrice = totalPriceValue + ninthcardPriceValue;

    //set the value in total price
    const totalPriceSetValue = document.getElementById('total-price-field');
    totalPriceSetValue.innerText = totalPrice;

    //make purchase button enabled 

    const makePurchaseButton = document.getElementById('make-purchase-button');
    if (parseFloat(totalPriceSetValue.innerText) > 0) {
        makePurchaseButton.removeAttribute('disabled');
    }
    else {
        makePurchaseButton.setAttribute('disabled', true);
    }

    // make coupon button enabled 
    const couponbutton = document.getElementById('coupon-apply-btn');
    if (parseFloat(totalPriceSetValue.innerText) >= 200) {
        couponbutton.removeAttribute('disabled');
    }
    else {
        couponbutton.setAttribute('disabled', true);
    }

    // calculate grand total 

    const grandTotalPriceField = document.getElementById('grand-total-field');
    grandTotalPriceField.innerText = totalPrice.toFixed(2);
    const hide = document.getElementById('grand-total-hide');
    hide.style.display='none';
})












// coupon button 

document.getElementById('coupon-apply-btn').addEventListener('click', function () {
    // calculate the discount 
    const couponInputField = document.getElementById('coupon-input-field-value');
    const couponInputFieldValue = couponInputField.value;
    const totalPrice = document.getElementById('total-price-field').innerText;
    let discountPrice;
    if (couponInputFieldValue === 'SELL200') {
        const discount = totalPrice * 0.2;
        discountPrice = discount.toFixed(2);
    }
    else{
        alert('please enter an correct coupon');
        couponInputField.value='';
        return;
    }

    // set the value in the discount field
    const discountField = document.getElementById('discount-price-filed');
    discountField.innerText = discountPrice;
    const hide = document.getElementById('hide-discount');
    hide.style.display='none';

    calculateTotalPrice();

})






function calculateTotalPrice (){
    const grandTotalPriceField = document.getElementById('grand-total-field');
    // const grandTotalPriceFieldStringValue = grandTotalPriceField.innerText;
    // const grandTotalPrice = parseFloat(grandTotalPriceFieldStringValue);
    const totalPrice = document.getElementById('total-price-field').innerText;
    const discountField = document.getElementById('discount-price-filed').innerText;
    const grandTotalPrice = totalPrice - discountField;

    grandTotalPriceField.innerText = grandTotalPrice.toFixed(2);


}

// go home button to clear all the text 

document.getElementById('go-home-btn').addEventListener('click', function(){
    // location.reload();
    // hide the coupon field
    const couponInputField = document.getElementById('coupon-input-field-value');
    couponInputField.value = '';
    // hide the card titel display names 
    const cardTitleShow = document.getElementById('cart-title-show-when-clicked');
    cardTitleShow.innerHTML='';
    const totalPriceField = document.getElementById('total-price-field');
    totalPriceField.innerText = '00';
    const discountField = document.getElementById('discount-price-filed');
    discountField.innerText = '00.00';
    const grandTotal = document.getElementById('grand-total-field');
    grandTotal.innerText='00.00';
    const makePurchase = document.getElementById('make-purchase-button');
    makePurchase.setAttribute('disabled', true);
    const couponbtn = document.getElementById('coupon-apply-btn');
    couponbtn.setAttribute('disabled', true);
})