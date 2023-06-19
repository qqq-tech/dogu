//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: inner/types/device.proto

package com.dogu.protocol.generated.inner.types;

@kotlin.jvm.JvmName("-initializedevice")
inline fun device(block: com.dogu.protocol.generated.inner.types.DeviceKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.inner.types.DeviceOuterClass.Device =
  com.dogu.protocol.generated.inner.types.DeviceKt.Dsl._create(com.dogu.protocol.generated.inner.types.DeviceOuterClass.Device.newBuilder()).apply { block() }._build()
object DeviceKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    private val _builder: com.dogu.protocol.generated.inner.types.DeviceOuterClass.Device.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: com.dogu.protocol.generated.inner.types.DeviceOuterClass.Device.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): com.dogu.protocol.generated.inner.types.DeviceOuterClass.Device = _builder.build()

    /**
     * <code>string device_id = 1;</code>
     */
    var deviceId: kotlin.String
      @JvmName("getDeviceId")
      get() = _builder.getDeviceId()
      @JvmName("setDeviceId")
      set(value) {
        _builder.setDeviceId(value)
      }
    /**
     * <code>string device_id = 1;</code>
     */
    fun clearDeviceId() {
      _builder.clearDeviceId()
    }

    /**
     * <code>string serial = 2;</code>
     */
    var serial: kotlin.String
      @JvmName("getSerial")
      get() = _builder.getSerial()
      @JvmName("setSerial")
      set(value) {
        _builder.setSerial(value)
      }
    /**
     * <code>string serial = 2;</code>
     */
    fun clearSerial() {
      _builder.clearSerial()
    }

    /**
     * <code>string name = 3;</code>
     */
    var name: kotlin.String
      @JvmName("getName")
      get() = _builder.getName()
      @JvmName("setName")
      set(value) {
        _builder.setName(value)
      }
    /**
     * <code>string name = 3;</code>
     */
    fun clearName() {
      _builder.clearName()
    }

    /**
     * <code>.outer.Platform platform = 4;</code>
     */
     var platform: com.dogu.protocol.generated.outer.PlatformOuterClass.Platform
      @JvmName("getPlatform")
      get() = _builder.getPlatform()
      @JvmName("setPlatform")
      set(value) {
        _builder.setPlatform(value)
      }
    /**
     * <code>.outer.Platform platform = 4;</code>
     */
    fun clearPlatform() {
      _builder.clearPlatform()
    }

    /**
     * <code>string model = 5;</code>
     */
    var model: kotlin.String
      @JvmName("getModel")
      get() = _builder.getModel()
      @JvmName("setModel")
      set(value) {
        _builder.setModel(value)
      }
    /**
     * <code>string model = 5;</code>
     */
    fun clearModel() {
      _builder.clearModel()
    }

    /**
     * <code>optional string model_name = 6;</code>
     */
    var modelName: kotlin.String
      @JvmName("getModelName")
      get() = _builder.getModelName()
      @JvmName("setModelName")
      set(value) {
        _builder.setModelName(value)
      }
    /**
     * <code>optional string model_name = 6;</code>
     */
    fun clearModelName() {
      _builder.clearModelName()
    }
    /**
     * <code>optional string model_name = 6;</code>
     * @return Whether the modelName field is set.
     */
    fun hasModelName(): kotlin.Boolean {
      return _builder.hasModelName()
    }

    /**
     * <code>string version = 7;</code>
     */
    var version: kotlin.String
      @JvmName("getVersion")
      get() = _builder.getVersion()
      @JvmName("setVersion")
      set(value) {
        _builder.setVersion(value)
      }
    /**
     * <code>string version = 7;</code>
     */
    fun clearVersion() {
      _builder.clearVersion()
    }

    /**
     * <code>sfixed32 is_global = 8;</code>
     */
    var isGlobal: kotlin.Int
      @JvmName("getIsGlobal")
      get() = _builder.getIsGlobal()
      @JvmName("setIsGlobal")
      set(value) {
        _builder.setIsGlobal(value)
      }
    /**
     * <code>sfixed32 is_global = 8;</code>
     */
    fun clearIsGlobal() {
      _builder.clearIsGlobal()
    }

    /**
     * <code>sfixed32 is_host = 9;</code>
     */
    var isHost: kotlin.Int
      @JvmName("getIsHost")
      get() = _builder.getIsHost()
      @JvmName("setIsHost")
      set(value) {
        _builder.setIsHost(value)
      }
    /**
     * <code>sfixed32 is_host = 9;</code>
     */
    fun clearIsHost() {
      _builder.clearIsHost()
    }

    /**
     * <code>.outer.DeviceConnectionState connection_state = 10;</code>
     */
     var connectionState: com.dogu.protocol.generated.outer.DeviceServer.DeviceConnectionState
      @JvmName("getConnectionState")
      get() = _builder.getConnectionState()
      @JvmName("setConnectionState")
      set(value) {
        _builder.setConnectionState(value)
      }
    /**
     * <code>.outer.DeviceConnectionState connection_state = 10;</code>
     */
    fun clearConnectionState() {
      _builder.clearConnectionState()
    }

    /**
     * <code>.google.protobuf.Timestamp heartbeat = 11;</code>
     */
    var heartbeat: com.google.protobuf.Timestamp
      @JvmName("getHeartbeat")
      get() = _builder.getHeartbeat()
      @JvmName("setHeartbeat")
      set(value) {
        _builder.setHeartbeat(value)
      }
    /**
     * <code>.google.protobuf.Timestamp heartbeat = 11;</code>
     */
    fun clearHeartbeat() {
      _builder.clearHeartbeat()
    }
    /**
     * <code>.google.protobuf.Timestamp heartbeat = 11;</code>
     * @return Whether the heartbeat field is set.
     */
    fun hasHeartbeat(): kotlin.Boolean {
      return _builder.hasHeartbeat()
    }

    /**
     * <pre>
     * relations
     * </pre>
     *
     * <code>string organization_id = 12;</code>
     */
    var organizationId: kotlin.String
      @JvmName("getOrganizationId")
      get() = _builder.getOrganizationId()
      @JvmName("setOrganizationId")
      set(value) {
        _builder.setOrganizationId(value)
      }
    /**
     * <pre>
     * relations
     * </pre>
     *
     * <code>string organization_id = 12;</code>
     */
    fun clearOrganizationId() {
      _builder.clearOrganizationId()
    }

    /**
     * <code>string host_id = 13;</code>
     */
    var hostId: kotlin.String
      @JvmName("getHostId")
      get() = _builder.getHostId()
      @JvmName("setHostId")
      set(value) {
        _builder.setHostId(value)
      }
    /**
     * <code>string host_id = 13;</code>
     */
    fun clearHostId() {
      _builder.clearHostId()
    }

    /**
     * <pre>
     * timestamps
     * </pre>
     *
     * <code>.google.protobuf.Timestamp created_at = 14;</code>
     */
    var createdAt: com.google.protobuf.Timestamp
      @JvmName("getCreatedAt")
      get() = _builder.getCreatedAt()
      @JvmName("setCreatedAt")
      set(value) {
        _builder.setCreatedAt(value)
      }
    /**
     * <pre>
     * timestamps
     * </pre>
     *
     * <code>.google.protobuf.Timestamp created_at = 14;</code>
     */
    fun clearCreatedAt() {
      _builder.clearCreatedAt()
    }
    /**
     * <pre>
     * timestamps
     * </pre>
     *
     * <code>.google.protobuf.Timestamp created_at = 14;</code>
     * @return Whether the createdAt field is set.
     */
    fun hasCreatedAt(): kotlin.Boolean {
      return _builder.hasCreatedAt()
    }

    /**
     * <code>.google.protobuf.Timestamp updated_at = 15;</code>
     */
    var updatedAt: com.google.protobuf.Timestamp
      @JvmName("getUpdatedAt")
      get() = _builder.getUpdatedAt()
      @JvmName("setUpdatedAt")
      set(value) {
        _builder.setUpdatedAt(value)
      }
    /**
     * <code>.google.protobuf.Timestamp updated_at = 15;</code>
     */
    fun clearUpdatedAt() {
      _builder.clearUpdatedAt()
    }
    /**
     * <code>.google.protobuf.Timestamp updated_at = 15;</code>
     * @return Whether the updatedAt field is set.
     */
    fun hasUpdatedAt(): kotlin.Boolean {
      return _builder.hasUpdatedAt()
    }

    /**
     * <code>string manufacturer = 16;</code>
     */
    var manufacturer: kotlin.String
      @JvmName("getManufacturer")
      get() = _builder.getManufacturer()
      @JvmName("setManufacturer")
      set(value) {
        _builder.setManufacturer(value)
      }
    /**
     * <code>string manufacturer = 16;</code>
     */
    fun clearManufacturer() {
      _builder.clearManufacturer()
    }

    /**
     * <code>fixed32 resolution_width = 17;</code>
     */
    var resolutionWidth: kotlin.Int
      @JvmName("getResolutionWidth")
      get() = _builder.getResolutionWidth()
      @JvmName("setResolutionWidth")
      set(value) {
        _builder.setResolutionWidth(value)
      }
    /**
     * <code>fixed32 resolution_width = 17;</code>
     */
    fun clearResolutionWidth() {
      _builder.clearResolutionWidth()
    }

    /**
     * <code>fixed32 resolution_height = 18;</code>
     */
    var resolutionHeight: kotlin.Int
      @JvmName("getResolutionHeight")
      get() = _builder.getResolutionHeight()
      @JvmName("setResolutionHeight")
      set(value) {
        _builder.setResolutionHeight(value)
      }
    /**
     * <code>fixed32 resolution_height = 18;</code>
     */
    fun clearResolutionHeight() {
      _builder.clearResolutionHeight()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun com.dogu.protocol.generated.inner.types.DeviceOuterClass.Device.copy(block: com.dogu.protocol.generated.inner.types.DeviceKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.inner.types.DeviceOuterClass.Device =
  com.dogu.protocol.generated.inner.types.DeviceKt.Dsl._create(this.toBuilder()).apply { block() }._build()

val com.dogu.protocol.generated.inner.types.DeviceOuterClass.DeviceOrBuilder.heartbeatOrNull: com.google.protobuf.Timestamp?
  get() = if (hasHeartbeat()) getHeartbeat() else null

val com.dogu.protocol.generated.inner.types.DeviceOuterClass.DeviceOrBuilder.createdAtOrNull: com.google.protobuf.Timestamp?
  get() = if (hasCreatedAt()) getCreatedAt() else null

val com.dogu.protocol.generated.inner.types.DeviceOuterClass.DeviceOrBuilder.updatedAtOrNull: com.google.protobuf.Timestamp?
  get() = if (hasUpdatedAt()) getUpdatedAt() else null

