//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: inner/params/dc_da.proto

package com.dogu.protocol.generated.inner.params;

@kotlin.jvm.JvmName("-initializedcDaReturn")
inline fun dcDaReturn(block: com.dogu.protocol.generated.inner.params.DcDaReturnKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.inner.params.DcDa.DcDaReturn =
  com.dogu.protocol.generated.inner.params.DcDaReturnKt.Dsl._create(com.dogu.protocol.generated.inner.params.DcDa.DcDaReturn.newBuilder()).apply { block() }._build()
object DcDaReturnKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    private val _builder: com.dogu.protocol.generated.inner.params.DcDa.DcDaReturn.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: com.dogu.protocol.generated.inner.params.DcDa.DcDaReturn.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): com.dogu.protocol.generated.inner.params.DcDa.DcDaReturn = _builder.build()

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
     * <code>.inner.types.DcDaConnectionReturn dc_da_connection_return = 2;</code>
     */
    var dcDaConnectionReturn: com.dogu.protocol.generated.inner.types.DcDa.DcDaConnectionReturn
      @JvmName("getDcDaConnectionReturn")
      get() = _builder.getDcDaConnectionReturn()
      @JvmName("setDcDaConnectionReturn")
      set(value) {
        _builder.setDcDaConnectionReturn(value)
      }
    /**
     * <code>.inner.types.DcDaConnectionReturn dc_da_connection_return = 2;</code>
     */
    fun clearDcDaConnectionReturn() {
      _builder.clearDcDaConnectionReturn()
    }
    /**
     * <code>.inner.types.DcDaConnectionReturn dc_da_connection_return = 2;</code>
     * @return Whether the dcDaConnectionReturn field is set.
     */
    fun hasDcDaConnectionReturn(): kotlin.Boolean {
      return _builder.hasDcDaConnectionReturn()
    }

    /**
     * <code>.inner.types.DcDaQueryProfileReturn dc_da_query_profile_return = 3;</code>
     */
    var dcDaQueryProfileReturn: com.dogu.protocol.generated.inner.types.DcDa.DcDaQueryProfileReturn
      @JvmName("getDcDaQueryProfileReturn")
      get() = _builder.getDcDaQueryProfileReturn()
      @JvmName("setDcDaQueryProfileReturn")
      set(value) {
        _builder.setDcDaQueryProfileReturn(value)
      }
    /**
     * <code>.inner.types.DcDaQueryProfileReturn dc_da_query_profile_return = 3;</code>
     */
    fun clearDcDaQueryProfileReturn() {
      _builder.clearDcDaQueryProfileReturn()
    }
    /**
     * <code>.inner.types.DcDaQueryProfileReturn dc_da_query_profile_return = 3;</code>
     * @return Whether the dcDaQueryProfileReturn field is set.
     */
    fun hasDcDaQueryProfileReturn(): kotlin.Boolean {
      return _builder.hasDcDaQueryProfileReturn()
    }

    /**
     * <code>.inner.types.DcDaApplyStreamingOptionReturn dc_da_apply_streaming_option_return = 4;</code>
     */
    var dcDaApplyStreamingOptionReturn: com.dogu.protocol.generated.inner.types.DcDa.DcDaApplyStreamingOptionReturn
      @JvmName("getDcDaApplyStreamingOptionReturn")
      get() = _builder.getDcDaApplyStreamingOptionReturn()
      @JvmName("setDcDaApplyStreamingOptionReturn")
      set(value) {
        _builder.setDcDaApplyStreamingOptionReturn(value)
      }
    /**
     * <code>.inner.types.DcDaApplyStreamingOptionReturn dc_da_apply_streaming_option_return = 4;</code>
     */
    fun clearDcDaApplyStreamingOptionReturn() {
      _builder.clearDcDaApplyStreamingOptionReturn()
    }
    /**
     * <code>.inner.types.DcDaApplyStreamingOptionReturn dc_da_apply_streaming_option_return = 4;</code>
     * @return Whether the dcDaApplyStreamingOptionReturn field is set.
     */
    fun hasDcDaApplyStreamingOptionReturn(): kotlin.Boolean {
      return _builder.hasDcDaApplyStreamingOptionReturn()
    }

    /**
     * <code>.inner.types.DcDaControlReturn dc_da_control_return = 5;</code>
     */
    var dcDaControlReturn: com.dogu.protocol.generated.inner.types.DcDa.DcDaControlReturn
      @JvmName("getDcDaControlReturn")
      get() = _builder.getDcDaControlReturn()
      @JvmName("setDcDaControlReturn")
      set(value) {
        _builder.setDcDaControlReturn(value)
      }
    /**
     * <code>.inner.types.DcDaControlReturn dc_da_control_return = 5;</code>
     */
    fun clearDcDaControlReturn() {
      _builder.clearDcDaControlReturn()
    }
    /**
     * <code>.inner.types.DcDaControlReturn dc_da_control_return = 5;</code>
     * @return Whether the dcDaControlReturn field is set.
     */
    fun hasDcDaControlReturn(): kotlin.Boolean {
      return _builder.hasDcDaControlReturn()
    }
    val valueCase: com.dogu.protocol.generated.inner.params.DcDa.DcDaReturn.ValueCase
      @JvmName("getValueCase")
      get() = _builder.getValueCase()

    fun clearValue() {
      _builder.clearValue()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun com.dogu.protocol.generated.inner.params.DcDa.DcDaReturn.copy(block: com.dogu.protocol.generated.inner.params.DcDaReturnKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.inner.params.DcDa.DcDaReturn =
  com.dogu.protocol.generated.inner.params.DcDaReturnKt.Dsl._create(this.toBuilder()).apply { block() }._build()

val com.dogu.protocol.generated.inner.params.DcDa.DcDaReturnOrBuilder.dcDaConnectionReturnOrNull: com.dogu.protocol.generated.inner.types.DcDa.DcDaConnectionReturn?
  get() = if (hasDcDaConnectionReturn()) getDcDaConnectionReturn() else null

val com.dogu.protocol.generated.inner.params.DcDa.DcDaReturnOrBuilder.dcDaQueryProfileReturnOrNull: com.dogu.protocol.generated.inner.types.DcDa.DcDaQueryProfileReturn?
  get() = if (hasDcDaQueryProfileReturn()) getDcDaQueryProfileReturn() else null

val com.dogu.protocol.generated.inner.params.DcDa.DcDaReturnOrBuilder.dcDaApplyStreamingOptionReturnOrNull: com.dogu.protocol.generated.inner.types.DcDa.DcDaApplyStreamingOptionReturn?
  get() = if (hasDcDaApplyStreamingOptionReturn()) getDcDaApplyStreamingOptionReturn() else null

val com.dogu.protocol.generated.inner.params.DcDa.DcDaReturnOrBuilder.dcDaControlReturnOrNull: com.dogu.protocol.generated.inner.types.DcDa.DcDaControlReturn?
  get() = if (hasDcDaControlReturn()) getDcDaControlReturn() else null
