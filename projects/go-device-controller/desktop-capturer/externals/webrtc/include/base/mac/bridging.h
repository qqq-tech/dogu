// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef BASE_MAC_BRIDGING_H_
#define BASE_MAC_BRIDGING_H_

#include <CoreText/CoreText.h>
#import <Foundation/Foundation.h>

#include "base/base_export.h"
#include "base/check.h"
#include "build/build_config.h"

#if BUILDFLAG(IS_IOS)
#import <UIKit/UIKit.h>
#endif

#if BUILDFLAG(IS_MAC)
#import <AppKit/AppKit.h>
#endif

#if !defined(__has_feature) || !__has_feature(objc_arc)
#error "base/mac/bridging.h requires ARC."
#endif

// These functions convert pointers of bridged CFTypes to NSTypes and
// vice-versa. They come in two flavors: those that transfer ownership
// (`OwnershipCast`) and those that just convert the pointer (`PtrCast`).
//
// Examples:
//
// Ownership transference (as in `CFBridgingRetain`/`Release`):
//   CFStringRef cf_string = CFStringCreateWithCString(...);
//   NSString* ns_string = CFToNSOwnershipCast(cf_string);
//   // At this point, `cf_string` does not need releasing.
//
//   NSString* ns_string = [[NSString alloc] initWithString:...];
//   CFStringRef cf_string = NSToCFOwnershipCast(ns_string);
//   // At this point, `cf_string` must be released.
//
// Pointer conversion (as in `__bridge`):
//   // `cf_data` is some `CFDataRef` from somewhere.
//   NSImage* ns_image = [[NSImage alloc] initWithData:CFToNSPtrCast(cf_data)];
//
//   // `ns_data` is some `NSData *` from somewhere.
//   SecKeyRef sec_key = SecKeyCreateFromData(..., NSToCFPtrCast(ns_data), ...);
//
// The reason to use these functions (rather than using `__bridge` and
// `CFBridgingRetain`/`Release`) is because they are type-safe. The OS-provided
// bridging calls do not type check, while these calls do the appropriate type
// checking via the magic of macros.
//
// Implementation note: Why not templates? Type checking in Core Foundation
// involves functions named in a specific pattern, and only macro token pasting
// works for this purpose.

