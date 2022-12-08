import express from 'express'
import cors from 'cors'
import Trainers from './routes/TrainersRoute.js'
import Teams from './routes/TeamRoute.js'
import Place from './routes/PlaceRoute.js'
import Food from './routes/foodRoute.js'

const app = express();
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())

app.use(Trainers)
app.use(Teams)
app.use(Place)
app.use(Food)

app.listen(port, ()=> console.log(`server up and running on port ${port}`))