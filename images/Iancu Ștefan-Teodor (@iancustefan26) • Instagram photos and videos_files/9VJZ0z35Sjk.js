;/*FB_PKG_DELIM*/

__d("useViewabilityImpression",["useVisibilityObserver"],(function(a,b,c,d,e,f,g){"use strict";function a(a){a=a.onIntersection;return c("useVisibilityObserver")({onIntersection:a,options:{thresholdOverride:"MODERATE"}})}g["default"]=a}),98);
__d("IGDSStoryHighlightPanoFilled24Icon",["IGDSSVGIconBase.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsx(c("IGDSSVGIconBase.react"),babelHelpers["extends"]({},a,{viewBox:"0 0 24 24",children:h.jsx("path",{d:"M12 .5A11.5 11.5 0 1 0 23.5 12 11.513 11.513 0 0 0 12 .5Zm2.809 14.005c-.137.12-.275.238-.412.36l-.424.38c-1.053.941-1.428 1.273-1.633 1.406a.628.628 0 0 1-.68 0c-.215-.139-.666-.54-1.584-1.362l-.473-.424q-.198-.175-.396-.346C8.122 13.576 7 12.6 7 11.072a2.92 2.92 0 0 1 2.793-3.028A2.555 2.555 0 0 1 11.994 9.2c.002.002.003.004.008.001a2.544 2.544 0 0 1 2.205-1.157A2.92 2.92 0 0 1 17 11.072c0 1.532-1.114 2.498-2.191 3.433Z"})}))}a.displayName=a.name+" [from "+f.id+"]";b=h.memo(a);g["default"]=b}),98);
__d("IGDSStoryHighlightPanoOutline24Icon",["IGDSSVGIconBase.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsxs(c("IGDSSVGIconBase.react"),babelHelpers["extends"]({},a,{viewBox:"0 0 24 24",children:[h.jsx("path",{d:"M3.915 5.31q.337-.407.713-.779m-3.121 7.855Q1.5 12.194 1.5 12a10.505 10.505 0 0 1 .516-3.265m3.243 11.338a10.55 10.55 0 0 1-2.89-3.864m14.482 5.108a10.547 10.547 0 0 1-8.163.65M12.002 1.5a10.504 10.504 0 0 1 7.925 17.39",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"}),h.jsx("path",{d:"M12.002 9.201c-.005.003-.006.001-.008 0a2.555 2.555 0 0 0-2.201-1.157A2.92 2.92 0 0 0 7 11.072c0 1.528 1.122 2.504 2.207 3.447q.198.171.396.346l.473.424c.918.821 1.369 1.223 1.584 1.362a.628.628 0 0 0 .68 0c.205-.133.58-.465 1.633-1.406l.424-.38c.137-.122.275-.24.412-.36 1.077-.935 2.191-1.9 2.191-3.433a2.92 2.92 0 0 0-2.793-3.028 2.544 2.544 0 0 0-2.205 1.157Z",fillRule:"evenodd"})]}))}a.displayName=a.name+" [from "+f.id+"]";b=h.memo(a);g["default"]=b}),98);
__d("PolarisFullscreenShellWithLogo.react",["fbt","ix","IGCoreImage","IGDSIconButton.react","IGDSXPanoFilledIcon","PolarisFastLink.react","PolarisFullscreenShell.react","PolarisGenericStrings","XPolarisFeedControllerRouteBuilder","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k={buttons:{backgroundColor:"xjbqb8w",cursor:"x1ypdohk",marginTop:"xw7yly9",marginEnd:"xktsk01",marginBottom:"x1yztbdb",marginStart:"x1d52u69",position:"x10l6tqk",top:"x13vifvy",$$css:!0},close:{end:"xds687c",$$css:!0},home:{start:"x17qophe",$$css:!0},shell:{backgroundColor:"x5qyhuo",height:"x5yr21d",justifyContent:"xl56j7k",overflowX:"x6ikm8r",overflowY:"x10wlt62",position:"x1n2onr6",width:"xh8yej3",$$css:!0}};function a(a){var b=a.children;a=a.onClose;var e=c("XPolarisFeedControllerRouteBuilder").buildURL({});return j.jsxs(c("PolarisFullscreenShell.react"),{xstyle:k.shell,children:[b,j.jsx("div",{className:"xjbqb8w x1ypdohk xw7yly9 xktsk01 x1yztbdb x1d52u69 x10l6tqk x13vifvy x17qophe",children:j.jsx(c("PolarisFastLink.react"),{href:e,children:j.jsx(c("IGCoreImage"),{alt:h._("__JHASH__EubW9vzR0uu__JHASH__"),src:{light:i("163077")}})})}),j.jsx("div",{className:"xjbqb8w x1ypdohk xw7yly9 xktsk01 x1yztbdb x1d52u69 x10l6tqk x13vifvy xds687c",children:j.jsx(c("IGDSIconButton.react"),{onClick:a,children:j.jsx(c("IGDSXPanoFilledIcon"),{alt:d("PolarisGenericStrings").CLOSE_TEXT,color:"web-always-white"})})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("usePolarisStoryPreviewImpressionLogger",["PolarisInstagramReelSessionSummaryFalcoEvent","PolarisLoggerUtils","PolarisStoriesLoggingUtils","usePolarisSponsoredStoryLoggingParams","useViewabilityImpression"],(function(a,b,c,d,e,f,g){"use strict";var h="web_story_preview",i={previewedStoryIds:new Set([]),prevViewerSession:""};function a(a,b){b=c("usePolarisSponsoredStoryLoggingParams")(a,b);var e=b.followStatus,f=b.isReelSponsored,g=b.loggingData,j=b.ownerId,k=b.reelId,l=b.storyAdInjectionData,m=b.traySession,n=b.viewerSession,o=((b=l==null?void 0:l.seenStoryAdIds)!=null?b:[]).length+((b=l==null?void 0:l.injectedStoryAdIds)!=null?b:[]).length+((b=l==null?void 0:l.availableStoryAdIds)!=null?b:[]).length;return c("useViewabilityImpression")({onIntersection:function(b){b=b.isElementVisible;n!==i.prevViewerSession&&i.previewedStoryIds.clear();if(k==null||i.previewedStoryIds.has(k)||!b)return;c("PolarisInstagramReelSessionSummaryFalcoEvent").log(function(){var b;return{a_pk:(b=j)!=null?b:"",action:h,ad_delivered_count:o,ad_photos_consumed:0,ad_videos_consumed:0,delivery_class:f?"ad":"organic",follow_status:(b=e)!=null?b:"unknown",is_ad:f,live_videos_consumed:0,pause_duration:Number(d("PolarisLoggerUtils").msToLogSeconds(g.reelPauseTime)),photos_consumed:g.photoCounter,pigeon_reserved_keyword_module:g.containermodule||"",reel_id:k,reel_size:(a==null?void 0:a.itemIds)?a==null?void 0:a.itemIds.length:0,reel_type:d("PolarisStoriesLoggingUtils").getTypeForLogging(a==null?void 0:a.type),replay_videos_consumed:0,session_reel_counter:g.reelCounter,time_elapsed:Number(d("PolarisLoggerUtils").msToLogSeconds(g.reelTotalTime-g.reelPauseTime)),tray_position:g.containermodule==="reel_feed_timeline"?g.reelPositionInTray:-1,tray_session_id:m,videos_consumed:g.videoCounter,viewer_session_ad_media_consumed:0,viewer_session_ad_reels_consumed:0,viewer_session_id:n,viewer_session_media_consumed:g.mediaCounter,viewer_session_reels_consumed:g.reelCounter}});i.previewedStoryIds.add(k);i.prevViewerSession=n}})}g["default"]=a}),98);
__d("PolarisDesktopSponsoredStoriesFooter.react",["PolarisEventLoop","PolarisSponsoredStoriesFooterCTA.react","PolarisStoryShareButtonWithDialog.react","PolarisStoryViewerToast.react","polarisAdsSelectors","react","usePolarisStoriesFooter"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useEffect,j=b.useState;function a(a){var b=a.post;a=a.reel;var e=d("usePolarisStoriesFooter").usePolarisStoriesFooter(b,a),f=e.canReshare,g=e.handleShareStory,k=e.setToastMessage,l=e.storyOwnerId,m=e.toastMessage,n=j(!1),o=n[0],p=n[1];n=f?h.jsx(c("PolarisStoryShareButtonWithDialog.react"),{currentPost:b,handleShareStory:g,reelId:a.id,referrer:"DesktopStoriesFooter"}):null;f=d("polarisAdsSelectors").useStoryAdInfo(b.id,function(a){return a});g=f==null?void 0:(g=f.ctaItems)==null?void 0:(a=g.get(b.id))==null?void 0:a.ctaLinkText;a=f==null?void 0:(a=f.ctaItems)==null?void 0:(a=a.get(b.id))==null?void 0:a.ctaLinkUrl;a=e.ctaUrl==null||e.ctaUrl===""?a:e.ctaUrl;i(function(){p(!1);var a=c("PolarisEventLoop").setTimeout(function(){p(!0)},d("usePolarisStoriesFooter").DELAY_BEFORE_CTA_ACTIVE);return function(){return c("PolarisEventLoop").clearTimeout(a)}},[f]);e=g!=null&&a!=null?h.jsx(c("PolarisSponsoredStoriesFooterCTA.react"),{ctaUrl:a,isActive:o,text:g}):null;return b.isSponsored!==!0||l==null?null:h.jsx("div",{className:"x1qjc9v5 x155pf6g x1ey2m1c x9f619 x78zum5 xdt5ytf x2lah0s x1pg5gke x18dl8mb x13a6bvl xr1yuqi x11i5rnm xat24cr x1mh8g0r xexx8yu x1pi30zi x1l90r2v x1swvt13 x47corl x10l6tqk x17qophe x11njtxf xh8yej3 x14g40p9",children:h.jsxs("div",{className:"x6s0dn4 x9f619 x78zum5 xdt5ytf x2lah0s xl56j7k xr1yuqi x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x11njtxf",children:[a!=null&&e,h.jsx("div",{className:"xds687c x10l6tqk",children:n}),h.jsx(c("PolarisStoryViewerToast.react"),{message:m,onClose:function(){return k("")}})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisStoriesFooterHighlightButtons.react",["fbt","IGDSStoryHighlightPanoFilled24Icon","IGDSStoryHighlightPanoOutline24Icon","PolarisIGCoreButton","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.iconVariant;a=a.onClick;return i.jsx(c("PolarisIGCoreButton"),{borderless:!0,onClick:a,children:i.jsx("div",{className:"xrb244j x4r51d9 x67bb7w x10l6tqk",children:b==="FILLED"?i.jsx(c("IGDSStoryHighlightPanoFilled24Icon"),{alt:h._("__JHASH__PH6d14DytVf__JHASH__"),color:"web-always-white",size:20}):i.jsx(c("IGDSStoryHighlightPanoOutline24Icon"),{alt:h._("__JHASH__PH6d14DytVf__JHASH__"),color:"web-always-white",size:20})})})}a.displayName=a.name+" [from "+f.id+"]";g.PolarisAddStoryToHighlightButton=a}),98);
__d("PolarisStoryVideoLogger",["PolarisVideoLogger","polarisVideoEventLogger"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,c,e){var f=b.id,g=b.owner,h=b.postedAt;b=b.trackingToken;a=a.current;c=c.current;c.loggingSequenceNumber++;return babelHelpers["extends"]({analyticsContext:"StoriesPage",currentVideoTime:d("PolarisVideoLogger").normalizeVideoEvent(a==null?void 0:a.currentTime),dashInfo:null,duration:d("PolarisVideoLogger").normalizeVideoEvent(a==null?void 0:a.duration),id:f||"",ownerId:g==null?void 0:g.id,postedAt:h,sequenceNumber:c.loggingSequenceNumber,streamingFormat:"progressive",trackingToken:b,videoWidth:a==null?void 0:a.videoWidth},d("polarisVideoEventLogger").getAdLoggingParams(e))}g.getStoryVideoLoggingParams=a}),98);
__d("usePolarisDesktopStoriesGalleryIds",["PolarisReactRedux","polarisStorySelectors"],(function(a,b,c,d,e,f,g){"use strict";function h(a,b){var c=Math.abs(b-4);b=Math.abs(a.length-b-5);c=Array(c).fill(null);b=Array(b).fill(null);return[].concat(c,a,b)}function a(){var a=d("PolarisReactRedux").useSelector(d("polarisStorySelectors").getReelGalleryReelIds),b=d("PolarisReactRedux").useSelector(function(a){return a.stories.currentReelId});if(b==null)return[];b=a.indexOf(b);return h(a,b)}g.padReelIdsForLayout=h;g.useDesktopStoriesGalleryIds=a}),98);
__d("usePolarisDesktopStoriesGallerySize",["PolarisDesktopStoriesGalleryConstants","useWindowSize"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=c("useWindowSize")(),b=a.innerHeight,e=a.innerWidth;a=(a=d("PolarisDesktopStoriesGalleryConstants").ASPECT_RATIOS.find(function(a){return b/e>=a.height/a.width}))!=null?a:d("PolarisDesktopStoriesGalleryConstants").ASPECT_RATIOS[d("PolarisDesktopStoriesGalleryConstants").ASPECT_RATIOS.length-1];var f=Math.min(e,b*(a.width/a.height)),g=Math.min(b,e*(a.height/a.width));return{aspectRatio:a,maxGalleryHeight:g,maxGalleryWidth:f}}g["default"]=a}),98);
__d("usePolarisDesktopStoriesGallerySprings",["Locale","PolarisDesktopStoriesGalleryConstants","react","react-spring-wwwig","usePrevious"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useEffect;function i(a){return(a=d("PolarisDesktopStoriesGalleryConstants").GALLERY[a])!=null?a:d("PolarisDesktopStoriesGalleryConstants").STORY_GALLERY_ITEM_SCALES.preview}function j(a,b,c){b=a+b;return c?i(b):i(a)}function k(a,b,c,e,f,g){var h=a;e?h=a+c:h=a;c=d("PolarisDesktopStoriesGalleryConstants").GALLERY.slice(0,Math.max(0,h)).reduce(function(a,c){return a+b.viewer.width*c+b.gutter.width},b.gutter.width);h=b.viewer.width*d("PolarisDesktopStoriesGalleryConstants").STORY_GALLERY_ITEM_SCALES.preview;var i=2*(h+b.gutter.width);if(f===d("PolarisDesktopStoriesGalleryConstants").PREVIEW_COUNT_1_5_CROP){var j=.5*h;i=i+j+b.gutter.width}if(f===d("PolarisDesktopStoriesGalleryConstants").PREVIEW_COUNT_0_5_CROP){j=1.5*h;i=i+j+b.gutter.width*2}h=0;f===d("PolarisDesktopStoriesGalleryConstants").PREVIEW_COUNT_2_CROP&&(!e&&a===1&&(h=-2),!e&&a===d("PolarisDesktopStoriesGalleryConstants").GALLERY.length-2&&(h=2));j=c-i+h;g&&(j*=-1);return j}function l(a,b){if(a.length!==b.length)return null;var c=a.length-1;for(var d=a.length-1;d>=0;d--)if(a[d]!==null){c=d;break}d=b.indexOf(a[c]);if(d!==-1)return c-d;c=0;for(d=0;d<a.length;d++)if(a[d]!==null){c=d;break}d=b.indexOf(a[c]);return d!==-1?c-d:null}function m(a,b,d,e,f,g){e===void 0&&(e=2);f===void 0&&(f=!1);var h=c("Locale").isRTL();return function(c){c===void 0&&(c=0);var i=j(c,d,!0),l=j(c,d,!1),m=k(c,b,d,!0,e,h),n=k(c,b,d,!1,e,h),o=c===4;return{from:{scale:i,x:m},immediate:f,onRest:g!=null&&o?function(){return g(a[c])}:function(){},to:{scale:l,x:n}}}}function n(a,b){a=a*b;return{height:a,width:a*d("PolarisDesktopStoriesGalleryConstants").STORY_VIEWER_ASPECT_RATIO_W_H}}function a(a,b,e,f,g){var i=n(e,d("PolarisDesktopStoriesGalleryConstants").STORY_VIEWER_LARGE_HEIGHT_PCT),j={gutter:{height:0,width:0},viewer:i};e=d("PolarisDesktopStoriesGalleryConstants").VISIBLE_GALLERY.reduce(function(a,b){return a+i.width*b},0);var k=(f-e)/6;if(b.previewCount===d("PolarisDesktopStoriesGalleryConstants").PREVIEW_COUNT_1_5_CROP){var o=i.width*d("PolarisDesktopStoriesGalleryConstants").STORY_GALLERY_ITEM_SCALES.preview;e-=o;k=(f-e)/4}if(b.previewCount===d("PolarisDesktopStoriesGalleryConstants").PREVIEW_COUNT_0_5_CROP){o=i.width*d("PolarisDesktopStoriesGalleryConstants").STORY_GALLERY_ITEM_SCALES.preview*3;e-=o;k=(f-e)/2}j.gutter.width=k;o=d("react-spring-wwwig").useSprings(a.length,m(a,j,0,b.previewCount,!0,g));f=o[0];var p=o[1],q=c("usePrevious")(a),r=c("usePrevious")(j.viewer.height),s=c("usePrevious")(j.gutter.width);h(function(){var c=q!=null&&q.join()!==a.join(),d=r!=null&&r!==j.viewer.height||s!=null&&s!==j.gutter.width;if(c||d){c=l((c=q)!=null?c:[],a);d=c===null||d;c=(c=c)!=null?c:0;p(m(a,j,c,b.previewCount,d,g))}},[a,j,q,p,r,s,b.previewCount,g]);return[i.height,i.width,f]}g.calcX=k;g.calcIndexAdjustment=l;g.useDesktopStoriesGallerySprings=a}),98);
__d("PolarisDesktopStoriesFooterCTA.react",["cx","fbt","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");function a(a){a=a.onOpenCta;return j.jsx("div",{className:"_adip",onClick:a,role:"button",tabIndex:"0",children:j.jsx("div",{className:"_adiq",children:i._("__JHASH__6pmWQbO1xBr__JHASH__")})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisDesktopStoriesFooter.react",["cx","IGDSBox.react","PolarisDesktopStoriesFooterCTA.react","PolarisDirectStrings","PolarisLikeButton.react","PolarisReactRedux","PolarisStoriesFooterHighlightButtons.react","PolarisStoriesProvider.react","PolarisStoryReplyComposer.react","PolarisStoryShareButtonWithDialog.react","PolarisStoryViewerButton.react","PolarisStoryViewerToast.react","polarisPostSelectors","qex","react","usePolarisStoriesFooter","usePolarisStoryLikes"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useCallback;function a(a){var b=a.post;a=a.reel;var e=d("PolarisStoriesProvider.react").useStoriesContext(),f=e.updateStoriesContext;e=d("usePolarisStoriesFooter").usePolarisStoriesFooter(b,a);var g=e.canReply,h=e.canReshare,k=e.ctaUrl,l=e.handleShareStory,m=e.isViewingOwnStory,n=e.mediaId,o=e.onOpenCta,p=e.setToastMessage,q=e.storyOwnerId;e=e.toastMessage;l=h?i.jsx(c("PolarisStoryShareButtonWithDialog.react"),{currentPost:b,handleShareStory:l,reelId:a.id,referrer:"DesktopStoriesFooter"}):null;var r=j(function(){f({isHighlightsTrayActive:!0})},[f]),s=n.split("_"),t=s[0];s[1];s=d("PolarisReactRedux").useSelector(function(a){return d("polarisPostSelectors").doesViewerLikePost(a,t)});var u=c("usePolarisStoryLikes")(t);if(q==null)return null;n=i.jsx(c("PolarisStoryReplyComposer.react"),{handleStoryLike:u,likedByViewer:s,mediaId:n,onSendMessage:function(){p(d("PolarisDirectStrings").SENT_TOAST_TEXT)},post:b,reelId:a.id,shareButton:l,storyOwnerId:q,supportsReelReactions:!m});return b.isSponsored===!0?null:i.jsxs("div",{className:"_ac11",children:[i.jsxs("div",{className:"_ac12",children:[g?n:i.jsxs(c("IGDSBox.react"),{direction:"row",flex:"grow",justifyContent:"end",position:"relative",children:[!m&&i.jsx("div",{className:"_ac13",children:i.jsx(c("PolarisLikeButton.react"),{color:"ig-stroke-on-media",isLiked:s,onChange:u})}),h&&c("qex")._("953")===!0&&l]}),i.jsx(c("PolarisStoryViewerToast.react"),{message:e,onClose:function(){return p("")}})]}),i.jsx(c("PolarisStoryViewerButton.react"),{}),k!=null&&i.jsx(c("PolarisDesktopStoriesFooterCTA.react"),{onOpenCta:o}),m&&a.type!=="GraphHighlightReel"&&c("qex")._("129")===!0&&i.jsx(d("PolarisStoriesFooterHighlightButtons.react").PolarisAddStoryToHighlightButton,{iconVariant:((g=(q=b.highlightReelIds)==null?void 0:q.length)!=null?g:0)>0?"FILLED":"OUTLINE",onClick:r})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisDesktopStoriesHeaderV2.react",["cx","IGDSBox.react","PolarisClickEventLoggerProvider.react","PolarisCloseFriendsLabel.react","PolarisExclusiveStoryLabel.react","PolarisProfileClickEventLoggerProvider.react","PolarisSharedStoryHeaderInfo.react","PolarisSponsoredStoryContext.react","PolarisStoriesHeaderOwnerV2.react","PolarisStoriesProvider.react","PolarisStoryOptionsButton.react","PolarisStoryProgressBars.react","PolarisStoryVideoContext.react","PolarisStoryVideoLogger","emptyFunction","nullthrows","polarisAdsSelectors","polarisStorySelectors","polarisVideoEventLogger","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useContext,k=b.useEffect;function a(a){var b=a.currentReelItemIndex,e=a.itemCount,f=a.onModalOpen,g=a.playPercentage,h=a.post,l=a.postAuthor,m=a.reel,n=a.reelOwner;a=a.trayEntrypoint;var o=d("PolarisStoriesProvider.react").useStoriesContext(),p=o.isMuted,q=o.isPaused,r=o.needsTapToStart,s=o.postIDThatShouldShowSensitiveContentOverlay,t=o.shouldMuteAudio,u=o.shouldMuteAudioReason,v=o.updateStoriesContext;o=j(d("PolarisSponsoredStoryContext.react").PolarisSponsoredStoryContext);var w=o.onProfileClick;o=o.shouldLogProfileClicks;var x=h.audience==="MediaAudience.BESTIES",y=h.audience==="MediaAudience.FAN_CLUB";s=s==null&&!r;var z=d("polarisAdsSelectors").useStoryAdInfo(h.id,function(a){return a});r=d("PolarisStoryVideoContext.react").useStoryVideoContext();var A=r.loggerValuesRef,B=r.ref;k(function(){h.hasAudio===!0&&!p&&d("polarisVideoEventLogger").logAudioEnabled(babelHelpers["extends"]({},d("PolarisStoryVideoLogger").getStoryVideoLoggingParams(B,h,A,z),{loopsCount:0}))},[h]);r=function(){h.hasAudio===!0&&B.current!=null&&(p?d("polarisVideoEventLogger").logAudioEnabled(babelHelpers["extends"]({},d("PolarisStoryVideoLogger").getStoryVideoLoggingParams(B,h,A,z),{loopsCount:0})):d("polarisVideoEventLogger").logAudioDisabled(babelHelpers["extends"]({},d("PolarisStoryVideoLogger").getStoryVideoLoggingParams(B,h,A,z),{loopsCount:0}))),v({isMuted:!p})};return i.jsx(c("PolarisClickEventLoggerProvider.react"),{shouldLog:o===!0,children:i.jsx(c("PolarisProfileClickEventLoggerProvider.react"),{onProfileClick:o===!0?w:c("emptyFunction"),children:i.jsxs("header",{className:"_ac0k",children:[i.jsx(c("PolarisStoryProgressBars.react"),{count:e,currentIndex:b,percentage:g}),i.jsxs(c("IGDSBox.react"),{alignItems:"center",direction:"row",display:"flex",justifyContent:"between",position:"relative",children:[i.jsx("div",{className:"_ac0l",children:i.jsx(c("PolarisStoriesHeaderOwnerV2.react"),{appAttribution:h.storyAppAttribution,audience:h.audience,isAffiliate:h.isAffiliate===!0,isPaidPartnership:h.isPaidPartnership===!0,postAuthor:l,postedAt:c("nullthrows")(h.postedAt),postId:h.id,reel:m,reelOwner:n,resharedStoryMediaAuthor:h.resharedStoryMediaAuthor,sponsors:h.sponsors,title:(o=d("polarisStorySelectors").getReelTitle(m,n))!=null?o:"",trayEntrypoint:a})}),i.jsx("div",{className:"_ac0m",children:s&&i.jsxs(i.Fragment,{children:[x&&i.jsxs(c("IGDSBox.react"),{alignItems:"center",direction:"row",justifyContent:"center",position:"relative",children:[i.jsx(c("PolarisCloseFriendsLabel.react"),{onClick:function(){v({isCloseFriendsDialogActive:!0})},textSize:"small"}),i.jsx(c("IGDSBox.react"),{marginEnd:2,position:"relative"})]}),y&&i.jsxs(c("IGDSBox.react"),{alignItems:"center",direction:"row",justifyContent:"center",position:"relative",children:[i.jsx(c("PolarisExclusiveStoryLabel.react"),{onClick:function(){v({isExclusiveStoryDialogActive:!0})},textSize:"small"}),i.jsx(c("IGDSBox.react"),{marginEnd:2,position:"relative"})]}),i.jsx(c("PolarisSharedStoryHeaderInfo.react"),{hidePlayControl:!1,isMuted:p,isPaused:q,post:h,shouldMuteAudio:t,shouldMuteAudioReason:u,toggleStoryMuteState:r,toggleStoryPauseState:function(){v({isPaused:!q})}}),i.jsx(c("PolarisStoryOptionsButton.react"),{"data-testid":void 0,onClick:f,post:h,reel:m})]})})]})]})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisDesktopStoriesV2ReelStandaloneViewer.react",["IGDSBox.react","PolarisMonitorErrors","PolarisReactRedux","PolarisSizing","PolarisStoryViewer.react","err","polarisPostSelectors","polarisStorySelectors","react","usePolarisSelector","usePolarisStorySetup","useWindowSize"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(){var a=d("PolarisReactRedux").useSelector(function(a){return a.stories.currentReelId}),b=d("PolarisReactRedux").useSelector(d("polarisStorySelectors").getCurrentPostId),e=d("PolarisReactRedux").useSelector(function(a){return a.stories.currentReelItemIndex}),f=c("useWindowSize")();f=f.innerHeight;f=d("PolarisSizing").getViewerDimensionsFromHeightV2(f);var g=f.height;f=f.width;var i=c("usePolarisSelector")(function(b){return d("polarisStorySelectors").getReel(b,(b=a)!=null?b:"")}),j=c("usePolarisSelector")(function(a){return d("polarisPostSelectors").getPostById(a,(a=b)!=null?a:"")});if(i==null){var k=c("err")("Unexpected null story reel in desktop standalone story viewer");d("PolarisMonitorErrors").logError(k);throw c("err")}c("usePolarisStorySetup")(i,j);return a==null||b==null?null:h.jsx(c("IGDSBox.react"),{alignItems:"center",display:"flex",flex:"grow",justifyContent:"center",position:"relative",children:h.jsx("div",{style:{height:g,width:f},children:h.jsx(c("PolarisStoryViewer.react"),{postId:b,reelId:a,reelItemIndex:e,viewerHeight:g,viewerWidth:f})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisDesktopStoriesV2ReelPreviewOverlays.react",["cx","PolarisSensitivityOverlayIcon.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(){return i.jsx("div",{className:"_ac07"})}a.displayName=a.name+" [from "+f.id+"]";function b(){return i.jsx("div",{className:"_ac08","data-testid":void 0})}b.displayName=b.name+" [from "+f.id+"]";function e(){return i.jsx("div",{className:"_ac09","data-testid":void 0,children:i.jsx(c("PolarisSensitivityOverlayIcon.react"),{mediaOverlayIconGlyph:null})})}e.displayName=e.name+" [from "+f.id+"]";g.DesktopStoriesPreviewObscurityOverlay=a;g.DesktopStoriesPreviewSeenOverlay=b;g.DesktopStoriesPreviewSensitivityOverlay=e}),98);
__d("PolarisDesktopStoriesV2ReelPreview.react",["cx","fbt","ix","IGCoreImage","IGDSBox.react","IGDSText.react","PolarisAdsGatingHelpers","PolarisDesktopStoriesV2ReelPreviewOverlays.react","PolarisGroupProfileUtils","PolarisIGCorePressable","PolarisReactRedux","PolarisResponsiveImage.react","PolarisSponsoredLabel.react","PolarisTimestamp.react","PolarisUserAvatarWithStories.react","nullthrows","polarisAdsSelectors","polarisGetPostFromGraphMediaInterface","polarisPostSelectors","polarisStorySelectors","polarisUserSelectors","qex","react","useMergeRefs","usePolarisSelector","usePolarisSponsoredElTracker","usePolarisStoryPreviewImpressionLogger"],(function(a,b,c,d,e,f,g,h,i,j){"use strict";var k=d("react"),l={whiteText:{color:"xh93fs4",$$css:!0}},m="reel_feed_timeline";function n(a){var b=a.isSponsored,e=a.pictureUrl,f=a.post,g=a.postedAt,h=a.reelIsSeen,i=a.title;a=a.user;f=d("polarisAdsSelectors").useStoryAdInfo(f.id,function(a){return a==null?void 0:a.label});b=b&&f!=null;b=b?k.jsx(c("PolarisSponsoredLabel.react"),{"data-testid":void 0,label:c("nullthrows")(f),xstyle:l.whiteText}):k.jsx(c("PolarisTimestamp.react"),{isLong:!1,value:g});return k.jsxs(c("IGDSBox.react"),{alignItems:"center",bottom:!0,height:"100%",justifyContent:"center",left:!0,position:"absolute",right:!0,top:!0,children:[h?null:k.jsx(d("PolarisDesktopStoriesV2ReelPreviewOverlays.react").DesktopStoriesPreviewObscurityOverlay,{}),k.jsxs("div",{className:"_ac0h _advu",children:[k.jsx(c("PolarisUserAvatarWithStories.react"),{isClickable:!1,isLink:!1,profilePictureUrl:e,showLivePulse:!1,showLiveRing:!1,size:56,storyEntrypoint:m,username:a.username}),k.jsxs("div",{className:"_afgd",children:[k.jsx(c("IGDSBox.react"),{marginTop:4,position:"relative",children:k.jsx(c("IGDSText.react").BodyEmphasized,{color:"webAlwaysWhite",children:i})}),k.jsx(c("IGDSBox.react"),{marginTop:2,position:"relative",children:k.jsx(c("IGDSText.react").Body,{color:"webAlwaysWhite",children:b})})]})]})]})}n.displayName=n.name+" [from "+f.id+"]";function a(a){var b=a.onClick,e=a.reelId,f=d("PolarisReactRedux").useSelector(function(a){return d("polarisStorySelectors").getReel(a,e)}),g=d("PolarisReactRedux").useSelector(function(a){var b=f==null?void 0:f.itemIds;if(b!=null&&b.length>0&&f!=null){b=(b=d("polarisStorySelectors").getInitialReelIndex(a,f.id))!=null?b:0;b=c("nullthrows")(f==null?void 0:f.itemIds)[b];if(b)return d("polarisPostSelectors").getPostById(a,b)}return null});a=d("polarisAdsSelectors").useStoryAdInfo(g==null?void 0:g.id,function(a){return a});var h=d("polarisAdsSelectors").useStoryAdPosition(e,function(a){return a}),l=g!=null&&d("polarisGetPostFromGraphMediaInterface").getMediaOverlayMediaCoverInfoFromPost(g)!=null,m=d("polarisUserSelectors").useUser(f==null?void 0:f.userId),o=c("usePolarisSelector")(function(a){return(a=a.ads.storyAdInjectionData)==null?void 0:a.seenStoryAdIds}),p=d("PolarisReactRedux").useSelector(function(a){var b;b=g==null?void 0:(b=g.owner)==null?void 0:b.id;return b!=null?d("polarisUserSelectors").getUserById(a,b):null});m=d("PolarisGroupProfileUtils").getIsUserGroupProfile(m)?m:p;p=c("usePolarisStoryPreviewImpressionLogger")(f,g);a=c("usePolarisSponsoredElTracker")({mediaType:0,position:(h=h)!=null?h:-2,postId:e,trackingToken:(h=a==null?void 0:a.tracking_token)!=null?h:""});h=(f==null?void 0:f.isSponsored)===!0;p=c("useMergeRefs")(d("PolarisAdsGatingHelpers").hasPreviewImpressionLogging()?p:null,h?a:null);if(f!=null){h=f.isSponsored===!0;o=h?(a=o==null?void 0:o.includes(f.id))!=null?a:!1:d("polarisStorySelectors").isReelSeen(f);a=f.type==="GraphHighlightReel";return k.jsx("div",{className:"_ac0i","data-testid":void 0,ref:p,children:g==null||m==null?k.jsx(c("IGCoreImage"),{alt:i._("__JHASH__65y6vsno5QG__JHASH__"),src:{light:j("163057")}}):k.jsxs(c("PolarisIGCorePressable"),{className:"_ac0j",keyPress:["Enter"],onPress:function(){return b(e)},children:[o?k.jsx(d("PolarisDesktopStoriesV2ReelPreviewOverlays.react").DesktopStoriesPreviewSeenOverlay,{}):null,l?k.jsx(d("PolarisDesktopStoriesV2ReelPreviewOverlays.react").DesktopStoriesPreviewSensitivityOverlay,{}):null,g==null?null:k.jsx(c("PolarisResponsiveImage.react"),{decoding:"sync",src:g.src,srcSet:g.displayResources,style:o===!1&&c("qex")._("972")?{filter:"blur("+(c("qex")._("973")||0)+"px)",height:"100%",objectFit:"cover",transform:"translateZ(0)",width:"100%",willChange:"transform"}:{height:"100%",objectFit:"cover",width:"100%"}}),k.jsx(n,{isSponsored:h,pictureUrl:a?f.thumbnailUrl:m.profilePictureUrl,post:g,postedAt:c("nullthrows")(g.postedAt),reelIsSeen:o,title:a?f.title:m.username,user:c("nullthrows")(m)})]})})}return k.jsx(k.Fragment,{})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisDesktopStoriesViewerOrPreview.react",["PolarisDesktopStoriesV2ReelPreview.react","PolarisReactRedux","PolarisSponsoredStory.react","PolarisStoryActions","PolarisStoryViewer.react","nullthrows","polarisStorySelectors","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b,e=a.reelId,f=a.viewerHeight;a=a.viewerWidth;var g=d("PolarisReactRedux").useDispatch(),i=d("PolarisReactRedux").useSelector(function(a){return a.stories.currentReelId}),j=d("PolarisReactRedux").useSelector(d("polarisStorySelectors").getCurrentPostId),k=d("PolarisReactRedux").useSelector(function(a){return a.stories.currentReelItemIndex});b=(b=d("PolarisReactRedux").useSelector(function(a){return d("polarisStorySelectors").getReel(a,(a=e)!=null?a:"")}))==null?void 0:b.isSponsored;var l=e==null;if(l)return null;l=i===e;if(l){if(e==null||j==null)return null;return b===!0?h.jsx(c("PolarisSponsoredStory.react"),{postId:j,reelId:e,reelItemIndex:k,viewerHeight:f,viewerWidth:a},e):h.jsx(c("PolarisStoryViewer.react"),{postId:j,reelId:e,reelItemIndex:k,viewerHeight:f,viewerWidth:a})}return h.jsx(c("PolarisDesktopStoriesV2ReelPreview.react"),{onClick:function(){return g(d("PolarisStoryActions").navigateToClickedGalleryReel(c("nullthrows")(e)))},reelId:c("nullthrows")(e)})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisDesktopStoriesV2ReelsGallery.react",["cx","IGDSBox.react","Locale","PolarisDesktopStoriesViewerOrPreview.react","PolarisIGAnimate","nullthrows","polarisPostSelectors","polarisStorySelectors","react","react-spring-wwwig","stylex","usePolarisDesktopStoriesGalleryIds","usePolarisDesktopStoriesGallerySize","usePolarisDesktopStoriesGallerySprings","usePolarisSelector","usePolarisStorySetup"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j={animated:{position:"x10l6tqk",start:"x17qophe",$$css:!0},transformOriginLeft:{transformOrigin:"x19w6rv",$$css:!0},transformOriginRight:{transformOrigin:"xee5nap",$$css:!0}};function a(){var a=d("usePolarisDesktopStoriesGalleryIds").useDesktopStoriesGalleryIds(),b=c("usePolarisDesktopStoriesGallerySize")(),e=b.aspectRatio,f=b.maxGalleryHeight;b=b.maxGalleryWidth;e=d("usePolarisDesktopStoriesGallerySprings").useDesktopStoriesGallerySprings(a,e,f,b,function(){});var g=e[0],h=e[1];e=e[2];var k=c("usePolarisSelector")(function(a){return a.stories.currentReelId}),l=c("usePolarisSelector")(d("polarisStorySelectors").getCurrentPostId),m=c("nullthrows")(c("usePolarisSelector")(function(a){return d("polarisStorySelectors").getReel(a,(a=k)!=null?a:"")})),n=c("usePolarisSelector")(function(a){return d("polarisPostSelectors").getPostById(a,(a=l)!=null?a:"")});c("usePolarisStorySetup")(m,n);return i.jsx("div",{className:"_ac0n",style:{maxHeight:f,maxWidth:b},children:i.jsx(c("IGDSBox.react"),{alignItems:"center",direction:"row",display:"flex",height:"100%",position:"relative",children:e.map(function(b,e){var f=b.scale;b=b.x;return i.jsx(d("PolarisIGAnimate").Animated.div,{className:c("stylex")(j.animated,c("Locale").isRTL()?j.transformOriginRight:j.transformOriginLeft),style:{height:g,transform:d("react-spring-wwwig").interpolate([b,f],function(a,b){return"translate("+a+"px) scale("+b+")"}),width:h},children:i.jsx(c("PolarisDesktopStoriesViewerOrPreview.react"),{reelId:a[e],viewerHeight:g,viewerWidth:h})},e)})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisDesktopStoriesPage.react",["fbt","IGDSDialogBackwardsCompatibilityWrapper.react","IGDSSpinner.react","PolarisAsyncEntityQRModal","PolarisDesktopStoriesV2ReelStandaloneViewer.react","PolarisDesktopStoriesV2ReelsGallery.react","PolarisFullscreenShellWithLogo.react","PolarisPageMetadata.react","PolarisReactRedux","PolarisStoriesProvider.react","PolarisStoryActions","PolarisStoryVideoContext.react","polarisStorySelectors","react","usePolarisReelNotAvailable"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useCallback,k=b.useState,l="StoriesPage",m=h._("__JHASH__SkrEOF7TPUU__JHASH__");function a(a){var b=a.highlightReelId,e=a.initializing,f=a.needsTapToStart,g=a.showQRModal;a=a.viewerIsLoggedIn;g=k(g);var h=g[0],n=g[1];g=d("PolarisReactRedux").useSelector(function(a){return a.stories.isLoading});g=g===!0||e===!0;e=d("PolarisReactRedux").useSelector(function(a){return a.stories.currentTrayOrder});e=g!==!0&&e.length>1;var o=g!==!0&&e!==!0,p=d("PolarisReactRedux").useDispatch(),q=j(function(a){a===void 0&&(a="tap_exit");return p(d("PolarisStoryActions").closeReels(a))},[p]),r=d("PolarisReactRedux").useSelector(d("polarisStorySelectors").getCurrentReel),s=c("usePolarisReelNotAvailable")(g,r);return s?null:i.jsxs(c("PolarisFullscreenShellWithLogo.react"),{onClose:function(){q("tap_exit")},children:[i.jsx(c("PolarisPageMetadata.react"),{id:l,title:m}),g!==!0?i.jsxs(i.Fragment,{children:[i.jsx(d("PolarisStoriesProvider.react").StoriesContextProvider,{initialState:{needsTapToStart:f,viewerIsLoggedIn:a},children:i.jsxs(d("PolarisStoryVideoContext.react").StoryVideoContextProvider,{children:[e?i.jsx(c("PolarisDesktopStoriesV2ReelsGallery.react"),{}):null,o?i.jsx(c("PolarisDesktopStoriesV2ReelStandaloneViewer.react"),{}):null]})}),h&&i.jsx(c("IGDSDialogBackwardsCompatibilityWrapper.react"),{children:i.jsx(c("PolarisAsyncEntityQRModal"),{entityID:(s=b==null?void 0:b.toString())!=null?s:r==null?void 0:(g=r.itemIds)==null?void 0:g[0],onClose:function(){return n(!1)},source:"DIRECT_NAVIGATION"})})]}):i.jsx(c("IGDSSpinner.react"),{color:"light",position:"absolute",size:"medium"})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisDesktopStoriesV2ReelViewer.react",["cx","fbt","Locale","PolarisDesktopSponsoredStoriesFooter.react","PolarisDesktopStoriesFooter.react","PolarisDesktopStoriesHeaderV2.react","PolarisDesktopStoryEventZone.react","PolarisReactRedux","PolarisSponsoredStoryMedia.react","PolarisStoriesProvider.react","PolarisStoryActions","PolarisStoryMedia.react","PolarisStoryMediaPrefetcher.react","PolarisTrackingNodeProvider.react","nullthrows","polarisStorySelectors","polarisUserSelectors","react","usePolarisUpdateStorySeen"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");b=d("react");var k=b.useCallback,l=b.useState;function a(a){var b,e=a.innerRef,f=a.post,g=a.reel;a=a.reelItemIndex;var h=c("nullthrows")(d("PolarisReactRedux").useSelector(d("polarisStorySelectors").getTrayEntrypoint)),m=d("PolarisReactRedux").useSelector(function(a){return a.stories.currentTrayOrder});b=d("polarisUserSelectors").useUser((b=f.owner)==null?void 0:b.id);var n=d("polarisUserSelectors").useUser(g.userId),o=d("PolarisReactRedux").useSelector(function(a){return g.itemIds==null?[]:g.itemIds.map(function(b){return c("nullthrows")(a.posts.byId.get(b))}).filter(function(a){return a!=null})}),p=m[0];p=g.id===p&&a===0;m=a===o.length-1&&m[m.length-1]===g.id;var q=h==="story_ad_activity",r=d("PolarisReactRedux").useDispatch(),s=l(0),t=s[0],u=s[1];s=d("polarisStorySelectors").isReelItemExpired(f.expiringAt,g);var v=d("PolarisStoriesProvider.react").useStoriesContext(),w=v.isInitialLoad,x=v.needsTapToStart,y=v.postIDThatShouldShowSensitiveContentOverlay,z=v.updateStoriesContext;v=k(function(a){a===void 0&&(a="tap_exit"),r(d("PolarisStoryActions").closeReels(a))},[r]);var A=k(function(a){a===void 0&&(a="tap_forward"),u(0),r(d("PolarisStoryActions").nextReelItem(a))},[r]),B=k(function(a){a===void 0&&(a="swipe_forward"),u(0),r(d("PolarisStoryActions").nextReel(a))},[r]),C=c("usePolarisUpdateStorySeen")(),D=k(function(){u(0),r(d("PolarisStoryActions").prevReelItem("tap_back"))},[r]),E=k(function(){u(0),r(d("PolarisStoryActions").prevReel("swipe_back"))},[r]),F=k(function(){z({isInitialLoad:!1,isPaused:!1})},[z]),G=f.isSponsored===!0&&h!=="story_ad_activity"?c("PolarisSponsoredStoryMedia.react"):c("PolarisStoryMedia.react"),H=f.isSponsored===!0?c("PolarisDesktopSponsoredStoriesFooter.react"):c("PolarisDesktopStoriesFooter.react"),I=c("Locale").isRTL(),J=j.jsx("div",{className:(I?"_9zm0":"")+(I?"":" _9zm2")});I=j.jsx("div",{className:(I?"":"_9zm0")+(I?" _9zm2":"")});return j.jsx(c("PolarisTrackingNodeProvider.react"),{trackingNode:321,children:j.jsx("section",{className:"_ac0a","data-testid":void 0,ref:x?null:e,children:j.jsx(c("PolarisTrackingNodeProvider.react"),{trackingNode:15,children:j.jsxs("div",{className:"_ac0b",children:[!p&&!x&&j.jsx("button",{"aria-label":i._("__JHASH__wLBVljvWo_D__JHASH__"),className:"_ac0c",onClick:D,children:I}),j.jsx(G,{autoPlay:!0,currentReelItemIndex:a,eventZone:c("PolarisDesktopStoryEventZone.react"),isExpired:s,isFirstStory:p,isInitialLoad:w,onClose:v,onNext:A,onNextReel:B,onPause:function(){},onPlay:F,onPostSeen:C,onPrev:D,onPrevReel:E,onUpdatePlayPercentage:u,onUpdatePreplayPercentage:u,post:f,preload:"auto",reelId:g.id,trayEntrypoint:h},f.id),j.jsx(c("PolarisStoryMediaPrefetcher.react"),{prefetchContext:"stories"}),j.jsx(c("PolarisDesktopStoriesHeaderV2.react"),{currentReelItemIndex:a,itemCount:o.length,onModalOpen:function(){return z({isModalActive:!0})},playPercentage:t,post:f,postAuthor:c("nullthrows")(b),reel:g,reelOwner:c("nullthrows")(n),trayEntrypoint:h}),!x&&(!q||!m)&&j.jsx("button",{"aria-label":i._("__JHASH__EIdmgfpCblf__JHASH__"),className:"_ac0d",onClick:function(){return A("tap_forward")},children:J}),y==null&&!x&&!s&&j.jsx(H,{post:f,reel:g})]})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);