/*
 * Swiper 2.1 - Mobile Touch Slider
 * http://www.idangero.us/sliders/swiper/
 *
 * Copyright 2012-2013, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under GPL & MIT
 *
 * Updated on: August 22, 2013
*/

var Swiper=function(f,b){function g(a){return document.querySelectorAll?document.querySelectorAll(a):jQuery(a)}function h(){var c=y-l;b.freeMode&&(c=y-l);b.slidesPerView>a.slides.length&&(c=0);0>c&&(c=0);return c}function n(){function c(c){var d=new Image;d.onload=function(){a.imagesLoaded++;if(a.imagesLoaded==a.imagesToLoad.length&&(a.reInit(),b.onImagesReady))b.onImagesReady(a)};d.src=c}a.browser.ie10?(a.h.addEventListener(a.wrapper,a.touchEvents.touchStart,z,!1),a.h.addEventListener(document,a.touchEvents.touchMove,
A,!1),a.h.addEventListener(document,a.touchEvents.touchEnd,B,!1)):(a.support.touch&&(a.h.addEventListener(a.wrapper,"touchstart",z,!1),a.h.addEventListener(a.wrapper,"touchmove",A,!1),a.h.addEventListener(a.wrapper,"touchend",B,!1)),b.simulateTouch&&(a.h.addEventListener(a.wrapper,"mousedown",z,!1),a.h.addEventListener(document,"mousemove",A,!1),a.h.addEventListener(document,"mouseup",B,!1)));b.autoResize&&a.h.addEventListener(window,"resize",a.resizeFix,!1);t();a._wheelEvent=!1;if(b.mousewheelControl){void 0!==
document.onmousewheel&&(a._wheelEvent="mousewheel");try{WheelEvent("wheel"),a._wheelEvent="wheel"}catch(d){}a._wheelEvent||(a._wheelEvent="DOMMouseScroll");a._wheelEvent&&a.h.addEventListener(a.container,a._wheelEvent,N,!1)}b.keyboardControl&&a.h.addEventListener(document,"keydown",O,!1);if(b.updateOnImagesReady){document.querySelectorAll?a.imagesToLoad=a.container.querySelectorAll("img"):window.jQuery&&(a.imagesToLoad=g(a.container).find("img"));for(var e=0;e<a.imagesToLoad.length;e++)c(a.imagesToLoad[e].getAttribute("src"))}}
function t(){if(b.preventLinks){var c=[];document.querySelectorAll?c=a.container.querySelectorAll("a"):window.jQuery&&(c=g(a.container).find("a"));for(var d=0;d<c.length;d++)a.h.addEventListener(c[d],"click",P,!1)}if(b.releaseFormElements)for(c=document.querySelectorAll?a.container.querySelectorAll("input, textarea, select"):g(a.container).find("input, textarea, select"),d=0;d<c.length;d++)a.h.addEventListener(c[d],a.touchEvents.touchStart,Q,!0);if(b.onSlideClick)for(d=0;d<a.slides.length;d++)a.h.addEventListener(a.slides[d],
"click",R,!1);if(b.onSlideTouch)for(d=0;d<a.slides.length;d++)a.h.addEventListener(a.slides[d],a.touchEvents.touchStart,S,!1)}function v(){if(b.onSlideClick)for(var c=0;c<a.slides.length;c++)a.h.removeEventListener(a.slides[c],"click",R,!1);if(b.onSlideTouch)for(c=0;c<a.slides.length;c++)a.h.removeEventListener(a.slides[c],a.touchEvents.touchStart,S,!1);if(b.releaseFormElements)for(var d=document.querySelectorAll?a.container.querySelectorAll("input, textarea, select"):g(a.container).find("input, textarea, select"),
c=0;c<d.length;c++)a.h.removeEventListener(d[c],a.touchEvents.touchStart,Q,!0);if(b.preventLinks)for(d=[],document.querySelectorAll?d=a.container.querySelectorAll("a"):window.jQuery&&(d=g(a.container).find("a")),c=0;c<d.length;c++)a.h.removeEventListener(d[c],"click",P,!1)}function O(c){var b=c.keyCode||c.charCode;if(37==b||39==b||38==b||40==b){for(var e=!1,f=a.h.getOffset(a.container),h=a.h.windowScroll().left,g=a.h.windowScroll().top,m=a.h.windowWidth(),l=a.h.windowHeight(),f=[[f.left,f.top],[f.left+
a.width,f.top],[f.left,f.top+a.height],[f.left+a.width,f.top+a.height]],p=0;p<f.length;p++){var r=f[p];r[0]>=h&&(r[0]<=h+m&&r[1]>=g&&r[1]<=g+l)&&(e=!0)}if(!e)return}if(k){if(37==b||39==b)c.preventDefault?c.preventDefault():c.returnValue=!1;39==b&&a.swipeNext();37==b&&a.swipePrev()}else{if(38==b||40==b)c.preventDefault?c.preventDefault():c.returnValue=!1;40==b&&a.swipeNext();38==b&&a.swipePrev()}}function N(c){var d=a._wheelEvent,e;c.detail?e=-c.detail:"mousewheel"==d?e=c.wheelDelta:"DOMMouseScroll"==
d?e=-c.detail:"wheel"==d&&(e=Math.abs(c.deltaX)>Math.abs(c.deltaY)?-c.deltaX:-c.deltaY);b.freeMode?(k?a.getWrapperTranslate("x"):a.getWrapperTranslate("y"),k?(d=a.getWrapperTranslate("x")+e,e=a.getWrapperTranslate("y"),0<d&&(d=0),d<-h()&&(d=-h())):(d=a.getWrapperTranslate("x"),e=a.getWrapperTranslate("y")+e,0<e&&(e=0),e<-h()&&(e=-h())),a.setWrapperTransition(0),a.setWrapperTranslate(d,e,0),k?a.updateActiveSlide(d):a.updateActiveSlide(e)):0>e?a.swipeNext():a.swipePrev();b.autoplay&&a.stopAutoplay();
c.preventDefault?c.preventDefault():c.returnValue=!1;return!1}function T(a){for(var d=!1;!d;)-1<a.className.indexOf(b.slideClass)&&(d=a),a=a.parentElement;return d}function R(c){a.allowSlideClick&&(c.target?(a.clickedSlide=this,a.clickedSlideIndex=a.slides.indexOf(this)):(a.clickedSlide=T(c.srcElement),a.clickedSlideIndex=a.slides.indexOf(a.clickedSlide)),b.onSlideClick(a))}function S(c){a.clickedSlide=c.target?this:T(c.srcElement);a.clickedSlideIndex=a.slides.indexOf(a.clickedSlide);b.onSlideTouch(a)}
function P(b){if(!a.allowLinks)return b.preventDefault?b.preventDefault():b.returnValue=!1,!1}function Q(a){a.stopPropagation?a.stopPropagation():a.returnValue=!1;return!1}function z(c){b.preventLinks&&(a.allowLinks=!0);if(a.isTouched||b.onlyExternal)return!1;var d;if(d=b.noSwiping)if(d=c.target||c.srcElement){d=c.target||c.srcElement;var e=!1;do-1<d.className.indexOf(b.noSwipingClass)&&(e=!0),d=d.parentElement;while(!e&&d.parentElement&&-1==d.className.indexOf(b.wrapperClass));!e&&(-1<d.className.indexOf(b.wrapperClass)&&
-1<d.className.indexOf(b.noSwipingClass))&&(e=!0);d=e}if(d)return!1;G=!1;a.isTouched=!0;u="touchstart"==c.type;if(!u||1==c.targetTouches.length){b.loop&&a.fixLoop();a.callPlugins("onTouchStartBegin");u||(c.preventDefault?c.preventDefault():c.returnValue=!1);d=u?c.targetTouches[0].pageX:c.pageX||c.clientX;c=u?c.targetTouches[0].pageY:c.pageY||c.clientY;a.touches.startX=a.touches.currentX=d;a.touches.startY=a.touches.currentY=c;a.touches.start=a.touches.current=k?d:c;a.setWrapperTransition(0);a.positions.start=
a.positions.current=k?a.getWrapperTranslate("x"):a.getWrapperTranslate("y");k?a.setWrapperTranslate(a.positions.start,0,0):a.setWrapperTranslate(0,a.positions.start,0);a.times.start=(new Date).getTime();x=void 0;0<b.moveStartThreshold&&(M=!1);if(b.onTouchStart)b.onTouchStart(a);a.callPlugins("onTouchStartEnd")}}function A(c){if(a.isTouched&&!b.onlyExternal&&(!u||"mousemove"!=c.type)){var d=u?c.targetTouches[0].pageX:c.pageX||c.clientX,e=u?c.targetTouches[0].pageY:c.pageY||c.clientY;"undefined"===
typeof x&&k&&(x=!!(x||Math.abs(e-a.touches.startY)>Math.abs(d-a.touches.startX)));"undefined"!==typeof x||k||(x=!!(x||Math.abs(e-a.touches.startY)<Math.abs(d-a.touches.startX)));if(x)a.isTouched=!1;else if(c.assignedToSwiper)a.isTouched=!1;else if(c.assignedToSwiper=!0,a.isMoved=!0,b.preventLinks&&(a.allowLinks=!1),b.onSlideClick&&(a.allowSlideClick=!1),b.autoplay&&a.stopAutoplay(),!u||1==c.touches.length){a.callPlugins("onTouchMoveStart");c.preventDefault?c.preventDefault():c.returnValue=!1;a.touches.current=
k?d:e;a.positions.current=(a.touches.current-a.touches.start)*b.touchRatio+a.positions.start;if(0<a.positions.current&&b.onResistanceBefore)b.onResistanceBefore(a,a.positions.current);if(a.positions.current<-h()&&b.onResistanceAfter)b.onResistanceAfter(a,Math.abs(a.positions.current+h()));b.resistance&&"100%"!=b.resistance&&(0<a.positions.current&&(c=1-a.positions.current/l/2,a.positions.current=0.5>c?l/2:a.positions.current*c),a.positions.current<-h()&&(d=(a.touches.current-a.touches.start)*b.touchRatio+
(h()+a.positions.start),c=(l+d)/l,d=a.positions.current-d*(1-c)/2,e=-h()-l/2,a.positions.current=d<e||0>=c?e:d));b.resistance&&"100%"==b.resistance&&(0<a.positions.current&&(!b.freeMode||b.freeModeFluid)&&(a.positions.current=0),a.positions.current<-h()&&(!b.freeMode||b.freeModeFluid)&&(a.positions.current=-h()));if(b.followFinger){b.moveStartThreshold?Math.abs(a.touches.current-a.touches.start)>b.moveStartThreshold||M?(M=!0,k?a.setWrapperTranslate(a.positions.current,0,0):a.setWrapperTranslate(0,
a.positions.current,0)):a.positions.current=a.positions.start:k?a.setWrapperTranslate(a.positions.current,0,0):a.setWrapperTranslate(0,a.positions.current,0);(b.freeMode||b.watchActiveIndex)&&a.updateActiveSlide(a.positions.current);b.grabCursor&&(a.container.style.cursor="move",a.container.style.cursor="grabbing",a.container.style.cursor="-moz-grabbin",a.container.style.cursor="-webkit-grabbing");D||(D=a.touches.current);H||(H=(new Date).getTime());a.velocity=(a.touches.current-D)/((new Date).getTime()-
H)/2;2>Math.abs(a.touches.current-D)&&(a.velocity=0);D=a.touches.current;H=(new Date).getTime();a.callPlugins("onTouchMoveEnd");if(b.onTouchMove)b.onTouchMove(a);return!1}}}}function B(c){x&&a.swipeReset();if(!b.onlyExternal&&a.isTouched){a.isTouched=!1;b.grabCursor&&(a.container.style.cursor="move",a.container.style.cursor="grab",a.container.style.cursor="-moz-grab",a.container.style.cursor="-webkit-grab");a.positions.current||0===a.positions.current||(a.positions.current=a.positions.start);b.followFinger&&
(k?a.setWrapperTranslate(a.positions.current,0,0):a.setWrapperTranslate(0,a.positions.current,0));a.times.end=(new Date).getTime();a.touches.diff=a.touches.current-a.touches.start;a.touches.abs=Math.abs(a.touches.diff);a.positions.diff=a.positions.current-a.positions.start;a.positions.abs=Math.abs(a.positions.diff);var d=a.positions.diff,e=a.positions.abs;c=a.times.end-a.times.start;5>e&&(300>c&&!1==a.allowLinks)&&(b.freeMode||0==e||a.swipeReset(),b.preventLinks&&(a.allowLinks=!0),b.onSlideClick&&
(a.allowSlideClick=!0));setTimeout(function(){b.preventLinks&&(a.allowLinks=!0);b.onSlideClick&&(a.allowSlideClick=!0)},100);if(a.isMoved){a.isMoved=!1;var f=h();if(0<a.positions.current)a.swipeReset();else if(a.positions.current<-f)a.swipeReset();else if(b.freeMode){if(b.freeModeFluid){var e=1E3*b.momentumRatio,d=a.positions.current+a.velocity*e,g=!1,F,m=20*Math.abs(a.velocity)*b.momentumBounceRatio;d<-f&&(b.momentumBounce&&a.support.transitions?(d+f<-m&&(d=-f-m),F=-f,G=g=!0):d=-f);0<d&&(b.momentumBounce&&
a.support.transitions?(d>m&&(d=m),F=0,G=g=!0):d=0);0!=a.velocity&&(e=Math.abs((d-a.positions.current)/a.velocity));k?a.setWrapperTranslate(d,0,0):a.setWrapperTranslate(0,d,0);a.setWrapperTransition(e);b.momentumBounce&&g&&a.wrapperTransitionEnd(function(){if(G){if(b.onMomentumBounce)b.onMomentumBounce(a);k?a.setWrapperTranslate(F,0,0):a.setWrapperTranslate(0,F,0);a.setWrapperTransition(300)}});a.updateActiveSlide(d)}(!b.freeModeFluid||300<=c)&&a.updateActiveSlide(a.positions.current)}else{E=0>d?"toNext":
"toPrev";"toNext"==E&&300>=c&&(30>e||!b.shortSwipes?a.swipeReset():a.swipeNext(!0));"toPrev"==E&&300>=c&&(30>e||!b.shortSwipes?a.swipeReset():a.swipePrev(!0));f=0;if("auto"==b.slidesPerView){for(var d=Math.abs(k?a.getWrapperTranslate("x"):a.getWrapperTranslate("y")),q=g=0;q<a.slides.length;q++)if(m=k?a.slides[q].getWidth(!0):a.slides[q].getHeight(!0),g+=m,g>d){f=m;break}f>l&&(f=l)}else f=p*b.slidesPerView;"toNext"==E&&300<c&&(e>=0.5*f?a.swipeNext(!0):a.swipeReset());"toPrev"==E&&300<c&&(e>=0.5*f?
a.swipePrev(!0):a.swipeReset())}if(b.onTouchEnd)b.onTouchEnd(a);a.callPlugins("onTouchEnd")}else{a.isMoved=!1;if(b.onTouchEnd)b.onTouchEnd(a);a.callPlugins("onTouchEnd");a.swipeReset()}}}function I(c,d,e){function f(){g+=m;if(p="toNext"==l?g>c:g<c)k?a.setWrapperTranslate(Math.round(g),0):a.setWrapperTranslate(0,Math.round(g)),a._DOMAnimating=!0,window.setTimeout(function(){f()},1E3/60);else{if(b.onSlideChangeEnd)b.onSlideChangeEnd(a);k?a.setWrapperTranslate(c,0):a.setWrapperTranslate(0,c);a._DOMAnimating=
!1}}if(a.support.transitions||!b.DOMAnimation){k?a.setWrapperTranslate(c,0,0):a.setWrapperTranslate(0,c,0);var h="to"==d&&0<=e.speed?e.speed:b.speed;a.setWrapperTransition(h)}else{var g=k?a.getWrapperTranslate("x"):a.getWrapperTranslate("y"),h="to"==d&&0<=e.speed?e.speed:b.speed,m=Math.ceil((c-g)/h*(1E3/60)),l=g>c?"toNext":"toPrev",p="toNext"==l?g>c:g<c;if(a._DOMAnimating)return;f()}a.updateActiveSlide(c);if(b.onSlideNext&&"next"==d)b.onSlideNext(a,c);if(b.onSlidePrev&&"prev"==d)b.onSlidePrev(a,c);
if(b.onSlideReset&&"reset"==d)b.onSlideReset(a,c);("next"==d||"prev"==d||"to"==d&&!0==e.runCallbacks)&&W()}function W(){a.callPlugins("onSlideChangeStart");if(b.onSlideChangeStart)if(b.queueStartCallbacks&&a.support.transitions){if(a._queueStartCallbacks)return;a._queueStartCallbacks=!0;b.onSlideChangeStart(a);a.wrapperTransitionEnd(function(){a._queueStartCallbacks=!1})}else b.onSlideChangeStart(a);b.onSlideChangeEnd&&(a.support.transitions?b.queueEndCallbacks?a._queueEndCallbacks||(a._queueEndCallbacks=
!0,a.wrapperTransitionEnd(b.onSlideChangeEnd)):a.wrapperTransitionEnd(b.onSlideChangeEnd):b.DOMAnimation||setTimeout(function(){b.onSlideChangeEnd(a)},10))}function U(){for(var b=a.paginationButtons,d=0;d<b.length;d++)a.h.removeEventListener(b[d],"click",V,!1)}function V(b){var d;b=b.target||b.srcElement;for(var e=a.paginationButtons,f=0;f<e.length;f++)b===e[f]&&(d=f);a.swipeTo(d)}if(document.body.__defineGetter__&&HTMLElement){var s=HTMLElement.prototype;s.__defineGetter__&&s.__defineGetter__("outerHTML",
function(){return(new XMLSerializer).serializeToString(this)})}window.getComputedStyle||(window.getComputedStyle=function(a,b){this.el=a;this.getPropertyValue=function(b){var d=/(\-([a-z]){1})/g;"float"===b&&(b="styleFloat");d.test(b)&&(b=b.replace(d,function(a,b,c){return c.toUpperCase()}));return a.currentStyle[b]?a.currentStyle[b]:null};return this});Array.prototype.indexOf||(Array.prototype.indexOf=function(a,b){for(var e=b||0,f=this.length;e<f;e++)if(this[e]===a)return e;return-1});if((document.querySelectorAll||
window.jQuery)&&"undefined"!==typeof f&&(f.nodeType||0!==g(f).length)){var a=this;a.touches={start:0,startX:0,startY:0,current:0,currentX:0,currentY:0,diff:0,abs:0};a.positions={start:0,abs:0,diff:0,current:0};a.times={start:0,end:0};a.id=(new Date).getTime();a.container=f.nodeType?f:g(f)[0];a.isTouched=!1;a.isMoved=!1;a.activeIndex=0;a.activeLoaderIndex=0;a.activeLoopIndex=0;a.previousIndex=null;a.velocity=0;a.snapGrid=[];a.slidesGrid=[];a.imagesToLoad=[];a.imagesLoaded=0;a.wrapperLeft=0;a.wrapperRight=
0;a.wrapperTop=0;a.wrapperBottom=0;var J,p,y,E,x,l,s={mode:"horizontal",touchRatio:1,speed:300,freeMode:!1,freeModeFluid:!1,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,slidesPerView:1,slidesPerGroup:1,simulateTouch:!0,followFinger:!0,shortSwipes:!0,moveStartThreshold:!1,autoplay:!1,onlyExternal:!1,createPagination:!0,pagination:!1,paginationElement:"span",paginationClickable:!1,paginationAsRange:!0,resistance:!0,scrollContainer:!1,preventLinks:!0,noSwiping:!1,noSwipingClass:"swiper-no-swiping",
initialSlide:0,keyboardControl:!1,mousewheelControl:!1,mousewheelDebounce:600,useCSS3Transforms:!0,loop:!1,loopAdditionalSlides:0,calculateHeight:!1,updateOnImagesReady:!0,releaseFormElements:!0,watchActiveIndex:!1,visibilityFullFit:!1,offsetPxBefore:0,offsetPxAfter:0,offsetSlidesBefore:0,offsetSlidesAfter:0,centeredSlides:!1,queueStartCallbacks:!1,queueEndCallbacks:!1,autoResize:!0,resizeReInit:!1,DOMAnimation:!0,loader:{slides:[],slidesHTMLType:"inner",surroundGroups:1,logic:"reload",loadAllSlides:!1},
slideElement:"div",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",wrapperClass:"swiper-wrapper",paginationElementClass:"swiper-pagination-switch",paginationActiveClass:"swiper-active-switch",paginationVisibleClass:"swiper-visible-switch"};b=b||{};for(var q in s)if(q in b&&"object"===typeof b[q])for(var C in s[q])C in b[q]||(b[q][C]=s[q][C]);else q in b||(b[q]=s[q]);a.params=b;b.scrollContainer&&(b.freeMode=!0,b.freeModeFluid=!0);b.loop&&(b.resistance=
"100%");var k="horizontal"===b.mode;a.touchEvents={touchStart:a.support.touch||!b.simulateTouch?"touchstart":a.browser.ie10?"MSPointerDown":"mousedown",touchMove:a.support.touch||!b.simulateTouch?"touchmove":a.browser.ie10?"MSPointerMove":"mousemove",touchEnd:a.support.touch||!b.simulateTouch?"touchend":a.browser.ie10?"MSPointerUp":"mouseup"};for(q=a.container.childNodes.length-1;0<=q;q--)if(a.container.childNodes[q].className)for(C=a.container.childNodes[q].className.split(" "),s=0;s<C.length;s++)C[s]===
b.wrapperClass&&(J=a.container.childNodes[q]);a.wrapper=J;a._extendSwiperSlide=function(c){c.append=function(){b.loop?(c.insertAfter(a.slides.length-a.loopedSlides),a.removeLoopedSlides(),a.calcSlides(),a.createLoop()):a.wrapper.appendChild(c);a.reInit();return c};c.prepend=function(){b.loop?(a.wrapper.insertBefore(c,a.slides[a.loopedSlides]),a.removeLoopedSlides(),a.calcSlides(),a.createLoop()):a.wrapper.insertBefore(c,a.wrapper.firstChild);a.reInit();return c};c.insertAfter=function(d){if("undefined"===
typeof d)return!1;b.loop?(d=a.slides[d+1+a.loopedSlides],a.wrapper.insertBefore(c,d),a.removeLoopedSlides(),a.calcSlides(),a.createLoop()):(d=a.slides[d+1],a.wrapper.insertBefore(c,d));a.reInit();return c};c.clone=function(){return a._extendSwiperSlide(c.cloneNode(!0))};c.remove=function(){a.wrapper.removeChild(c);a.reInit()};c.html=function(a){if("undefined"===typeof a)return c.innerHTML;c.innerHTML=a;return c};c.index=function(){for(var b,e=a.slides.length-1;0<=e;e--)c===a.slides[e]&&(b=e);return b};
c.isActive=function(){return c.index()===a.activeIndex?!0:!1};c.swiperSlideDataStorage||(c.swiperSlideDataStorage={});c.getData=function(a){return c.swiperSlideDataStorage[a]};c.setData=function(a,b){c.swiperSlideDataStorage[a]=b;return c};c.data=function(a,b){return b?(c.setAttribute("data-"+a,b),c):c.getAttribute("data-"+a)};c.getWidth=function(b){return a.h.getWidth(c,b)};c.getHeight=function(b){return a.h.getHeight(c,b)};c.getOffset=function(){return a.h.getOffset(c)};return c};a.calcSlides=function(c){var d=
a.slides?a.slides.length:!1;a.slides=[];a.displaySlides=[];for(var e=0;e<a.wrapper.childNodes.length;e++)if(a.wrapper.childNodes[e].className)for(var f=a.wrapper.childNodes[e].className.split(" "),g=0;g<f.length;g++)f[g]===b.slideClass&&a.slides.push(a.wrapper.childNodes[e]);for(e=a.slides.length-1;0<=e;e--)a._extendSwiperSlide(a.slides[e]);d&&(d!==a.slides.length||c)&&(v(),t(),a.updateActiveSlide(),b.createPagination&&a.params.pagination&&a.createPagination(),a.callPlugins("numberOfSlidesChanged"))};
a.createSlide=function(c,d,e){d=d||a.params.slideClass;e=e||b.slideElement;e=document.createElement(e);e.innerHTML=c||"";e.className=d;return a._extendSwiperSlide(e)};a.appendSlide=function(b,d,e){if(b)return b.nodeType?a._extendSwiperSlide(b).append():a.createSlide(b,d,e).append()};a.prependSlide=function(b,d,e){if(b)return b.nodeType?a._extendSwiperSlide(b).prepend():a.createSlide(b,d,e).prepend()};a.insertSlideAfter=function(b,d,e,f){return"undefined"===typeof b?!1:d.nodeType?a._extendSwiperSlide(d).insertAfter(b):
a.createSlide(d,e,f).insertAfter(b)};a.removeSlide=function(c){if(a.slides[c]){if(b.loop){if(!a.slides[c+a.loopedSlides])return!1;a.slides[c+a.loopedSlides].remove();a.removeLoopedSlides();a.calcSlides();a.createLoop()}else a.slides[c].remove();return!0}return!1};a.removeLastSlide=function(){return 0<a.slides.length?(b.loop?(a.slides[a.slides.length-1-a.loopedSlides].remove(),a.removeLoopedSlides(),a.calcSlides(),a.createLoop()):a.slides[a.slides.length-1].remove(),!0):!1};a.removeAllSlides=function(){for(var b=
a.slides.length-1;0<=b;b--)a.slides[b].remove()};a.getSlide=function(b){return a.slides[b]};a.getLastSlide=function(){return a.slides[a.slides.length-1]};a.getFirstSlide=function(){return a.slides[0]};a.activeSlide=function(){return a.slides[a.activeIndex]};var K=[],L;for(L in a.plugins)b[L]&&(q=a.plugins[L](a,b[L]))&&K.push(q);a.callPlugins=function(a,b){b||(b={});for(var e=0;e<K.length;e++)if(a in K[e])K[e][a](b)};a.browser.ie10&&!b.onlyExternal&&(k?a.wrapper.classList.add("swiper-wp8-horizontal"):
a.wrapper.classList.add("swiper-wp8-vertical"));b.freeMode&&(a.container.className+=" swiper-free-mode");a.initialized=!1;a.init=function(c,d){var e=a.h.getWidth(a.container),f=a.h.getHeight(a.container);if(e!==a.width||f!==a.height||c){a.width=e;a.height=f;l=k?e:f;e=a.wrapper;c&&a.calcSlides(d);if("auto"===b.slidesPerView){var g=0,h=0;0<b.slidesOffset&&(e.style.paddingLeft="",e.style.paddingRight="",e.style.paddingTop="",e.style.paddingBottom="");e.style.width="";e.style.height="";0<b.offsetPxBefore&&
(k?a.wrapperLeft=b.offsetPxBefore:a.wrapperTop=b.offsetPxBefore);0<b.offsetPxAfter&&(k?a.wrapperRight=b.offsetPxAfter:a.wrapperBottom=b.offsetPxAfter);b.centeredSlides&&(k?(a.wrapperLeft=(l-this.slides[0].getWidth(!0))/2,a.wrapperRight=(l-a.slides[a.slides.length-1].getWidth(!0))/2):(a.wrapperTop=(l-a.slides[0].getHeight(!0))/2,a.wrapperBottom=(l-a.slides[a.slides.length-1].getHeight(!0))/2));k?(0<=a.wrapperLeft&&(e.style.paddingLeft=a.wrapperLeft+"px"),0<=a.wrapperRight&&(e.style.paddingRight=a.wrapperRight+
"px")):(0<=a.wrapperTop&&(e.style.paddingTop=a.wrapperTop+"px"),0<=a.wrapperBottom&&(e.style.paddingBottom=a.wrapperBottom+"px"));var m=0,q=0;a.snapGrid=[];a.slidesGrid=[];for(var n=0,r=0;r<a.slides.length;r++){var f=a.slides[r].getWidth(!0),s=a.slides[r].getHeight(!0);b.calculateHeight&&(n=Math.max(n,s));var t=k?f:s;if(b.centeredSlides){var u=r===a.slides.length-1?0:a.slides[r+1].getWidth(!0),w=r===a.slides.length-1?0:a.slides[r+1].getHeight(!0),u=k?u:w;if(t>l){for(w=0;w<=Math.floor(t/(l+a.wrapperLeft));w++)0===
w?a.snapGrid.push(m+a.wrapperLeft):a.snapGrid.push(m+a.wrapperLeft+l*w);a.slidesGrid.push(m+a.wrapperLeft)}else a.snapGrid.push(q),a.slidesGrid.push(q);q+=t/2+u/2}else{if(t>l)for(w=0;w<=Math.floor(t/l);w++)a.snapGrid.push(m+l*w);else a.snapGrid.push(m);a.slidesGrid.push(m)}m+=t;g+=f;h+=s}b.calculateHeight&&(a.height=n);k?(y=g+a.wrapperRight+a.wrapperLeft,e.style.width=g+"px",e.style.height=a.height+"px"):(y=h+a.wrapperTop+a.wrapperBottom,e.style.width=a.width+"px",e.style.height=h+"px")}else if(b.scrollContainer)e.style.width=
"",e.style.height="",n=a.slides[0].getWidth(!0),g=a.slides[0].getHeight(!0),y=k?n:g,e.style.width=n+"px",e.style.height=g+"px",p=k?n:g;else{if(b.calculateHeight){g=n=0;k||(a.container.style.height="");e.style.height="";for(r=0;r<a.slides.length;r++)a.slides[r].style.height="",n=Math.max(a.slides[r].getHeight(!0),n),k||(g+=a.slides[r].getHeight(!0));s=n;a.height=s;k?g=s:(l=s,a.container.style.height=l+"px")}else s=k?a.height:a.height/b.slidesPerView,g=k?a.height:a.slides.length*s;f=k?a.width/b.slidesPerView:
a.width;n=k?a.slides.length*f:a.width;p=k?f:s;0<b.offsetSlidesBefore&&(k?a.wrapperLeft=p*b.offsetSlidesBefore:a.wrapperTop=p*b.offsetSlidesBefore);0<b.offsetSlidesAfter&&(k?a.wrapperRight=p*b.offsetSlidesAfter:a.wrapperBottom=p*b.offsetSlidesAfter);0<b.offsetPxBefore&&(k?a.wrapperLeft=b.offsetPxBefore:a.wrapperTop=b.offsetPxBefore);0<b.offsetPxAfter&&(k?a.wrapperRight=b.offsetPxAfter:a.wrapperBottom=b.offsetPxAfter);b.centeredSlides&&(k?(a.wrapperLeft=(l-p)/2,a.wrapperRight=(l-p)/2):(a.wrapperTop=
(l-p)/2,a.wrapperBottom=(l-p)/2));k?(0<a.wrapperLeft&&(e.style.paddingLeft=a.wrapperLeft+"px"),0<a.wrapperRight&&(e.style.paddingRight=a.wrapperRight+"px")):(0<a.wrapperTop&&(e.style.paddingTop=a.wrapperTop+"px"),0<a.wrapperBottom&&(e.style.paddingBottom=a.wrapperBottom+"px"));y=k?n+a.wrapperRight+a.wrapperLeft:g+a.wrapperTop+a.wrapperBottom;e.style.width=n+"px";e.style.height=g+"px";m=0;a.snapGrid=[];a.slidesGrid=[];for(r=0;r<a.slides.length;r++)a.snapGrid.push(m),a.slidesGrid.push(m),m+=p,a.slides[r].style.width=
f+"px",a.slides[r].style.height=s+"px"}if(a.initialized){if(a.callPlugins("onInit"),b.onFirstInit)b.onInit(a)}else if(a.callPlugins("onFirstInit"),b.onFirstInit)b.onFirstInit(a);a.initialized=!0}};a.reInit=function(b){a.init(!0,b)};a.resizeFix=function(c){a.callPlugins("beforeResizeFix");a.init(b.resizeReInit||c);if(!b.freeMode)b.loop?a.swipeTo(a.activeLoopIndex,0,!1):a.swipeTo(a.activeIndex,0,!1);else if((k?a.getWrapperTranslate("x"):a.getWrapperTranslate("y"))<-h()){c=k?-h():0;var d=k?0:-h();a.setWrapperTransition(0);
a.setWrapperTranslate(c,d,0)}a.callPlugins("afterResizeFix")};a.destroy=function(c){a.browser.ie10?(a.h.removeEventListener(a.wrapper,a.touchEvents.touchStart,z,!1),a.h.removeEventListener(document,a.touchEvents.touchMove,A,!1),a.h.removeEventListener(document,a.touchEvents.touchEnd,B,!1)):(a.support.touch&&(a.h.removeEventListener(a.wrapper,"touchstart",z,!1),a.h.removeEventListener(a.wrapper,"touchmove",A,!1),a.h.removeEventListener(a.wrapper,"touchend",B,!1)),b.simulateTouch&&(a.h.removeEventListener(a.wrapper,
"mousedown",z,!1),a.h.removeEventListener(document,"mousemove",A,!1),a.h.removeEventListener(document,"mouseup",B,!1)));b.autoResize&&a.h.removeEventListener(window,"resize",a.resizeFix,!1);v();b.paginationClickable&&U();b.mousewheelControl&&a._wheelEvent&&a.h.removeEventListener(a.container,a._wheelEvent,N,!1);b.keyboardControl&&a.h.removeEventListener(document,"keydown",O,!1);b.autoplay&&a.stopAutoplay();a.callPlugins("onDestroy");a=null};b.grabCursor&&(a.container.style.cursor="move",a.container.style.cursor=
"grab",a.container.style.cursor="-moz-grab",a.container.style.cursor="-webkit-grab");a.allowSlideClick=!0;a.allowLinks=!0;var u=!1,M,G=!0,D,H;a.swipeNext=function(c){!c&&b.loop&&a.fixLoop();a.callPlugins("onSwipeNext");var d=c=k?a.getWrapperTranslate("x"):a.getWrapperTranslate("y");if("auto"==b.slidesPerView)for(var e=0;e<a.snapGrid.length;e++){if(-c>=a.snapGrid[e]&&-c<a.snapGrid[e+1]){d=-a.snapGrid[e+1];break}}else d=p*b.slidesPerGroup,d=-(Math.floor(Math.abs(c)/Math.floor(d))*d+d);d<-h()&&(d=-h());
if(d==c)return!1;I(d,"next");return!0};a.swipePrev=function(c){!c&&b.loop&&a.fixLoop();!c&&b.autoplay&&a.stopAutoplay();a.callPlugins("onSwipePrev");c=Math.ceil(k?a.getWrapperTranslate("x"):a.getWrapperTranslate("y"));var d;if("auto"==b.slidesPerView){d=0;for(var e=1;e<a.snapGrid.length;e++){if(-c==a.snapGrid[e]){d=-a.snapGrid[e-1];break}if(-c>a.snapGrid[e]&&-c<a.snapGrid[e+1]){d=-a.snapGrid[e];break}}}else d=p*b.slidesPerGroup,d*=-(Math.ceil(-c/d)-1);0<d&&(d=0);if(d==c)return!1;I(d,"prev");return!0};
a.swipeReset=function(){a.callPlugins("onSwipeReset");var c=k?a.getWrapperTranslate("x"):a.getWrapperTranslate("y"),d=p*b.slidesPerGroup;h();if("auto"==b.slidesPerView){for(var e=d=0;e<a.snapGrid.length;e++){if(-c===a.snapGrid[e])return;if(-c>=a.snapGrid[e]&&-c<a.snapGrid[e+1]){d=0<a.positions.diff?-a.snapGrid[e+1]:-a.snapGrid[e];break}}-c>=a.snapGrid[a.snapGrid.length-1]&&(d=-a.snapGrid[a.snapGrid.length-1]);c<=-h()&&(d=-h())}else d=0>c?Math.round(c/d)*d:0;b.scrollContainer&&(d=0>c?c:0);d<-h()&&
(d=-h());b.scrollContainer&&l>p&&(d=0);if(d==c)return!1;I(d,"reset");return!0};a.swipeTo=function(c,d,e){c=parseInt(c,10);a.callPlugins("onSwipeTo",{index:c,speed:d});b.loop&&(c+=a.loopedSlides);var f=k?a.getWrapperTranslate("x"):a.getWrapperTranslate("y");if(!(c>a.slides.length-1||0>c)){var g;g="auto"==b.slidesPerView?-a.slidesGrid[c]:-c*p;g<-h()&&(g=-h());if(g==f)return!1;I(g,"to",{index:c,speed:d,runCallbacks:!1===e?!1:!0});return!0}};a._queueStartCallbacks=!1;a._queueEndCallbacks=!1;a.updateActiveSlide=
function(c){if(a.initialized&&0!=a.slides.length){a.previousIndex=a.activeIndex;0<c&&(c=0);"undefined"==typeof c&&(c=k?a.getWrapperTranslate("x"):a.getWrapperTranslate("y"));if("auto"==b.slidesPerView){if(a.activeIndex=a.slidesGrid.indexOf(-c),0>a.activeIndex){for(var d=0;d<a.slidesGrid.length-1&&!(-c>a.slidesGrid[d]&&-c<a.slidesGrid[d+1]);d++);var e=Math.abs(a.slidesGrid[d]+c),f=Math.abs(a.slidesGrid[d+1]+c);a.activeIndex=e<=f?d:d+1}}else a.activeIndex=b.visibilityFullFit?Math.ceil(-c/p):Math.round(-c/
p);a.activeIndex==a.slides.length&&(a.activeIndex=a.slides.length-1);0>a.activeIndex&&(a.activeIndex=0);if(a.slides[a.activeIndex]){a.calcVisibleSlides(c);e=RegExp("\\s*"+b.slideActiveClass);f=RegExp("\\s*"+b.slideVisibleClass);for(d=0;d<a.slides.length;d++)a.slides[d].className=a.slides[d].className.replace(e,"").replace(f,""),0<=a.visibleSlides.indexOf(a.slides[d])&&(a.slides[d].className+=" "+b.slideVisibleClass);a.slides[a.activeIndex].className+=" "+b.slideActiveClass;b.loop?(d=a.loopedSlides,
a.activeLoopIndex=a.activeIndex-d,a.activeLoopIndex>=a.slides.length-2*d&&(a.activeLoopIndex=a.slides.length-2*d-a.activeLoopIndex),0>a.activeLoopIndex&&(a.activeLoopIndex=a.slides.length-2*d+a.activeLoopIndex)):a.activeLoopIndex=a.activeIndex;b.pagination&&a.updatePagination(c)}}};a.createPagination=function(c){b.paginationClickable&&a.paginationButtons&&U();var d="",e=a.slides.length;b.loop&&(e-=2*a.loopedSlides);for(var f=0;f<e;f++)d+="<"+b.paginationElement+' class="'+b.paginationElementClass+
'"></'+b.paginationElement+">";a.paginationContainer=b.pagination.nodeType?b.pagination:g(b.pagination)[0];a.paginationContainer.innerHTML=d;a.paginationButtons=[];document.querySelectorAll?a.paginationButtons=a.paginationContainer.querySelectorAll("."+b.paginationElementClass):window.jQuery&&(a.paginationButtons=g(a.paginationContainer).find("."+b.paginationElementClass));c||a.updatePagination();a.callPlugins("onCreatePagination");if(b.paginationClickable)for(c=a.paginationButtons,d=0;d<c.length;d++)a.h.addEventListener(c[d],
"click",V,!1)};a.updatePagination=function(c){if(b.pagination&&!(1>a.slides.length)){if(document.querySelectorAll)var d=a.paginationContainer.querySelectorAll("."+b.paginationActiveClass);else window.jQuery&&(d=g(a.paginationContainer).find("."+b.paginationActiveClass));if(d&&(d=a.paginationButtons,0!=d.length)){for(var e=0;e<d.length;e++)d[e].className=b.paginationElementClass;var f=b.loop?a.loopedSlides:0;if(b.paginationAsRange){a.visibleSlides||a.calcVisibleSlides(c);c=[];for(e=0;e<a.visibleSlides.length;e++){var h=
a.slides.indexOf(a.visibleSlides[e])-f;b.loop&&0>h&&(h=a.slides.length-2*a.loopedSlides+h);b.loop&&h>=a.slides.length-2*a.loopedSlides&&(h=a.slides.length-2*a.loopedSlides-h,h=Math.abs(h));c.push(h)}for(e=0;e<c.length;e++)d[c[e]]&&(d[c[e]].className+=" "+b.paginationVisibleClass);b.loop?d[a.activeLoopIndex].className+=" "+b.paginationActiveClass:d[a.activeIndex].className+=" "+b.paginationActiveClass}else b.loop?d[a.activeLoopIndex].className+=" "+b.paginationActiveClass+" "+b.paginationVisibleClass:
d[a.activeIndex].className+=" "+b.paginationActiveClass+" "+b.paginationVisibleClass}}};a.calcVisibleSlides=function(c){var d=[],e=0,f=0,g=0;k&&0<a.wrapperLeft&&(c+=a.wrapperLeft);!k&&0<a.wrapperTop&&(c+=a.wrapperTop);for(var h=0;h<a.slides.length;h++){var e=e+f,f="auto"==b.slidesPerView?k?a.h.getWidth(a.slides[h],!0):a.h.getHeight(a.slides[h],!0):p,g=e+f,m=!1;b.visibilityFullFit?(e>=-c&&g<=-c+l&&(m=!0),e<=-c&&g>=-c+l&&(m=!0)):(g>-c&&g<=-c+l&&(m=!0),e>=-c&&e<-c+l&&(m=!0),e<-c&&g>-c+l&&(m=!0));m&&
d.push(a.slides[h])}0==d.length&&(d=[a.slides[a.activeIndex]]);a.visibleSlides=d};a.autoPlayIntervalId=void 0;a.startAutoplay=function(){if("undefined"!==typeof a.autoPlayIntervalId)return!1;b.autoplay&&!b.loop&&(a.autoPlayIntervalId=setInterval(function(){a.swipeNext(!0)||a.swipeTo(0)},b.autoplay));b.autoplay&&b.loop&&(a.autoPlayIntervalId=setInterval(function(){a.swipeNext()},b.autoplay));a.callPlugins("onAutoplayStart")};a.stopAutoplay=function(){a.autoPlayIntervalId&&clearInterval(a.autoPlayIntervalId);
a.autoPlayIntervalId=void 0;a.callPlugins("onAutoplayStop")};a.loopCreated=!1;a.removeLoopedSlides=function(){if(a.loopCreated)for(var b=0;b<a.slides.length;b++)!0===a.slides[b].getData("looped")&&a.wrapper.removeChild(a.slides[b])};a.createLoop=function(){if(0!=a.slides.length){a.loopedSlides=b.slidesPerView+b.loopAdditionalSlides;for(var c="",d="",e=0;e<a.loopedSlides;e++)c+=a.slides[e].outerHTML;for(e=a.slides.length-a.loopedSlides;e<a.slides.length;e++)d+=a.slides[e].outerHTML;J.innerHTML=d+J.innerHTML+
c;a.loopCreated=!0;a.calcSlides();for(e=0;e<a.slides.length;e++)(e<a.loopedSlides||e>=a.slides.length-a.loopedSlides)&&a.slides[e].setData("looped",!0);a.callPlugins("onCreateLoop")}};a.fixLoop=function(){if(a.activeIndex<a.loopedSlides){var c=a.slides.length-3*a.loopedSlides+a.activeIndex;a.swipeTo(c,0,!1)}else a.activeIndex>a.slides.length-2*b.slidesPerView&&(c=-a.slides.length+a.activeIndex+a.loopedSlides,a.swipeTo(c,0,!1))};a.loadSlides=function(){var c="";a.activeLoaderIndex=0;for(var d=b.loader.slides,
e=b.loader.loadAllSlides?d.length:b.slidesPerView*(1+b.loader.surroundGroups),f=0;f<e;f++)c="outer"==b.loader.slidesHTMLType?c+d[f]:c+("<"+b.slideElement+' class="'+b.slideClass+'" data-swiperindex="'+f+'">'+d[f]+"</"+b.slideElement+">");a.wrapper.innerHTML=c;a.calcSlides(!0);b.loader.loadAllSlides||a.wrapperTransitionEnd(a.reloadSlides,!0)};a.reloadSlides=function(){var c=b.loader.slides,d=parseInt(a.activeSlide().data("swiperindex"),10);if(!(0>d||d>c.length-1)){a.activeLoaderIndex=d;var e=Math.max(0,
d-b.slidesPerView*b.loader.surroundGroups),f=Math.min(d+b.slidesPerView*(1+b.loader.surroundGroups)-1,c.length-1);0<d&&(d=-p*(d-e),k?a.setWrapperTranslate(d,0,0):a.setWrapperTranslate(0,d,0),a.setWrapperTransition(0));if("reload"===b.loader.logic){for(var g=a.wrapper.innerHTML="",d=e;d<=f;d++)g+="outer"==b.loader.slidesHTMLType?c[d]:"<"+b.slideElement+' class="'+b.slideClass+'" data-swiperindex="'+d+'">'+c[d]+"</"+b.slideElement+">";a.wrapper.innerHTML=g}else{for(var g=1E3,h=0,d=0;d<a.slides.length;d++){var l=
a.slides[d].data("swiperindex");l<e||l>f?a.wrapper.removeChild(a.slides[d]):(g=Math.min(l,g),h=Math.max(l,h))}for(d=e;d<=f;d++)d<g&&(e=document.createElement(b.slideElement),e.className=b.slideClass,e.setAttribute("data-swiperindex",d),e.innerHTML=c[d],a.wrapper.insertBefore(e,a.wrapper.firstChild)),d>h&&(e=document.createElement(b.slideElement),e.className=b.slideClass,e.setAttribute("data-swiperindex",d),e.innerHTML=c[d],a.wrapper.appendChild(e))}a.reInit(!0)}};a.calcSlides();0<b.loader.slides.length&&
0==a.slides.length&&a.loadSlides();b.loop&&a.createLoop();a.init();n();b.pagination&&b.createPagination&&a.createPagination(!0);b.loop||0<b.initialSlide?a.swipeTo(b.initialSlide,0,!1):a.updateActiveSlide(0);b.autoplay&&a.startAutoplay()}};
Swiper.prototype={plugins:{},wrapperTransitionEnd:function(f,b){function g(){f(h);h.params.queueEndCallbacks&&(h._queueEndCallbacks=!1);if(!b)for(var v=0;v<t.length;v++)h.h.removeEventListener(n,t[v],g,!1)}var h=this,n=h.wrapper,t=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"];if(f)for(var v=0;v<t.length;v++)h.h.addEventListener(n,t[v],g,!1)},getWrapperTranslate:function(f){var b=this.wrapper,g,h,n=window.WebKitCSSMatrix?new WebKitCSSMatrix(window.getComputedStyle(b,
null).webkitTransform):window.getComputedStyle(b,null).MozTransform||window.getComputedStyle(b,null).OTransform||window.getComputedStyle(b,null).MsTransform||window.getComputedStyle(b,null).msTransform||window.getComputedStyle(b,null).transform||window.getComputedStyle(b,null).getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,");g=n.toString().split(",");this.params.useCSS3Transforms?("x"==f&&(h=16==g.length?parseFloat(g[12]):window.WebKitCSSMatrix?n.m41:parseFloat(g[4])),"y"==
f&&(h=16==g.length?parseFloat(g[13]):window.WebKitCSSMatrix?n.m42:parseFloat(g[5]))):("x"==f&&(h=parseFloat(b.style.left,10)||0),"y"==f&&(h=parseFloat(b.style.top,10)||0));return h||0},setWrapperTranslate:function(f,b,g){var h=this.wrapper.style;f=f||0;b=b||0;g=g||0;this.params.useCSS3Transforms?this.support.transforms3d?h.webkitTransform=h.MsTransform=h.msTransform=h.MozTransform=h.OTransform=h.transform="translate3d("+f+"px, "+b+"px, "+g+"px)":(h.webkitTransform=h.MsTransform=h.msTransform=h.MozTransform=
h.OTransform=h.transform="translate("+f+"px, "+b+"px)",this.support.transforms||(h.left=f+"px",h.top=b+"px")):(h.left=f+"px",h.top=b+"px");this.callPlugins("onSetWrapperTransform",{x:f,y:b,z:g})},setWrapperTransition:function(f){var b=this.wrapper.style;b.webkitTransitionDuration=b.MsTransitionDuration=b.msTransitionDuration=b.MozTransitionDuration=b.OTransitionDuration=b.transitionDuration=f/1E3+"s";this.callPlugins("onSetWrapperTransition",{duration:f})},h:{getWidth:function(f,b){var g=window.getComputedStyle(f,
null).getPropertyValue("width"),h=parseFloat(g);if(isNaN(h)||0<g.indexOf("%"))h=f.offsetWidth-parseFloat(window.getComputedStyle(f,null).getPropertyValue("padding-left"))-parseFloat(window.getComputedStyle(f,null).getPropertyValue("padding-right"));b&&(h+=parseFloat(window.getComputedStyle(f,null).getPropertyValue("padding-left"))+parseFloat(window.getComputedStyle(f,null).getPropertyValue("padding-right")));return h},getHeight:function(f,b){if(b)return f.offsetHeight;var g=window.getComputedStyle(f,
null).getPropertyValue("height"),h=parseFloat(g);if(isNaN(h)||0<g.indexOf("%"))h=f.offsetHeight-parseFloat(window.getComputedStyle(f,null).getPropertyValue("padding-top"))-parseFloat(window.getComputedStyle(f,null).getPropertyValue("padding-bottom"));b&&(h+=parseFloat(window.getComputedStyle(f,null).getPropertyValue("padding-top"))+parseFloat(window.getComputedStyle(f,null).getPropertyValue("padding-bottom")));return h},getOffset:function(f){var b=f.getBoundingClientRect(),g=document.body,h=f.clientTop||
g.clientTop||0,g=f.clientLeft||g.clientLeft||0,n=window.pageYOffset||f.scrollTop;f=window.pageXOffset||f.scrollLeft;document.documentElement&&!window.pageYOffset&&(n=document.documentElement.scrollTop,f=document.documentElement.scrollLeft);return{top:b.top+n-h,left:b.left+f-g}},windowWidth:function(){if(window.innerWidth)return window.innerWidth;if(document.documentElement&&document.documentElement.clientWidth)return document.documentElement.clientWidth},windowHeight:function(){if(window.innerHeight)return window.innerHeight;
if(document.documentElement&&document.documentElement.clientHeight)return document.documentElement.clientHeight},windowScroll:function(){if("undefined"!=typeof pageYOffset)return{left:window.pageXOffset,top:window.pageYOffset};if(document.documentElement)return{left:document.documentElement.scrollLeft,top:document.documentElement.scrollTop}},addEventListener:function(f,b,g,h){f.addEventListener?f.addEventListener(b,g,h):f.attachEvent&&f.attachEvent("on"+b,g)},removeEventListener:function(f,b,g,h){f.removeEventListener?
f.removeEventListener(b,g,h):f.detachEvent&&f.detachEvent("on"+b,g)}},setTransform:function(f,b){var g=f.style;g.webkitTransform=g.MsTransform=g.msTransform=g.MozTransform=g.OTransform=g.transform=b},setTranslate:function(f,b){var g=f.style,h=b.x||0,n=b.y||0,t=b.z||0;g.webkitTransform=g.MsTransform=g.msTransform=g.MozTransform=g.OTransform=g.transform=this.support.transforms3d?"translate3d("+h+"px,"+n+"px,"+t+"px)":"translate("+h+"px,"+n+"px)";this.support.transforms||(g.left=h+"px",g.top=n+"px")},
setTransition:function(f,b){var g=f.style;g.webkitTransitionDuration=g.MsTransitionDuration=g.msTransitionDuration=g.MozTransitionDuration=g.OTransitionDuration=g.transitionDuration=b+"ms"},support:{touch:window.Modernizr&&!0===Modernizr.touch||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&!0===Modernizr.csstransforms3d||function(){var f=document.createElement("div");return"webkitPerspective"in f.style||"MozPerspective"in
f.style||"OPerspective"in f.style||"MsPerspective"in f.style||"perspective"in f.style}(),transforms:window.Modernizr&&!0===Modernizr.csstransforms||function(){var f=document.createElement("div").style;return"transform"in f||"WebkitTransform"in f||"MozTransform"in f||"msTransform"in f||"MsTransform"in f||"OTransform"in f}(),transitions:window.Modernizr&&!0===Modernizr.csstransitions||function(){var f=document.createElement("div").style;return"transition"in f||"WebkitTransition"in f||"MozTransition"in
f||"msTransition"in f||"MsTransition"in f||"OTransition"in f}()},browser:{ie8:function(){var f=-1;"Microsoft Internet Explorer"==navigator.appName&&null!=/MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent)&&(f=parseFloat(RegExp.$1));return-1!=f&&9>f}(),ie10:window.navigator.msPointerEnabled}};(window.jQuery||window.Zepto)&&function(f){f.fn.swiper=function(b){b=new Swiper(f(this)[0],b);f(this).data("swiper",b);return b}}(window.jQuery||window.Zepto);
"undefined"!==typeof module&&(module.exports=Swiper);
/*
 * Swiper Scrollbar 2.1
 * Plugin for Swiper 2.0+
 * http://www.idangero.us/sliders/swiper/
 *
 * Copyright 2012-2013, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under GPL & MIT
 *
 * Released on: June 9, 2013
*/


