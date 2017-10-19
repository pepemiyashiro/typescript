/**
 * The Fizz Buzz problem
 */
for( let idx = 1; idx < 101; idx++) {
  const isFizz = idx % 3 === 0;
  const isBuzz = idx % 5 === 0;

  let result = isFizz && isBuzz ? 'FizzBuzz': isFizz ? 'Fizz' : isBuzz ? 'Buzz' : idx;

  console.log(result);
}