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

document.querySelector("#unclaimBtn").addEventListener("click", e => {
  fetch(`/api/users/deleteCurrentGame/`, {
    method: "PUT",
  }).then(response => {
    response.json()
    location.reload();
  })
    .catch(error => {
      console.error('error trying to fetch api route', err);
    });
})

document.querySelector("#logout").addEventListener("click", e => {
  fetch(`/api/users/logout/`, {
  }).then(response => {
    response.json();
    location.assign("/login")
  })
    .catch(error => {
      console.error('error trying to fetch api route', err);
    });
})