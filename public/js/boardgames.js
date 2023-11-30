// Global Variables 
let boardgamesData;
let categoriesData;


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
fetch('/api/games')
    .then(response => response.json())
    .then(data => {
        boardgamesData = data
        console.log(`Boardgame data retrieved`);
    })
    .catch(error => {
        console.error('Error trying to fetch boardgame data', error);
    });



