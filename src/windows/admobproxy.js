
module.exports = {
	_loadedBannerAd: false,
	_loadedInterstitialAd: false,
	_isShowingBannerAd: false,
	_isShowingInterstitialAd: false,
	//
	setLicenseKey: function(successCallback, errorCallback, args) {
	    var email = args[0];
	    var licenseKey = args[1];	
		Com.Cranberrygame.Cordova.Plugin.Ad.AdMob.AdMobPlugin.setLicenseKey(email, licenseKey);		        
    },
	setUp: function(successCallback, errorCallback, args) {
		var bannerAdUnit = args[0];
		var interstitialAdUnit = args[1];
		var isOverlap = args[2];
		var isTest = args[3];
		Com.Cranberrygame.Cordova.Plugin.Ad.AdMob.AdMobPlugin.setUp(bannerAdUnit, interstitialAdUnit, isOverlap, isTest);
/*
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
				if (self.onInterstitialAdPreloaded)
					self.onInterstitialAdPreloaded();
			}
			else if (result == "onInterstitialAdLoaded") {
				self._loadedInterstitialAd = true;
				
				if (self.onInterstitialAdLoaded)
					self.onInterstitialAdLoaded();
			}
			else if (result == "onInterstitialAdShown") {
				self._loadedInterstitialAd = false;					
				self._isShowingInterstitialAd = true;

				if (self.onInterstitialAdShown)
					self.onInterstitialAdShown();
			}
			else if (result == "onInterstitialAdHidden") {
				self._isShowingInterstitialAd = false;
				
				if (self.onInterstitialAdHidden)
					self.onInterstitialAdHidden();
			}
		}
		else {
			//if (result["event"] == "onXXX") {
			//	//result["message"]
			//	if (self.onXXX)
			//		self.onXXX(result);
			//}
		}	
*/	
    },
	preloadBannerAd: function(successCallback, errorCallback, args) {
		Com.Cranberrygame.Cordova.Plugin.Ad.AdMob.AdMobPlugin.preloadBannerAd(); 
    },
    showBannerAd: function(successCallback, errorCallback, args) {
	    var position = args[0];
	    var size = args[1];
		Com.Cranberrygame.Cordova.Plugin.Ad.AdMob.AdMobPlugin.showBannerAd(position, size);
    },
	reloadBannerAd: function(successCallback, errorCallback, args) {
		Com.Cranberrygame.Cordova.Plugin.Ad.AdMob.AdMobPlugin.reloadBannerAd();
    },
    hideBannerAd: function(successCallback, errorCallback, args) {
		Com.Cranberrygame.Cordova.Plugin.Ad.AdMob.AdMobPlugin.hideBannerAd();
    },
	//
	preloadInterstitialAd: function(successCallback, errorCallback, args) {
		Com.Cranberrygame.Cordova.Plugin.Ad.AdMob.AdMobPlugin.preloadInterstitialAd();
    },
    showInterstitialAd: function(successCallback, errorCallback, args) {
		Com.Cranberrygame.Cordova.Plugin.Ad.AdMob.AdMobPlugin.showInterstitialAd(); 
    },
/*	
	loadedBannerAd: function() {
		return this._loadedBannerAd;
	},
	loadedInterstitialAd: function() {
		return this._loadedInterstitialAd;
	},	
	isShowingBannerAd: function() {
		return this._isShowingBannerAd;
	},
	isShowingInterstitialAd: function() {
		return this._isShowingInterstitialAd;
	},	
*/	
	onBannerAdPreloaded: null,
	onBannerAdLoaded: null,
	onBannerAdShown: null,
	onBannerAdHidden: null,	
	//
	onInterstitialAdPreloaded: null,
	onInterstitialAdLoaded: null,
	onInterstitialAdShown: null,
	onInterstitialAdHidden: null	
};

//require("cordova/exec/proxy").add("AdMobPlugin", module.exports);
cordova.commandProxy.add("AdMobPlugin", module.exports);
