//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: outer/http_ws.proto

package com.dogu.protocol.generated.outer;

@kotlin.jvm.JvmName("-initializewebSocketCloseEvent")
inline fun webSocketCloseEvent(block: com.dogu.protocol.generated.outer.WebSocketCloseEventKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.outer.HttpWs.WebSocketCloseEvent =
  com.dogu.protocol.generated.outer.WebSocketCloseEventKt.Dsl._create(com.dogu.protocol.generated.outer.HttpWs.WebSocketCloseEvent.newBuilder()).apply { block() }._build()
object WebSocketCloseEventKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    private val _builder: com.dogu.protocol.generated.outer.HttpWs.WebSocketCloseEvent.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: com.dogu.protocol.generated.outer.HttpWs.WebSocketCloseEvent.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): com.dogu.protocol.generated.outer.HttpWs.WebSocketCloseEvent = _builder.build()

    /**
     * <code>sfixed32 code = 1;</code>
     */
    var code: kotlin.Int
      @JvmName("getCode")
      get() = _builder.getCode()
      @JvmName("setCode")
      set(value) {
        _builder.setCode(value)
      }
    /**
     * <code>sfixed32 code = 1;</code>
     */
    fun clearCode() {
      _builder.clearCode()
    }

    /**
     * <code>string reason = 2;</code>
     */
    var reason: kotlin.String
      @JvmName("getReason")
      get() = _builder.getReason()
      @JvmName("setReason")
      set(value) {
        _builder.setReason(value)
      }
    /**
     * <code>string reason = 2;</code>
     */
    fun clearReason() {
      _builder.clearReason()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun com.dogu.protocol.generated.outer.HttpWs.WebSocketCloseEvent.copy(block: com.dogu.protocol.generated.outer.WebSocketCloseEventKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.outer.HttpWs.WebSocketCloseEvent =
  com.dogu.protocol.generated.outer.WebSocketCloseEventKt.Dsl._create(this.toBuilder()).apply { block() }._build()
