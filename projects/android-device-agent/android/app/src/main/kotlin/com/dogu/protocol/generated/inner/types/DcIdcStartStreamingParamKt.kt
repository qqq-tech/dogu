//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: inner/types/dc_idc.proto

package com.dogu.protocol.generated.inner.types;

@kotlin.jvm.JvmName("-initializedcIdcStartStreamingParam")
inline fun dcIdcStartStreamingParam(block: com.dogu.protocol.generated.inner.types.DcIdcStartStreamingParamKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.inner.types.DcIdc.DcIdcStartStreamingParam =
  com.dogu.protocol.generated.inner.types.DcIdcStartStreamingParamKt.Dsl._create(com.dogu.protocol.generated.inner.types.DcIdc.DcIdcStartStreamingParam.newBuilder()).apply { block() }._build()
object DcIdcStartStreamingParamKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    private val _builder: com.dogu.protocol.generated.inner.types.DcIdc.DcIdcStartStreamingParam.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: com.dogu.protocol.generated.inner.types.DcIdc.DcIdcStartStreamingParam.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): com.dogu.protocol.generated.inner.types.DcIdc.DcIdcStartStreamingParam = _builder.build()

    /**
     * <code>.outer.streaming.StreamingOffer offer = 1;</code>
     */
    var offer: com.dogu.protocol.generated.outer.streaming.Streaming.StreamingOffer
      @JvmName("getOffer")
      get() = _builder.getOffer()
      @JvmName("setOffer")
      set(value) {
        _builder.setOffer(value)
      }
    /**
     * <code>.outer.streaming.StreamingOffer offer = 1;</code>
     */
    fun clearOffer() {
      _builder.clearOffer()
    }
    /**
     * <code>.outer.streaming.StreamingOffer offer = 1;</code>
     * @return Whether the offer field is set.
     */
    fun hasOffer(): kotlin.Boolean {
      return _builder.hasOffer()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun com.dogu.protocol.generated.inner.types.DcIdc.DcIdcStartStreamingParam.copy(block: com.dogu.protocol.generated.inner.types.DcIdcStartStreamingParamKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.inner.types.DcIdc.DcIdcStartStreamingParam =
  com.dogu.protocol.generated.inner.types.DcIdcStartStreamingParamKt.Dsl._create(this.toBuilder()).apply { block() }._build()

val com.dogu.protocol.generated.inner.types.DcIdc.DcIdcStartStreamingParamOrBuilder.offerOrNull: com.dogu.protocol.generated.outer.streaming.Streaming.StreamingOffer?
  get() = if (hasOffer()) getOffer() else null

