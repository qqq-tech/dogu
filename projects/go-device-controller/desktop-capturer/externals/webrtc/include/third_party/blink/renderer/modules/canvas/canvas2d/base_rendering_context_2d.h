// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef THIRD_PARTY_BLINK_RENDERER_MODULES_CANVAS_CANVAS2D_BASE_RENDERING_CONTEXT_2D_H_
#define THIRD_PARTY_BLINK_RENDERER_MODULES_CANVAS_CANVAS2D_BASE_RENDERING_CONTEXT_2D_H_

#include "base/bind.h"
#include "base/notreached.h"
#include "cc/paint/record_paint_canvas.h"
#include "third_party/blink/renderer/bindings/modules/v8/v8_typedefs.h"
#include "third_party/blink/renderer/core/geometry/dom_matrix.h"
#include "third_party/blink/renderer/core/html/canvas/canvas_rendering_context.h"
#include "third_party/blink/renderer/core/html/canvas/image_data.h"
#include "third_party/blink/renderer/modules/canvas/canvas2d/canvas_gradient.h"
#include "third_party/blink/renderer/modules/canvas/canvas2d/canvas_image_source_util.h"
#include "third_party/blink/renderer/modules/canvas/canvas2d/canvas_path.h"
#include "third_party/blink/renderer/modules/canvas/canvas2d/canvas_rendering_context_2d_state.h"
#include "third_party/blink/renderer/modules/canvas/canvas2d/canvas_style.h"
#include "third_party/blink/renderer/modules/canvas/canvas2d/identifiability_study_helper.h"
#include "third_party/blink/renderer/platform/bindings/exception_state.h"
#include "third_party/blink/renderer/platform/graphics/image_orientation.h"
#include "ui/gfx/geometry/skia_conversions.h"

namespace blink {

class CanvasImageSource;
class Color;
class Image;
class Path2D;
class V8UnionCSSColorValueOrCanvasGradientOrCanvasPatternOrString;
class V8UnionCanvasFilterOrString;
using cc::UsePaintCache;

class MODULES_EXPORT BaseRenderingContext2D : public CanvasPath {
 public:
  BaseRenderingContext2D(const BaseRenderingContext2D&) = delete;
  BaseRenderingContext2D& operator=(const BaseRenderingContext2D&) = delete;

  ~BaseRenderingContext2D() override;

  V8UnionCSSColorValueOrCanvasGradientOrCanvasPatternOrString* strokeStyle()
      const;
  void setStrokeStyle(
      const V8UnionCSSColorValueOrCanvasGradientOrCanvasPatternOrString* style);

  V8UnionCSSColorValueOrCanvasGradientOrCanvasPatternOrString* fillStyle()
      const;
  void setFillStyle(
      const V8UnionCSSColorValueOrCanvasGradientOrCanvasPatternOrString* style);

  double lineWidth() const;
  void setLineWidth(double);

  String lineCap() const;
  void setLineCap(const String&);

  String lineJoin() const;
  void setLineJoin(const String&);

  double miterLimit() const;
  void setMiterLimit(double);

  const Vector<double>& getLineDash() const;
  void setLineDash(const Vector<double>&);

  double lineDashOffset() const;
  void setLineDashOffset(double);

  virtual double shadowOffsetX() const;
  virtual void setShadowOffsetX(double);

  virtual double shadowOffsetY() const;
  virtual void setShadowOffsetY(double);

  virtual double shadowBlur() const;
  virtual void setShadowBlur(double);

  String shadowColor() const;
  void setShadowColor(const String&);

  // Alpha value that goes from 0 to 1.
  double globalAlpha() const;
  void setGlobalAlpha(double);

  String globalCompositeOperation() const;
  void setGlobalCompositeOperation(const String&);

  const V8UnionCanvasFilterOrString* filter() const;
  void setFilter(const ExecutionContext* execution_context,
                 const V8UnionCanvasFilterOrString* input);

  void save();
  void restore();
  // Push state on state stack and creates bitmap for subsequent draw ops.
  void beginLayer();
  // Pop state stack if top state was pushed by beginLayer, restore state and draw the bitmap.
  void endLayer();
  void reset();          // Called by the javascript interface
  void ResetInternal();  // Called from within blink

