// Fetch User data
// fetch boardgames data

fetch(`/api/users/session/{userdata}`)
  .then(response => response.json())
  .then(userData => {
    console.log(`User data retrieved`);
    console.log(userData)
  })
  .catch(error => {
    console.error('Error trying to fetch user data', error);
  });
