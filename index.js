const express = require('express')
//let port = process.env.PORT || 3000
let port = process.argv[2] || 3000
const app = express()


console.log(process.argv)
if(process.argv[2]==='v'){
  console.log('MyApp versione 0.0.1')
}

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000)
console.log(`Server running at http://127.0.0.1:3000`);