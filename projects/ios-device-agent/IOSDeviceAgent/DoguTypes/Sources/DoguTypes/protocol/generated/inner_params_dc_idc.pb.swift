// DO NOT EDIT.
// swift-format-ignore-file
//
// Generated by the Swift generator plugin for the protocol buffer compiler.
// Source: inner/params/dc_idc.proto
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

public struct Inner_Params_DcIdcParam {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var value: Inner_Params_DcIdcParam.OneOf_Value? = nil

  public var dcIdcScanIdsParam: Inner_Types_DcIdcScanIdsParam {
    get {
      if case .dcIdcScanIdsParam(let v)? = value {return v}
      return Inner_Types_DcIdcScanIdsParam()
    }
    set {value = .dcIdcScanIdsParam(newValue)}
  }

  public var dcIdcOpenGrpcClientParam: Inner_Types_DcIdcOpenGrpcClientParam {
    get {
      if case .dcIdcOpenGrpcClientParam(let v)? = value {return v}
      return Inner_Types_DcIdcOpenGrpcClientParam()
    }
    set {value = .dcIdcOpenGrpcClientParam(newValue)}
  }

  public var dcIdcCheckGrpcHealthParam: Inner_Types_DcIdcCheckGrpcHealthParam {
    get {
      if case .dcIdcCheckGrpcHealthParam(let v)? = value {return v}
      return Inner_Types_DcIdcCheckGrpcHealthParam()
    }
    set {value = .dcIdcCheckGrpcHealthParam(newValue)}
  }

  public var dcIdcStartScreenRecordParam: Inner_Types_DcIdcStartScreenRecordParam {
    get {
      if case .dcIdcStartScreenRecordParam(let v)? = value {return v}
      return Inner_Types_DcIdcStartScreenRecordParam()
    }
    set {value = .dcIdcStartScreenRecordParam(newValue)}
  }

  public var dcIdcStopScreenRecordParam: Inner_Types_DcIdcStopScreenRecordParam {
    get {
      if case .dcIdcStopScreenRecordParam(let v)? = value {return v}
      return Inner_Types_DcIdcStopScreenRecordParam()
    }
    set {value = .dcIdcStopScreenRecordParam(newValue)}
  }

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public enum OneOf_Value: Equatable {
    case dcIdcScanIdsParam(Inner_Types_DcIdcScanIdsParam)
    case dcIdcOpenGrpcClientParam(Inner_Types_DcIdcOpenGrpcClientParam)
    case dcIdcCheckGrpcHealthParam(Inner_Types_DcIdcCheckGrpcHealthParam)
    case dcIdcStartScreenRecordParam(Inner_Types_DcIdcStartScreenRecordParam)
    case dcIdcStopScreenRecordParam(Inner_Types_DcIdcStopScreenRecordParam)

  #if !swift(>=4.1)
    public static func ==(lhs: Inner_Params_DcIdcParam.OneOf_Value, rhs: Inner_Params_DcIdcParam.OneOf_Value) -> Bool {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch (lhs, rhs) {
      case (.dcIdcScanIdsParam, .dcIdcScanIdsParam): return {
        guard case .dcIdcScanIdsParam(let l) = lhs, case .dcIdcScanIdsParam(let r) = rhs else { preconditionFailure() }
        return l == r
      }()
      case (.dcIdcOpenGrpcClientParam, .dcIdcOpenGrpcClientParam): return {
        guard case .dcIdcOpenGrpcClientParam(let l) = lhs, case .dcIdcOpenGrpcClientParam(let r) = rhs else { preconditionFailure() }
        return l == r
      }()
      case (.dcIdcCheckGrpcHealthParam, .dcIdcCheckGrpcHealthParam): return {
        guard case .dcIdcCheckGrpcHealthParam(let l) = lhs, case .dcIdcCheckGrpcHealthParam(let r) = rhs else { preconditionFailure() }
        return l == r
      }()
      case (.dcIdcStartScreenRecordParam, .dcIdcStartScreenRecordParam): return {
        guard case .dcIdcStartScreenRecordParam(let l) = lhs, case .dcIdcStartScreenRecordParam(let r) = rhs else { preconditionFailure() }
        return l == r
      }()
      case (.dcIdcStopScreenRecordParam, .dcIdcStopScreenRecordParam): return {
        guard case .dcIdcStopScreenRecordParam(let l) = lhs, case .dcIdcStopScreenRecordParam(let r) = rhs else { preconditionFailure() }
        return l == r
      }()
      default: return false
      }
    }
  #endif
  }

  public init() {}
}

