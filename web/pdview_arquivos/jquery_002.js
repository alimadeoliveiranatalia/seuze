/*!
 * jQuery UI 1.8.15
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(a,c){function d(h,g){var i=h.nodeName.toLowerCase();if("area"===i){g=h.parentNode;i=g.name;if(!h.href||!i||g.nodeName.toLowerCase()!=="map")return false;h=a("img[usemap=#"+i+"]")[0];return!!h&&e(h)}return(/input|select|textarea|button|object/.test(i)?!h.disabled:"a"==i?h.href||g:g)&&e(h)}function e(h){return!a(h).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}a.ui=a.ui||{};if(!a.ui.version){a.extend(a.ui,{version:"1.8.15",
keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});a.fn.extend({propAttr:a.fn.prop||a.fn.attr,_focus:a.fn.focus,focus:function(h,g){return typeof h==="number"?this.each(function(){var i=
this;setTimeout(function(){a(i).focus();g&&g.call(i)},h)}):this._focus.apply(this,arguments)},scrollParent:function(){var h;h=a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,
"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!h.length?a(document):h},zIndex:function(h){if(h!==c)return this.css("zIndex",h);if(this.length){h=a(this[0]);for(var g;h.length&&h[0]!==document;){g=h.css("position");if(g==="absolute"||g==="relative"||g==="fixed"){g=parseInt(h.css("zIndex"),10);if(!isNaN(g)&&g!==0)return g}h=h.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":
"mousedown")+".ui-disableSelection",function(h){h.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});a.each(["Width","Height"],function(h,g){function i(l,o,n,k){a.each(b,function(){o-=parseFloat(a.curCSS(l,"padding"+this,true))||0;if(n)o-=parseFloat(a.curCSS(l,"border"+this+"Width",true))||0;if(k)o-=parseFloat(a.curCSS(l,"margin"+this,true))||0});return o}var b=g==="Width"?["Left","Right"]:["Top","Bottom"],f=g.toLowerCase(),j={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,
outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+g]=function(l){if(l===c)return j["inner"+g].call(this);return this.each(function(){a(this).css(f,i(this,l)+"px")})};a.fn["outer"+g]=function(l,o){if(typeof l!=="number")return j["outer"+g].call(this,l);return this.each(function(){a(this).css(f,i(this,l,true,o)+"px")})}});a.extend(a.expr[":"],{data:function(h,g,i){return!!a.data(h,i[3])},focusable:function(h){return d(h,!isNaN(a.attr(h,"tabindex")))},tabbable:function(h){var g=a.attr(h,
"tabindex"),i=isNaN(g);return(i||g>=0)&&d(h,!i)}});a(function(){var h=document.body,g=h.appendChild(g=document.createElement("div"));a.extend(g.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});a.support.minHeight=g.offsetHeight===100;a.support.selectstart="onselectstart"in g;h.removeChild(g).style.display="none"});a.extend(a.ui,{plugin:{add:function(h,g,i){h=a.ui[h].prototype;for(var b in i){h.plugins[b]=h.plugins[b]||[];h.plugins[b].push([g,i[b]])}},call:function(h,g,i){if((g=h.plugins[g])&&
h.element[0].parentNode)for(var b=0;b<g.length;b++)h.options[g[b][0]]&&g[b][1].apply(h.element,i)}},contains:function(h,g){return document.compareDocumentPosition?h.compareDocumentPosition(g)&16:h!==g&&h.contains(g)},hasScroll:function(h,g){if(a(h).css("overflow")==="hidden")return false;g=g&&g==="left"?"scrollLeft":"scrollTop";var i=false;if(h[g]>0)return true;h[g]=1;i=h[g]>0;h[g]=0;return i},isOverAxis:function(h,g,i){return h>g&&h<g+i},isOver:function(h,g,i,b,f,j){return a.ui.isOverAxis(h,i,f)&&
a.ui.isOverAxis(g,b,j)}})}})(jQuery);
(function(a,c){if(a.cleanData){var d=a.cleanData;a.cleanData=function(h){for(var g=0,i;(i=h[g])!=null;g++)a(i).triggerHandler("remove");d(h)}}else{var e=a.fn.remove;a.fn.remove=function(h,g){return this.each(function(){if(!g)if(!h||a.filter(h,[this]).length)a("*",this).add([this]).each(function(){a(this).triggerHandler("remove")});return e.call(a(this),h,g)})}}a.widget=function(h,g,i){var b=h.split(".")[0],f;h=h.split(".")[1];f=b+"-"+h;if(!i){i=g;g=a.Widget}a.expr[":"][f]=function(j){return!!a.data(j,
h)};a[b]=a[b]||{};a[b][h]=function(j,l){arguments.length&&this._createWidget(j,l)};g=new g;g.options=a.extend(true,{},g.options);a[b][h].prototype=a.extend(true,g,{namespace:b,widgetName:h,widgetEventPrefix:a[b][h].prototype.widgetEventPrefix||h,widgetBaseClass:f},i);a.widget.bridge(h,a[b][h])};a.widget.bridge=function(h,g){a.fn[h]=function(i){var b=typeof i==="string",f=Array.prototype.slice.call(arguments,1),j=this;i=!b&&f.length?a.extend.apply(null,[true,i].concat(f)):i;if(b&&i.charAt(0)==="_")return j;
b?this.each(function(){var l=a.data(this,h),o=l&&a.isFunction(l[i])?l[i].apply(l,f):l;if(o!==l&&o!==c){j=o;return false}}):this.each(function(){var l=a.data(this,h);l?l.option(i||{})._init():a.data(this,h,new g(i,this))});return j}};a.Widget=function(h,g){arguments.length&&this._createWidget(h,g)};a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(h,g){a.data(g,this.widgetName,this);this.element=a(g);this.options=a.extend(true,{},this.options,
this._getCreateOptions(),h);var i=this;this.element.bind("remove."+this.widgetName,function(){i.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},
widget:function(){return this.element},option:function(h,g){var i=h;if(arguments.length===0)return a.extend({},this.options);if(typeof h==="string"){if(g===c)return this.options[h];i={};i[h]=g}this._setOptions(i);return this},_setOptions:function(h){var g=this;a.each(h,function(i,b){g._setOption(i,b)});return this},_setOption:function(h,g){this.options[h]=g;if(h==="disabled")this.widget()[g?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",g);return this},
enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(h,g,i){var b=this.options[h];g=a.Event(g);g.type=(h===this.widgetEventPrefix?h:this.widgetEventPrefix+h).toLowerCase();i=i||{};if(g.originalEvent){h=a.event.props.length;for(var f;h;){f=a.event.props[--h];g[f]=g.originalEvent[f]}}this.element.trigger(g,i);return!(a.isFunction(b)&&b.call(this.element[0],g,i)===false||g.isDefaultPrevented())}}})(jQuery);
(function(a){a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var c=this;this.element.bind("mousedown."+this.widgetName,function(d){return c._mouseDown(d)}).bind("click."+this.widgetName,function(d){if(true===a.data(d.target,c.widgetName+".preventClickEvent")){a.removeData(d.target,c.widgetName+".preventClickEvent");d.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(c){c.originalEvent=
c.originalEvent||{};if(!c.originalEvent.mouseHandled){this._mouseStarted&&this._mouseUp(c);this._mouseDownEvent=c;var d=this,e=c.which==1,h=typeof this.options.cancel=="string"?a(c.target).closest(this.options.cancel).length:false;if(!e||h||!this._mouseCapture(c))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(c)&&this._mouseDelayMet(c)){this._mouseStarted=this._mouseStart(c)!==
false;if(!this._mouseStarted){c.preventDefault();return true}}true===a.data(c.target,this.widgetName+".preventClickEvent")&&a.removeData(c.target,this.widgetName+".preventClickEvent");this._mouseMoveDelegate=function(g){return d._mouseMove(g)};this._mouseUpDelegate=function(g){return d._mouseUp(g)};a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);c.preventDefault();return c.originalEvent.mouseHandled=true}},_mouseMove:function(c){if(a.browser.msie&&
!(document.documentMode>=9)&&!c.button)return this._mouseUp(c);if(this._mouseStarted){this._mouseDrag(c);return c.preventDefault()}if(this._mouseDistanceMet(c)&&this._mouseDelayMet(c))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,c)!==false)?this._mouseDrag(c):this._mouseUp(c);return!this._mouseStarted},_mouseUp:function(c){a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=
false;c.target==this._mouseDownEvent.target&&a.data(c.target,this.widgetName+".preventClickEvent",true);this._mouseStop(c)}return false},_mouseDistanceMet:function(c){return Math.max(Math.abs(this._mouseDownEvent.pageX-c.pageX),Math.abs(this._mouseDownEvent.pageY-c.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
(function(a){a.widget("ui.draggable",a.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper==
"original"&&!/^(?:r|a|f)/.test(this.element.css("position")))this.element[0].style.position="relative";this.options.addClasses&&this.element.addClass("ui-draggable");this.options.disabled&&this.element.addClass("ui-draggable-disabled");this._mouseInit()},destroy:function(){if(this.element.data("draggable")){this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy();return this}},_mouseCapture:function(c){var d=
this.options;if(this.helper||d.disabled||a(c.target).is(".ui-resizable-handle"))return false;this.handle=this._getHandle(c);if(!this.handle)return false;a(d.iframeFix===true?"iframe":d.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1E3}).css(a(this).offset()).appendTo("body")});return true},_mouseStart:function(c){var d=this.options;this.helper=
this._createHelper(c);this._cacheHelperProportions();if(a.ui.ddmanager)a.ui.ddmanager.current=this;this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};a.extend(this.offset,{click:{left:c.pageX-this.offset.left,top:c.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this.position=this._generatePosition(c);this.originalPageX=c.pageX;this.originalPageY=c.pageY;d.cursorAt&&this._adjustOffsetFromHelper(d.cursorAt);d.containment&&this._setContainment();if(this._trigger("start",c)===false){this._clear();return false}this._cacheHelperProportions();a.ui.ddmanager&&!d.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,c);this.helper.addClass("ui-draggable-dragging");this._mouseDrag(c,true);a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,c);return true},
_mouseDrag:function(c,d){this.position=this._generatePosition(c);this.positionAbs=this._convertPositionTo("absolute");if(!d){d=this._uiHash();if(this._trigger("drag",c,d)===false){this._mouseUp({});return false}this.position=d.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";a.ui.ddmanager&&a.ui.ddmanager.drag(this,c);return false},_mouseStop:function(c){var d=
false;if(a.ui.ddmanager&&!this.options.dropBehaviour)d=a.ui.ddmanager.drop(this,c);if(this.dropped){d=this.dropped;this.dropped=false}if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original")return false;if(this.options.revert=="invalid"&&!d||this.options.revert=="valid"&&d||this.options.revert===true||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,d)){var e=this;a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,
10),function(){e._trigger("stop",c)!==false&&e._clear()})}else this._trigger("stop",c)!==false&&this._clear();return false},_mouseUp:function(c){this.options.iframeFix===true&&a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)});a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,c);return a.ui.mouse.prototype._mouseUp.call(this,c)},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this},_getHandle:function(c){var d=!this.options.handle||
!a(this.options.handle,this.element).length?true:false;a(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==c.target)d=true});return d},_createHelper:function(c){var d=this.options;c=a.isFunction(d.helper)?a(d.helper.apply(this.element[0],[c])):d.helper=="clone"?this.element.clone().removeAttr("id"):this.element;c.parents("body").length||c.appendTo(d.appendTo=="parent"?this.element[0].parentNode:d.appendTo);c[0]!=this.element[0]&&!/(fixed|absolute)/.test(c.css("position"))&&
c.css("position","absolute");return c},_adjustOffsetFromHelper:function(c){if(typeof c=="string")c=c.split(" ");if(a.isArray(c))c={left:+c[0],top:+c[1]||0};if("left"in c)this.offset.click.left=c.left+this.margins.left;if("right"in c)this.offset.click.left=this.helperProportions.width-c.right+this.margins.left;if("top"in c)this.offset.click.top=c.top+this.margins.top;if("bottom"in c)this.offset.click.top=this.helperProportions.height-c.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=
this.helper.offsetParent();var c=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])){c.left+=this.scrollParent.scrollLeft();c.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)c={top:0,left:0};return{top:c.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:c.left+(parseInt(this.offsetParent.css("borderLeftWidth"),
10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var c=this.element.position();return{top:c.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:c.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),
10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var c=this.options;if(c.containment=="parent")c.containment=this.helper[0].parentNode;if(c.containment=="document"||c.containment=="window")this.containment=[c.containment=="document"?0:a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,c.containment=="document"?0:a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,
(c.containment=="document"?0:a(window).scrollLeft())+a(c.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(c.containment=="document"?0:a(window).scrollTop())+(a(c.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(c.containment)&&c.containment.constructor!=Array){c=a(c.containment);var d=c[0];if(d){c.offset();var e=a(d).css("overflow")!=
"hidden";this.containment=[(parseInt(a(d).css("borderLeftWidth"),10)||0)+(parseInt(a(d).css("paddingLeft"),10)||0),(parseInt(a(d).css("borderTopWidth"),10)||0)+(parseInt(a(d).css("paddingTop"),10)||0),(e?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(a(d).css("borderLeftWidth"),10)||0)-(parseInt(a(d).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(a(d).css("borderTopWidth"),
10)||0)-(parseInt(a(d).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];this.relative_container=c}}else if(c.containment.constructor==Array)this.containment=c.containment},_convertPositionTo:function(c,d){if(!d)d=this.position;c=c=="absolute"?1:-1;var e=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,h=/(html|body)/i.test(e[0].tagName);return{top:d.top+
this.offset.relative.top*c+this.offset.parent.top*c-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():h?0:e.scrollTop())*c),left:d.left+this.offset.relative.left*c+this.offset.parent.left*c-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():h?0:e.scrollLeft())*c)}},_generatePosition:function(c){var d=this.options,e=this.cssPosition=="absolute"&&
!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,h=/(html|body)/i.test(e[0].tagName),g=c.pageX,i=c.pageY;if(this.originalPosition){var b;if(this.containment){if(this.relative_container){b=this.relative_container.offset();b=[this.containment[0]+b.left,this.containment[1]+b.top,this.containment[2]+b.left,this.containment[3]+b.top]}else b=this.containment;if(c.pageX-this.offset.click.left<b[0])g=b[0]+this.offset.click.left;
if(c.pageY-this.offset.click.top<b[1])i=b[1]+this.offset.click.top;if(c.pageX-this.offset.click.left>b[2])g=b[2]+this.offset.click.left;if(c.pageY-this.offset.click.top>b[3])i=b[3]+this.offset.click.top}if(d.grid){i=d.grid[1]?this.originalPageY+Math.round((i-this.originalPageY)/d.grid[1])*d.grid[1]:this.originalPageY;i=b?!(i-this.offset.click.top<b[1]||i-this.offset.click.top>b[3])?i:!(i-this.offset.click.top<b[1])?i-d.grid[1]:i+d.grid[1]:i;g=d.grid[0]?this.originalPageX+Math.round((g-this.originalPageX)/
d.grid[0])*d.grid[0]:this.originalPageX;g=b?!(g-this.offset.click.left<b[0]||g-this.offset.click.left>b[2])?g:!(g-this.offset.click.left<b[0])?g-d.grid[0]:g+d.grid[0]:g}}return{top:i-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():h?0:e.scrollTop()),left:g-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&a.browser.version<
526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():h?0:e.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove();this.helper=null;this.cancelHelperRemoval=false},_trigger:function(c,d,e){e=e||this._uiHash();a.ui.plugin.call(this,c,[d,e]);if(c=="drag")this.positionAbs=this._convertPositionTo("absolute");return a.Widget.prototype._trigger.call(this,c,d,
e)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});a.extend(a.ui.draggable,{version:"1.8.15"});a.ui.plugin.add("draggable","connectToSortable",{start:function(c,d){var e=a(this).data("draggable"),h=e.options,g=a.extend({},d,{item:e.element});e.sortables=[];a(h.connectToSortable).each(function(){var i=a.data(this,"sortable");if(i&&!i.options.disabled){e.sortables.push({instance:i,shouldRevert:i.options.revert});
i.refreshPositions();i._trigger("activate",c,g)}})},stop:function(c,d){var e=a(this).data("draggable"),h=a.extend({},d,{item:e.element});a.each(e.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;e.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert)this.instance.options.revert=true;this.instance._mouseStop(c);this.instance.options.helper=this.instance.options._helper;e.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})}else{this.instance.cancelHelperRemoval=
false;this.instance._trigger("deactivate",c,h)}})},drag:function(c,d){var e=a(this).data("draggable"),h=this;a.each(e.sortables,function(){this.instance.positionAbs=e.positionAbs;this.instance.helperProportions=e.helperProportions;this.instance.offset.click=e.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=a(h).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",true);
this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return d.helper[0]};c.target=this.instance.currentItem[0];this.instance._mouseCapture(c,true);this.instance._mouseStart(c,true,true);this.instance.offset.click.top=e.offset.click.top;this.instance.offset.click.left=e.offset.click.left;this.instance.offset.parent.left-=e.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=e.offset.parent.top-this.instance.offset.parent.top;
e._trigger("toSortable",c);e.dropped=this.instance.element;e.currentItem=e.element;this.instance.fromOutside=e}this.instance.currentItem&&this.instance._mouseDrag(c)}else if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",c,this.instance._uiHash(this.instance));this.instance._mouseStop(c,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();this.instance.placeholder&&
this.instance.placeholder.remove();e._trigger("fromSortable",c);e.dropped=false}})}});a.ui.plugin.add("draggable","cursor",{start:function(){var c=a("body"),d=a(this).data("draggable").options;if(c.css("cursor"))d._cursor=c.css("cursor");c.css("cursor",d.cursor)},stop:function(){var c=a(this).data("draggable").options;c._cursor&&a("body").css("cursor",c._cursor)}});a.ui.plugin.add("draggable","opacity",{start:function(c,d){c=a(d.helper);d=a(this).data("draggable").options;if(c.css("opacity"))d._opacity=
c.css("opacity");c.css("opacity",d.opacity)},stop:function(c,d){c=a(this).data("draggable").options;c._opacity&&a(d.helper).css("opacity",c._opacity)}});a.ui.plugin.add("draggable","scroll",{start:function(){var c=a(this).data("draggable");if(c.scrollParent[0]!=document&&c.scrollParent[0].tagName!="HTML")c.overflowOffset=c.scrollParent.offset()},drag:function(c){var d=a(this).data("draggable"),e=d.options,h=false;if(d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"){if(!e.axis||e.axis!=
"x")if(d.overflowOffset.top+d.scrollParent[0].offsetHeight-c.pageY<e.scrollSensitivity)d.scrollParent[0].scrollTop=h=d.scrollParent[0].scrollTop+e.scrollSpeed;else if(c.pageY-d.overflowOffset.top<e.scrollSensitivity)d.scrollParent[0].scrollTop=h=d.scrollParent[0].scrollTop-e.scrollSpeed;if(!e.axis||e.axis!="y")if(d.overflowOffset.left+d.scrollParent[0].offsetWidth-c.pageX<e.scrollSensitivity)d.scrollParent[0].scrollLeft=h=d.scrollParent[0].scrollLeft+e.scrollSpeed;else if(c.pageX-d.overflowOffset.left<
e.scrollSensitivity)d.scrollParent[0].scrollLeft=h=d.scrollParent[0].scrollLeft-e.scrollSpeed}else{if(!e.axis||e.axis!="x")if(c.pageY-a(document).scrollTop()<e.scrollSensitivity)h=a(document).scrollTop(a(document).scrollTop()-e.scrollSpeed);else if(a(window).height()-(c.pageY-a(document).scrollTop())<e.scrollSensitivity)h=a(document).scrollTop(a(document).scrollTop()+e.scrollSpeed);if(!e.axis||e.axis!="y")if(c.pageX-a(document).scrollLeft()<e.scrollSensitivity)h=a(document).scrollLeft(a(document).scrollLeft()-
e.scrollSpeed);else if(a(window).width()-(c.pageX-a(document).scrollLeft())<e.scrollSensitivity)h=a(document).scrollLeft(a(document).scrollLeft()+e.scrollSpeed)}h!==false&&a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(d,c)}});a.ui.plugin.add("draggable","snap",{start:function(){var c=a(this).data("draggable"),d=c.options;c.snapElements=[];a(d.snap.constructor!=String?d.snap.items||":data(draggable)":d.snap).each(function(){var e=a(this),h=e.offset();this!=c.element[0]&&c.snapElements.push({item:this,
width:e.outerWidth(),height:e.outerHeight(),top:h.top,left:h.left})})},drag:function(c,d){for(var e=a(this).data("draggable"),h=e.options,g=h.snapTolerance,i=d.offset.left,b=i+e.helperProportions.width,f=d.offset.top,j=f+e.helperProportions.height,l=e.snapElements.length-1;l>=0;l--){var o=e.snapElements[l].left,n=o+e.snapElements[l].width,k=e.snapElements[l].top,m=k+e.snapElements[l].height;if(o-g<i&&i<n+g&&k-g<f&&f<m+g||o-g<i&&i<n+g&&k-g<j&&j<m+g||o-g<b&&b<n+g&&k-g<f&&f<m+g||o-g<b&&b<n+g&&k-g<j&&
j<m+g){if(h.snapMode!="inner"){var p=Math.abs(k-j)<=g,q=Math.abs(m-f)<=g,s=Math.abs(o-b)<=g,r=Math.abs(n-i)<=g;if(p)d.position.top=e._convertPositionTo("relative",{top:k-e.helperProportions.height,left:0}).top-e.margins.top;if(q)d.position.top=e._convertPositionTo("relative",{top:m,left:0}).top-e.margins.top;if(s)d.position.left=e._convertPositionTo("relative",{top:0,left:o-e.helperProportions.width}).left-e.margins.left;if(r)d.position.left=e._convertPositionTo("relative",{top:0,left:n}).left-e.margins.left}var u=
p||q||s||r;if(h.snapMode!="outer"){p=Math.abs(k-f)<=g;q=Math.abs(m-j)<=g;s=Math.abs(o-i)<=g;r=Math.abs(n-b)<=g;if(p)d.position.top=e._convertPositionTo("relative",{top:k,left:0}).top-e.margins.top;if(q)d.position.top=e._convertPositionTo("relative",{top:m-e.helperProportions.height,left:0}).top-e.margins.top;if(s)d.position.left=e._convertPositionTo("relative",{top:0,left:o}).left-e.margins.left;if(r)d.position.left=e._convertPositionTo("relative",{top:0,left:n-e.helperProportions.width}).left-e.margins.left}if(!e.snapElements[l].snapping&&
(p||q||s||r||u))e.options.snap.snap&&e.options.snap.snap.call(e.element,c,a.extend(e._uiHash(),{snapItem:e.snapElements[l].item}));e.snapElements[l].snapping=p||q||s||r||u}else{e.snapElements[l].snapping&&e.options.snap.release&&e.options.snap.release.call(e.element,c,a.extend(e._uiHash(),{snapItem:e.snapElements[l].item}));e.snapElements[l].snapping=false}}}});a.ui.plugin.add("draggable","stack",{start:function(){var c=a(this).data("draggable").options;c=a.makeArray(a(c.stack)).sort(function(e,h){return(parseInt(a(e).css("zIndex"),
10)||0)-(parseInt(a(h).css("zIndex"),10)||0)});if(c.length){var d=parseInt(c[0].style.zIndex)||0;a(c).each(function(e){this.style.zIndex=d+e});this[0].style.zIndex=d+c.length}}});a.ui.plugin.add("draggable","zIndex",{start:function(c,d){c=a(d.helper);d=a(this).data("draggable").options;if(c.css("zIndex"))d._zIndex=c.css("zIndex");c.css("zIndex",d.zIndex)},stop:function(c,d){c=a(this).data("draggable").options;c._zIndex&&a(d.helper).css("zIndex",c._zIndex)}})})(jQuery);
(function(a){a.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var c=this.options,d=c.accept;this.isover=0;this.isout=1;this.accept=a.isFunction(d)?d:function(e){return e.is(d)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};a.ui.ddmanager.droppables[c.scope]=a.ui.ddmanager.droppables[c.scope]||[];a.ui.ddmanager.droppables[c.scope].push(this);
c.addClasses&&this.element.addClass("ui-droppable")},destroy:function(){for(var c=a.ui.ddmanager.droppables[this.options.scope],d=0;d<c.length;d++)c[d]==this&&c.splice(d,1);this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");return this},_setOption:function(c,d){if(c=="accept")this.accept=a.isFunction(d)?d:function(e){return e.is(d)};a.Widget.prototype._setOption.apply(this,arguments)},_activate:function(c){var d=a.ui.ddmanager.current;this.options.activeClass&&
this.element.addClass(this.options.activeClass);d&&this._trigger("activate",c,this.ui(d))},_deactivate:function(c){var d=a.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass);d&&this._trigger("deactivate",c,this.ui(d))},_over:function(c){var d=a.ui.ddmanager.current;if(!(!d||(d.currentItem||d.element)[0]==this.element[0]))if(this.accept.call(this.element[0],d.currentItem||d.element)){this.options.hoverClass&&this.element.addClass(this.options.hoverClass);
this._trigger("over",c,this.ui(d))}},_out:function(c){var d=a.ui.ddmanager.current;if(!(!d||(d.currentItem||d.element)[0]==this.element[0]))if(this.accept.call(this.element[0],d.currentItem||d.element)){this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("out",c,this.ui(d))}},_drop:function(c,d){var e=d||a.ui.ddmanager.current;if(!e||(e.currentItem||e.element)[0]==this.element[0])return false;var h=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var g=
a.data(this,"droppable");if(g.options.greedy&&!g.options.disabled&&g.options.scope==e.options.scope&&g.accept.call(g.element[0],e.currentItem||e.element)&&a.ui.intersect(e,a.extend(g,{offset:g.element.offset()}),g.options.tolerance)){h=true;return false}});if(h)return false;if(this.accept.call(this.element[0],e.currentItem||e.element)){this.options.activeClass&&this.element.removeClass(this.options.activeClass);this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("drop",
c,this.ui(e));return this.element}return false},ui:function(c){return{draggable:c.currentItem||c.element,helper:c.helper,position:c.position,offset:c.positionAbs}}});a.extend(a.ui.droppable,{version:"1.8.15"});a.ui.intersect=function(c,d,e){if(!d.offset)return false;var h=(c.positionAbs||c.position.absolute).left,g=h+c.helperProportions.width,i=(c.positionAbs||c.position.absolute).top,b=i+c.helperProportions.height,f=d.offset.left,j=f+d.proportions.width,l=d.offset.top,o=l+d.proportions.height;
switch(e){case "fit":return f<=h&&g<=j&&l<=i&&b<=o;case "intersect":return f<h+c.helperProportions.width/2&&g-c.helperProportions.width/2<j&&l<i+c.helperProportions.height/2&&b-c.helperProportions.height/2<o;case "pointer":return a.ui.isOver((c.positionAbs||c.position.absolute).top+(c.clickOffset||c.offset.click).top,(c.positionAbs||c.position.absolute).left+(c.clickOffset||c.offset.click).left,l,f,d.proportions.height,d.proportions.width);case "touch":return(i>=l&&i<=o||b>=l&&b<=o||i<l&&b>o)&&(h>=
f&&h<=j||g>=f&&g<=j||h<f&&g>j);default:return false}};a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(c,d){var e=a.ui.ddmanager.droppables[c.options.scope]||[],h=d?d.type:null,g=(c.currentItem||c.element).find(":data(droppable)").andSelf(),i=0;a:for(;i<e.length;i++)if(!(e[i].options.disabled||c&&!e[i].accept.call(e[i].element[0],c.currentItem||c.element))){for(var b=0;b<g.length;b++)if(g[b]==e[i].element[0]){e[i].proportions.height=0;continue a}e[i].visible=e[i].element.css("display")!=
"none";if(e[i].visible){h=="mousedown"&&e[i]._activate.call(e[i],d);e[i].offset=e[i].element.offset();e[i].proportions={width:e[i].element[0].offsetWidth,height:e[i].element[0].offsetHeight}}}},drop:function(c,d){var e=false;a.each(a.ui.ddmanager.droppables[c.options.scope]||[],function(){if(this.options){if(!this.options.disabled&&this.visible&&a.ui.intersect(c,this,this.options.tolerance))e=e||this._drop.call(this,d);if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],c.currentItem||
c.element)){this.isout=1;this.isover=0;this._deactivate.call(this,d)}}});return e},dragStart:function(c,d){c.element.parentsUntil("body").bind("scroll.droppable",function(){c.options.refreshPositions||a.ui.ddmanager.prepareOffsets(c,d)})},drag:function(c,d){c.options.refreshPositions&&a.ui.ddmanager.prepareOffsets(c,d);a.each(a.ui.ddmanager.droppables[c.options.scope]||[],function(){if(!(this.options.disabled||this.greedyChild||!this.visible)){var e=a.ui.intersect(c,this,this.options.tolerance);if(e=
!e&&this.isover==1?"isout":e&&this.isover==0?"isover":null){var h;if(this.options.greedy){var g=this.element.parents(":data(droppable):eq(0)");if(g.length){h=a.data(g[0],"droppable");h.greedyChild=e=="isover"?1:0}}if(h&&e=="isover"){h.isover=0;h.isout=1;h._out.call(h,d)}this[e]=1;this[e=="isout"?"isover":"isout"]=0;this[e=="isover"?"_over":"_out"].call(this,d);if(h&&e=="isout"){h.isout=0;h.isover=1;h._over.call(h,d)}}}})},dragStop:function(c,d){c.element.parentsUntil("body").unbind("scroll.droppable");
c.options.refreshPositions||a.ui.ddmanager.prepareOffsets(c,d)}}})(jQuery);
(function(a){a.widget("ui.resizable",a.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1E3},_create:function(){var e=this,h=this.options;this.element.addClass("ui-resizable");a.extend(this,{_aspectRatio:!!h.aspectRatio,aspectRatio:h.aspectRatio,originalElement:this.element,
_proportionallyResizeElements:[],_helper:h.helper||h.ghost||h.animate?h.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){/relative/.test(this.element.css("position"))&&a.browser.opera&&this.element.css({position:"relative",top:"auto",left:"auto"});this.element.wrap(a('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),
top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("resizable",this.element.data("resizable"));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=
this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize()}this.handles=h.handles||(!a(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",
nw:".ui-resizable-nw"});if(this.handles.constructor==String){if(this.handles=="all")this.handles="n,e,s,w,se,sw,ne,nw";var g=this.handles.split(",");this.handles={};for(var i=0;i<g.length;i++){var b=a.trim(g[i]),f=a('<div class="ui-resizable-handle '+("ui-resizable-"+b)+'"></div>');/sw|se|ne|nw/.test(b)&&f.css({zIndex:++h.zIndex});"se"==b&&f.addClass("ui-icon ui-icon-gripsmall-diagonal-se");this.handles[b]=".ui-resizable-"+b;this.element.append(f)}}this._renderAxis=function(j){j=j||this.element;for(var l in this.handles){if(this.handles[l].constructor==
String)this.handles[l]=a(this.handles[l],this.element).show();if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var o=a(this.handles[l],this.element),n=0;n=/sw|ne|nw|se|n|s/.test(l)?o.outerHeight():o.outerWidth();o=["padding",/ne|nw|n/.test(l)?"Top":/se|sw|s/.test(l)?"Bottom":/^e$/.test(l)?"Right":"Left"].join("");j.css(o,n);this._proportionallyResize()}a(this.handles[l])}};this._renderAxis(this.element);this._handles=a(".ui-resizable-handle",this.element).disableSelection();
this._handles.mouseover(function(){if(!e.resizing){if(this.className)var j=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);e.axis=j&&j[1]?j[1]:"se"}});if(h.autoHide){this._handles.hide();a(this.element).addClass("ui-resizable-autohide").hover(function(){if(!h.disabled){a(this).removeClass("ui-resizable-autohide");e._handles.show()}},function(){if(!h.disabled)if(!e.resizing){a(this).addClass("ui-resizable-autohide");e._handles.hide()}})}this._mouseInit()},destroy:function(){this._mouseDestroy();
var e=function(g){a(g).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){e(this.element);var h=this.element;h.after(this.originalElement.css({position:h.css("position"),width:h.outerWidth(),height:h.outerHeight(),top:h.css("top"),left:h.css("left")})).remove()}this.originalElement.css("resize",this.originalResizeStyle);e(this.originalElement);return this},_mouseCapture:function(e){var h=
false;for(var g in this.handles)if(a(this.handles[g])[0]==e.target)h=true;return!this.options.disabled&&h},_mouseStart:function(e){var h=this.options,g=this.element.position(),i=this.element;this.resizing=true;this.documentScroll={top:a(document).scrollTop(),left:a(document).scrollLeft()};if(i.is(".ui-draggable")||/absolute/.test(i.css("position")))i.css({position:"absolute",top:g.top,left:g.left});a.browser.opera&&/relative/.test(i.css("position"))&&i.css({position:"relative",top:"auto",left:"auto"});
this._renderProxy();g=c(this.helper.css("left"));var b=c(this.helper.css("top"));if(h.containment){g+=a(h.containment).scrollLeft()||0;b+=a(h.containment).scrollTop()||0}this.offset=this.helper.offset();this.position={left:g,top:b};this.size=this._helper?{width:i.outerWidth(),height:i.outerHeight()}:{width:i.width(),height:i.height()};this.originalSize=this._helper?{width:i.outerWidth(),height:i.outerHeight()}:{width:i.width(),height:i.height()};this.originalPosition={left:g,top:b};this.sizeDiff=
{width:i.outerWidth()-i.width(),height:i.outerHeight()-i.height()};this.originalMousePosition={left:e.pageX,top:e.pageY};this.aspectRatio=typeof h.aspectRatio=="number"?h.aspectRatio:this.originalSize.width/this.originalSize.height||1;h=a(".ui-resizable-"+this.axis).css("cursor");a("body").css("cursor",h=="auto"?this.axis+"-resize":h);i.addClass("ui-resizable-resizing");this._propagate("start",e);return true},_mouseDrag:function(e){var h=this.helper,g=this.originalMousePosition,i=this._change[this.axis];
if(!i)return false;g=i.apply(this,[e,e.pageX-g.left||0,e.pageY-g.top||0]);this._updateVirtualBoundaries(e.shiftKey);if(this._aspectRatio||e.shiftKey)g=this._updateRatio(g,e);g=this._respectSize(g,e);this._propagate("resize",e);h.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize();this._updateCache(g);this._trigger("resize",e,this.ui());return false},
_mouseStop:function(e){this.resizing=false;var h=this.options,g=this;if(this._helper){var i=this._proportionallyResizeElements,b=i.length&&/textarea/i.test(i[0].nodeName);i=b&&a.ui.hasScroll(i[0],"left")?0:g.sizeDiff.height;b=b?0:g.sizeDiff.width;b={width:g.helper.width()-b,height:g.helper.height()-i};i=parseInt(g.element.css("left"),10)+(g.position.left-g.originalPosition.left)||null;var f=parseInt(g.element.css("top"),10)+(g.position.top-g.originalPosition.top)||null;h.animate||this.element.css(a.extend(b,
{top:f,left:i}));g.helper.height(g.size.height);g.helper.width(g.size.width);this._helper&&!h.animate&&this._proportionallyResize()}a("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");this._propagate("stop",e);this._helper&&this.helper.remove();return false},_updateVirtualBoundaries:function(e){var h=this.options,g,i,b;h={minWidth:d(h.minWidth)?h.minWidth:0,maxWidth:d(h.maxWidth)?h.maxWidth:Infinity,minHeight:d(h.minHeight)?h.minHeight:0,maxHeight:d(h.maxHeight)?h.maxHeight:
Infinity};if(this._aspectRatio||e){e=h.minHeight*this.aspectRatio;i=h.minWidth/this.aspectRatio;g=h.maxHeight*this.aspectRatio;b=h.maxWidth/this.aspectRatio;if(e>h.minWidth)h.minWidth=e;if(i>h.minHeight)h.minHeight=i;if(g<h.maxWidth)h.maxWidth=g;if(b<h.maxHeight)h.maxHeight=b}this._vBoundaries=h},_updateCache:function(e){this.offset=this.helper.offset();if(d(e.left))this.position.left=e.left;if(d(e.top))this.position.top=e.top;if(d(e.height))this.size.height=e.height;if(d(e.width))this.size.width=
e.width},_updateRatio:function(e){var h=this.position,g=this.size,i=this.axis;if(d(e.height))e.width=e.height*this.aspectRatio;else if(d(e.width))e.height=e.width/this.aspectRatio;if(i=="sw"){e.left=h.left+(g.width-e.width);e.top=null}if(i=="nw"){e.top=h.top+(g.height-e.height);e.left=h.left+(g.width-e.width)}return e},_respectSize:function(e){var h=this._vBoundaries,g=this.axis,i=d(e.width)&&h.maxWidth&&h.maxWidth<e.width,b=d(e.height)&&h.maxHeight&&h.maxHeight<e.height,f=d(e.width)&&h.minWidth&&
h.minWidth>e.width,j=d(e.height)&&h.minHeight&&h.minHeight>e.height;if(f)e.width=h.minWidth;if(j)e.height=h.minHeight;if(i)e.width=h.maxWidth;if(b)e.height=h.maxHeight;var l=this.originalPosition.left+this.originalSize.width,o=this.position.top+this.size.height,n=/sw|nw|w/.test(g);g=/nw|ne|n/.test(g);if(f&&n)e.left=l-h.minWidth;if(i&&n)e.left=l-h.maxWidth;if(j&&g)e.top=o-h.minHeight;if(b&&g)e.top=o-h.maxHeight;if((h=!e.width&&!e.height)&&!e.left&&e.top)e.top=null;else if(h&&!e.top&&e.left)e.left=
null;return e},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var e=this.helper||this.element,h=0;h<this._proportionallyResizeElements.length;h++){var g=this._proportionallyResizeElements[h];if(!this.borderDif){var i=[g.css("borderTopWidth"),g.css("borderRightWidth"),g.css("borderBottomWidth"),g.css("borderLeftWidth")],b=[g.css("paddingTop"),g.css("paddingRight"),g.css("paddingBottom"),g.css("paddingLeft")];this.borderDif=a.map(i,function(f,j){f=parseInt(f,10)||
0;j=parseInt(b[j],10)||0;return f+j})}a.browser.msie&&(a(e).is(":hidden")||a(e).parents(":hidden").length)||g.css({height:e.height()-this.borderDif[0]-this.borderDif[2]||0,width:e.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var e=this.options;this.elementOffset=this.element.offset();if(this._helper){this.helper=this.helper||a('<div style="overflow:hidden;"></div>');var h=a.browser.msie&&a.browser.version<7,g=h?1:0;h=h?2:-1;this.helper.addClass(this._helper).css({width:this.element.outerWidth()+
h,height:this.element.outerHeight()+h,position:"absolute",left:this.elementOffset.left-g+"px",top:this.elementOffset.top-g+"px",zIndex:++e.zIndex});this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(e,h){return{width:this.originalSize.width+h}},w:function(e,h){return{left:this.originalPosition.left+h,width:this.originalSize.width-h}},n:function(e,h,g){return{top:this.originalPosition.top+g,height:this.originalSize.height-g}},s:function(e,h,g){return{height:this.originalSize.height+
g}},se:function(e,h,g){return a.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,h,g]))},sw:function(e,h,g){return a.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,h,g]))},ne:function(e,h,g){return a.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,h,g]))},nw:function(e,h,g){return a.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,h,g]))}},_propagate:function(e,h){a.ui.plugin.call(this,e,[h,this.ui()]);
e!="resize"&&this._trigger(e,h,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}});a.extend(a.ui.resizable,{version:"1.8.15"});a.ui.plugin.add("resizable","alsoResize",{start:function(){var e=a(this).data("resizable").options,h=function(g){a(g).each(function(){var i=a(this);i.data("resizable-alsoresize",{width:parseInt(i.width(),
10),height:parseInt(i.height(),10),left:parseInt(i.css("left"),10),top:parseInt(i.css("top"),10),position:i.css("position")})})};if(typeof e.alsoResize=="object"&&!e.alsoResize.parentNode)if(e.alsoResize.length){e.alsoResize=e.alsoResize[0];h(e.alsoResize)}else a.each(e.alsoResize,function(g){h(g)});else h(e.alsoResize)},resize:function(e,h){var g=a(this).data("resizable");e=g.options;var i=g.originalSize,b=g.originalPosition,f={height:g.size.height-i.height||0,width:g.size.width-i.width||0,top:g.position.top-
b.top||0,left:g.position.left-b.left||0},j=function(l,o){a(l).each(function(){var n=a(this),k=a(this).data("resizable-alsoresize"),m={},p=o&&o.length?o:n.parents(h.originalElement[0]).length?["width","height"]:["width","height","top","left"];a.each(p,function(q,s){if((q=(k[s]||0)+(f[s]||0))&&q>=0)m[s]=q||null});if(a.browser.opera&&/relative/.test(n.css("position"))){g._revertToRelativePosition=true;n.css({position:"absolute",top:"auto",left:"auto"})}n.css(m)})};typeof e.alsoResize=="object"&&!e.alsoResize.nodeType?
a.each(e.alsoResize,function(l,o){j(l,o)}):j(e.alsoResize)},stop:function(){var e=a(this).data("resizable"),h=e.options,g=function(i){a(i).each(function(){var b=a(this);b.css({position:b.data("resizable-alsoresize").position})})};if(e._revertToRelativePosition){e._revertToRelativePosition=false;typeof h.alsoResize=="object"&&!h.alsoResize.nodeType?a.each(h.alsoResize,function(i){g(i)}):g(h.alsoResize)}a(this).removeData("resizable-alsoresize")}});a.ui.plugin.add("resizable","animate",{stop:function(e){var h=
a(this).data("resizable"),g=h.options,i=h._proportionallyResizeElements,b=i.length&&/textarea/i.test(i[0].nodeName),f=b&&a.ui.hasScroll(i[0],"left")?0:h.sizeDiff.height;b={width:h.size.width-(b?0:h.sizeDiff.width),height:h.size.height-f};f=parseInt(h.element.css("left"),10)+(h.position.left-h.originalPosition.left)||null;var j=parseInt(h.element.css("top"),10)+(h.position.top-h.originalPosition.top)||null;h.element.animate(a.extend(b,j&&f?{top:j,left:f}:{}),{duration:g.animateDuration,easing:g.animateEasing,
step:function(){var l={width:parseInt(h.element.css("width"),10),height:parseInt(h.element.css("height"),10),top:parseInt(h.element.css("top"),10),left:parseInt(h.element.css("left"),10)};i&&i.length&&a(i[0]).css({width:l.width,height:l.height});h._updateCache(l);h._propagate("resize",e)}})}});a.ui.plugin.add("resizable","containment",{start:function(){var e=a(this).data("resizable"),h=e.element,g=e.options.containment;if(h=g instanceof a?g.get(0):/parent/.test(g)?h.parent().get(0):g){e.containerElement=
a(h);if(/document/.test(g)||g==document){e.containerOffset={left:0,top:0};e.containerPosition={left:0,top:0};e.parentData={element:a(document),left:0,top:0,width:a(document).width(),height:a(document).height()||document.body.parentNode.scrollHeight}}else{var i=a(h),b=[];a(["Top","Right","Left","Bottom"]).each(function(l,o){b[l]=c(i.css("padding"+o))});e.containerOffset=i.offset();e.containerPosition=i.position();e.containerSize={height:i.innerHeight()-b[3],width:i.innerWidth()-b[1]};g=e.containerOffset;
var f=e.containerSize.height,j=e.containerSize.width;j=a.ui.hasScroll(h,"left")?h.scrollWidth:j;f=a.ui.hasScroll(h)?h.scrollHeight:f;e.parentData={element:h,left:g.left,top:g.top,width:j,height:f}}}},resize:function(e){var h=a(this).data("resizable"),g=h.options,i=h.containerOffset,b=h.position;e=h._aspectRatio||e.shiftKey;var f={top:0,left:0},j=h.containerElement;if(j[0]!=document&&/static/.test(j.css("position")))f=i;if(b.left<(h._helper?i.left:0)){h.size.width+=h._helper?h.position.left-i.left:
h.position.left-f.left;if(e)h.size.height=h.size.width/g.aspectRatio;h.position.left=g.helper?i.left:0}if(b.top<(h._helper?i.top:0)){h.size.height+=h._helper?h.position.top-i.top:h.position.top;if(e)h.size.width=h.size.height*g.aspectRatio;h.position.top=h._helper?i.top:0}h.offset.left=h.parentData.left+h.position.left;h.offset.top=h.parentData.top+h.position.top;g=Math.abs((h._helper?h.offset.left-f.left:h.offset.left-f.left)+h.sizeDiff.width);i=Math.abs((h._helper?h.offset.top-f.top:h.offset.top-
i.top)+h.sizeDiff.height);b=h.containerElement.get(0)==h.element.parent().get(0);f=/relative|absolute/.test(h.containerElement.css("position"));if(b&&f)g-=h.parentData.left;if(g+h.size.width>=h.parentData.width){h.size.width=h.parentData.width-g;if(e)h.size.height=h.size.width/h.aspectRatio}if(i+h.size.height>=h.parentData.height){h.size.height=h.parentData.height-i;if(e)h.size.width=h.size.height*h.aspectRatio}},stop:function(){var e=a(this).data("resizable"),h=e.options,g=e.containerOffset,i=e.containerPosition,
b=e.containerElement,f=a(e.helper),j=f.offset(),l=f.outerWidth()-e.sizeDiff.width;f=f.outerHeight()-e.sizeDiff.height;e._helper&&!h.animate&&/relative/.test(b.css("position"))&&a(this).css({left:j.left-i.left-g.left,width:l,height:f});e._helper&&!h.animate&&/static/.test(b.css("position"))&&a(this).css({left:j.left-i.left-g.left,width:l,height:f})}});a.ui.plugin.add("resizable","ghost",{start:function(){var e=a(this).data("resizable"),h=e.options,g=e.size;e.ghost=e.originalElement.clone();e.ghost.css({opacity:0.25,
display:"block",position:"relative",height:g.height,width:g.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof h.ghost=="string"?h.ghost:"");e.ghost.appendTo(e.helper)},resize:function(){var e=a(this).data("resizable");e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})},stop:function(){var e=a(this).data("resizable");e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}});a.ui.plugin.add("resizable","grid",{resize:function(){var e=
a(this).data("resizable"),h=e.options,g=e.size,i=e.originalSize,b=e.originalPosition,f=e.axis;h.grid=typeof h.grid=="number"?[h.grid,h.grid]:h.grid;var j=Math.round((g.width-i.width)/(h.grid[0]||1))*(h.grid[0]||1);h=Math.round((g.height-i.height)/(h.grid[1]||1))*(h.grid[1]||1);if(/^(se|s|e)$/.test(f)){e.size.width=i.width+j;e.size.height=i.height+h}else if(/^(ne)$/.test(f)){e.size.width=i.width+j;e.size.height=i.height+h;e.position.top=b.top-h}else{if(/^(sw)$/.test(f)){e.size.width=i.width+j;e.size.height=
i.height+h}else{e.size.width=i.width+j;e.size.height=i.height+h;e.position.top=b.top-h}e.position.left=b.left-j}}});var c=function(e){return parseInt(e,10)||0},d=function(e){return!isNaN(parseInt(e,10))}})(jQuery);
(function(a){a.widget("ui.selectable",a.ui.mouse,{options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch"},_create:function(){var c=this;this.element.addClass("ui-selectable");this.dragged=false;var d;this.refresh=function(){d=a(c.options.filter,c.element[0]);d.each(function(){var e=a(this),h=e.offset();a.data(this,"selectable-item",{element:this,$element:e,left:h.left,top:h.top,right:h.left+e.outerWidth(),bottom:h.top+e.outerHeight(),startselected:false,selected:e.hasClass("ui-selected"),
selecting:e.hasClass("ui-selecting"),unselecting:e.hasClass("ui-unselecting")})})};this.refresh();this.selectees=d.addClass("ui-selectee");this._mouseInit();this.helper=a("<div class='ui-selectable-helper'></div>")},destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");this._mouseDestroy();return this},_mouseStart:function(c){var d=this;this.opos=[c.pageX,
c.pageY];if(!this.options.disabled){var e=this.options;this.selectees=a(e.filter,this.element[0]);this._trigger("start",c);a(e.appendTo).append(this.helper);this.helper.css({left:c.clientX,top:c.clientY,width:0,height:0});e.autoRefresh&&this.refresh();this.selectees.filter(".ui-selected").each(function(){var h=a.data(this,"selectable-item");h.startselected=true;if(!c.metaKey){h.$element.removeClass("ui-selected");h.selected=false;h.$element.addClass("ui-unselecting");h.unselecting=true;d._trigger("unselecting",
c,{unselecting:h.element})}});a(c.target).parents().andSelf().each(function(){var h=a.data(this,"selectable-item");if(h){var g=!c.metaKey||!h.$element.hasClass("ui-selected");h.$element.removeClass(g?"ui-unselecting":"ui-selected").addClass(g?"ui-selecting":"ui-unselecting");h.unselecting=!g;h.selecting=g;(h.selected=g)?d._trigger("selecting",c,{selecting:h.element}):d._trigger("unselecting",c,{unselecting:h.element});return false}})}},_mouseDrag:function(c){var d=this;this.dragged=true;if(!this.options.disabled){var e=
this.options,h=this.opos[0],g=this.opos[1],i=c.pageX,b=c.pageY;if(h>i){var f=i;i=h;h=f}if(g>b){f=b;b=g;g=f}this.helper.css({left:h,top:g,width:i-h,height:b-g});this.selectees.each(function(){var j=a.data(this,"selectable-item");if(!(!j||j.element==d.element[0])){var l=false;if(e.tolerance=="touch")l=!(j.left>i||j.right<h||j.top>b||j.bottom<g);else if(e.tolerance=="fit")l=j.left>h&&j.right<i&&j.top>g&&j.bottom<b;if(l){if(j.selected){j.$element.removeClass("ui-selected");j.selected=false}if(j.unselecting){j.$element.removeClass("ui-unselecting");
j.unselecting=false}if(!j.selecting){j.$element.addClass("ui-selecting");j.selecting=true;d._trigger("selecting",c,{selecting:j.element})}}else{if(j.selecting)if(c.metaKey&&j.startselected){j.$element.removeClass("ui-selecting");j.selecting=false;j.$element.addClass("ui-selected");j.selected=true}else{j.$element.removeClass("ui-selecting");j.selecting=false;if(j.startselected){j.$element.addClass("ui-unselecting");j.unselecting=true}d._trigger("unselecting",c,{unselecting:j.element})}if(j.selected)if(!c.metaKey&&
!j.startselected){j.$element.removeClass("ui-selected");j.selected=false;j.$element.addClass("ui-unselecting");j.unselecting=true;d._trigger("unselecting",c,{unselecting:j.element})}}}});return false}},_mouseStop:function(c){var d=this;this.dragged=false;a(".ui-unselecting",this.element[0]).each(function(){var e=a.data(this,"selectable-item");e.$element.removeClass("ui-unselecting");e.unselecting=false;e.startselected=false;d._trigger("unselected",c,{unselected:e.element})});a(".ui-selecting",this.element[0]).each(function(){var e=
a.data(this,"selectable-item");e.$element.removeClass("ui-selecting").addClass("ui-selected");e.selecting=false;e.selected=true;e.startselected=true;d._trigger("selected",c,{selected:e.element})});this._trigger("stop",c);this.helper.remove();return false}});a.extend(a.ui.selectable,{version:"1.8.15"})})(jQuery);
(function(a){a.widget("ui.sortable",a.ui.mouse,{widgetEventPrefix:"sort",options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1E3},_create:function(){var c=this.options;this.containerCache={};this.element.addClass("ui-sortable");
this.refresh();this.floating=this.items.length?c.axis==="x"||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):false;this.offset=this.element.offset();this._mouseInit()},destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");this._mouseDestroy();for(var c=this.items.length-1;c>=0;c--)this.items[c].item.removeData("sortable-item");return this},_setOption:function(c,d){if(c===
"disabled"){this.options[c]=d;this.widget()[d?"addClass":"removeClass"]("ui-sortable-disabled")}else a.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(c,d){if(this.reverting)return false;if(this.options.disabled||this.options.type=="static")return false;this._refreshItems(c);var e=null,h=this;a(c.target).parents().each(function(){if(a.data(this,"sortable-item")==h){e=a(this);return false}});if(a.data(c.target,"sortable-item")==h)e=a(c.target);if(!e)return false;if(this.options.handle&&
!d){var g=false;a(this.options.handle,e).find("*").andSelf().each(function(){if(this==c.target)g=true});if(!g)return false}this.currentItem=e;this._removeCurrentsFromItems();return true},_mouseStart:function(c,d,e){d=this.options;var h=this;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(c);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,
left:this.offset.left-this.margins.left};this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");a.extend(this.offset,{click:{left:c.pageX-this.offset.left,top:c.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this._generatePosition(c);this.originalPageX=c.pageX;this.originalPageY=c.pageY;d.cursorAt&&this._adjustOffsetFromHelper(d.cursorAt);this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
this.helper[0]!=this.currentItem[0]&&this.currentItem.hide();this._createPlaceholder();d.containment&&this._setContainment();if(d.cursor){if(a("body").css("cursor"))this._storedCursor=a("body").css("cursor");a("body").css("cursor",d.cursor)}if(d.opacity){if(this.helper.css("opacity"))this._storedOpacity=this.helper.css("opacity");this.helper.css("opacity",d.opacity)}if(d.zIndex){if(this.helper.css("zIndex"))this._storedZIndex=this.helper.css("zIndex");this.helper.css("zIndex",d.zIndex)}if(this.scrollParent[0]!=
document&&this.scrollParent[0].tagName!="HTML")this.overflowOffset=this.scrollParent.offset();this._trigger("start",c,this._uiHash());this._preserveHelperProportions||this._cacheHelperProportions();if(!e)for(e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("activate",c,h._uiHash(this));if(a.ui.ddmanager)a.ui.ddmanager.current=this;a.ui.ddmanager&&!d.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,c);this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(c);
return true},_mouseDrag:function(c){this.position=this._generatePosition(c);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs)this.lastPositionAbs=this.positionAbs;if(this.options.scroll){var d=this.options,e=false;if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if(this.overflowOffset.top+this.scrollParent[0].offsetHeight-c.pageY<d.scrollSensitivity)this.scrollParent[0].scrollTop=e=this.scrollParent[0].scrollTop+d.scrollSpeed;else if(c.pageY-this.overflowOffset.top<
d.scrollSensitivity)this.scrollParent[0].scrollTop=e=this.scrollParent[0].scrollTop-d.scrollSpeed;if(this.overflowOffset.left+this.scrollParent[0].offsetWidth-c.pageX<d.scrollSensitivity)this.scrollParent[0].scrollLeft=e=this.scrollParent[0].scrollLeft+d.scrollSpeed;else if(c.pageX-this.overflowOffset.left<d.scrollSensitivity)this.scrollParent[0].scrollLeft=e=this.scrollParent[0].scrollLeft-d.scrollSpeed}else{if(c.pageY-a(document).scrollTop()<d.scrollSensitivity)e=a(document).scrollTop(a(document).scrollTop()-
d.scrollSpeed);else if(a(window).height()-(c.pageY-a(document).scrollTop())<d.scrollSensitivity)e=a(document).scrollTop(a(document).scrollTop()+d.scrollSpeed);if(c.pageX-a(document).scrollLeft()<d.scrollSensitivity)e=a(document).scrollLeft(a(document).scrollLeft()-d.scrollSpeed);else if(a(window).width()-(c.pageX-a(document).scrollLeft())<d.scrollSensitivity)e=a(document).scrollLeft(a(document).scrollLeft()+d.scrollSpeed)}e!==false&&a.ui.ddmanager&&!d.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,
c)}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";for(d=this.items.length-1;d>=0;d--){e=this.items[d];var h=e.item[0],g=this._intersectsWithPointer(e);if(g)if(h!=this.currentItem[0]&&this.placeholder[g==1?"next":"prev"]()[0]!=h&&!a.ui.contains(this.placeholder[0],h)&&(this.options.type=="semi-dynamic"?!a.ui.contains(this.element[0],
h):true)){this.direction=g==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(e))this._rearrange(c,e);else break;this._trigger("change",c,this._uiHash());break}}this._contactContainers(c);a.ui.ddmanager&&a.ui.ddmanager.drag(this,c);this._trigger("sort",c,this._uiHash());this.lastPositionAbs=this.positionAbs;return false},_mouseStop:function(c,d){if(c){a.ui.ddmanager&&!this.options.dropBehaviour&&a.ui.ddmanager.drop(this,c);if(this.options.revert){var e=this;d=e.placeholder.offset();
e.reverting=true;a(this.helper).animate({left:d.left-this.offset.parent.left-e.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:d.top-this.offset.parent.top-e.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){e._clear(c)})}else this._clear(c,d);return false}},cancel:function(){var c=this;if(this.dragging){this._mouseUp({target:null});this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):
this.currentItem.show();for(var d=this.containers.length-1;d>=0;d--){this.containers[d]._trigger("deactivate",null,c._uiHash(this));if(this.containers[d].containerCache.over){this.containers[d]._trigger("out",null,c._uiHash(this));this.containers[d].containerCache.over=0}}}if(this.placeholder){this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove();a.extend(this,{helper:null,
dragging:false,reverting:false,_noFinalSort:null});this.domPosition.prev?a(this.domPosition.prev).after(this.currentItem):a(this.domPosition.parent).prepend(this.currentItem)}return this},serialize:function(c){var d=this._getItemsAsjQuery(c&&c.connected),e=[];c=c||{};a(d).each(function(){var h=(a(c.item||this).attr(c.attribute||"id")||"").match(c.expression||/(.+)[-=_](.+)/);if(h)e.push((c.key||h[1]+"[]")+"="+(c.key&&c.expression?h[1]:h[2]))});!e.length&&c.key&&e.push(c.key+"=");return e.join("&")},
toArray:function(c){var d=this._getItemsAsjQuery(c&&c.connected),e=[];c=c||{};d.each(function(){e.push(a(c.item||this).attr(c.attribute||"id")||"")});return e},_intersectsWith:function(c){var d=this.positionAbs.left,e=d+this.helperProportions.width,h=this.positionAbs.top,g=h+this.helperProportions.height,i=c.left,b=i+c.width,f=c.top,j=f+c.height,l=this.offset.click.top,o=this.offset.click.left;l=h+l>f&&h+l<j&&d+o>i&&d+o<b;return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||
this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>c[this.floating?"width":"height"]?l:i<d+this.helperProportions.width/2&&e-this.helperProportions.width/2<b&&f<h+this.helperProportions.height/2&&g-this.helperProportions.height/2<j},_intersectsWithPointer:function(c){var d=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,c.top,c.height);c=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,c.left,c.width);d=d&&c;c=this._getDragVerticalDirection();
var e=this._getDragHorizontalDirection();if(!d)return false;return this.floating?e&&e=="right"||c=="down"?2:1:c&&(c=="down"?2:1)},_intersectsWithSides:function(c){var d=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,c.top+c.height/2,c.height);c=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,c.left+c.width/2,c.width);var e=this._getDragVerticalDirection(),h=this._getDragHorizontalDirection();return this.floating&&h?h=="right"&&c||h=="left"&&!c:e&&(e=="down"&&d||e=="up"&&!d)},
_getDragVerticalDirection:function(){var c=this.positionAbs.top-this.lastPositionAbs.top;return c!=0&&(c>0?"down":"up")},_getDragHorizontalDirection:function(){var c=this.positionAbs.left-this.lastPositionAbs.left;return c!=0&&(c>0?"right":"left")},refresh:function(c){this._refreshItems(c);this.refreshPositions();return this},_connectWith:function(){var c=this.options;return c.connectWith.constructor==String?[c.connectWith]:c.connectWith},_getItemsAsjQuery:function(c){var d=[],e=[],h=this._connectWith();
if(h&&c)for(c=h.length-1;c>=0;c--)for(var g=a(h[c]),i=g.length-1;i>=0;i--){var b=a.data(g[i],"sortable");if(b&&b!=this&&!b.options.disabled)e.push([a.isFunction(b.options.items)?b.options.items.call(b.element):a(b.options.items,b.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),b])}e.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),
this]);for(c=e.length-1;c>=0;c--)e[c][0].each(function(){d.push(this)});return a(d)},_removeCurrentsFromItems:function(){for(var c=this.currentItem.find(":data(sortable-item)"),d=0;d<this.items.length;d++)for(var e=0;e<c.length;e++)c[e]==this.items[d].item[0]&&this.items.splice(d,1)},_refreshItems:function(c){this.items=[];this.containers=[this];var d=this.items,e=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],c,{item:this.currentItem}):a(this.options.items,this.element),
this]],h=this._connectWith();if(h)for(var g=h.length-1;g>=0;g--)for(var i=a(h[g]),b=i.length-1;b>=0;b--){var f=a.data(i[b],"sortable");if(f&&f!=this&&!f.options.disabled){e.push([a.isFunction(f.options.items)?f.options.items.call(f.element[0],c,{item:this.currentItem}):a(f.options.items,f.element),f]);this.containers.push(f)}}for(g=e.length-1;g>=0;g--){c=e[g][1];h=e[g][0];b=0;for(i=h.length;b<i;b++){f=a(h[b]);f.data("sortable-item",c);d.push({item:f,instance:c,width:0,height:0,left:0,top:0})}}},refreshPositions:function(c){if(this.offsetParent&&
this.helper)this.offset.parent=this._getParentOffset();for(var d=this.items.length-1;d>=0;d--){var e=this.items[d];if(!(e.instance!=this.currentContainer&&this.currentContainer&&e.item[0]!=this.currentItem[0])){var h=this.options.toleranceElement?a(this.options.toleranceElement,e.item):e.item;if(!c){e.width=h.outerWidth();e.height=h.outerHeight()}h=h.offset();e.left=h.left;e.top=h.top}}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(d=
this.containers.length-1;d>=0;d--){h=this.containers[d].element.offset();this.containers[d].containerCache.left=h.left;this.containers[d].containerCache.top=h.top;this.containers[d].containerCache.width=this.containers[d].element.outerWidth();this.containers[d].containerCache.height=this.containers[d].element.outerHeight()}return this},_createPlaceholder:function(c){var d=c||this,e=d.options;if(!e.placeholder||e.placeholder.constructor==String){var h=e.placeholder;e.placeholder={element:function(){var g=
a(document.createElement(d.currentItem[0].nodeName)).addClass(h||d.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];if(!h)g.style.visibility="hidden";return g},update:function(g,i){if(!(h&&!e.forcePlaceholderSize)){i.height()||i.height(d.currentItem.innerHeight()-parseInt(d.currentItem.css("paddingTop")||0,10)-parseInt(d.currentItem.css("paddingBottom")||0,10));i.width()||i.width(d.currentItem.innerWidth()-parseInt(d.currentItem.css("paddingLeft")||0,10)-parseInt(d.currentItem.css("paddingRight")||
0,10))}}}}d.placeholder=a(e.placeholder.element.call(d.element,d.currentItem));d.currentItem.after(d.placeholder);e.placeholder.update(d,d.placeholder)},_contactContainers:function(c){for(var d=null,e=null,h=this.containers.length-1;h>=0;h--)if(!a.ui.contains(this.currentItem[0],this.containers[h].element[0]))if(this._intersectsWith(this.containers[h].containerCache)){if(!(d&&a.ui.contains(this.containers[h].element[0],d.element[0]))){d=this.containers[h];e=h}}else if(this.containers[h].containerCache.over){this.containers[h]._trigger("out",
c,this._uiHash(this));this.containers[h].containerCache.over=0}if(d)if(this.containers.length===1){this.containers[e]._trigger("over",c,this._uiHash(this));this.containers[e].containerCache.over=1}else if(this.currentContainer!=this.containers[e]){d=1E4;h=null;for(var g=this.positionAbs[this.containers[e].floating?"left":"top"],i=this.items.length-1;i>=0;i--)if(a.ui.contains(this.containers[e].element[0],this.items[i].item[0])){var b=this.items[i][this.containers[e].floating?"left":"top"];if(Math.abs(b-
g)<d){d=Math.abs(b-g);h=this.items[i]}}if(h||this.options.dropOnEmpty){this.currentContainer=this.containers[e];h?this._rearrange(c,h,null,true):this._rearrange(c,null,this.containers[e].element,true);this._trigger("change",c,this._uiHash());this.containers[e]._trigger("change",c,this._uiHash(this));this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[e]._trigger("over",c,this._uiHash(this));this.containers[e].containerCache.over=1}}},_createHelper:function(c){var d=
this.options;c=a.isFunction(d.helper)?a(d.helper.apply(this.element[0],[c,this.currentItem])):d.helper=="clone"?this.currentItem.clone():this.currentItem;c.parents("body").length||a(d.appendTo!="parent"?d.appendTo:this.currentItem[0].parentNode)[0].appendChild(c[0]);if(c[0]==this.currentItem[0])this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")};if(c[0].style.width==
""||d.forceHelperSize)c.width(this.currentItem.width());if(c[0].style.height==""||d.forceHelperSize)c.height(this.currentItem.height());return c},_adjustOffsetFromHelper:function(c){if(typeof c=="string")c=c.split(" ");if(a.isArray(c))c={left:+c[0],top:+c[1]||0};if("left"in c)this.offset.click.left=c.left+this.margins.left;if("right"in c)this.offset.click.left=this.helperProportions.width-c.right+this.margins.left;if("top"in c)this.offset.click.top=c.top+this.margins.top;if("bottom"in c)this.offset.click.top=
this.helperProportions.height-c.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var c=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])){c.left+=this.scrollParent.scrollLeft();c.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)c=
{top:0,left:0};return{top:c.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:c.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var c=this.currentItem.position();return{top:c.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:c.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),
10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var c=this.options;if(c.containment=="parent")c.containment=this.helper[0].parentNode;if(c.containment=="document"||c.containment=="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(c.containment=="document"?
document:window).width()-this.helperProportions.width-this.margins.left,(a(c.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(c.containment)){var d=a(c.containment)[0];c=a(c.containment).offset();var e=a(d).css("overflow")!="hidden";this.containment=[c.left+(parseInt(a(d).css("borderLeftWidth"),10)||0)+(parseInt(a(d).css("paddingLeft"),10)||0)-this.margins.left,c.top+(parseInt(a(d).css("borderTopWidth"),
10)||0)+(parseInt(a(d).css("paddingTop"),10)||0)-this.margins.top,c.left+(e?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(a(d).css("borderLeftWidth"),10)||0)-(parseInt(a(d).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,c.top+(e?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(a(d).css("borderTopWidth"),10)||0)-(parseInt(a(d).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(c,d){if(!d)d=
this.position;c=c=="absolute"?1:-1;var e=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,h=/(html|body)/i.test(e[0].tagName);return{top:d.top+this.offset.relative.top*c+this.offset.parent.top*c-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():h?0:e.scrollTop())*c),left:d.left+this.offset.relative.left*c+this.offset.parent.left*c-(a.browser.safari&&
this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():h?0:e.scrollLeft())*c)}},_generatePosition:function(c){var d=this.options,e=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,h=/(html|body)/i.test(e[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0]))this.offset.relative=this._getRelativeOffset();
var g=c.pageX,i=c.pageY;if(this.originalPosition){if(this.containment){if(c.pageX-this.offset.click.left<this.containment[0])g=this.containment[0]+this.offset.click.left;if(c.pageY-this.offset.click.top<this.containment[1])i=this.containment[1]+this.offset.click.top;if(c.pageX-this.offset.click.left>this.containment[2])g=this.containment[2]+this.offset.click.left;if(c.pageY-this.offset.click.top>this.containment[3])i=this.containment[3]+this.offset.click.top}if(d.grid){i=this.originalPageY+Math.round((i-
this.originalPageY)/d.grid[1])*d.grid[1];i=this.containment?!(i-this.offset.click.top<this.containment[1]||i-this.offset.click.top>this.containment[3])?i:!(i-this.offset.click.top<this.containment[1])?i-d.grid[1]:i+d.grid[1]:i;g=this.originalPageX+Math.round((g-this.originalPageX)/d.grid[0])*d.grid[0];g=this.containment?!(g-this.offset.click.left<this.containment[0]||g-this.offset.click.left>this.containment[2])?g:!(g-this.offset.click.left<this.containment[0])?g-d.grid[0]:g+d.grid[0]:g}}return{top:i-
this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():h?0:e.scrollTop()),left:g-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():h?0:e.scrollLeft())}},_rearrange:function(c,d,e,h){e?e[0].appendChild(this.placeholder[0]):d.item[0].parentNode.insertBefore(this.placeholder[0],
this.direction=="down"?d.item[0]:d.item[0].nextSibling);this.counter=this.counter?++this.counter:1;var g=this,i=this.counter;window.setTimeout(function(){i==g.counter&&g.refreshPositions(!h)},0)},_clear:function(c,d){this.reverting=false;var e=[];!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem);this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var h in this._storedCSS)if(this._storedCSS[h]=="auto"||this._storedCSS[h]=="static")this._storedCSS[h]=
"";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();this.fromOutside&&!d&&e.push(function(g){this._trigger("receive",g,this._uiHash(this.fromOutside))});if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!d)e.push(function(g){this._trigger("update",g,this._uiHash())});if(!a.ui.contains(this.element[0],this.currentItem[0])){d||e.push(function(g){this._trigger("remove",
g,this._uiHash())});for(h=this.containers.length-1;h>=0;h--)if(a.ui.contains(this.containers[h].element[0],this.currentItem[0])&&!d){e.push(function(g){return function(i){g._trigger("receive",i,this._uiHash(this))}}.call(this,this.containers[h]));e.push(function(g){return function(i){g._trigger("update",i,this._uiHash(this))}}.call(this,this.containers[h]))}}for(h=this.containers.length-1;h>=0;h--){d||e.push(function(g){return function(i){g._trigger("deactivate",i,this._uiHash(this))}}.call(this,
this.containers[h]));if(this.containers[h].containerCache.over){e.push(function(g){return function(i){g._trigger("out",i,this._uiHash(this))}}.call(this,this.containers[h]));this.containers[h].containerCache.over=0}}this._storedCursor&&a("body").css("cursor",this._storedCursor);this._storedOpacity&&this.helper.css("opacity",this._storedOpacity);if(this._storedZIndex)this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex);this.dragging=false;if(this.cancelHelperRemoval){if(!d){this._trigger("beforeStop",
c,this._uiHash());for(h=0;h<e.length;h++)e[h].call(this,c);this._trigger("stop",c,this._uiHash())}return false}d||this._trigger("beforeStop",c,this._uiHash());this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.helper[0]!=this.currentItem[0]&&this.helper.remove();this.helper=null;if(!d){for(h=0;h<e.length;h++)e[h].call(this,c);this._trigger("stop",c,this._uiHash())}this.fromOutside=false;return true},_trigger:function(){a.Widget.prototype._trigger.apply(this,arguments)===false&&this.cancel()},
_uiHash:function(c){var d=c||this;return{helper:d.helper,placeholder:d.placeholder||a([]),position:d.position,originalPosition:d.originalPosition,offset:d.positionAbs,item:d.currentItem,sender:c?c.element:null}}});a.extend(a.ui.sortable,{version:"1.8.15"})})(jQuery);
jQuery.effects||function(a,c){function d(n){var k;if(n&&n.constructor==Array&&n.length==3)return n;if(k=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(n))return[parseInt(k[1],10),parseInt(k[2],10),parseInt(k[3],10)];if(k=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(n))return[parseFloat(k[1])*2.55,parseFloat(k[2])*2.55,parseFloat(k[3])*2.55];if(k=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(n))return[parseInt(k[1],
16),parseInt(k[2],16),parseInt(k[3],16)];if(k=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(n))return[parseInt(k[1]+k[1],16),parseInt(k[2]+k[2],16),parseInt(k[3]+k[3],16)];if(/rgba\(0, 0, 0, 0\)/.exec(n))return j.transparent;return j[a.trim(n).toLowerCase()]}function e(n,k){var m;do{m=a.curCSS(n,k);if(m!=""&&m!="transparent"||a.nodeName(n,"body"))break;k="backgroundColor"}while(n=n.parentNode);return d(m)}function h(){var n=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,
k={},m,p;if(n&&n.length&&n[0]&&n[n[0]])for(var q=n.length;q--;){m=n[q];if(typeof n[m]=="string"){p=m.replace(/\-(\w)/g,function(s,r){return r.toUpperCase()});k[p]=n[m]}}else for(m in n)if(typeof n[m]==="string")k[m]=n[m];return k}function g(n){var k,m;for(k in n){m=n[k];if(m==null||a.isFunction(m)||k in o||/scrollbar/.test(k)||!/color/i.test(k)&&isNaN(parseFloat(m)))delete n[k]}return n}function i(n,k){var m={_:0},p;for(p in k)if(n[p]!=k[p])m[p]=k[p];return m}function b(n,k,m,p){if(typeof n=="object"){p=
k;m=null;k=n;n=k.effect}if(a.isFunction(k)){p=k;m=null;k={}}if(typeof k=="number"||a.fx.speeds[k]){p=m;m=k;k={}}if(a.isFunction(m)){p=m;m=null}k=k||{};m=m||k.duration;m=a.fx.off?0:typeof m=="number"?m:m in a.fx.speeds?a.fx.speeds[m]:a.fx.speeds._default;p=p||k.complete;return[n,k,m,p]}function f(n){if(!n||typeof n==="number"||a.fx.speeds[n])return true;if(typeof n==="string"&&!a.effects[n])return true;return false}a.effects={};a.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor",
"borderTopColor","borderColor","color","outlineColor"],function(n,k){a.fx.step[k]=function(m){if(!m.colorInit){m.start=e(m.elem,k);m.end=d(m.end);m.colorInit=true}m.elem.style[k]="rgb("+Math.max(Math.min(parseInt(m.pos*(m.end[0]-m.start[0])+m.start[0],10),255),0)+","+Math.max(Math.min(parseInt(m.pos*(m.end[1]-m.start[1])+m.start[1],10),255),0)+","+Math.max(Math.min(parseInt(m.pos*(m.end[2]-m.start[2])+m.start[2],10),255),0)+")"}});var j={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,
0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,
211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},l=["add","remove","toggle"],o={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};a.effects.animateClass=function(n,k,m,
p){if(a.isFunction(m)){p=m;m=null}return this.queue(function(){var q=a(this),s=q.attr("style")||" ",r=g(h.call(this)),u,v=q.attr("class");a.each(l,function(w,x){n[x]&&q[x+"Class"](n[x])});u=g(h.call(this));q.attr("class",v);q.animate(i(r,u),{queue:false,duration:k,easing:m,complete:function(){a.each(l,function(w,x){n[x]&&q[x+"Class"](n[x])});if(typeof q.attr("style")=="object"){q.attr("style").cssText="";q.attr("style").cssText=s}else q.attr("style",s);p&&p.apply(this,arguments);a.dequeue(this)}})})};
a.fn.extend({_addClass:a.fn.addClass,addClass:function(n,k,m,p){return k?a.effects.animateClass.apply(this,[{add:n},k,m,p]):this._addClass(n)},_removeClass:a.fn.removeClass,removeClass:function(n,k,m,p){return k?a.effects.animateClass.apply(this,[{remove:n},k,m,p]):this._removeClass(n)},_toggleClass:a.fn.toggleClass,toggleClass:function(n,k,m,p,q){return typeof k=="boolean"||k===c?m?a.effects.animateClass.apply(this,[k?{add:n}:{remove:n},m,p,q]):this._toggleClass(n,k):a.effects.animateClass.apply(this,
[{toggle:n},k,m,p])},switchClass:function(n,k,m,p,q){return a.effects.animateClass.apply(this,[{add:k,remove:n},m,p,q])}});a.extend(a.effects,{version:"1.8.15",save:function(n,k){for(var m=0;m<k.length;m++)k[m]!==null&&n.data("ec.storage."+k[m],n[0].style[k[m]])},restore:function(n,k){for(var m=0;m<k.length;m++)k[m]!==null&&n.css(k[m],n.data("ec.storage."+k[m]))},setMode:function(n,k){if(k=="toggle")k=n.is(":hidden")?"show":"hide";return k},getBaseline:function(n,k){var m;switch(n[0]){case "top":m=
0;break;case "middle":m=0.5;break;case "bottom":m=1;break;default:m=n[0]/k.height}switch(n[1]){case "left":n=0;break;case "center":n=0.5;break;case "right":n=1;break;default:n=n[1]/k.width}return{x:n,y:m}},createWrapper:function(n){if(n.parent().is(".ui-effects-wrapper"))return n.parent();var k={width:n.outerWidth(true),height:n.outerHeight(true),"float":n.css("float")},m=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0});
n.wrap(m);m=n.parent();if(n.css("position")=="static"){m.css({position:"relative"});n.css({position:"relative"})}else{a.extend(k,{position:n.css("position"),zIndex:n.css("z-index")});a.each(["top","left","bottom","right"],function(p,q){k[q]=n.css(q);if(isNaN(parseInt(k[q],10)))k[q]="auto"});n.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}return m.css(k).show()},removeWrapper:function(n){if(n.parent().is(".ui-effects-wrapper"))return n.parent().replaceWith(n);return n},setTransition:function(n,
k,m,p){p=p||{};a.each(k,function(q,s){unit=n.cssUnit(s);if(unit[0]>0)p[s]=unit[0]*m+unit[1]});return p}});a.fn.extend({effect:function(n){var k=b.apply(this,arguments),m={options:k[1],duration:k[2],callback:k[3]};k=m.options.mode;var p=a.effects[n];if(a.fx.off||!p)return k?this[k](m.duration,m.callback):this.each(function(){m.callback&&m.callback.call(this)});return p.call(this,m)},_show:a.fn.show,show:function(n){if(f(n))return this._show.apply(this,arguments);else{var k=b.apply(this,arguments);
k[1].mode="show";return this.effect.apply(this,k)}},_hide:a.fn.hide,hide:function(n){if(f(n))return this._hide.apply(this,arguments);else{var k=b.apply(this,arguments);k[1].mode="hide";return this.effect.apply(this,k)}},__toggle:a.fn.toggle,toggle:function(n){if(f(n)||typeof n==="boolean"||a.isFunction(n))return this.__toggle.apply(this,arguments);else{var k=b.apply(this,arguments);k[1].mode="toggle";return this.effect.apply(this,k)}},cssUnit:function(n){var k=this.css(n),m=[];a.each(["em","px","%",
"pt"],function(p,q){if(k.indexOf(q)>0)m=[parseFloat(k),q]});return m}});a.easing.jswing=a.easing.swing;a.extend(a.easing,{def:"easeOutQuad",swing:function(n,k,m,p,q){return a.easing[a.easing.def](n,k,m,p,q)},easeInQuad:function(n,k,m,p,q){return p*(k/=q)*k+m},easeOutQuad:function(n,k,m,p,q){return-p*(k/=q)*(k-2)+m},easeInOutQuad:function(n,k,m,p,q){if((k/=q/2)<1)return p/2*k*k+m;return-p/2*(--k*(k-2)-1)+m},easeInCubic:function(n,k,m,p,q){return p*(k/=q)*k*k+m},easeOutCubic:function(n,k,m,p,q){return p*
((k=k/q-1)*k*k+1)+m},easeInOutCubic:function(n,k,m,p,q){if((k/=q/2)<1)return p/2*k*k*k+m;return p/2*((k-=2)*k*k+2)+m},easeInQuart:function(n,k,m,p,q){return p*(k/=q)*k*k*k+m},easeOutQuart:function(n,k,m,p,q){return-p*((k=k/q-1)*k*k*k-1)+m},easeInOutQuart:function(n,k,m,p,q){if((k/=q/2)<1)return p/2*k*k*k*k+m;return-p/2*((k-=2)*k*k*k-2)+m},easeInQuint:function(n,k,m,p,q){return p*(k/=q)*k*k*k*k+m},easeOutQuint:function(n,k,m,p,q){return p*((k=k/q-1)*k*k*k*k+1)+m},easeInOutQuint:function(n,k,m,p,q){if((k/=
q/2)<1)return p/2*k*k*k*k*k+m;return p/2*((k-=2)*k*k*k*k+2)+m},easeInSine:function(n,k,m,p,q){return-p*Math.cos(k/q*(Math.PI/2))+p+m},easeOutSine:function(n,k,m,p,q){return p*Math.sin(k/q*(Math.PI/2))+m},easeInOutSine:function(n,k,m,p,q){return-p/2*(Math.cos(Math.PI*k/q)-1)+m},easeInExpo:function(n,k,m,p,q){return k==0?m:p*Math.pow(2,10*(k/q-1))+m},easeOutExpo:function(n,k,m,p,q){return k==q?m+p:p*(-Math.pow(2,-10*k/q)+1)+m},easeInOutExpo:function(n,k,m,p,q){if(k==0)return m;if(k==q)return m+p;if((k/=
q/2)<1)return p/2*Math.pow(2,10*(k-1))+m;return p/2*(-Math.pow(2,-10*--k)+2)+m},easeInCirc:function(n,k,m,p,q){return-p*(Math.sqrt(1-(k/=q)*k)-1)+m},easeOutCirc:function(n,k,m,p,q){return p*Math.sqrt(1-(k=k/q-1)*k)+m},easeInOutCirc:function(n,k,m,p,q){if((k/=q/2)<1)return-p/2*(Math.sqrt(1-k*k)-1)+m;return p/2*(Math.sqrt(1-(k-=2)*k)+1)+m},easeInElastic:function(n,k,m,p,q){n=1.70158;var s=0,r=p;if(k==0)return m;if((k/=q)==1)return m+p;s||(s=q*0.3);if(r<Math.abs(p)){r=p;n=s/4}else n=s/(2*Math.PI)*Math.asin(p/
r);return-(r*Math.pow(2,10*(k-=1))*Math.sin((k*q-n)*2*Math.PI/s))+m},easeOutElastic:function(n,k,m,p,q){n=1.70158;var s=0,r=p;if(k==0)return m;if((k/=q)==1)return m+p;s||(s=q*0.3);if(r<Math.abs(p)){r=p;n=s/4}else n=s/(2*Math.PI)*Math.asin(p/r);return r*Math.pow(2,-10*k)*Math.sin((k*q-n)*2*Math.PI/s)+p+m},easeInOutElastic:function(n,k,m,p,q){n=1.70158;var s=0,r=p;if(k==0)return m;if((k/=q/2)==2)return m+p;s||(s=q*0.3*1.5);if(r<Math.abs(p)){r=p;n=s/4}else n=s/(2*Math.PI)*Math.asin(p/r);if(k<1)return-0.5*
r*Math.pow(2,10*(k-=1))*Math.sin((k*q-n)*2*Math.PI/s)+m;return r*Math.pow(2,-10*(k-=1))*Math.sin((k*q-n)*2*Math.PI/s)*0.5+p+m},easeInBack:function(n,k,m,p,q,s){if(s==c)s=1.70158;return p*(k/=q)*k*((s+1)*k-s)+m},easeOutBack:function(n,k,m,p,q,s){if(s==c)s=1.70158;return p*((k=k/q-1)*k*((s+1)*k+s)+1)+m},easeInOutBack:function(n,k,m,p,q,s){if(s==c)s=1.70158;if((k/=q/2)<1)return p/2*k*k*(((s*=1.525)+1)*k-s)+m;return p/2*((k-=2)*k*(((s*=1.525)+1)*k+s)+2)+m},easeInBounce:function(n,k,m,p,q){return p-a.easing.easeOutBounce(n,
q-k,0,p,q)+m},easeOutBounce:function(n,k,m,p,q){return(k/=q)<1/2.75?p*7.5625*k*k+m:k<2/2.75?p*(7.5625*(k-=1.5/2.75)*k+0.75)+m:k<2.5/2.75?p*(7.5625*(k-=2.25/2.75)*k+0.9375)+m:p*(7.5625*(k-=2.625/2.75)*k+0.984375)+m},easeInOutBounce:function(n,k,m,p,q){if(k<q/2)return a.easing.easeInBounce(n,k*2,0,p,q)*0.5+m;return a.easing.easeOutBounce(n,k*2-q,0,p,q)*0.5+p*0.5+m}})}(jQuery);
(function(a){a.effects.blind=function(c){return this.queue(function(){var d=a(this),e=["position","top","bottom","left","right"],h=a.effects.setMode(d,c.options.mode||"hide"),g=c.options.direction||"vertical";a.effects.save(d,e);d.show();var i=a.effects.createWrapper(d).css({overflow:"hidden"}),b=g=="vertical"?"height":"width";g=g=="vertical"?i.height():i.width();h=="show"&&i.css(b,0);var f={};f[b]=h=="show"?g:0;i.animate(f,c.duration,c.options.easing,function(){h=="hide"&&d.hide();a.effects.restore(d,
e);a.effects.removeWrapper(d);c.callback&&c.callback.apply(d[0],arguments);d.dequeue()})})}})(jQuery);
(function(a){a.effects.bounce=function(c){return this.queue(function(){var d=a(this),e=["position","top","bottom","left","right"],h=a.effects.setMode(d,c.options.mode||"effect"),g=c.options.direction||"up",i=c.options.distance||20,b=c.options.times||5,f=c.duration||250;/show|hide/.test(h)&&e.push("opacity");a.effects.save(d,e);d.show();a.effects.createWrapper(d);var j=g=="up"||g=="down"?"top":"left";g=g=="up"||g=="left"?"pos":"neg";i=c.options.distance||(j=="top"?d.outerHeight({margin:true})/3:d.outerWidth({margin:true})/
3);if(h=="show")d.css("opacity",0).css(j,g=="pos"?-i:i);if(h=="hide")i/=b*2;h!="hide"&&b--;if(h=="show"){var l={opacity:1};l[j]=(g=="pos"?"+=":"-=")+i;d.animate(l,f/2,c.options.easing);i/=2;b--}for(l=0;l<b;l++){var o={},n={};o[j]=(g=="pos"?"-=":"+=")+i;n[j]=(g=="pos"?"+=":"-=")+i;d.animate(o,f/2,c.options.easing).animate(n,f/2,c.options.easing);i=h=="hide"?i*2:i/2}if(h=="hide"){l={opacity:0};l[j]=(g=="pos"?"-=":"+=")+i;d.animate(l,f/2,c.options.easing,function(){d.hide();a.effects.restore(d,e);a.effects.removeWrapper(d);
c.callback&&c.callback.apply(this,arguments)})}else{o={};n={};o[j]=(g=="pos"?"-=":"+=")+i;n[j]=(g=="pos"?"+=":"-=")+i;d.animate(o,f/2,c.options.easing).animate(n,f/2,c.options.easing,function(){a.effects.restore(d,e);a.effects.removeWrapper(d);c.callback&&c.callback.apply(this,arguments)})}d.queue("fx",function(){d.dequeue()});d.dequeue()})}})(jQuery);
(function(a){a.effects.clip=function(c){return this.queue(function(){var d=a(this),e=["position","top","bottom","left","right","height","width"],h=a.effects.setMode(d,c.options.mode||"hide"),g=c.options.direction||"vertical";a.effects.save(d,e);d.show();var i=a.effects.createWrapper(d).css({overflow:"hidden"});i=d[0].tagName=="IMG"?i:d;var b={size:g=="vertical"?"height":"width",position:g=="vertical"?"top":"left"};g=g=="vertical"?i.height():i.width();if(h=="show"){i.css(b.size,0);i.css(b.position,
g/2)}var f={};f[b.size]=h=="show"?g:0;f[b.position]=h=="show"?0:g/2;i.animate(f,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){h=="hide"&&d.hide();a.effects.restore(d,e);a.effects.removeWrapper(d);c.callback&&c.callback.apply(d[0],arguments);d.dequeue()}})})}})(jQuery);
(function(a){a.effects.drop=function(c){return this.queue(function(){var d=a(this),e=["position","top","bottom","left","right","opacity"],h=a.effects.setMode(d,c.options.mode||"hide"),g=c.options.direction||"left";a.effects.save(d,e);d.show();a.effects.createWrapper(d);var i=g=="up"||g=="down"?"top":"left";g=g=="up"||g=="left"?"pos":"neg";var b=c.options.distance||(i=="top"?d.outerHeight({margin:true})/2:d.outerWidth({margin:true})/2);if(h=="show")d.css("opacity",0).css(i,g=="pos"?-b:b);var f={opacity:h==
"show"?1:0};f[i]=(h=="show"?g=="pos"?"+=":"-=":g=="pos"?"-=":"+=")+b;d.animate(f,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){h=="hide"&&d.hide();a.effects.restore(d,e);a.effects.removeWrapper(d);c.callback&&c.callback.apply(this,arguments);d.dequeue()}})})}})(jQuery);
(function(a){a.effects.explode=function(c){return this.queue(function(){var d=c.options.pieces?Math.round(Math.sqrt(c.options.pieces)):3,e=c.options.pieces?Math.round(Math.sqrt(c.options.pieces)):3;c.options.mode=c.options.mode=="toggle"?a(this).is(":visible")?"hide":"show":c.options.mode;var h=a(this).show().css("visibility","hidden"),g=h.offset();g.top-=parseInt(h.css("marginTop"),10)||0;g.left-=parseInt(h.css("marginLeft"),10)||0;for(var i=h.outerWidth(true),b=h.outerHeight(true),f=0;f<d;f++)for(var j=
0;j<e;j++)h.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-j*(i/e),top:-f*(b/d)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:i/e,height:b/d,left:g.left+j*(i/e)+(c.options.mode=="show"?(j-Math.floor(e/2))*(i/e):0),top:g.top+f*(b/d)+(c.options.mode=="show"?(f-Math.floor(d/2))*(b/d):0),opacity:c.options.mode=="show"?0:1}).animate({left:g.left+j*(i/e)+(c.options.mode=="show"?0:(j-Math.floor(e/2))*(i/e)),top:g.top+
f*(b/d)+(c.options.mode=="show"?0:(f-Math.floor(d/2))*(b/d)),opacity:c.options.mode=="show"?1:0},c.duration||500);setTimeout(function(){c.options.mode=="show"?h.css({visibility:"visible"}):h.css({visibility:"visible"}).hide();c.callback&&c.callback.apply(h[0]);h.dequeue();a("div.ui-effects-explode").remove()},c.duration||500)})}})(jQuery);
(function(a){a.effects.fade=function(c){return this.queue(function(){var d=a(this),e=a.effects.setMode(d,c.options.mode||"hide");d.animate({opacity:e},{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){c.callback&&c.callback.apply(this,arguments);d.dequeue()}})})}})(jQuery);
(function(a){a.effects.fold=function(c){return this.queue(function(){var d=a(this),e=["position","top","bottom","left","right"],h=a.effects.setMode(d,c.options.mode||"hide"),g=c.options.size||15,i=!!c.options.horizFirst,b=c.duration?c.duration/2:a.fx.speeds._default/2;a.effects.save(d,e);d.show();var f=a.effects.createWrapper(d).css({overflow:"hidden"}),j=h=="show"!=i,l=j?["width","height"]:["height","width"];j=j?[f.width(),f.height()]:[f.height(),f.width()];var o=/([0-9]+)%/.exec(g);if(o)g=parseInt(o[1],
10)/100*j[h=="hide"?0:1];if(h=="show")f.css(i?{height:0,width:g}:{height:g,width:0});i={};o={};i[l[0]]=h=="show"?j[0]:g;o[l[1]]=h=="show"?j[1]:0;f.animate(i,b,c.options.easing).animate(o,b,c.options.easing,function(){h=="hide"&&d.hide();a.effects.restore(d,e);a.effects.removeWrapper(d);c.callback&&c.callback.apply(d[0],arguments);d.dequeue()})})}})(jQuery);
(function(a){a.effects.highlight=function(c){return this.queue(function(){var d=a(this),e=["backgroundImage","backgroundColor","opacity"],h=a.effects.setMode(d,c.options.mode||"show"),g={backgroundColor:d.css("backgroundColor")};if(h=="hide")g.opacity=0;a.effects.save(d,e);d.show().css({backgroundImage:"none",backgroundColor:c.options.color||"#ffff99"}).animate(g,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){h=="hide"&&d.hide();a.effects.restore(d,e);h=="show"&&!a.support.opacity&&
this.style.removeAttribute("filter");c.callback&&c.callback.apply(this,arguments);d.dequeue()}})})}})(jQuery);
(function(a){a.effects.pulsate=function(c){return this.queue(function(){var d=a(this),e=a.effects.setMode(d,c.options.mode||"show");times=(c.options.times||5)*2-1;duration=c.duration?c.duration/2:a.fx.speeds._default/2;isVisible=d.is(":visible");animateTo=0;if(!isVisible){d.css("opacity",0).show();animateTo=1}if(e=="hide"&&isVisible||e=="show"&&!isVisible)times--;for(e=0;e<times;e++){d.animate({opacity:animateTo},duration,c.options.easing);animateTo=(animateTo+1)%2}d.animate({opacity:animateTo},duration,
c.options.easing,function(){animateTo==0&&d.hide();c.callback&&c.callback.apply(this,arguments)});d.queue("fx",function(){d.dequeue()}).dequeue()})}})(jQuery);
(function(a){a.effects.puff=function(c){return this.queue(function(){var d=a(this),e=a.effects.setMode(d,c.options.mode||"hide"),h=parseInt(c.options.percent,10)||150,g=h/100,i={height:d.height(),width:d.width()};a.extend(c.options,{fade:true,mode:e,percent:e=="hide"?h:100,from:e=="hide"?i:{height:i.height*g,width:i.width*g}});d.effect("scale",c.options,c.duration,c.callback);d.dequeue()})};a.effects.scale=function(c){return this.queue(function(){var d=a(this),e=a.extend(true,{},c.options),h=a.effects.setMode(d,
c.options.mode||"effect"),g=parseInt(c.options.percent,10)||(parseInt(c.options.percent,10)==0?0:h=="hide"?0:100),i=c.options.direction||"both",b=c.options.origin;if(h!="effect"){e.origin=b||["middle","center"];e.restore=true}b={height:d.height(),width:d.width()};d.from=c.options.from||(h=="show"?{height:0,width:0}:b);g={y:i!="horizontal"?g/100:1,x:i!="vertical"?g/100:1};d.to={height:b.height*g.y,width:b.width*g.x};if(c.options.fade){if(h=="show"){d.from.opacity=0;d.to.opacity=1}if(h=="hide"){d.from.opacity=
1;d.to.opacity=0}}e.from=d.from;e.to=d.to;e.mode=h;d.effect("size",e,c.duration,c.callback);d.dequeue()})};a.effects.size=function(c){return this.queue(function(){var d=a(this),e=["position","top","bottom","left","right","width","height","overflow","opacity"],h=["position","top","bottom","left","right","overflow","opacity"],g=["width","height","overflow"],i=["fontSize"],b=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],f=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],
j=a.effects.setMode(d,c.options.mode||"effect"),l=c.options.restore||false,o=c.options.scale||"both",n=c.options.origin,k={height:d.height(),width:d.width()};d.from=c.options.from||k;d.to=c.options.to||k;if(n){n=a.effects.getBaseline(n,k);d.from.top=(k.height-d.from.height)*n.y;d.from.left=(k.width-d.from.width)*n.x;d.to.top=(k.height-d.to.height)*n.y;d.to.left=(k.width-d.to.width)*n.x}var m={from:{y:d.from.height/k.height,x:d.from.width/k.width},to:{y:d.to.height/k.height,x:d.to.width/k.width}};
if(o=="box"||o=="both"){if(m.from.y!=m.to.y){e=e.concat(b);d.from=a.effects.setTransition(d,b,m.from.y,d.from);d.to=a.effects.setTransition(d,b,m.to.y,d.to)}if(m.from.x!=m.to.x){e=e.concat(f);d.from=a.effects.setTransition(d,f,m.from.x,d.from);d.to=a.effects.setTransition(d,f,m.to.x,d.to)}}if(o=="content"||o=="both")if(m.from.y!=m.to.y){e=e.concat(i);d.from=a.effects.setTransition(d,i,m.from.y,d.from);d.to=a.effects.setTransition(d,i,m.to.y,d.to)}a.effects.save(d,l?e:h);d.show();a.effects.createWrapper(d);
d.css("overflow","hidden").css(d.from);if(o=="content"||o=="both"){b=b.concat(["marginTop","marginBottom"]).concat(i);f=f.concat(["marginLeft","marginRight"]);g=e.concat(b).concat(f);d.find("*[width]").each(function(){child=a(this);l&&a.effects.save(child,g);var p={height:child.height(),width:child.width()};child.from={height:p.height*m.from.y,width:p.width*m.from.x};child.to={height:p.height*m.to.y,width:p.width*m.to.x};if(m.from.y!=m.to.y){child.from=a.effects.setTransition(child,b,m.from.y,child.from);
child.to=a.effects.setTransition(child,b,m.to.y,child.to)}if(m.from.x!=m.to.x){child.from=a.effects.setTransition(child,f,m.from.x,child.from);child.to=a.effects.setTransition(child,f,m.to.x,child.to)}child.css(child.from);child.animate(child.to,c.duration,c.options.easing,function(){l&&a.effects.restore(child,g)})})}d.animate(d.to,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){d.to.opacity===0&&d.css("opacity",d.from.opacity);j=="hide"&&d.hide();a.effects.restore(d,
l?e:h);a.effects.removeWrapper(d);c.callback&&c.callback.apply(this,arguments);d.dequeue()}})})}})(jQuery);
(function(a){a.effects.shake=function(c){return this.queue(function(){var d=a(this),e=["position","top","bottom","left","right"];a.effects.setMode(d,c.options.mode||"effect");var h=c.options.direction||"left",g=c.options.distance||20,i=c.options.times||3,b=c.duration||c.options.duration||140;a.effects.save(d,e);d.show();a.effects.createWrapper(d);var f=h=="up"||h=="down"?"top":"left",j=h=="up"||h=="left"?"pos":"neg";h={};var l={},o={};h[f]=(j=="pos"?"-=":"+=")+g;l[f]=(j=="pos"?"+=":"-=")+g*2;o[f]=
(j=="pos"?"-=":"+=")+g*2;d.animate(h,b,c.options.easing);for(g=1;g<i;g++)d.animate(l,b,c.options.easing).animate(o,b,c.options.easing);d.animate(l,b,c.options.easing).animate(h,b/2,c.options.easing,function(){a.effects.restore(d,e);a.effects.removeWrapper(d);c.callback&&c.callback.apply(this,arguments)});d.queue("fx",function(){d.dequeue()});d.dequeue()})}})(jQuery);
(function(a){a.effects.slide=function(c){return this.queue(function(){var d=a(this),e=["position","top","bottom","left","right"],h=a.effects.setMode(d,c.options.mode||"show"),g=c.options.direction||"left";a.effects.save(d,e);d.show();a.effects.createWrapper(d).css({overflow:"hidden"});var i=g=="up"||g=="down"?"top":"left";g=g=="up"||g=="left"?"pos":"neg";var b=c.options.distance||(i=="top"?d.outerHeight({margin:true}):d.outerWidth({margin:true}));if(h=="show")d.css(i,g=="pos"?isNaN(b)?"-"+b:-b:b);
var f={};f[i]=(h=="show"?g=="pos"?"+=":"-=":g=="pos"?"-=":"+=")+b;d.animate(f,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){h=="hide"&&d.hide();a.effects.restore(d,e);a.effects.removeWrapper(d);c.callback&&c.callback.apply(this,arguments);d.dequeue()}})})}})(jQuery);
(function(a){a.effects.transfer=function(c){return this.queue(function(){var d=a(this),e=a(c.options.to),h=e.offset();e={top:h.top,left:h.left,height:e.innerHeight(),width:e.innerWidth()};h=d.offset();var g=a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(c.options.className).css({top:h.top,left:h.left,height:d.innerHeight(),width:d.innerWidth(),position:"absolute"}).animate(e,c.duration,c.options.easing,function(){g.remove();c.callback&&c.callback.apply(d[0],arguments);
d.dequeue()})})}})(jQuery);
(function(a){a.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:true,clearStyle:false,collapsible:false,event:"click",fillSpace:false,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:false,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}},_create:function(){var c=this,d=c.options;c.running=0;c.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix");c.headers=
c.element.find(d.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){d.disabled||a(this).addClass("ui-state-hover")}).bind("mouseleave.accordion",function(){d.disabled||a(this).removeClass("ui-state-hover")}).bind("focus.accordion",function(){d.disabled||a(this).addClass("ui-state-focus")}).bind("blur.accordion",function(){d.disabled||a(this).removeClass("ui-state-focus")});c.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
if(d.navigation){var e=c.element.find("a").filter(d.navigationFilter).eq(0);if(e.length){var h=e.closest(".ui-accordion-header");c.active=h.length?h:e.closest(".ui-accordion-content").prev()}}c.active=c._findActive(c.active||d.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");c.active.next().addClass("ui-accordion-content-active");c._createIcons();c.resize();c.element.attr("role","tablist");c.headers.attr("role","tab").bind("keydown.accordion",
function(g){return c._keydown(g)}).next().attr("role","tabpanel");c.headers.not(c.active||"").attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).next().hide();c.active.length?c.active.attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}):c.headers.eq(0).attr("tabIndex",0);a.browser.safari||c.headers.find("a").attr("tabIndex",-1);d.event&&c.headers.bind(d.event.split(" ").join(".accordion ")+".accordion",function(g){c._clickHandler.call(c,g,this);g.preventDefault()})},_createIcons:function(){var c=
this.options;if(c.icons){a("<span></span>").addClass("ui-icon "+c.icons.header).prependTo(this.headers);this.active.children(".ui-icon").toggleClass(c.icons.header).toggleClass(c.icons.headerSelected);this.element.addClass("ui-accordion-icons")}},_destroyIcons:function(){this.headers.children(".ui-icon").remove();this.element.removeClass("ui-accordion-icons")},destroy:function(){var c=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex");
this.headers.find("a").removeAttr("tabIndex");this._destroyIcons();var d=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");if(c.autoHeight||c.fillHeight)d.css("height","");return a.Widget.prototype.destroy.call(this)},_setOption:function(c,d){a.Widget.prototype._setOption.apply(this,arguments);c=="active"&&this.activate(d);if(c=="icons"){this._destroyIcons();
d&&this._createIcons()}if(c=="disabled")this.headers.add(this.headers.next())[d?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled")},_keydown:function(c){if(!(this.options.disabled||c.altKey||c.ctrlKey)){var d=a.ui.keyCode,e=this.headers.length,h=this.headers.index(c.target),g=false;switch(c.keyCode){case d.RIGHT:case d.DOWN:g=this.headers[(h+1)%e];break;case d.LEFT:case d.UP:g=this.headers[(h-1+e)%e];break;case d.SPACE:case d.ENTER:this._clickHandler({target:c.target},c.target);
c.preventDefault()}if(g){a(c.target).attr("tabIndex",-1);a(g).attr("tabIndex",0);g.focus();return false}return true}},resize:function(){var c=this.options,d;if(c.fillSpace){if(a.browser.msie){var e=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden")}d=this.element.parent().height();a.browser.msie&&this.element.parent().css("overflow",e);this.headers.each(function(){d-=a(this).outerHeight(true)});this.headers.next().each(function(){a(this).height(Math.max(0,d-a(this).innerHeight()+
a(this).height()))}).css("overflow","auto")}else if(c.autoHeight){d=0;this.headers.next().each(function(){d=Math.max(d,a(this).height("").height())}).height(d)}return this},activate:function(c){this.options.active=c;c=this._findActive(c)[0];this._clickHandler({target:c},c);return this},_findActive:function(c){return c?typeof c==="number"?this.headers.filter(":eq("+c+")"):this.headers.not(this.headers.not(c)):c===false?a([]):this.headers.filter(":eq(0)")},_clickHandler:function(c,d){var e=this.options;
if(!e.disabled)if(c.target){c=a(c.currentTarget||d);d=c[0]===this.active[0];e.active=e.collapsible&&d?false:this.headers.index(c);if(!(this.running||!e.collapsible&&d)){var h=this.active;f=c.next();i=this.active.next();b={options:e,newHeader:d&&e.collapsible?a([]):c,oldHeader:this.active,newContent:d&&e.collapsible?a([]):f,oldContent:i};var g=this.headers.index(this.active[0])>this.headers.index(c[0]);this.active=d?a([]):c;this._toggle(f,i,b,d,g);h.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(e.icons.headerSelected).addClass(e.icons.header);
if(!d){c.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(e.icons.header).addClass(e.icons.headerSelected);c.next().addClass("ui-accordion-content-active")}}}else if(e.collapsible){this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(e.icons.headerSelected).addClass(e.icons.header);this.active.next().addClass("ui-accordion-content-active");var i=this.active.next(),
b={options:e,newHeader:a([]),oldHeader:e.active,newContent:a([]),oldContent:i},f=this.active=a([]);this._toggle(f,i,b)}},_toggle:function(c,d,e,h,g){var i=this,b=i.options;i.toShow=c;i.toHide=d;i.data=e;var f=function(){if(i)return i._completed.apply(i,arguments)};i._trigger("changestart",null,i.data);i.running=d.size()===0?c.size():d.size();if(b.animated){e={};e=b.collapsible&&h?{toShow:a([]),toHide:d,complete:f,down:g,autoHeight:b.autoHeight||b.fillSpace}:{toShow:c,toHide:d,complete:f,down:g,autoHeight:b.autoHeight||
b.fillSpace};if(!b.proxied)b.proxied=b.animated;if(!b.proxiedDuration)b.proxiedDuration=b.duration;b.animated=a.isFunction(b.proxied)?b.proxied(e):b.proxied;b.duration=a.isFunction(b.proxiedDuration)?b.proxiedDuration(e):b.proxiedDuration;h=a.ui.accordion.animations;var j=b.duration,l=b.animated;if(l&&!h[l]&&!a.easing[l])l="slide";h[l]||(h[l]=function(o){this.slide(o,{easing:l,duration:j||700})});h[l](e)}else{if(b.collapsible&&h)c.toggle();else{d.hide();c.show()}f(true)}d.prev().attr({"aria-expanded":"false",
"aria-selected":"false",tabIndex:-1}).blur();c.prev().attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}).focus()},_completed:function(c){this.running=c?0:--this.running;if(!this.running){this.options.clearStyle&&this.toShow.add(this.toHide).css({height:"",overflow:""});this.toHide.removeClass("ui-accordion-content-active");if(this.toHide.length)this.toHide.parent()[0].className=this.toHide.parent()[0].className;this._trigger("change",null,this.data)}}});a.extend(a.ui.accordion,{version:"1.8.15",
animations:{slide:function(c,d){c=a.extend({easing:"swing",duration:300},c,d);if(c.toHide.size())if(c.toShow.size()){var e=c.toShow.css("overflow"),h=0,g={},i={},b;d=c.toShow;b=d[0].style.width;d.width(parseInt(d.parent().width(),10)-parseInt(d.css("paddingLeft"),10)-parseInt(d.css("paddingRight"),10)-(parseInt(d.css("borderLeftWidth"),10)||0)-(parseInt(d.css("borderRightWidth"),10)||0));a.each(["height","paddingTop","paddingBottom"],function(f,j){i[j]="hide";f=(""+a.css(c.toShow[0],j)).match(/^([\d+-.]+)(.*)$/);
g[j]={value:f[1],unit:f[2]||"px"}});c.toShow.css({height:0,overflow:"hidden"}).show();c.toHide.filter(":hidden").each(c.complete).end().filter(":visible").animate(i,{step:function(f,j){if(j.prop=="height")h=j.end-j.start===0?0:(j.now-j.start)/(j.end-j.start);c.toShow[0].style[j.prop]=h*g[j.prop].value+g[j.prop].unit},duration:c.duration,easing:c.easing,complete:function(){c.autoHeight||c.toShow.css("height","");c.toShow.css({width:b,overflow:e});c.complete()}})}else c.toHide.animate({height:"hide",
paddingTop:"hide",paddingBottom:"hide"},c);else c.toShow.animate({height:"show",paddingTop:"show",paddingBottom:"show"},c)},bounceslide:function(c){this.slide(c,{easing:c.down?"easeOutBounce":"swing",duration:c.down?1E3:200})}}})})(jQuery);
(function(a){var c=0;a.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var d=this,e=this.element[0].ownerDocument,h;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(g){if(!(d.options.disabled||d.element.propAttr("readOnly"))){h=
false;var i=a.ui.keyCode;switch(g.keyCode){case i.PAGE_UP:d._move("previousPage",g);break;case i.PAGE_DOWN:d._move("nextPage",g);break;case i.UP:d._move("previous",g);g.preventDefault();break;case i.DOWN:d._move("next",g);g.preventDefault();break;case i.ENTER:case i.NUMPAD_ENTER:if(d.menu.active){h=true;g.preventDefault()}case i.TAB:if(!d.menu.active)return;d.menu.select(g);break;case i.ESCAPE:d.element.val(d.term);d.close(g);break;default:clearTimeout(d.searching);d.searching=setTimeout(function(){if(d.term!=
d.element.val()){d.selectedItem=null;d.search(null,g)}},d.options.delay);break}}}).bind("keypress.autocomplete",function(g){if(h){h=false;g.preventDefault()}}).bind("focus.autocomplete",function(){if(!d.options.disabled){d.selectedItem=null;d.previous=d.element.val()}}).bind("blur.autocomplete",function(g){if(!d.options.disabled){clearTimeout(d.searching);d.closing=setTimeout(function(){d.close(g);d._change(g)},150)}});this._initSource();this.response=function(){return d._response.apply(d,arguments)};
this.menu=a("<ul></ul>").addClass("ui-autocomplete").appendTo(a(this.options.appendTo||"body",e)[0]).mousedown(function(g){var i=d.menu.element[0];a(g.target).closest(".ui-menu-item").length||setTimeout(function(){a(document).one("mousedown",function(b){b.target!==d.element[0]&&b.target!==i&&!a.ui.contains(i,b.target)&&d.close()})},1);setTimeout(function(){clearTimeout(d.closing)},13)}).menu({focus:function(g,i){i=i.item.data("item.autocomplete");false!==d._trigger("focus",g,{item:i})&&/^key/.test(g.originalEvent.type)&&
d.element.val(i.value)},selected:function(g,i){var b=i.item.data("item.autocomplete"),f=d.previous;if(d.element[0]!==e.activeElement){d.element.focus();d.previous=f;setTimeout(function(){d.previous=f;d.selectedItem=b},1)}false!==d._trigger("select",g,{item:b})&&d.element.val(b.value);d.term=d.element.val();d.close(g);d.selectedItem=b},blur:function(){d.menu.element.is(":visible")&&d.element.val()!==d.term&&d.element.val(d.term)}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu");
a.fn.bgiframe&&this.menu.element.bgiframe()},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");this.menu.element.remove();a.Widget.prototype.destroy.call(this)},_setOption:function(d,e){a.Widget.prototype._setOption.apply(this,arguments);d==="source"&&this._initSource();if(d==="appendTo")this.menu.element.appendTo(a(e||"body",this.element[0].ownerDocument)[0]);d==="disabled"&&
e&&this.xhr&&this.xhr.abort()},_initSource:function(){var d=this,e,h;if(a.isArray(this.options.source)){e=this.options.source;this.source=function(g,i){i(a.ui.autocomplete.filter(e,g.term))}}else if(typeof this.options.source==="string"){h=this.options.source;this.source=function(g,i){d.xhr&&d.xhr.abort();d.xhr=a.ajax({url:h,data:g,dataType:"json",autocompleteRequest:++c,success:function(b){this.autocompleteRequest===c&&i(b)},error:function(){this.autocompleteRequest===c&&i([])}})}}else this.source=
this.options.source},search:function(d,e){d=d!=null?d:this.element.val();this.term=this.element.val();if(d.length<this.options.minLength)return this.close(e);clearTimeout(this.closing);if(this._trigger("search",e)!==false)return this._search(d)},_search:function(d){this.pending++;this.element.addClass("ui-autocomplete-loading");this.source({term:d},this.response)},_response:function(d){if(!this.options.disabled&&d&&d.length){d=this._normalize(d);this._suggest(d);this._trigger("open")}else this.close();
this.pending--;this.pending||this.element.removeClass("ui-autocomplete-loading")},close:function(d){clearTimeout(this.closing);if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.deactivate();this._trigger("close",d)}},_change:function(d){this.previous!==this.element.val()&&this._trigger("change",d,{item:this.selectedItem})},_normalize:function(d){if(d.length&&d[0].label&&d[0].value)return d;return a.map(d,function(e){if(typeof e==="string")return{label:e,value:e};return a.extend({label:e.label||
e.value,value:e.value||e.label},e)})},_suggest:function(d){var e=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(e,d);this.menu.deactivate();this.menu.refresh();e.show();this._resizeMenu();e.position(a.extend({of:this.element},this.options.position));this.options.autoFocus&&this.menu.next(new a.Event("mouseover"))},_resizeMenu:function(){var d=this.menu.element;d.outerWidth(Math.max(d.width("").outerWidth(),this.element.outerWidth()))},_renderMenu:function(d,e){var h=this;
a.each(e,function(g,i){h._renderItem(d,i)})},_renderItem:function(d,e){return a("<li></li>").data("item.autocomplete",e).append(a("<a></a>").text(e.label)).appendTo(d)},_move:function(d,e){if(this.menu.element.is(":visible"))if(this.menu.first()&&/^previous/.test(d)||this.menu.last()&&/^next/.test(d)){this.element.val(this.term);this.menu.deactivate()}else this.menu[d](e);else this.search(null,e)},widget:function(){return this.menu.element}});a.extend(a.ui.autocomplete,{escapeRegex:function(d){return d.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,
"\\$&")},filter:function(d,e){var h=new RegExp(a.ui.autocomplete.escapeRegex(e),"i");return a.grep(d,function(g){return h.test(g.label||g.value||g)})}})})(jQuery);
(function(a){a.widget("ui.menu",{_create:function(){var c=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(d){if(a(d.target).closest(".ui-menu-item a").length){d.preventDefault();c.select(d)}});this.refresh()},refresh:function(){var c=this;this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem").children("a").addClass("ui-corner-all").attr("tabindex",
-1).mouseenter(function(d){c.activate(d,a(this).parent())}).mouseleave(function(){c.deactivate()})},activate:function(c,d){this.deactivate();if(this.hasScroll()){var e=d.offset().top-this.element.offset().top,h=this.element.scrollTop(),g=this.element.height();if(e<0)this.element.scrollTop(h+e);else e>=g&&this.element.scrollTop(h+e-g+d.height())}this.active=d.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();this._trigger("focus",c,{item:d})},deactivate:function(){if(this.active){this.active.children("a").removeClass("ui-state-hover").removeAttr("id");
this._trigger("blur");this.active=null}},next:function(c){this.move("next",".ui-menu-item:first",c)},previous:function(c){this.move("prev",".ui-menu-item:last",c)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(c,d,e){if(this.active){c=this.active[c+"All"](".ui-menu-item").eq(0);c.length?this.activate(e,c):this.activate(e,this.element.children(d))}else this.activate(e,
this.element.children(d))},nextPage:function(c){if(this.hasScroll())if(!this.active||this.last())this.activate(c,this.element.children(".ui-menu-item:first"));else{var d=this.active.offset().top,e=this.element.height(),h=this.element.children(".ui-menu-item").filter(function(){var g=a(this).offset().top-d-e+a(this).height();return g<10&&g>-10});h.length||(h=this.element.children(".ui-menu-item:last"));this.activate(c,h)}else this.activate(c,this.element.children(".ui-menu-item").filter(!this.active||
this.last()?":first":":last"))},previousPage:function(c){if(this.hasScroll())if(!this.active||this.first())this.activate(c,this.element.children(".ui-menu-item:last"));else{var d=this.active.offset().top,e=this.element.height();result=this.element.children(".ui-menu-item").filter(function(){var h=a(this).offset().top-d+e-a(this).height();return h<10&&h>-10});result.length||(result=this.element.children(".ui-menu-item:first"));this.activate(c,result)}else this.activate(c,this.element.children(".ui-menu-item").filter(!this.active||
this.first()?":last":":first"))},hasScroll:function(){return this.element.height()<this.element[a.fn.prop?"prop":"attr"]("scrollHeight")},select:function(c){this._trigger("selected",c,{item:this.active})}})})(jQuery);
(function(a){var c,d,e,h,g=function(){var b=a(this).find(":ui-button");setTimeout(function(){b.button("refresh")},1)},i=function(b){var f=b.name,j=b.form,l=a([]);if(f)l=j?a(j).find("[name='"+f+"']"):a("[name='"+f+"']",b.ownerDocument).filter(function(){return!this.form});return l};a.widget("ui.button",{options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",g);if(typeof this.options.disabled!==
"boolean")this.options.disabled=this.element.propAttr("disabled");this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var b=this,f=this.options,j=this.type==="checkbox"||this.type==="radio",l="ui-state-hover"+(!j?" ui-state-active":"");if(f.label===null)f.label=this.buttonElement.html();if(this.element.is(":disabled"))f.disabled=true;this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role","button").bind("mouseenter.button",function(){if(!f.disabled){a(this).addClass("ui-state-hover");
this===c&&a(this).addClass("ui-state-active")}}).bind("mouseleave.button",function(){f.disabled||a(this).removeClass(l)}).bind("click.button",function(o){if(f.disabled){o.preventDefault();o.stopImmediatePropagation()}});this.element.bind("focus.button",function(){b.buttonElement.addClass("ui-state-focus")}).bind("blur.button",function(){b.buttonElement.removeClass("ui-state-focus")});if(j){this.element.bind("change.button",function(){h||b.refresh()});this.buttonElement.bind("mousedown.button",function(o){if(!f.disabled){h=
false;d=o.pageX;e=o.pageY}}).bind("mouseup.button",function(o){if(!f.disabled)if(d!==o.pageX||e!==o.pageY)h=true})}if(this.type==="checkbox")this.buttonElement.bind("click.button",function(){if(f.disabled||h)return false;a(this).toggleClass("ui-state-active");b.buttonElement.attr("aria-pressed",b.element[0].checked)});else if(this.type==="radio")this.buttonElement.bind("click.button",function(){if(f.disabled||h)return false;a(this).addClass("ui-state-active");b.buttonElement.attr("aria-pressed","true");
var o=b.element[0];i(o).not(o).map(function(){return a(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")});else{this.buttonElement.bind("mousedown.button",function(){if(f.disabled)return false;a(this).addClass("ui-state-active");c=this;a(document).one("mouseup",function(){c=null})}).bind("mouseup.button",function(){if(f.disabled)return false;a(this).removeClass("ui-state-active")}).bind("keydown.button",function(o){if(f.disabled)return false;if(o.keyCode==a.ui.keyCode.SPACE||
o.keyCode==a.ui.keyCode.ENTER)a(this).addClass("ui-state-active")}).bind("keyup.button",function(){a(this).removeClass("ui-state-active")});this.buttonElement.is("a")&&this.buttonElement.keyup(function(o){o.keyCode===a.ui.keyCode.SPACE&&a(this).click()})}this._setOption("disabled",f.disabled);this._resetButton()},_determineButtonType:function(){this.type=this.element.is(":checkbox")?"checkbox":this.element.is(":radio")?"radio":this.element.is("input")?"input":"button";if(this.type==="checkbox"||this.type===
"radio"){var b=this.element.parents().filter(":last"),f="label[for="+this.element.attr("id")+"]";this.buttonElement=b.find(f);if(!this.buttonElement.length){b=b.length?b.siblings():this.element.siblings();this.buttonElement=b.filter(f);if(!this.buttonElement.length)this.buttonElement=b.find(f)}this.element.addClass("ui-helper-hidden-accessible");(b=this.element.is(":checked"))&&this.buttonElement.addClass("ui-state-active");this.buttonElement.attr("aria-pressed",b)}else this.buttonElement=this.element},
widget:function(){return this.buttonElement},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());this.hasTitle||this.buttonElement.removeAttr("title");
a.Widget.prototype.destroy.call(this)},_setOption:function(b,f){a.Widget.prototype._setOption.apply(this,arguments);if(b==="disabled")f?this.element.propAttr("disabled",true):this.element.propAttr("disabled",false);else this._resetButton()},refresh:function(){var b=this.element.is(":disabled");b!==this.options.disabled&&this._setOption("disabled",b);if(this.type==="radio")i(this.element[0]).each(function(){a(this).is(":checked")?a(this).button("widget").addClass("ui-state-active").attr("aria-pressed",
"true"):a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")});else if(this.type==="checkbox")this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false")},_resetButton:function(){if(this.type==="input")this.options.label&&this.element.val(this.options.label);else{var b=this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
f=a("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),j=this.options.icons,l=j.primary&&j.secondary,o=[];if(j.primary||j.secondary){if(this.options.text)o.push("ui-button-text-icon"+(l?"s":j.primary?"-primary":"-secondary"));j.primary&&b.prepend("<span class='ui-button-icon-primary ui-icon "+j.primary+"'></span>");j.secondary&&b.append("<span class='ui-button-icon-secondary ui-icon "+j.secondary+"'></span>");if(!this.options.text){o.push(l?"ui-button-icons-only":
"ui-button-icon-only");this.hasTitle||b.attr("title",f)}}else o.push("ui-button-text-only");b.addClass(o.join(" "))}}});a.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(b,f){b==="disabled"&&this.buttons.button("option",b,f);a.Widget.prototype._setOption.apply(this,arguments)},refresh:function(){var b=this.element.css("direction")===
"ltr";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b?"ui-corner-left":"ui-corner-right").end().filter(":last").addClass(b?"ui-corner-right":"ui-corner-left").end().end()},destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");
a.Widget.prototype.destroy.call(this)}})})(jQuery);
(function(a,c){function d(){this.debug=false;this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._inDialog=this._datepickerShowing=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass=
"ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su",
"Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",
minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false};a.extend(this._defaults,this.regional[""]);this.dpDiv=e(a('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}function e(b){return b.bind("mouseout",
function(f){f=a(f.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a");f.length&&f.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")}).bind("mouseover",function(f){f=a(f.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a");if(!(a.datepicker._isDisabledDatepicker(i.inline?b.parent()[0]:i.input[0])||!f.length)){f.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
f.addClass("ui-state-hover");f.hasClass("ui-datepicker-prev")&&f.addClass("ui-datepicker-prev-hover");f.hasClass("ui-datepicker-next")&&f.addClass("ui-datepicker-next-hover")}})}function h(b,f){a.extend(b,f);for(var j in f)if(f[j]==null||f[j]==c)b[j]=f[j];return b}a.extend(a.ui,{datepicker:{version:"1.8.15"}});var g=(new Date).getTime(),i;a.extend(d.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},
setDefaults:function(b){h(this._defaults,b||{});return this},_attachDatepicker:function(b,f){var j=null;for(var l in this._defaults){var o=b.getAttribute("date:"+l);if(o){j=j||{};try{j[l]=eval(o)}catch(n){j[l]=o}}}l=b.nodeName.toLowerCase();o=l=="div"||l=="span";if(!b.id){this.uuid+=1;b.id="dp"+this.uuid}var k=this._newInst(a(b),o);k.settings=a.extend({},f||{},j||{});if(l=="input")this._connectDatepicker(b,k);else o&&this._inlineDatepicker(b,k)},_newInst:function(b,f){return{id:b[0].id.replace(/([^A-Za-z0-9_-])/g,
"\\\\$1"),input:b,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:f,dpDiv:!f?this.dpDiv:e(a('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}},_connectDatepicker:function(b,f){var j=a(b);f.append=a([]);f.trigger=a([]);if(!j.hasClass(this.markerClassName)){this._attachments(j,f);j.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",
function(l,o,n){f.settings[o]=n}).bind("getData.datepicker",function(l,o){return this._get(f,o)});this._autoSize(f);a.data(b,"datepicker",f);f.settings.disabled&&this._disableDatepicker(b)}},_attachments:function(b,f){var j=this._get(f,"appendText"),l=this._get(f,"isRTL");f.append&&f.append.remove();if(j){f.append=a('<span class="'+this._appendClass+'">'+j+"</span>");b[l?"before":"after"](f.append)}b.unbind("focus",this._showDatepicker);f.trigger&&f.trigger.remove();j=this._get(f,"showOn");if(j==
"focus"||j=="both")b.focus(this._showDatepicker);if(j=="button"||j=="both"){j=this._get(f,"buttonText");var o=this._get(f,"buttonImage");f.trigger=a(this._get(f,"buttonImageOnly")?a("<img/>").addClass(this._triggerClass).attr({src:o,alt:j,title:j}):a('<button type="button"></button>').addClass(this._triggerClass).html(o==""?j:a("<img/>").attr({src:o,alt:j,title:j})));b[l?"before":"after"](f.trigger);f.trigger.click(function(){a.datepicker._datepickerShowing&&a.datepicker._lastInput==b[0]?a.datepicker._hideDatepicker():
a.datepicker._showDatepicker(b[0]);return false})}},_autoSize:function(b){if(this._get(b,"autoSize")&&!b.inline){var f=new Date(2009,11,20),j=this._get(b,"dateFormat");if(j.match(/[DM]/)){var l=function(o){for(var n=0,k=0,m=0;m<o.length;m++)if(o[m].length>n){n=o[m].length;k=m}return k};f.setMonth(l(this._get(b,j.match(/MM/)?"monthNames":"monthNamesShort")));f.setDate(l(this._get(b,j.match(/DD/)?"dayNames":"dayNamesShort"))+20-f.getDay())}b.input.attr("size",this._formatDate(b,f).length)}},_inlineDatepicker:function(b,
f){var j=a(b);if(!j.hasClass(this.markerClassName)){j.addClass(this.markerClassName).append(f.dpDiv).bind("setData.datepicker",function(l,o,n){f.settings[o]=n}).bind("getData.datepicker",function(l,o){return this._get(f,o)});a.data(b,"datepicker",f);this._setDate(f,this._getDefaultDate(f),true);this._updateDatepicker(f);this._updateAlternate(f);f.settings.disabled&&this._disableDatepicker(b);f.dpDiv.css("display","block")}},_dialogDatepicker:function(b,f,j,l,o){b=this._dialogInst;if(!b){this.uuid+=
1;this._dialogInput=a('<input type="text" id="'+("dp"+this.uuid)+'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');this._dialogInput.keydown(this._doKeyDown);a("body").append(this._dialogInput);b=this._dialogInst=this._newInst(this._dialogInput,false);b.settings={};a.data(this._dialogInput[0],"datepicker",b)}h(b.settings,l||{});f=f&&f.constructor==Date?this._formatDate(b,f):f;this._dialogInput.val(f);this._pos=o?o.length?o:[o.pageX,o.pageY]:null;if(!this._pos)this._pos=[document.documentElement.clientWidth/
2-100+(document.documentElement.scrollLeft||document.body.scrollLeft),document.documentElement.clientHeight/2-150+(document.documentElement.scrollTop||document.body.scrollTop)];this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px");b.settings.onSelect=j;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);a.blockUI&&a.blockUI(this.dpDiv);a.data(this._dialogInput[0],"datepicker",b);return this},_destroyDatepicker:function(b){var f=
a(b),j=a.data(b,"datepicker");if(f.hasClass(this.markerClassName)){var l=b.nodeName.toLowerCase();a.removeData(b,"datepicker");if(l=="input"){j.append.remove();j.trigger.remove();f.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)}else if(l=="div"||l=="span")f.removeClass(this.markerClassName).empty()}},_enableDatepicker:function(b){var f=a(b),j=a.data(b,"datepicker");if(f.hasClass(this.markerClassName)){var l=
b.nodeName.toLowerCase();if(l=="input"){b.disabled=false;j.trigger.filter("button").each(function(){this.disabled=false}).end().filter("img").css({opacity:"1.0",cursor:""})}else if(l=="div"||l=="span"){f=f.children("."+this._inlineClass);f.children().removeClass("ui-state-disabled");f.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")}this._disabledInputs=a.map(this._disabledInputs,function(o){return o==b?null:o})}},_disableDatepicker:function(b){var f=a(b),j=a.data(b,
"datepicker");if(f.hasClass(this.markerClassName)){var l=b.nodeName.toLowerCase();if(l=="input"){b.disabled=true;j.trigger.filter("button").each(function(){this.disabled=true}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else if(l=="div"||l=="span"){f=f.children("."+this._inlineClass);f.children().addClass("ui-state-disabled");f.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled","disabled")}this._disabledInputs=a.map(this._disabledInputs,function(o){return o==
b?null:o});this._disabledInputs[this._disabledInputs.length]=b}},_isDisabledDatepicker:function(b){if(!b)return false;for(var f=0;f<this._disabledInputs.length;f++)if(this._disabledInputs[f]==b)return true;return false},_getInst:function(b){try{return a.data(b,"datepicker")}catch(f){throw"Missing instance data for this datepicker";}},_optionDatepicker:function(b,f,j){var l=this._getInst(b);if(arguments.length==2&&typeof f=="string")return f=="defaults"?a.extend({},a.datepicker._defaults):l?f=="all"?
a.extend({},l.settings):this._get(l,f):null;var o=f||{};if(typeof f=="string"){o={};o[f]=j}if(l){this._curInst==l&&this._hideDatepicker();var n=this._getDateDatepicker(b,true),k=this._getMinMaxDate(l,"min"),m=this._getMinMaxDate(l,"max");h(l.settings,o);if(k!==null&&o.dateFormat!==c&&o.minDate===c)l.settings.minDate=this._formatDate(l,k);if(m!==null&&o.dateFormat!==c&&o.maxDate===c)l.settings.maxDate=this._formatDate(l,m);this._attachments(a(b),l);this._autoSize(l);this._setDate(l,n);this._updateAlternate(l);
this._updateDatepicker(l)}},_changeDatepicker:function(b,f,j){this._optionDatepicker(b,f,j)},_refreshDatepicker:function(b){(b=this._getInst(b))&&this._updateDatepicker(b)},_setDateDatepicker:function(b,f){if(b=this._getInst(b)){this._setDate(b,f);this._updateDatepicker(b);this._updateAlternate(b)}},_getDateDatepicker:function(b,f){(b=this._getInst(b))&&!b.inline&&this._setDateFromField(b,f);return b?this._getDate(b):null},_doKeyDown:function(b){var f=a.datepicker._getInst(b.target),j=true,l=f.dpDiv.is(".ui-datepicker-rtl");
f._keyEvent=true;if(a.datepicker._datepickerShowing)switch(b.keyCode){case 9:a.datepicker._hideDatepicker();j=false;break;case 13:j=a("td."+a.datepicker._dayOverClass+":not(."+a.datepicker._currentClass+")",f.dpDiv);j[0]&&a.datepicker._selectDay(b.target,f.selectedMonth,f.selectedYear,j[0]);if(b=a.datepicker._get(f,"onSelect")){j=a.datepicker._formatDate(f);b.apply(f.input?f.input[0]:null,[j,f])}else a.datepicker._hideDatepicker();return false;case 27:a.datepicker._hideDatepicker();break;case 33:a.datepicker._adjustDate(b.target,
b.ctrlKey?-a.datepicker._get(f,"stepBigMonths"):-a.datepicker._get(f,"stepMonths"),"M");break;case 34:a.datepicker._adjustDate(b.target,b.ctrlKey?+a.datepicker._get(f,"stepBigMonths"):+a.datepicker._get(f,"stepMonths"),"M");break;case 35:if(b.ctrlKey||b.metaKey)a.datepicker._clearDate(b.target);j=b.ctrlKey||b.metaKey;break;case 36:if(b.ctrlKey||b.metaKey)a.datepicker._gotoToday(b.target);j=b.ctrlKey||b.metaKey;break;case 37:if(b.ctrlKey||b.metaKey)a.datepicker._adjustDate(b.target,l?+1:-1,"D");j=
b.ctrlKey||b.metaKey;if(b.originalEvent.altKey)a.datepicker._adjustDate(b.target,b.ctrlKey?-a.datepicker._get(f,"stepBigMonths"):-a.datepicker._get(f,"stepMonths"),"M");break;case 38:if(b.ctrlKey||b.metaKey)a.datepicker._adjustDate(b.target,-7,"D");j=b.ctrlKey||b.metaKey;break;case 39:if(b.ctrlKey||b.metaKey)a.datepicker._adjustDate(b.target,l?-1:+1,"D");j=b.ctrlKey||b.metaKey;if(b.originalEvent.altKey)a.datepicker._adjustDate(b.target,b.ctrlKey?+a.datepicker._get(f,"stepBigMonths"):+a.datepicker._get(f,
"stepMonths"),"M");break;case 40:if(b.ctrlKey||b.metaKey)a.datepicker._adjustDate(b.target,+7,"D");j=b.ctrlKey||b.metaKey;break;default:j=false}else if(b.keyCode==36&&b.ctrlKey)a.datepicker._showDatepicker(this);else j=false;if(j){b.preventDefault();b.stopPropagation()}},_doKeyPress:function(b){var f=a.datepicker._getInst(b.target);if(a.datepicker._get(f,"constrainInput")){f=a.datepicker._possibleChars(a.datepicker._get(f,"dateFormat"));var j=String.fromCharCode(b.charCode==c?b.keyCode:b.charCode);
return b.ctrlKey||b.metaKey||j<" "||!f||f.indexOf(j)>-1}},_doKeyUp:function(b){b=a.datepicker._getInst(b.target);if(b.input.val()!=b.lastVal)try{if(a.datepicker.parseDate(a.datepicker._get(b,"dateFormat"),b.input?b.input.val():null,a.datepicker._getFormatConfig(b))){a.datepicker._setDateFromField(b);a.datepicker._updateAlternate(b);a.datepicker._updateDatepicker(b)}}catch(f){a.datepicker.log(f)}return true},_showDatepicker:function(b){b=b.target||b;if(b.nodeName.toLowerCase()!="input")b=a("input",
b.parentNode)[0];if(!(a.datepicker._isDisabledDatepicker(b)||a.datepicker._lastInput==b)){var f=a.datepicker._getInst(b);if(a.datepicker._curInst&&a.datepicker._curInst!=f){a.datepicker._datepickerShowing&&a.datepicker._triggerOnClose(a.datepicker._curInst);a.datepicker._curInst.dpDiv.stop(true,true)}var j=a.datepicker._get(f,"beforeShow");h(f.settings,j?j.apply(b,[b,f]):{});f.lastVal=null;a.datepicker._lastInput=b;a.datepicker._setDateFromField(f);if(a.datepicker._inDialog)b.value="";if(!a.datepicker._pos){a.datepicker._pos=
a.datepicker._findPos(b);a.datepicker._pos[1]+=b.offsetHeight}var l=false;a(b).parents().each(function(){l|=a(this).css("position")=="fixed";return!l});if(l&&a.browser.opera){a.datepicker._pos[0]-=document.documentElement.scrollLeft;a.datepicker._pos[1]-=document.documentElement.scrollTop}j={left:a.datepicker._pos[0],top:a.datepicker._pos[1]};a.datepicker._pos=null;f.dpDiv.empty();f.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});a.datepicker._updateDatepicker(f);j=a.datepicker._checkOffset(f,
j,l);f.dpDiv.css({position:a.datepicker._inDialog&&a.blockUI?"static":l?"fixed":"absolute",display:"none",left:j.left+"px",top:j.top+"px"});if(!f.inline){j=a.datepicker._get(f,"showAnim");var o=a.datepicker._get(f,"duration"),n=function(){var k=f.dpDiv.find("iframe.ui-datepicker-cover");if(k.length){var m=a.datepicker._getBorders(f.dpDiv);k.css({left:-m[0],top:-m[1],width:f.dpDiv.outerWidth(),height:f.dpDiv.outerHeight()})}};f.dpDiv.zIndex(a(b).zIndex()+1);a.datepicker._datepickerShowing=true;a.effects&&
a.effects[j]?f.dpDiv.show(j,a.datepicker._get(f,"showOptions"),o,n):f.dpDiv[j||"show"](j?o:null,n);if(!j||!o)n();f.input.is(":visible")&&!f.input.is(":disabled")&&f.input.focus();a.datepicker._curInst=f}}},_updateDatepicker:function(b){this.maxRows=4;var f=a.datepicker._getBorders(b.dpDiv);i=b;b.dpDiv.empty().append(this._generateHTML(b));var j=b.dpDiv.find("iframe.ui-datepicker-cover");j.length&&j.css({left:-f[0],top:-f[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()});b.dpDiv.find("."+
this._dayOverClass+" a").mouseover();f=this._getNumberOfMonths(b);j=f[1];b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");j>1&&b.dpDiv.addClass("ui-datepicker-multi-"+j).css("width",17*j+"em");b.dpDiv[(f[0]!=1||f[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");b.dpDiv[(this._get(b,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");b==a.datepicker._curInst&&a.datepicker._datepickerShowing&&b.input&&b.input.is(":visible")&&!b.input.is(":disabled")&&
b.input[0]!=document.activeElement&&b.input.focus();if(b.yearshtml){var l=b.yearshtml;setTimeout(function(){l===b.yearshtml&&b.yearshtml&&b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml);l=b.yearshtml=null},0)}},_getBorders:function(b){var f=function(j){return{thin:1,medium:2,thick:3}[j]||j};return[parseFloat(f(b.css("border-left-width"))),parseFloat(f(b.css("border-top-width")))]},_checkOffset:function(b,f,j){var l=b.dpDiv.outerWidth(),o=b.dpDiv.outerHeight(),n=b.input?b.input.outerWidth():
0,k=b.input?b.input.outerHeight():0,m=document.documentElement.clientWidth+a(document).scrollLeft(),p=document.documentElement.clientHeight+a(document).scrollTop();f.left-=this._get(b,"isRTL")?l-n:0;f.left-=j&&f.left==b.input.offset().left?a(document).scrollLeft():0;f.top-=j&&f.top==b.input.offset().top+k?a(document).scrollTop():0;f.left-=Math.min(f.left,f.left+l>m&&m>l?Math.abs(f.left+l-m):0);f.top-=Math.min(f.top,f.top+o>p&&p>o?Math.abs(o+k):0);return f},_findPos:function(b){for(var f=this._get(this._getInst(b),
"isRTL");b&&(b.type=="hidden"||b.nodeType!=1||a.expr.filters.hidden(b));)b=b[f?"previousSibling":"nextSibling"];b=a(b).offset();return[b.left,b.top]},_triggerOnClose:function(b){var f=this._get(b,"onClose");if(f)f.apply(b.input?b.input[0]:null,[b.input?b.input.val():"",b])},_hideDatepicker:function(b){var f=this._curInst;if(!(!f||b&&f!=a.data(b,"datepicker")))if(this._datepickerShowing){b=this._get(f,"showAnim");var j=this._get(f,"duration"),l=function(){a.datepicker._tidyDialog(f);this._curInst=
null};a.effects&&a.effects[b]?f.dpDiv.hide(b,a.datepicker._get(f,"showOptions"),j,l):f.dpDiv[b=="slideDown"?"slideUp":b=="fadeIn"?"fadeOut":"hide"](b?j:null,l);b||l();a.datepicker._triggerOnClose(f);this._datepickerShowing=false;this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if(a.blockUI){a.unblockUI();a("body").append(this.dpDiv)}}this._inDialog=false}},_tidyDialog:function(b){b.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},
_checkExternalClick:function(b){if(a.datepicker._curInst){b=a(b.target);b[0].id!=a.datepicker._mainDivId&&b.parents("#"+a.datepicker._mainDivId).length==0&&!b.hasClass(a.datepicker.markerClassName)&&!b.hasClass(a.datepicker._triggerClass)&&a.datepicker._datepickerShowing&&!(a.datepicker._inDialog&&a.blockUI)&&a.datepicker._hideDatepicker()}},_adjustDate:function(b,f,j){b=a(b);var l=this._getInst(b[0]);if(!this._isDisabledDatepicker(b[0])){this._adjustInstDate(l,f+(j=="M"?this._get(l,"showCurrentAtPos"):
0),j);this._updateDatepicker(l)}},_gotoToday:function(b){b=a(b);var f=this._getInst(b[0]);if(this._get(f,"gotoCurrent")&&f.currentDay){f.selectedDay=f.currentDay;f.drawMonth=f.selectedMonth=f.currentMonth;f.drawYear=f.selectedYear=f.currentYear}else{var j=new Date;f.selectedDay=j.getDate();f.drawMonth=f.selectedMonth=j.getMonth();f.drawYear=f.selectedYear=j.getFullYear()}this._notifyChange(f);this._adjustDate(b)},_selectMonthYear:function(b,f,j){b=a(b);var l=this._getInst(b[0]);l["selected"+(j=="M"?
"Month":"Year")]=l["draw"+(j=="M"?"Month":"Year")]=parseInt(f.options[f.selectedIndex].value,10);this._notifyChange(l);this._adjustDate(b)},_selectDay:function(b,f,j,l){var o=a(b);if(!(a(l).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0]))){o=this._getInst(o[0]);o.selectedDay=o.currentDay=a("a",l).html();o.selectedMonth=o.currentMonth=f;o.selectedYear=o.currentYear=j;this._selectDate(b,this._formatDate(o,o.currentDay,o.currentMonth,o.currentYear))}},_clearDate:function(b){b=a(b);
this._getInst(b[0]);this._selectDate(b,"")},_selectDate:function(b,f){b=this._getInst(a(b)[0]);f=f!=null?f:this._formatDate(b);b.input&&b.input.val(f);this._updateAlternate(b);var j=this._get(b,"onSelect");if(j)j.apply(b.input?b.input[0]:null,[f,b]);else b.input&&b.input.trigger("change");if(b.inline)this._updateDatepicker(b);else{this._hideDatepicker();this._lastInput=b.input[0];b.input.focus();this._lastInput=null}},_updateAlternate:function(b){var f=this._get(b,"altField");if(f){var j=this._get(b,
"altFormat")||this._get(b,"dateFormat"),l=this._getDate(b),o=this.formatDate(j,l,this._getFormatConfig(b));a(f).each(function(){a(this).val(o)})}},noWeekends:function(b){b=b.getDay();return[b>0&&b<6,""]},iso8601Week:function(b){b=new Date(b.getTime());b.setDate(b.getDate()+4-(b.getDay()||7));var f=b.getTime();b.setMonth(0);b.setDate(1);return Math.floor(Math.round((f-b)/864E5)/7)+1},parseDate:function(b,f,j){if(b==null||f==null)throw"Invalid arguments";f=typeof f=="object"?f.toString():f+"";if(f==
"")return null;var l=(j?j.shortYearCutoff:null)||this._defaults.shortYearCutoff;l=typeof l!="string"?l:(new Date).getFullYear()%100+parseInt(l,10);for(var o=(j?j.dayNamesShort:null)||this._defaults.dayNamesShort,n=(j?j.dayNames:null)||this._defaults.dayNames,k=(j?j.monthNamesShort:null)||this._defaults.monthNamesShort,m=(j?j.monthNames:null)||this._defaults.monthNames,p=j=-1,q=-1,s=-1,r=false,u=function(z){(z=H+1<b.length&&b.charAt(H+1)==z)&&H++;return z},v=function(z){var I=u(z);z=new RegExp("^\\d{1,"+
(z=="@"?14:z=="!"?20:z=="y"&&I?4:z=="o"?3:2)+"}");z=f.substring(y).match(z);if(!z)throw"Missing number at position "+y;y+=z[0].length;return parseInt(z[0],10)},w=function(z,I,N){z=a.map(u(z)?N:I,function(D,E){return[[E,D]]}).sort(function(D,E){return-(D[1].length-E[1].length)});var J=-1;a.each(z,function(D,E){D=E[1];if(f.substr(y,D.length).toLowerCase()==D.toLowerCase()){J=E[0];y+=D.length;return false}});if(J!=-1)return J+1;else throw"Unknown name at position "+y;},x=function(){if(f.charAt(y)!=b.charAt(H))throw"Unexpected literal at position "+
y;y++},y=0,H=0;H<b.length;H++)if(r)if(b.charAt(H)=="'"&&!u("'"))r=false;else x();else switch(b.charAt(H)){case "d":q=v("d");break;case "D":w("D",o,n);break;case "o":s=v("o");break;case "m":p=v("m");break;case "M":p=w("M",k,m);break;case "y":j=v("y");break;case "@":var C=new Date(v("@"));j=C.getFullYear();p=C.getMonth()+1;q=C.getDate();break;case "!":C=new Date((v("!")-this._ticksTo1970)/1E4);j=C.getFullYear();p=C.getMonth()+1;q=C.getDate();break;case "'":if(u("'"))x();else r=true;break;default:x()}if(y<
f.length)throw"Extra/unparsed characters found in date: "+f.substring(y);if(j==-1)j=(new Date).getFullYear();else if(j<100)j+=(new Date).getFullYear()-(new Date).getFullYear()%100+(j<=l?0:-100);if(s>-1){p=1;q=s;do{l=this._getDaysInMonth(j,p-1);if(q<=l)break;p++;q-=l}while(1)}C=this._daylightSavingAdjust(new Date(j,p-1,q));if(C.getFullYear()!=j||C.getMonth()+1!=p||C.getDate()!=q)throw"Invalid date";return C},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",
RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1E7,formatDate:function(b,f,j){if(!f)return"";var l=(j?j.dayNamesShort:null)||this._defaults.dayNamesShort,o=(j?j.dayNames:null)||this._defaults.dayNames,n=(j?j.monthNamesShort:null)||this._defaults.monthNamesShort;j=(j?j.monthNames:null)||this._defaults.monthNames;var k=function(u){(u=r+1<b.length&&
b.charAt(r+1)==u)&&r++;return u},m=function(u,v,w){v=""+v;if(k(u))for(;v.length<w;)v="0"+v;return v},p=function(u,v,w,x){return k(u)?x[v]:w[v]},q="",s=false;if(f)for(var r=0;r<b.length;r++)if(s)if(b.charAt(r)=="'"&&!k("'"))s=false;else q+=b.charAt(r);else switch(b.charAt(r)){case "d":q+=m("d",f.getDate(),2);break;case "D":q+=p("D",f.getDay(),l,o);break;case "o":q+=m("o",Math.round(((new Date(f.getFullYear(),f.getMonth(),f.getDate())).getTime()-(new Date(f.getFullYear(),0,0)).getTime())/864E5),3);
break;case "m":q+=m("m",f.getMonth()+1,2);break;case "M":q+=p("M",f.getMonth(),n,j);break;case "y":q+=k("y")?f.getFullYear():(f.getYear()%100<10?"0":"")+f.getYear()%100;break;case "@":q+=f.getTime();break;case "!":q+=f.getTime()*1E4+this._ticksTo1970;break;case "'":if(k("'"))q+="'";else s=true;break;default:q+=b.charAt(r)}return q},_possibleChars:function(b){for(var f="",j=false,l=function(n){(n=o+1<b.length&&b.charAt(o+1)==n)&&o++;return n},o=0;o<b.length;o++)if(j)if(b.charAt(o)=="'"&&!l("'"))j=
false;else f+=b.charAt(o);else switch(b.charAt(o)){case "d":case "m":case "y":case "@":f+="0123456789";break;case "D":case "M":return null;case "'":if(l("'"))f+="'";else j=true;break;default:f+=b.charAt(o)}return f},_get:function(b,f){return b.settings[f]!==c?b.settings[f]:this._defaults[f]},_setDateFromField:function(b,f){if(b.input.val()!=b.lastVal){var j=this._get(b,"dateFormat"),l=b.lastVal=b.input?b.input.val():null,o,n;o=n=this._getDefaultDate(b);var k=this._getFormatConfig(b);try{o=this.parseDate(j,
l,k)||n}catch(m){this.log(m);l=f?"":l}b.selectedDay=o.getDate();b.drawMonth=b.selectedMonth=o.getMonth();b.drawYear=b.selectedYear=o.getFullYear();b.currentDay=l?o.getDate():0;b.currentMonth=l?o.getMonth():0;b.currentYear=l?o.getFullYear():0;this._adjustInstDate(b)}},_getDefaultDate:function(b){return this._restrictMinMax(b,this._determineDate(b,this._get(b,"defaultDate"),new Date))},_determineDate:function(b,f,j){var l=function(n){var k=new Date;k.setDate(k.getDate()+n);return k},o=function(n){try{return a.datepicker.parseDate(a.datepicker._get(b,
"dateFormat"),n,a.datepicker._getFormatConfig(b))}catch(k){}var m=(n.toLowerCase().match(/^c/)?a.datepicker._getDate(b):null)||new Date,p=m.getFullYear(),q=m.getMonth();m=m.getDate();for(var s=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,r=s.exec(n);r;){switch(r[2]||"d"){case "d":case "D":m+=parseInt(r[1],10);break;case "w":case "W":m+=parseInt(r[1],10)*7;break;case "m":case "M":q+=parseInt(r[1],10);m=Math.min(m,a.datepicker._getDaysInMonth(p,q));break;case "y":case "Y":p+=parseInt(r[1],10);m=Math.min(m,
a.datepicker._getDaysInMonth(p,q));break}r=s.exec(n)}return new Date(p,q,m)};if(f=(f=f==null||f===""?j:typeof f=="string"?o(f):typeof f=="number"?isNaN(f)?j:l(f):new Date(f.getTime()))&&f.toString()=="Invalid Date"?j:f){f.setHours(0);f.setMinutes(0);f.setSeconds(0);f.setMilliseconds(0)}return this._daylightSavingAdjust(f)},_daylightSavingAdjust:function(b){if(!b)return null;b.setHours(b.getHours()>12?b.getHours()+2:0);return b},_setDate:function(b,f,j){var l=!f,o=b.selectedMonth,n=b.selectedYear;
f=this._restrictMinMax(b,this._determineDate(b,f,new Date));b.selectedDay=b.currentDay=f.getDate();b.drawMonth=b.selectedMonth=b.currentMonth=f.getMonth();b.drawYear=b.selectedYear=b.currentYear=f.getFullYear();if((o!=b.selectedMonth||n!=b.selectedYear)&&!j)this._notifyChange(b);this._adjustInstDate(b);if(b.input)b.input.val(l?"":this._formatDate(b));if(j=this._get(b,"onSelect")){l=this._formatDate(b);j.apply(b.input?b.input[0]:null,[l,b])}},_getDate:function(b){return!b.currentYear||b.input&&b.input.val()==
""?null:this._daylightSavingAdjust(new Date(b.currentYear,b.currentMonth,b.currentDay))},_generateHTML:function(b){var f=new Date;f=this._daylightSavingAdjust(new Date(f.getFullYear(),f.getMonth(),f.getDate()));var j=this._get(b,"isRTL"),l=this._get(b,"showButtonPanel"),o=this._get(b,"hideIfNoPrevNext"),n=this._get(b,"navigationAsDateFormat"),k=this._getNumberOfMonths(b),m=this._get(b,"showCurrentAtPos"),p=this._get(b,"stepMonths"),q=k[0]!=1||k[1]!=1,s=this._daylightSavingAdjust(!b.currentDay?new Date(9999,
9,9):new Date(b.currentYear,b.currentMonth,b.currentDay)),r=this._getMinMaxDate(b,"min"),u=this._getMinMaxDate(b,"max");m=b.drawMonth-m;var v=b.drawYear;if(m<0){m+=12;v--}if(u){var w=this._daylightSavingAdjust(new Date(u.getFullYear(),u.getMonth()-k[0]*k[1]+1,u.getDate()));for(w=r&&w<r?r:w;this._daylightSavingAdjust(new Date(v,m,1))>w;){m--;if(m<0){m=11;v--}}}b.drawMonth=m;b.drawYear=v;w=this._get(b,"prevText");w=!n?w:this.formatDate(w,this._daylightSavingAdjust(new Date(v,m-p,1)),this._getFormatConfig(b));
w=this._canAdjustMonth(b,-1,v,m)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_'+g+".datepicker._adjustDate('#"+b.id+"', -"+p+", 'M');\" title=\""+w+'"><span class="ui-icon ui-icon-circle-triangle-'+(j?"e":"w")+'">'+w+"</span></a>":o?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+w+'"><span class="ui-icon ui-icon-circle-triangle-'+(j?"e":"w")+'">'+w+"</span></a>";var x=this._get(b,"nextText");x=!n?x:this.formatDate(x,this._daylightSavingAdjust(new Date(v,
m+p,1)),this._getFormatConfig(b));o=this._canAdjustMonth(b,+1,v,m)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_'+g+".datepicker._adjustDate('#"+b.id+"', +"+p+", 'M');\" title=\""+x+'"><span class="ui-icon ui-icon-circle-triangle-'+(j?"w":"e")+'">'+x+"</span></a>":o?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+x+'"><span class="ui-icon ui-icon-circle-triangle-'+(j?"w":"e")+'">'+x+"</span></a>";p=this._get(b,"currentText");x=this._get(b,"gotoCurrent")&&
b.currentDay?s:f;p=!n?p:this.formatDate(p,x,this._getFormatConfig(b));n=!b.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_'+g+'.datepicker._hideDatepicker();">'+this._get(b,"closeText")+"</button>":"";l=l?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(j?n:"")+(this._isInRange(b,x)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_'+
g+".datepicker._gotoToday('#"+b.id+"');\">"+p+"</button>":"")+(j?"":n)+"</div>":"";n=parseInt(this._get(b,"firstDay"),10);n=isNaN(n)?0:n;p=this._get(b,"showWeek");x=this._get(b,"dayNames");this._get(b,"dayNamesShort");var y=this._get(b,"dayNamesMin"),H=this._get(b,"monthNames"),C=this._get(b,"monthNamesShort"),z=this._get(b,"beforeShowDay"),I=this._get(b,"showOtherMonths"),N=this._get(b,"selectOtherMonths");this._get(b,"calculateWeek");for(var J=this._getDefaultDate(b),D="",E=0;E<k[0];E++){var P=
"";this.maxRows=4;for(var L=0;L<k[1];L++){var Q=this._daylightSavingAdjust(new Date(v,m,b.selectedDay)),B=" ui-corner-all",F="";if(q){F+='<div class="ui-datepicker-group';if(k[1]>1)switch(L){case 0:F+=" ui-datepicker-group-first";B=" ui-corner-"+(j?"right":"left");break;case k[1]-1:F+=" ui-datepicker-group-last";B=" ui-corner-"+(j?"left":"right");break;default:F+=" ui-datepicker-group-middle";B="";break}F+='">'}F+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+B+'">'+(/all|left/.test(B)&&
E==0?j?o:w:"")+(/all|right/.test(B)&&E==0?j?w:o:"")+this._generateMonthYearHeader(b,m,v,r,u,E>0||L>0,H,C)+'</div><table class="ui-datepicker-calendar"><thead><tr>';var G=p?'<th class="ui-datepicker-week-col">'+this._get(b,"weekHeader")+"</th>":"";for(B=0;B<7;B++){var A=(B+n)%7;G+="<th"+((B+n+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+x[A]+'">'+y[A]+"</span></th>"}F+=G+"</tr></thead><tbody>";G=this._getDaysInMonth(v,m);if(v==b.selectedYear&&m==b.selectedMonth)b.selectedDay=Math.min(b.selectedDay,
G);B=(this._getFirstDayOfMonth(v,m)-n+7)%7;G=Math.ceil((B+G)/7);this.maxRows=G=q?this.maxRows>G?this.maxRows:G:G;A=this._daylightSavingAdjust(new Date(v,m,1-B));for(var R=0;R<G;R++){F+="<tr>";var S=!p?"":'<td class="ui-datepicker-week-col">'+this._get(b,"calculateWeek")(A)+"</td>";for(B=0;B<7;B++){var M=z?z.apply(b.input?b.input[0]:null,[A]):[true,""],K=A.getMonth()!=m,O=K&&!N||!M[0]||r&&A<r||u&&A>u;S+='<td class="'+((B+n+6)%7>=5?" ui-datepicker-week-end":"")+(K?" ui-datepicker-other-month":"")+(A.getTime()==
Q.getTime()&&m==b.selectedMonth&&b._keyEvent||J.getTime()==A.getTime()&&J.getTime()==Q.getTime()?" "+this._dayOverClass:"")+(O?" "+this._unselectableClass+" ui-state-disabled":"")+(K&&!I?"":" "+M[1]+(A.getTime()==s.getTime()?" "+this._currentClass:"")+(A.getTime()==f.getTime()?" ui-datepicker-today":""))+'"'+((!K||I)&&M[2]?' title="'+M[2]+'"':"")+(O?"":' onclick="DP_jQuery_'+g+".datepicker._selectDay('#"+b.id+"',"+A.getMonth()+","+A.getFullYear()+', this);return false;"')+">"+(K&&!I?"&#xa0;":O?'<span class="ui-state-default">'+
A.getDate()+"</span>":'<a class="ui-state-default'+(A.getTime()==f.getTime()?" ui-state-highlight":"")+(A.getTime()==s.getTime()?" ui-state-active":"")+(K?" ui-priority-secondary":"")+'" href="#" id="'+A.getFullYear()+'/'+(A.getMonth()+1)+'/'+A.getDate()+'">'+A.getDate()+"</a>")+"</td>";A.setDate(A.getDate()+1);A=this._daylightSavingAdjust(A)}F+=S+"</tr>"}m++;if(m>11){m=0;v++}F+="</tbody></table>"+(q?"</div>"+(k[0]>0&&L==k[1]-1?'<div class="ui-datepicker-row-break"></div>':""):"");P+=F}D+=P}D+=l+(a.browser.msie&&parseInt(a.browser.version,10)<7&&!b.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':
"");b._keyEvent=false;return D},_generateMonthYearHeader:function(b,f,j,l,o,n,k,m){var p=this._get(b,"changeMonth"),q=this._get(b,"changeYear"),s=this._get(b,"showMonthAfterYear"),r='<div class="ui-datepicker-title">',u="";if(n||!p)u+='<span class="ui-datepicker-month">'+k[f]+"</span>";else{k=l&&l.getFullYear()==j;var v=o&&o.getFullYear()==j;u+='<select class="ui-datepicker-month" onchange="DP_jQuery_'+g+".datepicker._selectMonthYear('#"+b.id+"', this, 'M');\" >";for(var w=0;w<12;w++)if((!k||w>=l.getMonth())&&
(!v||w<=o.getMonth()))u+='<option value="'+w+'"'+(w==f?' selected="selected"':"")+">"+m[w]+"</option>";u+="</select>"}s||(r+=u+(n||!(p&&q)?"&#xa0;":""));if(!b.yearshtml){b.yearshtml="";if(n||!q)r+='<span class="ui-datepicker-year">'+j+"</span>";else{m=this._get(b,"yearRange").split(":");var x=(new Date).getFullYear();k=function(y){y=y.match(/c[+-].*/)?j+parseInt(y.substring(1),10):y.match(/[+-].*/)?x+parseInt(y,10):parseInt(y,10);return isNaN(y)?x:y};f=k(m[0]);m=Math.max(f,k(m[1]||""));f=l?Math.max(f,
l.getFullYear()):f;m=o?Math.min(m,o.getFullYear()):m;for(b.yearshtml+='<select class="ui-datepicker-year" onchange="DP_jQuery_'+g+".datepicker._selectMonthYear('#"+b.id+"', this, 'Y');\" >";f<=m;f++)b.yearshtml+='<option value="'+f+'"'+(f==j?' selected="selected"':"")+">"+f+"</option>";b.yearshtml+="</select>";r+=b.yearshtml;b.yearshtml=null}}r+=this._get(b,"yearSuffix");if(s)r+=(n||!(p&&q)?"&#xa0;":"")+u;r+="</div>";return r},_adjustInstDate:function(b,f,j){var l=b.drawYear+(j=="Y"?f:0),o=b.drawMonth+
(j=="M"?f:0);f=Math.min(b.selectedDay,this._getDaysInMonth(l,o))+(j=="D"?f:0);l=this._restrictMinMax(b,this._daylightSavingAdjust(new Date(l,o,f)));b.selectedDay=l.getDate();b.drawMonth=b.selectedMonth=l.getMonth();b.drawYear=b.selectedYear=l.getFullYear();if(j=="M"||j=="Y")this._notifyChange(b)},_restrictMinMax:function(b,f){var j=this._getMinMaxDate(b,"min");b=this._getMinMaxDate(b,"max");f=j&&f<j?j:f;return f=b&&f>b?b:f},_notifyChange:function(b){var f=this._get(b,"onChangeMonthYear");if(f)f.apply(b.input?
b.input[0]:null,[b.selectedYear,b.selectedMonth+1,b])},_getNumberOfMonths:function(b){b=this._get(b,"numberOfMonths");return b==null?[1,1]:typeof b=="number"?[1,b]:b},_getMinMaxDate:function(b,f){return this._determineDate(b,this._get(b,f+"Date"),null)},_getDaysInMonth:function(b,f){return 32-this._daylightSavingAdjust(new Date(b,f,32)).getDate()},_getFirstDayOfMonth:function(b,f){return(new Date(b,f,1)).getDay()},_canAdjustMonth:function(b,f,j,l){var o=this._getNumberOfMonths(b);j=this._daylightSavingAdjust(new Date(j,
l+(f<0?f:o[0]*o[1]),1));f<0&&j.setDate(this._getDaysInMonth(j.getFullYear(),j.getMonth()));return this._isInRange(b,j)},_isInRange:function(b,f){var j=this._getMinMaxDate(b,"min");b=this._getMinMaxDate(b,"max");return(!j||f.getTime()>=j.getTime())&&(!b||f.getTime()<=b.getTime())},_getFormatConfig:function(b){var f=this._get(b,"shortYearCutoff");f=typeof f!="string"?f:(new Date).getFullYear()%100+parseInt(f,10);return{shortYearCutoff:f,dayNamesShort:this._get(b,"dayNamesShort"),dayNames:this._get(b,
"dayNames"),monthNamesShort:this._get(b,"monthNamesShort"),monthNames:this._get(b,"monthNames")}},_formatDate:function(b,f,j,l){if(!f){b.currentDay=b.selectedDay;b.currentMonth=b.selectedMonth;b.currentYear=b.selectedYear}f=f?typeof f=="object"?f:this._daylightSavingAdjust(new Date(l,j,f)):this._daylightSavingAdjust(new Date(b.currentYear,b.currentMonth,b.currentDay));return this.formatDate(this._get(b,"dateFormat"),f,this._getFormatConfig(b))}});a.fn.datepicker=function(b){if(!this.length)return this;
if(!a.datepicker.initialized){a(document).mousedown(a.datepicker._checkExternalClick).find("body").append(a.datepicker.dpDiv);a.datepicker.initialized=true}var f=Array.prototype.slice.call(arguments,1);if(typeof b=="string"&&(b=="isDisabled"||b=="getDate"||b=="widget"))return a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this[0]].concat(f));if(b=="option"&&arguments.length==2&&typeof arguments[1]=="string")return a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this[0]].concat(f));return this.each(function(){typeof b==
"string"?a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this].concat(f)):a.datepicker._attachDatepicker(this,b)})};a.datepicker=new d;a.datepicker.initialized=false;a.datepicker.uuid=(new Date).getTime();a.datepicker.version="1.8.15";window["DP_jQuery_"+g]=a})(jQuery);
(function(a,c){var d={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},e={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true},h=a.attrFn||{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true,click:true};a.widget("ui.dialog",{options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,
position:{my:"center",at:"center",collision:"fit",using:function(g){var i=a(this).css(g).offset().top;i<0&&a(this).css("top",g.top-i)}},resizable:true,show:null,stack:true,title:"",width:300,zIndex:1E3},_create:function(){this.originalTitle=this.element.attr("title");if(typeof this.originalTitle!=="string")this.originalTitle="";this.options.title=this.options.title||this.originalTitle;var g=this,i=g.options,b=i.title||"&#160;",f=a.ui.dialog.getTitleId(g.element),j=(g.uiDialog=a("<div></div>")).appendTo(document.body).hide().addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+
i.dialogClass).css({zIndex:i.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(n){if(i.closeOnEscape&&n.keyCode&&n.keyCode===a.ui.keyCode.ESCAPE){g.close(n);n.preventDefault()}}).attr({role:"dialog","aria-labelledby":f}).mousedown(function(n){g.moveToTop(false,n)});g.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(j);var l=(g.uiDialogTitlebar=a("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(j),
o=a('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){o.addClass("ui-state-hover")},function(){o.removeClass("ui-state-hover")}).focus(function(){o.addClass("ui-state-focus")}).blur(function(){o.removeClass("ui-state-focus")}).click(function(n){g.close(n);return false}).appendTo(l);(g.uiDialogTitlebarCloseText=a("<span></span>")).addClass("ui-icon ui-icon-closethick").text(i.closeText).appendTo(o);a("<span></span>").addClass("ui-dialog-title").attr("id",
f).html(b).prependTo(l);if(a.isFunction(i.beforeclose)&&!a.isFunction(i.beforeClose))i.beforeClose=i.beforeclose;l.find("*").add(l).disableSelection();i.draggable&&a.fn.draggable&&g._makeDraggable();i.resizable&&a.fn.resizable&&g._makeResizable();g._createButtons(i.buttons);g._isOpen=false;a.fn.bgiframe&&j.bgiframe()},_init:function(){this.options.autoOpen&&this.open()},destroy:function(){var g=this;g.overlay&&g.overlay.destroy();g.uiDialog.hide();g.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");
g.uiDialog.remove();g.originalTitle&&g.element.attr("title",g.originalTitle);return g},widget:function(){return this.uiDialog},close:function(g){var i=this,b,f;if(false!==i._trigger("beforeClose",g)){i.overlay&&i.overlay.destroy();i.uiDialog.unbind("keypress.ui-dialog");i._isOpen=false;if(i.options.hide)i.uiDialog.hide(i.options.hide,function(){i._trigger("close",g)});else{i.uiDialog.hide();i._trigger("close",g)}a.ui.dialog.overlay.resize();if(i.options.modal){b=0;a(".ui-dialog").each(function(){if(this!==
i.uiDialog[0]){f=a(this).css("z-index");isNaN(f)||(b=Math.max(b,f))}});a.ui.dialog.maxZ=b}return i}},isOpen:function(){return this._isOpen},moveToTop:function(g,i){var b=this,f=b.options;if(f.modal&&!g||!f.stack&&!f.modal)return b._trigger("focus",i);if(f.zIndex>a.ui.dialog.maxZ)a.ui.dialog.maxZ=f.zIndex;if(b.overlay){a.ui.dialog.maxZ+=1;b.overlay.$el.css("z-index",a.ui.dialog.overlay.maxZ=a.ui.dialog.maxZ)}g={scrollTop:b.element.scrollTop(),scrollLeft:b.element.scrollLeft()};a.ui.dialog.maxZ+=1;
b.uiDialog.css("z-index",a.ui.dialog.maxZ);b.element.attr(g);b._trigger("focus",i);return b},open:function(){if(!this._isOpen){var g=this,i=g.options,b=g.uiDialog;g.overlay=i.modal?new a.ui.dialog.overlay(g):null;g._size();g._position(i.position);b.show(i.show);g.moveToTop(true);i.modal&&b.bind("keypress.ui-dialog",function(f){if(f.keyCode===a.ui.keyCode.TAB){var j=a(":tabbable",this),l=j.filter(":first");j=j.filter(":last");if(f.target===j[0]&&!f.shiftKey){l.focus(1);return false}else if(f.target===
l[0]&&f.shiftKey){j.focus(1);return false}}});a(g.element.find(":tabbable").get().concat(b.find(".ui-dialog-buttonpane :tabbable").get().concat(b.get()))).eq(0).focus();g._isOpen=true;g._trigger("open");return g}},_createButtons:function(g){var i=this,b=false,f=a("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),j=a("<div></div>").addClass("ui-dialog-buttonset").appendTo(f);i.uiDialog.find(".ui-dialog-buttonpane").remove();typeof g==="object"&&g!==null&&a.each(g,
function(){return!(b=true)});if(b){a.each(g,function(l,o){o=a.isFunction(o)?{click:o,text:l}:o;var n=a('<button type="button"></button>').click(function(){o.click.apply(i.element[0],arguments)}).appendTo(j);a.each(o,function(k,m){if(k!=="click")k in h?n[k](m):n.attr(k,m)});a.fn.button&&n.button()});f.appendTo(i.uiDialog)}},_makeDraggable:function(){function g(l){return{position:l.position,offset:l.offset}}var i=this,b=i.options,f=a(document),j;i.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",
handle:".ui-dialog-titlebar",containment:"document",start:function(l,o){j=b.height==="auto"?"auto":a(this).height();a(this).height(a(this).height()).addClass("ui-dialog-dragging");i._trigger("dragStart",l,g(o))},drag:function(l,o){i._trigger("drag",l,g(o))},stop:function(l,o){b.position=[o.position.left-f.scrollLeft(),o.position.top-f.scrollTop()];a(this).removeClass("ui-dialog-dragging").height(j);i._trigger("dragStop",l,g(o));a.ui.dialog.overlay.resize()}})},_makeResizable:function(g){function i(l){return{originalPosition:l.originalPosition,
originalSize:l.originalSize,position:l.position,size:l.size}}g=g===c?this.options.resizable:g;var b=this,f=b.options,j=b.uiDialog.css("position");g=typeof g==="string"?g:"n,e,s,w,se,sw,ne,nw";b.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:b.element,maxWidth:f.maxWidth,maxHeight:f.maxHeight,minWidth:f.minWidth,minHeight:b._minHeight(),handles:g,start:function(l,o){a(this).addClass("ui-dialog-resizing");b._trigger("resizeStart",l,i(o))},resize:function(l,o){b._trigger("resize",
l,i(o))},stop:function(l,o){a(this).removeClass("ui-dialog-resizing");f.height=a(this).height();f.width=a(this).width();b._trigger("resizeStop",l,i(o));a.ui.dialog.overlay.resize()}}).css("position",j).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var g=this.options;return g.height==="auto"?g.minHeight:Math.min(g.minHeight,g.height)},_position:function(g){var i=[],b=[0,0],f;if(g){if(typeof g==="string"||typeof g==="object"&&"0"in g){i=g.split?g.split(" "):
[g[0],g[1]];if(i.length===1)i[1]=i[0];a.each(["left","top"],function(j,l){if(+i[j]===i[j]){b[j]=i[j];i[j]=l}});g={my:i.join(" "),at:i.join(" "),offset:b.join(" ")}}g=a.extend({},a.ui.dialog.prototype.options.position,g)}else g=a.ui.dialog.prototype.options.position;(f=this.uiDialog.is(":visible"))||this.uiDialog.show();this.uiDialog.css({top:0,left:0}).position(a.extend({of:window},g));f||this.uiDialog.hide()},_setOptions:function(g){var i=this,b={},f=false;a.each(g,function(j,l){i._setOption(j,l);
if(j in d)f=true;if(j in e)b[j]=l});f&&this._size();this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",b)},_setOption:function(g,i){var b=this,f=b.uiDialog;switch(g){case "beforeclose":g="beforeClose";break;case "buttons":b._createButtons(i);break;case "closeText":b.uiDialogTitlebarCloseText.text(""+i);break;case "dialogClass":f.removeClass(b.options.dialogClass).addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+i);break;case "disabled":i?f.addClass("ui-dialog-disabled"):
f.removeClass("ui-dialog-disabled");break;case "draggable":var j=f.is(":data(draggable)");j&&!i&&f.draggable("destroy");!j&&i&&b._makeDraggable();break;case "position":b._position(i);break;case "resizable":(j=f.is(":data(resizable)"))&&!i&&f.resizable("destroy");j&&typeof i==="string"&&f.resizable("option","handles",i);!j&&i!==false&&b._makeResizable(i);break;case "title":a(".ui-dialog-title",b.uiDialogTitlebar).html(""+(i||"&#160;"));break}a.Widget.prototype._setOption.apply(b,arguments)},_size:function(){var g=
this.options,i,b,f=this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0});if(g.minWidth>g.width)g.width=g.minWidth;i=this.uiDialog.css({height:"auto",width:g.width}).height();b=Math.max(0,g.minHeight-i);if(g.height==="auto")if(a.support.minHeight)this.element.css({minHeight:b,height:"auto"});else{this.uiDialog.show();g=this.element.css("height","auto").height();f||this.uiDialog.hide();this.element.height(Math.max(g,b))}else this.element.height(Math.max(g.height-
i,0));this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())}});a.extend(a.ui.dialog,{version:"1.8.15",uuid:0,maxZ:0,getTitleId:function(g){g=g.attr("id");if(!g){this.uuid+=1;g=this.uuid}return"ui-dialog-title-"+g},overlay:function(g){this.$el=a.ui.dialog.overlay.create(g)}});a.extend(a.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:a.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(g){return g+".dialog-overlay"}).join(" "),
create:function(g){if(this.instances.length===0){setTimeout(function(){a.ui.dialog.overlay.instances.length&&a(document).bind(a.ui.dialog.overlay.events,function(b){if(a(b.target).zIndex()<a.ui.dialog.overlay.maxZ)return false})},1);a(document).bind("keydown.dialog-overlay",function(b){if(g.options.closeOnEscape&&b.keyCode&&b.keyCode===a.ui.keyCode.ESCAPE){g.close(b);b.preventDefault()}});a(window).bind("resize.dialog-overlay",a.ui.dialog.overlay.resize)}var i=(this.oldInstances.pop()||a("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),
height:this.height()});a.fn.bgiframe&&i.bgiframe();this.instances.push(i);return i},destroy:function(g){var i=a.inArray(g,this.instances);i!=-1&&this.oldInstances.push(this.instances.splice(i,1)[0]);this.instances.length===0&&a([document,window]).unbind(".dialog-overlay");g.remove();var b=0;a.each(this.instances,function(){b=Math.max(b,this.css("z-index"))});this.maxZ=b},height:function(){var g,i;if(a.browser.msie&&a.browser.version<7){g=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);
i=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);return g<i?a(window).height()+"px":g+"px"}else return a(document).height()+"px"},width:function(){var g,i;if(a.browser.msie){g=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);i=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);return g<i?a(window).width()+"px":g+"px"}else return a(document).width()+"px"},resize:function(){var g=a([]);a.each(a.ui.dialog.overlay.instances,function(){g=
g.add(this)});g.css({width:0,height:0}).css({width:a.ui.dialog.overlay.width(),height:a.ui.dialog.overlay.height()})}});a.extend(a.ui.dialog.overlay.prototype,{destroy:function(){a.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);
(function(a){a.ui=a.ui||{};var c=/left|center|right/,d=/top|center|bottom/,e=a.fn.position,h=a.fn.offset;a.fn.position=function(g){if(!g||!g.of)return e.apply(this,arguments);g=a.extend({},g);var i=a(g.of),b=i[0],f=(g.collision||"flip").split(" "),j=g.offset?g.offset.split(" "):[0,0],l,o,n;if(b.nodeType===9){l=i.width();o=i.height();n={top:0,left:0}}else if(b.setTimeout){l=i.width();o=i.height();n={top:i.scrollTop(),left:i.scrollLeft()}}else if(b.preventDefault){g.at="left top";l=o=0;n={top:g.of.pageY,
left:g.of.pageX}}else{l=i.outerWidth();o=i.outerHeight();n=i.offset()}a.each(["my","at"],function(){var k=(g[this]||"").split(" ");if(k.length===1)k=c.test(k[0])?k.concat(["center"]):d.test(k[0])?["center"].concat(k):["center","center"];k[0]=c.test(k[0])?k[0]:"center";k[1]=d.test(k[1])?k[1]:"center";g[this]=k});if(f.length===1)f[1]=f[0];j[0]=parseInt(j[0],10)||0;if(j.length===1)j[1]=j[0];j[1]=parseInt(j[1],10)||0;if(g.at[0]==="right")n.left+=l;else if(g.at[0]==="center")n.left+=l/2;if(g.at[1]==="bottom")n.top+=
o;else if(g.at[1]==="center")n.top+=o/2;n.left+=j[0];n.top+=j[1];return this.each(function(){var k=a(this),m=k.outerWidth(),p=k.outerHeight(),q=parseInt(a.curCSS(this,"marginLeft",true))||0,s=parseInt(a.curCSS(this,"marginTop",true))||0,r=m+q+(parseInt(a.curCSS(this,"marginRight",true))||0),u=p+s+(parseInt(a.curCSS(this,"marginBottom",true))||0),v=a.extend({},n),w;if(g.my[0]==="right")v.left-=m;else if(g.my[0]==="center")v.left-=m/2;if(g.my[1]==="bottom")v.top-=p;else if(g.my[1]==="center")v.top-=
p/2;v.left=Math.round(v.left);v.top=Math.round(v.top);w={left:v.left-q,top:v.top-s};a.each(["left","top"],function(x,y){a.ui.position[f[x]]&&a.ui.position[f[x]][y](v,{targetWidth:l,targetHeight:o,elemWidth:m,elemHeight:p,collisionPosition:w,collisionWidth:r,collisionHeight:u,offset:j,my:g.my,at:g.at})});a.fn.bgiframe&&k.bgiframe();k.offset(a.extend(v,{using:g.using}))})};a.ui.position={fit:{left:function(g,i){var b=a(window);b=i.collisionPosition.left+i.collisionWidth-b.width()-b.scrollLeft();g.left=
b>0?g.left-b:Math.max(g.left-i.collisionPosition.left,g.left)},top:function(g,i){var b=a(window);b=i.collisionPosition.top+i.collisionHeight-b.height()-b.scrollTop();g.top=b>0?g.top-b:Math.max(g.top-i.collisionPosition.top,g.top)}},flip:{left:function(g,i){if(i.at[0]!=="center"){var b=a(window);b=i.collisionPosition.left+i.collisionWidth-b.width()-b.scrollLeft();var f=i.my[0]==="left"?-i.elemWidth:i.my[0]==="right"?i.elemWidth:0,j=i.at[0]==="left"?i.targetWidth:-i.targetWidth,l=-2*i.offset[0];g.left+=
i.collisionPosition.left<0?f+j+l:b>0?f+j+l:0}},top:function(g,i){if(i.at[1]!=="center"){var b=a(window);b=i.collisionPosition.top+i.collisionHeight-b.height()-b.scrollTop();var f=i.my[1]==="top"?-i.elemHeight:i.my[1]==="bottom"?i.elemHeight:0,j=i.at[1]==="top"?i.targetHeight:-i.targetHeight,l=-2*i.offset[1];g.top+=i.collisionPosition.top<0?f+j+l:b>0?f+j+l:0}}}};if(!a.offset.setOffset){a.offset.setOffset=function(g,i){if(/static/.test(a.curCSS(g,"position")))g.style.position="relative";var b=a(g),
f=b.offset(),j=parseInt(a.curCSS(g,"top",true),10)||0,l=parseInt(a.curCSS(g,"left",true),10)||0;f={top:i.top-f.top+j,left:i.left-f.left+l};"using"in i?i.using.call(g,f):b.css(f)};a.fn.offset=function(g){var i=this[0];if(!i||!i.ownerDocument)return null;if(g)return this.each(function(){a.offset.setOffset(this,g)});return h.call(this)}}})(jQuery);
(function(a,c){a.widget("ui.progressbar",{options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()});this.valueDiv=a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);this.oldValue=this._value();this._refreshValue()},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.valueDiv.remove();a.Widget.prototype.destroy.apply(this,arguments)},value:function(d){if(d===c)return this._value();this._setOption("value",d);return this},_setOption:function(d,e){if(d==="value"){this.options.value=e;this._refreshValue();this._value()===this.options.max&&this._trigger("complete")}a.Widget.prototype._setOption.apply(this,arguments)},_value:function(){var d=this.options.value;if(typeof d!=="number")d=0;return Math.min(this.options.max,Math.max(this.min,d))},_percentage:function(){return 100*
this._value()/this.options.max},_refreshValue:function(){var d=this.value(),e=this._percentage();if(this.oldValue!==d){this.oldValue=d;this._trigger("change")}this.valueDiv.toggle(d>this.min).toggleClass("ui-corner-right",d===this.options.max).width(e.toFixed(0)+"%");this.element.attr("aria-valuenow",d)}});a.extend(a.ui.progressbar,{version:"1.8.15"})})(jQuery);
(function(a){a.widget("ui.slider",a.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var c=this,d=this.options,e=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),h=d.values&&d.values.length||1,g=[];this._mouseSliding=this._keySliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+
this.orientation+" ui-widget ui-widget-content ui-corner-all"+(d.disabled?" ui-slider-disabled ui-disabled":""));this.range=a([]);if(d.range){if(d.range===true){if(!d.values)d.values=[this._valueMin(),this._valueMin()];if(d.values.length&&d.values.length!==2)d.values=[d.values[0],d.values[0]]}this.range=a("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(d.range==="min"||d.range==="max"?" ui-slider-range-"+d.range:""))}for(var i=e.length;i<h;i+=1)g.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>");
this.handles=e.add(a(g.join("")).appendTo(c.element));this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(b){b.preventDefault()}).hover(function(){d.disabled||a(this).addClass("ui-state-hover")},function(){a(this).removeClass("ui-state-hover")}).focus(function(){if(d.disabled)a(this).blur();else{a(".ui-slider .ui-state-focus").removeClass("ui-state-focus");a(this).addClass("ui-state-focus")}}).blur(function(){a(this).removeClass("ui-state-focus")});this.handles.each(function(b){a(this).data("index.ui-slider-handle",
b)});this.handles.keydown(function(b){var f=true,j=a(this).data("index.ui-slider-handle"),l,o,n;if(!c.options.disabled){switch(b.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:f=false;if(!c._keySliding){c._keySliding=true;a(this).addClass("ui-state-active");l=c._start(b,j);if(l===false)return}break}n=c.options.step;l=c.options.values&&c.options.values.length?
(o=c.values(j)):(o=c.value());switch(b.keyCode){case a.ui.keyCode.HOME:o=c._valueMin();break;case a.ui.keyCode.END:o=c._valueMax();break;case a.ui.keyCode.PAGE_UP:o=c._trimAlignValue(l+(c._valueMax()-c._valueMin())/5);break;case a.ui.keyCode.PAGE_DOWN:o=c._trimAlignValue(l-(c._valueMax()-c._valueMin())/5);break;case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(l===c._valueMax())return;o=c._trimAlignValue(l+n);break;case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(l===c._valueMin())return;o=c._trimAlignValue(l-
n);break}c._slide(b,j,o);return f}}).keyup(function(b){var f=a(this).data("index.ui-slider-handle");if(c._keySliding){c._keySliding=false;c._stop(b,f);c._change(b,f);a(this).removeClass("ui-state-active")}});this._refreshValue();this._animateOff=false},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");this._mouseDestroy();
return this},_mouseCapture:function(c){var d=this.options,e,h,g,i,b;if(d.disabled)return false;this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();e=this._normValueFromMouse({x:c.pageX,y:c.pageY});h=this._valueMax()-this._valueMin()+1;i=this;this.handles.each(function(f){var j=Math.abs(e-i.values(f));if(h>j){h=j;g=a(this);b=f}});if(d.range===true&&this.values(1)===d.min){b+=1;g=a(this.handles[b])}if(this._start(c,b)===false)return false;
this._mouseSliding=true;i._handleIndex=b;g.addClass("ui-state-active").focus();d=g.offset();this._clickOffset=!a(c.target).parents().andSelf().is(".ui-slider-handle")?{left:0,top:0}:{left:c.pageX-d.left-g.width()/2,top:c.pageY-d.top-g.height()/2-(parseInt(g.css("borderTopWidth"),10)||0)-(parseInt(g.css("borderBottomWidth"),10)||0)+(parseInt(g.css("marginTop"),10)||0)};this.handles.hasClass("ui-state-hover")||this._slide(c,b,e);return this._animateOff=true},_mouseStart:function(){return true},_mouseDrag:function(c){var d=
this._normValueFromMouse({x:c.pageX,y:c.pageY});this._slide(c,this._handleIndex,d);return false},_mouseStop:function(c){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(c,this._handleIndex);this._change(c,this._handleIndex);this._clickOffset=this._handleIndex=null;return this._animateOff=false},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(c){var d;if(this.orientation==="horizontal"){d=
this.elementSize.width;c=c.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{d=this.elementSize.height;c=c.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}d=c/d;if(d>1)d=1;if(d<0)d=0;if(this.orientation==="vertical")d=1-d;c=this._valueMax()-this._valueMin();return this._trimAlignValue(this._valueMin()+d*c)},_start:function(c,d){var e={handle:this.handles[d],value:this.value()};if(this.options.values&&this.options.values.length){e.value=this.values(d);
e.values=this.values()}return this._trigger("start",c,e)},_slide:function(c,d,e){var h;if(this.options.values&&this.options.values.length){h=this.values(d?0:1);if(this.options.values.length===2&&this.options.range===true&&(d===0&&e>h||d===1&&e<h))e=h;if(e!==this.values(d)){h=this.values();h[d]=e;c=this._trigger("slide",c,{handle:this.handles[d],value:e,values:h});this.values(d?0:1);c!==false&&this.values(d,e,true)}}else if(e!==this.value()){c=this._trigger("slide",c,{handle:this.handles[d],value:e});
c!==false&&this.value(e)}},_stop:function(c,d){var e={handle:this.handles[d],value:this.value()};if(this.options.values&&this.options.values.length){e.value=this.values(d);e.values=this.values()}this._trigger("stop",c,e)},_change:function(c,d){if(!this._keySliding&&!this._mouseSliding){var e={handle:this.handles[d],value:this.value()};if(this.options.values&&this.options.values.length){e.value=this.values(d);e.values=this.values()}this._trigger("change",c,e)}},value:function(c){if(arguments.length){this.options.value=
this._trimAlignValue(c);this._refreshValue();this._change(null,0)}else return this._value()},values:function(c,d){var e,h,g;if(arguments.length>1){this.options.values[c]=this._trimAlignValue(d);this._refreshValue();this._change(null,c)}else if(arguments.length)if(a.isArray(arguments[0])){e=this.options.values;h=arguments[0];for(g=0;g<e.length;g+=1){e[g]=this._trimAlignValue(h[g]);this._change(null,g)}this._refreshValue()}else return this.options.values&&this.options.values.length?this._values(c):
this.value();else return this._values()},_setOption:function(c,d){var e,h=0;if(a.isArray(this.options.values))h=this.options.values.length;a.Widget.prototype._setOption.apply(this,arguments);switch(c){case "disabled":if(d){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.propAttr("disabled",true);this.element.addClass("ui-disabled")}else{this.handles.propAttr("disabled",false);this.element.removeClass("ui-disabled")}break;case "orientation":this._detectOrientation();
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case "value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case "values":this._animateOff=true;this._refreshValue();for(e=0;e<h;e+=1)this._change(null,e);this._animateOff=false;break}},_value:function(){var c=this.options.value;return c=this._trimAlignValue(c)},_values:function(c){var d,e;if(arguments.length){d=this.options.values[c];
return d=this._trimAlignValue(d)}else{d=this.options.values.slice();for(e=0;e<d.length;e+=1)d[e]=this._trimAlignValue(d[e]);return d}},_trimAlignValue:function(c){if(c<=this._valueMin())return this._valueMin();if(c>=this._valueMax())return this._valueMax();var d=this.options.step>0?this.options.step:1,e=(c-this._valueMin())%d;c=c-e;if(Math.abs(e)*2>=d)c+=e>0?d:-d;return parseFloat(c.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var c=
this.options.range,d=this.options,e=this,h=!this._animateOff?d.animate:false,g,i={},b,f,j,l;if(this.options.values&&this.options.values.length)this.handles.each(function(o){g=(e.values(o)-e._valueMin())/(e._valueMax()-e._valueMin())*100;i[e.orientation==="horizontal"?"left":"bottom"]=g+"%";a(this).stop(1,1)[h?"animate":"css"](i,d.animate);if(e.options.range===true)if(e.orientation==="horizontal"){if(o===0)e.range.stop(1,1)[h?"animate":"css"]({left:g+"%"},d.animate);if(o===1)e.range[h?"animate":"css"]({width:g-
b+"%"},{queue:false,duration:d.animate})}else{if(o===0)e.range.stop(1,1)[h?"animate":"css"]({bottom:g+"%"},d.animate);if(o===1)e.range[h?"animate":"css"]({height:g-b+"%"},{queue:false,duration:d.animate})}b=g});else{f=this.value();j=this._valueMin();l=this._valueMax();g=l!==j?(f-j)/(l-j)*100:0;i[e.orientation==="horizontal"?"left":"bottom"]=g+"%";this.handle.stop(1,1)[h?"animate":"css"](i,d.animate);if(c==="min"&&this.orientation==="horizontal")this.range.stop(1,1)[h?"animate":"css"]({width:g+"%"},
d.animate);if(c==="max"&&this.orientation==="horizontal")this.range[h?"animate":"css"]({width:100-g+"%"},{queue:false,duration:d.animate});if(c==="min"&&this.orientation==="vertical")this.range.stop(1,1)[h?"animate":"css"]({height:g+"%"},d.animate);if(c==="max"&&this.orientation==="vertical")this.range[h?"animate":"css"]({height:100-g+"%"},{queue:false,duration:d.animate})}}});a.extend(a.ui.slider,{version:"1.8.15"})})(jQuery);
(function(a,c){function d(){return++h}function e(){return++g}var h=0,g=0;a.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:false,cookie:null,collapsible:false,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(true)},_setOption:function(i,b){if(i=="selected")this.options.collapsible&&
b==this.options.selected||this.select(b);else{this.options[i]=b;this._tabify()}},_tabId:function(i){return i.title&&i.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+d()},_sanitizeSelector:function(i){return i.replace(/:/g,"\\:")},_cookie:function(){var i=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+e());return a.cookie.apply(null,[i].concat(a.makeArray(arguments)))},_ui:function(i,b){return{tab:i,panel:b,index:this.anchors.index(i)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var i=
a(this);i.html(i.data("label.tabs")).removeData("label.tabs")})},_tabify:function(i){function b(r,u){r.css("display","");!a.support.opacity&&u.opacity&&r[0].style.removeAttribute("filter")}var f=this,j=this.options,l=/^#.+/;this.list=this.element.find("ol,ul").eq(0);this.lis=a(" > li:has(a[href])",this.list);this.anchors=this.lis.map(function(){return a("a",this)[0]});this.panels=a([]);this.anchors.each(function(r,u){var v=a(u).attr("href"),w=v.split("#")[0],x;if(w&&(w===location.toString().split("#")[0]||
(x=a("base")[0])&&w===x.href)){v=u.hash;u.href=v}if(l.test(v))f.panels=f.panels.add(f.element.find(f._sanitizeSelector(v)));else if(v&&v!=="#"){a.data(u,"href.tabs",v);a.data(u,"load.tabs",v.replace(/#.*$/,""));v=f._tabId(u);u.href="#"+v;u=f.element.find("#"+v);if(!u.length){u=a(j.panelTemplate).attr("id",v).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(f.panels[r-1]||f.list);u.data("destroy.tabs",true)}f.panels=f.panels.add(u)}else j.disabled.push(r)});if(i){this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.lis.addClass("ui-state-default ui-corner-top");this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");if(j.selected===c){location.hash&&this.anchors.each(function(r,u){if(u.hash==location.hash){j.selected=r;return false}});if(typeof j.selected!=="number"&&j.cookie)j.selected=parseInt(f._cookie(),10);if(typeof j.selected!=="number"&&this.lis.filter(".ui-tabs-selected").length)j.selected=
this.lis.index(this.lis.filter(".ui-tabs-selected"));j.selected=j.selected||(this.lis.length?0:-1)}else if(j.selected===null)j.selected=-1;j.selected=j.selected>=0&&this.anchors[j.selected]||j.selected<0?j.selected:0;j.disabled=a.unique(j.disabled.concat(a.map(this.lis.filter(".ui-state-disabled"),function(r){return f.lis.index(r)}))).sort();a.inArray(j.selected,j.disabled)!=-1&&j.disabled.splice(a.inArray(j.selected,j.disabled),1);this.panels.addClass("ui-tabs-hide");this.lis.removeClass("ui-tabs-selected ui-state-active");
if(j.selected>=0&&this.anchors.length){f.element.find(f._sanitizeSelector(f.anchors[j.selected].hash)).removeClass("ui-tabs-hide");this.lis.eq(j.selected).addClass("ui-tabs-selected ui-state-active");f.element.queue("tabs",function(){f._trigger("show",null,f._ui(f.anchors[j.selected],f.element.find(f._sanitizeSelector(f.anchors[j.selected].hash))[0]))});this.load(j.selected)}a(window).bind("unload",function(){f.lis.add(f.anchors).unbind(".tabs");f.lis=f.anchors=f.panels=null})}else j.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"));
this.element[j.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");j.cookie&&this._cookie(j.selected,j.cookie);i=0;for(var o;o=this.lis[i];i++)a(o)[a.inArray(i,j.disabled)!=-1&&!a(o).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled");j.cache===false&&this.anchors.removeData("cache.tabs");this.lis.add(this.anchors).unbind(".tabs");if(j.event!=="mouseover"){var n=function(r,u){u.is(":not(.ui-state-disabled)")&&u.addClass("ui-state-"+r)},k=function(r,u){u.removeClass("ui-state-"+
r)};this.lis.bind("mouseover.tabs",function(){n("hover",a(this))});this.lis.bind("mouseout.tabs",function(){k("hover",a(this))});this.anchors.bind("focus.tabs",function(){n("focus",a(this).closest("li"))});this.anchors.bind("blur.tabs",function(){k("focus",a(this).closest("li"))})}var m,p;if(j.fx)if(a.isArray(j.fx)){m=j.fx[0];p=j.fx[1]}else m=p=j.fx;var q=p?function(r,u){a(r).closest("li").addClass("ui-tabs-selected ui-state-active");u.hide().removeClass("ui-tabs-hide").animate(p,p.duration||"normal",
function(){b(u,p);f._trigger("show",null,f._ui(r,u[0]))})}:function(r,u){a(r).closest("li").addClass("ui-tabs-selected ui-state-active");u.removeClass("ui-tabs-hide");f._trigger("show",null,f._ui(r,u[0]))},s=m?function(r,u){u.animate(m,m.duration||"normal",function(){f.lis.removeClass("ui-tabs-selected ui-state-active");u.addClass("ui-tabs-hide");b(u,m);f.element.dequeue("tabs")})}:function(r,u){f.lis.removeClass("ui-tabs-selected ui-state-active");u.addClass("ui-tabs-hide");f.element.dequeue("tabs")};
this.anchors.bind(j.event+".tabs",function(){var r=this,u=a(r).closest("li"),v=f.panels.filter(":not(.ui-tabs-hide)"),w=f.element.find(f._sanitizeSelector(r.hash));if(u.hasClass("ui-tabs-selected")&&!j.collapsible||u.hasClass("ui-state-disabled")||u.hasClass("ui-state-processing")||f.panels.filter(":animated").length||f._trigger("select",null,f._ui(this,w[0]))===false){this.blur();return false}j.selected=f.anchors.index(this);f.abort();if(j.collapsible)if(u.hasClass("ui-tabs-selected")){j.selected=
-1;j.cookie&&f._cookie(j.selected,j.cookie);f.element.queue("tabs",function(){s(r,v)}).dequeue("tabs");this.blur();return false}else if(!v.length){j.cookie&&f._cookie(j.selected,j.cookie);f.element.queue("tabs",function(){q(r,w)});f.load(f.anchors.index(this));this.blur();return false}j.cookie&&f._cookie(j.selected,j.cookie);if(w.length){v.length&&f.element.queue("tabs",function(){s(r,v)});f.element.queue("tabs",function(){q(r,w)});f.load(f.anchors.index(this))}else throw"jQuery UI Tabs: Mismatching fragment identifier.";
a.browser.msie&&this.blur()});this.anchors.bind("click.tabs",function(){return false})},_getIndex:function(i){if(typeof i=="string")i=this.anchors.index(this.anchors.filter("[href$="+i+"]"));return i},destroy:function(){var i=this.options;this.abort();this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.anchors.each(function(){var b=
a.data(this,"href.tabs");if(b)this.href=b;var f=a(this).unbind(".tabs");a.each(["href","load","cache"],function(j,l){f.removeData(l+".tabs")})});this.lis.unbind(".tabs").add(this.panels).each(function(){a.data(this,"destroy.tabs")?a(this).remove():a(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide")});i.cookie&&this._cookie(null,i.cookie);return this},add:function(i,
b,f){if(f===c)f=this.anchors.length;var j=this,l=this.options;b=a(l.tabTemplate.replace(/#\{href\}/g,i).replace(/#\{label\}/g,b));i=!i.indexOf("#")?i.replace("#",""):this._tabId(a("a",b)[0]);b.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);var o=j.element.find("#"+i);o.length||(o=a(l.panelTemplate).attr("id",i).data("destroy.tabs",true));o.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");if(f>=this.lis.length){b.appendTo(this.list);o.appendTo(this.list[0].parentNode)}else{b.insertBefore(this.lis[f]);
o.insertBefore(this.panels[f])}l.disabled=a.map(l.disabled,function(n){return n>=f?++n:n});this._tabify();if(this.anchors.length==1){l.selected=0;b.addClass("ui-tabs-selected ui-state-active");o.removeClass("ui-tabs-hide");this.element.queue("tabs",function(){j._trigger("show",null,j._ui(j.anchors[0],j.panels[0]))});this.load(0)}this._trigger("add",null,this._ui(this.anchors[f],this.panels[f]));return this},remove:function(i){i=this._getIndex(i);var b=this.options,f=this.lis.eq(i).remove(),j=this.panels.eq(i).remove();
if(f.hasClass("ui-tabs-selected")&&this.anchors.length>1)this.select(i+(i+1<this.anchors.length?1:-1));b.disabled=a.map(a.grep(b.disabled,function(l){return l!=i}),function(l){return l>=i?--l:l});this._tabify();this._trigger("remove",null,this._ui(f.find("a")[0],j[0]));return this},enable:function(i){i=this._getIndex(i);var b=this.options;if(a.inArray(i,b.disabled)!=-1){this.lis.eq(i).removeClass("ui-state-disabled");b.disabled=a.grep(b.disabled,function(f){return f!=i});this._trigger("enable",null,
this._ui(this.anchors[i],this.panels[i]));return this}},disable:function(i){i=this._getIndex(i);var b=this.options;if(i!=b.selected){this.lis.eq(i).addClass("ui-state-disabled");b.disabled.push(i);b.disabled.sort();this._trigger("disable",null,this._ui(this.anchors[i],this.panels[i]))}return this},select:function(i){i=this._getIndex(i);if(i==-1)if(this.options.collapsible&&this.options.selected!=-1)i=this.options.selected;else return this;this.anchors.eq(i).trigger(this.options.event+".tabs");return this},
load:function(i){i=this._getIndex(i);var b=this,f=this.options,j=this.anchors.eq(i)[0],l=a.data(j,"load.tabs");this.abort();if(!l||this.element.queue("tabs").length!==0&&a.data(j,"cache.tabs"))this.element.dequeue("tabs");else{this.lis.eq(i).addClass("ui-state-processing");if(f.spinner){var o=a("span",j);o.data("label.tabs",o.html()).html(f.spinner)}this.xhr=a.ajax(a.extend({},f.ajaxOptions,{url:l,success:function(n,k){b.element.find(b._sanitizeSelector(j.hash)).html(n);b._cleanup();f.cache&&a.data(j,
"cache.tabs",true);b._trigger("load",null,b._ui(b.anchors[i],b.panels[i]));try{f.ajaxOptions.success(n,k)}catch(m){}},error:function(n,k){b._cleanup();b._trigger("load",null,b._ui(b.anchors[i],b.panels[i]));try{f.ajaxOptions.error(n,k,i,j)}catch(m){}}}));b.element.dequeue("tabs");return this}},abort:function(){this.element.queue([]);this.panels.stop(false,true);this.element.queue("tabs",this.element.queue("tabs").splice(-2,2));if(this.xhr){this.xhr.abort();delete this.xhr}this._cleanup();return this},
url:function(i,b){this.anchors.eq(i).removeData("cache.tabs").data("load.tabs",b);return this},length:function(){return this.anchors.length}});a.extend(a.ui.tabs,{version:"1.8.15"});a.extend(a.ui.tabs.prototype,{rotation:null,rotate:function(i,b){var f=this,j=this.options,l=f._rotate||(f._rotate=function(o){clearTimeout(f.rotation);f.rotation=setTimeout(function(){var n=j.selected;f.select(++n<f.anchors.length?n:0)},i);o&&o.stopPropagation()});b=f._unrotate||(f._unrotate=!b?function(o){o.clientX&&
f.rotate(null)}:function(){t=j.selected;l()});if(i){this.element.bind("tabsshow",l);this.anchors.bind(j.event+".tabs",b);l()}else{clearTimeout(f.rotation);this.element.unbind("tabsshow",l);this.anchors.unbind(j.event+".tabs",b);delete this._rotate;delete this._unrotate}return this}})})(jQuery);
/*
 * jQuery UI Datepicker 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	jquery.ui.core.js
 */
