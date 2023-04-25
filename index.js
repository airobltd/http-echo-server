const net = require("net");
const server = net.createServer((socket)=>{
    socket.write("Hello From Server!")
    socket.on("data",(data)=>{
        console.log(data.toString())
    });
    socket.on("close",()=>{
        console.log("Connection closed.!!!")
    })
});

const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
