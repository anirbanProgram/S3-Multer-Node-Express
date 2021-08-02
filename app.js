const express = require('express')
const dotenv = require('dotenv')

const app = express()
dotenv.config()

app.set('port', process.env.PORT || 3000)

const uploadRouter = require('./routes/uploadRoute')
app.use('/upload', uploadRouter)

app.listen(app.get('port'), () => {
    console.log('Server started at port ' + app.get('port'))
})

module.exports = app