public struct Inner_Params_DcIdcResult {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var value: Inner_Params_DcIdcResult.OneOf_Value? = nil

  public var dcIdcScanIdsResult: Inner_Types_DcIdcScanIdsResult {
    get {
      if case .dcIdcScanIdsResult(let v)? = value {return v}
      return Inner_Types_DcIdcScanIdsResult()
    }
    set {value = .dcIdcScanIdsResult(newValue)}
  }

  public var dcIdcOpenGrpcClientResult: Inner_Types_DcIdcOpenGrpcClientResult {
    get {
      if case .dcIdcOpenGrpcClientResult(let v)? = value {return v}
      return Inner_Types_DcIdcOpenGrpcClientResult()
    }
    set {value = .dcIdcOpenGrpcClientResult(newValue)}
  }

  public var dcIdcCheckGrpcHealthResult: Inner_Types_DcIdcCheckGrpcHealthResult {
    get {
      if case .dcIdcCheckGrpcHealthResult(let v)? = value {return v}
      return Inner_Types_DcIdcCheckGrpcHealthResult()
    }
    set {value = .dcIdcCheckGrpcHealthResult(newValue)}
  }

  public var dcIdcStartScreenRecordResult: Inner_Types_DcIdcStartScreenRecordResult {
    get {
      if case .dcIdcStartScreenRecordResult(let v)? = value {return v}
      return Inner_Types_DcIdcStartScreenRecordResult()
    }
    set {value = .dcIdcStartScreenRecordResult(newValue)}
  }

  public var dcIdcStopScreenRecordResult: Inner_Types_DcIdcStopScreenRecordResult {
    get {
      if case .dcIdcStopScreenRecordResult(let v)? = value {return v}
      return Inner_Types_DcIdcStopScreenRecordResult()
    }
    set {value = .dcIdcStopScreenRecordResult(newValue)}
  }

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public enum OneOf_Value: Equatable {
    case dcIdcScanIdsResult(Inner_Types_DcIdcScanIdsResult)
    case dcIdcOpenGrpcClientResult(Inner_Types_DcIdcOpenGrpcClientResult)
    case dcIdcCheckGrpcHealthResult(Inner_Types_DcIdcCheckGrpcHealthResult)
    case dcIdcStartScreenRecordResult(Inner_Types_DcIdcStartScreenRecordResult)
    case dcIdcStopScreenRecordResult(Inner_Types_DcIdcStopScreenRecordResult)

  #if !swift(>=4.1)
    public static func ==(lhs: Inner_Params_DcIdcResult.OneOf_Value, rhs: Inner_Params_DcIdcResult.OneOf_Value) -> Bool {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch (lhs, rhs) {
      case (.dcIdcScanIdsResult, .dcIdcScanIdsResult): return {
        guard case .dcIdcScanIdsResult(let l) = lhs, case .dcIdcScanIdsResult(let r) = rhs else { preconditionFailure() }
        return l == r
      }()
      case (.dcIdcOpenGrpcClientResult, .dcIdcOpenGrpcClientResult): return {
        guard case .dcIdcOpenGrpcClientResult(let l) = lhs, case .dcIdcOpenGrpcClientResult(let r) = rhs else { preconditionFailure() }
        return l == r
      }()
      case (.dcIdcCheckGrpcHealthResult, .dcIdcCheckGrpcHealthResult): return {
        guard case .dcIdcCheckGrpcHealthResult(let l) = lhs, case .dcIdcCheckGrpcHealthResult(let r) = rhs else { preconditionFailure() }
        return l == r
      }()
      case (.dcIdcStartScreenRecordResult, .dcIdcStartScreenRecordResult): return {
        guard case .dcIdcStartScreenRecordResult(let l) = lhs, case .dcIdcStartScreenRecordResult(let r) = rhs else { preconditionFailure() }
        return l == r
      }()
      case (.dcIdcStopScreenRecordResult, .dcIdcStopScreenRecordResult): return {
        guard case .dcIdcStopScreenRecordResult(let l) = lhs, case .dcIdcStopScreenRecordResult(let r) = rhs else { preconditionFailure() }
        return l == r
      }()
      default: return false
      }
    }
  #endif
  }

  public init() {}
}

#if swift(>=5.5) && canImport(_Concurrency)
extension Inner_Params_DcIdcParam: @unchecked Sendable {}
extension Inner_Params_DcIdcParam.OneOf_Value: @unchecked Sendable {}
extension Inner_Params_DcIdcResult: @unchecked Sendable {}
extension Inner_Params_DcIdcResult.OneOf_Value: @unchecked Sendable {}
#endif  // swift(>=5.5) && canImport(_Concurrency)

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "inner.params"

