const express = require("express");
const app = express();
const path = require("path");
const { logger } = require("./middleware/logEvents");
const PORT = process.env.PORT || 3500;

// custom middleware logger
app.use(logger);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// serve static file
app.use(express.static(path.join(__dirname, "/public")));

app.get('^/$|/index(.html)?', (req, res) => {
  //res.sendFile('./views/index.html', { root: __dirname });
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
