/**
 * Jasmine Based test suites
 *
 * Several of admob APIs cannot be automatically tested, because 
 * they depend on a previous setup with a valid admob account, So
 * the only automatic test done is to check that the API is 
 * present and can be executed as a function.
 *
 * The fact is, several of the admob plugins methods cause a crash 
 * in the app if they are called withou a correct setup. You can verify
 * this with the manual tests.
 *
 * Having a valid admob account for testing can enable
 * some level of test automation. Maybe to check that some events are triggered 
 * when some specifi API is called
 */
 
//https://github.com/cranberrygame/phonegap-plugin-ad-admob/pull/8
//https://github.com/floatinghotpot/cordova-admob-pro/blob/master/test/index.html
//https://github.com/floatinghotpot/cordova-admob-pro/blob/master/test/admob_simple.js
 
exports.defineAutoTests = function () {
    'use strict';
    
    describe('window.admob', function () {
    	it('should be defined', function () {
            expect(window.admob).toBeDefined();
        });
        
        describe('setUp', function () {
            it('should be defined', function () {
                expect(window.admob.setUp).toBeDefined();
            });

            it('should be a function', function () {
                expect(typeof window.admob.setUp).toEqual('function');
            });
        });
        
        describe('preloadBannerAd', function () {
            it('should be defined', function () {
                expect(window.admob.preloadBannerAd).toBeDefined();
            });

            it('should be a function', function () {
                expect(typeof window.admob.preloadBannerAd).toEqual('function');
            });
        });
        
        describe('reloadBannerAd', function () {
            it('should be defined', function () {
                expect(window.admob.reloadBannerAd).toBeDefined();
            });

            it('should be a function', function () {
                expect(typeof window.admob.reloadBannerAd).toEqual('function');
            });
        });
        
        describe('showBannerAd', function () {
            it('should be defined', function () {
                expect(window.admob.showBannerAd).toBeDefined();
            });

            it('should be a function', function () {
                expect(typeof window.admob.showBannerAd).toEqual('function');
            });
        });
        
        describe('hideBannerAd', function () {
            it('should be defined', function () {
                expect(window.admob.hideBannerAd).toBeDefined();
            });

            it('should be a function', function () {
                expect(typeof window.admob.hideBannerAd).toEqual('function');
            });
        });
        
        describe('preloadInterstitialAd', function () {
            it('should be defined', function () {
                expect(window.admob.preloadInterstitialAd).toBeDefined();
            });

            it('should be a function', function () {
                expect(typeof window.admob.preloadInterstitialAd).toEqual('function');
            });
        });
    
        describe('showInterstitialAd', function () {
            it('should be defined', function () {
                expect(window.admob.showInterstitialAd).toBeDefined();
            });

            it('should be a function', function () {
                expect(typeof window.admob.showInterstitialAd).toEqual('function');
            });
        });
    });
};

/**
 * Manual tests suites
 *
 * Some actions buttons to execute admob plugin methods
 * Need to correctly setup the admob AD_UNIT and AD_UNIT_FULL_SCREEN
 * otherwise, the app will crash if it is not correctly configured
 * Could improve this by setting a default AD_UNIT and AD_UNIT_FULL_SCREEN
 */
