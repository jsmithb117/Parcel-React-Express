const express = require('express')
const bodyParser = require("body-parser");

var cors = require('cors');

const app = express()

app.state = {
  costPerDay: 7.5
}

app.use(bodyParser.json({ type: 'application/json' }))

app.use(cors());

app.get('/costPerDay', (req, res) => {
  return res.status(200).send(JSON.stringify(app.state.costPerDay))
})

app.listen(8080)