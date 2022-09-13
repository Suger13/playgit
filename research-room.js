//closure
function increseQuantity(){
    let quantity = 0;

    function incresement(){
        quantity = quantity + 1;
        return quantity
    }

    function decresement(){
        quantity -=1;
        return quantity;
    }

    return {incresement, decresement};
}


const increseNumber = increseQuantity();


//asyncronous