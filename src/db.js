const mongoose = require('mongoose');
//con el metodo connect le  damos la ruta de donde se encuentra la base de datos.
//En mongo DB no necesitamos crear una base de datos antes para utilizarla, este la creará.
mongoose.connect('mongodb://localhost/order-list', {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })

  //Mensajes de succes y err en caso de que la db falle o funcione como de sebe.
  .then(db => console.log('DB IS CONECTED'))
  .catch(err => console.log(err));
