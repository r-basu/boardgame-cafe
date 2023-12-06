# BoardGame Cafe

## User Story
```
As a boardgame enthusiast, 
I WANT to access a web application to checkout cafe boardgames and play games with other enthusiasts,
SO THAT I can find games I enjoy, checkout the game, play, and review the game.
ONCE I find a favorite boardgame I can rate, review and save to replay it.
```

## Acceptance Criteria
```
GIVEN that I access Boardgame cafe application, I am provided with a main page and a login page.
ONCE I navigate to login page, I can login with my existing username or create new.
WHEN I click Games Page, I am directed to a form to search for a boardgame based on my preferences for game title or game user age, number of players, game category, and duration to play the game,
THEN I am presented with Boardgame recommendations. 
ONCE I select one of the suggested Boardgame I am taken to a page with game details and ability to check out the game to play.
THEN I am directed to my profile page, I can view my current game, last 3 games played, and my favorite games.
```

## Code Description
This repository contains HTML, CSS, and Javascript to run the front-end of the application. 
To style the webpage, materalized framework is utilized and the back-end utilizes javascript, express, MySQL, sequelize, and is deployed on heroku.


## Application 
[Application Deployment](https://boardgame-cafe-1166881584c8.herokuapp.com/)

## Deployment Steps
1. Set up a .env file matching `/config/connection.js` variables.
2. If using Heroku, setup SESSION_SECRET env on application page, JAWSDB MySQL instance, and NodeJS buildpack.
3. Seed the database with `npm run seed` or `heroku run npm run seed` depending on local or heroku deployment.
4. Start the application on Heroku, or on local `npm run start`.


## Project Tracker
- [Project Tracker](https://github.com/users/r-basu/projects/2)
- [Issues Tracker](https://github.com/r-basu/boardgame-cafe/issues)

## Developers

* [David Rodriguez](https://github.com/DavidRodriguez119)
* [Maria Afzal](https://github.com/afzama)
* [Manjot Padda](https://github.com/manjotpadda13)
* [Rahul Basu](https://github.com/r-basu)

