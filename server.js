const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const DIST = path.resolve(__dirname, 'dist');

const app = express();

app.use(express.static(DIST));
app.use(express.static(__dirname))

app.get('*', (req, res) => {
    res.sendFile(DIST + '/index.html')
});

app.listen(port);
console.log('Sever running... ');