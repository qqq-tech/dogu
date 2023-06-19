// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef THIRD_PARTY_BLINK_RENDERER_MODULES_WAKE_LOCK_WAKE_LOCK_TYPE_H_
#define THIRD_PARTY_BLINK_RENDERER_MODULES_WAKE_LOCK_WAKE_LOCK_TYPE_H_

#include <stdint.h>

#include "services/device/public/mojom/wake_lock.mojom-blink-forward.h"
#include "third_party/blink/renderer/bindings/modules/v8/v8_wake_lock_type.h"
#include "third_party/blink/renderer/modules/modules_export.h"

namespace blink {

// This header contains constants and utility functions for converting between
// V8WakeLockType and device.mojom.WakeLockType.

// Useful for creating arrays with size N, where N is the number of different
// wake lock types.
constexpr size_t kWakeLockTypeCount =
    static_cast<size_t>(V8WakeLockType::Enum::kSystem) + 1;
static_assert(kWakeLockTypeCount == 2);

MODULES_EXPORT device::mojom::blink::WakeLockType ToMojomWakeLockType(
    V8WakeLockType::Enum type);

}  // namespace blink

#endif  // THIRD_PARTY_BLINK_RENDERER_MODULES_WAKE_LOCK_WAKE_LOCK_TYPE_H_
