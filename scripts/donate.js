function togglePayment(){
    var googlePaySection = document.getElementById('google_pay');
    var bankDetailsSection = document.getElementById('bank_details');

    if(googlePaySection.classList.contains('active')){
        googlePaySection.classList.remove('active');
        bankDetailsSection.classList.add('active');
    } 
    else {
        googlePaySection.classList.add('active');
        bankDetailsSection.classList.remove('active');
    }
}