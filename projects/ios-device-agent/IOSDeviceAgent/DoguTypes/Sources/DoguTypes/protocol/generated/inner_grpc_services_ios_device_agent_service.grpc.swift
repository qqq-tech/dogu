//
// DO NOT EDIT.
//
// Generated by the protocol buffer compiler.
// Source: inner/grpc/services/ios_device_agent_service.proto
//

//
// Copyright 2018, gRPC Authors All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
import GRPC
import NIO
import NIOConcurrencyHelpers
import SwiftProtobuf


/// Usage: instantiate `Inner_Grpc_Services_IosDeviceAgentServiceClient`, then call methods of this protocol to make API calls.
public protocol Inner_Grpc_Services_IosDeviceAgentServiceClientProtocol: GRPCClient {
  var serviceName: String { get }
  var interceptors: Inner_Grpc_Services_IosDeviceAgentServiceClientInterceptorFactoryProtocol? { get }

  func relay(
    callOptions: CallOptions?,
    handler: @escaping (Inner_Params_CfGdcDaResultList) -> Void
  ) -> BidirectionalStreamingCall<Inner_Params_CfGdcDaParamList, Inner_Params_CfGdcDaResultList>

  func checkHealth(
    _ request: SwiftProtobuf.Google_Protobuf_Empty,
    callOptions: CallOptions?
  ) -> UnaryCall<SwiftProtobuf.Google_Protobuf_Empty, SwiftProtobuf.Google_Protobuf_Empty>

  func call(
    _ request: Inner_Params_DcIdaParam,
    callOptions: CallOptions?
  ) -> UnaryCall<Inner_Params_DcIdaParam, Inner_Params_DcIdaResult>
}

extension Inner_Grpc_Services_IosDeviceAgentServiceClientProtocol {
  public var serviceName: String {
    return "inner.grpc.services.IosDeviceAgentService"
  }

  /// Bidirectional streaming call to Relay
  ///
  /// Callers should use the `send` method on the returned object to send messages
  /// to the server. The caller should send an `.end` after the final message has been sent.
  ///
  /// - Parameters:
  ///   - callOptions: Call options.
  ///   - handler: A closure called when each response is received from the server.
  /// - Returns: A `ClientStreamingCall` with futures for the metadata and status.
  public func relay(
    callOptions: CallOptions? = nil,
    handler: @escaping (Inner_Params_CfGdcDaResultList) -> Void
  ) -> BidirectionalStreamingCall<Inner_Params_CfGdcDaParamList, Inner_Params_CfGdcDaResultList> {
    return self.makeBidirectionalStreamingCall(
      path: Inner_Grpc_Services_IosDeviceAgentServiceClientMetadata.Methods.relay.path,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeRelayInterceptors() ?? [],
      handler: handler
    )
  }

  /// Unary call to CheckHealth
  ///
  /// - Parameters:
  ///   - request: Request to send to CheckHealth.
  ///   - callOptions: Call options.
  /// - Returns: A `UnaryCall` with futures for the metadata, status and response.
  public func checkHealth(
    _ request: SwiftProtobuf.Google_Protobuf_Empty,
    callOptions: CallOptions? = nil
  ) -> UnaryCall<SwiftProtobuf.Google_Protobuf_Empty, SwiftProtobuf.Google_Protobuf_Empty> {
    return self.makeUnaryCall(
      path: Inner_Grpc_Services_IosDeviceAgentServiceClientMetadata.Methods.checkHealth.path,
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeCheckHealthInterceptors() ?? []
    )
  }

  /// Unary call to Call
  ///
  /// - Parameters:
  ///   - request: Request to send to Call.
  ///   - callOptions: Call options.
  /// - Returns: A `UnaryCall` with futures for the metadata, status and response.
  public func call(
    _ request: Inner_Params_DcIdaParam,
    callOptions: CallOptions? = nil
  ) -> UnaryCall<Inner_Params_DcIdaParam, Inner_Params_DcIdaResult> {
    return self.makeUnaryCall(
      path: Inner_Grpc_Services_IosDeviceAgentServiceClientMetadata.Methods.call.path,
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeCallInterceptors() ?? []
    )
  }
}

