//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: inner/types/dc_idc.proto

package com.dogu.protocol.generated.inner.types;

@kotlin.jvm.JvmName("-initializedcIdcStopScreenRecordParam")
inline fun dcIdcStopScreenRecordParam(block: com.dogu.protocol.generated.inner.types.DcIdcStopScreenRecordParamKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.inner.types.DcIdc.DcIdcStopScreenRecordParam =
  com.dogu.protocol.generated.inner.types.DcIdcStopScreenRecordParamKt.Dsl._create(com.dogu.protocol.generated.inner.types.DcIdc.DcIdcStopScreenRecordParam.newBuilder()).apply { block() }._build()
object DcIdcStopScreenRecordParamKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    private val _builder: com.dogu.protocol.generated.inner.types.DcIdc.DcIdcStopScreenRecordParam.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: com.dogu.protocol.generated.inner.types.DcIdc.DcIdcStopScreenRecordParam.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): com.dogu.protocol.generated.inner.types.DcIdc.DcIdcStopScreenRecordParam = _builder.build()

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
  }
}
@kotlin.jvm.JvmSynthetic
inline fun com.dogu.protocol.generated.inner.types.DcIdc.DcIdcStopScreenRecordParam.copy(block: com.dogu.protocol.generated.inner.types.DcIdcStopScreenRecordParamKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.inner.types.DcIdc.DcIdcStopScreenRecordParam =
  com.dogu.protocol.generated.inner.types.DcIdcStopScreenRecordParamKt.Dsl._create(this.toBuilder()).apply { block() }._build()

