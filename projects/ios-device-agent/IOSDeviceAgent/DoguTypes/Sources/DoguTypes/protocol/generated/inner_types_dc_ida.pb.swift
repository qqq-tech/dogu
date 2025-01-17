// DO NOT EDIT.
// swift-format-ignore-file
//
// Generated by the Swift generator plugin for the protocol buffer compiler.
// Source: inner/types/dc_ida.proto
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

public struct Inner_Types_DcIdaRunAppParam {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var appPath: String = String()

  public var installedAppNames: [String] = []

  public var bundleID: String = String()

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

public struct Inner_Types_DcIdaRunAppResult {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var error: Outer_ErrorResult {
    get {return _error ?? Outer_ErrorResult()}
    set {_error = newValue}
  }
  /// Returns true if `error` has been explicitly set.
  public var hasError: Bool {return self._error != nil}
  /// Clears the value of `error`. Subsequent reads from it will return its default value.
  public mutating func clearError() {self._error = nil}

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}

  fileprivate var _error: Outer_ErrorResult? = nil
}

public struct Inner_Types_DcIdaGetSystemInfoParam {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

public struct Inner_Types_DcIdaGetSystemInfoResult {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var screenWidth: UInt32 = 0

  public var screenHeight: UInt32 = 0

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

#if swift(>=5.5) && canImport(_Concurrency)
extension Inner_Types_DcIdaRunAppParam: @unchecked Sendable {}
extension Inner_Types_DcIdaRunAppResult: @unchecked Sendable {}
extension Inner_Types_DcIdaGetSystemInfoParam: @unchecked Sendable {}
extension Inner_Types_DcIdaGetSystemInfoResult: @unchecked Sendable {}
#endif  // swift(>=5.5) && canImport(_Concurrency)

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "inner.types"

extension Inner_Types_DcIdaRunAppParam: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".DcIdaRunAppParam"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "app_path"),
    2: .standard(proto: "installed_app_names"),
    3: .standard(proto: "bundle_id"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularStringField(value: &self.appPath) }()
      case 2: try { try decoder.decodeRepeatedStringField(value: &self.installedAppNames) }()
      case 3: try { try decoder.decodeSingularStringField(value: &self.bundleID) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.appPath.isEmpty {
      try visitor.visitSingularStringField(value: self.appPath, fieldNumber: 1)
    }
    if !self.installedAppNames.isEmpty {
      try visitor.visitRepeatedStringField(value: self.installedAppNames, fieldNumber: 2)
    }
    if !self.bundleID.isEmpty {
      try visitor.visitSingularStringField(value: self.bundleID, fieldNumber: 3)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Inner_Types_DcIdaRunAppParam, rhs: Inner_Types_DcIdaRunAppParam) -> Bool {
    if lhs.appPath != rhs.appPath {return false}
    if lhs.installedAppNames != rhs.installedAppNames {return false}
    if lhs.bundleID != rhs.bundleID {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Inner_Types_DcIdaRunAppResult: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".DcIdaRunAppResult"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "error"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularMessageField(value: &self._error) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    // The use of inline closures is to circumvent an issue where the compiler
    // allocates stack space for every if/case branch local when no optimizations
    // are enabled. https://github.com/apple/swift-protobuf/issues/1034 and
    // https://github.com/apple/swift-protobuf/issues/1182
    try { if let v = self._error {
      try visitor.visitSingularMessageField(value: v, fieldNumber: 1)
    } }()
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Inner_Types_DcIdaRunAppResult, rhs: Inner_Types_DcIdaRunAppResult) -> Bool {
    if lhs._error != rhs._error {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Inner_Types_DcIdaGetSystemInfoParam: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".DcIdaGetSystemInfoParam"
  public static let _protobuf_nameMap = SwiftProtobuf._NameMap()

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let _ = try decoder.nextFieldNumber() {
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Inner_Types_DcIdaGetSystemInfoParam, rhs: Inner_Types_DcIdaGetSystemInfoParam) -> Bool {
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Inner_Types_DcIdaGetSystemInfoResult: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".DcIdaGetSystemInfoResult"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "screen_width"),
    2: .standard(proto: "screen_height"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularUInt32Field(value: &self.screenWidth) }()
      case 2: try { try decoder.decodeSingularUInt32Field(value: &self.screenHeight) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if self.screenWidth != 0 {
      try visitor.visitSingularUInt32Field(value: self.screenWidth, fieldNumber: 1)
    }
    if self.screenHeight != 0 {
      try visitor.visitSingularUInt32Field(value: self.screenHeight, fieldNumber: 2)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Inner_Types_DcIdaGetSystemInfoResult, rhs: Inner_Types_DcIdaGetSystemInfoResult) -> Bool {
    if lhs.screenWidth != rhs.screenWidth {return false}
    if lhs.screenHeight != rhs.screenHeight {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}
