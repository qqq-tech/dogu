//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: inner/types/cf_gdc_da.proto

package com.dogu.protocol.generated.inner.types;

@kotlin.jvm.JvmName("-initializedataChannelProtocolDeviceHttp")
inline fun dataChannelProtocolDeviceHttp(block: com.dogu.protocol.generated.inner.types.DataChannelProtocolDeviceHttpKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.inner.types.CfGdcDa.DataChannelProtocolDeviceHttp =
  com.dogu.protocol.generated.inner.types.DataChannelProtocolDeviceHttpKt.Dsl._create(com.dogu.protocol.generated.inner.types.CfGdcDa.DataChannelProtocolDeviceHttp.newBuilder()).apply { block() }._build()
object DataChannelProtocolDeviceHttpKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    private val _builder: com.dogu.protocol.generated.inner.types.CfGdcDa.DataChannelProtocolDeviceHttp.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: com.dogu.protocol.generated.inner.types.CfGdcDa.DataChannelProtocolDeviceHttp.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): com.dogu.protocol.generated.inner.types.CfGdcDa.DataChannelProtocolDeviceHttp = _builder.build()
  }
}
@kotlin.jvm.JvmSynthetic
inline fun com.dogu.protocol.generated.inner.types.CfGdcDa.DataChannelProtocolDeviceHttp.copy(block: com.dogu.protocol.generated.inner.types.DataChannelProtocolDeviceHttpKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.inner.types.CfGdcDa.DataChannelProtocolDeviceHttp =
  com.dogu.protocol.generated.inner.types.DataChannelProtocolDeviceHttpKt.Dsl._create(this.toBuilder()).apply { block() }._build()
