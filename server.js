const express = require('express');
const path = require('path');
const nextAction = require('./client/index.js')
nextAction()


const app = express(); 
const PORT = 3006;

const dbService = require('./dbService')

app.use(express.static('client'));

// Here we set up express to properly read and parse form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send(start));


app.get('/api/department', (req, res) => {
  const db = dbService.getDbServiceInstant()

  const result = db.getAllData();

  result
  .then(data => response.json({data : data}))
  .catch(err => console.log(err));
})




// Catch-all route -- must be last in the list of routes
// app.get("*", (req, res) => res.sendFile(path.join(__dirname, '/public/404.html')))


// Here we tell Express to start listening for request
app.listen(PORT, () =>
  console.log(`Serving static asset routes on http://localhost:${PORT}`)
);