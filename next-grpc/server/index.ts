import { HelloRequest, HelloResponse } from '../generated/hello_pb'
import { HelloService } from '../generated/hello_grpc_pb'
import { sendUnaryData, Server, ServerCredentials, ServerUnaryCall } from '@grpc/grpc-js'

const hello = ''

const getHello = (call: ServerUnaryCall<void, HelloResponse>, callback: sendUnaryData<HelloResponse>) => {
  const res = new HelloResponse()
  res.setReply(hello)

  callback(null, res)
}

const addPost = (call: ServerUnaryCall<HelloRequest, void>, callback: sendUnaryData<HelloRequest>) => {
  const res = new HelloRequest()
  res.setGreeting(hello)
  callback(null, res)
}

const startServer = () => {
  const server = new Server()
  // TODO: Fix
  server.addService(HelloService, { sayHello })
  server.bindAsync(`0.0.0.0:8888`, ServerCredentials.createInsecure(), (error, port) => {
    if (error) {
      console.error(error)
    }

    server.start()
    console.log(`server start listing on port ${port}`)
  })
}
