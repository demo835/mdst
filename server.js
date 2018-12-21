const express = require("express")
const hbs = require("hbs")
const bodyParser = require("body-parser")
const methodOverride = require("method-override")

const app = express()

hbs.registerPartials(__dirname + "/views/partials")
//app.set("view engine", "hbs")
app.set('views', './views')
app.set('view engine', 'pug')


app.use(express.static('public/images'))
app.use(express.static('public/css'))
app.use(express.static('public/javascript'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride("_method"))

//routes
app.use(require("./routes/app.js"))

// app.use(express.static('views/images')); 

// app.listen(3000, () => console.log("server is running"));

app.set('port', process.env.PORT || 5001)

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`)
})