#if compiler(>=5.6)
@available(*, deprecated)
extension Inner_Grpc_Services_IosDeviceAgentServiceClient: @unchecked Sendable {}
#endif // compiler(>=5.6)

@available(*, deprecated, renamed: "Inner_Grpc_Services_IosDeviceAgentServiceNIOClient")
public final class Inner_Grpc_Services_IosDeviceAgentServiceClient: Inner_Grpc_Services_IosDeviceAgentServiceClientProtocol {
  private let lock = Lock()
  private var _defaultCallOptions: CallOptions
  private var _interceptors: Inner_Grpc_Services_IosDeviceAgentServiceClientInterceptorFactoryProtocol?
  public let channel: GRPCChannel
  public var defaultCallOptions: CallOptions {
    get { self.lock.withLock { return self._defaultCallOptions } }
    set { self.lock.withLockVoid { self._defaultCallOptions = newValue } }
  }
  public var interceptors: Inner_Grpc_Services_IosDeviceAgentServiceClientInterceptorFactoryProtocol? {
    get { self.lock.withLock { return self._interceptors } }
    set { self.lock.withLockVoid { self._interceptors = newValue } }
  }

  /// Creates a client for the inner.grpc.services.IosDeviceAgentService service.
  ///
  /// - Parameters:
  ///   - channel: `GRPCChannel` to the service host.
  ///   - defaultCallOptions: Options to use for each service call if the user doesn't provide them.
  ///   - interceptors: A factory providing interceptors for each RPC.
  public init(
    channel: GRPCChannel,
    defaultCallOptions: CallOptions = CallOptions(),
    interceptors: Inner_Grpc_Services_IosDeviceAgentServiceClientInterceptorFactoryProtocol? = nil
  ) {
    self.channel = channel
    self._defaultCallOptions = defaultCallOptions
    self._interceptors = interceptors
  }
}

public struct Inner_Grpc_Services_IosDeviceAgentServiceNIOClient: Inner_Grpc_Services_IosDeviceAgentServiceClientProtocol {
  public var channel: GRPCChannel
  public var defaultCallOptions: CallOptions
  public var interceptors: Inner_Grpc_Services_IosDeviceAgentServiceClientInterceptorFactoryProtocol?

  /// Creates a client for the inner.grpc.services.IosDeviceAgentService service.
  ///
  /// - Parameters:
  ///   - channel: `GRPCChannel` to the service host.
  ///   - defaultCallOptions: Options to use for each service call if the user doesn't provide them.
  ///   - interceptors: A factory providing interceptors for each RPC.
  public init(
    channel: GRPCChannel,
    defaultCallOptions: CallOptions = CallOptions(),
    interceptors: Inner_Grpc_Services_IosDeviceAgentServiceClientInterceptorFactoryProtocol? = nil
  ) {
    self.channel = channel
    self.defaultCallOptions = defaultCallOptions
    self.interceptors = interceptors
  }
}

#if compiler(>=5.6)
@available(macOS 10.15, iOS 13, tvOS 13, watchOS 6, *)
public protocol Inner_Grpc_Services_IosDeviceAgentServiceAsyncClientProtocol: GRPCClient {
  static var serviceDescriptor: GRPCServiceDescriptor { get }
  var interceptors: Inner_Grpc_Services_IosDeviceAgentServiceClientInterceptorFactoryProtocol? { get }

  func makeRelayCall(
    callOptions: CallOptions?
  ) -> GRPCAsyncBidirectionalStreamingCall<Inner_Params_CfGdcDaParamList, Inner_Params_CfGdcDaResultList>

