import express from "express";
import {PORT} from './config.js'
import indexRoutes from './routes/index.routes.js'
import testRoutes from './routes/test.routes.js'

const app = express()

app.use(indexRoutes)
app.use(testRoutes)

app.listen(PORT)
console.log('server is running on server ' + PORT)