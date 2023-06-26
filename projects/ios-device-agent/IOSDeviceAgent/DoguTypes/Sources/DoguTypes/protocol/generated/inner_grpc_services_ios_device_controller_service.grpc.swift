//
// DO NOT EDIT.
//
// Generated by the protocol buffer compiler.
// Source: inner/grpc/services/ios_device_controller_service.proto
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


/// Usage: instantiate `Inner_Grpc_Services_IosDeviceControllerServiceClient`, then call methods of this protocol to make API calls.
public protocol Inner_Grpc_Services_IosDeviceControllerServiceClientProtocol: GRPCClient {
  var serviceName: String { get }
  var interceptors: Inner_Grpc_Services_IosDeviceControllerServiceClientInterceptorFactoryProtocol? { get }

  func call(
    _ request: Inner_Params_DcIdcParam,
    callOptions: CallOptions?
  ) -> UnaryCall<Inner_Params_DcIdcParam, Inner_Params_DcIdcResult>

  func startStreaming(
    _ request: Inner_Types_DcIdcStartStreamingParam,
    callOptions: CallOptions?,
    handler: @escaping (Inner_Types_DcIdcStartStreamingResult) -> Void
  ) -> ServerStreamingCall<Inner_Types_DcIdcStartStreamingParam, Inner_Types_DcIdcStartStreamingResult>
}

extension Inner_Grpc_Services_IosDeviceControllerServiceClientProtocol {
  public var serviceName: String {
    return "inner.grpc.services.IosDeviceControllerService"
  }

  /// Unary call to Call
  ///
  /// - Parameters:
  ///   - request: Request to send to Call.
  ///   - callOptions: Call options.
  /// - Returns: A `UnaryCall` with futures for the metadata, status and response.
  public func call(
    _ request: Inner_Params_DcIdcParam,
    callOptions: CallOptions? = nil
  ) -> UnaryCall<Inner_Params_DcIdcParam, Inner_Params_DcIdcResult> {
    return self.makeUnaryCall(
      path: Inner_Grpc_Services_IosDeviceControllerServiceClientMetadata.Methods.call.path,
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeCallInterceptors() ?? []
    )
  }

  /// Server streaming call to StartStreaming
  ///
  /// - Parameters:
  ///   - request: Request to send to StartStreaming.
  ///   - callOptions: Call options.
  ///   - handler: A closure called when each response is received from the server.
  /// - Returns: A `ServerStreamingCall` with futures for the metadata and status.
  public func startStreaming(
    _ request: Inner_Types_DcIdcStartStreamingParam,
    callOptions: CallOptions? = nil,
    handler: @escaping (Inner_Types_DcIdcStartStreamingResult) -> Void
  ) -> ServerStreamingCall<Inner_Types_DcIdcStartStreamingParam, Inner_Types_DcIdcStartStreamingResult> {
    return self.makeServerStreamingCall(
      path: Inner_Grpc_Services_IosDeviceControllerServiceClientMetadata.Methods.startStreaming.path,
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeStartStreamingInterceptors() ?? [],
      handler: handler
    )
  }
}

#if compiler(>=5.6)
@available(*, deprecated)
extension Inner_Grpc_Services_IosDeviceControllerServiceClient: @unchecked Sendable {}
#endif // compiler(>=5.6)

@available(*, deprecated, renamed: "Inner_Grpc_Services_IosDeviceControllerServiceNIOClient")
public final class Inner_Grpc_Services_IosDeviceControllerServiceClient: Inner_Grpc_Services_IosDeviceControllerServiceClientProtocol {
  private let lock = Lock()
  private var _defaultCallOptions: CallOptions
  private var _interceptors: Inner_Grpc_Services_IosDeviceControllerServiceClientInterceptorFactoryProtocol?
  public let channel: GRPCChannel
  public var defaultCallOptions: CallOptions {
    get { self.lock.withLock { return self._defaultCallOptions } }
    set { self.lock.withLockVoid { self._defaultCallOptions = newValue } }
  }
  public var interceptors: Inner_Grpc_Services_IosDeviceControllerServiceClientInterceptorFactoryProtocol? {
    get { self.lock.withLock { return self._interceptors } }
    set { self.lock.withLockVoid { self._interceptors = newValue } }
  }

