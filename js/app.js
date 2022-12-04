
function getElementIsValu(setIdName){
    const setElement = document.getElementById('casingNumber');
    const setElementSting = setElement.value;
    const setElementNumber = parseInt(setElementSting);
    if(setIdName){
        const setElementIncring = setElementNumber + 1;
        const totalProduct =  setElement.value = setElementIncring;
        return totalProduct

    }else{
        const setElementIncring = setElementNumber - 1;
        const totalProduct = setElement.value = setElementIncring;
        return totalProduct
    }
    
}


function getElementIsValuPhone(setIdName){
    const setElement = document.getElementById('phoneInput');
    const setElementSting = setElement.value;
    const setElementNumber = parseInt(setElementSting);
    if(setIdName){
        const setElementIncring = setElementNumber + 1;
        const totalProduct =  setElement.value = setElementIncring;
        return totalProduct

    }else{
        const setElementIncring = setElementNumber - 1;
        const totalProduct = setElement.value = setElementIncring;
        return totalProduct
    }
    
}







function pricecassing(productNumber){
    const prouctPrice = document.getElementById('phone-amound');
    const totalPriceSingle = productNumber * 1219
    const total =  prouctPrice.innerText = totalPriceSingle
    return total
}

function pricePhone(productNumber){
    const prouctPrice = document.getElementById('cassing-amound');
    const totalPriceSingle = productNumber * 59
    const total =  prouctPrice.innerText = totalPriceSingle
    return total
}


// subtotal
function subtital(inputIdfild){
    const phonTotal = document.getElementById(inputIdfild);
    const phoneTotalsting = phonTotal.innerText;
    const phoneTotalNumber = parseInt(phoneTotalsting);
    return phoneTotalNumber
}

function setTextElementValueById(elementId, subtotalNum){
    const subtotaltext = document.getElementById(elementId);
    subtotaltext.innerText = subtotalNum;

}


function subtotalGet (){
    const phontotalNum = subtital('phone-amound');
    const cassingtotalNum = subtital('cassing-amound');
    const subtotalNum = phontotalNum + cassingtotalNum;
    setTextElementValueById('sub-total', subtotalNum)



    const taxAmountString = (subtotalNum * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amound', taxAmount);

    const finalAmount = cassingtotalNum + taxAmount;
    setTextElementValueById('total-amound', finalAmount);
}

//cassing area  

document.getElementById('casingPlas').addEventListener('click', function(){
    const productNumber =  getElementIsValu(true);
    pricecassing(productNumber)
    subtotalGet ()


});




document.getElementById('casingmines').addEventListener('click', function(){
    const productNumber = getElementIsValu(false);
    pricecassing(productNumber)
    subtotalGet ()
})

// phon area

document.getElementById('phonePlas').addEventListener('click', function(){
    const productNumber = getElementIsValuPhone(true);
    pricePhone(productNumber)
    subtotalGet ()

});
document.getElementById('phoneManis').addEventListener('click', function(){
    const productNumber = getElementIsValuPhone(false);
    pricePhone(productNumber)
    subtotalGet ()

})


