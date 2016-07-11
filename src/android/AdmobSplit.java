//Copyright (c) 2014 Sang Ki Kwon (Cranberrygame)
//Email: cranberrygame@yahoo.com
//Homepage: http://cranberrygame.github.io
//License: MIT (http://opensource.org/licenses/MIT)
package com.cranberrygame.cordova.plugin.ad.admob;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONObject;
import org.json.JSONException;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaWebView;
import android.app.Activity;
import android.util.Log;
//
import android.os.Build;
import android.os.Handler;
import android.util.Log;
import android.view.View;
//
import android.view.ViewGroup;
import android.widget.RelativeLayout;
//
import android.annotation.TargetApi;
//
import java.lang.reflect.Method;

//
import android.widget.FrameLayout;
import android.widget.FrameLayout.LayoutParams;
import com.google.android.gms.ads.AdView;

public class AdMobSplit extends AdMobOverlap {
	protected static final String LOG_TAG = "AdMobSplit";
	
	public AdMobSplit(Plugin plugin_) {
		super(plugin_);
	}
	
	//@SuppressLint("NewApi")
	@TargetApi(Build.VERSION_CODES.HONEYCOMB)	
	protected void handleLayoutChangeOverlap() {
		//http://stackoverflow.com/questions/24539578/cordova-plugin-listening-to-device-orientation-change-is-it-possible
		//http://developer.android.com/reference/android/view/View.OnLayoutChangeListener.html
		//https://gitshell.com/lvxudong/A530_packages_app_Camera/blob/master/src/com/android/camera/ActivityBase.java
		//plugin.getWebView().addOnLayoutChangeListener(new View.OnLayoutChangeListener(){//only for ~cordova4
		//plugin.getWebView().getRootView().addOnLayoutChangeListener(new View.OnLayoutChangeListener(){//only for ~cordova4
		//plugin.getWebView().getView().addOnLayoutChangeListener(new View.OnLayoutChangeListener(){//only for cordova5~
		getView(plugin.getWebView()).addOnLayoutChangeListener(new View.OnLayoutChangeListener(){
		
			@Override
			public void onLayoutChange(View v, int left, int top, int right, int bottom,
					int oldLeft, int oldTop, int oldRight, int oldBottom) {
				if (left == oldLeft && top == oldTop && right == oldRight
						&& bottom == oldBottom) {
					return;
				}

				Log.d(LOG_TAG, "onLayoutChange");
				//Util.alert(cordova.getActivity(), "onLayoutChange");
				
				int orientation = Util.getDisplayRotation(plugin.getCordova().getActivity());
				if(orientation != lastOrientation) {
					Log.d(LOG_TAG, String.format("orientation: %d", orientation));
					//Util.alert(cordova.getActivity(), String.format("orientation: %d", orientation));
					if (bannerPreviousSize != null && bannerPreviousSize.equals("SMART_BANNER")) {
						Log.d(LOG_TAG, String.format("position: %s, size: %s", bannerPreviousPosition, bannerPreviousSize));
						//Util.alert(cordova.getActivity(), String.format("position: %s, size: %s", position, size));

						//split
						if (bannerView != null) {							
							//if banner is showing
							ViewGroup parentView = (ViewGroup)bannerView.getParent();
							if (parentView != null) {
								//parentView.removeView(bannerView);
								//bannerView.destroy();
								//bannerView = null;
								Log.d(LOG_TAG, String.format("position: %s, size: %s", bannerPreviousPosition, bannerPreviousSize));
								//Util.alert(cordova.getActivity(), String.format("position: %s, size: %s", position, size));

								//http://stackoverflow.com/questions/3072173/how-to-call-a-method-after-a-delay-in-android
								final Handler handler = new Handler();
								handler.postDelayed(new Runnable() {
									@Override
									public void run() {
										_showBannerAd(bannerPreviousPosition, bannerPreviousSize);
									}
								}, 1);//after 1ms				
							}
						}						
					}
				}
			
				lastOrientation = orientation;		
			}		    
		});
    }	