Swiper.prototype.plugins.scrollbar = function(swiper, params){
	
	var enabled = params && params.container;
	if(!enabled) return;
	
	/*=========================
	  Default Parameters
	  ===========================*/
	var defaults = {
		hide : true,
		draggable : true,
		snapOnRelease: false
	}
	params = params || {};	
	for (var prop in defaults) {
		if (! (prop in params)) {
			params[prop] = defaults[prop]	
		}
	}

	/*=========================
	  Container
	  ===========================*/
	if (!document.querySelectorAll) {
        if (!window.jQuery) return;
    }
	function $$(s) {
        if (document.querySelectorAll)
            return document.querySelectorAll(s)
        else
            return jQuery(s)
    }
    if(!(params.container.nodeType)){
        if ($$(params.container).length==0) return;
    }   
    var container = (params.container.nodeType) ? params.container : $$(params.container)[0];
	
	/*=========================
	  Default Vars
	  ===========================*/
	var isH = swiper.params.mode=='horizontal',
		track = container,
		trackWidth, trackHeight, divider, moveDivider, dragWidth, dragHeight;

	/*=========================
	  Define Drag
	  ===========================*/
	var drag = document.createElement('div')
	drag.className = 'swiper-scrollbar-drag';
	if (params.draggable) drag.className += ' swiper-scrollbar-cursor-drag';
	track.appendChild(drag);
	if (params.hide) track.style.opacity=0;

	var te = swiper.touchEvents
	/*=========================
	  Draggable
	  ===========================*/
	if (params.draggable) {
		var isTouched = false;
		function dragStart(e){
			isTouched = true;
			if(e.preventDefault) e.preventDefault();
            else e.returnValue = false;
			setDragPosition(e);
			clearTimeout(timeout);

			swiper.setTransition(track,0)
			track.style.opacity = 1;
			swiper.setWrapperTransition(100);
			swiper.setTransition(drag,100)
			
		}
		function dragMove(e){
			if(!isTouched) return;
			if(e.preventDefault) e.preventDefault();
            else e.returnValue = false;
			setDragPosition(e);
			swiper.setWrapperTransition(0);
			swiper.setTransition(track,0)
			swiper.setTransition(drag,0)
		}
		function dragEnd(e) {
			isTouched = false;
			if (params.hide) {
				clearTimeout(timeout)
				timeout = setTimeout(function(){
					track.style.opacity=0;
					swiper.setTransition(track,400)
				},1000)
				
			}
			if (params.snapOnRelease) {
				swiper.swipeReset()
			}
		}


		var lestenEl = swiper.support.touch ? track : document
		swiper.h.addEventListener(track, te.touchStart, dragStart, false)
		swiper.h.addEventListener(lestenEl, te.touchMove, dragMove, false)
		swiper.h.addEventListener(lestenEl, te.touchEnd, dragEnd, false)

		function setDragPosition(e){
			var x = y = 0;
			var position;
			if (isH) {
				x = (e.pageX || e.clientX) - swiper.h.getOffset(track).left - dragWidth/2
				if (x<0) x = 0;
				else if ( (x+dragWidth) > trackWidth) {
					x = trackWidth - dragWidth;
				}
			}
			else {
				
				y = (e.pageY||e.clientY) - swiper.h.getOffset(track).top - dragHeight/2;
				
				if (y<0) y = 0;
				else if ( (y+dragHeight) > trackHeight) {
					y = trackHeight - dragHeight;
				}
			}
			//Set Drag Position
			swiper.setTranslate(drag,{x:x, y:y})

			//Wrapper Offset
			var wrapX = -x/moveDivider;
			var wrapY = -y/moveDivider;
			
			swiper.setWrapperTranslate(wrapX ,wrapY)
			
		}
	}
	
	function setScrollBars() {
		drag.style.width = ''
		drag.style.height = ''
		if (isH) {
			trackWidth = swiper.h.getWidth(track, true);
			divider = swiper.width/swiper.h.getWidth(swiper.wrapper);
			moveDivider = divider*(trackWidth/swiper.width);
			dragWidth = trackWidth*divider;
			drag.style.width = dragWidth+'px';
		}
		else {
			trackHeight = swiper.h.getHeight(track, true);
			divider = swiper.height/swiper.h.getHeight(swiper.wrapper);
			moveDivider = divider*(trackHeight/swiper.height);
			dragHeight = trackHeight*divider;
			if (dragHeight>trackHeight) dragHeight = trackHeight
			drag.style.height = dragHeight+'px';
		}
	}
	var timeout;

	var hooks = {
		onFirstInit : function(args){
			setScrollBars()
		},
		onInit : function(args) {
			setScrollBars()
		},
		
		onTouchMoveEnd : function(args) {
			if (params.hide) {
				clearTimeout(timeout)
				track.style.opacity=1;
				swiper.setTransition(track,200)
			}
		},
		
		onTouchEnd : function(args) {
			if (params.hide) {
				clearTimeout(timeout)
				timeout = setTimeout(function(){
					track.style.opacity=0;
					swiper.setTransition(track,400)
				},1000)
			}
		},
		
		onSetWrapperTransform: function(pos){
			
			if (isH) {
				var newLeft = pos.x*moveDivider;
				var newWidth = dragWidth;
				if (newLeft > 0) {
					var diff = newLeft;
					newLeft = 0;
					newWidth = dragWidth-diff;
				}
				else if ( (-newLeft+dragWidth) > trackWidth) {
					newWidth = trackWidth + newLeft;
				}

				swiper.setTranslate(drag,{x:-newLeft})
				drag.style.width  = newWidth+'px';
			}
			else {
				var newTop = pos.y*moveDivider;
				var newHeight = dragHeight;
				if (newTop > 0) {
					var diff = newTop;
					newTop = 0;
					newHeight = dragHeight-diff;
				}
				else if ( (-newTop+dragHeight) > trackHeight) {
					newHeight = trackHeight + newTop;
				}
				swiper.setTranslate(drag,{y:-newTop})
				drag.style.height  = newHeight+'px';
			}
			if (swiper.params.freeMode && params.hide) {
				clearTimeout(timeout)
				track.style.opacity=1;
				timeout = setTimeout(function(){
					track.style.opacity=0;
					swiper.setTransition(track,400)
				},1000)
			}
			
		},
		onSetWrapperTransition: function(args){
			swiper.setTransition(drag,args.duration)
		},
		onDestroy: function(){
			var lestenEl = swiper.support.touch ? track : document
			swiper.h.removeEventListener(track, te.touchStart, dragStart, false)
			swiper.h.removeEventListener(lestenEl, te.touchMove, dragMove, false)
			swiper.h.removeEventListener(lestenEl, te.touchEnd, dragEnd, false)
		}
	}
	return hooks;
}
;
/*
*   SoundCloud Custom Player jQuery Plugin
*   Author: Matas Petrikas, matas@soundcloud.com
*   Copyright (c) 2009  SoundCloud Ltd.
*   Licensed under the MIT license:
*   http://www.opensource.org/licenses/mit-license.php
*
*   Usage:
*   <a href="http://soundcloud.com/matas/hobnotropic" class="sc-player">My new dub track</a>
*   The link will be automatically replaced by the HTML based player
*/

