//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: inner/types/dc_da.proto

package com.dogu.protocol.generated.inner.types;

@kotlin.jvm.JvmName("-initializedcDaConnectionParam")
inline fun dcDaConnectionParam(block: com.dogu.protocol.generated.inner.types.DcDaConnectionParamKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.inner.types.DcDa.DcDaConnectionParam =
  com.dogu.protocol.generated.inner.types.DcDaConnectionParamKt.Dsl._create(com.dogu.protocol.generated.inner.types.DcDa.DcDaConnectionParam.newBuilder()).apply { block() }._build()
object DcDaConnectionParamKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    private val _builder: com.dogu.protocol.generated.inner.types.DcDa.DcDaConnectionParam.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: com.dogu.protocol.generated.inner.types.DcDa.DcDaConnectionParam.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): com.dogu.protocol.generated.inner.types.DcDa.DcDaConnectionParam = _builder.build()

    /**
     * <code>string version = 1;</code>
     */
    var version: kotlin.String
      @JvmName("getVersion")
      get() = _builder.getVersion()
      @JvmName("setVersion")
      set(value) {
        _builder.setVersion(value)
      }
    /**
     * <code>string version = 1;</code>
     */
    fun clearVersion() {
      _builder.clearVersion()
    }

    /**
     * <code>string nickname = 2;</code>
     */
    var nickname: kotlin.String
      @JvmName("getNickname")
      get() = _builder.getNickname()
      @JvmName("setNickname")
      set(value) {
        _builder.setNickname(value)
      }
    /**
     * <code>string nickname = 2;</code>
     */
    fun clearNickname() {
      _builder.clearNickname()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun com.dogu.protocol.generated.inner.types.DcDa.DcDaConnectionParam.copy(block: com.dogu.protocol.generated.inner.types.DcDaConnectionParamKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.inner.types.DcDa.DcDaConnectionParam =
  com.dogu.protocol.generated.inner.types.DcDaConnectionParamKt.Dsl._create(this.toBuilder()).apply { block() }._build()

