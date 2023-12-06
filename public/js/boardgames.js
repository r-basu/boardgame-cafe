document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});

// Global Variables 
let boardgamesData;
let categoriesData;
let gameFormData;
let wantedGames = []
let randomGameId;

// Get the random game Id
const randomBtn = document.getElementById(`randomBtn`);
randomGameId = randomBtn.getAttribute('data-randomId')

//Randomize GameID
document.querySelector("#randomBtn").addEventListener("click", e => {
    wantedGames.push(randomGameId);
    displayCards()   
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
    } 
    else if (age == `` && players == `` && categories == `` && duration == ``) {
        M.toast({ html: 'Please input a title or fill any of the fields', classes: 'rounded' })
    } else {
        filterGames(age, players, categories, duration)
    }
});

const filterGames = (userAge, userPlayers, userCategories, userDuration) => {
    // define the number of filters that the user used
    let filtersUsed = 4;
    let combinedArray = [];

    // filter age
    if(userAge == ``){
        filtersUsed--
    } else {
        const filteredByAge = boardgamesData.filter(game => game.minAge >= userAge);
        const idByAge = [];
        for (let game of filteredByAge) {
            idByAge.push(game.id)
        }
        combinedArray = combinedArray.concat(idByAge)
    }

    // filter the number of players
    if(userPlayers == ``){
        filtersUsed--
    } else{
        const filteredByPlayers = boardgamesData.filter(game => userPlayers >= game.minPlayers && userPlayers <= game.maxPlayers);
        const idByPlayers = [];
        for (let game of filteredByPlayers) {
            idByPlayers.push(game.id)
        }
        combinedArray = combinedArray.concat(idByPlayers);
    }
    
    // filter categories
    if(userCategories == ``){
        filtersUsed--
    } else{
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
        combinedArray = combinedArray.concat(idByCategory)
    }
    
    // Filter by game duration
    if(userDuration == ``){
        filtersUsed--
    } else{
        const filteredByDuration = boardgamesData.filter(game => userDuration >= game.minTime && userDuration <= game.maxTime);
        const idByDuration = [];
        for (let game of filteredByDuration) {
            idByDuration.push(game.id)
        }
        combinedArray = combinedArray.concat(idByDuration)
    }

    //combine all the arrays only with the values that are present in all of them
    const filteredArray = resultArray(combinedArray, filtersUsed);
    
    wantedGames = [...filteredArray];
    if (wantedGames == ``) {
        alert(`We don't have a game with those parameters :( Please try including more categories when doing the search`)
    }
    displayCards();
};

const resultArray = (array, numberOfFilters) => {
    let filteredArray = [];
    for (let num of array) {
        const count = countIndexOccurrences(array, num)
        if (count == numberOfFilters){
            filteredArray.push(num);
        }
    };
    return filteredArray;
}

const countIndexOccurrences = (arr, index) => {
    let count = 0;  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === index) {
        count++;
      }
    }  
    return count;
}

const displayCards = async (event) => {
    // const previousSearch = localStorage.getItem(`currentGames`)
    // console.log(previousSearch);
    // localStorage.clear();
    // if(!previousSearch){
    //     return;
    // }
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

// const saveGames = () => {
//     localStorage.setItem(`currentGames`, JSON.stringify(wantedGames));
//     location.reload();
// }


