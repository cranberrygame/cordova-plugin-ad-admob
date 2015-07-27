
module.exports = {
	_loadedBannerAd: false,
	_loadedInterstitialAd: false,
	_isShowingBannerAd: false,
	_isShowingInterstitialAd: false,
	//
	setLicenseKey: function(email, licenseKey) {
		var self = this;	
        cordova.exec(
            null,
            null,
            'Admob',
            'setLicenseKey',			
            [email, licenseKey]
        ); 
    },
	setUp: function(bannerAdUnit, interstitialAdUnit, isOverlap, isTest) {
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
            'Admob',
            'setUp',			
            [bannerAdUnit, interstitialAdUnit, isOverlap, isTest]
        ); 
    },
	preloadBannerAd: function() {
		var self = this;	
        cordova.exec(
            null,
            null,
            'Admob',
            'preloadBannerAd',
            []
        ); 
    },
    showBannerAd: function(position, size) {
		var self = this;	
        cordova.exec(
            null,
            null,
            'Admob',
            'showBannerAd',
            [position, size]
        ); 
    },
	reloadBannerAd: function() {
		var self = this;	
        cordova.exec(
            null,
            null,
            'Admob',
            'reloadBannerAd',
            []
        ); 
    },
    hideBannerAd: function() {
		var self = this;
        cordova.exec(
            null,
            null,
            'Admob',
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
            'Admob',
            'preloadFullScreenAd',
            []
        ); 
    },
    showFullScreenAd: function() {
		var self = this;
		cordova.exec(
            null,
            null,
            'Admob',
            'showFullScreenAd',
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
            'Admob',
            'preloadInterstitialAd',
            [location]
        ); 
    },
    showInterstitialAd: function() {
		cordova.exec(
 			null,
            null,
            'Admob',
            'showInterstitialAd',
            [location]
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
	onInterstitialAdHidden: null
};