  /// Creates a client for the inner.grpc.services.IosDeviceControllerService service.
  ///
  /// - Parameters:
  ///   - channel: `GRPCChannel` to the service host.
  ///   - defaultCallOptions: Options to use for each service call if the user doesn't provide them.
  ///   - interceptors: A factory providing interceptors for each RPC.
  public init(
    channel: GRPCChannel,
    defaultCallOptions: CallOptions = CallOptions(),
    interceptors: Inner_Grpc_Services_IosDeviceControllerServiceClientInterceptorFactoryProtocol? = nil
  ) {
    self.channel = channel
    self._defaultCallOptions = defaultCallOptions
    self._interceptors = interceptors
  }
}

public struct Inner_Grpc_Services_IosDeviceControllerServiceNIOClient: Inner_Grpc_Services_IosDeviceControllerServiceClientProtocol {
  public var channel: GRPCChannel
  public var defaultCallOptions: CallOptions
  public var interceptors: Inner_Grpc_Services_IosDeviceControllerServiceClientInterceptorFactoryProtocol?

  /// Creates a client for the inner.grpc.services.IosDeviceControllerService service.
  ///
  /// - Parameters:
  ///   - channel: `GRPCChannel` to the service host.
  ///   - defaultCallOptions: Options to use for each service call if the user doesn't provide them.
  ///   - interceptors: A factory providing interceptors for each RPC.
  public init(
    channel: GRPCChannel,
    defaultCallOptions: CallOptions = CallOptions(),
    interceptors: Inner_Grpc_Services_IosDeviceControllerServiceClientInterceptorFactoryProtocol? = nil
  ) {
    self.channel = channel
    self.defaultCallOptions = defaultCallOptions
    self.interceptors = interceptors
  }
}

#if compiler(>=5.6)
@available(macOS 10.15, iOS 13, tvOS 13, watchOS 6, *)
public protocol Inner_Grpc_Services_IosDeviceControllerServiceAsyncClientProtocol: GRPCClient {
  static var serviceDescriptor: GRPCServiceDescriptor { get }
  var interceptors: Inner_Grpc_Services_IosDeviceControllerServiceClientInterceptorFactoryProtocol? { get }

  func makeCallCall(
    _ request: Inner_Params_DcIdcParam,
    callOptions: CallOptions?
  ) -> GRPCAsyncUnaryCall<Inner_Params_DcIdcParam, Inner_Params_DcIdcResult>

  func makeStartStreamingCall(
    _ request: Inner_Types_DcIdcStartStreamingParam,
    callOptions: CallOptions?
  ) -> GRPCAsyncServerStreamingCall<Inner_Types_DcIdcStartStreamingParam, Inner_Types_DcIdcStartStreamingResult>
}

@available(macOS 10.15, iOS 13, tvOS 13, watchOS 6, *)
extension Inner_Grpc_Services_IosDeviceControllerServiceAsyncClientProtocol {
  public static var serviceDescriptor: GRPCServiceDescriptor {
    return Inner_Grpc_Services_IosDeviceControllerServiceClientMetadata.serviceDescriptor
  }

  public var interceptors: Inner_Grpc_Services_IosDeviceControllerServiceClientInterceptorFactoryProtocol? {
    return nil
  }

  public func makeCallCall(
    _ request: Inner_Params_DcIdcParam,
    callOptions: CallOptions? = nil
  ) -> GRPCAsyncUnaryCall<Inner_Params_DcIdcParam, Inner_Params_DcIdcResult> {
    return self.makeAsyncUnaryCall(
      path: Inner_Grpc_Services_IosDeviceControllerServiceClientMetadata.Methods.call.path,
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeCallInterceptors() ?? []
    )
  }

  public func makeStartStreamingCall(
    _ request: Inner_Types_DcIdcStartStreamingParam,
    callOptions: CallOptions? = nil
  ) -> GRPCAsyncServerStreamingCall<Inner_Types_DcIdcStartStreamingParam, Inner_Types_DcIdcStartStreamingResult> {
    return self.makeAsyncServerStreamingCall(
      path: Inner_Grpc_Services_IosDeviceControllerServiceClientMetadata.Methods.startStreaming.path,
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeStartStreamingInterceptors() ?? []
    )
  }
}

@available(macOS 10.15, iOS 13, tvOS 13, watchOS 6, *)
extension Inner_Grpc_Services_IosDeviceControllerServiceAsyncClientProtocol {
  public func call(
    _ request: Inner_Params_DcIdcParam,
    callOptions: CallOptions? = nil
  ) async throws -> Inner_Params_DcIdcResult {
    return try await self.performAsyncUnaryCall(
      path: Inner_Grpc_Services_IosDeviceControllerServiceClientMetadata.Methods.call.path,
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeCallInterceptors() ?? []
    )
  }

