const express = require('express')
const app = express()

process.loadEnvFile()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
})