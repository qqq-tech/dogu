//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: inner/types/dc_idc.proto

package com.dogu.protocol.generated.inner.types;

@kotlin.jvm.JvmName("-initializedcIdcScanIdsResult")
inline fun dcIdcScanIdsResult(block: com.dogu.protocol.generated.inner.types.DcIdcScanIdsResultKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.inner.types.DcIdc.DcIdcScanIdsResult =
  com.dogu.protocol.generated.inner.types.DcIdcScanIdsResultKt.Dsl._create(com.dogu.protocol.generated.inner.types.DcIdc.DcIdcScanIdsResult.newBuilder()).apply { block() }._build()
object DcIdcScanIdsResultKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    private val _builder: com.dogu.protocol.generated.inner.types.DcIdc.DcIdcScanIdsResult.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: com.dogu.protocol.generated.inner.types.DcIdc.DcIdcScanIdsResult.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): com.dogu.protocol.generated.inner.types.DcIdc.DcIdcScanIdsResult = _builder.build()

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    class IdsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <code>repeated string ids = 1;</code>
     * @return A list containing the ids.
     */
     val ids: com.google.protobuf.kotlin.DslList<kotlin.String, IdsProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getIdsList()
      )
    /**
     * <code>repeated string ids = 1;</code>
     * @param value The ids to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addIds")
    fun com.google.protobuf.kotlin.DslList<kotlin.String, IdsProxy>.add(value: kotlin.String) {
      _builder.addIds(value)
    }
    /**
     * <code>repeated string ids = 1;</code>
     * @param value The ids to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignIds")
    @Suppress("NOTHING_TO_INLINE")
    inline operator fun com.google.protobuf.kotlin.DslList<kotlin.String, IdsProxy>.plusAssign(value: kotlin.String) {
      add(value)
    }
    /**
     * <code>repeated string ids = 1;</code>
     * @param values The ids to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllIds")
    fun com.google.protobuf.kotlin.DslList<kotlin.String, IdsProxy>.addAll(values: kotlin.collections.Iterable<kotlin.String>) {
      _builder.addAllIds(values)
    }
    /**
     * <code>repeated string ids = 1;</code>
     * @param values The ids to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllIds")
    @Suppress("NOTHING_TO_INLINE")
    inline operator fun com.google.protobuf.kotlin.DslList<kotlin.String, IdsProxy>.plusAssign(values: kotlin.collections.Iterable<kotlin.String>) {
      addAll(values)
    }
    /**
     * <code>repeated string ids = 1;</code>
     * @param index The index to set the value at.
     * @param value The ids to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setIds")
    operator fun com.google.protobuf.kotlin.DslList<kotlin.String, IdsProxy>.set(index: kotlin.Int, value: kotlin.String) {
      _builder.setIds(index, value)
    }/**
     * <code>repeated string ids = 1;</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearIds")
    fun com.google.protobuf.kotlin.DslList<kotlin.String, IdsProxy>.clear() {
      _builder.clearIds()
    }}
}
@kotlin.jvm.JvmSynthetic
inline fun com.dogu.protocol.generated.inner.types.DcIdc.DcIdcScanIdsResult.copy(block: com.dogu.protocol.generated.inner.types.DcIdcScanIdsResultKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.inner.types.DcIdc.DcIdcScanIdsResult =
  com.dogu.protocol.generated.inner.types.DcIdcScanIdsResultKt.Dsl._create(this.toBuilder()).apply { block() }._build()
