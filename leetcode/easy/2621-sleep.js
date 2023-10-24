/*Example 1:

Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});
Example 2:

Input: millis = 200
Output: 200
Explanation: It should return a promise that resolves after 200ms.
 

Constraints:

1 <= millis <= 1000 */

/* async function sleep(millis) {
  try {
    await setTimeout(() => {
      return millis
    }, millis)
  } catch (err) {
    console.error(err)
  }
} */

function sleep(millis) {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(millis);
    }, millis)
  })
}

let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100

