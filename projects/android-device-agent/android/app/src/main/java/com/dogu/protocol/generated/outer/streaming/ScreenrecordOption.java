// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: outer/streaming/screenrecord_option.proto

package com.dogu.protocol.generated.outer.streaming;

public final class ScreenrecordOption {
  private ScreenrecordOption() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }
  public interface ScreenRecordOptionOrBuilder extends
      // @@protoc_insertion_point(interface_extends:outer.streaming.ScreenRecordOption)
      com.google.protobuf.MessageLiteOrBuilder {

    /**
     * <code>.outer.streaming.ScreenCaptureOption screen = 1;</code>
     * @return Whether the screen field is set.
     */
    boolean hasScreen();
    /**
     * <code>.outer.streaming.ScreenCaptureOption screen = 1;</code>
     * @return The screen.
     */
    com.dogu.protocol.generated.outer.streaming.ScreencaptureOption.ScreenCaptureOption getScreen();

    /**
     * <code>string file_path = 2;</code>
     * @return The filePath.
     */
    java.lang.String getFilePath();
    /**
     * <code>string file_path = 2;</code>
     * @return The bytes for filePath.
     */
    com.google.protobuf.ByteString
        getFilePathBytes();

    /**
     * <code>optional string etc_param = 10;</code>
     * @return Whether the etcParam field is set.
     */
    boolean hasEtcParam();
    /**
     * <code>optional string etc_param = 10;</code>
     * @return The etcParam.
     */
    java.lang.String getEtcParam();
    /**
     * <code>optional string etc_param = 10;</code>
     * @return The bytes for etcParam.
     */
    com.google.protobuf.ByteString
        getEtcParamBytes();
  }
  /**
   * Protobuf type {@code outer.streaming.ScreenRecordOption}
   */
  public  static final class ScreenRecordOption extends
      com.google.protobuf.GeneratedMessageLite<
          ScreenRecordOption, ScreenRecordOption.Builder> implements
      // @@protoc_insertion_point(message_implements:outer.streaming.ScreenRecordOption)
      ScreenRecordOptionOrBuilder {
    private ScreenRecordOption() {
      filePath_ = "";
      etcParam_ = "";
    }
    private int bitField0_;
    public static final int SCREEN_FIELD_NUMBER = 1;
    private com.dogu.protocol.generated.outer.streaming.ScreencaptureOption.ScreenCaptureOption screen_;
    /**
     * <code>.outer.streaming.ScreenCaptureOption screen = 1;</code>
     */
    @java.lang.Override
    public boolean hasScreen() {
      return screen_ != null;
    }
    /**
     * <code>.outer.streaming.ScreenCaptureOption screen = 1;</code>
     */
    @java.lang.Override
    public com.dogu.protocol.generated.outer.streaming.ScreencaptureOption.ScreenCaptureOption getScreen() {
      return screen_ == null ? com.dogu.protocol.generated.outer.streaming.ScreencaptureOption.ScreenCaptureOption.getDefaultInstance() : screen_;
    }
    /**
     * <code>.outer.streaming.ScreenCaptureOption screen = 1;</code>
     */
    private void setScreen(com.dogu.protocol.generated.outer.streaming.ScreencaptureOption.ScreenCaptureOption value) {
      value.getClass();
  screen_ = value;
      
      }
    /**
     * <code>.outer.streaming.ScreenCaptureOption screen = 1;</code>
     */
    @java.lang.SuppressWarnings({"ReferenceEquality"})
    private void mergeScreen(com.dogu.protocol.generated.outer.streaming.ScreencaptureOption.ScreenCaptureOption value) {
      value.getClass();
  if (screen_ != null &&
          screen_ != com.dogu.protocol.generated.outer.streaming.ScreencaptureOption.ScreenCaptureOption.getDefaultInstance()) {
        screen_ =
          com.dogu.protocol.generated.outer.streaming.ScreencaptureOption.ScreenCaptureOption.newBuilder(screen_).mergeFrom(value).buildPartial();
      } else {
        screen_ = value;
      }
      
    }
    /**
     * <code>.outer.streaming.ScreenCaptureOption screen = 1;</code>
     */
    private void clearScreen() {  screen_ = null;
      
    }

    public static final int FILE_PATH_FIELD_NUMBER = 2;
    private java.lang.String filePath_;
    /**
     * <code>string file_path = 2;</code>
     * @return The filePath.
     */
    @java.lang.Override
    public java.lang.String getFilePath() {
      return filePath_;
    }
    /**
     * <code>string file_path = 2;</code>
     * @return The bytes for filePath.
     */
    @java.lang.Override
    public com.google.protobuf.ByteString
        getFilePathBytes() {
      return com.google.protobuf.ByteString.copyFromUtf8(filePath_);
    }
    /**
     * <code>string file_path = 2;</code>
     * @param value The filePath to set.
     */
    private void setFilePath(
        java.lang.String value) {
      java.lang.Class<?> valueClass = value.getClass();
  
      filePath_ = value;
    }
    /**
     * <code>string file_path = 2;</code>
     */
    private void clearFilePath() {
      
      filePath_ = getDefaultInstance().getFilePath();
    }
    /**
     * <code>string file_path = 2;</code>
     * @param value The bytes for filePath to set.
     */
    private void setFilePathBytes(
        com.google.protobuf.ByteString value) {
      checkByteStringIsUtf8(value);
      filePath_ = value.toStringUtf8();
      
    }

    public static final int ETC_PARAM_FIELD_NUMBER = 10;
    private java.lang.String etcParam_;
    /**
     * <code>optional string etc_param = 10;</code>
     * @return Whether the etcParam field is set.
     */
    @java.lang.Override
    public boolean hasEtcParam() {
      return ((bitField0_ & 0x00000001) != 0);
    }
    /**
     * <code>optional string etc_param = 10;</code>
     * @return The etcParam.
     */
    @java.lang.Override
    public java.lang.String getEtcParam() {
      return etcParam_;
    }
    /**
     * <code>optional string etc_param = 10;</code>
     * @return The bytes for etcParam.
     */
    @java.lang.Override
    public com.google.protobuf.ByteString
        getEtcParamBytes() {
      return com.google.protobuf.ByteString.copyFromUtf8(etcParam_);
    }
    /**
     * <code>optional string etc_param = 10;</code>
     * @param value The etcParam to set.
     */
    private void setEtcParam(
        java.lang.String value) {
      java.lang.Class<?> valueClass = value.getClass();
  bitField0_ |= 0x00000001;
      etcParam_ = value;
    }
    /**
     * <code>optional string etc_param = 10;</code>
     */
    private void clearEtcParam() {
      bitField0_ = (bitField0_ & ~0x00000001);
      etcParam_ = getDefaultInstance().getEtcParam();
    }
    /**
     * <code>optional string etc_param = 10;</code>
     * @param value The bytes for etcParam to set.
     */
    private void setEtcParamBytes(
        com.google.protobuf.ByteString value) {
      checkByteStringIsUtf8(value);
      etcParam_ = value.toStringUtf8();
      bitField0_ |= 0x00000001;
    }

    public static com.dogu.protocol.generated.outer.streaming.ScreenrecordOption.ScreenRecordOption parseFrom(
        java.nio.ByteBuffer data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return com.google.protobuf.GeneratedMessageLite.parseFrom(
          DEFAULT_INSTANCE, data);
    }
    public static com.dogu.protocol.generated.outer.streaming.ScreenrecordOption.ScreenRecordOption parseFrom(
        java.nio.ByteBuffer data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return com.google.protobuf.GeneratedMessageLite.parseFrom(
          DEFAULT_INSTANCE, data, extensionRegistry);
    }
    public static com.dogu.protocol.generated.outer.streaming.ScreenrecordOption.ScreenRecordOption parseFrom(
        com.google.protobuf.ByteString data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return com.google.protobuf.GeneratedMessageLite.parseFrom(
          DEFAULT_INSTANCE, data);
    }
    public static com.dogu.protocol.generated.outer.streaming.ScreenrecordOption.ScreenRecordOption parseFrom(
        com.google.protobuf.ByteString data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return com.google.protobuf.GeneratedMessageLite.parseFrom(
          DEFAULT_INSTANCE, data, extensionRegistry);
    }
    public static com.dogu.protocol.generated.outer.streaming.ScreenrecordOption.ScreenRecordOption parseFrom(byte[] data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return com.google.protobuf.GeneratedMessageLite.parseFrom(
          DEFAULT_INSTANCE, data);
    }
    public static com.dogu.protocol.generated.outer.streaming.ScreenrecordOption.ScreenRecordOption parseFrom(
        byte[] data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return com.google.protobuf.GeneratedMessageLite.parseFrom(
          DEFAULT_INSTANCE, data, extensionRegistry);
    }
    public static com.dogu.protocol.generated.outer.streaming.ScreenrecordOption.ScreenRecordOption parseFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageLite.parseFrom(
          DEFAULT_INSTANCE, input);
    }
    public static com.dogu.protocol.generated.outer.streaming.ScreenrecordOption.ScreenRecordOption parseFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageLite.parseFrom(
          DEFAULT_INSTANCE, input, extensionRegistry);
    }
    public static com.dogu.protocol.generated.outer.streaming.ScreenrecordOption.ScreenRecordOption parseDelimitedFrom(java.io.InputStream input)
        throws java.io.IOException {
      return parseDelimitedFrom(DEFAULT_INSTANCE, input);
    }
    public static com.dogu.protocol.generated.outer.streaming.ScreenrecordOption.ScreenRecordOption parseDelimitedFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return parseDelimitedFrom(DEFAULT_INSTANCE, input, extensionRegistry);
    }
    public static com.dogu.protocol.generated.outer.streaming.ScreenrecordOption.ScreenRecordOption parseFrom(
        com.google.protobuf.CodedInputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageLite.parseFrom(
          DEFAULT_INSTANCE, input);
    }
    public static com.dogu.protocol.generated.outer.streaming.ScreenrecordOption.ScreenRecordOption parseFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageLite.parseFrom(
          DEFAULT_INSTANCE, input, extensionRegistry);
    }

    public static Builder newBuilder() {
      return (Builder) DEFAULT_INSTANCE.createBuilder();
    }
    public static Builder newBuilder(com.dogu.protocol.generated.outer.streaming.ScreenrecordOption.ScreenRecordOption prototype) {
      return (Builder) DEFAULT_INSTANCE.createBuilder(prototype);
    }

    /**
     * Protobuf type {@code outer.streaming.ScreenRecordOption}
     */
    public static final class Builder extends
        com.google.protobuf.GeneratedMessageLite.Builder<
          com.dogu.protocol.generated.outer.streaming.ScreenrecordOption.ScreenRecordOption, Builder> implements
        // @@protoc_insertion_point(builder_implements:outer.streaming.ScreenRecordOption)
        com.dogu.protocol.generated.outer.streaming.ScreenrecordOption.ScreenRecordOptionOrBuilder {
      // Construct using com.dogu.protocol.generated.outer.streaming.ScreenrecordOption.ScreenRecordOption.newBuilder()
      private Builder() {
        super(DEFAULT_INSTANCE);
      }


      /**
       * <code>.outer.streaming.ScreenCaptureOption screen = 1;</code>
       */
      @java.lang.Override
      public boolean hasScreen() {
        return instance.hasScreen();
      }
      /**
       * <code>.outer.streaming.ScreenCaptureOption screen = 1;</code>
       */
      @java.lang.Override
      public com.dogu.protocol.generated.outer.streaming.ScreencaptureOption.ScreenCaptureOption getScreen() {
        return instance.getScreen();
      }
      /**
       * <code>.outer.streaming.ScreenCaptureOption screen = 1;</code>
       */
      public Builder setScreen(com.dogu.protocol.generated.outer.streaming.ScreencaptureOption.ScreenCaptureOption value) {
        copyOnWrite();
        instance.setScreen(value);
        return this;
        }
      /**
       * <code>.outer.streaming.ScreenCaptureOption screen = 1;</code>
       */
      public Builder setScreen(
          com.dogu.protocol.generated.outer.streaming.ScreencaptureOption.ScreenCaptureOption.Builder builderForValue) {
        copyOnWrite();
        instance.setScreen(builderForValue.build());
        return this;
      }
      /**
       * <code>.outer.streaming.ScreenCaptureOption screen = 1;</code>
       */
      public Builder mergeScreen(com.dogu.protocol.generated.outer.streaming.ScreencaptureOption.ScreenCaptureOption value) {
        copyOnWrite();
        instance.mergeScreen(value);
        return this;
      }
      /**
       * <code>.outer.streaming.ScreenCaptureOption screen = 1;</code>
       */
      public Builder clearScreen() {  copyOnWrite();
        instance.clearScreen();
        return this;
      }

      /**
       * <code>string file_path = 2;</code>
       * @return The filePath.
       */
      @java.lang.Override
      public java.lang.String getFilePath() {
        return instance.getFilePath();
      }
      /**
       * <code>string file_path = 2;</code>
       * @return The bytes for filePath.
       */
      @java.lang.Override
      public com.google.protobuf.ByteString
          getFilePathBytes() {
        return instance.getFilePathBytes();
      }
      /**
       * <code>string file_path = 2;</code>
       * @param value The filePath to set.
       * @return This builder for chaining.
       */
      public Builder setFilePath(
          java.lang.String value) {
        copyOnWrite();
        instance.setFilePath(value);
        return this;
      }
      /**
       * <code>string file_path = 2;</code>
       * @return This builder for chaining.
       */
      public Builder clearFilePath() {
        copyOnWrite();
        instance.clearFilePath();
        return this;
      }
      /**
       * <code>string file_path = 2;</code>
       * @param value The bytes for filePath to set.
       * @return This builder for chaining.
       */
      public Builder setFilePathBytes(
          com.google.protobuf.ByteString value) {
        copyOnWrite();
        instance.setFilePathBytes(value);
        return this;
      }

      /**
       * <code>optional string etc_param = 10;</code>
       * @return Whether the etcParam field is set.
       */
      @java.lang.Override
      public boolean hasEtcParam() {
        return instance.hasEtcParam();
      }
      /**
       * <code>optional string etc_param = 10;</code>
       * @return The etcParam.
       */
      @java.lang.Override
      public java.lang.String getEtcParam() {
        return instance.getEtcParam();
      }
      /**
       * <code>optional string etc_param = 10;</code>
       * @return The bytes for etcParam.
       */
      @java.lang.Override
      public com.google.protobuf.ByteString
          getEtcParamBytes() {
        return instance.getEtcParamBytes();
      }
      /**
       * <code>optional string etc_param = 10;</code>
       * @param value The etcParam to set.
       * @return This builder for chaining.
       */
      public Builder setEtcParam(
          java.lang.String value) {
        copyOnWrite();
        instance.setEtcParam(value);
        return this;
      }
      /**
       * <code>optional string etc_param = 10;</code>
       * @return This builder for chaining.
       */
      public Builder clearEtcParam() {
        copyOnWrite();
        instance.clearEtcParam();
        return this;
      }
      /**
       * <code>optional string etc_param = 10;</code>
       * @param value The bytes for etcParam to set.
       * @return This builder for chaining.
       */
      public Builder setEtcParamBytes(
          com.google.protobuf.ByteString value) {
        copyOnWrite();
        instance.setEtcParamBytes(value);
        return this;
      }

      // @@protoc_insertion_point(builder_scope:outer.streaming.ScreenRecordOption)
    }
    @java.lang.Override
    @java.lang.SuppressWarnings({"unchecked", "fallthrough"})
    protected final java.lang.Object dynamicMethod(
        com.google.protobuf.GeneratedMessageLite.MethodToInvoke method,
        java.lang.Object arg0, java.lang.Object arg1) {
      switch (method) {
        case NEW_MUTABLE_INSTANCE: {
          return new com.dogu.protocol.generated.outer.streaming.ScreenrecordOption.ScreenRecordOption();
        }
        case NEW_BUILDER: {
          return new Builder();
        }
        case BUILD_MESSAGE_INFO: {
            java.lang.Object[] objects = new java.lang.Object[] {
              "bitField0_",
              "screen_",
              "filePath_",
              "etcParam_",
            };
            java.lang.String info =
                "\u0000\u0003\u0000\u0001\u0001\n\u0003\u0000\u0000\u0000\u0001\t\u0002\u0208\n\u1208" +
                "\u0000";
            return newMessageInfo(DEFAULT_INSTANCE, info, objects);
        }
        // fall through
        case GET_DEFAULT_INSTANCE: {
          return DEFAULT_INSTANCE;
        }
        case GET_PARSER: {
          com.google.protobuf.Parser<com.dogu.protocol.generated.outer.streaming.ScreenrecordOption.ScreenRecordOption> parser = PARSER;
          if (parser == null) {
            synchronized (com.dogu.protocol.generated.outer.streaming.ScreenrecordOption.ScreenRecordOption.class) {
              parser = PARSER;
              if (parser == null) {
                parser =
                    new DefaultInstanceBasedParser<com.dogu.protocol.generated.outer.streaming.ScreenrecordOption.ScreenRecordOption>(
                        DEFAULT_INSTANCE);
                PARSER = parser;
              }
            }
          }
          return parser;
      }
      case GET_MEMOIZED_IS_INITIALIZED: {
        return (byte) 1;
      }
      case SET_MEMOIZED_IS_INITIALIZED: {
        return null;
      }
      }
      throw new UnsupportedOperationException();
    }


    // @@protoc_insertion_point(class_scope:outer.streaming.ScreenRecordOption)
    private static final com.dogu.protocol.generated.outer.streaming.ScreenrecordOption.ScreenRecordOption DEFAULT_INSTANCE;
    static {
      ScreenRecordOption defaultInstance = new ScreenRecordOption();
      // New instances are implicitly immutable so no need to make
      // immutable.
      DEFAULT_INSTANCE = defaultInstance;
      com.google.protobuf.GeneratedMessageLite.registerDefaultInstance(
        ScreenRecordOption.class, defaultInstance);
    }

    public static com.dogu.protocol.generated.outer.streaming.ScreenrecordOption.ScreenRecordOption getDefaultInstance() {
      return DEFAULT_INSTANCE;
    }

    private static volatile com.google.protobuf.Parser<ScreenRecordOption> PARSER;

    public static com.google.protobuf.Parser<ScreenRecordOption> parser() {
      return DEFAULT_INSTANCE.getParserForType();
    }
  }


  static {
  }

  // @@protoc_insertion_point(outer_class_scope)
}