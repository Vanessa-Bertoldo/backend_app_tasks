const bodyParser  = require('body-parser')

const user        = require("./userRoute")
const task        = require("./taskRoute")

module.exports = app => {
  app.use(
    bodyParser.json(),
    user,
    task
  )
}