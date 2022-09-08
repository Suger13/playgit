const productPrice = [1000,200,100,400];

//Higher Order fucntion
function calculationPrices(price, operation){ //(ราคาที่จะลด, %ที่จะลด)
    for (let i = 0; i<productPrice.length;i++){
        operation(price, i); //++ callback return productPrice[i]
    }
    return productPrice;
}

//call back
function discount5Percent(productPrice, i){
    productPrice[i] = productPrice[i] - (productPrice[i] * 0.05);
    return productPrice[i]; //++ 
}

//callback
function discount10Percent(productPrice, i){
    productPrice[i] = productPrice[i] - (productPrice[i] * 0.1);
    return productPrice[i]; //++
}

console.log(calculationPrices(productPrice, discount5Percent))