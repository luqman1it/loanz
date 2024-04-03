let counter = 1;

let backBtn = document.getElementById('backBtn');
let boxes = document.querySelectorAll('.boxes');
boxes.forEach(box => {
    box.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // لتنعم الانتقال
        });
        nextStep();



    });
})



function nextStep() {
    var currentStep = document.querySelector('.step:not([style*="display: none"])');
    if (currentStep.nextElementSibling) {
        currentStep.style.display = 'none';
        currentStep.nextElementSibling.style.display = 'block';
        document.getElementById('backBtn').style.display = 'inline-block'; // Show back button
    }
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // لتنعم الانتقال
    });
    counter++;
    document.getElementById('progress').style.width = `${(counter - 1) * (100 / 23)}%`;
    console.log(counter)


}

function prevStep() {
    var currentStep = document.querySelector('.step:not([style*="display: none"])');
    if (currentStep.previousElementSibling) {
        currentStep.style.display = 'none';
        currentStep.previousElementSibling.style.display = 'block';
        console.log(currentStep)
    }
    if (document.getElementById('step1').style.display == 'block') {
        backBtn.style.display = 'none'
    }
    counter--;
    document.getElementById('progress').style.width = `${(counter - 1) * (100 / 23)}%`;
    console.log(counter)

}
backBtn.addEventListener('click', prevStep)

let price = document.getElementById('price');

let loanAmount = document.getElementById('loanAmount');

loanAmount.onchange = function () {
    price.innerHTML = `$${loanAmount.value}`;
}

let priceButton = document.querySelectorAll('#priceButton button')

priceButton.forEach((priceb) => {
    priceb.addEventListener('click', function () {
        let p = priceb.getAttribute('data-value');
        price.innerHTML = `$${p}`;
        nextStep();
    })
})

// step3
let firstName = document.getElementById('firstName');

let lastName = document.getElementById('lastName');
function formValidation() {
    if (firstName.value.trim() == '') {

        document.querySelector('.error-name').style.display = 'block';
    }
    else {
        document.querySelector('.error-name').style.display = 'none';

    }
    if (lastName.value.trim() == '') {

        document.querySelector('.error-last').style.display = 'block';
    }
    else {
        document.querySelector('.error-last').style.display = 'none';

    }
    if (lastName.value.trim() != '' && firstName.value.trim() != '') {
        lastName.setAttribute('placeholder', lastName.value)
        firstName.setAttribute('placeholder', firstName.value)
        nextStep();
    }
}
// DataPicker