  func makeCheckHealthCall(
    _ request: SwiftProtobuf.Google_Protobuf_Empty,
    callOptions: CallOptions?
  ) -> GRPCAsyncUnaryCall<SwiftProtobuf.Google_Protobuf_Empty, SwiftProtobuf.Google_Protobuf_Empty>

  func makeCallCall(
    _ request: Inner_Params_DcIdaParam,
    callOptions: CallOptions?
  ) -> GRPCAsyncUnaryCall<Inner_Params_DcIdaParam, Inner_Params_DcIdaResult>
}

@available(macOS 10.15, iOS 13, tvOS 13, watchOS 6, *)
extension Inner_Grpc_Services_IosDeviceAgentServiceAsyncClientProtocol {
  public static var serviceDescriptor: GRPCServiceDescriptor {
    return Inner_Grpc_Services_IosDeviceAgentServiceClientMetadata.serviceDescriptor
  }

  public var interceptors: Inner_Grpc_Services_IosDeviceAgentServiceClientInterceptorFactoryProtocol? {
    return nil
  }

  public func makeRelayCall(
    callOptions: CallOptions? = nil
  ) -> GRPCAsyncBidirectionalStreamingCall<Inner_Params_CfGdcDaParamList, Inner_Params_CfGdcDaResultList> {
    return self.makeAsyncBidirectionalStreamingCall(
      path: Inner_Grpc_Services_IosDeviceAgentServiceClientMetadata.Methods.relay.path,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeRelayInterceptors() ?? []
    )
  }

  public func makeCheckHealthCall(
    _ request: SwiftProtobuf.Google_Protobuf_Empty,
    callOptions: CallOptions? = nil
  ) -> GRPCAsyncUnaryCall<SwiftProtobuf.Google_Protobuf_Empty, SwiftProtobuf.Google_Protobuf_Empty> {
    return self.makeAsyncUnaryCall(
      path: Inner_Grpc_Services_IosDeviceAgentServiceClientMetadata.Methods.checkHealth.path,
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeCheckHealthInterceptors() ?? []
    )
  }

  public func makeCallCall(
    _ request: Inner_Params_DcIdaParam,
    callOptions: CallOptions? = nil
  ) -> GRPCAsyncUnaryCall<Inner_Params_DcIdaParam, Inner_Params_DcIdaResult> {
    return self.makeAsyncUnaryCall(
      path: Inner_Grpc_Services_IosDeviceAgentServiceClientMetadata.Methods.call.path,
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeCallInterceptors() ?? []
    )
  }
}

@available(macOS 10.15, iOS 13, tvOS 13, watchOS 6, *)
extension Inner_Grpc_Services_IosDeviceAgentServiceAsyncClientProtocol {
  public func relay<RequestStream>(
    _ requests: RequestStream,
    callOptions: CallOptions? = nil
  ) -> GRPCAsyncResponseStream<Inner_Params_CfGdcDaResultList> where RequestStream: Sequence, RequestStream.Element == Inner_Params_CfGdcDaParamList {
    return self.performAsyncBidirectionalStreamingCall(
      path: Inner_Grpc_Services_IosDeviceAgentServiceClientMetadata.Methods.relay.path,
      requests: requests,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeRelayInterceptors() ?? []
    )
  }

  public func relay<RequestStream>(
    _ requests: RequestStream,
    callOptions: CallOptions? = nil
  ) -> GRPCAsyncResponseStream<Inner_Params_CfGdcDaResultList> where RequestStream: AsyncSequence & Sendable, RequestStream.Element == Inner_Params_CfGdcDaParamList {
    return self.performAsyncBidirectionalStreamingCall(
      path: Inner_Grpc_Services_IosDeviceAgentServiceClientMetadata.Methods.relay.path,
      requests: requests,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeRelayInterceptors() ?? []
    )
  }

  public func checkHealth(
    _ request: SwiftProtobuf.Google_Protobuf_Empty,
    callOptions: CallOptions? = nil
  ) async throws -> SwiftProtobuf.Google_Protobuf_Empty {
    return try await self.performAsyncUnaryCall(
      path: Inner_Grpc_Services_IosDeviceAgentServiceClientMetadata.Methods.checkHealth.path,
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeCheckHealthInterceptors() ?? []
    )
  }

