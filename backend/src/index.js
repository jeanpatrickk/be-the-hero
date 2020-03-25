const express = require('express') /* express referencia uma bibilioteca*/
const routes = require('./routes') /* ./routes com o ponto antes referencia um arquivo*/
const cors = require('cors') /* limitando quem pode acessar nossa api */

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)


app.listen(3333);