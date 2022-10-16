const express = require('express');

const PORT = 3000;

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('pages/home', {
    title: 'Main page',
    text: 'This is main page',
  });
});

app.get('/about', (req, res) => {
  res.render('pages/about', {
    title: 'About page',
    text: 'This is about page',
  });
});

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
