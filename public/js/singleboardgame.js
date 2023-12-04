let urlGameId = new URL(window.location.href);
const sectionGameId = urlGameId.pathname.split('/')[2]

document.querySelector("#claimButton").addEventListener("click", e => {
  fetch(`/api/users/addCurrentGame/${sectionGameId}`, {
    method: "PUT",
  }).then(response => {
    response.json()
    location.reload();
  })
    .catch(error => {
      console.error(error);
    });
})