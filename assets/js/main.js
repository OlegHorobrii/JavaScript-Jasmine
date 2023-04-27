console.log('first function');

function ageClassification(n) {
  var age = n;
  return n > 0 ?
    n > 24 ?
      n > 44 ?
        n > 65 ?
          n > 75 ?
            n > 90 ?
              n > 122 ?
                null :
                'долгожители' :
              'старческий возраст' :
            'пожилой возраст' :
          'средний возраст' :
        'молодой возраст' :
      'детский возраст' :
    null;
}


console.log(1, ageClassification(-1) === null);
console.log(2, ageClassification(1) === 'детский возраст');
console.log(3, ageClassification(24) === 'детский возраст');
console.log(4, ageClassification(24.01) === 'молодой возраст');
console.log(5, ageClassification(44) === 'молодой возраст');
console.log(6, ageClassification(44.01) === 'средний возраст');
console.log(7, ageClassification(65) === 'средний возраст');
console.log(8, ageClassification(65.01) === 'пожилой возраст');
console.log(9, ageClassification(75) === 'пожилой возраст');
console.log(10, ageClassification(75.01) === 'старческий возраст');
console.log(11, ageClassification(90) === 'старческий возраст');
console.log(12, ageClassification(90.01) === 'долгожители');
console.log(13, ageClassification(122) === 'долгожители');
console.log(14, ageClassification(122.01) === null);
console.log(15, ageClassification(150) === null);


console.log('second function');

function weekFn(n) {
  var str = "";

  switch (n) {
    case 1:
      str = "Понедельник";
      break;
    case 2:
      str = "Вторник";
      break;
    case 3:
      str = "Среда";
      break;
    case 4:
      str = "Четверг";
      break;
    case 5:
      str = "Пятница";
      break;
    case 6:
      str = "Суббота";
      break;
    case 7:
      str = "Воскресенье";
      break;
    default:
      str = null;
  }
  return str;
}

console.log(weekFn(1)); // 'Понедельник'
console.log(weekFn(3)); // 'Среда'
console.log(weekFn(7)); // 'Воскресенье'
console.log(weekFn(9)); // null
console.log(weekFn(1.5)); // null
console.log(weekFn("2")); // null
console.log(weekFn(4)); // Четверг 