  void scale(double sx, double sy);
  void rotate(double angle_in_radians);
  void translate(double tx, double ty);
  void transform(double m11,
                 double m12,
                 double m21,
                 double m22,
                 double dx,
                 double dy);
  void setTransform(double m11,
                    double m12,
                    double m21,
                    double m22,
                    double dx,
                    double dy);
  void setTransform(DOMMatrixInit*, ExceptionState&);
  virtual DOMMatrix* getTransform();
  virtual void resetTransform();

  void beginPath();

  void fill(const String& winding = "nonzero");
  void fill(Path2D*, const String& winding = "nonzero");
  void stroke();
  void stroke(Path2D*);
  void clip(const String& winding = "nonzero");
  void clip(Path2D*, const String& winding = "nonzero");

  bool isPointInPath(const double x,
                     const double y,
                     const String& winding = "nonzero");
  bool isPointInPath(Path2D*,
                     const double x,
                     const double y,
                     const String& winding = "nonzero");
  bool isPointInStroke(const double x, const double y);
  bool isPointInStroke(Path2D*, const double x, const double y);

  void clearRect(double x,
                 double y,
                 double width,
                 double height,
                 bool for_reset = false);
  void fillRect(double x, double y, double width, double height);
  void strokeRect(double x, double y, double width, double height);

  void drawImage(const V8CanvasImageSource* image_source,
                 double x,
                 double y,
                 ExceptionState& exception_state);
  void drawImage(const V8CanvasImageSource* image_source,
                 double x,
                 double y,
                 double width,
                 double height,
                 ExceptionState& exception_state);
  void drawImage(const V8CanvasImageSource* image_source,
                 double sx,
                 double sy,
                 double sw,
                 double sh,
                 double dx,
                 double dy,
                 double dw,
                 double dh,
                 ExceptionState& exception_state);
  void drawImage(CanvasImageSource*,
                 double sx,
                 double sy,
                 double sw,
                 double sh,
                 double dx,
                 double dy,
                 double dw,
                 double dh,
                 ExceptionState&);

  CanvasGradient* createLinearGradient(double x0,
                                       double y0,
                                       double x1,
                                       double y1);
  CanvasGradient* createRadialGradient(double x0,
                                       double y0,
                                       double r0,
                                       double x1,
                                       double y1,
                                       double r1,
                                       ExceptionState&);
  CanvasGradient* createConicGradient(double startAngle,
                                      double centerX,
                                      double centerY);
  CanvasPattern* createPattern(const V8CanvasImageSource* image_source,
                               const String& repetition_type,
                               ExceptionState& exception_state);
  CanvasPattern* createPattern(CanvasImageSource*,
                               const String& repetition_type,
                               ExceptionState&);

  ImageData* createImageData(ImageData*, ExceptionState&) const;
  ImageData* createImageData(int sw, int sh, ExceptionState&) const;
  ImageData* createImageData(int sw,
                             int sh,
                             ImageDataSettings*,
                             ExceptionState&) const;

  // For deferred canvases this will have the side effect of drawing recorded
  // commands in order to finalize the frame
  ImageData* getImageData(int sx, int sy, int sw, int sh, ExceptionState&);
  ImageData* getImageData(int sx,
                          int sy,
                          int sw,
                          int sh,
                          ImageDataSettings*,
                          ExceptionState&);
  virtual ImageData* getImageDataInternal(int sx,
                                          int sy,
                                          int sw,
                                          int sh,
                                          ImageDataSettings*,
                                          ExceptionState&);

  void putImageData(ImageData*, int dx, int dy, ExceptionState&);
  void putImageData(ImageData*,
                    int dx,
                    int dy,
                    int dirty_x,
                    int dirty_y,
                    int dirty_width,
                    int dirty_height,
                    ExceptionState&);

  bool imageSmoothingEnabled() const;
  void setImageSmoothingEnabled(bool);
  String imageSmoothingQuality() const;
  void setImageSmoothingQuality(const String&);

  virtual bool OriginClean() const = 0;
  virtual void SetOriginTainted() = 0;
  virtual bool WouldTaintOrigin(CanvasImageSource*) = 0;

  virtual int Width() const = 0;
  virtual int Height() const = 0;

