/**
 * @param {number} number
 * @return {number}
 */
export default function factorial(number) {
  let result = 1;

  for (let i = 2; i <= number; i += 1) {
    result *= i;
  }

  return result;
}


```
function test(n){
return n == 0 ? 1 : n * test(n - 1) 
}
```
