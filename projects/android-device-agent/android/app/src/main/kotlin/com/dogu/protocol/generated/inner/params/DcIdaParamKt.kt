//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: inner/params/dc_ida.proto

package com.dogu.protocol.generated.inner.params;

@kotlin.jvm.JvmName("-initializedcIdaParam")
inline fun dcIdaParam(block: com.dogu.protocol.generated.inner.params.DcIdaParamKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.inner.params.DcIda.DcIdaParam =
  com.dogu.protocol.generated.inner.params.DcIdaParamKt.Dsl._create(com.dogu.protocol.generated.inner.params.DcIda.DcIdaParam.newBuilder()).apply { block() }._build()
object DcIdaParamKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    private val _builder: com.dogu.protocol.generated.inner.params.DcIda.DcIdaParam.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: com.dogu.protocol.generated.inner.params.DcIda.DcIdaParam.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): com.dogu.protocol.generated.inner.params.DcIda.DcIdaParam = _builder.build()

    /**
     * <code>.inner.types.DcIdaRunAppParam dc_ida_runapp_param = 1;</code>
     */
    var dcIdaRunappParam: com.dogu.protocol.generated.inner.types.DcIda.DcIdaRunAppParam
      @JvmName("getDcIdaRunappParam")
      get() = _builder.getDcIdaRunappParam()
      @JvmName("setDcIdaRunappParam")
      set(value) {
        _builder.setDcIdaRunappParam(value)
      }
    /**
     * <code>.inner.types.DcIdaRunAppParam dc_ida_runapp_param = 1;</code>
     */
    fun clearDcIdaRunappParam() {
      _builder.clearDcIdaRunappParam()
    }
    /**
     * <code>.inner.types.DcIdaRunAppParam dc_ida_runapp_param = 1;</code>
     * @return Whether the dcIdaRunappParam field is set.
     */
    fun hasDcIdaRunappParam(): kotlin.Boolean {
      return _builder.hasDcIdaRunappParam()
    }

    /**
     * <code>.inner.types.DcIdaGetSystemInfoParam dc_ida_get_system_info_param = 2;</code>
     */
    var dcIdaGetSystemInfoParam: com.dogu.protocol.generated.inner.types.DcIda.DcIdaGetSystemInfoParam
      @JvmName("getDcIdaGetSystemInfoParam")
      get() = _builder.getDcIdaGetSystemInfoParam()
      @JvmName("setDcIdaGetSystemInfoParam")
      set(value) {
        _builder.setDcIdaGetSystemInfoParam(value)
      }
    /**
     * <code>.inner.types.DcIdaGetSystemInfoParam dc_ida_get_system_info_param = 2;</code>
     */
    fun clearDcIdaGetSystemInfoParam() {
      _builder.clearDcIdaGetSystemInfoParam()
    }
    /**
     * <code>.inner.types.DcIdaGetSystemInfoParam dc_ida_get_system_info_param = 2;</code>
     * @return Whether the dcIdaGetSystemInfoParam field is set.
     */
    fun hasDcIdaGetSystemInfoParam(): kotlin.Boolean {
      return _builder.hasDcIdaGetSystemInfoParam()
    }
    val valueCase: com.dogu.protocol.generated.inner.params.DcIda.DcIdaParam.ValueCase
      @JvmName("getValueCase")
      get() = _builder.getValueCase()

    fun clearValue() {
      _builder.clearValue()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun com.dogu.protocol.generated.inner.params.DcIda.DcIdaParam.copy(block: com.dogu.protocol.generated.inner.params.DcIdaParamKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.inner.params.DcIda.DcIdaParam =
  com.dogu.protocol.generated.inner.params.DcIdaParamKt.Dsl._create(this.toBuilder()).apply { block() }._build()

val com.dogu.protocol.generated.inner.params.DcIda.DcIdaParamOrBuilder.dcIdaRunappParamOrNull: com.dogu.protocol.generated.inner.types.DcIda.DcIdaRunAppParam?
  get() = if (hasDcIdaRunappParam()) getDcIdaRunappParam() else null

val com.dogu.protocol.generated.inner.params.DcIda.DcIdaParamOrBuilder.dcIdaGetSystemInfoParamOrNull: com.dogu.protocol.generated.inner.types.DcIda.DcIdaGetSystemInfoParam?
  get() = if (hasDcIdaGetSystemInfoParam()) getDcIdaGetSystemInfoParam() else null