extension Inner_Params_DcIdcParam: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".DcIdcParam"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "dc_idc_scan_ids_param"),
    3: .standard(proto: "dc_idc_open_grpc_client_param"),
    4: .standard(proto: "dc_idc_check_grpc_health_param"),
    5: .standard(proto: "dc_idc_start_screen_record_param"),
    6: .standard(proto: "dc_idc_stop_screen_record_param"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try {
        var v: Inner_Types_DcIdcScanIdsParam?
        var hadOneofValue = false
        if let current = self.value {
          hadOneofValue = true
          if case .dcIdcScanIdsParam(let m) = current {v = m}
        }
        try decoder.decodeSingularMessageField(value: &v)
        if let v = v {
          if hadOneofValue {try decoder.handleConflictingOneOf()}
          self.value = .dcIdcScanIdsParam(v)
        }
      }()
      case 3: try {
        var v: Inner_Types_DcIdcOpenGrpcClientParam?
        var hadOneofValue = false
        if let current = self.value {
          hadOneofValue = true
          if case .dcIdcOpenGrpcClientParam(let m) = current {v = m}
        }
        try decoder.decodeSingularMessageField(value: &v)
        if let v = v {
          if hadOneofValue {try decoder.handleConflictingOneOf()}
          self.value = .dcIdcOpenGrpcClientParam(v)
        }
      }()
      case 4: try {
        var v: Inner_Types_DcIdcCheckGrpcHealthParam?
        var hadOneofValue = false
        if let current = self.value {
          hadOneofValue = true
          if case .dcIdcCheckGrpcHealthParam(let m) = current {v = m}
        }
        try decoder.decodeSingularMessageField(value: &v)
        if let v = v {
          if hadOneofValue {try decoder.handleConflictingOneOf()}
          self.value = .dcIdcCheckGrpcHealthParam(v)
        }
      }()
      case 5: try {
        var v: Inner_Types_DcIdcStartScreenRecordParam?
        var hadOneofValue = false
        if let current = self.value {
          hadOneofValue = true
          if case .dcIdcStartScreenRecordParam(let m) = current {v = m}
        }
        try decoder.decodeSingularMessageField(value: &v)
        if let v = v {
          if hadOneofValue {try decoder.handleConflictingOneOf()}
          self.value = .dcIdcStartScreenRecordParam(v)
        }
      }()
      case 6: try {
        var v: Inner_Types_DcIdcStopScreenRecordParam?
        var hadOneofValue = false
        if let current = self.value {
          hadOneofValue = true
          if case .dcIdcStopScreenRecordParam(let m) = current {v = m}
        }
        try decoder.decodeSingularMessageField(value: &v)
        if let v = v {
          if hadOneofValue {try decoder.handleConflictingOneOf()}
          self.value = .dcIdcStopScreenRecordParam(v)
        }
      }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    // The use of inline closures is to circumvent an issue where the compiler
    // allocates stack space for every if/case branch local when no optimizations
    // are enabled. https://github.com/apple/swift-protobuf/issues/1034 and
    // https://github.com/apple/swift-protobuf/issues/1182
    switch self.value {
    case .dcIdcScanIdsParam?: try {
      guard case .dcIdcScanIdsParam(let v)? = self.value else { preconditionFailure() }
      try visitor.visitSingularMessageField(value: v, fieldNumber: 1)
    }()
    case .dcIdcOpenGrpcClientParam?: try {
      guard case .dcIdcOpenGrpcClientParam(let v)? = self.value else { preconditionFailure() }
      try visitor.visitSingularMessageField(value: v, fieldNumber: 3)
    }()
    case .dcIdcCheckGrpcHealthParam?: try {
      guard case .dcIdcCheckGrpcHealthParam(let v)? = self.value else { preconditionFailure() }
      try visitor.visitSingularMessageField(value: v, fieldNumber: 4)
    }()
    case .dcIdcStartScreenRecordParam?: try {
      guard case .dcIdcStartScreenRecordParam(let v)? = self.value else { preconditionFailure() }
      try visitor.visitSingularMessageField(value: v, fieldNumber: 5)
    }()
    case .dcIdcStopScreenRecordParam?: try {
      guard case .dcIdcStopScreenRecordParam(let v)? = self.value else { preconditionFailure() }
      try visitor.visitSingularMessageField(value: v, fieldNumber: 6)
    }()
    case nil: break
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Inner_Params_DcIdcParam, rhs: Inner_Params_DcIdcParam) -> Bool {
    if lhs.value != rhs.value {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Inner_Params_DcIdcResult: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".DcIdcResult"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "dc_idc_scan_ids_result"),
    3: .standard(proto: "dc_idc_open_grpc_client_result"),
    4: .standard(proto: "dc_idc_check_grpc_health_result"),
    5: .standard(proto: "dc_idc_start_screen_record_result"),
    6: .standard(proto: "dc_idc_stop_screen_record_result"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try {
        var v: Inner_Types_DcIdcScanIdsResult?
        var hadOneofValue = false
        if let current = self.value {
          hadOneofValue = true
          if case .dcIdcScanIdsResult(let m) = current {v = m}
        }
        try decoder.decodeSingularMessageField(value: &v)
        if let v = v {
          if hadOneofValue {try decoder.handleConflictingOneOf()}
          self.value = .dcIdcScanIdsResult(v)
        }
      }()
      case 3: try {
        var v: Inner_Types_DcIdcOpenGrpcClientResult?
        var hadOneofValue = false
        if let current = self.value {
          hadOneofValue = true
          if case .dcIdcOpenGrpcClientResult(let m) = current {v = m}
        }
        try decoder.decodeSingularMessageField(value: &v)
        if let v = v {
          if hadOneofValue {try decoder.handleConflictingOneOf()}
          self.value = .dcIdcOpenGrpcClientResult(v)
        }
      }()
      case 4: try {
        var v: Inner_Types_DcIdcCheckGrpcHealthResult?
        var hadOneofValue = false
        if let current = self.value {
          hadOneofValue = true
          if case .dcIdcCheckGrpcHealthResult(let m) = current {v = m}
        }
        try decoder.decodeSingularMessageField(value: &v)
        if let v = v {
          if hadOneofValue {try decoder.handleConflictingOneOf()}
          self.value = .dcIdcCheckGrpcHealthResult(v)
        }
      }()
      case 5: try {
        var v: Inner_Types_DcIdcStartScreenRecordResult?
        var hadOneofValue = false
        if let current = self.value {
          hadOneofValue = true
          if case .dcIdcStartScreenRecordResult(let m) = current {v = m}
        }
        try decoder.decodeSingularMessageField(value: &v)
        if let v = v {
          if hadOneofValue {try decoder.handleConflictingOneOf()}
          self.value = .dcIdcStartScreenRecordResult(v)
        }
      }()
      case 6: try {
        var v: Inner_Types_DcIdcStopScreenRecordResult?
        var hadOneofValue = false
        if let current = self.value {
          hadOneofValue = true
          if case .dcIdcStopScreenRecordResult(let m) = current {v = m}
        }
        try decoder.decodeSingularMessageField(value: &v)
        if let v = v {
          if hadOneofValue {try decoder.handleConflictingOneOf()}
          self.value = .dcIdcStopScreenRecordResult(v)
        }
      }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    // The use of inline closures is to circumvent an issue where the compiler
    // allocates stack space for every if/case branch local when no optimizations
    // are enabled. https://github.com/apple/swift-protobuf/issues/1034 and
    // https://github.com/apple/swift-protobuf/issues/1182
    switch self.value {
    case .dcIdcScanIdsResult?: try {
      guard case .dcIdcScanIdsResult(let v)? = self.value else { preconditionFailure() }
      try visitor.visitSingularMessageField(value: v, fieldNumber: 1)
    }()
    case .dcIdcOpenGrpcClientResult?: try {
      guard case .dcIdcOpenGrpcClientResult(let v)? = self.value else { preconditionFailure() }
      try visitor.visitSingularMessageField(value: v, fieldNumber: 3)
    }()
    case .dcIdcCheckGrpcHealthResult?: try {
      guard case .dcIdcCheckGrpcHealthResult(let v)? = self.value else { preconditionFailure() }
      try visitor.visitSingularMessageField(value: v, fieldNumber: 4)
    }()
    case .dcIdcStartScreenRecordResult?: try {
      guard case .dcIdcStartScreenRecordResult(let v)? = self.value else { preconditionFailure() }
      try visitor.visitSingularMessageField(value: v, fieldNumber: 5)
    }()
    case .dcIdcStopScreenRecordResult?: try {
      guard case .dcIdcStopScreenRecordResult(let v)? = self.value else { preconditionFailure() }
      try visitor.visitSingularMessageField(value: v, fieldNumber: 6)
    }()
    case nil: break
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Inner_Params_DcIdcResult, rhs: Inner_Params_DcIdcResult) -> Bool {
    if lhs.value != rhs.value {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}
