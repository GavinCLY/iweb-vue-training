const WebpackServer = require('websocket').server
const http = require('http')

var socket = new WebpackServer({
  httpServer: http.createServer().listen(8008, '192.168.1.26')
})

console.log('server started at http://192.168.1.26:8008')

let cache = {
  connections: [],
  userList: [],
  msgList: []
}
socket.on('request', function (request) {
  var connection = request.accept(null, request.origin)
  let uid = request.resourceURL.query.uid
  let name = request.resourceURL.query.name
  connection.__uid = uid
  cache.connections.push(connection)
  cache.userList.push({
    uid: uid,
    name: name
  })
  broadcast(name, 'join', cache.userList)
  broadcast(name, 'history', cache.msgList)

  connection.on('message', function (message) {
    console.log(message.utf8Data)
    let msg = JSON.parse(message.utf8Data)
    cache.msgList.push(msg)
    broadcast(msg.from, 'message', msg.data)
  })

  connection.on('close', function (conn) {
    console.log(conn)
    console.log('connection closed', conn.__uid)

    cache.userList = cache.userList.filter(item => {
      return item.uid !== conn.__uid
    })
  })
})

function broadcast (from, type, data) {
  let message = {
    from: from,
    type: type,
    data: data
  }
  cache.connections.map(item => {
    item.sendUTF(JSON.stringify(message))
  })
}
