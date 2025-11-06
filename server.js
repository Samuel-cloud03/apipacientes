// // Para manejar mis peticiones HTTP
// const express = require('express');
// // Para conectar con mongo
// const mongoose = require('mongoose');
// // Para hacer parseo de lo que envio desde formulario
// const bodyParser = require('body-parser');
// // Para conectar Back end con front end
// const cors = require('cors');

// //Este metodo me crea una instancia de express, en app se guardan la peticiones HTTP que haremos
// const app = express();

// // Reciibira peticiones en formato JSON
// app.use(bodyParser.json());
// // Lo usamos para conectarnos con nuestro front end
// app.use(cors());

// // Dentro de '' va la ubicacion de la database, y sera en arreglo
// // mongoose.connect('mongodb://localhost:27017/sistema-clinica',{
// //     useNewURLParser: true, //Le decimos a moongose que use el nuevo analizador de URL
// //     useUnifiedTopology: true
// // });
// mongoose.connect('mongodb://localhost:27017/sistema-clinica')
//     .then(() => console.log("Conexion a MongoDB exitosa"))
//     .catch(err => console.log("Error al conectar a MongoDB: ", err));

// //RUTAS
// const authRoutes = require('./routes/auth');
// app.use('/api/auth', authRoutes);

// // Configurar puerto para backend
// // Usamos el 5000 porque es el puerto para desaroollo
// // Usamos el process.env.PORT para ocultar el puerto sino ya va por defecto 5000
// const port = process.env.PORT || 5000;
// app.listen(port, () =>{
//     console.log(`Servidor ejecutandose en el puerto ${port}`);
// });


//////////////////////DESPUES DE LA SEMANA 10
// Para manejar mis peticiones HTTP
const express = require('express');
// Para conectar con mongo
const mongoose = require('mongoose');
// Para hacer parseo de lo que envio desde formulario
const bodyParser = require('body-parser');
// Para conectar Back end con front end
const cors = require('cors');

//Este metodo me crea una instancia de express, en app se guardan la peticiones HTTP que haremos
const app = express();

// Reciibira peticiones en formato JSON
app.use(bodyParser.json());
// Lo usamos para conectarnos con nuestro front end
app.use(cors());

// Dentro de '' va la ubicacion de la database, y sera en arreglo
// mongoose.connect('mongodb://localhost:27017/sistema-clinica',{
//     useNewURLParser: true, //Le decimos a moongose que use el nuevo analizador de URL
//     useUnifiedTopology: true
// });
// mongoose.connect('mongodb://localhost:27017/sistema-clinica')
mongoose.connect(process.env.MONGODB_URI,
    {useNewUrlParser: true, useUnifiedTopology: true}
)
    
    .then(() => console.log("Conexion a MongoDB exitosa"))
    .catch(err => console.log("Error al conectar a MongoDB: ", err));

//RUTAS DE LA API
// rutas para pacientes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);
// ruta para autentificacion
const pacienteRoutes = require('./routes/paciente');
app.use('/api/pacientes', pacienteRoutes);

// Configurar puerto para backend
// Usamos el 5000 porque es el puerto para desaroollo
// Usamos el process.env.PORT para ocultar el puerto sino ya va por defecto 5000
const port = process.env.PORT || 5000;
app.listen(port, () =>{
    console.log(`Servidor ejecutandose en el puerto ${port}`);
});