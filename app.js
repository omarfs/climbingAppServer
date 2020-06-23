import express from 'express'
import bodyParser from 'body-parser'
import graphqlHttp from 'express-graphql'
import mongoose from 'mongoose'
import graphqlSchema from './graphql/index'
import isAuth from './middleware/is-auth'

const app = express()

app.use(bodyParser.json())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }
  next()
})

app.use(isAuth)

app.use(
  '/graphql',
  graphqlHttp(req => ({
    schema: graphqlSchema,
    graphiql: true,
    context: { user: req.userId, isAuth: req.isAuth }
  }))
)

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-scaxe.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`).then(() => {
  app.listen(8000)
  console.log('listening on port 8000')
}).catch(
  (err) => {
    console.log(err)
  }
)
