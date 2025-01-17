// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef THIRD_PARTY_BLINK_RENDERER_MODULES_ML_ML_MODEL_LOADER_H_
#define THIRD_PARTY_BLINK_RENDERER_MODULES_ML_ML_MODEL_LOADER_H_

#include "third_party/blink/renderer/bindings/core/v8/script_promise.h"
#include "third_party/blink/renderer/bindings/modules/v8/v8_ml_model_format.h"
#include "third_party/blink/renderer/bindings/modules/v8/v8_typedefs.h"
#include "third_party/blink/renderer/modules/ml/ml.h"
#include "third_party/blink/renderer/platform/bindings/script_wrappable.h"
#include "third_party/blink/renderer/platform/heap/member.h"
#include "third_party/blink/renderer/platform/heap/visitor.h"

namespace blink {

class DOMArrayBuffer;
class ExceptionState;
class ExecutionContext;
class MLContext;
class ScriptState;

class MLModelLoader final : public ScriptWrappable {
  DEFINE_WRAPPERTYPEINFO();

 public:
  explicit MLModelLoader(ExecutionContext* execution_context,
                         MLContext* ml_context);

  static MLModelLoader* Create(ScriptState* script_state,
                               MLContext* ml_context,
                               ExceptionState& exception_state);

  MLModelLoader(const MLModelLoader&) = delete;
  MLModelLoader& operator=(const MLModelLoader&) = delete;

  ~MLModelLoader() override;

  // IDL Interface:
  ScriptPromise load(ScriptState* script_state,
                     DOMArrayBuffer* buffer,
                     ExceptionState& exception_state);

  void Trace(Visitor* visitor) const override;

 private:
  Member<MLContext> ml_context_;
};

}  // namespace blink

#endif  // THIRD_PARTY_BLINK_RENDERER_MODULES_ML_ML_MODEL_LOADER_H_
