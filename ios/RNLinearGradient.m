//
//  RNLinearGradient.m
//  BeerApp
//
//  Created by Mario Lugo Talamante on 3/12/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "RNLinearGradient.h"
#import "RCTViewManager.h"
@interface RCT_EXTERN_MODULE(RNLinearGradientSwift, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(locations, NSArray);
RCT_EXPORT_VIEW_PROPERTY(colors, NSArray);
@end