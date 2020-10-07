import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

console.log(fifaData[828]['Home Team Name'])
console.log(fifaData[828]["Away Team Name"])
console.log(fifaData[828]["Home Team Goals"])
console.log(fifaData[828]["Away Team Goals"])

if (fifaData[828]["Home Team Goals"] > fifaData[828]["Away Team Goals"]) {
    console.log(fifaData[828]["Home Team Name"] + " is the winner")
} else {
    console.log(fifaData[828]["Away Team Name"] + " is the winner")
}



/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

/* function getFinals(data) {
    const finalsArray = fifaData.filter(function(array){
        return array["Stage"] === data;
    })
};
console.log(getFinals(fifaData)); */

function getFinals(data){
    const finalsArray=[];
    for(let i=0; i < data.length; i++){
        if(data[i]["Stage"]==="Final"){
            finalsArray.push(data[i])
        }
    }
return finalsArray;
};
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callbackium) {
    return callbackium(fifaData).map(item => item.Year);
};
console.log(getYears(getFinals));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callbackium) {
    const winners = [];
    const filtration = callbackium(fifaData).filter((item) => {
        if(item["Home Team Goals"] > item["Away Team Goals"]){
            winners.push(item["Home Team Name"])
        }else{
            winners.push(item["Away Team Name"])
        }
    });
    return winners;
};

console.log(getWinners(getFinals));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(callbackium, callbackdos) {


};

getWinnersByYear();

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let totalHomeTeamGoals = 0;
    let totalAwayTeamGoals = 0;
    let averageHomeTeamGoals = 0;
    let averageAwayTeamGoals = 0;
    let count = 0;
    for(let j = 0; j < data.length; j++){
        totalHomeTeamGoals = totalHomeTeamGoals + data[j]["Home Team Goals"];
        totalAwayTeamGoals = totalAwayTeamGoals + data[j]["Away Team Goals"];
        count++;
    }
    averageHomeTeamGoals = totalHomeTeamGoals / count;
    averageAwayTeamGoals = totalAwayTeamGoals / count;
    console.log("Average home team goals: " + averageHomeTeamGoals);
    console.log("Average away team goals: " + averageAwayTeamGoals);
};
getAverageGoals(fifaData);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
