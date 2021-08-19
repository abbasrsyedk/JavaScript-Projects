function computeLoan(){

    var amount = document.getElementById('amount').value;
    var interest_rate = document.getElementById('interest_rate').value;
    var months = document.getElementById('months').value;

    var interest = (amount * (interest_rate * .01)) / months;

    var payment = ((amount/months)+interest).toFixed(2);
    // \B = to look within a word boundary
    // ?=  = to find whatever the group is looking for
    // \d{3} = 3 digits
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");

    document.getElementById('payment').innerHTML = "Monthly Payment = ₹ "+payment;



}