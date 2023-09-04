const express = require('express')
const app = express()
const port = 3000


const cors = require('cors'); 


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


let items = []

let users = [
  {
    name:"Isabella",
    last:"Palma",
    id: 100001
  },
  {
    name:"Laura Marcela",
    last:"Mendieta",
    id: 100002
  },
  {
    name:"Johnny",
    last:"Oviedo",
    id: 100003
  },
]

app.get('/items', (req, res) => {  
  res.send({"items":items})
})

app.post('/items', (req, res) => {
  const newItem = {
    x: req.body.x,
    y: req.body.y,
    r: req.body.r,
    g: req.body.g,
    b: req.body.b,
  }

  items.push(newItem);

  res.send({"response":`New Item at ${newItem.x}, ${newItem.y}`});
})

app.get('/', (req, res) => {    
  res.send('Server started')
})

app.get('/users', (req, res) => {
  res.send({"users":users})
})

app.post('/clear', (req, res) => {    
  items = []
  res.send('Server cleared')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})