(function( $, undefined ) {

$.extend($.ui, { datepicker: { version: "1.8.14" } });

var PROP_NAME = 'datepicker';
var dpuuid = new Date().getTime();
var instActive;

/* Date picker manager.
   Use the singleton instance of this class, $.datepicker, to interact with the date picker.
   Settings for (groups of) date pickers are maintained in an instance object,
   allowing multiple different settings on the same page. */

function Datepicker() {
	this.debug = false; // Change this to true to start debugging
	this._curInst = null; // The current instance in use
	this._keyEvent = false; // If the last event was a key event
	this._disabledInputs = []; // List of date picker inputs that have been disabled
	this._datepickerShowing = false; // True if the popup picker is showing , false if not
	this._inDialog = false; // True if showing within a "dialog", false if not
	this._mainDivId = 'ui-datepicker-div'; // The ID of the main datepicker division
	this._inlineClass = 'ui-datepicker-inline'; // The name of the inline marker class
	this._appendClass = 'ui-datepicker-append'; // The name of the append marker class
	this._triggerClass = 'ui-datepicker-trigger'; // The name of the trigger marker class
	this._dialogClass = 'ui-datepicker-dialog'; // The name of the dialog marker class
	this._disableClass = 'ui-datepicker-disabled'; // The name of the disabled covering marker class
	this._unselectableClass = 'ui-datepicker-unselectable'; // The name of the unselectable cell marker class
	this._currentClass = 'ui-datepicker-current-day'; // The name of the current day marker class
	this._dayOverClass = 'ui-datepicker-days-cell-over'; // The name of the day hover marker class
	this.regional = []; // Available regional settings, indexed by language code
	this.regional[''] = { // Default regional settings
		closeText: 'Fechar',
		prevText: '&#x3c;Anterior',
		nextText: 'Pr&oacute;ximo&#x3e;',
		currentText: 'Hoje',
		monthNames: ['Janeiro','Fevereiro','Mar&ccedil;o','Abril','Maio','Junho',
		'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
		monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun',
		'Jul','Ago','Set','Out','Nov','Dez'],
		dayNames: ['Domingo','Segunda-feira','Ter&ccedil;a-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sabado'],
		dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
		dayNamesMin: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
		weekHeader: 'Sm',
		dateFormat: 'dd/mm/yy',
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: '' // Additional text to append to the year in the month headers
	};
	this._defaults = { // Global defaults for all the date picker instances
		showOn: 'focus', // 'focus' for popup on focus,
			// 'button' for trigger button, or 'both' for either
		showAnim: 'fadeIn', // Name of jQuery animation for popup
		showOptions: {}, // Options for enhanced animations
		defaultDate: null, // Used when field is blank: actual date,
			// +/-number for offset from today, null for today
		appendText: '', // Display text following the input box, e.g. showing the format
		buttonText: '...', // Text for trigger button
		buttonImage: '', // URL for trigger button image
		buttonImageOnly: false, // True if the image appears alone, false if it appears on a button
		hideIfNoPrevNext: false, // True to hide next/previous month links
			// if not applicable, false to just disable them
		navigationAsDateFormat: false, // True if date formatting applied to prev/today/next links
		gotoCurrent: false, // True if today link goes back to current selection instead
		changeMonth: false, // True if month can be selected directly, false if only prev/next
		changeYear: false, // True if year can be selected directly, false if only prev/next
		yearRange: 'c-10:c+10', // Range of years to display in drop-down,
			// either relative to today's year (-nn:+nn), relative to currently displayed year
			// (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
		showOtherMonths: false, // True to show dates in other months, false to leave blank
		selectOtherMonths: false, // True to allow selection of dates in other months, false for unselectable
		showWeek: false, // True to show week of the year, false to not show it
		calculateWeek: this.iso8601Week, // How to calculate the week of the year,
			// takes a Date and returns the number of the week for it
		shortYearCutoff: '+10', // Short year values < this are in the current century,
			// > this are in the previous century,
			// string value starting with '+' for current year + value
		minDate: null, // The earliest selectable date, or null for no limit
		maxDate: null, // The latest selectable date, or null for no limit
		duration: 'fast', // Duration of display/closure
		beforeShowDay: null, // Function that takes a date and returns an array with
			// [0] = true if selectable, false if not, [1] = custom CSS class name(s) or '',
			// [2] = cell title (optional), e.g. $.datepicker.noWeekends
		beforeShow: null, // Function that takes an input field and
			// returns a set of custom settings for the date picker
		onSelect: null, // Define a callback function when a date is selected
		onChangeMonthYear: null, // Define a callback function when the month or year is changed
		onClose: null, // Define a callback function when the datepicker is closed
		numberOfMonths: 1, // Number of months to show at a time
		showCurrentAtPos: 0, // The position in multipe months at which to show the current month (starting at 0)
		stepMonths: 1, // Number of months to step back/forward
		stepBigMonths: 12, // Number of months to step back/forward for the big links
		altField: '', // Selector for an alternate field to store selected dates into
		altFormat: '', // The date format to use for the alternate field
		constrainInput: true, // The input is constrained by the current date format
		showButtonPanel: false, // True to show button panel, false to not show it
		autoSize: false // True to size the input for the date format, false to leave as is
	};
	$.extend(this._defaults, this.regional['']);
	this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'));
}

$.extend(Datepicker.prototype, {
	/* Class name added to elements to indicate already configured with a date picker. */
	markerClassName: 'hasDatepicker',
	
	//Keep track of the maximum number of rows displayed (see #7043)
	maxRows: 4,

	/* Debug logging (if enabled). */
	log: function () {
		if (this.debug)
			console.log.apply('', arguments);
	},
	
	// TODO rename to "widget" when switching to widget factory
	_widgetDatepicker: function() {
		return this.dpDiv;
	},

	/* Override the default settings for all instances of the date picker.
	   @param  settings  object - the new settings to use as defaults (anonymous object)
	   @return the manager object */
	setDefaults: function(settings) {
		extendRemove(this._defaults, settings || {});
		return this;
	},

	/* Attach the date picker to a jQuery selection.
	   @param  target    element - the target input field or division or span
	   @param  settings  object - the new settings to use for this date picker instance (anonymous) */
	_attachDatepicker: function(target, settings) {
		// check for settings on the control itself - in namespace 'date:'
		var inlineSettings = null;
		for (var attrName in this._defaults) {
			var attrValue = target.getAttribute('date:' + attrName);
			if (attrValue) {
				inlineSettings = inlineSettings || {};
				try {
					inlineSettings[attrName] = eval(attrValue);
				} catch (err) {
					inlineSettings[attrName] = attrValue;
				}
			}
		}
		var nodeName = target.nodeName.toLowerCase();
		var inline = (nodeName == 'div' || nodeName == 'span');
		if (!target.id) {
			this.uuid += 1;
			target.id = 'dp' + this.uuid;
		}
		var inst = this._newInst($(target), inline);
		inst.settings = $.extend({}, settings || {}, inlineSettings || {});
		if (nodeName == 'input') {
			this._connectDatepicker(target, inst);
		} else if (inline) {
			this._inlineDatepicker(target, inst);
		}
	},

	/* Create a new instance object. */
	_newInst: function(target, inline) {
		var id = target[0].id.replace(/([^A-Za-z0-9_-])/g, '\\\\$1'); // escape jQuery meta chars
		return {id: id, input: target, // associated target
			selectedDay: 0, selectedMonth: 0, selectedYear: 0, // current selection
			drawMonth: 0, drawYear: 0, // month being drawn
			inline: inline, // is datepicker inline or not
			dpDiv: (!inline ? this.dpDiv : // presentation div
			bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')))};
	},

	/* Attach the date picker to an input field. */
	_connectDatepicker: function(target, inst) {
		var input = $(target);
		inst.append = $([]);
		inst.trigger = $([]);
		if (input.hasClass(this.markerClassName))
			return;
		this._attachments(input, inst);
		input.addClass(this.markerClassName).keydown(this._doKeyDown).
			keypress(this._doKeyPress).keyup(this._doKeyUp).
			bind("setData.datepicker", function(event, key, value) {
				inst.settings[key] = value;
			}).bind("getData.datepicker", function(event, key) {
				return this._get(inst, key);
			});
		this._autoSize(inst);
		$.data(target, PROP_NAME, inst);
	},

	/* Make attachments based on settings. */
	_attachments: function(input, inst) {
		var appendText = this._get(inst, 'appendText');
		var isRTL = this._get(inst, 'isRTL');
		if (inst.append)
			inst.append.remove();
		if (appendText) {
			inst.append = $('<span class="' + this._appendClass + '">' + appendText + '</span>');
			input[isRTL ? 'before' : 'after'](inst.append);
		}
		input.unbind('focus', this._showDatepicker);
		if (inst.trigger)
			inst.trigger.remove();
		var showOn = this._get(inst, 'showOn');
		if (showOn == 'focus' || showOn == 'both') // pop-up date picker when in the marked field
			input.focus(this._showDatepicker);
		if (showOn == 'button' || showOn == 'both') { // pop-up date picker when button clicked
			var buttonText = this._get(inst, 'buttonText');
			var buttonImage = this._get(inst, 'buttonImage');
			inst.trigger = $(this._get(inst, 'buttonImageOnly') ?
				$('<img/>').addClass(this._triggerClass).
					attr({ src: buttonImage, alt: buttonText, title: buttonText }) :
				$('<button type="button"></button>').addClass(this._triggerClass).
					html(buttonImage == '' ? buttonText : $('<img/>').attr(
					{ src:buttonImage, alt:buttonText, title:buttonText })));
			input[isRTL ? 'before' : 'after'](inst.trigger);
			inst.trigger.click(function() {
				if ($.datepicker._datepickerShowing && $.datepicker._lastInput == input[0])
					$.datepicker._hideDatepicker();
				else
					$.datepicker._showDatepicker(input[0]);
				return false;
			});
		}
	},

	/* Apply the maximum length for the date format. */
	_autoSize: function(inst) {
		if (this._get(inst, 'autoSize') && !inst.inline) {
			var date = new Date(2009, 12 - 1, 20); // Ensure double digits
			var dateFormat = this._get(inst, 'dateFormat');
			if (dateFormat.match(/[DM]/)) {
				var findMax = function(names) {
					var max = 0;
					var maxI = 0;
					for (var i = 0; i < names.length; i++) {
						if (names[i].length > max) {
							max = names[i].length;
							maxI = i;
						}
					}
					return maxI;
				};
				date.setMonth(findMax(this._get(inst, (dateFormat.match(/MM/) ?
					'monthNames' : 'monthNamesShort'))));
				date.setDate(findMax(this._get(inst, (dateFormat.match(/DD/) ?
					'dayNames' : 'dayNamesShort'))) + 20 - date.getDay());
			}
			inst.input.attr('size', this._formatDate(inst, date).length);
		}
	},

	/* Attach an inline date picker to a div. */
	_inlineDatepicker: function(target, inst) {
		var divSpan = $(target);
		if (divSpan.hasClass(this.markerClassName))
			return;
		divSpan.addClass(this.markerClassName).append(inst.dpDiv).
			bind("setData.datepicker", function(event, key, value){
				inst.settings[key] = value;
			}).bind("getData.datepicker", function(event, key){
				return this._get(inst, key);
			});
		$.data(target, PROP_NAME, inst);
		this._setDate(inst, this._getDefaultDate(inst), true);
		this._updateDatepicker(inst);
		this._updateAlternate(inst);
		inst.dpDiv.show();
	},

	/* Pop-up the date picker in a "dialog" box.
	   @param  input     element - ignored
	   @param  date      string or Date - the initial date to display
	   @param  onSelect  function - the function to call when a date is selected
	   @param  settings  object - update the dialog date picker instance's settings (anonymous object)
	   @param  pos       int[2] - coordinates for the dialog's position within the screen or
	                     event - with x/y coordinates or
	                     leave empty for default (screen centre)
	   @return the manager object */
	_dialogDatepicker: function(input, date, onSelect, settings, pos) {
		var inst = this._dialogInst; // internal instance
		if (!inst) {
			this.uuid += 1;
			var id = 'dp' + this.uuid;
			this._dialogInput = $('<input type="text" id="' + id +
				'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');
			this._dialogInput.keydown(this._doKeyDown);
			$('body').append(this._dialogInput);
			inst = this._dialogInst = this._newInst(this._dialogInput, false);
			inst.settings = {};
			$.data(this._dialogInput[0], PROP_NAME, inst);
		}
		extendRemove(inst.settings, settings || {});
		date = (date && date.constructor == Date ? this._formatDate(inst, date) : date);
		this._dialogInput.val(date);

		this._pos = (pos ? (pos.length ? pos : [pos.pageX, pos.pageY]) : null);
		if (!this._pos) {
			var browserWidth = document.documentElement.clientWidth;
			var browserHeight = document.documentElement.clientHeight;
			var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
			var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
			this._pos = // should use actual width/height below
				[(browserWidth / 2) - 100 + scrollX, (browserHeight / 2) - 150 + scrollY];
		}

		// move input on screen for focus, but hidden behind dialog
		this._dialogInput.css('left', (this._pos[0] + 20) + 'px').css('top', this._pos[1] + 'px');
		inst.settings.onSelect = onSelect;
		this._inDialog = true;
		this.dpDiv.addClass(this._dialogClass);
		this._showDatepicker(this._dialogInput[0]);
		if ($.blockUI)
			$.blockUI(this.dpDiv);
		$.data(this._dialogInput[0], PROP_NAME, inst);
		return this;
	},

	/* Detach a datepicker from its control.
	   @param  target    element - the target input field or division or span */
	_destroyDatepicker: function(target) {
		var $target = $(target);
		var inst = $.data(target, PROP_NAME);
		if (!$target.hasClass(this.markerClassName)) {
			return;
		}
		var nodeName = target.nodeName.toLowerCase();
		$.removeData(target, PROP_NAME);
		if (nodeName == 'input') {
			inst.append.remove();
			inst.trigger.remove();
			$target.removeClass(this.markerClassName).
				unbind('focus', this._showDatepicker).
				unbind('keydown', this._doKeyDown).
				unbind('keypress', this._doKeyPress).
				unbind('keyup', this._doKeyUp);
		} else if (nodeName == 'div' || nodeName == 'span')
			$target.removeClass(this.markerClassName).empty();
	},

	/* Enable the date picker to a jQuery selection.
	   @param  target    element - the target input field or division or span */
	_enableDatepicker: function(target) {
		var $target = $(target);
		var inst = $.data(target, PROP_NAME);
		if (!$target.hasClass(this.markerClassName)) {
			return;
		}
		var nodeName = target.nodeName.toLowerCase();
		if (nodeName == 'input') {
			target.disabled = false;
			inst.trigger.filter('button').
				each(function() { this.disabled = false; }).end().
				filter('img').css({opacity: '1.0', cursor: ''});
		}
		else if (nodeName == 'div' || nodeName == 'span') {
			var inline = $target.children('.' + this._inlineClass);
			inline.children().removeClass('ui-state-disabled');
			inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
				removeAttr("disabled");
		}
		this._disabledInputs = $.map(this._disabledInputs,
			function(value) { return (value == target ? null : value); }); // delete entry
	},

	/* Disable the date picker to a jQuery selection.
	   @param  target    element - the target input field or division or span */
	_disableDatepicker: function(target) {
		var $target = $(target);
		var inst = $.data(target, PROP_NAME);
		if (!$target.hasClass(this.markerClassName)) {
			return;
		}
		var nodeName = target.nodeName.toLowerCase();
		if (nodeName == 'input') {
			target.disabled = true;
			inst.trigger.filter('button').
				each(function() { this.disabled = true; }).end().
				filter('img').css({opacity: '0.5', cursor: 'default'});
		}
		else if (nodeName == 'div' || nodeName == 'span') {
			var inline = $target.children('.' + this._inlineClass);
			inline.children().addClass('ui-state-disabled');
			inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
				attr("disabled", "disabled");
		}
		this._disabledInputs = $.map(this._disabledInputs,
			function(value) { return (value == target ? null : value); }); // delete entry
		this._disabledInputs[this._disabledInputs.length] = target;
	},

	/* Is the first field in a jQuery collection disabled as a datepicker?
	   @param  target    element - the target input field or division or span
	   @return boolean - true if disabled, false if enabled */
	_isDisabledDatepicker: function(target) {
		if (!target) {
			return false;
		}
		for (var i = 0; i < this._disabledInputs.length; i++) {
			if (this._disabledInputs[i] == target)
				return true;
		}
		return false;
	},

	/* Retrieve the instance data for the target control.
	   @param  target  element - the target input field or division or span
	   @return  object - the associated instance data
	   @throws  error if a jQuery problem getting data */
	_getInst: function(target) {
		try {
			return $.data(target, PROP_NAME);
		}
		catch (err) {
			throw 'Missing instance data for this datepicker';
		}
	},

	/* Update or retrieve the settings for a date picker attached to an input field or division.
	   @param  target  element - the target input field or division or span
	   @param  name    object - the new settings to update or
	                   string - the name of the setting to change or retrieve,
	                   when retrieving also 'all' for all instance settings or
	                   'defaults' for all global defaults
	   @param  value   any - the new value for the setting
	                   (omit if above is an object or to retrieve a value) */
	_optionDatepicker: function(target, name, value) {
		var inst = this._getInst(target);
		if (arguments.length == 2 && typeof name == 'string') {
			return (name == 'defaults' ? $.extend({}, $.datepicker._defaults) :
				(inst ? (name == 'all' ? $.extend({}, inst.settings) :
				this._get(inst, name)) : null));
		}
		var settings = name || {};
		if (typeof name == 'string') {
			settings = {};
			settings[name] = value;
		}
		if (inst) {
			if (this._curInst == inst) {
				this._hideDatepicker();
			}
			var date = this._getDateDatepicker(target, true);
			var minDate = this._getMinMaxDate(inst, 'min');
			var maxDate = this._getMinMaxDate(inst, 'max');
			extendRemove(inst.settings, settings);
			// reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
			if (minDate !== null && settings['dateFormat'] !== undefined && settings['minDate'] === undefined)
				inst.settings.minDate = this._formatDate(inst, minDate);
			if (maxDate !== null && settings['dateFormat'] !== undefined && settings['maxDate'] === undefined)
				inst.settings.maxDate = this._formatDate(inst, maxDate);
			this._attachments($(target), inst);
			this._autoSize(inst);
			this._setDate(inst, date);
			this._updateAlternate(inst);
			this._updateDatepicker(inst);
		}
	},

	// change method deprecated
	_changeDatepicker: function(target, name, value) {
		this._optionDatepicker(target, name, value);
	},

	/* Redraw the date picker attached to an input field or division.
	   @param  target  element - the target input field or division or span */
	_refreshDatepicker: function(target) {
		var inst = this._getInst(target);
		if (inst) {
			this._updateDatepicker(inst);
		}
	},

	/* Set the dates for a jQuery selection.
	   @param  target   element - the target input field or division or span
	   @param  date     Date - the new date */
	_setDateDatepicker: function(target, date) {
		var inst = this._getInst(target);
		if (inst) {
			this._setDate(inst, date);
			this._updateDatepicker(inst);
			this._updateAlternate(inst);
		}
	},

	/* Get the date(s) for the first entry in a jQuery selection.
	   @param  target     element - the target input field or division or span
	   @param  noDefault  boolean - true if no default date is to be used
	   @return Date - the current date */
	_getDateDatepicker: function(target, noDefault) {
		var inst = this._getInst(target);
		if (inst && !inst.inline)
			this._setDateFromField(inst, noDefault);
		return (inst ? this._getDate(inst) : null);
	},

	/* Handle keystrokes. */
	_doKeyDown: function(event) {
		var inst = $.datepicker._getInst(event.target);
		var handled = true;
		var isRTL = inst.dpDiv.is('.ui-datepicker-rtl');
		inst._keyEvent = true;
		if ($.datepicker._datepickerShowing)
			switch (event.keyCode) {
				case 9: $.datepicker._hideDatepicker();
						handled = false;
						break; // hide on tab out
				case 13: var sel = $('td.' + $.datepicker._dayOverClass + ':not(.' + 
									$.datepicker._currentClass + ')', inst.dpDiv);
						if (sel[0])
							$.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0]);
						else
							$.datepicker._hideDatepicker();
						return false; // don't submit the form
						break; // select the value on enter
				case 27: $.datepicker._hideDatepicker();
						break; // hide on escape
				case 33: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
							-$.datepicker._get(inst, 'stepBigMonths') :
							-$.datepicker._get(inst, 'stepMonths')), 'M');
						break; // previous month/year on page up/+ ctrl
				case 34: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
							+$.datepicker._get(inst, 'stepBigMonths') :
							+$.datepicker._get(inst, 'stepMonths')), 'M');
						break; // next month/year on page down/+ ctrl
				case 35: if (event.ctrlKey || event.metaKey) $.datepicker._clearDate(event.target);
						handled = event.ctrlKey || event.metaKey;
						break; // clear on ctrl or command +end
				case 36: if (event.ctrlKey || event.metaKey) $.datepicker._gotoToday(event.target);
						handled = event.ctrlKey || event.metaKey;
						break; // current on ctrl or command +home
				case 37: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, (isRTL ? +1 : -1), 'D');
						handled = event.ctrlKey || event.metaKey;
						// -1 day on ctrl or command +left
						if (event.originalEvent.altKey) $.datepicker._adjustDate(event.target, (event.ctrlKey ?
									-$.datepicker._get(inst, 'stepBigMonths') :
									-$.datepicker._get(inst, 'stepMonths')), 'M');
						// next month/year on alt +left on Mac
						break;
				case 38: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, -7, 'D');
						handled = event.ctrlKey || event.metaKey;
						break; // -1 week on ctrl or command +up
				case 39: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, (isRTL ? -1 : +1), 'D');
						handled = event.ctrlKey || event.metaKey;
						// +1 day on ctrl or command +right
						if (event.originalEvent.altKey) $.datepicker._adjustDate(event.target, (event.ctrlKey ?
									+$.datepicker._get(inst, 'stepBigMonths') :
									+$.datepicker._get(inst, 'stepMonths')), 'M');
						// next month/year on alt +right
						break;
				case 40: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, +7, 'D');
						handled = event.ctrlKey || event.metaKey;
						break; // +1 week on ctrl or command +down
				default: handled = false;
			}
		else if (event.keyCode == 36 && event.ctrlKey) // display the date picker on ctrl+home
			$.datepicker._showDatepicker(this);
		else {
			handled = false;
		}
		if (handled) {
			event.preventDefault();
			event.stopPropagation();
		}
	},

	/* Filter entered characters - based on date format. */
	_doKeyPress: function(event) {
		var inst = $.datepicker._getInst(event.target);
		if ($.datepicker._get(inst, 'constrainInput')) {
			var chars = $.datepicker._possibleChars($.datepicker._get(inst, 'dateFormat'));
			var chr = String.fromCharCode(event.charCode == undefined ? event.keyCode : event.charCode);
			return event.ctrlKey || event.metaKey || (chr < ' ' || !chars || chars.indexOf(chr) > -1);
		}
	},

	/* Synchronise manual entry and field/alternate field. */
	_doKeyUp: function(event) {
		var inst = $.datepicker._getInst(event.target);
		if (inst.input.val() != inst.lastVal) {
			try {
				var date = $.datepicker.parseDate($.datepicker._get(inst, 'dateFormat'),
					(inst.input ? inst.input.val() : null),
					$.datepicker._getFormatConfig(inst));
				if (date) { // only if valid
					$.datepicker._setDateFromField(inst);
					$.datepicker._updateAlternate(inst);
					$.datepicker._updateDatepicker(inst);
				}
			}
			catch (event) {
				$.datepicker.log(event);
			}
		}
		return true;
	},

	/* Pop-up the date picker for a given input field.
	   @param  input  element - the input field attached to the date picker or
	                  event - if triggered by focus */
	_showDatepicker: function(input) {
		input = input.target || input;
		if (input.nodeName.toLowerCase() != 'input') // find from button/image trigger
			input = $('input', input.parentNode)[0];
		if ($.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput == input) // already here
			return;
		var inst = $.datepicker._getInst(input);
		if ($.datepicker._curInst && $.datepicker._curInst != inst) {
			if ( $.datepicker._datepickerShowing ) {
				$.datepicker._triggerOnClose($.datepicker._curInst);
			}
			$.datepicker._curInst.dpDiv.stop(true, true);
		}
		var beforeShow = $.datepicker._get(inst, 'beforeShow');
		extendRemove(inst.settings, (beforeShow ? beforeShow.apply(input, [input, inst]) : {}));
		inst.lastVal = null;
		$.datepicker._lastInput = input;
		$.datepicker._setDateFromField(inst);
		if ($.datepicker._inDialog) // hide cursor
			input.value = '';
		if (!$.datepicker._pos) { // position below input
			$.datepicker._pos = $.datepicker._findPos(input);
			$.datepicker._pos[1] += input.offsetHeight; // add the height
		}
		var isFixed = false;
		$(input).parents().each(function() {
			isFixed |= $(this).css('position') == 'fixed';
			return !isFixed;
		});
		if (isFixed && $.browser.opera) { // correction for Opera when fixed and scrolled
			$.datepicker._pos[0] -= document.documentElement.scrollLeft;
			$.datepicker._pos[1] -= document.documentElement.scrollTop;
		}
		var offset = {left: $.datepicker._pos[0], top: $.datepicker._pos[1]};
		$.datepicker._pos = null;
		//to avoid flashes on Firefox
		inst.dpDiv.empty();
		// determine sizing offscreen
		inst.dpDiv.css({position: 'absolute', display: 'block', top: '-1000px'});
		$.datepicker._updateDatepicker(inst);
		// fix width for dynamic number of date pickers
		// and adjust position before showing
		offset = $.datepicker._checkOffset(inst, offset, isFixed);
		inst.dpDiv.css({position: ($.datepicker._inDialog && $.blockUI ?
			'static' : (isFixed ? 'fixed' : 'absolute')), display: 'none',
			left: offset.left + 'px', top: offset.top + 'px'});
		if (!inst.inline) {
			var showAnim = $.datepicker._get(inst, 'showAnim');
			var duration = $.datepicker._get(inst, 'duration');
			var postProcess = function() {
				var cover = inst.dpDiv.find('iframe.ui-datepicker-cover'); // IE6- only
				if( !! cover.length ){
					var borders = $.datepicker._getBorders(inst.dpDiv);
					cover.css({left: -borders[0], top: -borders[1],
						width: inst.dpDiv.outerWidth(), height: inst.dpDiv.outerHeight()});
				}
			};
			inst.dpDiv.zIndex($(input).zIndex()+1);
			$.datepicker._datepickerShowing = true;
			if ($.effects && $.effects[showAnim])
				inst.dpDiv.show(showAnim, $.datepicker._get(inst, 'showOptions'), duration, postProcess);
			else
				inst.dpDiv[showAnim || 'show']((showAnim ? duration : null), postProcess);
			if (!showAnim || !duration)
				postProcess();
			if (inst.input.is(':visible') && !inst.input.is(':disabled'))
				inst.input.focus();
			$.datepicker._curInst = inst;
		}
	},

	/* Generate the date picker content. */
	_updateDatepicker: function(inst) {
		var self = this;
		self.maxRows = 4; //Reset the max number of rows being displayed (see #7043)
		var borders = $.datepicker._getBorders(inst.dpDiv);
		instActive = inst; // for delegate hover events
		inst.dpDiv.empty().append(this._generateHTML(inst));
		var cover = inst.dpDiv.find('iframe.ui-datepicker-cover'); // IE6- only
		if( !!cover.length ){ //avoid call to outerXXXX() when not in IE6
			cover.css({left: -borders[0], top: -borders[1], width: inst.dpDiv.outerWidth(), height: inst.dpDiv.outerHeight()})
		}
		inst.dpDiv.find('.' + this._dayOverClass + ' a').mouseover();
		var numMonths = this._getNumberOfMonths(inst);
		var cols = numMonths[1];
		var width = 17;
		inst.dpDiv.removeClass('ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4').width('');
		if (cols > 1)
			inst.dpDiv.addClass('ui-datepicker-multi-' + cols).css('width', (width * cols) + 'em');
		inst.dpDiv[(numMonths[0] != 1 || numMonths[1] != 1 ? 'add' : 'remove') +
			'Class']('ui-datepicker-multi');
		inst.dpDiv[(this._get(inst, 'isRTL') ? 'add' : 'remove') +
			'Class']('ui-datepicker-rtl');
		if (inst == $.datepicker._curInst && $.datepicker._datepickerShowing && inst.input &&
				// #6694 - don't focus the input if it's already focused
				// this breaks the change event in IE
				inst.input.is(':visible') && !inst.input.is(':disabled') && inst.input[0] != document.activeElement)
			inst.input.focus();
		// deffered render of the years select (to avoid flashes on Firefox) 
		if( inst.yearshtml ){
			var origyearshtml = inst.yearshtml;
			setTimeout(function(){
				//assure that inst.yearshtml didn't change.
				if( origyearshtml === inst.yearshtml && inst.yearshtml ){
					inst.dpDiv.find('select.ui-datepicker-year:first').replaceWith(inst.yearshtml);
				}
				origyearshtml = inst.yearshtml = null;
			}, 0);
		}
	},

	/* Retrieve the size of left and top borders for an element.
	   @param  elem  (jQuery object) the element of interest
	   @return  (number[2]) the left and top borders */
	_getBorders: function(elem) {
		var convert = function(value) {
			return {thin: 1, medium: 2, thick: 3}[value] || value;
		};
		return [parseFloat(convert(elem.css('border-left-width'))),
			parseFloat(convert(elem.css('border-top-width')))];
	},

	/* Check positioning to remain on screen. */
	_checkOffset: function(inst, offset, isFixed) {
		var dpWidth = inst.dpDiv.outerWidth();
		var dpHeight = inst.dpDiv.outerHeight();
		var inputWidth = inst.input ? inst.input.outerWidth() : 0;
		var inputHeight = inst.input ? inst.input.outerHeight() : 0;
		var viewWidth = document.documentElement.clientWidth + $(document).scrollLeft();
		var viewHeight = document.documentElement.clientHeight + $(document).scrollTop();

		offset.left -= (this._get(inst, 'isRTL') ? (dpWidth - inputWidth) : 0);
		offset.left -= (isFixed && offset.left == inst.input.offset().left) ? $(document).scrollLeft() : 0;
		offset.top -= (isFixed && offset.top == (inst.input.offset().top + inputHeight)) ? $(document).scrollTop() : 0;

		// now check if datepicker is showing outside window viewport - move to a better place if so.
		offset.left -= Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ?
			Math.abs(offset.left + dpWidth - viewWidth) : 0);
		offset.top -= Math.min(offset.top, (offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ?
			Math.abs(dpHeight + inputHeight) : 0);

		return offset;
	},

	/* Find an object's position on the screen. */
	_findPos: function(obj) {
		var inst = this._getInst(obj);
		var isRTL = this._get(inst, 'isRTL');
        while (obj && (obj.type == 'hidden' || obj.nodeType != 1 || $.expr.filters.hidden(obj))) {
            obj = obj[isRTL ? 'previousSibling' : 'nextSibling'];
        }
        var position = $(obj).offset();
	    return [position.left, position.top];
	},

	/* Trigger custom callback of onClose. */
	_triggerOnClose: function(inst) {
		var onClose = this._get(inst, 'onClose');
		if (onClose)
			onClose.apply((inst.input ? inst.input[0] : null),
						  [(inst.input ? inst.input.val() : ''), inst]);
	},

	/* Hide the date picker from view.
	   @param  input  element - the input field attached to the date picker */
	_hideDatepicker: function(input) {
		var inst = this._curInst;
		if (!inst || (input && inst != $.data(input, PROP_NAME)))
			return;
		if (this._datepickerShowing) {
			var showAnim = this._get(inst, 'showAnim');
			var duration = this._get(inst, 'duration');
			var postProcess = function() {
				$.datepicker._tidyDialog(inst);
				this._curInst = null;
			};
			if ($.effects && $.effects[showAnim])
				inst.dpDiv.hide(showAnim, $.datepicker._get(inst, 'showOptions'), duration, postProcess);
			else
				inst.dpDiv[(showAnim == 'slideDown' ? 'slideUp' :
					(showAnim == 'fadeIn' ? 'fadeOut' : 'hide'))]((showAnim ? duration : null), postProcess);
			if (!showAnim)
				postProcess();
			$.datepicker._triggerOnClose(inst);
			this._datepickerShowing = false;
			this._lastInput = null;
			if (this._inDialog) {
				this._dialogInput.css({ position: 'absolute', left: '0', top: '-100px' });
				if ($.blockUI) {
					$.unblockUI();
					$('body').append(this.dpDiv);
				}
			}
			this._inDialog = false;
		}
	},

	/* Tidy up after a dialog display. */
	_tidyDialog: function(inst) {
		inst.dpDiv.removeClass(this._dialogClass).unbind('.ui-datepicker-calendar');
	},

	/* Close date picker if clicked elsewhere. */
	_checkExternalClick: function(event) {
		if (!$.datepicker._curInst)
			return;
		var $target = $(event.target);
		if ($target[0].id != $.datepicker._mainDivId &&
				$target.parents('#' + $.datepicker._mainDivId).length == 0 &&
				!$target.hasClass($.datepicker.markerClassName) &&
				!$target.hasClass($.datepicker._triggerClass) &&
				$.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI))
			$.datepicker._hideDatepicker();
	},

	/* Adjust one of the date sub-fields. */
	_adjustDate: function(id, offset, period) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		if (this._isDisabledDatepicker(target[0])) {
			return;
		}
		this._adjustInstDate(inst, offset +
			(period == 'M' ? this._get(inst, 'showCurrentAtPos') : 0), // undo positioning
			period);
		this._updateDatepicker(inst);
	},

	/* Action for current link. */
	_gotoToday: function(id) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		if (this._get(inst, 'gotoCurrent') && inst.currentDay) {
			inst.selectedDay = inst.currentDay;
			inst.drawMonth = inst.selectedMonth = inst.currentMonth;
			inst.drawYear = inst.selectedYear = inst.currentYear;
		}
		else {
			var date = new Date();
			inst.selectedDay = date.getDate();
			inst.drawMonth = inst.selectedMonth = date.getMonth();
			inst.drawYear = inst.selectedYear = date.getFullYear();
		}
		this._notifyChange(inst);
		this._adjustDate(target);
	},

	/* Action for selecting a new month/year. */
	_selectMonthYear: function(id, select, period) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		inst._selectingMonthYear = false;
		inst['selected' + (period == 'M' ? 'Month' : 'Year')] =
		inst['draw' + (period == 'M' ? 'Month' : 'Year')] =
			parseInt(select.options[select.selectedIndex].value,10);
		this._notifyChange(inst);
		this._adjustDate(target);
	},

	/* Restore input focus after not changing month/year. */
	_clickMonthYear: function(id) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		if (inst.input && inst._selectingMonthYear) {
			setTimeout(function() {
				inst.input.focus();
			}, 0);
		}
		inst._selectingMonthYear = !inst._selectingMonthYear;
	},

	/* Action for selecting a day. */
	_selectDay: function(id, month, year, td) {
		var target = $(id);
		if ($(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
			return;
		}
		var inst = this._getInst(target[0]);
		inst.selectedDay = inst.currentDay = $('a', td).html();
		inst.selectedMonth = inst.currentMonth = month;
		inst.selectedYear = inst.currentYear = year;
		this._selectDate(id, this._formatDate(inst,
			inst.currentDay, inst.currentMonth, inst.currentYear));
	},

	/* Erase the input field and hide the date picker. */
	_clearDate: function(id) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		this._selectDate(target, '');
	},

	/* Update the input field with the selected date. */
	_selectDate: function(id, dateStr) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		dateStr = (dateStr != null ? dateStr : this._formatDate(inst));
		if (inst.input)
			inst.input.val(dateStr);
		this._updateAlternate(inst);
		var onSelect = this._get(inst, 'onSelect');
		if (onSelect)
			onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);  // trigger custom callback
		else if (inst.input)
			inst.input.trigger('change'); // fire the change event
		if (inst.inline)
			this._updateDatepicker(inst);
		else {
			this._hideDatepicker();
			this._lastInput = inst.input[0];
			if (typeof(inst.input[0]) != 'object')
				inst.input.focus(); // restore focus
			this._lastInput = null;
		}
	},

	/* Update any alternate field to synchronise with the main field. */
	_updateAlternate: function(inst) {
		var altField = this._get(inst, 'altField');
		if (altField) { // update alternate field too
			var altFormat = this._get(inst, 'altFormat') || this._get(inst, 'dateFormat');
			var date = this._getDate(inst);
			var dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
			$(altField).each(function() { $(this).val(dateStr); });
		}
	},

	/* Set as beforeShowDay function to prevent selection of weekends.
	   @param  date  Date - the date to customise
	   @return [boolean, string] - is this date selectable?, what is its CSS class? */
	noWeekends: function(date) {
		var day = date.getDay();
		return [(day > 0 && day < 6), ''];
	},

	/* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
	   @param  date  Date - the date to get the week for
	   @return  number - the number of the week within the year that contains this date */
	iso8601Week: function(date) {
		var checkDate = new Date(date.getTime());
		// Find Thursday of this week starting on Monday
		checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
		var time = checkDate.getTime();
		checkDate.setMonth(0); // Compare with Jan 1
		checkDate.setDate(1);
		return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
	},

	/* Parse a string value into a date object.
	   See formatDate below for the possible formats.

	   @param  format    string - the expected format of the date
	   @param  value     string - the date in the above format
	   @param  settings  Object - attributes include:
	                     shortYearCutoff  number - the cutoff year for determining the century (optional)
	                     dayNamesShort    string[7] - abbreviated names of the days from Sunday (optional)
	                     dayNames         string[7] - names of the days from Sunday (optional)
	                     monthNamesShort  string[12] - abbreviated names of the months (optional)
	                     monthNames       string[12] - names of the months (optional)
	   @return  Date - the extracted date value or null if value is blank */
	parseDate: function (format, value, settings) {
		if (format == null || value == null)
			throw 'Invalid arguments';
		value = (typeof value == 'object' ? value.toString() : value + '');
		if (value == '')
			return null;
		var shortYearCutoff = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff;
		shortYearCutoff = (typeof shortYearCutoff != 'string' ? shortYearCutoff :
				new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
		var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
		var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
		var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
		var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
		var year = -1;
		var month = -1;
		var day = -1;
		var doy = -1;
		var literal = false;
		// Check whether a format character is doubled
		var lookAhead = function(match) {
			var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
			if (matches)
				iFormat++;
			return matches;
		};
		// Extract a number from the string value
		var getNumber = function(match) {
			var isDoubled = lookAhead(match);
			var size = (match == '@' ? 14 : (match == '!' ? 20 :
				(match == 'y' && isDoubled ? 4 : (match == 'o' ? 3 : 2))));
			var digits = new RegExp('^\\d{1,' + size + '}');
			var num = value.substring(iValue).match(digits);
			if (!num)
				throw 'Missing number at position ' + iValue;
			iValue += num[0].length;
			return parseInt(num[0], 10);
		};
		// Extract a name from the string value and convert to an index
		var getName = function(match, shortNames, longNames) {
			var names = $.map(lookAhead(match) ? longNames : shortNames, function (v, k) {
				return [ [k, v] ];
			}).sort(function (a, b) {
				return -(a[1].length - b[1].length);
			});
			var index = -1;
			$.each(names, function (i, pair) {
				var name = pair[1];
				if (value.substr(iValue, name.length).toLowerCase() == name.toLowerCase()) {
					index = pair[0];
					iValue += name.length;
					return false;
				}
			});
			if (index != -1)
				return index + 1;
			else
				throw 'Unknown name at position ' + iValue;
		};
		// Confirm that a literal character matches the string value
		var checkLiteral = function() {
			if (value.charAt(iValue) != format.charAt(iFormat))
				throw 'Unexpected literal at position ' + iValue;
			iValue++;
		};
		var iValue = 0;
		for (var iFormat = 0; iFormat < format.length; iFormat++) {
			if (literal)
				if (format.charAt(iFormat) == "'" && !lookAhead("'"))
					literal = false;
				else
					checkLiteral();
			else
				switch (format.charAt(iFormat)) {
					case 'd':
						day = getNumber('d');
						break;
					case 'D':
						getName('D', dayNamesShort, dayNames);
						break;
					case 'o':
						doy = getNumber('o');
						break;
					case 'm':
						month = getNumber('m');
						break;
					case 'M':
						month = getName('M', monthNamesShort, monthNames);
						break;
					case 'y':
						year = getNumber('y');
						break;
					case '@':
						var date = new Date(getNumber('@'));
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case '!':
						var date = new Date((getNumber('!') - this._ticksTo1970) / 10000);
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case "'":
						if (lookAhead("'"))
							checkLiteral();
						else
							literal = true;
						break;
					default:
						checkLiteral();
				}
		}
		if (iValue < value.length){
			throw "Extra/unparsed characters found in date: " + value.substring(iValue);
		}
		if (year == -1)
			year = new Date().getFullYear();
		else if (year < 100)
			year += new Date().getFullYear() - new Date().getFullYear() % 100 +
				(year <= shortYearCutoff ? 0 : -100);
		if (doy > -1) {
			month = 1;
			day = doy;
			do {
				var dim = this._getDaysInMonth(year, month - 1);
				if (day <= dim)
					break;
				month++;
				day -= dim;
			} while (true);
		}
		var date = this._daylightSavingAdjust(new Date(year, month - 1, day));
		if (date.getFullYear() != year || date.getMonth() + 1 != month || date.getDate() != day)
			throw 'Invalid date'; // E.g. 31/02/00
		return date;
	},

	/* Standard date formats. */
	ATOM: 'yy-mm-dd', // RFC 3339 (ISO 8601)
	COOKIE: 'D, dd M yy',
	ISO_8601: 'yy-mm-dd',
	RFC_822: 'D, d M y',
	RFC_850: 'DD, dd-M-y',
	RFC_1036: 'D, d M y',
	RFC_1123: 'D, d M yy',
	RFC_2822: 'D, d M yy',
	RSS: 'D, d M y', // RFC 822
	TICKS: '!',
	TIMESTAMP: '@',
	W3C: 'yy-mm-dd', // ISO 8601

	_ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) +
		Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),

	/* Format a date object into a string value.
	   The format can be combinations of the following:
	   d  - day of month (no leading zero)
	   dd - day of month (two digit)
	   o  - day of year (no leading zeros)
	   oo - day of year (three digit)
	   D  - day name short
	   DD - day name long
	   m  - month of year (no leading zero)
	   mm - month of year (two digit)
	   M  - month name short
	   MM - month name long
	   y  - year (two digit)
	   yy - year (four digit)
	   @ - Unix timestamp (ms since 01/01/1970)
	   ! - Windows ticks (100ns since 01/01/0001)
	   '...' - literal text
	   '' - single quote

	   @param  format    string - the desired format of the date
	   @param  date      Date - the date value to format
	   @param  settings  Object - attributes include:
	                     dayNamesShort    string[7] - abbreviated names of the days from Sunday (optional)
	                     dayNames         string[7] - names of the days from Sunday (optional)
	                     monthNamesShort  string[12] - abbreviated names of the months (optional)
	                     monthNames       string[12] - names of the months (optional)
	   @return  string - the date in the above format */
	formatDate: function (format, date, settings) {
		if (!date)
			return '';
		var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
		var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
		var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
		var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
		// Check whether a format character is doubled
		var lookAhead = function(match) {
			var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
			if (matches)
				iFormat++;
			return matches;
		};
		// Format a number, with leading zero if necessary
		var formatNumber = function(match, value, len) {
			var num = '' + value;
			if (lookAhead(match))
				while (num.length < len)
					num = '0' + num;
			return num;
		};
		// Format a name, short or long as requested
		var formatName = function(match, value, shortNames, longNames) {
			return (lookAhead(match) ? longNames[value] : shortNames[value]);
		};
		var output = '';
		var literal = false;
		if (date)
			for (var iFormat = 0; iFormat < format.length; iFormat++) {
				if (literal)
					if (format.charAt(iFormat) == "'" && !lookAhead("'"))
						literal = false;
					else
						output += format.charAt(iFormat);
				else
					switch (format.charAt(iFormat)) {
						case 'd':
							output += formatNumber('d', date.getDate(), 2);
							break;
						case 'D':
							output += formatName('D', date.getDay(), dayNamesShort, dayNames);
							break;
						case 'o':
							output += formatNumber('o',
								Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
							break;
						case 'm':
							output += formatNumber('m', date.getMonth() + 1, 2);
							break;
						case 'M':
							output += formatName('M', date.getMonth(), monthNamesShort, monthNames);
							break;
						case 'y':
							output += (lookAhead('y') ? date.getFullYear() :
								(date.getYear() % 100 < 10 ? '0' : '') + date.getYear() % 100);
							break;
						case '@':
							output += date.getTime();
							break;
						case '!':
							output += date.getTime() * 10000 + this._ticksTo1970;
							break;
						case "'":
							if (lookAhead("'"))
								output += "'";
							else
								literal = true;
							break;
						default:
							output += format.charAt(iFormat);
					}
			}
		return output;
	},

	/* Extract all possible characters from the date format. */
	_possibleChars: function (format) {
		var chars = '';
		var literal = false;
		// Check whether a format character is doubled
		var lookAhead = function(match) {
			var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
			if (matches)
				iFormat++;
			return matches;
		};
		for (var iFormat = 0; iFormat < format.length; iFormat++)
			if (literal)
				if (format.charAt(iFormat) == "'" && !lookAhead("'"))
					literal = false;
				else
					chars += format.charAt(iFormat);
			else
				switch (format.charAt(iFormat)) {
					case 'd': case 'm': case 'y': case '@':
						chars += '0123456789';
						break;
					case 'D': case 'M':
						return null; // Accept anything
					case "'":
						if (lookAhead("'"))
							chars += "'";
						else
							literal = true;
						break;
					default:
						chars += format.charAt(iFormat);
				}
		return chars;
	},

	/* Get a setting value, defaulting if necessary. */
	_get: function(inst, name) {
		return inst.settings[name] !== undefined ?
			inst.settings[name] : this._defaults[name];
	},

	/* Parse existing date and initialise date picker. */
	_setDateFromField: function(inst, noDefault) {
		if (inst.input.val() == inst.lastVal) {
			return;
		}
		var dateFormat = this._get(inst, 'dateFormat');
		var dates = inst.lastVal = inst.input ? inst.input.val() : null;
		var date, defaultDate;
		date = defaultDate = this._getDefaultDate(inst);
		var settings = this._getFormatConfig(inst);
		try {
			date = this.parseDate(dateFormat, dates, settings) || defaultDate;
		} catch (event) {
			this.log(event);
			dates = (noDefault ? '' : dates);
		}
		inst.selectedDay = date.getDate();
		inst.drawMonth = inst.selectedMonth = date.getMonth();
		inst.drawYear = inst.selectedYear = date.getFullYear();
		inst.currentDay = (dates ? date.getDate() : 0);
		inst.currentMonth = (dates ? date.getMonth() : 0);
		inst.currentYear = (dates ? date.getFullYear() : 0);
		this._adjustInstDate(inst);
	},

	/* Retrieve the default date shown on opening. */
	_getDefaultDate: function(inst) {
		return this._restrictMinMax(inst,
			this._determineDate(inst, this._get(inst, 'defaultDate'), new Date()));
	},

	/* A date may be specified as an exact value or a relative one. */
	_determineDate: function(inst, date, defaultDate) {
		var offsetNumeric = function(offset) {
			var date = new Date();
			date.setDate(date.getDate() + offset);
			return date;
		};
		var offsetString = function(offset) {
			try {
				return $.datepicker.parseDate($.datepicker._get(inst, 'dateFormat'),
					offset, $.datepicker._getFormatConfig(inst));
			}
			catch (e) {
				// Ignore
			}
			var date = (offset.toLowerCase().match(/^c/) ?
				$.datepicker._getDate(inst) : null) || new Date();
			var year = date.getFullYear();
			var month = date.getMonth();
			var day = date.getDate();
			var pattern = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;
			var matches = pattern.exec(offset);
			while (matches) {
				switch (matches[2] || 'd') {
					case 'd' : case 'D' :
						day += parseInt(matches[1],10); break;
					case 'w' : case 'W' :
						day += parseInt(matches[1],10) * 7; break;
					case 'm' : case 'M' :
						month += parseInt(matches[1],10);
						day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
						break;
					case 'y': case 'Y' :
						year += parseInt(matches[1],10);
						day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
						break;
				}
				matches = pattern.exec(offset);
			}
			return new Date(year, month, day);
		};
		var newDate = (date == null || date === '' ? defaultDate : (typeof date == 'string' ? offsetString(date) :
			(typeof date == 'number' ? (isNaN(date) ? defaultDate : offsetNumeric(date)) : new Date(date.getTime()))));
		newDate = (newDate && newDate.toString() == 'Invalid Date' ? defaultDate : newDate);
		if (newDate) {
			newDate.setHours(0);
			newDate.setMinutes(0);
			newDate.setSeconds(0);
			newDate.setMilliseconds(0);
		}
		return this._daylightSavingAdjust(newDate);
	},

	/* Handle switch to/from daylight saving.
	   Hours may be non-zero on daylight saving cut-over:
	   > 12 when midnight changeover, but then cannot generate
	   midnight datetime, so jump to 1AM, otherwise reset.
	   @param  date  (Date) the date to check
	   @return  (Date) the corrected date */
	_daylightSavingAdjust: function(date) {
		if (!date) return null;
		date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
		return date;
	},

	/* Set the date(s) directly. */
	_setDate: function(inst, date, noChange) {
		var clear = !date;
		var origMonth = inst.selectedMonth;
		var origYear = inst.selectedYear;
		var newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date()));
		inst.selectedDay = inst.currentDay = newDate.getDate();
		inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
		inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
		if ((origMonth != inst.selectedMonth || origYear != inst.selectedYear) && !noChange)
			this._notifyChange(inst);
		this._adjustInstDate(inst);
		if (inst.input) {
			inst.input.val(clear ? '' : this._formatDate(inst));
		}
	},

	/* Retrieve the date(s) directly. */
	_getDate: function(inst) {
		var startDate = (!inst.currentYear || (inst.input && inst.input.val() == '') ? null :
			this._daylightSavingAdjust(new Date(
			inst.currentYear, inst.currentMonth, inst.currentDay)));
			return startDate;
	},

	/* Generate the HTML for the current state of the date picker. */
	_generateHTML: function(inst) {
		var today = new Date();
		today = this._daylightSavingAdjust(
			new Date(today.getFullYear(), today.getMonth(), today.getDate())); // clear time
		var isRTL = this._get(inst, 'isRTL');
		var showButtonPanel = this._get(inst, 'showButtonPanel');
		var hideIfNoPrevNext = this._get(inst, 'hideIfNoPrevNext');
		var navigationAsDateFormat = this._get(inst, 'navigationAsDateFormat');
		var numMonths = this._getNumberOfMonths(inst);
		var showCurrentAtPos = this._get(inst, 'showCurrentAtPos');
		var stepMonths = this._get(inst, 'stepMonths');
		var isMultiMonth = (numMonths[0] != 1 || numMonths[1] != 1);
		var currentDate = this._daylightSavingAdjust((!inst.currentDay ? new Date(9999, 9, 9) :
			new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
		var minDate = this._getMinMaxDate(inst, 'min');
		var maxDate = this._getMinMaxDate(inst, 'max');
		var drawMonth = inst.drawMonth - showCurrentAtPos;
		var drawYear = inst.drawYear;
		if (drawMonth < 0) {
			drawMonth += 12;
			drawYear--;
		}
		if (maxDate) {
			var maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(),
				maxDate.getMonth() - (numMonths[0] * numMonths[1]) + 1, maxDate.getDate()));
			maxDraw = (minDate && maxDraw < minDate ? minDate : maxDraw);
			while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) {
				drawMonth--;
				if (drawMonth < 0) {
					drawMonth = 11;
					drawYear--;
				}
			}
		}
		inst.drawMonth = drawMonth;
		inst.drawYear = drawYear;
		var prevText = this._get(inst, 'prevText');
		prevText = (!navigationAsDateFormat ? prevText : this.formatDate(prevText,
			this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)),
			this._getFormatConfig(inst)));
		var prev = (this._canAdjustMonth(inst, -1, drawYear, drawMonth) ?
			'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' + dpuuid +
			'.datepicker._adjustDate(\'#' + inst.id + '\', -' + stepMonths + ', \'M\');"' +
			' title="' + prevText + '"><span class="ui-icon ui-icon-circle-triangle-' + ( isRTL ? 'e' : 'w') + '">' + prevText + '</span></a>' :
			(hideIfNoPrevNext ? '' : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+ prevText +'"><span class="ui-icon ui-icon-circle-triangle-' + ( isRTL ? 'e' : 'w') + '">' + prevText + '</span></a>'));
		var nextText = this._get(inst, 'nextText');
		nextText = (!navigationAsDateFormat ? nextText : this.formatDate(nextText,
			this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)),
			this._getFormatConfig(inst)));
		var next = (this._canAdjustMonth(inst, +1, drawYear, drawMonth) ?
			'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' + dpuuid +
			'.datepicker._adjustDate(\'#' + inst.id + '\', +' + stepMonths + ', \'M\');"' +
			' title="' + nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + ( isRTL ? 'w' : 'e') + '">' + nextText + '</span></a>' :
			(hideIfNoPrevNext ? '' : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+ nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + ( isRTL ? 'w' : 'e') + '">' + nextText + '</span></a>'));
		var currentText = this._get(inst, 'currentText');
		var gotoDate = (this._get(inst, 'gotoCurrent') && inst.currentDay ? currentDate : today);
		currentText = (!navigationAsDateFormat ? currentText :
			this.formatDate(currentText, gotoDate, this._getFormatConfig(inst)));
		var controls = (!inst.inline ? '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' + dpuuid +
			'.datepicker._hideDatepicker();">' + this._get(inst, 'closeText') + '</button>' : '');
		var buttonPanel = (showButtonPanel) ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (isRTL ? controls : '') +
			(this._isInRange(inst, gotoDate) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' + dpuuid +
			'.datepicker._gotoToday(\'#' + inst.id + '\');"' +
			'>' + currentText + '</button>' : '') + (isRTL ? '' : controls) + '</div>' : '';
		var firstDay = parseInt(this._get(inst, 'firstDay'),10);
		firstDay = (isNaN(firstDay) ? 0 : firstDay);
		var showWeek = this._get(inst, 'showWeek');
		var dayNames = this._get(inst, 'dayNames');
		var dayNamesShort = this._get(inst, 'dayNamesShort');
		var dayNamesMin = this._get(inst, 'dayNamesMin');
		var monthNames = this._get(inst, 'monthNames');
		var monthNamesShort = this._get(inst, 'monthNamesShort');
		var beforeShowDay = this._get(inst, 'beforeShowDay');
		var showOtherMonths = this._get(inst, 'showOtherMonths');
		var selectOtherMonths = this._get(inst, 'selectOtherMonths');
		var calculateWeek = this._get(inst, 'calculateWeek') || this.iso8601Week;
		var defaultDate = this._getDefaultDate(inst);
		var html = '';
		for (var row = 0; row < numMonths[0]; row++) {
			var group = '';
			this.maxRows = 4;
			for (var col = 0; col < numMonths[1]; col++) {
				var selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay));
				var cornerClass = ' ui-corner-all';
				var calender = '';
				if (isMultiMonth) {
					calender += '<div class="ui-datepicker-group';
					if (numMonths[1] > 1)
						switch (col) {
							case 0: calender += ' ui-datepicker-group-first';
								cornerClass = ' ui-corner-' + (isRTL ? 'right' : 'left'); break;
							case numMonths[1]-1: calender += ' ui-datepicker-group-last';
								cornerClass = ' ui-corner-' + (isRTL ? 'left' : 'right'); break;
							default: calender += ' ui-datepicker-group-middle'; cornerClass = ''; break;
						}
					calender += '">';
				}
				calender += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + cornerClass + '">' +
					(/all|left/.test(cornerClass) && row == 0 ? (isRTL ? next : prev) : '') +
					(/all|right/.test(cornerClass) && row == 0 ? (isRTL ? prev : next) : '') +
					this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate,
					row > 0 || col > 0, monthNames, monthNamesShort) + // draw month headers
					'</div><table class="ui-datepicker-calendar"><thead>' +
					'<tr>';
				var thead = (showWeek ? '<th class="ui-datepicker-week-col">' + this._get(inst, 'weekHeader') + '</th>' : '');
				for (var dow = 0; dow < 7; dow++) { // days of the week
					var day = (dow + firstDay) % 7;
					thead += '<th' + ((dow + firstDay + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : '') + '>' +
						'<span title="' + dayNames[day] + '">' + dayNamesMin[day] + '</span></th>';
				}
				calender += thead + '</tr></thead><tbody>';
				var daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
				if (drawYear == inst.selectedYear && drawMonth == inst.selectedMonth)
					inst.selectedDay = Math.min(inst.selectedDay, daysInMonth);
				var leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
				var curRows = Math.ceil((leadDays + daysInMonth) / 7); // calculate the number of rows to generate
				var numRows = (isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows); //If multiple months, use the higher number of rows (see #7043)
				this.maxRows = numRows;
				var printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));
				for (var dRow = 0; dRow < numRows; dRow++) { // create date picker rows
					calender += '<tr>';
					var tbody = (!showWeek ? '' : '<td class="ui-datepicker-week-col">' +
						this._get(inst, 'calculateWeek')(printDate) + '</td>');
					for (var dow = 0; dow < 7; dow++) { // create date picker days
						var daySettings = (beforeShowDay ?
							beforeShowDay.apply((inst.input ? inst.input[0] : null), [printDate]) : [true, '']);
						var otherMonth = (printDate.getMonth() != drawMonth);
						var unselectable = (otherMonth && !selectOtherMonths) || !daySettings[0] ||
							(minDate && printDate < minDate) || (maxDate && printDate > maxDate);
						tbody += '<td class="' +
							((dow + firstDay + 6) % 7 >= 5 ? ' ui-datepicker-week-end' : '') + // highlight weekends
							(otherMonth ? ' ui-datepicker-other-month' : '') + // highlight days from other months
							((printDate.getTime() == selectedDate.getTime() && drawMonth == inst.selectedMonth && inst._keyEvent) || // user pressed key
							(defaultDate.getTime() == printDate.getTime() && defaultDate.getTime() == selectedDate.getTime()) ?
							// or defaultDate is current printedDate and defaultDate is selectedDate
							' ' + this._dayOverClass : '') + // highlight selected day
							(unselectable ? ' ' + this._unselectableClass + ' ui-state-disabled': '') +  // highlight unselectable days
							(otherMonth && !showOtherMonths ? '' : ' ' + daySettings[1] + // highlight custom dates
							(printDate.getTime() == currentDate.getTime() ? ' ' + this._currentClass : '') + // highlight selected day
							(printDate.getTime() == today.getTime() ? ' ui-datepicker-today' : '')) + '"' + // highlight today (if different)
							((!otherMonth || showOtherMonths) && daySettings[2] ? ' title="' + daySettings[2] + '"' : '') + // cell title
							(unselectable ? '' : ' onclick="DP_jQuery_' + dpuuid + '.datepicker._selectDay(\'#' +
							inst.id + '\',' + printDate.getMonth() + ',' + printDate.getFullYear() + ', this);return false;"') + '>' + // actions
							(otherMonth && !showOtherMonths ? '&#xa0;' : // display for other months
							(unselectable ? '<span class="ui-state-default">' + printDate.getDate() + '</span>' : '<a class="ui-state-default' +
							(printDate.getTime() == today.getTime() ? ' ui-state-highlight' : '') +
							(printDate.getTime() == currentDate.getTime() ? ' ui-state-active' : '') + // highlight selected day
							(otherMonth ? ' ui-priority-secondary' : '') + // distinguish dates from other months
							'" href="#" id="'+printDate.getFullYear()+'-'+(printDate.getMonth()+1)+'-'+printDate.getDate()+'">' + printDate.getDate() + '</a>')) + '</td>'; // display selectable date
						printDate.setDate(printDate.getDate() + 1);
						printDate = this._daylightSavingAdjust(printDate);
					}
					calender += tbody + '</tr>';
				}
				drawMonth++;
				if (drawMonth > 11) {
					drawMonth = 0;
					drawYear++;
				}
				calender += '</tbody></table>' + (isMultiMonth ? '</div>' + 
							((numMonths[0] > 0 && col == numMonths[1]-1) ? '<div class="ui-datepicker-row-break"></div>' : '') : '');
				group += calender;
			}
			html += group;
		}
		html += buttonPanel + ($.browser.msie && parseInt($.browser.version,10) < 7 && !inst.inline ?
			'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : '');
		inst._keyEvent = false;
		return html;
	},

	/* Generate the month and year header. */
	_generateMonthYearHeader: function(inst, drawMonth, drawYear, minDate, maxDate,
			secondary, monthNames, monthNamesShort) {
		var changeMonth = this._get(inst, 'changeMonth');
		var changeYear = this._get(inst, 'changeYear');
		var showMonthAfterYear = this._get(inst, 'showMonthAfterYear');
		var html = '<div class="ui-datepicker-title">';
		var monthHtml = '';
		// month selection
		if (secondary || !changeMonth)
			monthHtml += '<span class="ui-datepicker-month">' + monthNames[drawMonth] + '</span>';
		else {
			var inMinYear = (minDate && minDate.getFullYear() == drawYear);
			var inMaxYear = (maxDate && maxDate.getFullYear() == drawYear);
			monthHtml += '<select class="ui-datepicker-month" ' +
				'onchange="DP_jQuery_' + dpuuid + '.datepicker._selectMonthYear(\'#' + inst.id + '\', this, \'M\');" ' +
				'onclick="DP_jQuery_' + dpuuid + '.datepicker._clickMonthYear(\'#' + inst.id + '\');"' +
			 	'>';
			for (var month = 0; month < 12; month++) {
				if ((!inMinYear || month >= minDate.getMonth()) &&
						(!inMaxYear || month <= maxDate.getMonth()))
					monthHtml += '<option value="' + month + '"' +
						(month == drawMonth ? ' selected="selected"' : '') +
						'>' + monthNamesShort[month] + '</option>';
			}
			monthHtml += '</select>';
		}
		if (!showMonthAfterYear)
			html += monthHtml + (secondary || !(changeMonth && changeYear) ? '&#xa0;' : '');
		// year selection
		if ( !inst.yearshtml ) {
			inst.yearshtml = '';
			if (secondary || !changeYear)
				html += '<span class="ui-datepicker-year">' + drawYear + '</span>';
			else {
				// determine range of years to display
				var years = this._get(inst, 'yearRange').split(':');
				var thisYear = new Date().getFullYear();
				var determineYear = function(value) {
					var year = (value.match(/c[+-].*/) ? drawYear + parseInt(value.substring(1), 10) :
						(value.match(/[+-].*/) ? thisYear + parseInt(value, 10) :
						parseInt(value, 10)));
					return (isNaN(year) ? thisYear : year);
				};
				var year = determineYear(years[0]);
				var endYear = Math.max(year, determineYear(years[1] || ''));
				year = (minDate ? Math.max(year, minDate.getFullYear()) : year);
				endYear = (maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear);
				inst.yearshtml += '<select class="ui-datepicker-year" ' +
					'onchange="DP_jQuery_' + dpuuid + '.datepicker._selectMonthYear(\'#' + inst.id + '\', this, \'Y\');" ' +
					'onclick="DP_jQuery_' + dpuuid + '.datepicker._clickMonthYear(\'#' + inst.id + '\');"' +
					'>';
				for (; year <= endYear; year++) {
					inst.yearshtml += '<option value="' + year + '"' +
						(year == drawYear ? ' selected="selected"' : '') +
						'>' + year + '</option>';
				}
				inst.yearshtml += '</select>';
				
				html += inst.yearshtml;
				inst.yearshtml = null;
			}
		}
		html += this._get(inst, 'yearSuffix');
		if (showMonthAfterYear)
			html += (secondary || !(changeMonth && changeYear) ? '&#xa0;' : '') + monthHtml;
		html += '</div>'; // Close datepicker_header
		return html;
	},

	/* Adjust one of the date sub-fields. */
	_adjustInstDate: function(inst, offset, period) {
		var year = inst.drawYear + (period == 'Y' ? offset : 0);
		var month = inst.drawMonth + (period == 'M' ? offset : 0);
		var day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) +
			(period == 'D' ? offset : 0);
		var date = this._restrictMinMax(inst,
			this._daylightSavingAdjust(new Date(year, month, day)));
		inst.selectedDay = date.getDate();
		inst.drawMonth = inst.selectedMonth = date.getMonth();
		inst.drawYear = inst.selectedYear = date.getFullYear();
		if (period == 'M' || period == 'Y')
			this._notifyChange(inst);
	},

	/* Ensure a date is within any min/max bounds. */
	_restrictMinMax: function(inst, date) {
		var minDate = this._getMinMaxDate(inst, 'min');
		var maxDate = this._getMinMaxDate(inst, 'max');
		var newDate = (minDate && date < minDate ? minDate : date);
		newDate = (maxDate && newDate > maxDate ? maxDate : newDate);
		return newDate;
	},

	/* Notify change of month/year. */
	_notifyChange: function(inst) {
		var onChange = this._get(inst, 'onChangeMonthYear');
		if (onChange)
			onChange.apply((inst.input ? inst.input[0] : null),
				[inst.selectedYear, inst.selectedMonth + 1, inst]);
	},

	/* Determine the number of months to show. */
	_getNumberOfMonths: function(inst) {
		var numMonths = this._get(inst, 'numberOfMonths');
		return (numMonths == null ? [1, 1] : (typeof numMonths == 'number' ? [1, numMonths] : numMonths));
	},

	/* Determine the current maximum date - ensure no time components are set. */
	_getMinMaxDate: function(inst, minMax) {
		return this._determineDate(inst, this._get(inst, minMax + 'Date'), null);
	},

	/* Find the number of days in a given month. */
	_getDaysInMonth: function(year, month) {
		return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate();
	},

	/* Find the day of the week of the first of a month. */
	_getFirstDayOfMonth: function(year, month) {
		return new Date(year, month, 1).getDay();
	},

	/* Determines if we should allow a "next/prev" month display change. */
	_canAdjustMonth: function(inst, offset, curYear, curMonth) {
		var numMonths = this._getNumberOfMonths(inst);
		var date = this._daylightSavingAdjust(new Date(curYear,
			curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));
		if (offset < 0)
			date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()));
		return this._isInRange(inst, date);
	},

	/* Is the given date in the accepted range? */
	_isInRange: function(inst, date) {
		var minDate = this._getMinMaxDate(inst, 'min');
		var maxDate = this._getMinMaxDate(inst, 'max');
		return ((!minDate || date.getTime() >= minDate.getTime()) &&
			(!maxDate || date.getTime() <= maxDate.getTime()));
	},

	/* Provide the configuration settings for formatting/parsing. */
	_getFormatConfig: function(inst) {
		var shortYearCutoff = this._get(inst, 'shortYearCutoff');
		shortYearCutoff = (typeof shortYearCutoff != 'string' ? shortYearCutoff :
			new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
		return {shortYearCutoff: shortYearCutoff,
			dayNamesShort: this._get(inst, 'dayNamesShort'), dayNames: this._get(inst, 'dayNames'),
			monthNamesShort: this._get(inst, 'monthNamesShort'), monthNames: this._get(inst, 'monthNames')};
	},

	/* Format the given date for display. */
	_formatDate: function(inst, day, month, year) {
		if (!day) {
			inst.currentDay = inst.selectedDay;
			inst.currentMonth = inst.selectedMonth;
			inst.currentYear = inst.selectedYear;
		}
		var date = (day ? (typeof day == 'object' ? day :
			this._daylightSavingAdjust(new Date(year, month, day))) :
			this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
		return this.formatDate(this._get(inst, 'dateFormat'), date, this._getFormatConfig(inst));
	}
});