(function($) {
  // Convert milliseconds into Hours (h), Minutes (m), and Seconds (s)
  var timecode = function(ms) {
    var hms = function(ms) {
          return {
            h: Math.floor(ms/(60*60*1000)),
            m: Math.floor((ms/60000) % 60),
            s: Math.floor((ms/1000) % 60)
          };
        }(ms),
        tc = []; // Timecode array to be joined with '.'

    if (hms.h > 0) {
      tc.push(hms.h);
    }

    tc.push((hms.m < 10 && hms.h > 0 ? "0" + hms.m : hms.m));
    tc.push((hms.s < 10  ? "0" + hms.s : hms.s));

    return tc.join('.');
  };
  // shuffle the array
  var shuffle = function(arr) {
    arr.sort(function() { return 1 - Math.floor(Math.random() * 3); } );
    return arr;
  };

  var debug = true,
      useSandBox = false,
      $doc = $(document),
      log = function(args) {
        try {
          if(debug && window.console && window.console.log){
            window.console.log.apply(window.console, arguments);
          }
        } catch (e) {
          // no console available
        }
      },
      domain = useSandBox ? 'sandbox-soundcloud.com' : 'soundcloud.com',
      secureDocument = (document.location.protocol === 'https:'),
      // convert a SoundCloud resource URL to an API URL
      scApiUrl = function(url, apiKey) {
        var resolver = ( secureDocument || (/^https/i).test(url) ? 'https' : 'http') + '://api.' + domain + '/resolve?url=',
            params = 'format=json&consumer_key=' + apiKey +'&callback=?';

        // force the secure url in the secure environment
        if( secureDocument ) {
          url = url.replace(/^http:/, 'https:');
        }

        // check if it's already a resolved api url
        if ( (/api\./).test(url) ) {
          return url + '?' + params;
        } else {
          return resolver + url + '&' + params;
        }
      };

  // TODO Expose the audio engine, so it can be unit-tested
  var audioEngine = function() {
    var html5AudioAvailable = function() {
        var state = false;
        try{
          var a = new Audio();
          state = a.canPlayType && (/maybe|probably/).test(a.canPlayType('audio/mpeg'));
          // uncomment the following line, if you want to enable the html5 audio only on mobile devices
          // state = state && (/iPad|iphone|mobile|pre\//i).test(navigator.userAgent);
        }catch(e){
          // there's no audio support here sadly
        }

        return state;
    }(),
    callbacks = {
      onReady: function() {
        $doc.trigger('scPlayer:onAudioReady');
      },
      onPlay: function() {
        $doc.trigger('scPlayer:onMediaPlay');
      },
      onPause: function() {
        $doc.trigger('scPlayer:onMediaPause');
      },
      onEnd: function() {
        $doc.trigger('scPlayer:onMediaEnd');
      },
      onBuffer: function(percent) {
        $doc.trigger({type: 'scPlayer:onMediaBuffering', percent: percent});
      }
    };

    var html5Driver = function() {
      var player = new Audio(),
          onTimeUpdate = function(event){
            var obj = event.target,
                buffer = ((obj.buffered.length && obj.buffered.end(0)) / obj.duration) * 100;
            // ipad has no progress events implemented yet
            callbacks.onBuffer(buffer);
            // anounce if it's finished for the clients without 'ended' events implementation
            if (obj.currentTime === obj.duration) { callbacks.onEnd(); }
          },
          onProgress = function(event) {
            var obj = event.target,
                buffer = ((obj.buffered.length && obj.buffered.end(0)) / obj.duration) * 100;
            callbacks.onBuffer(buffer);
          };

      $('<div class="sc-player-engine-container"></div>').appendTo(document.body).append(player);

      // prepare the listeners
      player.addEventListener('play', callbacks.onPlay, false);
      player.addEventListener('pause', callbacks.onPause, false);
      // handled in the onTimeUpdate for now untill all the browsers support 'ended' event
      // player.addEventListener('ended', callbacks.onEnd, false);
      player.addEventListener('timeupdate', onTimeUpdate, false);
      player.addEventListener('progress', onProgress, false);


      return {
        load: function(track, apiKey) {
          player.pause();
          player.src = track.stream_url + (/\?/.test(track.stream_url) ? '&' : '?') + 'consumer_key=' + apiKey;
          player.load();
          player.play();
        },
        play: function() {
          player.play();
        },
        pause: function() {
          player.pause();
        },
        stop: function(){
          if (player.currentTime) {
            player.currentTime = 0;
            player.pause();
          }
        },
        seek: function(relative){
          player.currentTime = player.duration * relative;
          player.play();
        },
        getDuration: function() {
          return player.duration * 1000;
        },
        getPosition: function() {
          return player.currentTime * 1000;
        },
        setVolume: function(val) {
          player.volume = val / 100;
        }
      };

    };



    var flashDriver = function() {
      var engineId = 'scPlayerEngine',
          player,
          flashHtml = function(url) {
            var swf = (secureDocument ? 'https' : 'http') + '://player.' + domain +'/player.swf?url=' + url +'&amp;enable_api=true&amp;player_type=engine&amp;object_id=' + engineId;
            if ($.browser.msie) {
              return '<object height="100%" width="100%" id="' + engineId + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" data="' + swf + '">'+
                '<param name="movie" value="' + swf + '" />'+
                '<param name="allowscriptaccess" value="always" />'+
                '</object>';
            } else {
              return '<object height="100%" width="100%" id="' + engineId + '">'+
                '<embed allowscriptaccess="always" height="100%" width="100%" src="' + swf + '" type="application/x-shockwave-flash" name="' + engineId + '" />'+
                '</object>';
            }
          };


      // listen to audio engine events
      // when the loaded track is ready to play
      soundcloud.addEventListener('onPlayerReady', function(flashId, data) {
        player = soundcloud.getPlayer(engineId);
        callbacks.onReady();
      });

      // when the loaded track finished playing
      soundcloud.addEventListener('onMediaEnd', callbacks.onEnd);

      // when the loaded track is still buffering
      soundcloud.addEventListener('onMediaBuffering', function(flashId, data) {
        callbacks.onBuffer(data.percent);
      });

      // when the loaded track started to play
      soundcloud.addEventListener('onMediaPlay', callbacks.onPlay);

      // when the loaded track is was paused
      soundcloud.addEventListener('onMediaPause', callbacks.onPause);

      return {
        load: function(track) {
          var url = track.uri;
          if(player){
            player.api_load(url);
          }else{
            // create a container for the flash engine (IE needs this to operate properly)
            $('<div class="sc-player-engine-container"></div>').appendTo(document.body).html(flashHtml(url));
          }
        },
        play: function() {
          player && player.api_play();
        },
        pause: function() {
          player && player.api_pause();
        },
        stop: function(){
          player && player.api_stop();
        },
        seek: function(relative){
          player && player.api_seekTo((player.api_getTrackDuration() * relative));
        },
        getDuration: function() {
          return player && player.api_getTrackDuration && player.api_getTrackDuration() * 1000;
        },
        getPosition: function() {
          return player && player.api_getTrackPosition && player.api_getTrackPosition() * 1000;
        },
        setVolume: function(val) {
          if(player && player.api_setVolume){
            player.api_setVolume(val);
          }
        }

      };
    };

    return html5AudioAvailable? html5Driver() : flashDriver();

  }();



  var apiKey,
      didAutoPlay = false,
      players = [],
      updates = {},
      currentUrl,
      loadTracksData = function($player, links, key) {
        var index = 0,
            playerObj = {node: $player, tracks: []},
            loadUrl = function(link) {
              var apiUrl = scApiUrl(link.url, apiKey);
              $.getJSON(apiUrl, function(data) {
                // log('data loaded', link.url, data);
                index += 1;
                if(data.tracks){
                  // log('data.tracks', data.tracks);
                  playerObj.tracks = playerObj.tracks.concat(data.tracks);
                }else if(data.duration){
                  // a secret link fix, till the SC API returns permalink with secret on secret response
                  data.permalink_url = link.url;
                  // if track, add to player
                  playerObj.tracks.push(data);
                }else if(data.creator){
                  // it's a group!
                  links.push({url:data.uri + '/tracks'});
                }else if(data.username){
                  // if user, get his tracks or favorites
                  if(/favorites/.test(link.url)){
                    links.push({url:data.uri + '/favorites'});
                  }else{
                    links.push({url:data.uri + '/tracks'});
                  }
                }else if($.isArray(data)){
                  playerObj.tracks = playerObj.tracks.concat(data);
                }
                if(links[index]){
                  // if there are more track to load, get them from the api
                  loadUrl(links[index]);
                }else{
                  // if loading finishes, anounce it to the GUI
                  playerObj.node.trigger({type:'onTrackDataLoaded', playerObj: playerObj, url: apiUrl});
                }
             });
           };
        // update current API key
        apiKey = key;
        // update the players queue
        players.push(playerObj);
        // load first tracks
        loadUrl(links[index]);
      },
      artworkImage = function(track, usePlaceholder) {
        if(usePlaceholder){
          return '<div class="sc-loading-artwork">Loading Artwork</div>';
        }else if (track.artwork_url) {
          return '<img src="' + track.artwork_url.replace('-large', '-t300x300') + '"/>';
        }else{
          return '<div class="sc-no-artwork">No Artwork</div>';
        }
      },
      updateTrackInfo = function($player, track) {
        // update the current track info in the player
        // log('updateTrackInfo', track);
        $('.sc-info', $player).each(function(index) {
          $('h3', this).html('<a href="' + track.permalink_url +'">' + track.title + '</a>');
          $('h4', this).html('by <a href="' + track.user.permalink_url +'">' + track.user.username + '</a>');
          $('p', this).html(track.description || 'no Description');
        });
        // update the artwork
        $('.sc-artwork-list li', $player).each(function(index) {
          var $item = $(this),
              itemTrack = $item.data('sc-track');

          if (itemTrack === track) {
            // show track artwork
            $item
              .addClass('active')
              .find('.sc-loading-artwork')
                .each(function(index) {
                  // if the image isn't loaded yet, do it now
                  $(this).removeClass('sc-loading-artwork').html(artworkImage(track, false));
                });
          }else{
            // reset other artworks
            $item.removeClass('active');
          }
        });
        // update the track duration in the progress bar
        $('.sc-duration', $player).html(timecode(track.duration));
        // put the waveform into the progress bar
        $('.sc-waveform-container', $player).html('');

        $player.trigger('onPlayerTrackSwitch.scPlayer', [track]);
      },
      play = function(track) {
        var url = track.permalink_url;
        if(currentUrl === url){
          // log('will play');
          audioEngine.play();
        }else{
          currentUrl = url;
          // log('will load', url);
          audioEngine.load(track, apiKey);
        }
      },
      getPlayerData = function(node) {
        return players[$(node).data('sc-player').id];
      },
      updatePlayStatus = function(player, status) {
        if(status){
          // reset all other players playing status
          $('div.sc-player.playing').removeClass('playing');
        }
        $(player)
          .toggleClass('playing', status)
          .trigger((status ? 'onPlayerPlay' : 'onPlayerPause'));
      },
      onPlay = function(player, id) {
        var track = getPlayerData(player).tracks[id || 0];
        updateTrackInfo(player, track);
        // cache the references to most updated DOM nodes in the progress bar
        updates = {
          $buffer: $('.sc-buffer', player),
          $played: $('.sc-played', player),
          position:  $('.sc-position', player)[0]
        };
        updatePlayStatus(player, true);
        play(track);
      },
      onPause = function(player) {
        updatePlayStatus(player, false);
        audioEngine.pause();
      },
      onFinish = function() {
        var $player = updates.$played.closest('.sc-player'),
            $nextItem;
        // update the scrubber width
        updates.$played.css('width', '0%');
        // show the position in the track position counter
        updates.position.innerHTML = timecode(0);
        // reset the player state
        updatePlayStatus($player, false);
        // stop the audio
        audioEngine.stop();
        $player.trigger('onPlayerTrackFinish');
      },
      onSeek = function(player, relative) {
        audioEngine.seek(relative);
        $(player).trigger('onPlayerSeek');
      },
      onSkip = function(player) {
        var $player = $(player);
        // continue playing through all players
        log('track finished get the next one');
        $nextItem = $('.sc-trackslist li.active', $player).next('li');
        // try to find the next track in other player
        if(!$nextItem.length){
          $nextItem = $player.nextAll('div.sc-player:first').find('.sc-trackslist li.active');
        }
        $nextItem.click();
      },
      soundVolume = function() {
        var vol = 80,
            cooks = document.cookie.split(';'),
            volRx = new RegExp('scPlayer_volume=(\\d+)');
        for(var i in cooks){
          if(volRx.test(cooks[i])){
            vol = parseInt(cooks[i].match(volRx)[1], 10);
            break;
          }
        }
        return vol;
      }(),
      onVolume = function(volume) {
        var vol = Math.floor(volume);
        // save the volume in the cookie
        var date = new Date();
        date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
        soundVolume = vol;
        document.cookie = ['scPlayer_volume=', vol, '; expires=', date.toUTCString(), '; path="/"'].join('');
        // update the volume in the engine
        audioEngine.setVolume(soundVolume);
      },
      positionPoll;

    // listen to audio engine events
    $doc
      .bind('scPlayer:onAudioReady', function(event) {
        log('onPlayerReady: audio engine is ready');
        audioEngine.play();
        // set initial volume
        onVolume(soundVolume);
      })
      // when the loaded track started to play
      .bind('scPlayer:onMediaPlay', function(event) {
        clearInterval(positionPoll);
        positionPoll = setInterval(function() {
          var duration = audioEngine.getDuration(),
              position = audioEngine.getPosition(),
              relative = (position / duration);

          // update the scrubber width
          updates.$played.css('width', (100 * relative) + '%');
          // show the position in the track position counter
          updates.position.innerHTML = timecode(position);
          // announce the track position to the DOM
          $doc.trigger({
            type: 'onMediaTimeUpdate.scPlayer',
            duration: duration,
            position: position,
            relative: relative
          });
        }, 500);
      })
      // when the loaded track is was paused
      .bind('scPlayer:onMediaPause', function(event) {
        clearInterval(positionPoll);
        positionPoll = null;
      })
      // change the volume
      .bind('scPlayer:onVolumeChange', function(event) {
        onVolume(event.volume);
      })
      .bind('scPlayer:onMediaEnd', function(event) {
        onFinish();
      })
      .bind('scPlayer:onMediaBuffering', function(event) {
        updates.$buffer.css('width', event.percent + '%');
      });


  // Generate custom skinnable HTML/CSS/JavaScript based SoundCloud players from links to SoundCloud resources
  $.scPlayer = function(options, node) {
    var opts = $.extend({}, $.scPlayer.defaults, options),
        playerId = players.length,
        $source = node && $(node),
        sourceClasses = $source[0].className.replace('sc-player', ''),
        links = opts.links || $.map($('a', $source).add($source.filter('a')), function(val) { return {url: val.href, title: val.innerHTML}; }),
        $player = $('<div class="sc-player loading"></div>').data('sc-player', {id: playerId}),
        $artworks = $('<ol class="sc-artwork-list"></ol>').appendTo($player),
        $info = $('<div class="sc-info"><h3></h3><h4></h4><p></p><a href="#" class="sc-info-close">X</a></div>').appendTo($player),
        $controls = $('<div class="sc-controls"></div>').appendTo($player),
        $list = $('<ol class="sc-trackslist"></ol>').appendTo($player);

        // add the classes of the source node to the player itself
        // the players can be indvidually styled this way
        if(sourceClasses || opts.customClass){
          $player.addClass(sourceClasses).addClass(opts.customClass);
        }


        // adding controls to the player
        $player
          .find('.sc-controls')
            .append('<a href="#play" class="sc-play"><i class="fa fa-play"></i></div></a> <a href="#pause" class="sc-pause hidden"><i class="fa fa-pause"></i></a>')
          .end()
          .append('<a href="#info" class="sc-info-toggle">Info</a>')
          .append('<div class="sc-scrubber"></div>')
            .find('.sc-scrubber')
              .append('<div class="sc-volume-slider"><span class="sc-volume-status" style="width:' + soundVolume +'%"></span></div>')
              .append('<div class="sc-time-span"><div class="sc-waveform-container"></div><div class="sc-buffer"></div><div class="sc-played"></div></div>')
              .append('<div class="sc-time-indicators"><span class="sc-position"></span> | <span class="sc-duration"></span></div>');
              // .append('<div class="items-track></div>');

        // load and parse the track data from SoundCloud API
        loadTracksData($player, links, opts.apiKey);
        // init the player GUI, when the tracks data was laoded
        $player.bind('onTrackDataLoaded.scPlayer', function(event) {
          // log('onTrackDataLoaded.scPlayer', event.playerObj, playerId, event.target);
          var tracks = event.playerObj.tracks;
          if (opts.randomize) {
            tracks = shuffle(tracks);
          }
          // create the playlist
          $.each(tracks, function(index, track) {
            var active = index === 0;
            // create an item in the playlist
            $('<li><a href="' + track.permalink_url +'">' + track.title + '</a><span class="sc-track-duration">' + timecode(track.duration) + '</span></li>').data('sc-track', {id:index}).toggleClass('active', active).appendTo($list);
            // create an item in the artwork list
            $('<li></li>')
              .append(artworkImage(track, index >= opts.loadArtworks))
              .appendTo($artworks)
              .toggleClass('active', active)
              .data('sc-track', track);
          });
          // update the element before rendering it in the DOM
          $player.each(function() {
            if($.isFunction(opts.beforeRender)){
              opts.beforeRender.call(this, tracks);
            }
          });
          // set the first track's duration
          $('.sc-duration', $player)[0].innerHTML = timecode(tracks[0].duration);
          $('.sc-position', $player)[0].innerHTML = timecode(0);
          // set up the first track info
          updateTrackInfo($player, tracks[0]);

          // if continous play enabled always skip to the next track after one finishes
          if (opts.continuePlayback) {
            $player.bind('onPlayerTrackFinish', function(event) {
              onSkip($player);
            });
          }

          // announce the succesful initialization
          $player
            .removeClass('loading')
            .trigger('onPlayerInit');

          // if auto play is enabled and it's the first player, start playing
          if(opts.autoPlay && !didAutoPlay){
            onPlay($player);
            didAutoPlay = true;
          }
        });


    // replace the DOM source (if there's one)
    $source.each(function(index) {
      $(this).replaceWith($player);
    });

    return $player;
  };

  // stop all players, might be useful, before replacing the player dynamically
  $.scPlayer.stopAll = function() {
    $('.sc-player.playing a.sc-pause').click();
  };

  // destroy all the players and audio engine, usefull when reloading part of the page and audio has to stop
  $.scPlayer.destroy = function() {
    $('.sc-player, .sc-player-engine-container').remove();
  };

  // plugin wrapper
  $.fn.scPlayer = function(options) {
    // reset the auto play
    didAutoPlay = false;
    // create the players
    this.each(function() {
      $.scPlayer(options, this);
    });
    return this;
  };

  // default plugin options
  $.scPlayer.defaults = $.fn.scPlayer.defaults = {
    customClass: null,
    // do something with the dom object before you render it, add nodes, get more data from the services etc.
    beforeRender  :   function(tracksData) {
      var $player = $(this);
    },
    // initialization, when dom is ready
    onDomReady  : function() {
      $('a.sc-player, div.sc-player').scPlayer();
    },
    autoPlay: false,
    continuePlayback: true,
    randomize: false,
    loadArtworks: 5,
    // the default Api key should be replaced by your own one
    // get it here http://soundcloud.com/you/apps/new
    apiKey: '64c2c4bf8c0f1dbd4fff0a381e45e489'
  };


  // the GUI event bindings
  //--------------------------------------------------------

  // toggling play/pause
  $(document).on('click','a.sc-play, a.sc-pause', function(event) {
    var $list = $(this).closest('.sc-player').find('ol.sc-trackslist');
    // simulate the click in the tracklist
    $list.find('li.active').click();
    return false;
  });

  // displaying the info panel in the player
  $(document).on('click','a.sc-info-toggle, a.sc-info-close', function(event) {
    var $link = $(this);
    $link.closest('.sc-player')
      .find('.sc-info').toggleClass('active').end()
      .find('a.sc-info-toggle').toggleClass('active');
    return false;
  });

  // selecting tracks in the playlist
  $(document).on('click','.sc-trackslist li', function(event) {
    var $track = $(this),
        $player = $track.closest('.sc-player'),
        trackId = $track.data('sc-track').id,
        play = $player.is(':not(.playing)') || $track.is(':not(.active)');
    if (play) {
      onPlay($player, trackId);
    }else{
      onPause($player);
    }
    $track.addClass('active').siblings('li').removeClass('active');
    $('.artworks li', $player).each(function(index) {
      $(this).toggleClass('active', index === trackId);
    });
    return false;
  });

  var scrub = function(node, xPos) {
    var $scrubber = $(node).closest('.sc-time-span'),
        $buffer = $scrubber.find('.sc-buffer'),
        $available = $scrubber.find('.sc-waveform-container'),
        $player = $scrubber.closest('.sc-player'),
        relative = Math.min($buffer.width(), (xPos  - $available.offset().left)) / $available.width();
    onSeek($player, relative);
  };

  var onTouchMove = function(ev) {
    if (ev.targetTouches.length === 1) {
      scrub(ev.target, ev.targetTouches && ev.targetTouches.length && ev.targetTouches[0].clientX);
      ev.preventDefault();
    }
  };


  // seeking in the loaded track buffer
  $(document)
    .on('click','.sc-time-span', function(event) {
      scrub(this, event.pageX);
      return false;
    })
    .on('touchstart','.sc-time-span', function(event) {
      this.addEventListener('touchmove', onTouchMove, false);
      event.originalEvent.preventDefault();
    })
    .on('touchend','.sc-time-span', function(event) {
      this.removeEventListener('touchmove', onTouchMove, false);
      event.originalEvent.preventDefault();
    });

  // changing volume in the player
  var startVolumeTracking = function(node, startEvent) {
    var $node = $(node),
        originX = $node.offset().left,
        originWidth = $node.width(),
        getVolume = function(x) {
          return Math.floor(((x - originX)/originWidth)*100);
        },
        update = function(event) {
          $doc.trigger({type: 'scPlayer:onVolumeChange', volume: getVolume(event.pageX)});
        };
    $node.bind('mousemove.sc-player', update);
    update(startEvent);
  };

  var stopVolumeTracking = function(node, event) {
    $(node).unbind('mousemove.sc-player');
  };

  $(document)
    .on('mousedown','.sc-volume-slider', function(event) {
      startVolumeTracking(this, event);
    })
    .on('mouseup','.sc-volume-slider', function(event) {
      stopVolumeTracking(this, event);
    });

  $doc.bind('scPlayer:onVolumeChange', function(event) {
    $('span.sc-volume-status').css({width: event.volume + '%'});
  });
  // -------------------------------------------------------------------

  // the default Auto-Initialization
  $(function() {
    if($.isFunction($.scPlayer.defaults.onDomReady)){
      $.scPlayer.defaults.onDomReady();
    }
  });

})(jQuery);
/*
*   JavaScript interface for the SoundCloud Player widget
*   Author: Matas Petrikas, matas@soundcloud.com
*   Copyright (c) 2009  SoundCloud Ltd.
*   Licensed under the MIT license:
*   http://www.opensource.org/licenses/mit-license.php
*/

