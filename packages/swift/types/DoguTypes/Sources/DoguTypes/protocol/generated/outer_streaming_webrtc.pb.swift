// DO NOT EDIT.
// swift-format-ignore-file
//
// Generated by the Swift generator plugin for the protocol buffer compiler.
// Source: outer/streaming/webrtc.proto
//
// For information on using the generated types, please see the documentation:
//   https://github.com/apple/swift-protobuf/

import Foundation
import SwiftProtobuf

// If the compiler emits an error on this type, it is because this file
// was generated by a version of the `protoc` Swift plug-in that is
// incompatible with the version of SwiftProtobuf to which you are linking.
// Please ensure that you are building against the same version of the API
// that was used to generate this file.
fileprivate struct _GeneratedWithProtocGenSwiftVersion: SwiftProtobuf.ProtobufAPIVersionCheck {
  struct _2: SwiftProtobuf.ProtobufAPIVersion_2 {}
  typealias Version = _2
}

public enum Outer_Streaming_ProtoRTCSdpType: SwiftProtobuf.Enum {
  public typealias RawValue = Int
  case rtcsdpTypeUnspecified // = 0
  case rtcsdpTypeOffer // = 1
  case rtcsdpTypeAnswer // = 2
  case rtcsdpTypePranswer // = 3
  case rtcsdpTypeRollback // = 4
  case UNRECOGNIZED(Int)

  public init() {
    self = .rtcsdpTypeUnspecified
  }

  public init?(rawValue: Int) {
    switch rawValue {
    case 0: self = .rtcsdpTypeUnspecified
    case 1: self = .rtcsdpTypeOffer
    case 2: self = .rtcsdpTypeAnswer
    case 3: self = .rtcsdpTypePranswer
    case 4: self = .rtcsdpTypeRollback
    default: self = .UNRECOGNIZED(rawValue)
    }
  }

  public var rawValue: Int {
    switch self {
    case .rtcsdpTypeUnspecified: return 0
    case .rtcsdpTypeOffer: return 1
    case .rtcsdpTypeAnswer: return 2
    case .rtcsdpTypePranswer: return 3
    case .rtcsdpTypeRollback: return 4
    case .UNRECOGNIZED(let i): return i
    }
  }

}

#if swift(>=4.2)

extension Outer_Streaming_ProtoRTCSdpType: CaseIterable {
  // The compiler won't synthesize support with the UNRECOGNIZED case.
  public static var allCases: [Outer_Streaming_ProtoRTCSdpType] = [
    .rtcsdpTypeUnspecified,
    .rtcsdpTypeOffer,
    .rtcsdpTypeAnswer,
    .rtcsdpTypePranswer,
    .rtcsdpTypeRollback,
  ]
}

#endif  // swift(>=4.2)

public struct Outer_Streaming_ProtoRTCPeerDescription {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var sdpBase64: String = String()

  public var type: Outer_Streaming_ProtoRTCSdpType = .rtcsdpTypeUnspecified

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

public struct Outer_Streaming_ProtoRTCIceCandidateInit {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var candidate: String = String()

  public var sdpMlineIndex: Int32 = 0

  public var sdpMid: String = String()

  public var usernameFragment: String = String()

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

#if swift(>=5.5) && canImport(_Concurrency)
extension Outer_Streaming_ProtoRTCSdpType: @unchecked Sendable {}
extension Outer_Streaming_ProtoRTCPeerDescription: @unchecked Sendable {}
extension Outer_Streaming_ProtoRTCIceCandidateInit: @unchecked Sendable {}
#endif  // swift(>=5.5) && canImport(_Concurrency)

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "outer.streaming"

extension Outer_Streaming_ProtoRTCSdpType: SwiftProtobuf._ProtoNameProviding {
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    0: .same(proto: "PROTO_RTCSDP_TYPE_RTCSDP_TYPE_UNSPECIFIED"),
    1: .same(proto: "PROTO_RTCSDP_TYPE_RTCSDP_TYPE_OFFER"),
    2: .same(proto: "PROTO_RTCSDP_TYPE_RTCSDP_TYPE_ANSWER"),
    3: .same(proto: "PROTO_RTCSDP_TYPE_RTCSDP_TYPE_PRANSWER"),
    4: .same(proto: "PROTO_RTCSDP_TYPE_RTCSDP_TYPE_ROLLBACK"),
  ]
}

extension Outer_Streaming_ProtoRTCPeerDescription: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".ProtoRTCPeerDescription"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "sdp_base64"),
    2: .same(proto: "type"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularStringField(value: &self.sdpBase64) }()
      case 2: try { try decoder.decodeSingularEnumField(value: &self.type) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.sdpBase64.isEmpty {
      try visitor.visitSingularStringField(value: self.sdpBase64, fieldNumber: 1)
    }
    if self.type != .rtcsdpTypeUnspecified {
      try visitor.visitSingularEnumField(value: self.type, fieldNumber: 2)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Outer_Streaming_ProtoRTCPeerDescription, rhs: Outer_Streaming_ProtoRTCPeerDescription) -> Bool {
    if lhs.sdpBase64 != rhs.sdpBase64 {return false}
    if lhs.type != rhs.type {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Outer_Streaming_ProtoRTCIceCandidateInit: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".ProtoRTCIceCandidateInit"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "candidate"),
    2: .standard(proto: "sdp_mline_index"),
    3: .standard(proto: "sdp_mid"),
    4: .standard(proto: "username_fragment"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularStringField(value: &self.candidate) }()
      case 2: try { try decoder.decodeSingularInt32Field(value: &self.sdpMlineIndex) }()
      case 3: try { try decoder.decodeSingularStringField(value: &self.sdpMid) }()
      case 4: try { try decoder.decodeSingularStringField(value: &self.usernameFragment) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.candidate.isEmpty {
      try visitor.visitSingularStringField(value: self.candidate, fieldNumber: 1)
    }
    if self.sdpMlineIndex != 0 {
      try visitor.visitSingularInt32Field(value: self.sdpMlineIndex, fieldNumber: 2)
    }
    if !self.sdpMid.isEmpty {
      try visitor.visitSingularStringField(value: self.sdpMid, fieldNumber: 3)
    }
    if !self.usernameFragment.isEmpty {
      try visitor.visitSingularStringField(value: self.usernameFragment, fieldNumber: 4)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Outer_Streaming_ProtoRTCIceCandidateInit, rhs: Outer_Streaming_ProtoRTCIceCandidateInit) -> Bool {
    if lhs.candidate != rhs.candidate {return false}
    if lhs.sdpMlineIndex != rhs.sdpMlineIndex {return false}
    if lhs.sdpMid != rhs.sdpMid {return false}
    if lhs.usernameFragment != rhs.usernameFragment {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}
