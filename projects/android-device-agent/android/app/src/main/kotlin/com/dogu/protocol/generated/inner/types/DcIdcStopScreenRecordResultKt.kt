//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: inner/types/dc_idc.proto

package com.dogu.protocol.generated.inner.types;

@kotlin.jvm.JvmName("-initializedcIdcStopScreenRecordResult")
inline fun dcIdcStopScreenRecordResult(block: com.dogu.protocol.generated.inner.types.DcIdcStopScreenRecordResultKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.inner.types.DcIdc.DcIdcStopScreenRecordResult =
  com.dogu.protocol.generated.inner.types.DcIdcStopScreenRecordResultKt.Dsl._create(com.dogu.protocol.generated.inner.types.DcIdc.DcIdcStopScreenRecordResult.newBuilder()).apply { block() }._build()
object DcIdcStopScreenRecordResultKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    private val _builder: com.dogu.protocol.generated.inner.types.DcIdc.DcIdcStopScreenRecordResult.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: com.dogu.protocol.generated.inner.types.DcIdc.DcIdcStopScreenRecordResult.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): com.dogu.protocol.generated.inner.types.DcIdc.DcIdcStopScreenRecordResult = _builder.build()

    /**
     * <code>.outer.ErrorResult error = 1;</code>
     */
    var error: com.dogu.protocol.generated.outer.Errors.ErrorResult
      @JvmName("getError")
      get() = _builder.getError()
      @JvmName("setError")
      set(value) {
        _builder.setError(value)
      }
    /**
     * <code>.outer.ErrorResult error = 1;</code>
     */
    fun clearError() {
      _builder.clearError()
    }
    /**
     * <code>.outer.ErrorResult error = 1;</code>
     * @return Whether the error field is set.
     */
    fun hasError(): kotlin.Boolean {
      return _builder.hasError()
    }

    /**
     * <code>string file_path = 2;</code>
     */
    var filePath: kotlin.String
      @JvmName("getFilePath")
      get() = _builder.getFilePath()
      @JvmName("setFilePath")
      set(value) {
        _builder.setFilePath(value)
      }
    /**
     * <code>string file_path = 2;</code>
     */
    fun clearFilePath() {
      _builder.clearFilePath()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun com.dogu.protocol.generated.inner.types.DcIdc.DcIdcStopScreenRecordResult.copy(block: com.dogu.protocol.generated.inner.types.DcIdcStopScreenRecordResultKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.inner.types.DcIdc.DcIdcStopScreenRecordResult =
  com.dogu.protocol.generated.inner.types.DcIdcStopScreenRecordResultKt.Dsl._create(this.toBuilder()).apply { block() }._build()

val com.dogu.protocol.generated.inner.types.DcIdc.DcIdcStopScreenRecordResultOrBuilder.errorOrNull: com.dogu.protocol.generated.outer.Errors.ErrorResult?
  get() = if (hasError()) getError() else null