  public func call(
    _ request: Inner_Params_DcIdaParam,
    callOptions: CallOptions? = nil
  ) async throws -> Inner_Params_DcIdaResult {
    return try await self.performAsyncUnaryCall(
      path: Inner_Grpc_Services_IosDeviceAgentServiceClientMetadata.Methods.call.path,
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeCallInterceptors() ?? []
    )
  }
}

@available(macOS 10.15, iOS 13, tvOS 13, watchOS 6, *)
public struct Inner_Grpc_Services_IosDeviceAgentServiceAsyncClient: Inner_Grpc_Services_IosDeviceAgentServiceAsyncClientProtocol {
  public var channel: GRPCChannel
  public var defaultCallOptions: CallOptions
  public var interceptors: Inner_Grpc_Services_IosDeviceAgentServiceClientInterceptorFactoryProtocol?

  public init(
    channel: GRPCChannel,
    defaultCallOptions: CallOptions = CallOptions(),
    interceptors: Inner_Grpc_Services_IosDeviceAgentServiceClientInterceptorFactoryProtocol? = nil
  ) {
    self.channel = channel
    self.defaultCallOptions = defaultCallOptions
    self.interceptors = interceptors
  }
}

#endif // compiler(>=5.6)

public protocol Inner_Grpc_Services_IosDeviceAgentServiceClientInterceptorFactoryProtocol: GRPCSendable {

  /// - Returns: Interceptors to use when invoking 'relay'.
  func makeRelayInterceptors() -> [ClientInterceptor<Inner_Params_CfGdcDaParamList, Inner_Params_CfGdcDaResultList>]

  /// - Returns: Interceptors to use when invoking 'checkHealth'.
  func makeCheckHealthInterceptors() -> [ClientInterceptor<SwiftProtobuf.Google_Protobuf_Empty, SwiftProtobuf.Google_Protobuf_Empty>]

  /// - Returns: Interceptors to use when invoking 'call'.
  func makeCallInterceptors() -> [ClientInterceptor<Inner_Params_DcIdaParam, Inner_Params_DcIdaResult>]
}

public enum Inner_Grpc_Services_IosDeviceAgentServiceClientMetadata {
  public static let serviceDescriptor = GRPCServiceDescriptor(
    name: "IosDeviceAgentService",
    fullName: "inner.grpc.services.IosDeviceAgentService",
    methods: [
      Inner_Grpc_Services_IosDeviceAgentServiceClientMetadata.Methods.relay,
      Inner_Grpc_Services_IosDeviceAgentServiceClientMetadata.Methods.checkHealth,
      Inner_Grpc_Services_IosDeviceAgentServiceClientMetadata.Methods.call,
    ]
  )

  public enum Methods {
    public static let relay = GRPCMethodDescriptor(
      name: "Relay",
      path: "/inner.grpc.services.IosDeviceAgentService/Relay",
      type: GRPCCallType.bidirectionalStreaming
    )

    public static let checkHealth = GRPCMethodDescriptor(
      name: "CheckHealth",
      path: "/inner.grpc.services.IosDeviceAgentService/CheckHealth",
      type: GRPCCallType.unary
    )

    public static let call = GRPCMethodDescriptor(
      name: "Call",
      path: "/inner.grpc.services.IosDeviceAgentService/Call",
      type: GRPCCallType.unary
    )
  }
}

/// To build a server, implement a class that conforms to this protocol.
public protocol Inner_Grpc_Services_IosDeviceAgentServiceProvider: CallHandlerProvider {
  var interceptors: Inner_Grpc_Services_IosDeviceAgentServiceServerInterceptorFactoryProtocol? { get }

