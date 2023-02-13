const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const fs = require('fs'); //file system module
const fetch = require('node-fetch');
const res = require('express/lib/response');
app.use(express.static('./public'));


// // Callbacks
setTimeout(() => {
    console.log("waited one second");
}, 1000)

// // Callback Hell Example
setTimeout(() => {
    console.log("waited one second");
    setTimeout(() => {
        console.log("waited two seconds");
        setTimeout(() => {
            console.log("waited three seconds");
        }, 1000)
    }, 1000)
}, 1000)


// // Error first callback: handles errors when something goes wrong
fs.readFile('./test.txt', { encoding: 'utf-8' }, (err, data) => {
    if (err) {
        console.error('ERROR');
        console.error(err);
    } else {
        console.error('Data read successfully');
        console.log(data);
    }
})

// Promises (evolution of callbacks)
// Allows code execution to continue while waiting for data to come back to the promise (javascript is single threaded)
// creating a promise
const myPromise = new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random() * 2);
    if (rand == 0) {
        resolve();
    } else {
        reject();
    }
})

// using an already defined promise
myPromise
.then(() => console.log('success'))
.catch(() => console.error('Something went wrong'))

// another example
fs.promises.readFile('./test2.txt', { encoding: 'utf-8' })
.then((data) => console.log(data))
.catch((err) => console.log(err));

fs.promises.readFile('./test.txt', { encoding: 'utf-8' })
.then((data) => console.log(data))
.catch((err) => console.log(err));

// Async Await (evolution of promises)
const loadFile = async () => {
    try {
        const data = await fs.promises.readFile('./test.txt', { encoding: 'utf-8' });
        console.log(data);
    } catch (err) {
        console.log(err);
    }
};

loadFile();

// api example of async await using https://pokeapi.co/api/v2/pokemon

const fetchPokemon = async (id) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.error(error);
    }
};

fetchPokemon(1);

app.listen(5678); // start the server
console.log('Server is running...');

// code credits: https://www.youtube.com/watch?v=670f71LTWpM&t=433s