  public func startStreaming(
    _ request: Inner_Types_DcIdcStartStreamingParam,
    callOptions: CallOptions? = nil
  ) -> GRPCAsyncResponseStream<Inner_Types_DcIdcStartStreamingResult> {
    return self.performAsyncServerStreamingCall(
      path: Inner_Grpc_Services_IosDeviceControllerServiceClientMetadata.Methods.startStreaming.path,
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeStartStreamingInterceptors() ?? []
    )
  }
}

@available(macOS 10.15, iOS 13, tvOS 13, watchOS 6, *)
public struct Inner_Grpc_Services_IosDeviceControllerServiceAsyncClient: Inner_Grpc_Services_IosDeviceControllerServiceAsyncClientProtocol {
  public var channel: GRPCChannel
  public var defaultCallOptions: CallOptions
  public var interceptors: Inner_Grpc_Services_IosDeviceControllerServiceClientInterceptorFactoryProtocol?

  public init(
    channel: GRPCChannel,
    defaultCallOptions: CallOptions = CallOptions(),
    interceptors: Inner_Grpc_Services_IosDeviceControllerServiceClientInterceptorFactoryProtocol? = nil
  ) {
    self.channel = channel
    self.defaultCallOptions = defaultCallOptions
    self.interceptors = interceptors
  }
}

#endif // compiler(>=5.6)

public protocol Inner_Grpc_Services_IosDeviceControllerServiceClientInterceptorFactoryProtocol: GRPCSendable {

  /// - Returns: Interceptors to use when invoking 'call'.
  func makeCallInterceptors() -> [ClientInterceptor<Inner_Params_DcIdcParam, Inner_Params_DcIdcResult>]

  /// - Returns: Interceptors to use when invoking 'startStreaming'.
  func makeStartStreamingInterceptors() -> [ClientInterceptor<Inner_Types_DcIdcStartStreamingParam, Inner_Types_DcIdcStartStreamingResult>]
}

public enum Inner_Grpc_Services_IosDeviceControllerServiceClientMetadata {
  public static let serviceDescriptor = GRPCServiceDescriptor(
    name: "IosDeviceControllerService",
    fullName: "inner.grpc.services.IosDeviceControllerService",
    methods: [
      Inner_Grpc_Services_IosDeviceControllerServiceClientMetadata.Methods.call,
      Inner_Grpc_Services_IosDeviceControllerServiceClientMetadata.Methods.startStreaming,
    ]
  )

  public enum Methods {
    public static let call = GRPCMethodDescriptor(
      name: "Call",
      path: "/inner.grpc.services.IosDeviceControllerService/Call",
      type: GRPCCallType.unary
    )

    public static let startStreaming = GRPCMethodDescriptor(
      name: "StartStreaming",
      path: "/inner.grpc.services.IosDeviceControllerService/StartStreaming",
      type: GRPCCallType.serverStreaming
    )
  }
}

/// To build a server, implement a class that conforms to this protocol.
public protocol Inner_Grpc_Services_IosDeviceControllerServiceProvider: CallHandlerProvider {
  var interceptors: Inner_Grpc_Services_IosDeviceControllerServiceServerInterceptorFactoryProtocol? { get }

  func call(request: Inner_Params_DcIdcParam, context: StatusOnlyCallContext) -> EventLoopFuture<Inner_Params_DcIdcResult>

  func startStreaming(request: Inner_Types_DcIdcStartStreamingParam, context: StreamingResponseCallContext<Inner_Types_DcIdcStartStreamingResult>) -> EventLoopFuture<GRPCStatus>
}

extension Inner_Grpc_Services_IosDeviceControllerServiceProvider {
  public var serviceName: Substring {
    return Inner_Grpc_Services_IosDeviceControllerServiceServerMetadata.serviceDescriptor.fullName[...]
  }

  /// Determines, calls and returns the appropriate request handler, depending on the request's method.
  /// Returns nil for methods not handled by this service.
  public func handle(
    method name: Substring,
    context: CallHandlerContext
  ) -> GRPCServerHandlerProtocol? {
    switch name {
    case "Call":
      return UnaryServerHandler(
        context: context,
        requestDeserializer: ProtobufDeserializer<Inner_Params_DcIdcParam>(),
        responseSerializer: ProtobufSerializer<Inner_Params_DcIdcResult>(),
        interceptors: self.interceptors?.makeCallInterceptors() ?? [],
        userFunction: self.call(request:context:)
      )

    case "StartStreaming":
      return ServerStreamingServerHandler(
        context: context,
        requestDeserializer: ProtobufDeserializer<Inner_Types_DcIdcStartStreamingParam>(),
        responseSerializer: ProtobufSerializer<Inner_Types_DcIdcStartStreamingResult>(),
        interceptors: self.interceptors?.makeStartStreamingInterceptors() ?? [],
        userFunction: self.startStreaming(request:context:)
      )

    default:
      return nil
    }
  }
}

