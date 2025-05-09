
/*
console.log("Error handling -> promises, async await and try catch");

function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve({ id: userId, name: "Jhon" });
      } else {
        reject(new Error("Failed to fetch user data"));
      }
    }, 1000);
  });
}

async function safeFetchUserData(userId) {
  try {
    const userData = await fetchUserData(userId);
    console.log(userData);
  } catch (error) {
    console.error("Error ", error.message);
  }
}
safeFetchUserData('user123')
*/

// const Maybe = {
//     Just: value => ({
//       map: fn => Maybe.Just(fn(value)),
//       chain: fn => fn(value),
//       ap: fn => fn(value)
//     }),
//     Nothing: () => ({
//       map: () => Maybe.Nothing(),
//       chain: () => Maybe.Nothing(),
//       ap: () => Maybe.Nothing()
//     })
//   };
  
//   function divide(x, y) {
//     if (y === 0) return Maybe.Nothing();
//     return Maybe.Just(x / y);
//   }
  
//   divide(10, 2).map(result => console.log(result)); // Output: 5
//   divide(10, 0).map(result => console.log(result)); // No output