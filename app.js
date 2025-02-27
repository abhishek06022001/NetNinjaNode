const express = require('express');
const app = express(); // express application hai 
app.listen(3000, () => {
    console.log("Listening to port 3000");
});
app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname });
})
app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', {
        root: __dirname
    })
})
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})
// 404 page
app.use()