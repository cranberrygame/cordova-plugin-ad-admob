Cordova AdMob plugin
====================

# Overview #
Show admob banner and interstitial ad

[android, ios, wp8] [cordova cli] [xdk] [cocoon] [phonegap build service]

Requires admob account http://www.google.com/ads/admob/

[Admob mediation networks]<br>
adcolony<br>
http://www.adcolony.com/<br>
facebookads<br>
https://developers.facebook.com/docs/audience-network<br>
flurryads<br>
http://www.flurry.com/<br>
huntmads<br>
http://huntmads.com/google<br>
iad<br>
http://advertising.apple.com/<br>
inmobi<br>
http://www.inmobi.com/<br>
leadbolt<br>
http://leadbolt.net/<br>
lifestreet<br>
http://www.lifestreet.com/<br>
millennialmedia<br>
http://www.millennialmedia.com/<br>
mobfox<br>
http://www.mobfox.com/google/<br>
mojiva<br>
http://welcome.mojiva.com/<br>
mopub<br>
http://www.mopub.com/<br>
phunware (tapit)<br>
http://www.phunware.com/advertising

This is open source cordova plugin.

You can see Cordova Plugins in one page: http://cranberrygame.github.io?referrer=github

# Change log #
```c
2014.9.17
	supports SKYSCRAPER size (120x600, Tablets, ipad only)
	Added additional example (example/banner_position_size/index.html)
2014.9.18
	supports isTest
	supports other position: 'top-left', 'top-right', 'left', 'center', 'right', 'bottom-left', 'bottom-right' on android, wp8.
	supports SMART_BANNER resize when orientation changes on android.
2014.9.20
	supports isOverlap on android, ios, wp8
2014.9.24
	supports banner ad callback (onBannerAdLoaded)
	supports full screen ad callback (onFullScreenAdLoaded)
2014.10.3
	supports banner ad callback (onBannerAdPreloaded)
	supports full screen ad callback (onFullScreenAdPreloaded)
1.0.31
	Updated AdMob SDK
		iOS 6.12.2
1.0.39
	Moved package name from com.cranberrygame.phonegap.plugin.ad.admob to com.cranberrygame.cordova.plugin.ad.admob
	Updated AdMob SDK
		android com.google.playservices@21.0.0
		iOS GoogleMobileAdsSdkiOS-7.1.0
1.0.53
	Added isShowingBannerAd, isShowingFullScreenAd
1.0.64
	Added AdColony admob mediation plugin.
1.0.67
	Added other mediation plugins.
1.0.72
	Fixed Android cordova5 build error.
1.0.94
	Updated AdMob SDK
		Windows Phone 8 - 6.5.13	
		Supports wp8 split mode
1.0.95
	Fixed wp8 build error
1.0.96
	Changed name "full screen" to "interstitial"
1.0.97
    Fixed ios test mode not working issue.
    Fixed ios not working onInterstitialAdHidden event issue.
1.0.103
    Updated AdMob iOS SDK v7.3.1
1.0.108
    Fixed cocoon.io android canvas+ issue.
1.0.111
    Fixed cocoon.io android canvas+ banner issue.

To-Do:

	supports ios split mode
	supports other position: 'top-left', 'top-right', 'left', 'center', 'right', 'bottom-left', 'bottom-right' on ios.
	supports banner reposition when orientation changes on ios.
	supports SMART_BANNER resize when orientation changes on ios.	
```
# Install plugin #

## Cordova cli ##
https://cordova.apache.org/docs/en/edge/guide_cli_index.md.html#The%20Command-Line%20Interface - npm install -g cordova@6.0.0
```c
cordova plugin add cordova-plugin-ad-admob
(when build error, use github url: cordova plugin add https://github.com/cranberrygame/cordova-plugin-ad-admob)

//If you want to mediate admob with other ad networks, then install the following additional ad networks you want to mediate with. (but too many mediations will increase app size)
cordova plugin add cordova-plugin-ad-admob-adcolony
cordova plugin add cordova-plugin-ad-admob-facebookads
cordova plugin add cordova-plugin-ad-admob-flurryads
cordova plugin add cordova-plugin-ad-admob-huntmads
cordova plugin add cordova-plugin-ad-admob-iad
cordova plugin add cordova-plugin-ad-admob-inmobi
cordova plugin add cordova-plugin-ad-admob-leadbolt
cordova plugin add cordova-plugin-ad-admob-lifestreetmedia
cordova plugin add cordova-plugin-ad-admob-millennialmedia
cordova plugin add cordova-plugin-ad-admob-mobfox
cordova plugin add cordova-plugin-ad-admob-mojiva
cordova plugin add cordova-plugin-ad-admob-mopub
cordova plugin add cordova-plugin-ad-admob-phunware
```