  virtual bool IsAccelerated() const {
    NOTREACHED();
    return false;
  }
  virtual bool CanCreateCanvas2dResourceProvider() const = 0;

  virtual RespectImageOrientationEnum RespectImageOrientation() const = 0;

  virtual bool ParseColorOrCurrentColor(Color&,
                                        const String& color_string) const = 0;

  virtual cc::PaintCanvas* GetOrCreatePaintCanvas() = 0;
  virtual cc::PaintCanvas* GetPaintCanvas() const = 0;
  virtual cc::PaintCanvas* GetPaintCanvasForDraw(
      const SkIRect& dirty_rect,
      CanvasPerformanceMonitor::DrawType) = 0;

  virtual sk_sp<PaintFilter> StateGetFilter() = 0;
  virtual void SnapshotStateForFilter() = 0;

  CanvasRenderingContextHost* GetCanvasRenderingContextHost() override {
    return nullptr;
  }

  ExecutionContext* GetTopExecutionContext() const override = 0;

  void ValidateStateStack() const {
#if DCHECK_IS_ON()
    ValidateStateStackWithCanvas(GetPaintCanvas());
#endif
  }
  virtual void ValidateStateStackWithCanvas(const cc::PaintCanvas*) const = 0;

  virtual bool HasAlpha() const = 0;

  virtual bool IsDesynchronized() const {
    NOTREACHED();
    return false;
  }

  virtual bool isContextLost() const = 0;

  virtual void WillDrawImage(CanvasImageSource*) const {}

  void RestoreMatrixClipStack(cc::PaintCanvas*) const;

  String textAlign() const;
  void setTextAlign(const String&);

  String textBaseline() const;
  void setTextBaseline(const String&);

  String letterSpacing() const;
  String wordSpacing() const;
  String textRendering() const;

  String fontKerning() const;
  String fontStretch() const;
  String fontVariantCaps() const;

  void Trace(Visitor*) const override;

  enum DrawCallType {
    kStrokePath = 0,
    kFillPath,
    kDrawVectorImage,
    kDrawBitmapImage,
    kFillText,
    kStrokeText,
    kFillRect,
    kStrokeRect,
    kDrawCallTypeCount  // used to specify the size of storage arrays
  };

  enum PathFillType {
    kColorFillType,
    kLinearGradientFillType,
    kRadialGradientFillType,
    kPatternFillType,
    kPathFillTypeCount  // used to specify the size of storage arrays
  };

  enum class GPUFallbackToCPUScenario {
    // Used for UMA histogram, do not change enum item values.
    kLargePatternDrawnToGPU = 0,
    kGetImageData = 1,

    kMaxValue = kGetImageData
  };

  enum class OverdrawOp {
    // Must remain in sync with CanvasOverdrawOp defined in
    // tools/metrics/histograms/enums.xml
    //
    // Note: Several enum values are now obsolete because the use cases they
    // covered were removed because they had low incidence rates in real-world
    // web content.

    kNone = 0,  // Not used in histogram

    kTotal = 1,  // Counts total number of overdraw optimization hits.

    // Ops. These are mutually exclusive for a given overdraw hit.
    kClearRect = 2,
    // kFillRect = 3,  // Removed due to low incidence
    // kPutImageData = 4,  // Removed due to low incidence
    kDrawImage = 5,
    kContextReset = 6,
    // kClearForSrcBlendMode = 7,  // Removed due to low incidence

    // Modifiers
    kHasTransform = 9,
    // kSourceOverBlendMode = 10,  // Removed due to low incidence
    // kClearBlendMode = 11,  // Removed due to low incidence
    kHasClip = 12,
    kHasClipAndTransform = 13,

    kMaxValue = kHasClipAndTransform,
  };

  struct UsageCounters {
    int num_draw_calls[kDrawCallTypeCount];  // use DrawCallType enum as index
    float bounding_box_perimeter_draw_calls[kDrawCallTypeCount];
    float bounding_box_area_draw_calls[kDrawCallTypeCount];
    float bounding_box_area_fill_type[kPathFillTypeCount];
    int num_non_convex_fill_path_calls;
    float non_convex_fill_path_area;
    int num_radial_gradients;
    int num_linear_gradients;
    int num_patterns;
    int num_draw_with_complex_clips;
    int num_blurred_shadows;
    float bounding_box_area_times_shadow_blur_squared;
    float bounding_box_perimeter_times_shadow_blur_squared;
    int num_filters;
    int num_get_image_data_calls;
    float area_get_image_data_calls;
    int num_put_image_data_calls;
    float area_put_image_data_calls;
    int num_clear_rect_calls;
    int num_draw_focus_calls;
    int num_frames_since_reset;

