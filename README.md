Second Parcel-React-Express build from scratch (no create react...)
  I may use Redux
Created github repo https://github.com/jsmithb117/Parcel-React-Express.git
Did:
  git init
  git remote add origin https://github.com/jsmithb117/Parcel-React-Express.git
  git push -u origin master
  parcel ./src/server/index.html
Created:
  ./src
    ./server
      index.html
      index.js
    ./client
      index.jsx
      Clock.jsx
In index.jsx:
  created 'tick' method that sets an interval to update 'time' in state every 1000 ms
  called tick from componentDidMount to get it running
  passed 'time' to Clock.jsx
In Clock.jsx
  rendered a div with the current time from props

Time renders in page and updates every second

Installed express:
  npm install express --save
Wrote index.js as an express server on port 8080
  get: time
  listen: 8080
Added proxy line in package.json:
  "proxy": "http://localhost:8080"
Started server:
  node ./src/server/index.js

  installed:
    npm install --save-dev nodemon
  got nodemon working properly
Got time and 'data' properly rendered

Ready for database...
  installed:
    npm install mongoose --save
  started:
    sudo service mongodb start
  added to index.js:
    mongoose.Promise = global.Promise;
    mongoose.connect(`mongodb://localhost:27017/node-react-starter`, {useNewUrlParser: true, useUnifiedTopology: true});