## Xdk ##
https://software.intel.com/en-us/intel-xdk - Download XDK - XDK PORJECTS - [specific project] - CORDOVA HYBRID MOBILE APP SETTINGS - Plugin Management - Add Plugins to this Project - Third Party Plugins -
```c
Plugin Source: Cordova plugin registry
Plugin ID: cordova-plugin-ad-admob

//If you want to mediate admob with other ad networks, then install the following additional ad networks you want to mediate with. (but too many mediations will increase app size)
Name: admob-adcolony
Plugin ID: cordova-plugin-ad-admob-adcolony
[Do not check] Plugin is located in the Apache Cordova Plugins Registry
Repo URL: https://github.com/cranberrygame/cordova-plugin-ad-admob-adcolony
Name: admob-facebookads
Plugin ID: cordova-plugin-ad-admob-facebookads
[Do not check] Plugin is located in the Apache Cordova Plugins Registry
Repo URL: https://github.com/cranberrygame/cordova-plugin-ad-admob-facebookads
Name: admob-flurryads
Plugin ID: cordova-plugin-ad-admob-flurryads
[Do not check] Plugin is located in the Apache Cordova Plugins Registry
Repo URL: https://github.com/cranberrygame/cordova-plugin-ad-admob-flurryads
Name: admob-huntmads
Plugin ID: cordova-plugin-ad-admob-huntmads
[Do not check] Plugin is located in the Apache Cordova Plugins Registry
Repo URL: https://github.com/cranberrygame/cordova-plugin-ad-admob-huntmads
Name: admob-iad
Plugin ID: cordova-plugin-ad-admob-iad
[Do not check] Plugin is located in the Apache Cordova Plugins Registry
Repo URL: https://github.com/cranberrygame/cordova-plugin-ad-admob-iad
Name: admob-inmobi
Plugin ID: cordova-plugin-ad-admob-inmobi
[Do not check] Plugin is located in the Apache Cordova Plugins Registry
Repo URL: https://github.com/cranberrygame/cordova-plugin-ad-admob-inmobi
Name: admob-leadbolt
Plugin ID: cordova-plugin-ad-admob-leadbolt
[Do not check] Plugin is located in the Apache Cordova Plugins Registry
Repo URL: https://github.com/cranberrygame/cordova-plugin-ad-admob-leadbolt
Name: admob-lifestreetmedia
Plugin ID: cordova-plugin-ad-admob-lifestreetmedia
[Do not check] Plugin is located in the Apache Cordova Plugins Registry
Repo URL: https://github.com/cranberrygame/cordova-plugin-ad-admob-lifestreetmedia
Name: admob-millennialmedia
Plugin ID: cordova-plugin-ad-admob-millennialmedia
[Do not check] Plugin is located in the Apache Cordova Plugins Registry
Repo URL: https://github.com/cranberrygame/cordova-plugin-ad-admob-millennialmedia
Name: admob-mobfox
Plugin ID: cordova-plugin-ad-admob-mobfox
[Do not check] Plugin is located in the Apache Cordova Plugins Registry
Repo URL: https://github.com/cranberrygame/cordova-plugin-ad-admob-mobfox
Name: admob-mojiva
Plugin ID: cordova-plugin-ad-admob-mojiva
[Do not check] Plugin is located in the Apache Cordova Plugins Registry
Repo URL: https://github.com/cranberrygame/cordova-plugin-ad-admob-mojiva
Name: admob-mopub
Plugin ID: cordova-plugin-ad-admob-mopub
[Do not check] Plugin is located in the Apache Cordova Plugins Registry
Repo URL: https://github.com/cranberrygame/cordova-plugin-ad-admob-mopub
Name: admob-phunware
Plugin ID: ccordova-plugin-ad-admob-phunware
[Do not check] Plugin is located in the Apache Cordova Plugins Registry
Repo URL: https://github.com/cranberrygame/cordova-plugin-ad-admob-phunware
```