/*
 * Bind hover events for datepicker elements.
 * Done via delegate so the binding only occurs once in the lifetime of the parent div.
 * Global instActive, set by _updateDatepicker allows the handlers to find their way back to the active picker.
 */ 
function bindHover(dpDiv) {
	var selector = 'button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a';
	return dpDiv.bind('mouseout', function(event) {
			var elem = $( event.target ).closest( selector );
			if ( !elem.length ) {
				return;
			}
			elem.removeClass( "ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover" );
		})
		.bind('mouseover', function(event) {
			var elem = $( event.target ).closest( selector );
			if ($.datepicker._isDisabledDatepicker( instActive.inline ? dpDiv.parent()[0] : instActive.input[0]) ||
					!elem.length ) {
				return;
			}
			elem.parents('.ui-datepicker-calendar').find('a').removeClass('ui-state-hover');
			elem.addClass('ui-state-hover');
			if (elem.hasClass('ui-datepicker-prev')) elem.addClass('ui-datepicker-prev-hover');
			if (elem.hasClass('ui-datepicker-next')) elem.addClass('ui-datepicker-next-hover');
		});
}

/* jQuery extend now ignores nulls! */
function extendRemove(target, props) {
	$.extend(target, props);
	for (var name in props)
		if (props[name] == null || props[name] == undefined)
			target[name] = props[name];
	return target;
};