(function(){
  var isIE = (/msie/i).test(navigator.userAgent) && !(/opera/i).test(navigator.userAgent);
  
  var soundcloud = window.soundcloud = {
    version: "0.1",
    debug: false,
    _listeners: [],
    // re-dispatches widget events in the DOM, using JS library support, the events also should bubble up the DOM
    _redispatch: function(eventType, flashId, data) {
      var playerNode,
          lsnrs  = this._listeners[eventType] || [],
          // construct the custom eventType  e.g. 'soundcloud:onPlayerReady'
          customEventType = 'soundcloud:' + eventType;

      try{
        // find the flash player, might throw an exception
        playerNode = this.getPlayer(flashId);
      }catch(e){
        if(this.debug && window.console){
          console.error('unable to dispatch widget event ' + eventType + ' for the widget id ' + flashId, data, e);
        }
        return;
      }
      // re-dispatch SoundCloud events up in the DOM
      if(window.jQuery){
        // if jQuery is available, trigger the custom event
        jQuery(playerNode).trigger(customEventType, [data]);
      }else if(window.Prototype){
        // if Prototype.js is available, fire the custom event
        $(playerNode).fire(customEventType, data);
      }else{
        // TODO add more JS libraries that support custom DOM events
      }
      // if there are any listeners registered to this event, trigger them all
      for(var i = 0, l = lsnrs.length; i < l; i += 1) {
        lsnrs[i].apply(playerNode, [playerNode, data]);
      }
      // log the events in debug mode
      if(this.debug && window.console){
        console.log(customEventType, eventType, flashId, data);
      }

    },
    // you can add multiple listeners to a certain event
    // e.g. soundcloud.addEventListener('onPlayerReady', myFunctionOne);
    //      soundcloud.addEventListener('onPlayerReady', myFunctionTwo);
    addEventListener: function(eventType, callback) {
      if(!this._listeners[eventType]){
        this._listeners[eventType] = [];
      }
      this._listeners[eventType].push(callback);
    },
    // you can also remove the function listener if e.g you want to trigger it only once
    // soundcloud.removeEventListener('onMediaPlay', myFunctionOne);
    removeEventListener: function(eventType, callback) {
      var lsnrs = this._listeners[eventType] || [];
      for(var i = 0, l = lsnrs.length; i < l; i += 1) {
        if(lsnrs[i] === callback){
          lsnrs.splice(i, 1);
        }
      }
    },
    // get widget node based on its id (if object tag) or name (if embed tag)
    // if you're using SWFObject or other dynamic Flash generators, please make sure that you set the id parameter
    //  only if the DOM has an id/name it's possible to call player's methods.
    // Important!: because of the bug in Opera browser, the Flash can't get its own id
    // so the generator should set it additionally through flashvars parameter 'object_id'
    getPlayer: function(id){
      var flash;
      try{
        if(!id){
          throw "The SoundCloud Widget DOM object needs an id atribute, please refer to SoundCloud Widget API documentation.";
        }
        flash = isIE ? window[id] : document[id];
        if(flash){
          if(flash.api_getFlashId){
            return flash;
          }else{
            throw "The SoundCloud Widget External Interface is not accessible. Check that allowscriptaccess is set to 'always' in embed code";
          }
        }else{
          throw "The SoundCloud Widget with an id " + id + " couldn't be found";
        }
      }catch(e){
        if (console && console.error) {
         console.error(e);
        }
        throw e;
      }
    },
    // fired when widget has loaded its data and is ready to accept calls from outside
    // the widget will call these functions only if in it's flashvars there's a parameter enable_api=true
    // @flashId: the widget id, basically the Flash node should be accessible to JS with soundcloud.getPlayer(flashId)
    // @data: an object containing .mediaUri (eg. 'http://api.soundcloud.com/tracks/49931') .mediaId (e.g. '4532')
    // in buffering events data contains also .percent = (e.g. '99')
    onPlayerReady: function(flashId, data) {
      this._redispatch('onPlayerReady', flashId, data);
    },
    // fired when widget starts playing current track (fired only once per track)
    onMediaStart : function(flashId, data) {
      this._redispatch('onMediaStart', flashId, data);
    },
    // fired when the track/playlist has finished playing
    onMediaEnd : function(flashId, data) {
      this._redispatch('onMediaEnd', flashId, data);
    },
    // fired when widget starts playing current track (fired on every play, seek)
    onMediaPlay : function(flashId, data) {
      this._redispatch('onMediaPlay', flashId, data);
    },
    // fired when track was paused
    onMediaPause : function(flashId, data) {
      this._redispatch('onMediaPause', flashId, data);
    },
    // fired when the widget is still buffering, means you can't seek in the track fully yet
    onMediaBuffering : function(flashId, data) {
      this._redispatch('onMediaBuffering', flashId, data);
    },
    // fired when the user seeks in the track
    onMediaSeek : function(flashId, data) {
      this._redispatch('onMediaSeek', flashId, data);
    },
    // fired when the widget is done buffering and the whole track length is seekable
    onMediaDoneBuffering : function(flashId, data) {
      this._redispatch('onMediaDoneBuffering', flashId, data);
    },
    // fired when the widget can't get the requested data from the server (the resource is removed, hidden, etc.)
    onPlayerError : function(flashId, data) {
      this._redispatch('onPlayerError', flashId, data);
    }
  };
  
})();
/*!
 * enquire.js v2.1.0 - Awesome Media Queries in JavaScript
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */


;(function (name, context, factory) {
	var matchMedia = window.matchMedia;

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = factory(matchMedia);
	}
	else if (typeof define === 'function' && define.amd) {
		define(function() {
			return (context[name] = factory(matchMedia));
		});
	}
	else {
		context[name] = factory(matchMedia);
	}
}('enquire', this, function (matchMedia) {

	'use strict';

    /*jshint unused:false */
    /**
     * Helper function for iterating over a collection
     *
     * @param collection
     * @param fn
     */
    function each(collection, fn) {
        var i      = 0,
            length = collection.length,
            cont;

        for(i; i < length; i++) {
            cont = fn(collection[i], i);
            if(cont === false) {
                break; //allow early exit
            }
        }
    }

    /**
     * Helper function for determining whether target object is an array
     *
     * @param target the object under test
     * @return {Boolean} true if array, false otherwise
     */
    function isArray(target) {
        return Object.prototype.toString.apply(target) === '[object Array]';
    }

    /**
     * Helper function for determining whether target object is a function
     *
     * @param target the object under test
     * @return {Boolean} true if function, false otherwise
     */
    function isFunction(target) {
        return typeof target === 'function';
    }

    /**
     * Delegate to handle a media query being matched and unmatched.
     *
     * @param {object} options
     * @param {function} options.match callback for when the media query is matched
     * @param {function} [options.unmatch] callback for when the media query is unmatched
     * @param {function} [options.setup] one-time callback triggered the first time a query is matched
     * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
     * @constructor
     */
    function QueryHandler(options) {
        this.options = options;
        !options.deferSetup && this.setup();
    }
    QueryHandler.prototype = {

        /**
         * coordinates setup of the handler
         *
         * @function
         */
        setup : function() {
            if(this.options.setup) {
                this.options.setup();
            }
            this.initialised = true;
        },

        /**
         * coordinates setup and triggering of the handler
         *
         * @function
         */
        on : function() {
            !this.initialised && this.setup();
            this.options.match && this.options.match();
        },

        /**
         * coordinates the unmatch event for the handler
         *
         * @function
         */
        off : function() {
            this.options.unmatch && this.options.unmatch();
        },

        /**
         * called when a handler is to be destroyed.
         * delegates to the destroy or unmatch callbacks, depending on availability.
         *
         * @function
         */
        destroy : function() {
            this.options.destroy ? this.options.destroy() : this.off();
        },

        /**
         * determines equality by reference.
         * if object is supplied compare options, if function, compare match callback
         *
         * @function
         * @param {object || function} [target] the target for comparison
         */
        equals : function(target) {
            return this.options === target || this.options.match === target;
        }

    };
    /**
     * Represents a single media query, manages it's state and registered handlers for this query
     *
     * @constructor
     * @param {string} query the media query string
     * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design
     */
    function MediaQuery(query, isUnconditional) {
        this.query = query;
        this.isUnconditional = isUnconditional;
        this.handlers = [];
        this.mql = matchMedia(query);

        var self = this;
        this.listener = function(mql) {
            self.mql = mql;
            self.assess();
        };
        this.mql.addListener(this.listener);
    }
    MediaQuery.prototype = {

        /**
         * add a handler for this query, triggering if already active
         *
         * @param {object} handler
         * @param {function} handler.match callback for when query is activated
         * @param {function} [handler.unmatch] callback for when query is deactivated
         * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
         * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
         */
        addHandler : function(handler) {
            var qh = new QueryHandler(handler);
            this.handlers.push(qh);

            this.matches() && qh.on();
        },

        /**
         * removes the given handler from the collection, and calls it's destroy methods
         * 
         * @param {object || function} handler the handler to remove
         */
        removeHandler : function(handler) {
            var handlers = this.handlers;
            each(handlers, function(h, i) {
                if(h.equals(handler)) {
                    h.destroy();
                    return !handlers.splice(i,1); //remove from array and exit each early
                }
            });
        },

        /**
         * Determine whether the media query should be considered a match
         * 
         * @return {Boolean} true if media query can be considered a match, false otherwise
         */
        matches : function() {
            return this.mql.matches || this.isUnconditional;
        },

        /**
         * Clears all handlers and unbinds events
         */
        clear : function() {
            each(this.handlers, function(handler) {
                handler.destroy();
            });
            this.mql.removeListener(this.listener);
            this.handlers.length = 0; //clear array
        },

        /*
         * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
         */
        assess : function() {
            var action = this.matches() ? 'on' : 'off';

            each(this.handlers, function(handler) {
                handler[action]();
            });
        }
    };
    /**
     * Allows for registration of query handlers.
     * Manages the query handler's state and is responsible for wiring up browser events
     *
     * @constructor
     */
    function MediaQueryDispatch () {
        if(!matchMedia) {
            throw new Error('matchMedia not present, legacy browsers require a polyfill');
        }

        this.queries = {};
        this.browserIsIncapable = !matchMedia('only all').matches;
    }

    MediaQueryDispatch.prototype = {

        /**
         * Registers a handler for the given media query
         *
         * @param {string} q the media query
         * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
         * @param {function} options.match fired when query matched
         * @param {function} [options.unmatch] fired when a query is no longer matched
         * @param {function} [options.setup] fired when handler first triggered
         * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
         * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
         */
        register : function(q, options, shouldDegrade) {
            var queries         = this.queries,
                isUnconditional = shouldDegrade && this.browserIsIncapable;

            if(!queries[q]) {
                queries[q] = new MediaQuery(q, isUnconditional);
            }

            //normalise to object in an array
            if(isFunction(options)) {
                options = { match : options };
            }
            if(!isArray(options)) {
                options = [options];
            }
            each(options, function(handler) {
                queries[q].addHandler(handler);
            });

            return this;
        },

        /**
         * unregisters a query and all it's handlers, or a specific handler for a query
         *
         * @param {string} q the media query to target
         * @param {object || function} [handler] specific handler to unregister
         */
        unregister : function(q, handler) {
            var query = this.queries[q];

            if(query) {
                if(handler) {
                    query.removeHandler(handler);
                }
                else {
                    query.clear();
                    delete this.queries[q];
                }
            }

            return this;
        }
    };

	return new MediaQueryDispatch();

}));
;(function($){

	var ListDropDown=[];
	$.fn.dropDown = function() {

		this.each(function(i){
		
			if($(this).data('ready'))
				return;

			var  self	=	$(this)
				,label	=	self.find('.label')
				,list	=	self.find('.list')
				,html	=	list.html();
			
				self.data('ready',true).attr('data-dropdown',true);

				html='<div class="swiper-wrapper"><div class="swiper-slide">'+html+'</div></div><div class="dropDown-scrollbar scrl'+i+'"></div>';

				list.html(html);


				ListDropDown[i] = list.swiper({
					scrollContainer:true,
					mousewheelControl : true,
					autoResize:false,
					resizeReInit:false,
					mode:'vertical',
					onFirstInit:function(){
						list.addClass('ready');
					},
					onInit:function(){

					},
					//Enable Scrollbar
					scrollbar: {
						container :'.scrl'+i,
						hide: false,
						draggable: true
					}
				});



				label.on('click',function(e){
					
					label.toggleClass('active');
					list.stop().slideToggle(function(){

						if(list.is(':visible') && list.find('img').length)
							ListDropDown[i].reInit();
					});
					
				});

				self.on('mouseenter',function(){
					$(this).attr('no-close',true);
				}).on('mouseleave',function(){
					$(this).attr('no-close',false);
				});

			

		});

	};


	var closeDrop=function(e){

		$('[data-dropdown]').not('[no-close="true"]').find('.label.active').trigger('click');	

	}

	$('body').on('click',closeDrop);

})(jQuery);
var Carrousel={
	item:[],
	play:function(){

		$('.carrousel-dj:visible').each(function(i){

				var obj=this;
				$(obj).find('.carrousel-scrollbar').html('');
				Carrousel.item.push($(obj).swiper({
				   slidesPerView: 'auto',
				   //Enable Scrollbar
				   scrollbar: {
				     container: $(this).find('.carrousel-scrollbar')[0],
				     hide: false,
				     draggable: true,
				     snapOnRelease: true
				   }
				 })
				);

		});

	},
	reInit:function(esp){

		for(i in Carrousel.item){
			Carrousel.item[i].destroy(true);
		}
		Carrousel.item=[];

		Carrousel.play();

	}
}

