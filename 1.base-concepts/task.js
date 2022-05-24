"use strict";

function solveEquation(a, b, c) {
  let arr = [], discrim;
  discrim = b ** 2 - 4 * a * c;
  if (discrim == 0) {
    arr[0] = -b / (2 * a);
  } if (discrim > 0) {
      arr[0] = (-b + Math.sqrt(discrim)) / (2 * a);
      arr[1] = (-b - Math.sqrt(discrim)) / (2 * a);
    }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount, loanBody, now, months, payment, perMonth;

  if (!isNaN(percent)) {
    if (!isNaN(contribution)) {
      if (!isNaN(amount)) {
      loanBody = amount - contribution;

      now = new Date;
      months = date.getMonth() - now.getMonth() + (12 * (date.getFullYear() - now.getFullYear()));
      
      perMonth = (percent / 12) / 100;
      payment = loanBody * (perMonth + (perMonth / (((1 + perMonth) ** months) - 1)));
      
      totalAmount = payment * months;
      
      return parseFloat(totalAmount.toFixed(2));
    
      } else {
          totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
          return totalAmount;
      } 
    } else {
      totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
        return totalAmount;
    }
  } else {
      totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
      return totalAmount;
  }
}
