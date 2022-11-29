import express from 'express'
import cors from 'cors'
import Trainers from './routes/TrainersRoute.js'
import Teams from './routes/TeamRoute.js'
import Place from './routes/PlaceRoute.js'
import Food from './routes/foodRoute.js'

const app = express();
app.use(cors())
app.use(express.json())

app.use(Trainers)
app.use(Teams)
app.use(Place)
app.use(Food)

app.listen(5000, ()=> console.log('server up and running...'))