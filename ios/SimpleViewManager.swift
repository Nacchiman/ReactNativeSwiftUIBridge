//
//  SimpleViewManager.swift
//  ReactNativeSwiftUIBridge
//
//  Created by 杉山夏希 on 2024/04/05.
//

import UIKit
@objc(SimpleViewManager)
class SimpleViewManager: RCTViewManager{

  override func view() -> SimpleViewProxy? {
    return SimpleViewProxy()
  }
  
  override class func requiresMainQueueSetup() -> Bool {
    return true
  }
}
