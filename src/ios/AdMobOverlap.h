//Copyright (c) 2014 Sang Ki Kwon (Cranberrygame)
//Email: cranberrygame@yahoo.com
//Homepage: http://cranberrygame.github.io
//License: MIT (http://opensource.org/licenses/MIT)
#import "AdMobPlugin.h"

@interface AdMobOverlap : NSObject <PluginDelegate, GADBannerViewDelegate, GADInterstitialDelegate, GADRewardBasedVideoAdDelegate>

@property id<Plugin> plugin;
//
@property NSString *bannerAdUnit;
@property NSString *interstitialAdUnit;
@property NSString *rewardedVideoAdUnit;
@property BOOL isOverlap;
@property BOOL isTest;
//
@property NSString *bannerPreviousPosition;
@property NSString *bannerPreviousSize;
@property NSInteger lastOrientation;
//
@property BOOL bannerAdPreload;	
@property BOOL interstitialAdPreload;	
@property BOOL rewardedVideoAdPreload;
//admob
@property GADBannerView *bannerView;
@property GADInterstitial *interstitialView;
@property GADRewardBasedVideoAd *rewardedVideo;

- (id) initWithPlugin:(id<Plugin>)plugin_;

@end

