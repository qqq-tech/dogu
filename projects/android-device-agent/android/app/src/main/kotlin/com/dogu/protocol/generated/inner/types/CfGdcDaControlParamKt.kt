//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: inner/types/cf_gdc_da.proto

package com.dogu.protocol.generated.inner.types;

@kotlin.jvm.JvmName("-initializecfGdcDaControlParam")
inline fun cfGdcDaControlParam(block: com.dogu.protocol.generated.inner.types.CfGdcDaControlParamKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.inner.types.CfGdcDa.CfGdcDaControlParam =
  com.dogu.protocol.generated.inner.types.CfGdcDaControlParamKt.Dsl._create(com.dogu.protocol.generated.inner.types.CfGdcDa.CfGdcDaControlParam.newBuilder()).apply { block() }._build()
object CfGdcDaControlParamKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    private val _builder: com.dogu.protocol.generated.inner.types.CfGdcDa.CfGdcDaControlParam.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: com.dogu.protocol.generated.inner.types.CfGdcDa.CfGdcDaControlParam.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): com.dogu.protocol.generated.inner.types.CfGdcDa.CfGdcDaControlParam = _builder.build()

    /**
     * <code>.inner.types.DeviceControl control = 1;</code>
     */
    var control: com.dogu.protocol.generated.inner.types.DeviceControlOuterClass.DeviceControl
      @JvmName("getControl")
      get() = _builder.getControl()
      @JvmName("setControl")
      set(value) {
        _builder.setControl(value)
      }
    /**
     * <code>.inner.types.DeviceControl control = 1;</code>
     */
    fun clearControl() {
      _builder.clearControl()
    }
    /**
     * <code>.inner.types.DeviceControl control = 1;</code>
     * @return Whether the control field is set.
     */
    fun hasControl(): kotlin.Boolean {
      return _builder.hasControl()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun com.dogu.protocol.generated.inner.types.CfGdcDa.CfGdcDaControlParam.copy(block: com.dogu.protocol.generated.inner.types.CfGdcDaControlParamKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.inner.types.CfGdcDa.CfGdcDaControlParam =
  com.dogu.protocol.generated.inner.types.CfGdcDaControlParamKt.Dsl._create(this.toBuilder()).apply { block() }._build()

val com.dogu.protocol.generated.inner.types.CfGdcDa.CfGdcDaControlParamOrBuilder.controlOrNull: com.dogu.protocol.generated.inner.types.DeviceControlOuterClass.DeviceControl?
  get() = if (hasControl()) getControl() else null