  func relay(context: StreamingResponseCallContext<Inner_Params_CfGdcDaResultList>) -> EventLoopFuture<(StreamEvent<Inner_Params_CfGdcDaParamList>) -> Void>

  func checkHealth(request: SwiftProtobuf.Google_Protobuf_Empty, context: StatusOnlyCallContext) -> EventLoopFuture<SwiftProtobuf.Google_Protobuf_Empty>

  func call(request: Inner_Params_DcIdaParam, context: StatusOnlyCallContext) -> EventLoopFuture<Inner_Params_DcIdaResult>
}

extension Inner_Grpc_Services_IosDeviceAgentServiceProvider {
  public var serviceName: Substring {
    return Inner_Grpc_Services_IosDeviceAgentServiceServerMetadata.serviceDescriptor.fullName[...]
  }

  /// Determines, calls and returns the appropriate request handler, depending on the request's method.
  /// Returns nil for methods not handled by this service.
  public func handle(
    method name: Substring,
    context: CallHandlerContext
  ) -> GRPCServerHandlerProtocol? {
    switch name {
    case "Relay":
      return BidirectionalStreamingServerHandler(
        context: context,
        requestDeserializer: ProtobufDeserializer<Inner_Params_CfGdcDaParamList>(),
        responseSerializer: ProtobufSerializer<Inner_Params_CfGdcDaResultList>(),
        interceptors: self.interceptors?.makeRelayInterceptors() ?? [],
        observerFactory: self.relay(context:)
      )

    case "CheckHealth":
      return UnaryServerHandler(
        context: context,
        requestDeserializer: ProtobufDeserializer<SwiftProtobuf.Google_Protobuf_Empty>(),
        responseSerializer: ProtobufSerializer<SwiftProtobuf.Google_Protobuf_Empty>(),
        interceptors: self.interceptors?.makeCheckHealthInterceptors() ?? [],
        userFunction: self.checkHealth(request:context:)
      )

    case "Call":
      return UnaryServerHandler(
        context: context,
        requestDeserializer: ProtobufDeserializer<Inner_Params_DcIdaParam>(),
        responseSerializer: ProtobufSerializer<Inner_Params_DcIdaResult>(),
        interceptors: self.interceptors?.makeCallInterceptors() ?? [],
        userFunction: self.call(request:context:)
      )

    default:
      return nil
    }
  }
}

#if compiler(>=5.6)

/// To implement a server, implement an object which conforms to this protocol.
@available(macOS 10.15, iOS 13, tvOS 13, watchOS 6, *)
public protocol Inner_Grpc_Services_IosDeviceAgentServiceAsyncProvider: CallHandlerProvider {
  static var serviceDescriptor: GRPCServiceDescriptor { get }
  var interceptors: Inner_Grpc_Services_IosDeviceAgentServiceServerInterceptorFactoryProtocol? { get }

  @Sendable func relay(
    requestStream: GRPCAsyncRequestStream<Inner_Params_CfGdcDaParamList>,
    responseStream: GRPCAsyncResponseStreamWriter<Inner_Params_CfGdcDaResultList>,
    context: GRPCAsyncServerCallContext
  ) async throws

  @Sendable func checkHealth(
    request: SwiftProtobuf.Google_Protobuf_Empty,
    context: GRPCAsyncServerCallContext
  ) async throws -> SwiftProtobuf.Google_Protobuf_Empty

  @Sendable func call(
    request: Inner_Params_DcIdaParam,
    context: GRPCAsyncServerCallContext
  ) async throws -> Inner_Params_DcIdaResult
}

@available(macOS 10.15, iOS 13, tvOS 13, watchOS 6, *)
extension Inner_Grpc_Services_IosDeviceAgentServiceAsyncProvider {
  public static var serviceDescriptor: GRPCServiceDescriptor {
    return Inner_Grpc_Services_IosDeviceAgentServiceServerMetadata.serviceDescriptor
  }

  public var serviceName: Substring {
    return Inner_Grpc_Services_IosDeviceAgentServiceServerMetadata.serviceDescriptor.fullName[...]
  }

