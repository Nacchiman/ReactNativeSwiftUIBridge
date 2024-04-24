//
//  SimpleViewManager.m
//  ReactNativeSwiftUIBridge
//
//  Created by 杉山夏希 on 2024/04/05.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTViewManager.h>
@interface RCT_EXTERN_MODULE(SimpleViewManager, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(title, NSString)
RCT_EXPORT_VIEW_PROPERTY(onPressed, RCTBubblingEventBlock)
@end

