//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: inner/params/dc_da.proto

package com.dogu.protocol.generated.inner.params;

@kotlin.jvm.JvmName("-initializedcDaParam")
inline fun dcDaParam(block: com.dogu.protocol.generated.inner.params.DcDaParamKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.inner.params.DcDa.DcDaParam =
  com.dogu.protocol.generated.inner.params.DcDaParamKt.Dsl._create(com.dogu.protocol.generated.inner.params.DcDa.DcDaParam.newBuilder()).apply { block() }._build()
object DcDaParamKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    private val _builder: com.dogu.protocol.generated.inner.params.DcDa.DcDaParam.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: com.dogu.protocol.generated.inner.params.DcDa.DcDaParam.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): com.dogu.protocol.generated.inner.params.DcDa.DcDaParam = _builder.build()

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
     * <code>.inner.types.DcDaConnectionParam dc_da_connection_param = 2;</code>
     */
    var dcDaConnectionParam: com.dogu.protocol.generated.inner.types.DcDa.DcDaConnectionParam
      @JvmName("getDcDaConnectionParam")
      get() = _builder.getDcDaConnectionParam()
      @JvmName("setDcDaConnectionParam")
      set(value) {
        _builder.setDcDaConnectionParam(value)
      }
    /**
     * <code>.inner.types.DcDaConnectionParam dc_da_connection_param = 2;</code>
     */
    fun clearDcDaConnectionParam() {
      _builder.clearDcDaConnectionParam()
    }
    /**
     * <code>.inner.types.DcDaConnectionParam dc_da_connection_param = 2;</code>
     * @return Whether the dcDaConnectionParam field is set.
     */
    fun hasDcDaConnectionParam(): kotlin.Boolean {
      return _builder.hasDcDaConnectionParam()
    }

    /**
     * <code>.inner.types.DcDaQueryProfileParam dc_da_query_profile_param = 3;</code>
     */
    var dcDaQueryProfileParam: com.dogu.protocol.generated.inner.types.DcDa.DcDaQueryProfileParam
      @JvmName("getDcDaQueryProfileParam")
      get() = _builder.getDcDaQueryProfileParam()
      @JvmName("setDcDaQueryProfileParam")
      set(value) {
        _builder.setDcDaQueryProfileParam(value)
      }
    /**
     * <code>.inner.types.DcDaQueryProfileParam dc_da_query_profile_param = 3;</code>
     */
    fun clearDcDaQueryProfileParam() {
      _builder.clearDcDaQueryProfileParam()
    }
    /**
     * <code>.inner.types.DcDaQueryProfileParam dc_da_query_profile_param = 3;</code>
     * @return Whether the dcDaQueryProfileParam field is set.
     */
    fun hasDcDaQueryProfileParam(): kotlin.Boolean {
      return _builder.hasDcDaQueryProfileParam()
    }

    /**
     * <code>.inner.types.DcDaApplyStreamingOptionParam dc_da_apply_streaming_option_param = 4;</code>
     */
    var dcDaApplyStreamingOptionParam: com.dogu.protocol.generated.inner.types.DcDa.DcDaApplyStreamingOptionParam
      @JvmName("getDcDaApplyStreamingOptionParam")
      get() = _builder.getDcDaApplyStreamingOptionParam()
      @JvmName("setDcDaApplyStreamingOptionParam")
      set(value) {
        _builder.setDcDaApplyStreamingOptionParam(value)
      }
    /**
     * <code>.inner.types.DcDaApplyStreamingOptionParam dc_da_apply_streaming_option_param = 4;</code>
     */
    fun clearDcDaApplyStreamingOptionParam() {
      _builder.clearDcDaApplyStreamingOptionParam()
    }
    /**
     * <code>.inner.types.DcDaApplyStreamingOptionParam dc_da_apply_streaming_option_param = 4;</code>
     * @return Whether the dcDaApplyStreamingOptionParam field is set.
     */
    fun hasDcDaApplyStreamingOptionParam(): kotlin.Boolean {
      return _builder.hasDcDaApplyStreamingOptionParam()
    }

    /**
     * <code>.inner.types.DcDaControlParam dc_da_control_param = 5;</code>
     */
    var dcDaControlParam: com.dogu.protocol.generated.inner.types.DcDa.DcDaControlParam
      @JvmName("getDcDaControlParam")
      get() = _builder.getDcDaControlParam()
      @JvmName("setDcDaControlParam")
      set(value) {
        _builder.setDcDaControlParam(value)
      }
    /**
     * <code>.inner.types.DcDaControlParam dc_da_control_param = 5;</code>
     */
    fun clearDcDaControlParam() {
      _builder.clearDcDaControlParam()
    }
    /**
     * <code>.inner.types.DcDaControlParam dc_da_control_param = 5;</code>
     * @return Whether the dcDaControlParam field is set.
     */
    fun hasDcDaControlParam(): kotlin.Boolean {
      return _builder.hasDcDaControlParam()
    }
    val valueCase: com.dogu.protocol.generated.inner.params.DcDa.DcDaParam.ValueCase
      @JvmName("getValueCase")
      get() = _builder.getValueCase()

    fun clearValue() {
      _builder.clearValue()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun com.dogu.protocol.generated.inner.params.DcDa.DcDaParam.copy(block: com.dogu.protocol.generated.inner.params.DcDaParamKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.inner.params.DcDa.DcDaParam =
  com.dogu.protocol.generated.inner.params.DcDaParamKt.Dsl._create(this.toBuilder()).apply { block() }._build()

val com.dogu.protocol.generated.inner.params.DcDa.DcDaParamOrBuilder.dcDaConnectionParamOrNull: com.dogu.protocol.generated.inner.types.DcDa.DcDaConnectionParam?
  get() = if (hasDcDaConnectionParam()) getDcDaConnectionParam() else null

val com.dogu.protocol.generated.inner.params.DcDa.DcDaParamOrBuilder.dcDaQueryProfileParamOrNull: com.dogu.protocol.generated.inner.types.DcDa.DcDaQueryProfileParam?
  get() = if (hasDcDaQueryProfileParam()) getDcDaQueryProfileParam() else null

val com.dogu.protocol.generated.inner.params.DcDa.DcDaParamOrBuilder.dcDaApplyStreamingOptionParamOrNull: com.dogu.protocol.generated.inner.types.DcDa.DcDaApplyStreamingOptionParam?
  get() = if (hasDcDaApplyStreamingOptionParam()) getDcDaApplyStreamingOptionParam() else null

val com.dogu.protocol.generated.inner.params.DcDa.DcDaParamOrBuilder.dcDaControlParamOrNull: com.dogu.protocol.generated.inner.types.DcDa.DcDaControlParam?
  get() = if (hasDcDaControlParam()) getDcDaControlParam() else null
