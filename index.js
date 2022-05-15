const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('hi From App2')
})

app.listen(port, () => {
  console.log(`app r=nn=ing on ${port}`)
})