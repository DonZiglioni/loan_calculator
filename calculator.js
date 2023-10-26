window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  if (document.getElementById("loan-rate").value > 1) {
    alert('Please enter a valid decimal percentage')
  }
  if (document.getElementById("loan-rate").value < 0) {
    alert('Please enter a positive percentage')
  }
  if (document.getElementById("loan-amount").value < 0) {
    alert('Please enter a positive number to borrow')
  }
  if (document.getElementById("loan-years").value < 0) {
    alert('Please enter a time in the future  :)')
  }
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let starterForm = getCurrentUIValues()
  starterForm.amount = 100000
  starterForm.years = 15
  starterForm.rate = .07
  let calculated = calculateMonthlyPayment(starterForm);

  const payment = document.createElement('span')
  payment.setAttribute('id', 'payment')
  payment.innerText = calculated
  document.querySelector('#monthly-payment').append(payment)
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let updateForm = getCurrentUIValues()
  updateMonthly(updateForm)
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let totalRepay = values.amount * values.rate + values.amount
  console.log(`Your total repayment will be: $${totalRepay}`);
  let totalMonths = values.years * 12
  let monthlyPayment = totalRepay / totalMonths
  return monthlyPayment.toFixed(2)
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let calculation = calculateMonthlyPayment(monthly)
  const newPayment = document.querySelector('#payment')
  newPayment.innerText = calculation
}
