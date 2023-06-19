// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: outer/streaming/screencapture_option.proto

package com.dogu.protocol.generated.outer.streaming;

public final class ScreencaptureOption {
  private ScreencaptureOption() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }
  public interface ScreenCaptureOptionOrBuilder extends
      // @@protoc_insertion_point(interface_extends:outer.streaming.ScreenCaptureOption)
      com.google.protobuf.MessageLiteOrBuilder {

    /**
     * <pre>
     * (android): available
     * (ios): ignored
     * </pre>
     *
     * <code>optional fixed64 bit_rate = 1;</code>
     * @return Whether the bitRate field is set.
     */
    boolean hasBitRate();
    /**
     * <pre>
     * (android): available
     * (ios): ignored
     * </pre>
     *
     * <code>optional fixed64 bit_rate = 1;</code>
     * @return The bitRate.
     */
    long getBitRate();

    /**
     * <pre>
     * (android): available
     * https://developer.android.com/reference/android/media/MediaFormat#KEY_MAX_FPS_TO_ENCODER
     * (ios): ignored
     * </pre>
     *
     * <code>optional fixed64 max_fps = 2;</code>
     * @return Whether the maxFps field is set.
     */
    boolean hasMaxFps();
    /**
     * <pre>
     * (android): available
     * https://developer.android.com/reference/android/media/MediaFormat#KEY_MAX_FPS_TO_ENCODER
     * (ios): ignored
     * </pre>
     *
     * <code>optional fixed64 max_fps = 2;</code>
     * @return The maxFps.
     */
    long getMaxFps();

    /**
     * <pre>
     * (android): available
     * https://developer.android.com/reference/android/media/MediaFormat#KEY_FRAME_RATE
     * (ios): ignored
     * </pre>
     *
     * <code>optional fixed64 frame_rate = 3;</code>
     * @return Whether the frameRate field is set.
     */
    boolean hasFrameRate();
    /**
     * <pre>
     * (android): available
     * https://developer.android.com/reference/android/media/MediaFormat#KEY_FRAME_RATE
     * (ios): ignored
     * </pre>
     *
     * <code>optional fixed64 frame_rate = 3;</code>
     * @return The frameRate.
     */
    long getFrameRate();

    /**
     * <pre>
     * (android): available
     * https://developer.android.com/reference/android/media/MediaFormat#KEY_I_FRAME_INTERVAL
     * (ios): ignored
     * </pre>
     *
     * <code>optional fixed64 frame_interval = 4;</code>
     * @return Whether the frameInterval field is set.
     */
    boolean hasFrameInterval();
    /**
     * <pre>
     * (android): available
     * https://developer.android.com/reference/android/media/MediaFormat#KEY_I_FRAME_INTERVAL
     * (ios): ignored
     * </pre>
     *
     * <code>optional fixed64 frame_interval = 4;</code>
     * @return The frameInterval.
     */
    long getFrameInterval();

    /**
     * <pre>
     * (android): available
     * https://developer.android.com/reference/android/media/MediaFormat#KEY_REPEAT_PREVIOUS_FRAME_AFTER
     * (ios): ignored
     * </pre>
     *
     * <code>optional fixed64 repeat_frame_delay = 5;</code>
     * @return Whether the repeatFrameDelay field is set.
     */
    boolean hasRepeatFrameDelay();
    /**
     * <pre>
     * (android): available
     * https://developer.android.com/reference/android/media/MediaFormat#KEY_REPEAT_PREVIOUS_FRAME_AFTER
     * (ios): ignored
     * </pre>
     *
     * <code>optional fixed64 repeat_frame_delay = 5;</code>
     * @return The repeatFrameDelay.
     */
    long getRepeatFrameDelay();

    /**
     * <pre>
     * (android): available
     * 현재 width x height 중 width의 값으로 처리함
     * 예) 1920, 1600, 1280, 1024, 800, 640, 320
     * (ios): available
     * iOS의 경우, 입력값에 따라 단말기가 가능한 해상도 프리셋으로 변경되어 사용함
     * 2160 &lt;= max_resolution        -&gt; 3840x2160
     * 1080 &lt;= max_resolution &lt; 2160 -&gt; 1920x1080
     *  720 &lt;= max_resolution &lt; 1080 -&gt; 1280x720
     * ...                           -&gt; 960x540
     * ...                           -&gt; 640x480
     * ...                           -&gt; 352x288
     * ...                           -&gt; 320x240
     * </pre>
     *
     * <code>optional fixed32 max_resolution = 6;</code>
     * @return Whether the maxResolution field is set.
     */
    boolean hasMaxResolution();
    /**
     * <pre>
     * (android): available
     * 현재 width x height 중 width의 값으로 처리함
     * 예) 1920, 1600, 1280, 1024, 800, 640, 320
     * (ios): available
     * iOS의 경우, 입력값에 따라 단말기가 가능한 해상도 프리셋으로 변경되어 사용함
     * 2160 &lt;= max_resolution        -&gt; 3840x2160
     * 1080 &lt;= max_resolution &lt; 2160 -&gt; 1920x1080
     *  720 &lt;= max_resolution &lt; 1080 -&gt; 1280x720
     * ...                           -&gt; 960x540
     * ...                           -&gt; 640x480
     * ...                           -&gt; 352x288
     * ...                           -&gt; 320x240
     * </pre>
     *
     * <code>optional fixed32 max_resolution = 6;</code>
     * @return The maxResolution.
     */
    int getMaxResolution();
  }
  /**
   * Protobuf type {@code outer.streaming.ScreenCaptureOption}
   */
  public  static final class ScreenCaptureOption extends
      com.google.protobuf.GeneratedMessageLite<
          ScreenCaptureOption, ScreenCaptureOption.Builder> implements
      // @@protoc_insertion_point(message_implements:outer.streaming.ScreenCaptureOption)
      ScreenCaptureOptionOrBuilder {
    private ScreenCaptureOption() {
    }
    private int bitField0_;
    public static final int BIT_RATE_FIELD_NUMBER = 1;
    private long bitRate_;
    /**
     * <pre>
     * (android): available
     * (ios): ignored
     * </pre>
     *
     * <code>optional fixed64 bit_rate = 1;</code>
     * @return Whether the bitRate field is set.
     */
    @java.lang.Override
    public boolean hasBitRate() {
      return ((bitField0_ & 0x00000001) != 0);
    }
    /**
     * <pre>
     * (android): available
     * (ios): ignored
     * </pre>
     *
     * <code>optional fixed64 bit_rate = 1;</code>
     * @return The bitRate.
     */
    @java.lang.Override
    public long getBitRate() {
      return bitRate_;
    }
    /**
     * <pre>
     * (android): available
     * (ios): ignored
     * </pre>
     *
     * <code>optional fixed64 bit_rate = 1;</code>
     * @param value The bitRate to set.
     */
    private void setBitRate(long value) {
      bitField0_ |= 0x00000001;
      bitRate_ = value;
    }
    /**
     * <pre>
     * (android): available
     * (ios): ignored
     * </pre>
     *
     * <code>optional fixed64 bit_rate = 1;</code>
     */
    private void clearBitRate() {
      bitField0_ = (bitField0_ & ~0x00000001);
      bitRate_ = 0L;
    }

    public static final int MAX_FPS_FIELD_NUMBER = 2;
    private long maxFps_;
    /**
     * <pre>
     * (android): available
     * https://developer.android.com/reference/android/media/MediaFormat#KEY_MAX_FPS_TO_ENCODER
     * (ios): ignored
     * </pre>
     *
     * <code>optional fixed64 max_fps = 2;</code>
     * @return Whether the maxFps field is set.
     */
    @java.lang.Override
    public boolean hasMaxFps() {
      return ((bitField0_ & 0x00000002) != 0);
    }
    /**
     * <pre>
     * (android): available
     * https://developer.android.com/reference/android/media/MediaFormat#KEY_MAX_FPS_TO_ENCODER
     * (ios): ignored
     * </pre>
     *
     * <code>optional fixed64 max_fps = 2;</code>
     * @return The maxFps.
     */
    @java.lang.Override
    public long getMaxFps() {
      return maxFps_;
    }
    /**
     * <pre>
     * (android): available
     * https://developer.android.com/reference/android/media/MediaFormat#KEY_MAX_FPS_TO_ENCODER
     * (ios): ignored
     * </pre>
     *
     * <code>optional fixed64 max_fps = 2;</code>
     * @param value The maxFps to set.
     */
    private void setMaxFps(long value) {
      bitField0_ |= 0x00000002;
      maxFps_ = value;
    }
    /**
     * <pre>
     * (android): available
     * https://developer.android.com/reference/android/media/MediaFormat#KEY_MAX_FPS_TO_ENCODER
     * (ios): ignored
     * </pre>
     *
     * <code>optional fixed64 max_fps = 2;</code>
     */
    private void clearMaxFps() {
      bitField0_ = (bitField0_ & ~0x00000002);
      maxFps_ = 0L;
    }

    public static final int FRAME_RATE_FIELD_NUMBER = 3;
    private long frameRate_;
    /**
     * <pre>
     * (android): available
     * https://developer.android.com/reference/android/media/MediaFormat#KEY_FRAME_RATE
     * (ios): ignored
     * </pre>
     *
     * <code>optional fixed64 frame_rate = 3;</code>
     * @return Whether the frameRate field is set.
     */
    @java.lang.Override
    public boolean hasFrameRate() {
      return ((bitField0_ & 0x00000004) != 0);
    }
    /**
     * <pre>
     * (android): available
     * https://developer.android.com/reference/android/media/MediaFormat#KEY_FRAME_RATE
     * (ios): ignored
     * </pre>
     *
     * <code>optional fixed64 frame_rate = 3;</code>
     * @return The frameRate.
     */
    @java.lang.Override
    public long getFrameRate() {
      return frameRate_;
    }
    /**
     * <pre>
     * (android): available
     * https://developer.android.com/reference/android/media/MediaFormat#KEY_FRAME_RATE
     * (ios): ignored
     * </pre>
     *
     * <code>optional fixed64 frame_rate = 3;</code>
     * @param value The frameRate to set.
     */
    private void setFrameRate(long value) {
      bitField0_ |= 0x00000004;
      frameRate_ = value;
    }
    /**
     * <pre>
     * (android): available
     * https://developer.android.com/reference/android/media/MediaFormat#KEY_FRAME_RATE
     * (ios): ignored
     * </pre>
     *
     * <code>optional fixed64 frame_rate = 3;</code>
     */
    private void clearFrameRate() {
      bitField0_ = (bitField0_ & ~0x00000004);
      frameRate_ = 0L;
    }

    public static final int FRAME_INTERVAL_FIELD_NUMBER = 4;
    private long frameInterval_;
    /**
     * <pre>
     * (android): available
     * https://developer.android.com/reference/android/media/MediaFormat#KEY_I_FRAME_INTERVAL
     * (ios): ignored
     * </pre>
     *
     * <code>optional fixed64 frame_interval = 4;</code>
     * @return Whether the frameInterval field is set.
     */
    @java.lang.Override
    public boolean hasFrameInterval() {
      return ((bitField0_ & 0x00000008) != 0);
    }
    /**
     * <pre>
     * (android): available
     * https://developer.android.com/reference/android/media/MediaFormat#KEY_I_FRAME_INTERVAL
     * (ios): ignored
     * </pre>
     *
     * <code>optional fixed64 frame_interval = 4;</code>
     * @return The frameInterval.
     */
    @java.lang.Override
    public long getFrameInterval() {
      return frameInterval_;
    }
    /**
     * <pre>
     * (android): available
     * https://developer.android.com/reference/android/media/MediaFormat#KEY_I_FRAME_INTERVAL
     * (ios): ignored
     * </pre>
     *
     * <code>optional fixed64 frame_interval = 4;</code>
     * @param value The frameInterval to set.
     */
    private void setFrameInterval(long value) {
      bitField0_ |= 0x00000008;
      frameInterval_ = value;
    }
    /**
     * <pre>
     * (android): available
     * https://developer.android.com/reference/android/media/MediaFormat#KEY_I_FRAME_INTERVAL
     * (ios): ignored
     * </pre>
     *
     * <code>optional fixed64 frame_interval = 4;</code>
     */
    private void clearFrameInterval() {
      bitField0_ = (bitField0_ & ~0x00000008);
      frameInterval_ = 0L;
    }

    public static final int REPEAT_FRAME_DELAY_FIELD_NUMBER = 5;
    private long repeatFrameDelay_;
    /**
     * <pre>
     * (android): available
     * https://developer.android.com/reference/android/media/MediaFormat#KEY_REPEAT_PREVIOUS_FRAME_AFTER
     * (ios): ignored
     * </pre>
     *
     * <code>optional fixed64 repeat_frame_delay = 5;</code>
     * @return Whether the repeatFrameDelay field is set.
     */
    @java.lang.Override
    public boolean hasRepeatFrameDelay() {
      return ((bitField0_ & 0x00000010) != 0);
    }
    /**
     * <pre>
     * (android): available
     * https://developer.android.com/reference/android/media/MediaFormat#KEY_REPEAT_PREVIOUS_FRAME_AFTER
     * (ios): ignored
     * </pre>
     *
     * <code>optional fixed64 repeat_frame_delay = 5;</code>
     * @return The repeatFrameDelay.
     */
    @java.lang.Override
    public long getRepeatFrameDelay() {
      return repeatFrameDelay_;
    }
    /**
     * <pre>
     * (android): available
     * https://developer.android.com/reference/android/media/MediaFormat#KEY_REPEAT_PREVIOUS_FRAME_AFTER
     * (ios): ignored
     * </pre>
     *
     * <code>optional fixed64 repeat_frame_delay = 5;</code>
     * @param value The repeatFrameDelay to set.
     */
    private void setRepeatFrameDelay(long value) {
      bitField0_ |= 0x00000010;
      repeatFrameDelay_ = value;
    }
    /**
     * <pre>
     * (android): available
     * https://developer.android.com/reference/android/media/MediaFormat#KEY_REPEAT_PREVIOUS_FRAME_AFTER
     * (ios): ignored
     * </pre>
     *
     * <code>optional fixed64 repeat_frame_delay = 5;</code>
     */
    private void clearRepeatFrameDelay() {
      bitField0_ = (bitField0_ & ~0x00000010);
      repeatFrameDelay_ = 0L;
    }

    public static final int MAX_RESOLUTION_FIELD_NUMBER = 6;
    private int maxResolution_;
    /**
     * <pre>
     * (android): available
     * 현재 width x height 중 width의 값으로 처리함
     * 예) 1920, 1600, 1280, 1024, 800, 640, 320
     * (ios): available
     * iOS의 경우, 입력값에 따라 단말기가 가능한 해상도 프리셋으로 변경되어 사용함
     * 2160 &lt;= max_resolution        -&gt; 3840x2160
     * 1080 &lt;= max_resolution &lt; 2160 -&gt; 1920x1080
     *  720 &lt;= max_resolution &lt; 1080 -&gt; 1280x720
     * ...                           -&gt; 960x540
     * ...                           -&gt; 640x480
     * ...                           -&gt; 352x288
     * ...                           -&gt; 320x240
     * </pre>
     *
     * <code>optional fixed32 max_resolution = 6;</code>
     * @return Whether the maxResolution field is set.
     */
    @java.lang.Override
    public boolean hasMaxResolution() {
      return ((bitField0_ & 0x00000020) != 0);
    }
    /**
     * <pre>
     * (android): available
     * 현재 width x height 중 width의 값으로 처리함
     * 예) 1920, 1600, 1280, 1024, 800, 640, 320
     * (ios): available
     * iOS의 경우, 입력값에 따라 단말기가 가능한 해상도 프리셋으로 변경되어 사용함
     * 2160 &lt;= max_resolution        -&gt; 3840x2160
     * 1080 &lt;= max_resolution &lt; 2160 -&gt; 1920x1080
     *  720 &lt;= max_resolution &lt; 1080 -&gt; 1280x720
     * ...                           -&gt; 960x540
     * ...                           -&gt; 640x480
     * ...                           -&gt; 352x288
     * ...                           -&gt; 320x240
     * </pre>
     *
     * <code>optional fixed32 max_resolution = 6;</code>
     * @return The maxResolution.
     */
    @java.lang.Override
    public int getMaxResolution() {
      return maxResolution_;
    }
    /**
     * <pre>
     * (android): available
     * 현재 width x height 중 width의 값으로 처리함
     * 예) 1920, 1600, 1280, 1024, 800, 640, 320
     * (ios): available
     * iOS의 경우, 입력값에 따라 단말기가 가능한 해상도 프리셋으로 변경되어 사용함
     * 2160 &lt;= max_resolution        -&gt; 3840x2160
     * 1080 &lt;= max_resolution &lt; 2160 -&gt; 1920x1080
     *  720 &lt;= max_resolution &lt; 1080 -&gt; 1280x720
     * ...                           -&gt; 960x540
     * ...                           -&gt; 640x480
     * ...                           -&gt; 352x288
     * ...                           -&gt; 320x240
     * </pre>
     *
     * <code>optional fixed32 max_resolution = 6;</code>
     * @param value The maxResolution to set.
     */
    private void setMaxResolution(int value) {
      bitField0_ |= 0x00000020;
      maxResolution_ = value;
    }
    /**
     * <pre>
     * (android): available
     * 현재 width x height 중 width의 값으로 처리함
     * 예) 1920, 1600, 1280, 1024, 800, 640, 320
     * (ios): available
     * iOS의 경우, 입력값에 따라 단말기가 가능한 해상도 프리셋으로 변경되어 사용함
     * 2160 &lt;= max_resolution        -&gt; 3840x2160
     * 1080 &lt;= max_resolution &lt; 2160 -&gt; 1920x1080
     *  720 &lt;= max_resolution &lt; 1080 -&gt; 1280x720
     * ...                           -&gt; 960x540
     * ...                           -&gt; 640x480
     * ...                           -&gt; 352x288
     * ...                           -&gt; 320x240
     * </pre>
     *
     * <code>optional fixed32 max_resolution = 6;</code>
     */
    private void clearMaxResolution() {
      bitField0_ = (bitField0_ & ~0x00000020);
      maxResolution_ = 0;
    }

    public static com.dogu.protocol.generated.outer.streaming.ScreencaptureOption.ScreenCaptureOption parseFrom(
        java.nio.ByteBuffer data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return com.google.protobuf.GeneratedMessageLite.parseFrom(
          DEFAULT_INSTANCE, data);
    }
    public static com.dogu.protocol.generated.outer.streaming.ScreencaptureOption.ScreenCaptureOption parseFrom(
        java.nio.ByteBuffer data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return com.google.protobuf.GeneratedMessageLite.parseFrom(
          DEFAULT_INSTANCE, data, extensionRegistry);
    }
    public static com.dogu.protocol.generated.outer.streaming.ScreencaptureOption.ScreenCaptureOption parseFrom(
        com.google.protobuf.ByteString data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return com.google.protobuf.GeneratedMessageLite.parseFrom(
          DEFAULT_INSTANCE, data);
    }
    public static com.dogu.protocol.generated.outer.streaming.ScreencaptureOption.ScreenCaptureOption parseFrom(
        com.google.protobuf.ByteString data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return com.google.protobuf.GeneratedMessageLite.parseFrom(
          DEFAULT_INSTANCE, data, extensionRegistry);
    }
    public static com.dogu.protocol.generated.outer.streaming.ScreencaptureOption.ScreenCaptureOption parseFrom(byte[] data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return com.google.protobuf.GeneratedMessageLite.parseFrom(
          DEFAULT_INSTANCE, data);
    }
    public static com.dogu.protocol.generated.outer.streaming.ScreencaptureOption.ScreenCaptureOption parseFrom(
        byte[] data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return com.google.protobuf.GeneratedMessageLite.parseFrom(
          DEFAULT_INSTANCE, data, extensionRegistry);
    }
    public static com.dogu.protocol.generated.outer.streaming.ScreencaptureOption.ScreenCaptureOption parseFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageLite.parseFrom(
          DEFAULT_INSTANCE, input);
    }
    public static com.dogu.protocol.generated.outer.streaming.ScreencaptureOption.ScreenCaptureOption parseFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageLite.parseFrom(
          DEFAULT_INSTANCE, input, extensionRegistry);
    }
    public static com.dogu.protocol.generated.outer.streaming.ScreencaptureOption.ScreenCaptureOption parseDelimitedFrom(java.io.InputStream input)
        throws java.io.IOException {
      return parseDelimitedFrom(DEFAULT_INSTANCE, input);
    }
    public static com.dogu.protocol.generated.outer.streaming.ScreencaptureOption.ScreenCaptureOption parseDelimitedFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return parseDelimitedFrom(DEFAULT_INSTANCE, input, extensionRegistry);
    }
    public static com.dogu.protocol.generated.outer.streaming.ScreencaptureOption.ScreenCaptureOption parseFrom(
        com.google.protobuf.CodedInputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageLite.parseFrom(
          DEFAULT_INSTANCE, input);
    }
    public static com.dogu.protocol.generated.outer.streaming.ScreencaptureOption.ScreenCaptureOption parseFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageLite.parseFrom(
          DEFAULT_INSTANCE, input, extensionRegistry);
    }

    public static Builder newBuilder() {
      return (Builder) DEFAULT_INSTANCE.createBuilder();
    }
    public static Builder newBuilder(com.dogu.protocol.generated.outer.streaming.ScreencaptureOption.ScreenCaptureOption prototype) {
      return (Builder) DEFAULT_INSTANCE.createBuilder(prototype);
    }

    /**
     * Protobuf type {@code outer.streaming.ScreenCaptureOption}
     */
    public static final class Builder extends
        com.google.protobuf.GeneratedMessageLite.Builder<
          com.dogu.protocol.generated.outer.streaming.ScreencaptureOption.ScreenCaptureOption, Builder> implements
        // @@protoc_insertion_point(builder_implements:outer.streaming.ScreenCaptureOption)
        com.dogu.protocol.generated.outer.streaming.ScreencaptureOption.ScreenCaptureOptionOrBuilder {
      // Construct using com.dogu.protocol.generated.outer.streaming.ScreencaptureOption.ScreenCaptureOption.newBuilder()
      private Builder() {
        super(DEFAULT_INSTANCE);
      }


      /**
       * <pre>
       * (android): available
       * (ios): ignored
       * </pre>
       *
       * <code>optional fixed64 bit_rate = 1;</code>
       * @return Whether the bitRate field is set.
       */
      @java.lang.Override
      public boolean hasBitRate() {
        return instance.hasBitRate();
      }
      /**
       * <pre>
       * (android): available
       * (ios): ignored
       * </pre>
       *
       * <code>optional fixed64 bit_rate = 1;</code>
       * @return The bitRate.
       */
      @java.lang.Override
      public long getBitRate() {
        return instance.getBitRate();
      }
      /**
       * <pre>
       * (android): available
       * (ios): ignored
       * </pre>
       *
       * <code>optional fixed64 bit_rate = 1;</code>
       * @param value The bitRate to set.
       * @return This builder for chaining.
       */
      public Builder setBitRate(long value) {
        copyOnWrite();
        instance.setBitRate(value);
        return this;
      }
      /**
       * <pre>
       * (android): available
       * (ios): ignored
       * </pre>
       *
       * <code>optional fixed64 bit_rate = 1;</code>
       * @return This builder for chaining.
       */
      public Builder clearBitRate() {
        copyOnWrite();
        instance.clearBitRate();
        return this;
      }

      /**
       * <pre>
       * (android): available
       * https://developer.android.com/reference/android/media/MediaFormat#KEY_MAX_FPS_TO_ENCODER
       * (ios): ignored
       * </pre>
       *
       * <code>optional fixed64 max_fps = 2;</code>
       * @return Whether the maxFps field is set.
       */
      @java.lang.Override
      public boolean hasMaxFps() {
        return instance.hasMaxFps();
      }
      /**
       * <pre>
       * (android): available
       * https://developer.android.com/reference/android/media/MediaFormat#KEY_MAX_FPS_TO_ENCODER
       * (ios): ignored
       * </pre>
       *
       * <code>optional fixed64 max_fps = 2;</code>
       * @return The maxFps.
       */
      @java.lang.Override
      public long getMaxFps() {
        return instance.getMaxFps();
      }
      /**
       * <pre>
       * (android): available
       * https://developer.android.com/reference/android/media/MediaFormat#KEY_MAX_FPS_TO_ENCODER
       * (ios): ignored
       * </pre>
       *
       * <code>optional fixed64 max_fps = 2;</code>
       * @param value The maxFps to set.
       * @return This builder for chaining.
       */
      public Builder setMaxFps(long value) {
        copyOnWrite();
        instance.setMaxFps(value);
        return this;
      }
      /**
       * <pre>
       * (android): available
       * https://developer.android.com/reference/android/media/MediaFormat#KEY_MAX_FPS_TO_ENCODER
       * (ios): ignored
       * </pre>
       *
       * <code>optional fixed64 max_fps = 2;</code>
       * @return This builder for chaining.
       */
      public Builder clearMaxFps() {
        copyOnWrite();
        instance.clearMaxFps();
        return this;
      }

      /**
       * <pre>
       * (android): available
       * https://developer.android.com/reference/android/media/MediaFormat#KEY_FRAME_RATE
       * (ios): ignored
       * </pre>
       *
       * <code>optional fixed64 frame_rate = 3;</code>
       * @return Whether the frameRate field is set.
       */
      @java.lang.Override
      public boolean hasFrameRate() {
        return instance.hasFrameRate();
      }
      /**
       * <pre>
       * (android): available
       * https://developer.android.com/reference/android/media/MediaFormat#KEY_FRAME_RATE
       * (ios): ignored
       * </pre>
       *
       * <code>optional fixed64 frame_rate = 3;</code>
       * @return The frameRate.
       */
      @java.lang.Override
      public long getFrameRate() {
        return instance.getFrameRate();
      }
      /**
       * <pre>
       * (android): available
       * https://developer.android.com/reference/android/media/MediaFormat#KEY_FRAME_RATE
       * (ios): ignored
       * </pre>
       *
       * <code>optional fixed64 frame_rate = 3;</code>
       * @param value The frameRate to set.
       * @return This builder for chaining.
       */
      public Builder setFrameRate(long value) {
        copyOnWrite();
        instance.setFrameRate(value);
        return this;
      }
      /**
       * <pre>
       * (android): available
       * https://developer.android.com/reference/android/media/MediaFormat#KEY_FRAME_RATE
       * (ios): ignored
       * </pre>
       *
       * <code>optional fixed64 frame_rate = 3;</code>
       * @return This builder for chaining.
       */
      public Builder clearFrameRate() {
        copyOnWrite();
        instance.clearFrameRate();
        return this;
      }

      /**
       * <pre>
       * (android): available
       * https://developer.android.com/reference/android/media/MediaFormat#KEY_I_FRAME_INTERVAL
       * (ios): ignored
       * </pre>
       *
       * <code>optional fixed64 frame_interval = 4;</code>
       * @return Whether the frameInterval field is set.
       */
      @java.lang.Override
      public boolean hasFrameInterval() {
        return instance.hasFrameInterval();
      }
      /**
       * <pre>
       * (android): available
       * https://developer.android.com/reference/android/media/MediaFormat#KEY_I_FRAME_INTERVAL
       * (ios): ignored
       * </pre>
       *
       * <code>optional fixed64 frame_interval = 4;</code>
       * @return The frameInterval.
       */
      @java.lang.Override
      public long getFrameInterval() {
        return instance.getFrameInterval();
      }
      /**
       * <pre>
       * (android): available
       * https://developer.android.com/reference/android/media/MediaFormat#KEY_I_FRAME_INTERVAL
       * (ios): ignored
       * </pre>
       *
       * <code>optional fixed64 frame_interval = 4;</code>
       * @param value The frameInterval to set.
       * @return This builder for chaining.
       */
      public Builder setFrameInterval(long value) {
        copyOnWrite();
        instance.setFrameInterval(value);
        return this;
      }
      /**
       * <pre>
       * (android): available
       * https://developer.android.com/reference/android/media/MediaFormat#KEY_I_FRAME_INTERVAL
       * (ios): ignored
       * </pre>
       *
       * <code>optional fixed64 frame_interval = 4;</code>
       * @return This builder for chaining.
       */
      public Builder clearFrameInterval() {
        copyOnWrite();
        instance.clearFrameInterval();
        return this;
      }

      /**
       * <pre>
       * (android): available
       * https://developer.android.com/reference/android/media/MediaFormat#KEY_REPEAT_PREVIOUS_FRAME_AFTER
       * (ios): ignored
       * </pre>
       *
       * <code>optional fixed64 repeat_frame_delay = 5;</code>
       * @return Whether the repeatFrameDelay field is set.
       */
      @java.lang.Override
      public boolean hasRepeatFrameDelay() {
        return instance.hasRepeatFrameDelay();
      }
      /**
       * <pre>
       * (android): available
       * https://developer.android.com/reference/android/media/MediaFormat#KEY_REPEAT_PREVIOUS_FRAME_AFTER
       * (ios): ignored
       * </pre>
       *
       * <code>optional fixed64 repeat_frame_delay = 5;</code>
       * @return The repeatFrameDelay.
       */
      @java.lang.Override
      public long getRepeatFrameDelay() {
        return instance.getRepeatFrameDelay();
      }
      /**
       * <pre>
       * (android): available
       * https://developer.android.com/reference/android/media/MediaFormat#KEY_REPEAT_PREVIOUS_FRAME_AFTER
       * (ios): ignored
       * </pre>
       *
       * <code>optional fixed64 repeat_frame_delay = 5;</code>
       * @param value The repeatFrameDelay to set.
       * @return This builder for chaining.
       */
      public Builder setRepeatFrameDelay(long value) {
        copyOnWrite();
        instance.setRepeatFrameDelay(value);
        return this;
      }
      /**
       * <pre>
       * (android): available
       * https://developer.android.com/reference/android/media/MediaFormat#KEY_REPEAT_PREVIOUS_FRAME_AFTER
       * (ios): ignored
       * </pre>
       *
       * <code>optional fixed64 repeat_frame_delay = 5;</code>
       * @return This builder for chaining.
       */
      public Builder clearRepeatFrameDelay() {
        copyOnWrite();
        instance.clearRepeatFrameDelay();
        return this;
      }

      /**
       * <pre>
       * (android): available
       * 현재 width x height 중 width의 값으로 처리함
       * 예) 1920, 1600, 1280, 1024, 800, 640, 320
       * (ios): available
       * iOS의 경우, 입력값에 따라 단말기가 가능한 해상도 프리셋으로 변경되어 사용함
       * 2160 &lt;= max_resolution        -&gt; 3840x2160
       * 1080 &lt;= max_resolution &lt; 2160 -&gt; 1920x1080
       *  720 &lt;= max_resolution &lt; 1080 -&gt; 1280x720
       * ...                           -&gt; 960x540
       * ...                           -&gt; 640x480
       * ...                           -&gt; 352x288
       * ...                           -&gt; 320x240
       * </pre>
       *
       * <code>optional fixed32 max_resolution = 6;</code>
       * @return Whether the maxResolution field is set.
       */
      @java.lang.Override
      public boolean hasMaxResolution() {
        return instance.hasMaxResolution();
      }
      /**
       * <pre>
       * (android): available
       * 현재 width x height 중 width의 값으로 처리함
       * 예) 1920, 1600, 1280, 1024, 800, 640, 320
       * (ios): available
       * iOS의 경우, 입력값에 따라 단말기가 가능한 해상도 프리셋으로 변경되어 사용함
       * 2160 &lt;= max_resolution        -&gt; 3840x2160
       * 1080 &lt;= max_resolution &lt; 2160 -&gt; 1920x1080
       *  720 &lt;= max_resolution &lt; 1080 -&gt; 1280x720
       * ...                           -&gt; 960x540
       * ...                           -&gt; 640x480
       * ...                           -&gt; 352x288
       * ...                           -&gt; 320x240
       * </pre>
       *
       * <code>optional fixed32 max_resolution = 6;</code>
       * @return The maxResolution.
       */
      @java.lang.Override
      public int getMaxResolution() {
        return instance.getMaxResolution();
      }
      /**
       * <pre>
       * (android): available
       * 현재 width x height 중 width의 값으로 처리함
       * 예) 1920, 1600, 1280, 1024, 800, 640, 320
       * (ios): available
       * iOS의 경우, 입력값에 따라 단말기가 가능한 해상도 프리셋으로 변경되어 사용함
       * 2160 &lt;= max_resolution        -&gt; 3840x2160
       * 1080 &lt;= max_resolution &lt; 2160 -&gt; 1920x1080
       *  720 &lt;= max_resolution &lt; 1080 -&gt; 1280x720
       * ...                           -&gt; 960x540
       * ...                           -&gt; 640x480
       * ...                           -&gt; 352x288
       * ...                           -&gt; 320x240
       * </pre>
       *
       * <code>optional fixed32 max_resolution = 6;</code>
       * @param value The maxResolution to set.
       * @return This builder for chaining.
       */
      public Builder setMaxResolution(int value) {
        copyOnWrite();
        instance.setMaxResolution(value);
        return this;
      }
      /**
       * <pre>
       * (android): available
       * 현재 width x height 중 width의 값으로 처리함
       * 예) 1920, 1600, 1280, 1024, 800, 640, 320
       * (ios): available
       * iOS의 경우, 입력값에 따라 단말기가 가능한 해상도 프리셋으로 변경되어 사용함
       * 2160 &lt;= max_resolution        -&gt; 3840x2160
       * 1080 &lt;= max_resolution &lt; 2160 -&gt; 1920x1080
       *  720 &lt;= max_resolution &lt; 1080 -&gt; 1280x720
       * ...                           -&gt; 960x540
       * ...                           -&gt; 640x480
       * ...                           -&gt; 352x288
       * ...                           -&gt; 320x240
       * </pre>
       *
       * <code>optional fixed32 max_resolution = 6;</code>
       * @return This builder for chaining.
       */
      public Builder clearMaxResolution() {
        copyOnWrite();
        instance.clearMaxResolution();
        return this;
      }

      // @@protoc_insertion_point(builder_scope:outer.streaming.ScreenCaptureOption)
    }
    @java.lang.Override
    @java.lang.SuppressWarnings({"unchecked", "fallthrough"})
    protected final java.lang.Object dynamicMethod(
        com.google.protobuf.GeneratedMessageLite.MethodToInvoke method,
        java.lang.Object arg0, java.lang.Object arg1) {
      switch (method) {
        case NEW_MUTABLE_INSTANCE: {
          return new com.dogu.protocol.generated.outer.streaming.ScreencaptureOption.ScreenCaptureOption();
        }
        case NEW_BUILDER: {
          return new Builder();
        }
        case BUILD_MESSAGE_INFO: {
            java.lang.Object[] objects = new java.lang.Object[] {
              "bitField0_",
              "bitRate_",
              "maxFps_",
              "frameRate_",
              "frameInterval_",
              "repeatFrameDelay_",
              "maxResolution_",
            };
            java.lang.String info =
                "\u0000\u0006\u0000\u0001\u0001\u0006\u0006\u0000\u0000\u0000\u0001\u1005\u0000\u0002" +
                "\u1005\u0001\u0003\u1005\u0002\u0004\u1005\u0003\u0005\u1005\u0004\u0006\u1006\u0005" +
                "";
            return newMessageInfo(DEFAULT_INSTANCE, info, objects);
        }
        // fall through
        case GET_DEFAULT_INSTANCE: {
          return DEFAULT_INSTANCE;
        }
        case GET_PARSER: {
          com.google.protobuf.Parser<com.dogu.protocol.generated.outer.streaming.ScreencaptureOption.ScreenCaptureOption> parser = PARSER;
          if (parser == null) {
            synchronized (com.dogu.protocol.generated.outer.streaming.ScreencaptureOption.ScreenCaptureOption.class) {
              parser = PARSER;
              if (parser == null) {
                parser =
                    new DefaultInstanceBasedParser<com.dogu.protocol.generated.outer.streaming.ScreencaptureOption.ScreenCaptureOption>(
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


    // @@protoc_insertion_point(class_scope:outer.streaming.ScreenCaptureOption)
    private static final com.dogu.protocol.generated.outer.streaming.ScreencaptureOption.ScreenCaptureOption DEFAULT_INSTANCE;
    static {
      ScreenCaptureOption defaultInstance = new ScreenCaptureOption();
      // New instances are implicitly immutable so no need to make
      // immutable.
      DEFAULT_INSTANCE = defaultInstance;
      com.google.protobuf.GeneratedMessageLite.registerDefaultInstance(
        ScreenCaptureOption.class, defaultInstance);
    }

    public static com.dogu.protocol.generated.outer.streaming.ScreencaptureOption.ScreenCaptureOption getDefaultInstance() {
      return DEFAULT_INSTANCE;
    }

    private static volatile com.google.protobuf.Parser<ScreenCaptureOption> PARSER;

    public static com.google.protobuf.Parser<ScreenCaptureOption> parser() {
      return DEFAULT_INSTANCE.getParserForType();
    }
  }


  static {
  }

  // @@protoc_insertion_point(outer_class_scope)
}
