//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: outer/http_ws.proto

package com.dogu.protocol.generated.outer;

@kotlin.jvm.JvmName("-initializewebSocketParam")
inline fun webSocketParam(block: com.dogu.protocol.generated.outer.WebSocketParamKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.outer.HttpWs.WebSocketParam =
  com.dogu.protocol.generated.outer.WebSocketParamKt.Dsl._create(com.dogu.protocol.generated.outer.HttpWs.WebSocketParam.newBuilder()).apply { block() }._build()
object WebSocketParamKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    private val _builder: com.dogu.protocol.generated.outer.HttpWs.WebSocketParam.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: com.dogu.protocol.generated.outer.HttpWs.WebSocketParam.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): com.dogu.protocol.generated.outer.HttpWs.WebSocketParam = _builder.build()

    /**
     * <code>.outer.WebSocketConnection connection = 1;</code>
     */
    var connection: com.dogu.protocol.generated.outer.HttpWs.WebSocketConnection
      @JvmName("getConnection")
      get() = _builder.getConnection()
      @JvmName("setConnection")
      set(value) {
        _builder.setConnection(value)
      }
    /**
     * <code>.outer.WebSocketConnection connection = 1;</code>
     */
    fun clearConnection() {
      _builder.clearConnection()
    }
    /**
     * <code>.outer.WebSocketConnection connection = 1;</code>
     * @return Whether the connection field is set.
     */
    fun hasConnection(): kotlin.Boolean {
      return _builder.hasConnection()
    }

    /**
     * <code>.outer.WebSocketMessage message = 2;</code>
     */
    var message: com.dogu.protocol.generated.outer.HttpWs.WebSocketMessage
      @JvmName("getMessage")
      get() = _builder.getMessage()
      @JvmName("setMessage")
      set(value) {
        _builder.setMessage(value)
      }
    /**
     * <code>.outer.WebSocketMessage message = 2;</code>
     */
    fun clearMessage() {
      _builder.clearMessage()
    }
    /**
     * <code>.outer.WebSocketMessage message = 2;</code>
     * @return Whether the message field is set.
     */
    fun hasMessage(): kotlin.Boolean {
      return _builder.hasMessage()
    }

    /**
     * <code>.outer.WebSocketClose close = 3;</code>
     */
    var close: com.dogu.protocol.generated.outer.HttpWs.WebSocketClose
      @JvmName("getClose")
      get() = _builder.getClose()
      @JvmName("setClose")
      set(value) {
        _builder.setClose(value)
      }
    /**
     * <code>.outer.WebSocketClose close = 3;</code>
     */
    fun clearClose() {
      _builder.clearClose()
    }
    /**
     * <code>.outer.WebSocketClose close = 3;</code>
     * @return Whether the close field is set.
     */
    fun hasClose(): kotlin.Boolean {
      return _builder.hasClose()
    }
    val valueCase: com.dogu.protocol.generated.outer.HttpWs.WebSocketParam.ValueCase
      @JvmName("getValueCase")
      get() = _builder.getValueCase()

    fun clearValue() {
      _builder.clearValue()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun com.dogu.protocol.generated.outer.HttpWs.WebSocketParam.copy(block: com.dogu.protocol.generated.outer.WebSocketParamKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.outer.HttpWs.WebSocketParam =
  com.dogu.protocol.generated.outer.WebSocketParamKt.Dsl._create(this.toBuilder()).apply { block() }._build()

val com.dogu.protocol.generated.outer.HttpWs.WebSocketParamOrBuilder.connectionOrNull: com.dogu.protocol.generated.outer.HttpWs.WebSocketConnection?
  get() = if (hasConnection()) getConnection() else null

val com.dogu.protocol.generated.outer.HttpWs.WebSocketParamOrBuilder.messageOrNull: com.dogu.protocol.generated.outer.HttpWs.WebSocketMessage?
  get() = if (hasMessage()) getMessage() else null

val com.dogu.protocol.generated.outer.HttpWs.WebSocketParamOrBuilder.closeOrNull: com.dogu.protocol.generated.outer.HttpWs.WebSocketClose?
  get() = if (hasClose()) getClose() else null

