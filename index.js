const express = require('express');
const app = express();
const path = require('path');


app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/' , (req , res) => {
	res.render('index');
});

app.listen(8081 , () => {
console.log('listening');
});
