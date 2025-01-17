// DO NOT EDIT.
// swift-format-ignore-file
//
// Generated by the Swift generator plugin for the protocol buffer compiler.
// Source: inner/types/device.proto
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

public struct Inner_Types_Device {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var deviceID: String {
    get {return _storage._deviceID}
    set {_uniqueStorage()._deviceID = newValue}
  }

  public var serial: String {
    get {return _storage._serial}
    set {_uniqueStorage()._serial = newValue}
  }

  public var name: String {
    get {return _storage._name}
    set {_uniqueStorage()._name = newValue}
  }

  public var platform: Outer_Platform {
    get {return _storage._platform}
    set {_uniqueStorage()._platform = newValue}
  }

  public var model: String {
    get {return _storage._model}
    set {_uniqueStorage()._model = newValue}
  }

  public var modelName: String {
    get {return _storage._modelName ?? String()}
    set {_uniqueStorage()._modelName = newValue}
  }
  /// Returns true if `modelName` has been explicitly set.
  public var hasModelName: Bool {return _storage._modelName != nil}
  /// Clears the value of `modelName`. Subsequent reads from it will return its default value.
  public mutating func clearModelName() {_uniqueStorage()._modelName = nil}

  public var version: String {
    get {return _storage._version}
    set {_uniqueStorage()._version = newValue}
  }

  public var isGlobal: Int32 {
    get {return _storage._isGlobal}
    set {_uniqueStorage()._isGlobal = newValue}
  }

  public var isHost: Int32 {
    get {return _storage._isHost}
    set {_uniqueStorage()._isHost = newValue}
  }

  public var connectionState: Outer_DeviceConnectionState {
    get {return _storage._connectionState}
    set {_uniqueStorage()._connectionState = newValue}
  }

  public var heartbeat: SwiftProtobuf.Google_Protobuf_Timestamp {
    get {return _storage._heartbeat ?? SwiftProtobuf.Google_Protobuf_Timestamp()}
    set {_uniqueStorage()._heartbeat = newValue}
  }
  /// Returns true if `heartbeat` has been explicitly set.
  public var hasHeartbeat: Bool {return _storage._heartbeat != nil}
  /// Clears the value of `heartbeat`. Subsequent reads from it will return its default value.
  public mutating func clearHeartbeat() {_uniqueStorage()._heartbeat = nil}

  /// relations
  public var organizationID: String {
    get {return _storage._organizationID}
    set {_uniqueStorage()._organizationID = newValue}
  }

  public var hostID: String {
    get {return _storage._hostID}
    set {_uniqueStorage()._hostID = newValue}
  }

  /// timestamps
  public var createdAt: SwiftProtobuf.Google_Protobuf_Timestamp {
    get {return _storage._createdAt ?? SwiftProtobuf.Google_Protobuf_Timestamp()}
    set {_uniqueStorage()._createdAt = newValue}
  }
  /// Returns true if `createdAt` has been explicitly set.
  public var hasCreatedAt: Bool {return _storage._createdAt != nil}
  /// Clears the value of `createdAt`. Subsequent reads from it will return its default value.
  public mutating func clearCreatedAt() {_uniqueStorage()._createdAt = nil}

  public var updatedAt: SwiftProtobuf.Google_Protobuf_Timestamp {
    get {return _storage._updatedAt ?? SwiftProtobuf.Google_Protobuf_Timestamp()}
    set {_uniqueStorage()._updatedAt = newValue}
  }
  /// Returns true if `updatedAt` has been explicitly set.
  public var hasUpdatedAt: Bool {return _storage._updatedAt != nil}
  /// Clears the value of `updatedAt`. Subsequent reads from it will return its default value.
  public mutating func clearUpdatedAt() {_uniqueStorage()._updatedAt = nil}

  public var manufacturer: String {
    get {return _storage._manufacturer}
    set {_uniqueStorage()._manufacturer = newValue}
  }

  public var resolutionWidth: UInt32 {
    get {return _storage._resolutionWidth}
    set {_uniqueStorage()._resolutionWidth = newValue}
  }

  public var resolutionHeight: UInt32 {
    get {return _storage._resolutionHeight}
    set {_uniqueStorage()._resolutionHeight = newValue}
  }

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}

  fileprivate var _storage = _StorageClass.defaultInstance
}

#if swift(>=5.5) && canImport(_Concurrency)
extension Inner_Types_Device: @unchecked Sendable {}
#endif  // swift(>=5.5) && canImport(_Concurrency)

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "inner.types"

