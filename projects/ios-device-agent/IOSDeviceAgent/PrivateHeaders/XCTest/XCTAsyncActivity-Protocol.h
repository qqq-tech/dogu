//
//     Generated by class-dump 3.5 (64 bit).
//
//     class-dump is Copyright (C) 1997-1998, 2000-2001, 2004-2013 by Steve Nygard.
//

#import <Foundation/Foundation.h>

@class NSError;

@protocol XCTAsyncActivity <NSObject>
@property(readonly) BOOL timedOut;
@property(readonly) NSError *error;
- (void)finishWithError:(NSError *)arg1;
@end

