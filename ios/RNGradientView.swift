//
//  RNGradientView.swift
//  BeerApp
//
//  Created by Mario Lugo Talamante on 3/12/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

import Foundation
@objc(RNLinearGradientSwift)
class RNGradientViewManager : RCTViewManager {
  override func view() -> UIView! {
    return RNGradientView();
  }
}