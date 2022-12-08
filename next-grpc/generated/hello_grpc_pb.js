// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var hello_pb = require('./hello_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_Hello_HelloRequest(arg) {
  if (!(arg instanceof hello_pb.HelloRequest)) {
    throw new Error('Expected argument of type Hello.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Hello_HelloRequest(buffer_arg) {
  return hello_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Hello_HelloResponse(arg) {
  if (!(arg instanceof hello_pb.HelloResponse)) {
    throw new Error('Expected argument of type Hello.HelloResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Hello_HelloResponse(buffer_arg) {
  return hello_pb.HelloResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var HelloService = exports.HelloService = {
  sayHello: {
    path: '/Hello.Hello/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: hello_pb.HelloRequest,
    responseType: hello_pb.HelloResponse,
    requestSerialize: serialize_Hello_HelloRequest,
    requestDeserialize: deserialize_Hello_HelloRequest,
    responseSerialize: serialize_Hello_HelloResponse,
    responseDeserialize: deserialize_Hello_HelloResponse,
  },
};

exports.HelloClient = grpc.makeGenericClientConstructor(HelloService);
