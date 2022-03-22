const express = require('express');
const app = express();
const port = 9000;

app.set('view engine', 'hbs');

let userName;

app.get('/', (req, res) => {
    res.render("app", { page: "Home", linkDestination: "End" });

});


app.get('/End', (req, res) => {
    res.render("app", { page: "End", linkDestination: "Home" });
});

app.get('/userName/:text', (req, res) => {
    userName = req.params.text;
    res.render("app", { page: "Your username", linkDestination: "Home", userName: userName });
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});