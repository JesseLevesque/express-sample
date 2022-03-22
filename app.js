const express = require('express');
const app = express();
const port = 9000;

app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    res.render("app", { page: "Home", linkDestination: "End" });

});


app.get('/linkDestination', (req, res) => {
    res.render("app", { page: "End", linkDesetination: "Home" });
});



app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});