//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: outer/profile/runtime_process_info.proto

package com.dogu.protocol.generated.outer.profile;

@kotlin.jvm.JvmName("-initializeruntimeProcessInfoMem")
inline fun runtimeProcessInfoMem(block: com.dogu.protocol.generated.outer.profile.RuntimeProcessInfoMemKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.outer.profile.RuntimeProcessInfoOuterClass.RuntimeProcessInfoMem =
  com.dogu.protocol.generated.outer.profile.RuntimeProcessInfoMemKt.Dsl._create(com.dogu.protocol.generated.outer.profile.RuntimeProcessInfoOuterClass.RuntimeProcessInfoMem.newBuilder()).apply { block() }._build()
object RuntimeProcessInfoMemKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    private val _builder: com.dogu.protocol.generated.outer.profile.RuntimeProcessInfoOuterClass.RuntimeProcessInfoMem.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: com.dogu.protocol.generated.outer.profile.RuntimeProcessInfoOuterClass.RuntimeProcessInfoMem.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): com.dogu.protocol.generated.outer.profile.RuntimeProcessInfoOuterClass.RuntimeProcessInfoMem = _builder.build()

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
     * <code>float percent = 2;</code>
     */
    var percent: kotlin.Float
      @JvmName("getPercent")
      get() = _builder.getPercent()
      @JvmName("setPercent")
      set(value) {
        _builder.setPercent(value)
      }
    /**
     * <code>float percent = 2;</code>
     */
    fun clearPercent() {
      _builder.clearPercent()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun com.dogu.protocol.generated.outer.profile.RuntimeProcessInfoOuterClass.RuntimeProcessInfoMem.copy(block: com.dogu.protocol.generated.outer.profile.RuntimeProcessInfoMemKt.Dsl.() -> kotlin.Unit): com.dogu.protocol.generated.outer.profile.RuntimeProcessInfoOuterClass.RuntimeProcessInfoMem =
  com.dogu.protocol.generated.outer.profile.RuntimeProcessInfoMemKt.Dsl._create(this.toBuilder()).apply { block() }._build()

