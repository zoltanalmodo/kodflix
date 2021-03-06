const express = require('express');
const app = express();
const getShows = require('./shows');
const path = require('path');
const port = process.env.PORT || 3001;

app.get ('/rest/shows', (req, res) => res.send(getShows()));

app.use (express.static(path.join(__dirname, '../../build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
