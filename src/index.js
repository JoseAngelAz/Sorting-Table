const express = require("express");
const path = require("path");
const engine = require("ejs-mate");

//inicialización
const app = express();
require("./db");

//settings
app.set("port", process.env.PORT || 2500);
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", engine);
app.set('view engine','ejs');

//middlewares
app.use(express.urlencoded({extended:false}));//extended false es para decirle que no vamos a recibir objetos pesados como imagenes o videos, solo datos.
app.use(express.json());//para que la app entienda json.



//routes
app.use(require('./routes/index'));
//static files
app.use(express.static(path.join(__dirname,'public')));



//starting server
app.listen(app.get("port"), () => {
  console.log(`SERVER ON PORT ${app.get("port")}`);
});
