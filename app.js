const express = require('express')
const app = express()
var port = process.env.PORT || 3000
app.get('/', (req, res) => res.send("Beemooooooo"))

app.listen(port, () => console.log(`App running on port ${port}!`))