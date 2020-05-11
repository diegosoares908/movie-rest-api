const app = require('./app')
const mongoose = require('./src/database/config')

app.set('port', 5555)

const server = app.listen(app.get('port'), () => {
    console.log('Server running on port: ', server.address().port)
})