extension Inner_Types_Device: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".Device"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "device_id"),
    2: .same(proto: "serial"),
    3: .same(proto: "name"),
    4: .same(proto: "platform"),
    5: .same(proto: "model"),
    6: .standard(proto: "model_name"),
    7: .same(proto: "version"),
    8: .standard(proto: "is_global"),
    9: .standard(proto: "is_host"),
    10: .standard(proto: "connection_state"),
    11: .same(proto: "heartbeat"),
    12: .standard(proto: "organization_id"),
    13: .standard(proto: "host_id"),
    14: .standard(proto: "created_at"),
    15: .standard(proto: "updated_at"),
    16: .same(proto: "manufacturer"),
    17: .standard(proto: "resolution_width"),
    18: .standard(proto: "resolution_height"),
  ]

  fileprivate class _StorageClass {
    var _deviceID: String = String()
    var _serial: String = String()
    var _name: String = String()
    var _platform: Outer_Platform = .unspecified
    var _model: String = String()
    var _modelName: String? = nil
    var _version: String = String()
    var _isGlobal: Int32 = 0
    var _isHost: Int32 = 0
    var _connectionState: Outer_DeviceConnectionState = .unspecified
    var _heartbeat: SwiftProtobuf.Google_Protobuf_Timestamp? = nil
    var _organizationID: String = String()
    var _hostID: String = String()
    var _createdAt: SwiftProtobuf.Google_Protobuf_Timestamp? = nil
    var _updatedAt: SwiftProtobuf.Google_Protobuf_Timestamp? = nil
    var _manufacturer: String = String()
    var _resolutionWidth: UInt32 = 0
    var _resolutionHeight: UInt32 = 0

    static let defaultInstance = _StorageClass()

    private init() {}

    init(copying source: _StorageClass) {
      _deviceID = source._deviceID
      _serial = source._serial
      _name = source._name
      _platform = source._platform
      _model = source._model
      _modelName = source._modelName
      _version = source._version
      _isGlobal = source._isGlobal
      _isHost = source._isHost
      _connectionState = source._connectionState
      _heartbeat = source._heartbeat
      _organizationID = source._organizationID
      _hostID = source._hostID
      _createdAt = source._createdAt
      _updatedAt = source._updatedAt
      _manufacturer = source._manufacturer
      _resolutionWidth = source._resolutionWidth
      _resolutionHeight = source._resolutionHeight
    }
  }

  fileprivate mutating func _uniqueStorage() -> _StorageClass {
    if !isKnownUniquelyReferenced(&_storage) {
      _storage = _StorageClass(copying: _storage)
    }
    return _storage
  }

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    _ = _uniqueStorage()
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      while let fieldNumber = try decoder.nextFieldNumber() {
        // The use of inline closures is to circumvent an issue where the compiler
        // allocates stack space for every case branch when no optimizations are
        // enabled. https://github.com/apple/swift-protobuf/issues/1034
        switch fieldNumber {
        case 1: try { try decoder.decodeSingularStringField(value: &_storage._deviceID) }()
        case 2: try { try decoder.decodeSingularStringField(value: &_storage._serial) }()
        case 3: try { try decoder.decodeSingularStringField(value: &_storage._name) }()
        case 4: try { try decoder.decodeSingularEnumField(value: &_storage._platform) }()
        case 5: try { try decoder.decodeSingularStringField(value: &_storage._model) }()
        case 6: try { try decoder.decodeSingularStringField(value: &_storage._modelName) }()
        case 7: try { try decoder.decodeSingularStringField(value: &_storage._version) }()
        case 8: try { try decoder.decodeSingularSFixed32Field(value: &_storage._isGlobal) }()
        case 9: try { try decoder.decodeSingularSFixed32Field(value: &_storage._isHost) }()
        case 10: try { try decoder.decodeSingularEnumField(value: &_storage._connectionState) }()
        case 11: try { try decoder.decodeSingularMessageField(value: &_storage._heartbeat) }()
        case 12: try { try decoder.decodeSingularStringField(value: &_storage._organizationID) }()
        case 13: try { try decoder.decodeSingularStringField(value: &_storage._hostID) }()
        case 14: try { try decoder.decodeSingularMessageField(value: &_storage._createdAt) }()
        case 15: try { try decoder.decodeSingularMessageField(value: &_storage._updatedAt) }()
        case 16: try { try decoder.decodeSingularStringField(value: &_storage._manufacturer) }()
        case 17: try { try decoder.decodeSingularFixed32Field(value: &_storage._resolutionWidth) }()
        case 18: try { try decoder.decodeSingularFixed32Field(value: &_storage._resolutionHeight) }()
        default: break
        }
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every if/case branch local when no optimizations
      // are enabled. https://github.com/apple/swift-protobuf/issues/1034 and
      // https://github.com/apple/swift-protobuf/issues/1182
      if !_storage._deviceID.isEmpty {
        try visitor.visitSingularStringField(value: _storage._deviceID, fieldNumber: 1)
      }
      if !_storage._serial.isEmpty {
        try visitor.visitSingularStringField(value: _storage._serial, fieldNumber: 2)
      }
      if !_storage._name.isEmpty {
        try visitor.visitSingularStringField(value: _storage._name, fieldNumber: 3)
      }
      if _storage._platform != .unspecified {
        try visitor.visitSingularEnumField(value: _storage._platform, fieldNumber: 4)
      }
      if !_storage._model.isEmpty {
        try visitor.visitSingularStringField(value: _storage._model, fieldNumber: 5)
      }
      try { if let v = _storage._modelName {
        try visitor.visitSingularStringField(value: v, fieldNumber: 6)
      } }()
      if !_storage._version.isEmpty {
        try visitor.visitSingularStringField(value: _storage._version, fieldNumber: 7)
      }
      if _storage._isGlobal != 0 {
        try visitor.visitSingularSFixed32Field(value: _storage._isGlobal, fieldNumber: 8)
      }
      if _storage._isHost != 0 {
        try visitor.visitSingularSFixed32Field(value: _storage._isHost, fieldNumber: 9)
      }
      if _storage._connectionState != .unspecified {
        try visitor.visitSingularEnumField(value: _storage._connectionState, fieldNumber: 10)
      }
      try { if let v = _storage._heartbeat {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 11)
      } }()
      if !_storage._organizationID.isEmpty {
        try visitor.visitSingularStringField(value: _storage._organizationID, fieldNumber: 12)
      }
      if !_storage._hostID.isEmpty {
        try visitor.visitSingularStringField(value: _storage._hostID, fieldNumber: 13)
      }
      try { if let v = _storage._createdAt {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 14)
      } }()
      try { if let v = _storage._updatedAt {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 15)
      } }()
      if !_storage._manufacturer.isEmpty {
        try visitor.visitSingularStringField(value: _storage._manufacturer, fieldNumber: 16)
      }
      if _storage._resolutionWidth != 0 {
        try visitor.visitSingularFixed32Field(value: _storage._resolutionWidth, fieldNumber: 17)
      }
      if _storage._resolutionHeight != 0 {
        try visitor.visitSingularFixed32Field(value: _storage._resolutionHeight, fieldNumber: 18)
      }
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Inner_Types_Device, rhs: Inner_Types_Device) -> Bool {
    if lhs._storage !== rhs._storage {
      let storagesAreEqual: Bool = withExtendedLifetime((lhs._storage, rhs._storage)) { (_args: (_StorageClass, _StorageClass)) in
        let _storage = _args.0
        let rhs_storage = _args.1
        if _storage._deviceID != rhs_storage._deviceID {return false}
        if _storage._serial != rhs_storage._serial {return false}
        if _storage._name != rhs_storage._name {return false}
        if _storage._platform != rhs_storage._platform {return false}
        if _storage._model != rhs_storage._model {return false}
        if _storage._modelName != rhs_storage._modelName {return false}
        if _storage._version != rhs_storage._version {return false}
        if _storage._isGlobal != rhs_storage._isGlobal {return false}
        if _storage._isHost != rhs_storage._isHost {return false}
        if _storage._connectionState != rhs_storage._connectionState {return false}
        if _storage._heartbeat != rhs_storage._heartbeat {return false}
        if _storage._organizationID != rhs_storage._organizationID {return false}
        if _storage._hostID != rhs_storage._hostID {return false}
        if _storage._createdAt != rhs_storage._createdAt {return false}
        if _storage._updatedAt != rhs_storage._updatedAt {return false}
        if _storage._manufacturer != rhs_storage._manufacturer {return false}
        if _storage._resolutionWidth != rhs_storage._resolutionWidth {return false}
        if _storage._resolutionHeight != rhs_storage._resolutionHeight {return false}
        return true
      }
      if !storagesAreEqual {return false}
    }
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}
