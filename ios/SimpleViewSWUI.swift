//
//  SimpleViewSWUI.swift
//  ReactNativeSwiftUIBridge
//
//  Created by 杉山夏希 on 2024/04/05.
//

import SwiftUI
struct SimpleViewSWUI: View {
  // @EnvironmentObject var dataStore: MyDataStore

  var body: some View {
    VStack{
      // Button(action: {
      //   dataStore.onPressed(["data": "some data by native side"])
      // }, label: {
      //   Text("\(dataStore.title)")
      // })
      if #available(iOS 17.0, *) {
            ContentView()
      }
    }
  }
}
