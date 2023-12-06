// Fetch User data
// fetch boardgames data
let userInfo;

fetch(`/api/users/session/1`)
  .then(response => response.json())
  .then(userData => {
    console.log(`User data retrieved`);
    userInfo = userData
    console.log(userInfo)
    displayGames()
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
      console.error('error trying to fetch api route', error);
    });
})

document.querySelector("#logout").addEventListener("click", e => {
  fetch(`/api/users/logout/`, {
    }).then(response => {
      response.json();
      location.assign("/login")
    })
    .catch(error => {
      console.error('error trying to fetch api route', error);
    });
})

document.querySelector("#DeleteUsr").addEventListener("click", e => {
  fetch(`/api/users/delete/`, {
      method: "DELETE",
  }).then(response => {
    response.json()
    location.assign("/")
  })
    .catch(error => {
      console.error('error trying to fetch api route', error);
    });
})

const displayGames = () => {
  const lastGamesContainer = document.getElementById(`last-games`)
  for (let i = 0; i < userInfo.Games.length && i <= 3; i++) {
    const card = document.createElement(`div`);
    card.classList.add(`game-card`);
    card.innerHTML = 
    `<div>
    <p class="game-title">${i+1}: ${userInfo.Games[i].title}</p>
    <img src="/assets/img/${userInfo.Games[i].id}.jpg" alt="Game Image">
    <a href="/game/${userInfo.Games[i].id}"></a>
    </div>`
    lastGamesContainer.appendChild(card)
  }
}