$(document).on('ready',Carrousel.play);
var Slider={

  pages:null,

  init:function(){
    
    if(!$('.swiper-container').length)
        return;
      
    Slider.pages = $('.swiper-container').swiper({

      scrollContainer: true,
      scrollbar: {
        container: '.pagination-slider'
      }
      
    });

    Slider.resize();

    $(window).on('resize',Slider.resize);

  },

  resize:function(){

    var width=$('.cover-slider').width();
    $('.cover-slider').css('height',width);   
    $('.swiper-slide').css('width',width * $('.swiper-container .slider').length);   
    $('.swiper-slide .slider').css('width',width).css('height',width);   
    Slider.pages.reInit();


  }

}

$(document).on('ready',Slider.init);


function LoginTabs(){
  $(".login-tab").click(function(){
    $(".login-tab").addClass("selected");
    $(".signup-tab").removeClass("selected");
    $(".signup-form").fadeOut(400, function(){
      $(".login-form").fadeIn(200);      
    });    
  });
  $(".signup-tab").click(function(){
    $(".signup-tab").addClass("selected");
    $(".login-tab").removeClass("selected");
    $(".login-form").fadeOut(400,function(){
      $(".signup-form").fadeIn(200);
    });     
  });
}


function Menu2(){
  $(".button-menu-profile").click(function(){
    $(".menu-profile").slideToggle();
    $(".button-menu-profile i").toggleClass("fa-bars").toggleClass("button-equis");
    
  });  
}