## Cocoon ##
https://cocoon.io - Create project - [specific project] - Setting - Plugins - Custom - Git Url: https://github.com/cranberrygame/cordova-plugin-ad-admob.git - INSTALL - Save<br>
<br>
//If you want to mediate admob with other ad networks, then install the following additional ad networks you want to mediate with. (but too many mediations will increase app size)<br>
https://github.com/cranberrygame/cordova-plugin-ad-admob-adcolony.git<br>
https://github.com/cranberrygame/cordova-plugin-ad-admob-facebookads.git<br>
https://github.com/cranberrygame/cordova-plugin-ad-admob-flurryads.git<br>
https://github.com/cranberrygame/cordova-plugin-ad-admob-huntmads.git<br>
https://github.com/cranberrygame/cordova-plugin-ad-admob-iad.git<br>
https://github.com/cranberrygame/cordova-plugin-ad-admob-inmobi.git<br>
https://github.com/cranberrygame/cordova-plugin-ad-admob-leadbolt.git<br>
https://github.com/cranberrygame/cordova-plugin-ad-admob-lifestreetmedia.git<br>
https://github.com/cranberrygame/cordova-plugin-ad-admob-millennialmedia.git<br>
https://github.com/cranberrygame/cordova-plugin-ad-admob-mobfox.git<br>
https://github.com/cranberrygame/cordova-plugin-ad-admob-mojiva.git<br>
https://github.com/cranberrygame/cordova-plugin-ad-admob-mopub.git<br>
https://github.com/cranberrygame/cordova-plugin-ad-admob-phunware.git

## Phonegap build service (config.xml) ##
https://build.phonegap.com/ - Apps - [specific project] - Update code - Zip file including config.xml
```c
<gap:plugin name="cordova-plugin-ad-admob" source="npm" />

//If you want to mediate admob with other ad networks, then install the following additional ad networks you want to mediate with. (but too many mediations will increase app size)
<gap:plugin name="cordova-plugin-ad-admob-adcolony" source="npm" />
<gap:plugin name="cordova-plugin-ad-admob-facebookads" source="npm" />
<gap:plugin name="cordova-plugin-ad-admob-flurryads" source="npm" />
<gap:plugin name="cordova-plugin-ad-admob-huntmads" source="npm" />
<gap:plugin name="cordova-plugin-ad-admob-iad" source="npm" />
<gap:plugin name="cordova-plugin-ad-admob-inmobi" source="npm" />
<gap:plugin name="cordova-plugin-ad-admob-leadbolt" source="npm" />
<gap:plugin name="cordova-plugin-ad-admob-lifestreetmedia" source="npm" />
<gap:plugin name="cordova-plugin-ad-admob-millennialmedia" source="npm" />
<gap:plugin name="cordova-plugin-ad-admob-mobfox" source="npm" />
<gap:plugin name="cordova-plugin-ad-admob-mojiva" source="npm" />
<gap:plugin name="cordova-plugin-ad-admob-mopub" source="npm" />
<gap:plugin name="cordova-plugin-ad-admob-phunware" source="npm" />
```

## Construct2 ##
Download construct2 plugin<br>
https://dl.dropboxusercontent.com/u/186681453/pluginsforcordova/index.html<br>
How to install c2 native plugins in xdk, cocoon and cordova cli<br>
https://plus.google.com/102658703990850475314/posts/XS5jjEApJYV
<br>
//If you want to mediate admob with other ad networks, then install the following additional ad networks you want to mediate with. (but too many mediations will increase app size)<br>
Cordova AdMobAdColony construct2 plugin<br>
Cordova AdMobFacebookAds construct2 plugin<br>
Cordova AdMobFlurryAds construct2 plugin<br>
Cordova AdMobHuntMAds construct2 plugin<br>
Cordova AdMobiAd construct2 plugin<br>
Cordova AdMobInMobi construct2 plugin<br>
Cordova AdMobLeadbolt construct2 plugin<br>
Cordova AdMobLifeStreetMedia construct2 plugin<br>
Cordova AdMobMillennialMedia construct2 plugin<br>
Cordova AdMobMobFox construct2 plugin<br>
Cordova AdMobMojiva construct2 plugin<br>
Cordova AdMobMoPub construct2 plugin<br>
Cordova AdMobPhunware construct2 plugin<br>

