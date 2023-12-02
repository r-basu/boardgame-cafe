// Fetch User data
// fetch boardgames data

fetch(`/api/users/session/{userData.id}`)
  .then(response => response.json())
  .then(userData => {
    console.log(`User data retrieved`);
    console.log(userData)
  })
  .catch(error => {
    console.error('Error trying to fetch user data', error);
  });

//TODO FIX NOT WORKING
document.querySelector("#unclaim-btn").addEventListener("submit", e => {
  fetch(`/api/users/deleteCurrentGame/`)
    .then(response => response.json())
    .catch(error => {
      console.error('Error trying to fetch user data', error);
    });
})
