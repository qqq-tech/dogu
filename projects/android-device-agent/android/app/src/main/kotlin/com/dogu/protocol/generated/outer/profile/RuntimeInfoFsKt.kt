//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: outer/profile/runtime_info.proto

package com.dogu.protocol.generated.outer.profile;

@kotlin.jvm.JvmName("-initializeruntimeInfoFs")
inline fun runtimeInfoFs(block: com.dogu.protocol.generated.outer.profile.RuntimeInfoFsKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.outer.profile.RuntimeInfoOuterClass.RuntimeInfoFs =
  com.dogu.protocol.generated.outer.profile.RuntimeInfoFsKt.Dsl._create(com.dogu.protocol.generated.outer.profile.RuntimeInfoOuterClass.RuntimeInfoFs.newBuilder()).apply { block() }._build()
object RuntimeInfoFsKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    private val _builder: com.dogu.protocol.generated.outer.profile.RuntimeInfoOuterClass.RuntimeInfoFs.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: com.dogu.protocol.generated.outer.profile.RuntimeInfoOuterClass.RuntimeInfoFs.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): com.dogu.protocol.generated.outer.profile.RuntimeInfoOuterClass.RuntimeInfoFs = _builder.build()

    /**
     * <code>string name = 1;</code>
     */
    var name: kotlin.String
      @JvmName("getName")
      get() = _builder.getName()
      @JvmName("setName")
      set(value) {
        _builder.setName(value)
      }
    /**
     * <code>string name = 1;</code>
     */
    fun clearName() {
      _builder.clearName()
    }

    /**
     * <code>string type = 2;</code>
     */
    var type: kotlin.String
      @JvmName("getType")
      get() = _builder.getType()
      @JvmName("setType")
      set(value) {
        _builder.setType(value)
      }
    /**
     * <code>string type = 2;</code>
     */
    fun clearType() {
      _builder.clearType()
    }

    /**
     * <code>string mount = 3;</code>
     */
    var mount: kotlin.String
      @JvmName("getMount")
      get() = _builder.getMount()
      @JvmName("setMount")
      set(value) {
        _builder.setMount(value)
      }
    /**
     * <code>string mount = 3;</code>
     */
    fun clearMount() {
      _builder.clearMount()
    }

    /**
     * <code>fixed64 size = 4;</code>
     */
    var size: kotlin.Long
      @JvmName("getSize")
      get() = _builder.getSize()
      @JvmName("setSize")
      set(value) {
        _builder.setSize(value)
      }
    /**
     * <code>fixed64 size = 4;</code>
     */
    fun clearSize() {
      _builder.clearSize()
    }

    /**
     * <code>fixed64 used = 5;</code>
     */
    var used: kotlin.Long
      @JvmName("getUsed")
      get() = _builder.getUsed()
      @JvmName("setUsed")
      set(value) {
        _builder.setUsed(value)
      }
    /**
     * <code>fixed64 used = 5;</code>
     */
    fun clearUsed() {
      _builder.clearUsed()
    }

    /**
     * <code>fixed64 available = 6;</code>
     */
    var available: kotlin.Long
      @JvmName("getAvailable")
      get() = _builder.getAvailable()
      @JvmName("setAvailable")
      set(value) {
        _builder.setAvailable(value)
      }
    /**
     * <code>fixed64 available = 6;</code>
     */
    fun clearAvailable() {
      _builder.clearAvailable()
    }

    /**
     * <code>fixed64 use = 7;</code>
     */
    var use: kotlin.Long
      @JvmName("getUse")
      get() = _builder.getUse()
      @JvmName("setUse")
      set(value) {
        _builder.setUse(value)
      }
    /**
     * <code>fixed64 use = 7;</code>
     */
    fun clearUse() {
      _builder.clearUse()
    }

    /**
     * <code>fixed64 reads_completed = 8;</code>
     */
    var readsCompleted: kotlin.Long
      @JvmName("getReadsCompleted")
      get() = _builder.getReadsCompleted()
      @JvmName("setReadsCompleted")
      set(value) {
        _builder.setReadsCompleted(value)
      }
    /**
     * <code>fixed64 reads_completed = 8;</code>
     */
    fun clearReadsCompleted() {
      _builder.clearReadsCompleted()
    }

    /**
     * <code>fixed64 time_spent_read_ms = 9;</code>
     */
    var timeSpentReadMs: kotlin.Long
      @JvmName("getTimeSpentReadMs")
      get() = _builder.getTimeSpentReadMs()
      @JvmName("setTimeSpentReadMs")
      set(value) {
        _builder.setTimeSpentReadMs(value)
      }
    /**
     * <code>fixed64 time_spent_read_ms = 9;</code>
     */
    fun clearTimeSpentReadMs() {
      _builder.clearTimeSpentReadMs()
    }

    /**
     * <code>fixed64 writes_completed = 10;</code>
     */
    var writesCompleted: kotlin.Long
      @JvmName("getWritesCompleted")
      get() = _builder.getWritesCompleted()
      @JvmName("setWritesCompleted")
      set(value) {
        _builder.setWritesCompleted(value)
      }
    /**
     * <code>fixed64 writes_completed = 10;</code>
     */
    fun clearWritesCompleted() {
      _builder.clearWritesCompleted()
    }

    /**
     * <code>fixed64 time_spent_write_ms = 11;</code>
     */
    var timeSpentWriteMs: kotlin.Long
      @JvmName("getTimeSpentWriteMs")
      get() = _builder.getTimeSpentWriteMs()
      @JvmName("setTimeSpentWriteMs")
      set(value) {
        _builder.setTimeSpentWriteMs(value)
      }
    /**
     * <code>fixed64 time_spent_write_ms = 11;</code>
     */
    fun clearTimeSpentWriteMs() {
      _builder.clearTimeSpentWriteMs()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun com.dogu.protocol.generated.outer.profile.RuntimeInfoOuterClass.RuntimeInfoFs.copy(block: com.dogu.protocol.generated.outer.profile.RuntimeInfoFsKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.outer.profile.RuntimeInfoOuterClass.RuntimeInfoFs =
  com.dogu.protocol.generated.outer.profile.RuntimeInfoFsKt.Dsl._create(this.toBuilder()).apply { block() }._build()
