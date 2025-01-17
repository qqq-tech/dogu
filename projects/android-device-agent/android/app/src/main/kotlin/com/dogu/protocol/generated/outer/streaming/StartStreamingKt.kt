//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: outer/streaming/streaming.proto

package com.dogu.protocol.generated.outer.streaming;

@kotlin.jvm.JvmName("-initializestartStreaming")
inline fun startStreaming(block: com.dogu.protocol.generated.outer.streaming.StartStreamingKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.outer.streaming.Streaming.StartStreaming =
  com.dogu.protocol.generated.outer.streaming.StartStreamingKt.Dsl._create(com.dogu.protocol.generated.outer.streaming.Streaming.StartStreaming.newBuilder()).apply { block() }._build()
object StartStreamingKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    private val _builder: com.dogu.protocol.generated.outer.streaming.Streaming.StartStreaming.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: com.dogu.protocol.generated.outer.streaming.Streaming.StartStreaming.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): com.dogu.protocol.generated.outer.streaming.Streaming.StartStreaming = _builder.build()

    /**
     * <code>.outer.streaming.ProtoRTCPeerDescription peer_description = 1;</code>
     */
    var peerDescription: com.dogu.protocol.generated.outer.streaming.Webrtc.ProtoRTCPeerDescription
      @JvmName("getPeerDescription")
      get() = _builder.getPeerDescription()
      @JvmName("setPeerDescription")
      set(value) {
        _builder.setPeerDescription(value)
      }
    /**
     * <code>.outer.streaming.ProtoRTCPeerDescription peer_description = 1;</code>
     */
    fun clearPeerDescription() {
      _builder.clearPeerDescription()
    }
    /**
     * <code>.outer.streaming.ProtoRTCPeerDescription peer_description = 1;</code>
     * @return Whether the peerDescription field is set.
     */
    fun hasPeerDescription(): kotlin.Boolean {
      return _builder.hasPeerDescription()
    }

    /**
     * <code>.outer.streaming.StreamingOption option = 2;</code>
     */
    var option: com.dogu.protocol.generated.outer.streaming.Streaming.StreamingOption
      @JvmName("getOption")
      get() = _builder.getOption()
      @JvmName("setOption")
      set(value) {
        _builder.setOption(value)
      }
    /**
     * <code>.outer.streaming.StreamingOption option = 2;</code>
     */
    fun clearOption() {
      _builder.clearOption()
    }
    /**
     * <code>.outer.streaming.StreamingOption option = 2;</code>
     * @return Whether the option field is set.
     */
    fun hasOption(): kotlin.Boolean {
      return _builder.hasOption()
    }

    /**
     * <code>string turn_server_url = 3;</code>
     */
    var turnServerUrl: kotlin.String
      @JvmName("getTurnServerUrl")
      get() = _builder.getTurnServerUrl()
      @JvmName("setTurnServerUrl")
      set(value) {
        _builder.setTurnServerUrl(value)
      }
    /**
     * <code>string turn_server_url = 3;</code>
     */
    fun clearTurnServerUrl() {
      _builder.clearTurnServerUrl()
    }

    /**
     * <code>string turn_server_username = 4;</code>
     */
    var turnServerUsername: kotlin.String
      @JvmName("getTurnServerUsername")
      get() = _builder.getTurnServerUsername()
      @JvmName("setTurnServerUsername")
      set(value) {
        _builder.setTurnServerUsername(value)
      }
    /**
     * <code>string turn_server_username = 4;</code>
     */
    fun clearTurnServerUsername() {
      _builder.clearTurnServerUsername()
    }

    /**
     * <code>string turn_server_password = 5;</code>
     */
    var turnServerPassword: kotlin.String
      @JvmName("getTurnServerPassword")
      get() = _builder.getTurnServerPassword()
      @JvmName("setTurnServerPassword")
      set(value) {
        _builder.setTurnServerPassword(value)
      }
    /**
     * <code>string turn_server_password = 5;</code>
     */
    fun clearTurnServerPassword() {
      _builder.clearTurnServerPassword()
    }

    /**
     * <code>.outer.Platform platform = 6;</code>
     */
     var platform: com.dogu.protocol.generated.outer.PlatformOuterClass.Platform
      @JvmName("getPlatform")
      get() = _builder.getPlatform()
      @JvmName("setPlatform")
      set(value) {
        _builder.setPlatform(value)
      }
    /**
     * <code>.outer.Platform platform = 6;</code>
     */
    fun clearPlatform() {
      _builder.clearPlatform()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun com.dogu.protocol.generated.outer.streaming.Streaming.StartStreaming.copy(block: com.dogu.protocol.generated.outer.streaming.StartStreamingKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.outer.streaming.Streaming.StartStreaming =
  com.dogu.protocol.generated.outer.streaming.StartStreamingKt.Dsl._create(this.toBuilder()).apply { block() }._build()

val com.dogu.protocol.generated.outer.streaming.Streaming.StartStreamingOrBuilder.peerDescriptionOrNull: com.dogu.protocol.generated.outer.streaming.Webrtc.ProtoRTCPeerDescription?
  get() = if (hasPeerDescription()) getPeerDescription() else null

val com.dogu.protocol.generated.outer.streaming.Streaming.StartStreamingOrBuilder.optionOrNull: com.dogu.protocol.generated.outer.streaming.Streaming.StreamingOption?
  get() = if (hasOption()) getOption() else null

