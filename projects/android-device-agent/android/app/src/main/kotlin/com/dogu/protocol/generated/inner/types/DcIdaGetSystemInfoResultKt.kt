//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: inner/types/dc_ida.proto

package com.dogu.protocol.generated.inner.types;

@kotlin.jvm.JvmName("-initializedcIdaGetSystemInfoResult")
inline fun dcIdaGetSystemInfoResult(block: com.dogu.protocol.generated.inner.types.DcIdaGetSystemInfoResultKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.inner.types.DcIda.DcIdaGetSystemInfoResult =
  com.dogu.protocol.generated.inner.types.DcIdaGetSystemInfoResultKt.Dsl._create(com.dogu.protocol.generated.inner.types.DcIda.DcIdaGetSystemInfoResult.newBuilder()).apply { block() }._build()
object DcIdaGetSystemInfoResultKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    private val _builder: com.dogu.protocol.generated.inner.types.DcIda.DcIdaGetSystemInfoResult.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: com.dogu.protocol.generated.inner.types.DcIda.DcIdaGetSystemInfoResult.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): com.dogu.protocol.generated.inner.types.DcIda.DcIdaGetSystemInfoResult = _builder.build()

    /**
     * <code>uint32 screen_width = 1;</code>
     */
    var screenWidth: kotlin.Int
      @JvmName("getScreenWidth")
      get() = _builder.getScreenWidth()
      @JvmName("setScreenWidth")
      set(value) {
        _builder.setScreenWidth(value)
      }
    /**
     * <code>uint32 screen_width = 1;</code>
     */
    fun clearScreenWidth() {
      _builder.clearScreenWidth()
    }

    /**
     * <code>uint32 screen_height = 2;</code>
     */
    var screenHeight: kotlin.Int
      @JvmName("getScreenHeight")
      get() = _builder.getScreenHeight()
      @JvmName("setScreenHeight")
      set(value) {
        _builder.setScreenHeight(value)
      }
    /**
     * <code>uint32 screen_height = 2;</code>
     */
    fun clearScreenHeight() {
      _builder.clearScreenHeight()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun com.dogu.protocol.generated.inner.types.DcIda.DcIdaGetSystemInfoResult.copy(block: com.dogu.protocol.generated.inner.types.DcIdaGetSystemInfoResultKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.inner.types.DcIda.DcIdaGetSystemInfoResult =
  com.dogu.protocol.generated.inner.types.DcIdaGetSystemInfoResultKt.Dsl._create(this.toBuilder()).apply { block() }._build()