    UsageCounters();
  };

  const UsageCounters& GetUsage();
  HeapTaskRunnerTimer<BaseRenderingContext2D>
      dispatch_context_lost_event_timer_;
  HeapTaskRunnerTimer<BaseRenderingContext2D>
      dispatch_context_restored_event_timer_;
  HeapTaskRunnerTimer<BaseRenderingContext2D> try_restore_context_event_timer_;
  unsigned try_restore_context_attempt_count_ = 0;

 protected:
  BaseRenderingContext2D();

  ALWAYS_INLINE CanvasRenderingContext2DState& GetState() const {
    return *state_stack_.back();
  }

  bool ComputeDirtyRect(const gfx::RectF& local_bounds, SkIRect*);
  bool ComputeDirtyRect(const gfx::RectF& local_bounds,
                        const SkIRect& transformed_clip_bounds,
                        SkIRect*);

  template <OverdrawOp CurrentOverdrawOp,
            typename DrawFunc,
            typename DrawCoversClipBoundsFunc>
  void Draw(const DrawFunc&,
            const DrawCoversClipBoundsFunc&,
            const SkRect& bounds,
            CanvasRenderingContext2DState::PaintType,
            CanvasRenderingContext2DState::ImageType,
            CanvasPerformanceMonitor::DrawType);

  void InflateStrokeRect(gfx::RectF&) const;

  void UnwindStateStack();

  // Return the default color space to be used for calls to GetImageData or
  // CreateImageData.
  virtual PredefinedColorSpace GetDefaultImageDataColorSpace() const = 0;

  virtual bool WritePixels(const SkImageInfo& orig_info,
                           const void* pixels,
                           size_t row_bytes,
                           int x,
                           int y) {
    NOTREACHED();
    return false;
  }
  virtual scoped_refptr<StaticBitmapImage> GetImage() {
    NOTREACHED();
    return nullptr;
  }

  void CheckOverdraw(const SkRect&,
                     const cc::PaintFlags*,
                     CanvasRenderingContext2DState::ImageType,
                     BaseRenderingContext2D::OverdrawOp overdraw_op);

  HeapVector<Member<CanvasRenderingContext2DState>> state_stack_;
  // Counts how many states have been pushed with BeginLayer.
  int layer_count_ = 0;
  AntiAliasingMode clip_antialiasing_;

  virtual void FinalizeFrame(bool printing = false) {}

  float GetFontBaseline(const SimpleFontData&) const;
  virtual void DispatchContextLostEvent(TimerBase*);
  virtual void DispatchContextRestoredEvent(TimerBase*);
  virtual void TryRestoreContextEvent(TimerBase*) {}

  static const char kDefaultFont[];
  static const char kInheritDirectionString[];
  static const char kRtlDirectionString[];
  static const char kLtrDirectionString[];
  static const char kAutoKerningString[];
  static const char kNormalKerningString[];
  static const char kNoneKerningString[];
  static const char kNormalVariantString[];
  static const char kUltraCondensedString[];
  static const char kExtraCondensedString[];
  static const char kCondensedString[];
  static const char kSemiCondensedString[];
  static const char kNormalStretchString[];
  static const char kSemiExpandedString[];
  static const char kExpandedString[];
  static const char kExtraExpandedString[];
  static const char kUltraExpandedString[];
  static const char kSmallCapsVariantString[];
  static const char kAllSmallCapsVariantString[];
  static const char kPetiteVariantString[];
  static const char kAllPetiteVariantString[];
  static const char kUnicaseVariantString[];
  static const char kTitlingCapsVariantString[];
  static const char kAutoRendering[];
  static const char kOptimizeSpeedRendering[];
  static const char kOptimizeLegibilityRendering[];
  static const char kGeometricPrecisionRendering[];
  // Canvas is device independent
  static const double kCDeviceScaleFactor;
  virtual void DisableAcceleration() {}

