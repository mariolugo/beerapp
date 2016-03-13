//
//  Use this file to import your target's public headers that you would like to expose to Swift.
//

#import "RCTViewManager.h"

@objc(RNLinearGradient)
class RNGradientViewManager : RCTViewManager {
  override func view() -> UIView! {
    return UIView(); // We'll change this later
  }
}