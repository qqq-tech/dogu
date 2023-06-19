// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef THIRD_PARTY_BLINK_RENDERER_MODULES_WEBGPU_TEXTURE_UTILS_H_
#define THIRD_PARTY_BLINK_RENDERER_MODULES_WEBGPU_TEXTURE_UTILS_H_

#include "third_party/blink/renderer/modules/webgpu/dawn_object.h"

namespace blink {

bool ComputeAndValidateRequiredBytesInCopy(size_t data_size,
                                           WGPUTextureDataLayout layout,
                                           WGPUExtent3D extent,
                                           WGPUTextureFormat format,
                                           WGPUTextureAspect aspect,
                                           size_t* required_copy_size,
                                           GPUDevice* device);

}  // namespace blink

#endif  // THIRD_PARTY_BLINK_RENDERER_MODULES_WEBGPU_TEXTURE_UTILS_H_