function WorldMenu(){
  $('.world-navbar-menu').click(function  (){
    $('#world').slideToggle();
  });
}



function PlayVideo(){
  $('#videos .video-play').click(function(){
    $('#videos .video-image').toggleClass('hidden');
    $('#videos .video').toggleClass('hidden');
    $('#videos .video-play').toggleClass('hidden');

  });
}

function PlayerTab(){

  $(".title-tracks").on('click',function(){

    $(this).addClass("selected");
    $(".title-mixes").removeClass("selected");

    $(".mixes").fadeOut(function(){

      $(".tracks").fadeIn(function(){

        Carrousel.reInit(1);
      });
        Carrousel.reInit(1);
      
    });


  });

  $(".title-mixes").on('click',function(){

    $(this).addClass("selected");
    $(".title-tracks").removeClass("selected");
    $(".tracks").fadeOut(function(){

      $(".mixes").fadeIn(function(){
        
        Carrousel.reInit(0);
      });
      Carrousel.reInit(0);

    });
    

  });

}

function Search(){
  $(".button-search").click(function(){
    $('#container-web').css('display','none');

    $("#search").fadeIn();
    $(window).on('keyup',salir);
  });

  $(".close-search").click(function(){
    $('#container-web').css('display','block');
    $("#search").fadeOut();
    $(window).off('keyup',salir);

  });
}

