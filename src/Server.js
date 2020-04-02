const express = require('express');
const app = express();
const fetch = require("node-fetch");
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let list = []

const getPageNumber = () => {
    let x;
    let da = Math.floor(Math.random());
    let url;
    da = 1 ? url = `https://rickandmortyapi.com/api/character/?status=alive` : url = `https://rickandmortyapi.com/api/character/?status=dead`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            x = {
                "pages": data.info.pages,
                "da": da
            };
        })
    return x;
}

const getChar = () => {
    let rand = Math.floor(Math.random() * 20);
    let page = Math.ceil(Math.random() * 10);
    let url = `https://rickandmortyapi.com/api/character/?status=alive&page=${page}`
    // getPageNumber().da = 1 ? url = `https://rickandmortyapi.com/api/character/?status=alive&page=${page}` : url = `https://rickandmortyapi.com/api/character/?status=dead&page=${page}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            return data.results[rand];
        })
}

// while (i < 12) {
//             randChar = Math.floor(Math.random() * 100);
//             fetch(`https://rickandmortyapi.com/api/character/${randChar}`)
//                 .then((response) => {
//                     if (response.status = "Alive" || "Dead") {
//                         list[i] = response.json();
//                         i += 1;
//                     }
//                 })
//         }
//         console.log(list);
//         return x;
//     }


app.get('/', (req, res) => {
    getPageNumber();
    res.status(200).send(getPageNumber());
})


app.listen(port, (err) => {
    if (err) { console.log(err) };
    console.log('Listening on port ' + port);
})


// const getRandomChar = () => {
//     let i = 0;
//     let randChar;
//     let ans = {
//         results: []
//     };
//     while (i < 12) {
//         randChar = Math.floor(Math.random() * 100);
//         fetch(`https://rickandmortyapi.com/api/character/${randChar}`)
//             .then((response) => {
//                 if (response.status = "Alive" || "Dead") {
//                     ans.results[i] = response.json();
//                     i += 1;
//                 }
//             })
//     }
//     console.log(ans);
//     return ans;
// }

// app.get('/api/characters', (req, res) => {
//     getRandomChar();

//     console.log(ans);
//     res.status(200).send(ans);
// });

