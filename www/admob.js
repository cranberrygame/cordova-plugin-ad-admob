
module.exports = {
	_loadedBannerAd: false,
	_loadedInterstitialAd: false,
	_loadedRewardedInterstitialAd: false,	
	_isShowingBannerAd: false,
	_isShowingInterstitialAd: false,
	_isShowingRewardedInterstitialAd: false,	
	_fixCocoonIOCordovaAndroidAdMobIssue: false,
	//
	setLicenseKey: function(email, licenseKey) {
		var self = this;	
        cordova.exec(
            null,
            null,
            'AdMobPlugin',
            'setLicenseKey',			
            [email, licenseKey]
        ); 
    },
	setUp: function(bannerAdUnit, interstitialAdUnit, rewardedInterstitialAdUnit, isOverlap, isTest) {
        if (typeof isTest == 'undefined') {
            isOverlap=rewardedInterstitialAdUnit;
            isTest=isOverlap;
        }
        
		var self = this;
        cordova.exec(
            function (result) {
				if (typeof result == "string") {
					if (result == "onBannerAdPreloaded") {					
						if (self.onBannerAdPreloaded)
							self.onBannerAdPreloaded();
					}
					else if (result == "onBannerAdLoaded") {
						self._loadedBannerAd = true;
						
						if (self.onBannerAdLoaded)
							self.onBannerAdLoaded();
														
//fixCocoonIOCordovaAndroidAdMobIssue
if (typeof Cocoon != 'undefined' && navigator.userAgent.match(/Android/i) && !self._fixCocoonIOCordovaAndroidAdMobIssue) {
	self.reloadBannerAd();
	self._fixCocoonIOCordovaAndroidAdMobIssue=true;
}							
					}
					else if (result == "onBannerAdShown") {
						self._loadedBannerAd = false;
						self._isShowingBannerAd = true;
					
						if (self.onBannerAdShown)
							self.onBannerAdShown();
					}
					else if (result == "onBannerAdHidden") {
						self._isShowingBannerAd = false;
					
						 if (self.onBannerAdHidden)
							self.onBannerAdHidden();
					}
					//
					else if (result == "onInterstitialAdPreloaded") {
//cranberrygame start; deprecated					
						if (self.onFullScreenAdPreloaded)
							self.onFullScreenAdPreloaded();
//cranberrygame end							
						if (self.onInterstitialAdPreloaded)
							self.onInterstitialAdPreloaded();							
					}
					else if (result == "onInterstitialAdLoaded") {
						self._loadedInterstitialAd = true;

//cranberrygame start; deprecated						
						if (self.onFullScreenAdLoaded)
							self.onFullScreenAdLoaded();
//cranberrygame end							
						if (self.onInterstitialAdLoaded)
							self.onInterstitialAdLoaded();							
					}
					else if (result == "onInterstitialAdShown") {
						self._loadedInterstitialAd = false;					
						self._isShowingInterstitialAd = true;

//cranberrygame start; deprecated					
						if (self.onFullScreenAdShown)
							self.onFullScreenAdShown();
//cranberrygame end						
						if (self.onInterstitialAdShown)
							self.onInterstitialAdShown();							
					}
					else if (result == "onInterstitialAdHidden") {
						self._isShowingInterstitialAd = false;

//cranberrygame start; deprecated					
						if (self.onFullScreenAdHidden)
							self.onFullScreenAdHidden();
						if (self.onFullScreenAdClosed)
							self.onFullScreenAdClosed(); //deprecated	
//cranberrygame end							
						 if (self.onInterstitialAdHidden)
							self.onInterstitialAdHidden();
					}
					//
					else if (event == "onRewardedInterstitialAdPreloaded") {
						if (self.onRewardedInterstitialAdPreloaded)
							self.onRewardedInterstitialAdPreloaded();
					}
					else if (event == "onRewardedInterstitialAdLoaded") {
						self._loadedRewardedInterstitialAd = true;

						if (self.onRewardedInterstitialAdLoaded)
							self.onRewardedInterstitialAdLoaded();
					}
					else if (event == "onRewardedInterstitialAdShown") {
						self._loadedRewardedInterstitialAd = false;
						self._isShowingRewardedInterstitialAd = true;
					
						if (self.onRewardedInterstitialAdShown)
							self.onRewardedInterstitialAdShown();
					}
					else if (event == "onRewardedInterstitialAdHidden") {
						self._isShowingRewardedInterstitialAd = false;
					
						 if (self.onRewardedInterstitialAdHidden)
							self.onRewardedInterstitialAdHidden();
					}
					else if (event == "onRewardedInterstitialAdCompleted") {
						if (self.onRewardedInterstitialAdCompleted)
							self.onRewardedInterstitialAdCompleted();
					}					
				}
				else {
					//var event = result["event"];
					//var location = result["message"];				
					//if (event == "onXXX") {
					//	if (self.onXXX)
					//		self.onXXX(location);
					//}
				}			
			}, 
			function (error) {
			},
            'AdMobPlugin',
            'setUp',			
            [bannerAdUnit, interstitialAdUnit, rewardedInterstitialAdUnit, isOverlap, isTest]
        ); 
    },
	preloadBannerAd: function() {
		var self = this;	
        cordova.exec(
            null,
            null,
            'AdMobPlugin',
            'preloadBannerAd',
            []
        ); 
    },
    showBannerAd: function(position, size) {
		var self = this;	
        cordova.exec(
            null,
            null,
            'AdMobPlugin',
            'showBannerAd',
            [position, size]
        ); 
    },
	reloadBannerAd: function() {
		var self = this;	
        cordova.exec(
            null,
            null,
            'AdMobPlugin',
            'reloadBannerAd',
            []
        ); 
    },
    hideBannerAd: function() {
		var self = this;
        cordova.exec(
            null,
            null,
            'AdMobPlugin',
            'hideBannerAd',
            []
        ); 
    },
	//
//cranberrygame start; deprecated	
	preloadFullScreenAd: function() {
		var self = this;	
        cordova.exec(
            null,
            null,
            'AdMobPlugin',
            'preloadInterstitialAd',
            []
        ); 
    },
    showFullScreenAd: function() {
		var self = this;
		cordova.exec(
            null,
            null,
            'AdMobPlugin',
            'showInterstitialAd',
            []
        ); 
    },
	reloadFullScreenAd: function() { //deprecated
    },
//cranberrygame end	
	preloadInterstitialAd: function() {
        cordova.exec(
			null,
            null,
            'AdMobPlugin',
            'preloadInterstitialAd',
            []
        ); 
    },
    showInterstitialAd: function() {
		cordova.exec(
 			null,
            null,
            'AdMobPlugin',
            'showInterstitialAd',
            []
        ); 
    },
	//
	preloadRewardedInterstitialAd: function() {
        cordova.exec(
			null,
            null,
            'AdMobPlugin',
            'preloadRewardedInterstitialAd',
            []
        ); 
    },
    showRewardedInterstitialAd: function() {
		cordova.exec(
			null,
            null,
            'AdMobPlugin',
            'showRewardedInterstitialAd',
            []
        ); 
    },	
	loadedBannerAd: function() {
		return this._loadedBannerAd;
	},
//cranberrygame start; deprecated	
	loadedFullScreenAd: function() {
		return this._loadedInterstitialAd;
	},
//cranberrygame end	
	loadedInterstitialAd: function() {
		return this._loadedInterstitialAd;
	},
	loadedRewardedInterstitialAd: function() {
		return this._loadedRewardedInterstitialAd;
	},	
	isShowingBannerAd: function() {
		return this._isShowingBannerAd;
	},
//cranberrygame start; deprecated	
	isShowingFullScreenAd: function() {
		return this._isShowingInterstitialAd;
	},
//cranberrygame end	
	isShowingInterstitialAd: function() {
		return this._isShowingInterstitialAd;
	},
	isShowingRewardedInterstitialAd: function() {
		return this._isShowingRewardedInterstitialAd;
	},	
	onBannerAdPreloaded: null,
	onBannerAdLoaded: null,
	onBannerAdShown: null,
	onBannerAdHidden: null,	
	//
//cranberrygame start; deprecated	
	onFullScreenAdPreloaded: null,
	onFullScreenAdLoaded: null,
	onFullScreenAdShown: null,
	onFullScreenAdHidden: null,
	onFullScreenAdClosed: null, //deprecated		
//cranberrygame end
	onInterstitialAdPreloaded: null,
	onInterstitialAdLoaded: null,
	onInterstitialAdShown: null,
	onInterstitialAdHidden: null,
	//
	onRewardedInterstitialAdPreloaded: null,
	onRewardedInterstitialAdLoaded: null,
	onRewardedInterstitialAdShown: null,
	onRewardedInterstitialAdHidden: null,
	onRewardedInterstitialAdCompleted: null
};
