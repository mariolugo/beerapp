//
//  RNGradientViewManager.swift
//  BeerApp
//
//  Created by Mario Lugo Talamante on 3/12/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

import Foundation
import GradientView

@objc(RNGradientView)
class RNGradientView : GradientView {
  
  override init(frame: CGRect) {
    super.init(frame: frame);
    self.frame = frame;
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  func setLocations(locations: NSArray) {
    self.locations = locations.map({ return $0 as! CGFloat});
  }
  
  func setColors(colors: NSArray) {
    self.colors = colors.map({return RCTConvert.UIColor($0)})
  }
}