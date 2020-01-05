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
const userColor = questions.color;
console.log(user);
console.log(userColor);

getProf()

async function getProf() {
    try {

    await inquirer.prompt(questions);
    const queryURL = `https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`;
    
    await axios.get(queryURL).then(function(response) {
        apiRes = response;
        generateHTML();
        console.log(apiRes);
    });

    } catch(err) {
        console.log(err);
    }
};

const colors = {
    green: {
        wrapperBackground: "#E6E1C3",
        headerBackground: "#C1C72C",
        headerColor: "black",
        photoBorderColor: "#black"
    },
    blue: {
        wrapperBackground: "#5F64D3",
        headerBackground: "#26175A",
        headerColor: "white",
        photoBorderColor: "#73448C"
    },
    pink: {
        wrapperBackground: "#879CDF",
        headerBackground: "#FF8374",
        headerColor: "white",
        photoBorderColor: "#FEE24C"
    },
    red: {
        wrapperBackground: "#DE9967",
        headerBackground: "#870603",
        headerColor: "white",
        photoBorderColor: "white"
    }
}; 

data.stargazers_count = data['stargazers_count'];

function generateHTML(data) {
    return `<!DOCTYPE html>
    <html lang-"en>
       <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
        <script src="https://kit.fontawesome.com/7053e21479.js" crossorigin="anonymous"></script>
        <title>Document</title>
        <style>
            @page {
                margin: 0;
            }
            *,
            *::after,
            *::before {
            box-sizing: border-box;
            }
            html, body {
            padding: 0;
            margin: 0;
            }
            html, body, .wrapper {
            height: 100%;
            }
            .wrapper {
            background-color: ${colors[userColor.color].wrapperBackground};
            padding-top: 100px;
            }
            body {
            background-color: white;
            -webkit-print-color-adjust: exact !important;
            font-family: 'Cabin', sans-serif;
            }
            main {
            background-color: #E9EDEE;
            height: auto;
            padding-top: 30px;
            }
            h1, h2, h3, h4, h5, h6 {
            font-family: 'BioRhyme', serif;
            margin: 0;
            }
            h1 {
            font-size: 3em;
            }
            h2 {
            font-size: 2.5em;
            }
            h3 {
            font-size: 2em;
            }
            h4 {
            font-size: 1.5em;
            }
            h5 {
            font-size: 1.3em;
            }
            h6 {
            font-size: 1.2em;
            }
            .photo-header {
            position: relative;
            margin: 0 auto;
            margin-bottom: -50px;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            background-color: ${colors[userColor.color].headerBackground};
            color: ${colors[userColor.color].headerColor};
            padding: 10px;
            width: 95%;
            border-radius: 6px;
            }
            .photo-header img {
            width: 250px;
            height: 250px;
            border-radius: 50%;
            object-fit: cover;
            margin-top: -75px;
            border: 6px solid ${colors[userColor.color].photoBorderColor};
            box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
            }
            .photo-header h1, .photo-header h2 {
            width: 100%;
            text-align: center;
            }
            .photo-header h1 {
            margin-top: 10px;
            }
            .links-nav {
            width: 100%;
            text-align: center;
            padding: 20px 0;
            font-size: 1.1em;
            }
            .nav-link {
            display: inline-block;
            margin: 5px 10px;
            }
            .workExp-date {
            font-style: italic;
            font-size: .7em;
            text-align: right;
            margin-top: 10px;
            }
            .container {
            padding: 50px;
            padding-left: 100px;
            padding-right: 100px;
            }
    
            .row {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                margin-top: 20px;
                margin-bottom: 20px;
            }
    
            .card {
                padding: 20px;
                border-radius: 6px;
                background-color: ${colors[userColor.color].headerBackground};
                color: ${colors[userColor.color].headerColor};
                margin: 20px;
            }
            
            .col {
            flex: 1;
            text-align: center;
            }
    
            a, a:hover {
            text-decoration: none;
            color: inherit;
            font-weight: bold;
            }
    
            @media print { 
            body { 
                zoom: .75; 
            } 
            }
        </style>
        </head>
        <body>
        <div class="wrapper">
            <div class="photo-header">
                <img src="${apiRes.data.avatar_url}" alt="Developer Profile Image">
                <h1>Hi!</h1>
                <h2>My name is ${apiRes.data.name}!</h2>
                <h4>Currently @ ${apiRes.data.company}</h4>
                <ul class="links-nav">
                    <li class="nav-link"><a href="http://maps.google.com/?q=${apiRes.data.location}"><i class="fas fa-location-arrow"></i> ${data.location}</a></li>
                    <li class="nav-link"><a href="${apiRes.data.html_url}"><i class="fab fa-github-alt"></i> GitHub</a></li>
                    <li class=" nav-link"><a href="${apiRes.data.blog}"><i class="fas fa-rss"></i> Blog</a></li>
                </ul>
            </div>
        <main>
            <div class="container">
                <div class="row">
                    <h5 class="col">${apiRes.data.bio}</h5>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="card">
                        <h4>Public Reposorities</h4>
                        <h5>${apiRes.data.public_repos}</h5>
                        </div>
                        <div class="card col">
                        <h4>GitHub Stars</h4>
                        <h5>${apiRes.data.stargazers_count}</h5>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <h4>Followers</h4>
                        <h5>${apiRes.data.followers}</h5>
                        </div>
                        <div class="card col">
                        <h4>Following</h4>
                        <h5>${apiRes.data.following}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </div>
        </body>
        </html>`
    
};