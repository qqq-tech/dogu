//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: outer/streaming/webrtc.proto

package com.dogu.protocol.generated.outer.streaming;

@kotlin.jvm.JvmName("-initializeprotoRTCPeerDescription")
inline fun protoRTCPeerDescription(block: com.dogu.protocol.generated.outer.streaming.ProtoRTCPeerDescriptionKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.outer.streaming.Webrtc.ProtoRTCPeerDescription =
  com.dogu.protocol.generated.outer.streaming.ProtoRTCPeerDescriptionKt.Dsl._create(com.dogu.protocol.generated.outer.streaming.Webrtc.ProtoRTCPeerDescription.newBuilder()).apply { block() }._build()
object ProtoRTCPeerDescriptionKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    private val _builder: com.dogu.protocol.generated.outer.streaming.Webrtc.ProtoRTCPeerDescription.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: com.dogu.protocol.generated.outer.streaming.Webrtc.ProtoRTCPeerDescription.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): com.dogu.protocol.generated.outer.streaming.Webrtc.ProtoRTCPeerDescription = _builder.build()

    /**
     * <code>string sdp_base64 = 1;</code>
     */
    var sdpBase64: kotlin.String
      @JvmName("getSdpBase64")
      get() = _builder.getSdpBase64()
      @JvmName("setSdpBase64")
      set(value) {
        _builder.setSdpBase64(value)
      }
    /**
     * <code>string sdp_base64 = 1;</code>
     */
    fun clearSdpBase64() {
      _builder.clearSdpBase64()
    }

    /**
     * <code>.outer.streaming.ProtoRTCSdpType type = 2;</code>
     */
     var type: com.dogu.protocol.generated.outer.streaming.Webrtc.ProtoRTCSdpType
      @JvmName("getType")
      get() = _builder.getType()
      @JvmName("setType")
      set(value) {
        _builder.setType(value)
      }
    /**
     * <code>.outer.streaming.ProtoRTCSdpType type = 2;</code>
     */
    fun clearType() {
      _builder.clearType()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun com.dogu.protocol.generated.outer.streaming.Webrtc.ProtoRTCPeerDescription.copy(block: com.dogu.protocol.generated.outer.streaming.ProtoRTCPeerDescriptionKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.outer.streaming.Webrtc.ProtoRTCPeerDescription =
  com.dogu.protocol.generated.outer.streaming.ProtoRTCPeerDescriptionKt.Dsl._create(this.toBuilder()).apply { block() }._build()

