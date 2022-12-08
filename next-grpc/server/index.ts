import { UserRequest, UserResponse, User } from '../generated/user_pb'
import { UserManageService } from '../generated/user_grpc_pb'
import { sendUnaryData, Server, ServerCredentials, ServerUnaryCall } from '@grpc/grpc-js'

const users = new Map([
  [1, { id: 1, name: 'Billie' }],
  [2, { id: 2, name: 'Mike' }],
  [3, { id: 3, name: 'Tore' }],
])

const getUser = (call: ServerUnaryCall<UserRequest, UserResponse>, callback: sendUnaryData<UserResponse>) => {
  const requestId = call.request.getId()
  const targetedUser = users.get(requestId)
  const res = new UserResponse()
  if (!targetedUser) {
    throw new Error('User is not found.')
  }
  const user = new User()
  user.setId(targetedUser.id)
  user.setName(targetedUser.name)
  res.setUser(user)
  callback(null, res)
}

const startServer = () => {
  const server = new Server()
  // TODO: Fix
  server.addService(UserManageService, { getUser })
  server.bindAsync(`0.0.0.0:8888`, ServerCredentials.createInsecure(), (error, port) => {
    if (error) {
      console.error(error)
    }

    server.start()
    console.log(`server start listing on port ${port}`)
  })
}
