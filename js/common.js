function calculateSubTotalPrice(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
};

function calculateSubTotalNumber(){
    const currentPhoneTotalPrice = calculateSubTotalPrice('phone-total') 
    const currentCaseTotalPrice = calculateSubTotalPrice('case-total');
    // console.log(currentPhoneTotalPrice, currentCaseTotalPrice)

    const newSubTotal = currentPhoneTotalPrice + currentCaseTotalPrice;
    const newSubTotalElement = document.getElementById('sub-total');
    newSubTotalElement.innerText = newSubTotal;
};