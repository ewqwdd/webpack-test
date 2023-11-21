const fs = require('fs')
const jsonServer = require('json-server')
const path = require('path')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()

const dbPath = path.resolve(__dirname, 'db.json')
const router = jsonServer.router(dbPath)
server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})

server.use(async(req, res, next) => {
    await new Promise(
      (resolve)=>{
          setTimeout(resolve, 800)
      })
    next()
  })

server.use((req, res, next) => {
    if(!req.headers.authorization) {
        return res.status(403).json({ message: 'AUTH ERROR' })
    }
    next()
})

server.use(jsonServer.bodyParser)
server.use(router)

server.post('/login', (req, res) => {
    const { username, password } = req.body
    if(!username || !password) {
        return res.status(403).json({ message: 'AUTH ERROR' })
    }
    const db = JSON.parse(fs.readFileSync(dbPath), 'UTF-8')
    const { users } = db
    const userFound = users.find((elem) => elem.username === username && elem.password === password)

    if(userFound) {
        return res.json(userFound)
    }
    return res.status(403).json({ message: 'AUTH ERROR' })
})

server.listen(8000 , () => {
  console.log('JSON Server is running')
})