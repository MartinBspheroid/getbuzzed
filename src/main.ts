import express from 'express'
import { makeNewBuzz } from './makeNewBuzz'


const app = express()



app.get('/', (req, res) => {
    res.send(makeNewBuzz())


})

app.listen(3000, () => {
    console.log('Server running on port 3000')
}
)