  virtual bool IsPaint2D() const { return false; }
  void WillOverwriteCanvas(OverdrawOp);
  virtual void WillOverwriteCanvas() = 0;

  bool context_restorable_{true};
  CanvasRenderingContext::LostContextMode context_lost_mode_{
      CanvasRenderingContext::kNotLostContext};

 private:
  // Pops from the top of the state stack, inverts transform, restores the
  // PaintCanvas, and validates the state stack. Helper for Restore and
  // EndLayer.
  void PopAndRestore();

  bool ShouldDrawImageAntialiased(const gfx::RectF& dest_rect) const;

  void SetTransform(const TransformationMatrix&);

  TransformationMatrix GetTransform() const override;

  bool StateHasFilter();

  // When the canvas is stroked or filled with a pattern, which is assumed to
  // have a transparent background, the shadow needs to be applied with
  // DropShadowPaintFilter for kNonOpaqueImageType
  // Used in Draw and CompositedDraw to avoid the shadow offset being modified
  // by the transformation matrix
  ALWAYS_INLINE bool ShouldUseDropShadowPaintFilter(
      CanvasRenderingContext2DState::PaintType paint_type,
      CanvasRenderingContext2DState::ImageType image_type) const {
    return (paint_type == CanvasRenderingContext2DState::kFillPaintType ||
            paint_type == CanvasRenderingContext2DState::kStrokePaintType) &&
           image_type == CanvasRenderingContext2DState::kNonOpaqueImage;
  }

  template <OverdrawOp CurrentOverdrawOp,
            typename DrawFunc,
            typename DrawCoversClipBoundsFunc>
  void DrawInternal(const DrawFunc&,
                    const DrawCoversClipBoundsFunc&,
                    const SkRect& bounds,
                    CanvasRenderingContext2DState::PaintType,
                    CanvasRenderingContext2DState::ImageType,
                    const SkIRect& clip_bounds,
                    CanvasPerformanceMonitor::DrawType);

  void DrawPathInternal(const Path&,
                        CanvasRenderingContext2DState::PaintType,
                        SkPathFillType,
                        UsePaintCache);
  void DrawImageInternal(cc::PaintCanvas*,
                         CanvasImageSource*,
                         Image*,
                         const gfx::RectF& src_rect,
                         const gfx::RectF& dst_rect,
                         const SkSamplingOptions&,
                         const cc::PaintFlags*);
  void ClipInternal(const Path&,
                    const String& winding_rule_string,
                    UsePaintCache);

  bool IsPointInPathInternal(const Path&,
                             const double x,
                             const double y,
                             const String& winding_rule_string);
  bool IsPointInStrokeInternal(const Path&, const double x, const double y);

  static bool IsFullCanvasCompositeMode(SkBlendMode);

  template <typename DrawFunc>
  void CompositedDraw(const DrawFunc&,
                      cc::PaintCanvas*,
                      CanvasRenderingContext2DState::PaintType,
                      CanvasRenderingContext2DState::ImageType);

  template <typename T>
  bool ValidateRectForCanvas(T x, T y, T width, T height);

  template <typename T>
  void AdjustRectForCanvas(T& x, T& y, T& width, T& height);

  void ClearCanvasForSrcCompositeOp();
  bool RectContainsTransformedRect(const gfx::RectF&, const SkIRect&) const;
  // Sets the origin to be tainted by the content of the canvas, such
  // as a cross-origin image. This is as opposed to some other reason
  // such as tainting from a filter applied to the canvas.
  void SetOriginTaintedByContent();

  void PutByteArray(const SkPixmap& source,
                    const gfx::Rect& source_rect,
                    const gfx::Vector2d& dest_offset);
  virtual bool IsCanvas2DBufferValid() const {
    NOTREACHED();
    return false;
  }

  virtual void FlushCanvas() = 0;

  // Only call if identifiability_study_helper_.ShouldUpdateBuilder() returns
  // true.
  void IdentifiabilityUpdateForStyleUnion(
      const V8UnionCSSColorValueOrCanvasGradientOrCanvasPatternOrString* style);

