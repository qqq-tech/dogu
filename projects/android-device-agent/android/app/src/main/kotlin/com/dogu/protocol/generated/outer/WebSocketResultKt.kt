//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: outer/http_ws.proto

package com.dogu.protocol.generated.outer;

@kotlin.jvm.JvmName("-initializewebSocketResult")
inline fun webSocketResult(block: com.dogu.protocol.generated.outer.WebSocketResultKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.outer.HttpWs.WebSocketResult =
  com.dogu.protocol.generated.outer.WebSocketResultKt.Dsl._create(com.dogu.protocol.generated.outer.HttpWs.WebSocketResult.newBuilder()).apply { block() }._build()
object WebSocketResultKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    private val _builder: com.dogu.protocol.generated.outer.HttpWs.WebSocketResult.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: com.dogu.protocol.generated.outer.HttpWs.WebSocketResult.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): com.dogu.protocol.generated.outer.HttpWs.WebSocketResult = _builder.build()

    /**
     * <code>.outer.WebSocketOpenEvent open_event = 1;</code>
     */
    var openEvent: com.dogu.protocol.generated.outer.HttpWs.WebSocketOpenEvent
      @JvmName("getOpenEvent")
      get() = _builder.getOpenEvent()
      @JvmName("setOpenEvent")
      set(value) {
        _builder.setOpenEvent(value)
      }
    /**
     * <code>.outer.WebSocketOpenEvent open_event = 1;</code>
     */
    fun clearOpenEvent() {
      _builder.clearOpenEvent()
    }
    /**
     * <code>.outer.WebSocketOpenEvent open_event = 1;</code>
     * @return Whether the openEvent field is set.
     */
    fun hasOpenEvent(): kotlin.Boolean {
      return _builder.hasOpenEvent()
    }

    /**
     * <code>.outer.WebSocketErrorEvent error_event = 2;</code>
     */
    var errorEvent: com.dogu.protocol.generated.outer.HttpWs.WebSocketErrorEvent
      @JvmName("getErrorEvent")
      get() = _builder.getErrorEvent()
      @JvmName("setErrorEvent")
      set(value) {
        _builder.setErrorEvent(value)
      }
    /**
     * <code>.outer.WebSocketErrorEvent error_event = 2;</code>
     */
    fun clearErrorEvent() {
      _builder.clearErrorEvent()
    }
    /**
     * <code>.outer.WebSocketErrorEvent error_event = 2;</code>
     * @return Whether the errorEvent field is set.
     */
    fun hasErrorEvent(): kotlin.Boolean {
      return _builder.hasErrorEvent()
    }

    /**
     * <code>.outer.WebSocketCloseEvent close_event = 3;</code>
     */
    var closeEvent: com.dogu.protocol.generated.outer.HttpWs.WebSocketCloseEvent
      @JvmName("getCloseEvent")
      get() = _builder.getCloseEvent()
      @JvmName("setCloseEvent")
      set(value) {
        _builder.setCloseEvent(value)
      }
    /**
     * <code>.outer.WebSocketCloseEvent close_event = 3;</code>
     */
    fun clearCloseEvent() {
      _builder.clearCloseEvent()
    }
    /**
     * <code>.outer.WebSocketCloseEvent close_event = 3;</code>
     * @return Whether the closeEvent field is set.
     */
    fun hasCloseEvent(): kotlin.Boolean {
      return _builder.hasCloseEvent()
    }

    /**
     * <code>.outer.WebSocketMessageEvent message_event = 4;</code>
     */
    var messageEvent: com.dogu.protocol.generated.outer.HttpWs.WebSocketMessageEvent
      @JvmName("getMessageEvent")
      get() = _builder.getMessageEvent()
      @JvmName("setMessageEvent")
      set(value) {
        _builder.setMessageEvent(value)
      }
    /**
     * <code>.outer.WebSocketMessageEvent message_event = 4;</code>
     */
    fun clearMessageEvent() {
      _builder.clearMessageEvent()
    }
    /**
     * <code>.outer.WebSocketMessageEvent message_event = 4;</code>
     * @return Whether the messageEvent field is set.
     */
    fun hasMessageEvent(): kotlin.Boolean {
      return _builder.hasMessageEvent()
    }

    /**
     * <code>.outer.ErrorResult error = 5;</code>
     */
    var error: com.dogu.protocol.generated.outer.Errors.ErrorResult
      @JvmName("getError")
      get() = _builder.getError()
      @JvmName("setError")
      set(value) {
        _builder.setError(value)
      }
    /**
     * <code>.outer.ErrorResult error = 5;</code>
     */
    fun clearError() {
      _builder.clearError()
    }
    /**
     * <code>.outer.ErrorResult error = 5;</code>
     * @return Whether the error field is set.
     */
    fun hasError(): kotlin.Boolean {
      return _builder.hasError()
    }
    val valueCase: com.dogu.protocol.generated.outer.HttpWs.WebSocketResult.ValueCase
      @JvmName("getValueCase")
      get() = _builder.getValueCase()

    fun clearValue() {
      _builder.clearValue()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun com.dogu.protocol.generated.outer.HttpWs.WebSocketResult.copy(block: com.dogu.protocol.generated.outer.WebSocketResultKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.outer.HttpWs.WebSocketResult =
  com.dogu.protocol.generated.outer.WebSocketResultKt.Dsl._create(this.toBuilder()).apply { block() }._build()

val com.dogu.protocol.generated.outer.HttpWs.WebSocketResultOrBuilder.openEventOrNull: com.dogu.protocol.generated.outer.HttpWs.WebSocketOpenEvent?
  get() = if (hasOpenEvent()) getOpenEvent() else null

val com.dogu.protocol.generated.outer.HttpWs.WebSocketResultOrBuilder.errorEventOrNull: com.dogu.protocol.generated.outer.HttpWs.WebSocketErrorEvent?
  get() = if (hasErrorEvent()) getErrorEvent() else null

val com.dogu.protocol.generated.outer.HttpWs.WebSocketResultOrBuilder.closeEventOrNull: com.dogu.protocol.generated.outer.HttpWs.WebSocketCloseEvent?
  get() = if (hasCloseEvent()) getCloseEvent() else null

val com.dogu.protocol.generated.outer.HttpWs.WebSocketResultOrBuilder.messageEventOrNull: com.dogu.protocol.generated.outer.HttpWs.WebSocketMessageEvent?
  get() = if (hasMessageEvent()) getMessageEvent() else null

val com.dogu.protocol.generated.outer.HttpWs.WebSocketResultOrBuilder.errorOrNull: com.dogu.protocol.generated.outer.Errors.ErrorResult?
  get() = if (hasError()) getError() else null
