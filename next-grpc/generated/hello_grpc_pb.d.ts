// package: Hello
// file: hello.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as hello_pb from "./hello_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IHelloService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IHelloService_ISayHello;
}

interface IHelloService_ISayHello extends grpc.MethodDefinition<hello_pb.HelloRequest, hello_pb.HelloResponse> {
    path: "/Hello.Hello/SayHello";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<hello_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<hello_pb.HelloRequest>;
    responseSerialize: grpc.serialize<hello_pb.HelloResponse>;
    responseDeserialize: grpc.deserialize<hello_pb.HelloResponse>;
}

export const HelloService: IHelloService;

export interface IHelloServer {
    sayHello: grpc.handleUnaryCall<hello_pb.HelloRequest, hello_pb.HelloResponse>;
}

export interface IHelloClient {
    sayHello(request: hello_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    sayHello(request: hello_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    sayHello(request: hello_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
}

export class HelloClient extends grpc.Client implements IHelloClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sayHello(request: hello_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public sayHello(request: hello_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public sayHello(request: hello_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
}