/* Determine whether an object is an array. */
function isArray(a) {
	return (a && (($.browser.safari && typeof a == 'object' && a.length) ||
		(a.constructor && a.constructor.toString().match(/\Array\(\)/))));
};

/* Invoke the datepicker functionality.
   @param  options  string - a command, optionally followed by additional parameters or
                    Object - settings for attaching new datepicker functionality
   @return  jQuery object */
$.fn.datepicker = function(options){
	
	/* Verify an empty collection wasn't passed - Fixes #6976 */
	if ( !this.length ) {
		return this;
	}
	
	/* Initialise the date picker. */
	if (!$.datepicker.initialized) {
		$(document).mousedown($.datepicker._checkExternalClick).
			find('body').append($.datepicker.dpDiv);
		$.datepicker.initialized = true;
	}

	var otherArgs = Array.prototype.slice.call(arguments, 1);
	if (typeof options == 'string' && (options == 'isDisabled' || options == 'getDate' || options == 'widget'))
		return $.datepicker['_' + options + 'Datepicker'].
			apply($.datepicker, [this[0]].concat(otherArgs));
	if (options == 'option' && arguments.length == 2 && typeof arguments[1] == 'string')
		return $.datepicker['_' + options + 'Datepicker'].
			apply($.datepicker, [this[0]].concat(otherArgs));
	return this.each(function() {
		typeof options == 'string' ?
			$.datepicker['_' + options + 'Datepicker'].
				apply($.datepicker, [this].concat(otherArgs)) :
			$.datepicker._attachDatepicker(this, options);
	});
};

$.datepicker = new Datepicker(); // singleton instance
$.datepicker.initialized = false;
$.datepicker.uuid = new Date().getTime();
$.datepicker.version = "1.8.14";

// Workaround for #4055
// Add another global to avoid noConflict issues with inline event handlers
window['DP_jQuery_' + dpuuid] = $;

})(jQuery);
