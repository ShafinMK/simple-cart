
// case plus 
document.getElementById('casePlus').addEventListener('click', function () {
    let caseNumber = document.getElementById('caseNumber').value;
    let itemNumber = 'caseNumber';
    calculate(caseNumber, true, itemNumber);


    // console.log(caseNumber);

})

//case minus
document.getElementById('caseMinus').addEventListener('click', function () {
    console.log("minus clicked");
    let caseNumber = document.getElementById('caseNumber').value;
    let itemNumber = 'caseNumber';
    calculate(caseNumber, false, itemNumber);
})
//phone plus
document.getElementById('phonePlus').addEventListener('click', function () {
    let phoneNumber = document.getElementById("phoneNumber").value;
    let itemNumber = 'phoneNumber';
    calculate(phoneNumber, true, itemNumber);
    

})
// phone minus 
document.getElementById('phoneMinus').addEventListener('click', function () {
    
    let phoneNumber = document.getElementById('phoneNumber').value;
    let itemNumber = 'phoneNumber';
    calculate(phoneNumber, false, itemNumber);
    
})


function calculate(count, add, itemNumber) {
    count = parseInt(count);

    if (add == true) {
        count += 1;
        document.getElementById(itemNumber).value = count;
        
        
    }
    else {
        if (count > 0) {
            count -= 1;
            document.getElementById(itemNumber).value = count;
        }
    }
    priceCalculation(count, itemNumber);

}

function priceCalculation(count, itemNumber){
    let phonePrice = parseInt( document.getElementById('phonePrice').innerText);
    let casePrice = parseInt(document.getElementById('casePrice').innerHTML);
    if(itemNumber == 'phoneNumber'){
        phonePrice = 1219* count;
        document.getElementById('phonePrice').innerText = phonePrice;
        console.log(phonePrice);
        console.log(count, itemNumber);
    }
    else{
        casePrice = 59 * count;
        document.getElementById('casePrice').innerHTML = casePrice;
        console.log(casePrice);
        console.log(count, itemNumber);
    }
    let subTotal = document.getElementById('subTotal');
    let tax = document.getElementById('tax');
    let total = document.getElementById('total');
    subTotal.innerHTML = phonePrice+casePrice;
    tax.innerHTML = (parseInt( subTotal.innerHTML)*.1).toFixed(1);
    total.innerHTML = parseFloat(subTotal.innerHTML)+ parseFloat(tax.innerHTML);
    console.log("subtotal=",subTotal.innerHTML);
    console.log("phone = "+ phonePrice,"case = ",casePrice);

    
    // console.log(itemNumber);
}