  RespectImageOrientationEnum RespectImageOrientationInternal(
      CanvasImageSource*);

  bool origin_tainted_by_content_;
  UsePaintCache path2d_use_paint_cache_;
};

ALWAYS_INLINE void BaseRenderingContext2D::CheckOverdraw(
    const SkRect& rect,
    const cc::PaintFlags* flags,
    CanvasRenderingContext2DState::ImageType image_type,
    BaseRenderingContext2D::OverdrawOp overdraw_op) {
  // Note on performance: because this method is inlined, all conditional
  // branches on arguments that are static at the call site can be optimized-out
  // by the compiler.
  if (overdraw_op == OverdrawOp::kNone)
    return;

  cc::PaintCanvas* c = GetPaintCanvas();
  if (UNLIKELY(!c))
    return;

  if (overdraw_op == OverdrawOp::kDrawImage) {  // static branch
    if (UNLIKELY(flags->getBlendMode() != SkBlendMode::kSrcOver) ||
        UNLIKELY(flags->getLooper()) || UNLIKELY(flags->getImageFilter()) ||
        UNLIKELY(flags->getMaskFilter()) ||
        UNLIKELY(flags->getAlpha() < 0xFF) ||
        UNLIKELY(image_type == CanvasRenderingContext2DState::kNonOpaqueImage))
      return;
  }

  if (overdraw_op == OverdrawOp::kClearRect ||
      overdraw_op == OverdrawOp::kDrawImage) {  // static branch
    if (UNLIKELY(GetState().HasComplexClip()))
      return;

    SkIRect sk_i_bounds;
    if (UNLIKELY(!c->getDeviceClipBounds(&sk_i_bounds)))
      return;
    SkRect device_rect = SkRect::Make(sk_i_bounds);
    const SkImageInfo& image_info = c->imageInfo();
    if (LIKELY(!device_rect.contains(
            SkRect::MakeWH(image_info.width(), image_info.height()))))
      return;
  }

  WillOverwriteCanvas(overdraw_op);
}

template <BaseRenderingContext2D::OverdrawOp CurrentOverdrawOp,
          typename DrawFunc,
          typename DrawCoversClipBoundsFunc>
void BaseRenderingContext2D::DrawInternal(
    const DrawFunc& draw_func,
    const DrawCoversClipBoundsFunc& draw_covers_clip_bounds,
    const SkRect& bounds,
    CanvasRenderingContext2DState::PaintType paint_type,
    CanvasRenderingContext2DState::ImageType image_type,
    const SkIRect& clip_bounds,
    CanvasPerformanceMonitor::DrawType draw_type) {
  const CanvasRenderingContext2DState& state = GetState();
  SkBlendMode global_composite = state.GlobalComposite();
  if (IsFullCanvasCompositeMode(global_composite) || StateHasFilter() ||
      (state.ShouldDrawShadows() &&
       ShouldUseDropShadowPaintFilter(paint_type, image_type))) {
    CompositedDraw(draw_func, GetPaintCanvasForDraw(clip_bounds, draw_type),
                   paint_type, image_type);
  } else if (global_composite == SkBlendMode::kSrc) {
    ClearCanvasForSrcCompositeOp();  // Takes care of CheckOverdraw()
    const cc::PaintFlags* flags =
        state.GetFlags(paint_type, kDrawForegroundOnly, image_type);
    draw_func(GetPaintCanvasForDraw(clip_bounds, draw_type), flags);
  } else {
    SkIRect dirty_rect;
    if (ComputeDirtyRect(gfx::SkRectToRectF(bounds), clip_bounds,
                         &dirty_rect)) {
      const cc::PaintFlags* flags =
          state.GetFlags(paint_type, kDrawShadowAndForeground, image_type);
      if (paint_type != CanvasRenderingContext2DState::kStrokePaintType &&
          draw_covers_clip_bounds(clip_bounds)) {
        // Because CurrentOverdrawOp is a template argument the following branch
        // is optimized-out at compile time.
        if (CurrentOverdrawOp != OverdrawOp::kNone) {
          CheckOverdraw(bounds, flags, image_type, CurrentOverdrawOp);
        }
      }
      draw_func(GetPaintCanvasForDraw(dirty_rect, draw_type), flags);
    }
  }
  if (UNLIKELY(GetPaintCanvas()->NeedsFlush())) {
    // This happens if draw_func called flush() on the PaintCanvas. The flush
    // cannot be performed inside the scope of draw_func because it would break
    // the logic of CompositedDraw.
    FlushCanvas();
  }
}

template <BaseRenderingContext2D::OverdrawOp CurrentOverdrawOp,
          typename DrawFunc,
          typename DrawCoversClipBoundsFunc>
void BaseRenderingContext2D::Draw(
    const DrawFunc& draw_func,
    const DrawCoversClipBoundsFunc& draw_covers_clip_bounds,
    const SkRect& bounds,
    CanvasRenderingContext2DState::PaintType paint_type,
    CanvasRenderingContext2DState::ImageType image_type,
    CanvasPerformanceMonitor::DrawType draw_type) {
  if (!IsTransformInvertible())
    return;

  SkIRect clip_bounds;
  cc::PaintCanvas* paint_canvas = GetOrCreatePaintCanvas();
  if (!paint_canvas || !paint_canvas->getDeviceClipBounds(&clip_bounds))
    return;

  if (UNLIKELY(GetState().IsFilterUnresolved())) {
    // Resolving a filter requires allocating garbage-collected objects.
    PostDeferrableAction(WTF::Bind(
        &BaseRenderingContext2D::DrawInternal<CurrentOverdrawOp, DrawFunc,
                                              DrawCoversClipBoundsFunc>,
        WrapPersistent(this), draw_func, draw_covers_clip_bounds, bounds,
        paint_type, image_type, clip_bounds, draw_type));
  } else {
    DrawInternal<CurrentOverdrawOp, DrawFunc, DrawCoversClipBoundsFunc>(
        draw_func, draw_covers_clip_bounds, bounds, paint_type, image_type,
        clip_bounds, draw_type);
  }
}

template <typename DrawFunc>
void BaseRenderingContext2D::CompositedDraw(
    const DrawFunc& draw_func,
    cc::PaintCanvas* c,
    CanvasRenderingContext2DState::PaintType paint_type,
    CanvasRenderingContext2DState::ImageType image_type) {
  // Due to the complexity of composited draw operations, we need to grant an
  // exception to allow multi-pass rendereing, and state finalization
  // operations to proceed between the time when a flush is requested by
  // draw_func and when the flush request is fulfilled in DrawInternal. We
  // cannot fulfill flush request in the middle of a composited draw because
  // it would break the rendering behavior.
  // It is safe to cast 'c' to RecordPaintCanvas below because we know that
  // CanvasResourceProvider always creates PaintCanvases of that type.
  // TODO(junov): We could pass 'c' as a RecordingPaintCanvas in order to
  // eliminate the static_cast.  This would require changing a lot of plumbing
  // and fixing virtual methods that have non-virtual overloads.
  cc::RecordPaintCanvas::DisableFlushCheckScope disable_flush_check_scope(
      static_cast<cc::RecordPaintCanvas*>(c));

  sk_sp<PaintFilter> canvas_filter = StateGetFilter();
  const CanvasRenderingContext2DState& state = GetState();
  DCHECK(IsFullCanvasCompositeMode(state.GlobalComposite()) || canvas_filter ||
         (state.ShouldDrawShadows() &&
          ShouldUseDropShadowPaintFilter(paint_type, image_type)));
  SkM44 ctm = c->getLocalToDevice();
  c->setMatrix(SkM44());
  cc::PaintFlags composite_flags;
  composite_flags.setBlendMode(state.GlobalComposite());
  if (state.ShouldDrawShadows()) {
    // unroll into two independently composited passes if drawing shadows
    cc::PaintFlags shadow_flags =
        *state.GetFlags(paint_type, kDrawShadowOnly, image_type);
    int save_count = c->getSaveCount();
    c->save();
    if (canvas_filter ||
        ShouldUseDropShadowPaintFilter(paint_type, image_type)) {
      cc::PaintFlags foreground_flags =
          *state.GetFlags(paint_type, kDrawForegroundOnly, image_type);
      shadow_flags.setImageFilter(sk_make_sp<ComposePaintFilter>(
          sk_make_sp<ComposePaintFilter>(foreground_flags.getImageFilter(),
                                         shadow_flags.getImageFilter()),
          canvas_filter));
      // Resetting the alpha of the shadow layer, to avoid the alpha being
      // applied twice.
      shadow_flags.setAlpha(255);
      // Saving the shadow layer before setting the matrix, so the shadow offset
      // does not get modified by the transformation matrix
      c->saveLayer(nullptr, &shadow_flags);
      c->setMatrix(ctm);
      draw_func(c, &foreground_flags);
    } else {
      DCHECK(IsFullCanvasCompositeMode(state.GlobalComposite()));
      c->saveLayer(nullptr, &composite_flags);
      shadow_flags.setBlendMode(SkBlendMode::kSrcOver);
      c->setMatrix(ctm);
      draw_func(c, &shadow_flags);
    }
    c->restoreToCount(save_count);
  }

  composite_flags.setImageFilter(std::move(canvas_filter));
  c->saveLayer(nullptr, &composite_flags);
  cc::PaintFlags foreground_flags =
      *state.GetFlags(paint_type, kDrawForegroundOnly, image_type);
  foreground_flags.setBlendMode(SkBlendMode::kSrcOver);
  c->setMatrix(ctm);
  draw_func(c, &foreground_flags);
  c->restore();
  c->setMatrix(ctm);
}

template <typename T>
bool BaseRenderingContext2D::ValidateRectForCanvas(T x,
                                                   T y,
                                                   T width,
                                                   T height) {
  return (std::isfinite(x) && std::isfinite(y) && std::isfinite(width) &&
          std::isfinite(height) && (width || height));
}

template <typename T>
void BaseRenderingContext2D::AdjustRectForCanvas(T& x,
                                                 T& y,
                                                 T& width,
                                                 T& height) {
  if (width < 0) {
    width = -width;
    x -= width;
  }

  if (height < 0) {
    height = -height;
    y -= height;
  }
}

ALWAYS_INLINE void BaseRenderingContext2D::SetTransform(
    const TransformationMatrix& matrix) {
  GetState().SetTransform(matrix);
  SetIsTransformInvertible(matrix.IsInvertible());
}

ALWAYS_INLINE bool BaseRenderingContext2D::IsFullCanvasCompositeMode(
    SkBlendMode op) {
  // See 4.8.11.1.3 Compositing
  // CompositeSourceAtop and CompositeDestinationOut are not listed here as the
  // platforms already implement the specification's behavior.
  return op == SkBlendMode::kSrcIn || op == SkBlendMode::kSrcOut ||
         op == SkBlendMode::kDstIn || op == SkBlendMode::kDstATop;
}

ALWAYS_INLINE bool BaseRenderingContext2D::StateHasFilter() {
  const CanvasRenderingContext2DState& state = GetState();
  if (UNLIKELY(state.IsFilterUnresolved())) {
    DCHECK(!IsInFastMode());  // Should de-opt before reaching this point.
    return !!StateGetFilter();
  }
  // The fast path avoids the virtual call overhead of StateGetFilter
  return state.IsFilterResolved();
}

ALWAYS_INLINE bool BaseRenderingContext2D::ComputeDirtyRect(
    const gfx::RectF& local_rect,
    const SkIRect& transformed_clip_bounds,
    SkIRect* dirty_rect) {
  DCHECK(dirty_rect);
  const CanvasRenderingContext2DState& state = GetState();
  gfx::RectF canvas_rect = state.GetTransform().MapRect(local_rect);

  if (UNLIKELY(AlphaChannel(state.ShadowColor()))) {
    gfx::RectF shadow_rect(canvas_rect);
    shadow_rect.Offset(state.ShadowOffset());
    shadow_rect.Outset(ClampTo<float>(state.ShadowBlur()));
    canvas_rect.Union(shadow_rect);
  }

  gfx::RectFToSkRect(canvas_rect).roundOut(dirty_rect);
  if (UNLIKELY(!dirty_rect->intersect(transformed_clip_bounds)))
    return false;

  return true;
}

}  // namespace blink

#endif  // THIRD_PARTY_BLINK_RENDERER_MODULES_CANVAS_CANVAS2D_BASE_RENDERING_CONTEXT_2D_H_
