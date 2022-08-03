const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {

  res.send('Hello World!')

})

app.listen(port, () => {

  console.log(`server is running at port ${port}`)})

function keepAlive() {

    const url = `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`

    if (/(\/\/|\.)undefined\./.test(url)) return

    setInterval(() => {

        fetch().catch(console.log)

    }, 30 * 1000) // 30 secs

}

// then you call the function

keepAlive()
