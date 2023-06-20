//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: outer/streaming/streaming.proto

package com.dogu.protocol.generated.outer.streaming;

@kotlin.jvm.JvmName("-initializestreamingOffer")
inline fun streamingOffer(block: com.dogu.protocol.generated.outer.streaming.StreamingOfferKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.outer.streaming.Streaming.StreamingOffer =
  com.dogu.protocol.generated.outer.streaming.StreamingOfferKt.Dsl._create(com.dogu.protocol.generated.outer.streaming.Streaming.StreamingOffer.newBuilder()).apply { block() }._build()
object StreamingOfferKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    private val _builder: com.dogu.protocol.generated.outer.streaming.Streaming.StreamingOffer.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: com.dogu.protocol.generated.outer.streaming.Streaming.StreamingOffer.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): com.dogu.protocol.generated.outer.streaming.Streaming.StreamingOffer = _builder.build()

    /**
     * <code>string serial = 1;</code>
     */
    var serial: kotlin.String
      @JvmName("getSerial")
      get() = _builder.getSerial()
      @JvmName("setSerial")
      set(value) {
        _builder.setSerial(value)
      }
    /**
     * <code>string serial = 1;</code>
     */
    fun clearSerial() {
      _builder.clearSerial()
    }

    /**
     * <code>.outer.streaming.StartStreaming start_streaming = 2;</code>
     */
    var startStreaming: com.dogu.protocol.generated.outer.streaming.Streaming.StartStreaming
      @JvmName("getStartStreaming")
      get() = _builder.getStartStreaming()
      @JvmName("setStartStreaming")
      set(value) {
        _builder.setStartStreaming(value)
      }
    /**
     * <code>.outer.streaming.StartStreaming start_streaming = 2;</code>
     */
    fun clearStartStreaming() {
      _builder.clearStartStreaming()
    }
    /**
     * <code>.outer.streaming.StartStreaming start_streaming = 2;</code>
     * @return Whether the startStreaming field is set.
     */
    fun hasStartStreaming(): kotlin.Boolean {
      return _builder.hasStartStreaming()
    }

    /**
     * <code>.outer.streaming.ProtoRTCIceCandidateInit ice_candidate = 3;</code>
     */
    var iceCandidate: com.dogu.protocol.generated.outer.streaming.Webrtc.ProtoRTCIceCandidateInit
      @JvmName("getIceCandidate")
      get() = _builder.getIceCandidate()
      @JvmName("setIceCandidate")
      set(value) {
        _builder.setIceCandidate(value)
      }
    /**
     * <code>.outer.streaming.ProtoRTCIceCandidateInit ice_candidate = 3;</code>
     */
    fun clearIceCandidate() {
      _builder.clearIceCandidate()
    }
    /**
     * <code>.outer.streaming.ProtoRTCIceCandidateInit ice_candidate = 3;</code>
     * @return Whether the iceCandidate field is set.
     */
    fun hasIceCandidate(): kotlin.Boolean {
      return _builder.hasIceCandidate()
    }
    val valueCase: com.dogu.protocol.generated.outer.streaming.Streaming.StreamingOffer.ValueCase
      @JvmName("getValueCase")
      get() = _builder.getValueCase()

    fun clearValue() {
      _builder.clearValue()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun com.dogu.protocol.generated.outer.streaming.Streaming.StreamingOffer.copy(block: com.dogu.protocol.generated.outer.streaming.StreamingOfferKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.outer.streaming.Streaming.StreamingOffer =
  com.dogu.protocol.generated.outer.streaming.StreamingOfferKt.Dsl._create(this.toBuilder()).apply { block() }._build()

val com.dogu.protocol.generated.outer.streaming.Streaming.StreamingOfferOrBuilder.startStreamingOrNull: com.dogu.protocol.generated.outer.streaming.Streaming.StartStreaming?
  get() = if (hasStartStreaming()) getStartStreaming() else null

val com.dogu.protocol.generated.outer.streaming.Streaming.StreamingOfferOrBuilder.iceCandidateOrNull: com.dogu.protocol.generated.outer.streaming.Webrtc.ProtoRTCIceCandidateInit?
  get() = if (hasIceCandidate()) getIceCandidate() else null
