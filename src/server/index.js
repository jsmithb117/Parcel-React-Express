const express = require('express')
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
var cors = require('cors');

const app = express()
// const port = 3000

app.state = {
  costPerDay: 7.5
}

//not sure what the next two lines do yet
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://localhost:27017/node-react-starter`, { useNewUrlParser: true, useUnifiedTopology: true });



app.use(bodyParser.json({ type: 'application/json' }))

//put methods NOT using cors before this line
app.use(cors());

app.get('/costPerDay', (req, res) => {
  return res.status(200).send(JSON.stringify(app.state.costPerDay))
})

app.listen(8080)