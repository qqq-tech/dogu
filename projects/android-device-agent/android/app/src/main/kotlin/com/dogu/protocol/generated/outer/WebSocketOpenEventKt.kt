//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: outer/http_ws.proto

package com.dogu.protocol.generated.outer;

@kotlin.jvm.JvmName("-initializewebSocketOpenEvent")
inline fun webSocketOpenEvent(block: com.dogu.protocol.generated.outer.WebSocketOpenEventKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.outer.HttpWs.WebSocketOpenEvent =
  com.dogu.protocol.generated.outer.WebSocketOpenEventKt.Dsl._create(com.dogu.protocol.generated.outer.HttpWs.WebSocketOpenEvent.newBuilder()).apply { block() }._build()
object WebSocketOpenEventKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    private val _builder: com.dogu.protocol.generated.outer.HttpWs.WebSocketOpenEvent.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: com.dogu.protocol.generated.outer.HttpWs.WebSocketOpenEvent.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): com.dogu.protocol.generated.outer.HttpWs.WebSocketOpenEvent = _builder.build()
  }
}
@kotlin.jvm.JvmSynthetic
inline fun com.dogu.protocol.generated.outer.HttpWs.WebSocketOpenEvent.copy(block: com.dogu.protocol.generated.outer.WebSocketOpenEventKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.outer.HttpWs.WebSocketOpenEvent =
  com.dogu.protocol.generated.outer.WebSocketOpenEventKt.Dsl._create(this.toBuilder()).apply { block() }._build()

