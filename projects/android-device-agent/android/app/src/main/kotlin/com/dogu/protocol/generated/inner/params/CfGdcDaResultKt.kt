//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: inner/params/cf_gdc_da.proto

package com.dogu.protocol.generated.inner.params;

@kotlin.jvm.JvmName("-initializecfGdcDaResult")
inline fun cfGdcDaResult(block: com.dogu.protocol.generated.inner.params.CfGdcDaResultKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.inner.params.CfGdcDa.CfGdcDaResult =
  com.dogu.protocol.generated.inner.params.CfGdcDaResultKt.Dsl._create(com.dogu.protocol.generated.inner.params.CfGdcDa.CfGdcDaResult.newBuilder()).apply { block() }._build()
object CfGdcDaResultKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    private val _builder: com.dogu.protocol.generated.inner.params.CfGdcDa.CfGdcDaResult.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: com.dogu.protocol.generated.inner.params.CfGdcDa.CfGdcDaResult.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): com.dogu.protocol.generated.inner.params.CfGdcDa.CfGdcDaResult = _builder.build()

    /**
     * <code>fixed32 seq = 1;</code>
     */
    var seq: kotlin.Int
      @JvmName("getSeq")
      get() = _builder.getSeq()
      @JvmName("setSeq")
      set(value) {
        _builder.setSeq(value)
      }
    /**
     * <code>fixed32 seq = 1;</code>
     */
    fun clearSeq() {
      _builder.clearSeq()
    }

    /**
     * <code>.inner.types.CfGdcDaControlResult cf_gdc_da_control_result = 10;</code>
     */
    var cfGdcDaControlResult: com.dogu.protocol.generated.inner.types.CfGdcDa.CfGdcDaControlResult
      @JvmName("getCfGdcDaControlResult")
      get() = _builder.getCfGdcDaControlResult()
      @JvmName("setCfGdcDaControlResult")
      set(value) {
        _builder.setCfGdcDaControlResult(value)
      }
    /**
     * <code>.inner.types.CfGdcDaControlResult cf_gdc_da_control_result = 10;</code>
     */
    fun clearCfGdcDaControlResult() {
      _builder.clearCfGdcDaControlResult()
    }
    /**
     * <code>.inner.types.CfGdcDaControlResult cf_gdc_da_control_result = 10;</code>
     * @return Whether the cfGdcDaControlResult field is set.
     */
    fun hasCfGdcDaControlResult(): kotlin.Boolean {
      return _builder.hasCfGdcDaControlResult()
    }
    val valueCase: com.dogu.protocol.generated.inner.params.CfGdcDa.CfGdcDaResult.ValueCase
      @JvmName("getValueCase")
      get() = _builder.getValueCase()

    fun clearValue() {
      _builder.clearValue()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun com.dogu.protocol.generated.inner.params.CfGdcDa.CfGdcDaResult.copy(block: com.dogu.protocol.generated.inner.params.CfGdcDaResultKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.inner.params.CfGdcDa.CfGdcDaResult =
  com.dogu.protocol.generated.inner.params.CfGdcDaResultKt.Dsl._create(this.toBuilder()).apply { block() }._build()

val com.dogu.protocol.generated.inner.params.CfGdcDa.CfGdcDaResultOrBuilder.cfGdcDaControlResultOrNull: com.dogu.protocol.generated.inner.types.CfGdcDa.CfGdcDaControlResult?
  get() = if (hasCfGdcDaControlResult()) getCfGdcDaControlResult() else null