  public var interceptors: Inner_Grpc_Services_IosDeviceAgentServiceServerInterceptorFactoryProtocol? {
    return nil
  }

  public func handle(
    method name: Substring,
    context: CallHandlerContext
  ) -> GRPCServerHandlerProtocol? {
    switch name {
    case "Relay":
      return GRPCAsyncServerHandler(
        context: context,
        requestDeserializer: ProtobufDeserializer<Inner_Params_CfGdcDaParamList>(),
        responseSerializer: ProtobufSerializer<Inner_Params_CfGdcDaResultList>(),
        interceptors: self.interceptors?.makeRelayInterceptors() ?? [],
        wrapping: self.relay(requestStream:responseStream:context:)
      )

    case "CheckHealth":
      return GRPCAsyncServerHandler(
        context: context,
        requestDeserializer: ProtobufDeserializer<SwiftProtobuf.Google_Protobuf_Empty>(),
        responseSerializer: ProtobufSerializer<SwiftProtobuf.Google_Protobuf_Empty>(),
        interceptors: self.interceptors?.makeCheckHealthInterceptors() ?? [],
        wrapping: self.checkHealth(request:context:)
      )

    case "Call":
      return GRPCAsyncServerHandler(
        context: context,
        requestDeserializer: ProtobufDeserializer<Inner_Params_DcIdaParam>(),
        responseSerializer: ProtobufSerializer<Inner_Params_DcIdaResult>(),
        interceptors: self.interceptors?.makeCallInterceptors() ?? [],
        wrapping: self.call(request:context:)
      )

    default:
      return nil
    }
  }
}

#endif // compiler(>=5.6)

public protocol Inner_Grpc_Services_IosDeviceAgentServiceServerInterceptorFactoryProtocol {

  /// - Returns: Interceptors to use when handling 'relay'.
  ///   Defaults to calling `self.makeInterceptors()`.
  func makeRelayInterceptors() -> [ServerInterceptor<Inner_Params_CfGdcDaParamList, Inner_Params_CfGdcDaResultList>]

  /// - Returns: Interceptors to use when handling 'checkHealth'.
  ///   Defaults to calling `self.makeInterceptors()`.
  func makeCheckHealthInterceptors() -> [ServerInterceptor<SwiftProtobuf.Google_Protobuf_Empty, SwiftProtobuf.Google_Protobuf_Empty>]

  /// - Returns: Interceptors to use when handling 'call'.
  ///   Defaults to calling `self.makeInterceptors()`.
  func makeCallInterceptors() -> [ServerInterceptor<Inner_Params_DcIdaParam, Inner_Params_DcIdaResult>]
}

public enum Inner_Grpc_Services_IosDeviceAgentServiceServerMetadata {
  public static let serviceDescriptor = GRPCServiceDescriptor(
    name: "IosDeviceAgentService",
    fullName: "inner.grpc.services.IosDeviceAgentService",
    methods: [
      Inner_Grpc_Services_IosDeviceAgentServiceServerMetadata.Methods.relay,
      Inner_Grpc_Services_IosDeviceAgentServiceServerMetadata.Methods.checkHealth,
      Inner_Grpc_Services_IosDeviceAgentServiceServerMetadata.Methods.call,
    ]
  )

  public enum Methods {
    public static let relay = GRPCMethodDescriptor(
      name: "Relay",
      path: "/inner.grpc.services.IosDeviceAgentService/Relay",
      type: GRPCCallType.bidirectionalStreaming
    )

    public static let checkHealth = GRPCMethodDescriptor(
      name: "CheckHealth",
      path: "/inner.grpc.services.IosDeviceAgentService/CheckHealth",
      type: GRPCCallType.unary
    )

    public static let call = GRPCMethodDescriptor(
      name: "Call",
      path: "/inner.grpc.services.IosDeviceAgentService/Call",
      type: GRPCCallType.unary
    )
  }
}