#if compiler(>=5.6)

/// To implement a server, implement an object which conforms to this protocol.
@available(macOS 10.15, iOS 13, tvOS 13, watchOS 6, *)
public protocol Inner_Grpc_Services_IosDeviceControllerServiceAsyncProvider: CallHandlerProvider {
  static var serviceDescriptor: GRPCServiceDescriptor { get }
  var interceptors: Inner_Grpc_Services_IosDeviceControllerServiceServerInterceptorFactoryProtocol? { get }

  @Sendable func call(
    request: Inner_Params_DcIdcParam,
    context: GRPCAsyncServerCallContext
  ) async throws -> Inner_Params_DcIdcResult

  @Sendable func startStreaming(
    request: Inner_Types_DcIdcStartStreamingParam,
    responseStream: GRPCAsyncResponseStreamWriter<Inner_Types_DcIdcStartStreamingResult>,
    context: GRPCAsyncServerCallContext
  ) async throws
}

@available(macOS 10.15, iOS 13, tvOS 13, watchOS 6, *)
extension Inner_Grpc_Services_IosDeviceControllerServiceAsyncProvider {
  public static var serviceDescriptor: GRPCServiceDescriptor {
    return Inner_Grpc_Services_IosDeviceControllerServiceServerMetadata.serviceDescriptor
  }

  public var serviceName: Substring {
    return Inner_Grpc_Services_IosDeviceControllerServiceServerMetadata.serviceDescriptor.fullName[...]
  }

  public var interceptors: Inner_Grpc_Services_IosDeviceControllerServiceServerInterceptorFactoryProtocol? {
    return nil
  }

  public func handle(
    method name: Substring,
    context: CallHandlerContext
  ) -> GRPCServerHandlerProtocol? {
    switch name {
    case "Call":
      return GRPCAsyncServerHandler(
        context: context,
        requestDeserializer: ProtobufDeserializer<Inner_Params_DcIdcParam>(),
        responseSerializer: ProtobufSerializer<Inner_Params_DcIdcResult>(),
        interceptors: self.interceptors?.makeCallInterceptors() ?? [],
        wrapping: self.call(request:context:)
      )

    case "StartStreaming":
      return GRPCAsyncServerHandler(
        context: context,
        requestDeserializer: ProtobufDeserializer<Inner_Types_DcIdcStartStreamingParam>(),
        responseSerializer: ProtobufSerializer<Inner_Types_DcIdcStartStreamingResult>(),
        interceptors: self.interceptors?.makeStartStreamingInterceptors() ?? [],
        wrapping: self.startStreaming(request:responseStream:context:)
      )

    default:
      return nil
    }
  }
}

#endif // compiler(>=5.6)

public protocol Inner_Grpc_Services_IosDeviceControllerServiceServerInterceptorFactoryProtocol {

  /// - Returns: Interceptors to use when handling 'call'.
  ///   Defaults to calling `self.makeInterceptors()`.
  func makeCallInterceptors() -> [ServerInterceptor<Inner_Params_DcIdcParam, Inner_Params_DcIdcResult>]

  /// - Returns: Interceptors to use when handling 'startStreaming'.
  ///   Defaults to calling `self.makeInterceptors()`.
  func makeStartStreamingInterceptors() -> [ServerInterceptor<Inner_Types_DcIdcStartStreamingParam, Inner_Types_DcIdcStartStreamingResult>]
}

public enum Inner_Grpc_Services_IosDeviceControllerServiceServerMetadata {
  public static let serviceDescriptor = GRPCServiceDescriptor(
    name: "IosDeviceControllerService",
    fullName: "inner.grpc.services.IosDeviceControllerService",
    methods: [
      Inner_Grpc_Services_IosDeviceControllerServiceServerMetadata.Methods.call,
      Inner_Grpc_Services_IosDeviceControllerServiceServerMetadata.Methods.startStreaming,
    ]
  )

  public enum Methods {
    public static let call = GRPCMethodDescriptor(
      name: "Call",
      path: "/inner.grpc.services.IosDeviceControllerService/Call",
      type: GRPCCallType.unary
    )

    public static let startStreaming = GRPCMethodDescriptor(
      name: "StartStreaming",
      path: "/inner.grpc.services.IosDeviceControllerService/StartStreaming",
      type: GRPCCallType.serverStreaming
    )
  }
}