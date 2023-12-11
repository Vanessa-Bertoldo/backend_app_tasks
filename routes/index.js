const bodyParser  = require('body-parser')

const user        = require("./userRoute")
const task        = require("./taskRoute")
const auth        = require("./authRouter")

module.exports = app => {
  app.use(
    bodyParser.json(),
    auth,
    user,
    task
  )
}