# Server setting #
```c
```
## bannerAdUnit, interstitialAdUnit ##
<img src="https://raw.githubusercontent.com/cranberrygame/cordova-plugin-ad-admob/master/doc/ad_unit1.png"><br>
<img src="https://raw.githubusercontent.com/cranberrygame/cordova-plugin-ad-admob/master/doc/ad_unit2.png"><br>
<img src="https://raw.githubusercontent.com/cranberrygame/cordova-plugin-ad-admob/master/doc/ad_unit3.png"><br>
<img src="https://raw.githubusercontent.com/cranberrygame/cordova-plugin-ad-admob/master/doc/ad_unit4.png"><br>
<img src="https://raw.githubusercontent.com/cranberrygame/cordova-plugin-ad-admob/master/doc/ad_unit5.png"><br>
<img src="https://raw.githubusercontent.com/cranberrygame/cordova-plugin-ad-admob/master/doc/ad_unit6.png"><br>
<img src="https://raw.githubusercontent.com/cranberrygame/cordova-plugin-ad-admob/master/doc/ad_unit7.png"><br>
<img src="https://raw.githubusercontent.com/cranberrygame/cordova-plugin-ad-admob/master/doc/ad_unit8.png"><br>

## admob mediation ##
The step to use admob mediation networks is following:<br>
1)Just install additional ad network plugin.<br>
2)Join mediation networks. (See Overview section)<br>
3)Set the mediation setting in admob console.<br>
<img src="https://raw.githubusercontent.com/cranberrygame/cordova-plugin-ad-admob/master/doc/admob_mediation1.png"><br>
<img src="https://raw.githubusercontent.com/cranberrygame/cordova-plugin-ad-admob/master/doc/admob_mediation2.png"><br>
<img src="https://raw.githubusercontent.com/cranberrygame/cordova-plugin-ad-admob/master/doc/admob_mediation3.png"><br>
<img src="https://raw.githubusercontent.com/cranberrygame/cordova-plugin-ad-admob/master/doc/admob_mediation4.png"><br>
<img src="https://raw.githubusercontent.com/cranberrygame/cordova-plugin-ad-admob/master/doc/admob_mediation5.png"><br>
<img src="https://raw.githubusercontent.com/cranberrygame/cordova-plugin-ad-admob/master/doc/admob_mediation6.png"><br>
<img src="https://raw.githubusercontent.com/cranberrygame/cordova-plugin-ad-admob/master/doc/admob_mediation7.png">

