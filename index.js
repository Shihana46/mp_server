// import json server

const jsonServer=require('json-server')

// create server for media player application

const Mpserver=jsonServer.create()

// create middleware

const middlwware=jsonServer.defaults()

// set up route for json file in server

const route=jsonServer.router('db.json')

// set port for running server app

const PORT=process.env.PORT || 3000

Mpserver.use(middlwware)

Mpserver.use(route)

Mpserver.listen(PORT,()=>{

    console.log(`mediaplayer server running at port ${PORT} and waiting for client request`);
    
})