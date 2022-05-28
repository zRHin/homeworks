// Задание 1
function getArrayParams(arr) {
  let min = Infinity, max = -Infinity, sum = null, avg;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  avg = sum / arr.length;
  return { min: min, max: max, avg: parseFloat(avg.toFixed(2))};
}

// Задание 2
function worker(arr) {
  let sum = null;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  for (j = 0; j < arrOfArr.length; j++) {
    let sumEl;
    sumEl = func(arrOfArr[j]);
    if ( sumEl > max) {
      max = sumEl;
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let min = Infinity, max = -Infinity, diff;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    diff = max - min;
  }
  return Math.abs(diff);
}
