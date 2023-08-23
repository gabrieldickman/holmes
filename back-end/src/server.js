const app = require('./app.js')

require("dotenv").config(); // require for .env archive

const port = process.env.PORT; 

app.listen(port, () => console.log(`Servidor rodando na porta ${port}...`))