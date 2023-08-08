function calculateSubTotalPrice(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
};

function setTextElementValueById(elementId, value){
    const newSubTotalElement = document.getElementById(elementId);
    newSubTotalElement.innerText = value;
}

function calculateSubTotalNumber(){
    const currentPhoneTotalPrice = calculateSubTotalPrice('phone-total') 
    const currentCaseTotalPrice = calculateSubTotalPrice('case-total');
    // console.log(currentPhoneTotalPrice, currentCaseTotalPrice)

    const newSubTotal = currentPhoneTotalPrice + currentCaseTotalPrice;
    setTextElementValueById('sub-total', newSubTotal);

    const taxAmountString = (newSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);

    const finalTotal = newSubTotal + taxAmount;
    setTextElementValueById('final-total', finalTotal);
};