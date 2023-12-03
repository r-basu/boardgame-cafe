// Fetch User data
// fetch boardgames data
let userInfo;

fetch(`/api/users/session/1`)
  .then(response => response.json())
  .then(userData => {
    console.log(`User data retrieved`);
    userInfo = userData
    console.log(userInfo)
  })
  .catch(error => {
    console.error('Error trying to fetch user data', error);
  });

// //TODO FIX NOT WORKING
// document.querySelector("#unclaim-btn").addEventListener("submit", e => {
//   fetch(`/api/users/deleteCurrentGame/`)
//     .then(response => response.json())
//     .catch(error => {
//       console.error('Error trying to fetch user data', error);
//     });
// })
