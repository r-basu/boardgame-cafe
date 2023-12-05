document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});

// Global Variables 
let boardgamesData;
let categoriesData;
let gameFormData;
let wantedGames = []

//Randomize GameID
document.querySelector("#randomBtn").addEventListener("click", e => {
    fetch(`/api/games/random/${randomGameId}`)
        .then(response => {
            response.json()
            location.replace(`/game/${randomGameId}`)
        })
        .catch(error => {
            console.error(error);
        });
})

// Retrieve data from boardgames_db
// fetch boardgames data
fetch('/api/games')
    .then(response => response.json())
    .then(data => {
        boardgamesData = data
        console.log(`Boardgame data retrieved`);
    })
    .catch(error => {
        console.error('Error trying to fetch boardgame data', error);
    });

// fetch categories data
fetch('/api/games/categories')
    .then(response => response.json())
    .then(data => {
        categoriesData = data
        console.log(`Categories data retrieved`);
    })
    .catch(error => {
        console.error('Error trying to fetch Categories data', error);
    });

const gameSeachForm = document.getElementById(`gameSeachForm`);
gameSeachForm.addEventListener(`submit`, function (event) {
    // prevent default behavior
    event.preventDefault();
    // Reset the wantedGames arreay in case this is not the first search
    wantedGames = [];

    // Get the values of the form elements
    const title = document.getElementById(`title-value`).value
    const age = document.getElementById(`age-value`).value
    const players = document.getElementById(`players-value`).value
    const formData = new FormData(gameSeachForm)
    const categories = formData.getAll(`categories-values`)
    const duration = document.getElementById(`duration-value`).value
    // Check if the title field was field by the user
    if (!title == ``) {
        wantedGames.push(title);
        displayCards();
    } else if (age == `` || players == `` || categories == `` || duration == ``) {
        M.toast({ html: 'Please input a title or all the other fields', classes: 'rounded' })
    } else {
        filterGames(age, players, categories, duration)
    }
});

const filterGames = (userAge, userPlayers, userCategories, userDuration) => {
    // filter age
    const filteredByAge = boardgamesData.filter(game => game.minAge >= userAge);
    const idByAge = [];
    for (let game of filteredByAge) {
        idByAge.push(game.id)
    }
    // filter the number of players
    const filteredByPlayers = boardgamesData.filter(game => userPlayers >= game.minPlayers && userPlayers <= game.maxPlayers);
    const idByPlayers = [];
    for (let game of filteredByPlayers) {
        idByPlayers.push(game.id)
    }
    // filter categories
    const filteredByCategory = [];
    for (let game of boardgamesData) {
        for (let category of game.Categories) {
            for (let i = 0; i < userCategories.length; i++) {
                if (category.name == userCategories[i]) {
                    filteredByCategory.push(game);
                    break;
                };
            };
        };
    };
    const idByCategory = [];
    for (let game of filteredByCategory) {
        idByCategory.push(game.id)
    }
    // Filter by game duration
    const filteredByDuration = boardgamesData.filter(game => userDuration >= game.minTime && userDuration <= game.maxTime);
    const idByDuration = [];
    for (let game of filteredByDuration) {
        idByDuration.push(game.id)
    }
    //combine all the arrays only with the values that are present in all of them
    wantedGames = combineArrays(idByAge, idByCategory, idByDuration, idByPlayers)
    console.log(wantedGames);
    if (wantedGames == ``) {
        alert(`We don't have a game with those parameters :( Please try including more categories when doing the search`)
    }
    displayCards();
};

const combineArrays = (array1, array2, array3, array4) => {
    let combinedArray = [];
    for (let num of array1) {
        if (
            array2.includes(num) &&
            array3.includes(num) &&
            array4.includes(num)
        ) {
            combinedArray.push(num);
        }
    }
    return combinedArray;
}

const displayCards = async () => {
    const gamesToDisplay = [];
    for (let id of wantedGames) {
        for (let game of boardgamesData) {
            if (id == game.id) {
                gamesToDisplay.push(game);
            };
        };
    };
    console.log(gamesToDisplay);

    const cardContainer = document.getElementById(`card-container`)
    for (let game of gamesToDisplay) {
        const card = document.createElement(`section`);
        card.classList.add(`game-card`);
        card.innerHTML =
            `  <a href="/game/${game.id}">
    <!-- The card contains the game title as the card header -->
    <header>${game.title}</header>
    <!-- The card contains the image of the game -->
    <img src="/assets/img/${game.id}.jpg" alt="${game.title} image">
    </a>`
        cardContainer.appendChild(card);
    }
};