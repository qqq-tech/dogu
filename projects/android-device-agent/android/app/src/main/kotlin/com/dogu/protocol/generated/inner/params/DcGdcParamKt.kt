//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: inner/params/dc_gdc.proto

package com.dogu.protocol.generated.inner.params;

@kotlin.jvm.JvmName("-initializedcGdcParam")
inline fun dcGdcParam(block: com.dogu.protocol.generated.inner.params.DcGdcParamKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.inner.params.DcGdc.DcGdcParam =
  com.dogu.protocol.generated.inner.params.DcGdcParamKt.Dsl._create(com.dogu.protocol.generated.inner.params.DcGdc.DcGdcParam.newBuilder()).apply { block() }._build()
object DcGdcParamKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    private val _builder: com.dogu.protocol.generated.inner.params.DcGdc.DcGdcParam.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: com.dogu.protocol.generated.inner.params.DcGdc.DcGdcParam.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): com.dogu.protocol.generated.inner.params.DcGdc.DcGdcParam = _builder.build()

    /**
     * <code>.inner.types.DcGdcUpdateDeviceListParam dc_gdc_update_devicelist_param = 10;</code>
     */
    var dcGdcUpdateDevicelistParam: com.dogu.protocol.generated.inner.types.DcGdc.DcGdcUpdateDeviceListParam
      @JvmName("getDcGdcUpdateDevicelistParam")
      get() = _builder.getDcGdcUpdateDevicelistParam()
      @JvmName("setDcGdcUpdateDevicelistParam")
      set(value) {
        _builder.setDcGdcUpdateDevicelistParam(value)
      }
    /**
     * <code>.inner.types.DcGdcUpdateDeviceListParam dc_gdc_update_devicelist_param = 10;</code>
     */
    fun clearDcGdcUpdateDevicelistParam() {
      _builder.clearDcGdcUpdateDevicelistParam()
    }
    /**
     * <code>.inner.types.DcGdcUpdateDeviceListParam dc_gdc_update_devicelist_param = 10;</code>
     * @return Whether the dcGdcUpdateDevicelistParam field is set.
     */
    fun hasDcGdcUpdateDevicelistParam(): kotlin.Boolean {
      return _builder.hasDcGdcUpdateDevicelistParam()
    }

    /**
     * <code>.inner.types.DcGdcStartScreenRecordParam dc_gdc_start_screen_record_param = 13;</code>
     */
    var dcGdcStartScreenRecordParam: com.dogu.protocol.generated.inner.types.DcGdc.DcGdcStartScreenRecordParam
      @JvmName("getDcGdcStartScreenRecordParam")
      get() = _builder.getDcGdcStartScreenRecordParam()
      @JvmName("setDcGdcStartScreenRecordParam")
      set(value) {
        _builder.setDcGdcStartScreenRecordParam(value)
      }
    /**
     * <code>.inner.types.DcGdcStartScreenRecordParam dc_gdc_start_screen_record_param = 13;</code>
     */
    fun clearDcGdcStartScreenRecordParam() {
      _builder.clearDcGdcStartScreenRecordParam()
    }
    /**
     * <code>.inner.types.DcGdcStartScreenRecordParam dc_gdc_start_screen_record_param = 13;</code>
     * @return Whether the dcGdcStartScreenRecordParam field is set.
     */
    fun hasDcGdcStartScreenRecordParam(): kotlin.Boolean {
      return _builder.hasDcGdcStartScreenRecordParam()
    }

    /**
     * <code>.inner.types.DcGdcStopScreenRecordParam dc_gdc_stop_screen_record_param = 14;</code>
     */
    var dcGdcStopScreenRecordParam: com.dogu.protocol.generated.inner.types.DcGdc.DcGdcStopScreenRecordParam
      @JvmName("getDcGdcStopScreenRecordParam")
      get() = _builder.getDcGdcStopScreenRecordParam()
      @JvmName("setDcGdcStopScreenRecordParam")
      set(value) {
        _builder.setDcGdcStopScreenRecordParam(value)
      }
    /**
     * <code>.inner.types.DcGdcStopScreenRecordParam dc_gdc_stop_screen_record_param = 14;</code>
     */
    fun clearDcGdcStopScreenRecordParam() {
      _builder.clearDcGdcStopScreenRecordParam()
    }
    /**
     * <code>.inner.types.DcGdcStopScreenRecordParam dc_gdc_stop_screen_record_param = 14;</code>
     * @return Whether the dcGdcStopScreenRecordParam field is set.
     */
    fun hasDcGdcStopScreenRecordParam(): kotlin.Boolean {
      return _builder.hasDcGdcStopScreenRecordParam()
    }
    val valueCase: com.dogu.protocol.generated.inner.params.DcGdc.DcGdcParam.ValueCase
      @JvmName("getValueCase")
      get() = _builder.getValueCase()

    fun clearValue() {
      _builder.clearValue()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun com.dogu.protocol.generated.inner.params.DcGdc.DcGdcParam.copy(block: com.dogu.protocol.generated.inner.params.DcGdcParamKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.inner.params.DcGdc.DcGdcParam =
  com.dogu.protocol.generated.inner.params.DcGdcParamKt.Dsl._create(this.toBuilder()).apply { block() }._build()

val com.dogu.protocol.generated.inner.params.DcGdc.DcGdcParamOrBuilder.dcGdcUpdateDevicelistParamOrNull: com.dogu.protocol.generated.inner.types.DcGdc.DcGdcUpdateDeviceListParam?
  get() = if (hasDcGdcUpdateDevicelistParam()) getDcGdcUpdateDevicelistParam() else null

val com.dogu.protocol.generated.inner.params.DcGdc.DcGdcParamOrBuilder.dcGdcStartScreenRecordParamOrNull: com.dogu.protocol.generated.inner.types.DcGdc.DcGdcStartScreenRecordParam?
  get() = if (hasDcGdcStartScreenRecordParam()) getDcGdcStartScreenRecordParam() else null

val com.dogu.protocol.generated.inner.params.DcGdc.DcGdcParamOrBuilder.dcGdcStopScreenRecordParamOrNull: com.dogu.protocol.generated.inner.types.DcGdc.DcGdcStopScreenRecordParam?
  get() = if (hasDcGdcStopScreenRecordParam()) getDcGdcStopScreenRecordParam() else null
