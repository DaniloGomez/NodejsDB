// Constantes de configuración del puerto por el que se ejecutara el proyecto
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const userRoute = require('./routes/user')
// Constantes de configuración de conexión con la base de datos
const mongoose = require('mongoose')
require('dotenv').config()
// Prueba de conexión por el puerto indicado
app.listen(port,()=>console.log('Listening por el puerto', port))
// localhost:3000/
app.get('/',(req,res)=>res.send('Bienvenido al index del proyecto'))
// Método de conexión con la base de datos
mongoose
.connect(process.env.MONGODB_CONNECTION_STRING)
.then(() => console.log('Conectados con mongoDB Atlas'))
.catch((error) => console.log(error))
// Middleware: URI de conexión para probar los request(GET, POST,DELETE, PUT)
app.use(express.json())
//localhost:3000/api/users
app.use('/api', userRoute)