exports.defineManualTests = function (contentEl, createActionButton) {
    'use strict';
    
    /** helper function to log a message in the log widget */
    function logMessage(message, color) {
        var log = document.getElementById('info'),
            logLine = document.createElement('div');
        
        if (color) {
            logLine.style.color = color;
        }
        
        logLine.innerHTML = message;
        log.appendChild(logLine);
    }

    /** helper function to log an event to the log widget */
    function logEvent(event) {
        var message = 'Event receiver: ' + event;
        logMessage(message,'Blue');
    }
    
    /** helper function to clear the log widget */
    function clearLog() {
        var log = document.getElementById('info');
        log.innerHTML = '';
    }
    
    /** helper function to declare a non implemented manual test */
    function testNotImplemented(testName) {
        return function () {
            console.error(testName, 'test not implemented');
        };
    }
    
    /** init function called on deviceready event */
    function init() {
        window.admob.onBannerAdPreloaded = function() {
            console.log('event','onBannerAdPreloaded');
            logEvent('onBannerAdPreloaded');
        };
        
        window.admob.onBannerAdLoaded = function() {
            console.log('event','onBannerAdLoaded');
            logEvent('onBannerAdLoaded');
        };
        
        window.admob.onInterstitialAdPreloaded = function() {
            console.log('event','onInterstitialAdPreloaded');
            logEvent('onInterstitialAdPreloaded');
        };
        
        window.admob.onInterstitialAdLoaded = function() {
            console.log('event','onInterstitialAdLoaded');
            logEvent('onInterstitialAdLoaded');
        };
        
        window.admob.onInterstitialAdShown = function() {
            console.log('event','onInterstitialAdShown');
            logEvent('onInterstitialAdShown');
        };
        
        window.admob.onInterstitialAdHidden = function() {
            console.log('event','onInterstitialAdHidden');
            logEvent('onInterstitialAdHidden');
        };
    }
        
    /** object to hold properties and configs */
    var TestSuite = {};

    /* default AD_UNIT and AD_UNIT_FULL_SCREEN for testing, empty for now*/
    TestSuite.AD_UNIT = "";
    TestSuite.AD_UNIT_FULL_SCREEN = "";
    
    TestSuite.$markup = '' +
        '<fieldset>' +
            '<legend>Settings</legend>' +
            
            // with default AD_UNIT and AD_UNIT_FULL_SCREEN
            //'bannerAdUnit: <input id="addUnitInput" type="text" value="' + TestSuite.AD_UNIT + '" placeholder="replace with ad unit"/><br>' +
            //'interstitialAdUnit: <input id="addUnitInterstitialInput" type="text" value="' + TestSuite.AD_UNIT_FULL_SCREEN + '" placeholder="replace with ad unit" /><br>' +
        
            // without default AD_UNIT and AD_UNIT_FULL_SCREEN
            'bannerAdUnit: <input id="addUnitInput" type="text" placeholder="replace with ad unit"/><br>' +
            'interstitialAdUnit: <input id="addUnitInterstitialInput" type="text" placeholder="replace with ad unit" /><br>' +
      
            '<label class="topcoat-checkbox">' +
                '<input type="checkbox" id="isOverlapCheckbox" name="isOverlap" value="isOverlap" checked>' +
                '<div class="topcoat-checkbox__checkmark"></div>' +
                'isOverlap' +
            '</label><br>' +
                
            '<label class="topcoat-checkbox">' +
                '<input type="checkbox" id="isTestCheckbox" name="isTest" value="isTest" checked>' +
                '<div class="topcoat-checkbox__checkmark"></div>' +
                'isTest' +
            '</label><br>' +
        
            '<h3>Set Up</h3>' +
            '<div id="buttonSetUp"></div>' +
            'Expected result: should set bannerAdUnit, interstitialAdUnit, isOverlap and isTest values'+
        '</fieldset>' +
        
        '<fieldset>' +
            '<legend>Admob Banner Tests</legend>' +
        
            'position: <select id="positionSelect">' +
                '<option value="top-left">top-left</option>' +
                '<option value="top-center">top-center</option>' +
                '<option value="top-right">top-right</option>' +
                '<option value="left">left</option>' +
                '<option value="center">center</option>' +
                '<option value="right">right</option>' +
                '<option value="bottom-left">bottom-left</option>' +
                '<option value="bottom-center">bottom-center</option>' +
                '<option value="bottom-right">bottom-right</option>' +
            '</select><br>' +
        
            'size: <select id="sizeSelect">' +
                '<option value="BANNER">BANNER</option>' +
                '<option value="LARGE_BANNER">LARGE_BANNER</option>' +
                '<option value="MEDIUM_RECTANGLE">MEDIUM_RECTANGLE</option>' +
                '<option value="FULL_BANNER">FULL_BANNER</option>' +
                '<option value="LEADERBOARD">LEADERBOARD</option>' +
                '<option value="SKYSCRAPER">SKYSCRAPER</option>' +
                '<option value="SMART_BANNER">SMART_BANNER</option>' +
            '</select><br><br>' +
        
            '<h3>Preload Banner Ad</h3>' +
            '<div id="buttonPreloadBannerAd"></div>' +
            'Expected result: should preload banner Ad, and eventually trigger onBannerAdPreloaded even, then trigger onBannerAdLoaded event'+
        
            '<h3>Show Banner Ad</h3>' +
            '<div id="buttonShowBannerAd"></div>' +
            'Expected result: should show banner Ad, with the given position and size' +
        
            '<h3>Reload Banner Ad</h3>' +
            '<div id="buttonReloadBannerAd"></div>' +
            'Expected result: should reload banner Ad, and trigger onBannerAdLoaded event' +
        
            '<h3>Hide Banner Ad</h3>' +
            '<div id="buttonHideBannerAd"></div>' +
            'Expected result: should hide banner Ad, if it is displayed' +
        '</fieldset>' +
        
        '<fieldset>' +
            '<legend>Admob Fullscreen Tests</legend>' +
        
            '<h3>Preload Interstitial Ad</h3>' +
            '<div id="buttonPreloadInterstitialAd"></div>' +
            'Expected result: should preload fullscreen Ad, and trigger onInterstitialAdPreloaded event, then trigger onInterstitialAdLoaded event'+
        
            '<h3>Show Interstitial Ad</h3>' +
            '<div id="buttonShowInterstitialAd"></div>' +
            'Expected result: should show fullscreen Ad, trigger onInterstitialAdShown event, and then trigger onInterstitialAdHidden once closed' +
        '</fieldset>' +
        '';
    
    TestSuite.isOverlap = function(){
        return document.getElementById('isOverlapCheckbox').checked;
    };
    
    TestSuite.isTest = function(){
        return document.getElementById('isTestCheckbox').checked;
    };
    
    TestSuite.getAdmobBannerAdUnit = function(){
        return document.getElementById('addUnitInput').value;
    };
    
    TestSuite.getAdmobInterstitialAdUnit = function(){
        return document.getElementById('addUnitInterstitialInput').value;
    };
    
    TestSuite.getPosition = function(){
        var positionSelect = document.getElementById('positionSelect');
        return positionSelect.options[ positionSelect.selectedIndex ].value;
    };
    
    TestSuite.getSize = function(){
        var sizeSelect = document.getElementById('sizeSelect');
        return sizeSelect.options[ sizeSelect.selectedIndex ].value;
    };
        
    contentEl.innerHTML = '<div id="info"></div>' + TestSuite.$markup; 
    
    /* setUp */
    createActionButton('setUp', function () {
        clearLog();
        
        var bannerAdUnit = TestSuite.getAdmobBannerAdUnit();
        var interstitialAdUnit = TestSuite.getAdmobInterstitialAdUnit();
        var isOverlap = TestSuite.isOverlap();
        var isTest = TestSuite.isTest();
        
        window.admob.setUp(bannerAdUnit, interstitialAdUnit, isOverlap, isTest);
        
        var message = 'Set Up <br/>' + 
            'bannerAdUnit: ' + bannerAdUnit + '<br/>' +
            'interstitialAdUnit: ' + interstitialAdUnit + '<br/>' +
            'isOverlap: ' + isOverlap + '<br/>' +
            'isTest: ' + isTest + '<br/>';
        
        logMessage(message,'green');
    }, 'buttonSetUp');
    
    /* Banner Ad */
    createActionButton('preloadBannerAd',function(){
        clearLog();
        
        window.admob.preloadBannerAd();
    },'buttonPreloadBannerAd');
    
    createActionButton('showBannerAd', function(){
        clearLog();
        
        var size = TestSuite.getSize();
        var position = TestSuite.getPosition();
        window.admob.showBannerAd(size,position);
    }, 'buttonShowBannerAd');
    
    createActionButton('reloadBannerAd', function(){
        clearLog();
        
        window.admob.reloadBannerAd();
    }, 'buttonReloadBannerAd');
    
    createActionButton('hideBannerAd', function(){
        clearLog();
        
        window.admob.hideBannerAd();
    }, 'buttonHideBannerAd');
    
    /* Interstitial Ad */
    createActionButton('preloadInterstitialAd',function(){
        clearLog();
        
        window.admob.preloadInterstitialAd();
    },'buttonPreloadInterstitialAd');
    
    createActionButton('showInterstitialAd', function(){
        clearLog();
        
        window.admob.showInterstitialAd();
    }, 'buttonShowInterstitialAd');
    
    createActionButton('reloadInterstitialAd', function(){
        clearLog();
        
        window.admob.reloadInterstitialAd();
    }, 'buttonReloadInterstitialAd');
    
    document.addEventListener('deviceready', init, false);
};