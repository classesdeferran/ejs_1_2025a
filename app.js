const path = require("node:path");
let ejs = require('ejs');
const express = require("express");
const app = express();

process.loadEnvFile();
const PORT = process.env.PORT || 3000;

// Para usar EJS como motor de plantillas
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

// Indicar la carpeta de los recursos estáticos: css, js, imágenes, ...
// path.join(__dirname + "/public") <- No aconsejado
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
  //   res.send('<h1>GET request to the homepage</h1>')
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/cursos", (req, res) => {
    res.render("cursos")
})

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
