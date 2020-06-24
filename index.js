const request = require("request");
const express = require("express");

const app = express()

let FgGreen = "\x1b[32m";
let FgYellow = "\x1b[33m";
let FgWhite = "\x1b[37m"

app.use(express.static('public'));
app.use(express.json());

request({
    url: "http://api.openweathermap.org/data/2.5/weather?q=Brasilia&units=metric&appid=9cef86cfd1d86b6adac83cdbbf206394",
    json: true,
}, getData);

function getData(err, response, body) {
    console.log(" ");
    console.log(FgGreen, body.name); 
    console.log(FgYellow, body.main.temp);
    console.log(FgYellow, body.weather[0].main);
    console.log(FgWhite, " ");

    app.get("/data", (req, res) => {
        res.json(body);
    })
}

app.listen(3000, () => console.log(FgGreen, `> Server listening <`))