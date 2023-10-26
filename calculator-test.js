
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({
    amount: 50000,
    years: 10,
    rate: .05,
  })).toEqual(437.50.toFixed(2))
});


it("should return a result with 2 decimal places", function () {
  expect(calculateMonthlyPayment({
    amount: 33333,
    years: 33,
    rate: .03,
  })).not.toEqual(86.7)
  expect(calculateMonthlyPayment({
    amount: 33333,
    years: 33,
    rate: .03,
  })).toEqual(86.70.toFixed(2))
});

/// etc

it("should only accept a rate that begins with a decimal point", () => {
  expect(calculateMonthlyPayment({
    amount: 10000,
    years: 5,
    rate: .30,
  })).not.toEqual(5166.67.toFixed(2))
})

it("should not accept a negative number in the ammount field", () => {
  expect(calculateMonthlyPayment({
    amount: -120,
    years: 1,
    rate: 0,
  })).not.toEqual(10.00.toFixed(2))
})

it("should not accept a negative number of years", () => {
  expect(calculateMonthlyPayment({
    amount: 120000,
    years: -5,
    rate: .10,
  })).not.toEqual(2200.00.toFixed(2))
})

it("should not accept a negative number for the rate", () => {
  expect(calculateMonthlyPayment({
    amount: 23000,
    years: 23,
    rate: -.23,
  })).toEqual(64.17.toFixed(2))
})