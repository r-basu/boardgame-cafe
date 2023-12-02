document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});

// Global Variables 
let boardgamesData;
let categoriesData;
let gameFormData;

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
    // Get the values of the form elements
    const title = document.getElementById(`title-value`).value
    const age = document.getElementById(`age-value`).value
    const players = document.getElementById(`players-value`).value
    const formData = new FormData(gameSeachForm)
    const categories = formData.getAll(`categories-values`)
    const duration = document.getElementById(`duration-value`).value
    console.log(title, age, players, categories, duration);
})