#define CF_TO_NS_CAST_IMPL(TypeCF, TypeNS)                                  \
  namespace base::mac {                                                     \
  inline BASE_EXPORT TypeNS* _Nullable CFToNSOwnershipCast(                 \
      TypeCF##Ref CF_CONSUMED _Nullable cf_val) {                           \
    DCHECK(!cf_val || TypeCF##GetTypeID() == CFGetTypeID(cf_val));          \
    return (__bridge_transfer TypeNS*)cf_val;                               \
  }                                                                         \
  inline BASE_EXPORT CF_RETURNS_RETAINED                                    \
      TypeCF##Ref _Nullable NSToCFOwnershipCast(TypeNS* _Nullable ns_val) { \
    TypeCF##Ref cf_val = (__bridge_retained TypeCF##Ref)ns_val;             \
    DCHECK(!cf_val || TypeCF##GetTypeID() == CFGetTypeID(cf_val));          \
    return cf_val;                                                          \
  }                                                                         \
  inline BASE_EXPORT TypeNS* _Nullable CFToNSPtrCast(                       \
      TypeCF##Ref _Nullable cf_val) {                                       \
    DCHECK(!cf_val || TypeCF##GetTypeID() == CFGetTypeID(cf_val));          \
    return (__bridge TypeNS*)cf_val;                                        \
  }                                                                         \
  inline BASE_EXPORT TypeCF##Ref _Nullable NSToCFPtrCast(                   \
      TypeNS* _Nullable ns_val) {                                           \
    TypeCF##Ref cf_val = (__bridge TypeCF##Ref)ns_val;                      \
    DCHECK(!cf_val || TypeCF##GetTypeID() == CFGetTypeID(cf_val));          \
    return cf_val;                                                          \
  }                                                                         \
  }

#define CF_TO_NS_MUTABLE_CAST_IMPL(name)                                 \
  CF_TO_NS_CAST_IMPL(CF##name, NS##name)                                 \
  namespace base::mac {                                                  \
  inline BASE_EXPORT NSMutable##name* _Nullable CFToNSOwnershipCast(     \
      CFMutable##name##Ref CF_CONSUMED _Nullable cf_val) {               \
    DCHECK(!cf_val || CF##name##GetTypeID() == CFGetTypeID(cf_val));     \
    return (__bridge_transfer NSMutable##name*)cf_val;                   \
  }                                                                      \
  inline BASE_EXPORT CF_RETURNS_RETAINED                                 \
      CFMutable##name##Ref _Nullable NSToCFOwnershipCast(                \
          NSMutable##name* _Nullable ns_val) {                           \
    CFMutable##name##Ref cf_val =                                        \
        (__bridge_retained CFMutable##name##Ref)ns_val;                  \
    DCHECK(!cf_val || CF##name##GetTypeID() == CFGetTypeID(cf_val));     \
    return cf_val;                                                       \
  }                                                                      \
  inline BASE_EXPORT NSMutable##name* _Nullable CFToNSPtrCast(           \
      CFMutable##name##Ref _Nullable cf_val) {                           \
    DCHECK(!cf_val || CF##name##GetTypeID() == CFGetTypeID(cf_val));     \
    return (__bridge NSMutable##name*)cf_val;                            \
  }                                                                      \
  inline BASE_EXPORT CFMutable##name##Ref _Nullable NSToCFPtrCast(       \
      NSMutable##name* _Nullable ns_val) {                               \
    CFMutable##name##Ref cf_val = (__bridge CFMutable##name##Ref)ns_val; \
    DCHECK(!cf_val || CF##name##GetTypeID() == CFGetTypeID(cf_val));     \
    return cf_val;                                                       \
  }                                                                      \
  }

// List of toll-free bridged types taken from:
// https://web.archive.org/web/20111124025525/http://www.cocoadev.com/index.pl?TollFreeBridged
// https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677-SW4

// Foundation
CF_TO_NS_MUTABLE_CAST_IMPL(Array)
CF_TO_NS_MUTABLE_CAST_IMPL(AttributedString)
CF_TO_NS_CAST_IMPL(CFCalendar, NSCalendar)
CF_TO_NS_MUTABLE_CAST_IMPL(CharacterSet)
CF_TO_NS_MUTABLE_CAST_IMPL(Data)
CF_TO_NS_CAST_IMPL(CFDate, NSDate)
CF_TO_NS_MUTABLE_CAST_IMPL(Dictionary)
CF_TO_NS_CAST_IMPL(CFError, NSError)
CF_TO_NS_CAST_IMPL(CFLocale, NSLocale)
CF_TO_NS_CAST_IMPL(CFNumber, NSNumber)
CF_TO_NS_CAST_IMPL(CFRunLoopTimer, NSTimer)
CF_TO_NS_CAST_IMPL(CFTimeZone, NSTimeZone)
CF_TO_NS_MUTABLE_CAST_IMPL(Set)
CF_TO_NS_CAST_IMPL(CFReadStream, NSInputStream)
CF_TO_NS_CAST_IMPL(CFWriteStream, NSOutputStream)
CF_TO_NS_MUTABLE_CAST_IMPL(String)
CF_TO_NS_CAST_IMPL(CFURL, NSURL)

// AppKit / UIKit
#if BUILDFLAG(IS_IOS)
CF_TO_NS_CAST_IMPL(CTFont, UIFont)
#else
// The NSFont/CTFont toll-free bridging is broken before 10.15.
// http://www.openradar.me/15341349 rdar://15341349
//
// TODO(https://crbug.com/1076527): This is fixed in 10.15. When 10.15 is the
// minimum OS for Chromium, remove this specialization and replace it with just:
//
// CF_TO_NS_CAST_IMPL(CTFont, NSFont)

extern "C" {
Boolean _CFIsObjC(CFTypeID typeID, CFTypeRef obj);
}  // extern "C"

namespace base::mac {

inline BASE_EXPORT NSFont* _Nullable CFToNSOwnershipCast(
    CTFontRef CF_CONSUMED _Nullable cf_val) {
  NSFont* ns_val = (__bridge_transfer NSFont*)cf_val;
  DCHECK(!cf_val || CTFontGetTypeID() == CFGetTypeID(cf_val) ||
         (_CFIsObjC(CTFontGetTypeID(), cf_val) &&
          [ns_val isKindOfClass:[NSFont class]]));
  return ns_val;
}

inline BASE_EXPORT CF_RETURNS_RETAINED _Nullable CTFontRef NSToCFOwnershipCast(
    NSFont* _Nullable ns_val) {
  CTFontRef cf_val = (__bridge_retained CTFontRef)ns_val;
  DCHECK(!cf_val || CTFontGetTypeID() == CFGetTypeID(cf_val) ||
         [ns_val isKindOfClass:[NSFont class]]);
  return cf_val;
}

inline BASE_EXPORT _Nullable NSFont* CFToNSPtrCast(CTFontRef _Nullable cf_val) {
  NSFont* ns_val = (__bridge NSFont*)cf_val;
  DCHECK(!cf_val || CTFontGetTypeID() == CFGetTypeID(cf_val) ||
         (_CFIsObjC(CTFontGetTypeID(), cf_val) &&
          [ns_val isKindOfClass:[NSFont class]]));
  return ns_val;
}

inline BASE_EXPORT _Nullable CTFontRef NSToCFPtrCast(NSFont* _Nullable ns_val) {
  CTFontRef cf_val = (__bridge CTFontRef)ns_val;
  DCHECK(!cf_val || CTFontGetTypeID() == CFGetTypeID(cf_val) ||
         [ns_val isKindOfClass:[NSFont class]]);
  return cf_val;
}

}  // namespace base::mac

#endif

#undef CF_TO_NS_CAST_IMPL
#undef CF_TO_NS_MUTABLE_CAST_IMPL

#endif  // BASE_MAC_BRIDGING_H_