function salir(e){
    if (e.keyCode == 27)
     $(".close-search").trigger('click');
}
// $(document).keyup(function(e) {
// if (e.keyCode == 27) { 
//    alert('Esc key pressed!');
// }
// });


// Binds:


// funcion


//Efecto Menu
var Menu={
  show:function(e){
    e.preventDefault();

    $('#container-web').css('left','-400px');

    $('#notifications').css('display','block');

    //Funcion cerrar menu al darle click/touch en "Container"
    var heightw= $('#notifications').height();
    if(heightw<$(window).height())
      heightw=$(window).height();

    setTimeout(function(){
      $('body').append($('<div class="mask"></div>')).find('.mask').css('height',$(document).height());
      $('.mask').click(Menu.ocult);
      $('#container-web').css('max-height',heightw).css('overflow','hidden');
    },200);
  },

  ocult:function(e){
    e.preventDefault();

    $('.mask').off('click',Menu.ocult).remove();

    $('#container-web').css({
      'left':'0',
      'overflow':'',
      'max-height':''

    });

    setTimeout(function(){
      $('#notifications').hide();
    },500);
  }
}


$(document).ready(function(){
   LoginTabs()
   Menu2();
   // Notification();
   PlayerTab();
   Search();
   WorldMenu();
   PlayVideo();
   $('.button-notification').click(Menu.show);
   $('.go-to-web').click(Menu.ocult);
   $('.drop-down').dropDown();
 });





var MenuMobile={
	menu:$('.menu-mobile'),
	open:function(){

		MenuMobile.menu
			.css('min-height',$(window).height())
			.fadeIn(500,function(){
				$('#container-web').hide();
			});

	},
	close:function(){
		$('#container-web').show();
		MenuMobile.menu.fadeOut(function(){
			$(this).removeAttr('style');
		});
	}
}

function openActivity(){

	$('html,body').animate({scrollTop:0},500,function(){
		MenuMobile.menu.css('left','-400px').fadeOut('slow');
		setTimeout(MenuMobile.close,500);
		$('.button-notification').trigger('click');
		
	});
}

$(document).on('ready',function(){
	$('.button-menu').on('click',MenuMobile.open);
	$('.menu-mobile .close').on('click',MenuMobile.close);
});