	public static View getView(CordovaWebView webView) {	
		if(View.class.isAssignableFrom(CordovaWebView.class)) {
			return (View) webView;
		}
		
		try {
			Method getViewMethod = CordovaWebView.class.getMethod("getView", (Class<?>[]) null);
			if(getViewMethod != null) {
				Object[] args = {};
				return (View) getViewMethod.invoke(webView, args);
			}
		} 
		catch (Exception e) {
		}
		
		return null;
	}
	
	protected boolean bannerIsShowingOverlap() {
		boolean bannerIsShowing = false;
		if (bannerView != null) {							
			//if banner is showing
			ViewGroup parentView = (ViewGroup)bannerView.getParent();
			if (parentView != null) {
				bannerIsShowing = true;
			}
		}	
		
		return bannerIsShowing;
	}
	
	protected void addBannerViewOverlap(String position, String size) {
///*
		if (plugin.getWebView() != null) {
			//ViewGroup parentView = (ViewGroup)plugin.getWebView().getParent();//only for ~cordova4
			//ViewGroup parentView = (ViewGroup)plugin.getWebView().getRootView();//only for ~cordova4
			//ViewGroup parentView = (ViewGroup)plugin.getWebView().getView();//only for cordova5
			ViewGroup parentView = (ViewGroup)getView(plugin.getWebView());
			if (parentView != null) {
				if (position.equals("top-left") || position.equals("top-center")|| position.equals("top-right") || position.equals("left") || position.equals("center") || position.equals("right")) {	
					parentView.addView(bannerView, 0);
				}
				else {		
					parentView.addView(bannerView);
				}
				//parentView.bringToFront();
			}
		}
		
		Log.d("AdmobPlugin", "position: " + position);
//*/
/*	
        FrameLayout v = new FrameLayout(plugin.getCordova().getActivity());
        //http://developer.android.com/reference/android/widget/FrameLayout.LayoutParams.html#FrameLayout.LayoutParams(int, int)
        //http://rerethink.tistory.com/entry/%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C-%EC%BD%94%EB%93%9C%EC%97%90%EC%84%9C-LayoutParams-%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-Gravity-%EC%A3%BC%EA%B8%B0
        //http://rerethink.tistory.com/entry/%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C-%ED%85%8C%EC%9D%B4%EB%B8%94%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83-%EC%BD%94%EB%93%9C%EC%83%81-%EC%84%A4%EC%A0%95
        FrameLayout.LayoutParams params = new FrameLayout.LayoutParams(LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT);
		bannerView.setLayoutParams(params);
		v.addView(bannerView);
        //v.addView(bannerView, params);
        
		if (plugin.getWebView() != null) {
			//ViewGroup parentView = (ViewGroup)plugin.getWebView().getParent();//only for ~cordova4
			//ViewGroup parentView = (ViewGroup)plugin.getWebView().getRootView();//only for ~cordova4
			//ViewGroup parentView = (ViewGroup)plugin.getWebView().getView();//only for cordova5
//			ViewGroup parentView = (ViewGroup)getView(plugin.getWebView());
			ViewGroup parentView = (ViewGroup)getView(plugin.getWebView()).getParent();
			if (parentView != null) {
				if (position.equals("top-left") || position.equals("top-center")|| position.equals("top-right") || position.equals("left") || position.equals("center") || position.equals("right")) {	
					//parentView.addView(bannerView, 0);
					parentView.addView(v, 0);
				}
				else {		
					//parentView.addView(bannerView);
					parentView.addView(v);
				}
				//parentView.bringToFront();
			}
		}
		
		Log.d("AdmobPlugin", "position: " + position);
*/			
	}
	
	protected void removeBannerViewOverlap() {
		if (bannerView == null)
			return;
			
		ViewGroup parentView = (ViewGroup)bannerView.getParent();
		if (parentView != null) {
			parentView.removeView(bannerView);
			bannerView.destroy();
			bannerView = null;
		}		
	}	
}

