//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: outer/http_ws.proto

package com.dogu.protocol.generated.outer;

@kotlin.jvm.JvmName("-initializeheaders")
inline fun headers(block: com.dogu.protocol.generated.outer.HeadersKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.outer.HttpWs.Headers =
  com.dogu.protocol.generated.outer.HeadersKt.Dsl._create(com.dogu.protocol.generated.outer.HttpWs.Headers.newBuilder()).apply { block() }._build()
object HeadersKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    private val _builder: com.dogu.protocol.generated.outer.HttpWs.Headers.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: com.dogu.protocol.generated.outer.HttpWs.Headers.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): com.dogu.protocol.generated.outer.HttpWs.Headers = _builder.build()

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    class ValuesProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <code>repeated .outer.HeaderValue values = 1;</code>
     */
     val values: com.google.protobuf.kotlin.DslList<com.dogu.protocol.generated.outer.HttpWs.HeaderValue, ValuesProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getValuesList()
      )
    /**
     * <code>repeated .outer.HeaderValue values = 1;</code>
     * @param value The values to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addValues")
    fun com.google.protobuf.kotlin.DslList<com.dogu.protocol.generated.outer.HttpWs.HeaderValue, ValuesProxy>.add(value: com.dogu.protocol.generated.outer.HttpWs.HeaderValue) {
      _builder.addValues(value)
    }
    /**
     * <code>repeated .outer.HeaderValue values = 1;</code>
     * @param value The values to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignValues")
    @Suppress("NOTHING_TO_INLINE")
    inline operator fun com.google.protobuf.kotlin.DslList<com.dogu.protocol.generated.outer.HttpWs.HeaderValue, ValuesProxy>.plusAssign(value: com.dogu.protocol.generated.outer.HttpWs.HeaderValue) {
      add(value)
    }
    /**
     * <code>repeated .outer.HeaderValue values = 1;</code>
     * @param values The values to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllValues")
    fun com.google.protobuf.kotlin.DslList<com.dogu.protocol.generated.outer.HttpWs.HeaderValue, ValuesProxy>.addAll(values: kotlin.collections.Iterable<com.dogu.protocol.generated.outer.HttpWs.HeaderValue>) {
      _builder.addAllValues(values)
    }
    /**
     * <code>repeated .outer.HeaderValue values = 1;</code>
     * @param values The values to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllValues")
    @Suppress("NOTHING_TO_INLINE")
    inline operator fun com.google.protobuf.kotlin.DslList<com.dogu.protocol.generated.outer.HttpWs.HeaderValue, ValuesProxy>.plusAssign(values: kotlin.collections.Iterable<com.dogu.protocol.generated.outer.HttpWs.HeaderValue>) {
      addAll(values)
    }
    /**
     * <code>repeated .outer.HeaderValue values = 1;</code>
     * @param index The index to set the value at.
     * @param value The values to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setValues")
    operator fun com.google.protobuf.kotlin.DslList<com.dogu.protocol.generated.outer.HttpWs.HeaderValue, ValuesProxy>.set(index: kotlin.Int, value: com.dogu.protocol.generated.outer.HttpWs.HeaderValue) {
      _builder.setValues(index, value)
    }
    /**
     * <code>repeated .outer.HeaderValue values = 1;</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearValues")
    fun com.google.protobuf.kotlin.DslList<com.dogu.protocol.generated.outer.HttpWs.HeaderValue, ValuesProxy>.clear() {
      _builder.clearValues()
    }

  }
}
@kotlin.jvm.JvmSynthetic
inline fun com.dogu.protocol.generated.outer.HttpWs.Headers.copy(block: com.dogu.protocol.generated.outer.HeadersKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.outer.HttpWs.Headers =
  com.dogu.protocol.generated.outer.HeadersKt.Dsl._create(this.toBuilder()).apply { block() }._build()