## ios submit for review survey ##
<img src="https://raw.githubusercontent.com/cranberrygame/cordova-plugin-ad-admob/master/doc/ios_submit_for_review_survey.png">
# API #
```javascript
var bannerAdUnit = "REPLACE_THIS_WITH_YOUR_BANNER_AD_UNIT";
var interstitialAdUnit = "REPLACE_THIS_WITH_YOUR_INTERSTITIAL_AD_UNIT";
var isOverlap = true; //true: overlap, false: split
var isTest = true;
/*
var bannerAdUnit;
var interstitialAdUnit;
var isOverlap = true; //true: overlap, false: split
var isTest = true;
//android
if (navigator.userAgent.match(/Android/i)) {
	bannerAdUnit = "REPLACE_THIS_WITH_YOUR_BANNER_AD_UNIT";
	interstitialAdUnit = "REPLACE_THIS_WITH_YOUR_INTERSTITIAL_AD_UNIT";
}
//ios
else if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
    bannerAdUnit = "REPLACE_THIS_WITH_YOUR_BANNER_AD_UNIT";
    interstitialAdUnit = "REPLACE_THIS_WITH_YOUR_INTERSTITIAL_AD_UNIT";
}
//wp8
else if( navigator.userAgent.match(/Windows Phone/i) ) {
    bannerAdUnit = "REPLACE_THIS_WITH_YOUR_BANNER_AD_UNIT";
    interstitialAdUnit = "REPLACE_THIS_WITH_YOUR_INTERSTITIAL_AD_UNIT";
}
*/

document.addEventListener("deviceready", function(){
    //if no license key, 2% ad traffic share for dev support.
    //you can get paid license key: https://cranberrygame.github.io/request_cordova_ad_plugin_paid_license_key
    //window.admob.setLicenseKey("yourEmailId@yourEmaildDamin.com", "yourLicenseKey");

    window.admob.setUp(bannerAdUnit, interstitialAdUnit, isOverlap, isTest);

    //
    window.admob.onBannerAdPreloaded = function() {
        alert('onBannerAdPreloaded');
    };
    window.admob.onBannerAdLoaded = function() {
        alert('onBannerAdLoaded');
    };
    window.admob.onBannerAdShown = function() {
        alert('onBannerAdShown');
    };
    window.admob.onBannerAdHidden = function() {
        alert('onBannerAdHidden');
    };	
    //
    window.admob.onInterstitialAdPreloaded = function() {
        alert('onInterstitialAdPreloaded');
    };
    window.admob.onInterstitialAdLoaded = function() {
        alert('onInterstitialAdLoaded');
    };
    window.admob.onInterstitialAdShown = function() {
        alert('onInterstitialAdShown');
    };
    window.admob.onInterstitialAdHidden = function() {
        alert('onInterstitialAdHidden');
    };
}, false);
	
window.admob.preloadBannerAd();//option, download ad previously for fast show
/*
position: 'top-left', 'top-center', 'top-right', 'left', 'center', 'right', 'bottom-left', 'bottom-center', 'bottom-right'
size: 	'BANNER' (320x50, Phones and Tablets)
		'LARGE_BANNER' (320x100, Phones and Tablets)
		'MEDIUM_RECTANGLE' (300x250, Phones and Tablets)
		'FULL_BANNER' (468x60, Tablets)
		'LEADERBOARD' (728x90, Tablets)
		'SKYSCRAPER' (120x600, Tablets, ipad only)
		'SMART_BANNER' (Auto size, Phones and Tablets, recommended)
*/
window.admob.showBannerAd('top-center', 'SMART_BANNER');
window.admob.showBannerAd('bottom-center', 'SMART_BANNER');
window.admob.reloadBannerAd();
window.admob.hideBannerAd();

window.admob.preloadInterstitialAd();//option, download ad previously for fast show
window.admob.showInterstitialAd();

alert(window.admob.loadedBannerAd());//boolean: true or false
alert(window.admob.loadedInterstitialAd());//boolean: true or false

alert(window.admob.isShowingBannerAd());//boolean: true or false
alert(window.admob.isShowingInterstitialAd());//boolean: true or false
```
# Examples #
<a href="https://github.com/cranberrygame/cordova-plugin-ad-admob/blob/master/example/basic/index.html">example/basic/index.html</a><br>
<a href="https://github.com/cranberrygame/cordova-plugin-ad-admob/blob/master/example/advanced/index.html">example/advanced/index.html</a><br>
<a href="https://github.com/cranberrygame/cordova-plugin-ad-admob/blob/master/example/basic_wp8/index.html">example/basic_wp8/index.html</a><br>
<a href="https://github.com/cranberrygame/cordova-plugin-ad-admob/blob/master/example/advanced_wp8/index.html">example/advanced_wp8/index.html</a>

# Test #

[![](http://img.youtube.com/vi/xXrVb8E8gMM/0.jpg)](https://www.youtube.com/watch?v=xXrVb8E8gMM&feature=youtu.be "Youtube")

You can also run following test apk.
https://dl.dropboxusercontent.com/u/186681453/pluginsforcordova/admob/apk.html

# Useful links #

Cordova Plugins<br>
http://cranberrygame.github.io?referrer=github

# Credits #
