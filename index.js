// import { generateHTML } from "./generateHTML.js";

const inquirer = require('inquirer');
const axios = require('axios');


// github api call requirements
const client_id = "Iv1.6db0f166fada637e";
const client_secret = "233133de119b4e741ed1dc925507313284c0a4ce";

const questions = [
    {
        type: "input",
        message: "Enter your GitHub user name",
        name: "username"
    },
    {
        type: 'list',
        message: 'Choose a color',
        choices: ['green', 'blue', 'pink', 'red'],
        name: 'color'
    }
    ];

const user = questions.username; 

getProf()

async function getProf() {
    try {

    await inquirer.prompt(questions);
    const queryURL = `https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`;
    
    const { data } = await axios.get(queryURL).then(function(response) {
        generateHTML();
    });

    } catch(err) {
        console.log(err);
    }
}
