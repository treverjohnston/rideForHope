webpackJsonp([9],{142:function(t,a,s){"use strict";function e(t){s(200)}Object.defineProperty(a,"__esModule",{value:!0});var l=s(202),o=s(203),i=s(12),r=e,n=i(l.a,o.a,!1,r,"data-v-9ff17a46",null);a.default=n.exports},200:function(t,a,s){var e=s(201);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s(134)("62d6ef06",e,!0)},201:function(t,a,s){a=t.exports=s(133)(void 0),a.push([t.i,".back[data-v-9ff17a46]{background-color:rgba(0,0,0,.589);color:#fff}.hr[data-v-9ff17a46]{width:80%}.route-tab-cont[data-v-9ff17a46]{margin-bottom:.75rem}.route-tab[data-v-9ff17a46]{color:#fff}.top-title[data-v-9ff17a46]{margin-left:.5rem}.strava-top[data-v-9ff17a46]{max-width:4.5rem}.meridian[data-v-9ff17a46]{max-width:9rem}.meridian-mobile[data-v-9ff17a46]{height:4rem;margin-top:.5rem}.strava[data-v-9ff17a46]{width:10rem}.q-item-link[data-v-9ff17a46]:hover{background:hsla(0,0%,100%,.7)}.q-list-highlight[data-v-9ff17a46]{background:hsla(0,0%,100%,.7);color:#000;font-weight:400}.q-popover[data-v-9ff17a46]{background-color:hsla(0,0%,7%,.88);color:#fff}.tabhr[data-v-9ff17a46],.tabhrs[data-v-9ff17a46]{border-color:#000;width:100%}.left-tab[data-v-9ff17a46]{text-align:left;padding-left:1rem}.small-side[data-v-9ff17a46]{font-weight:400;color:#000;font-size:1.5rem}.side[data-v-9ff17a46]{font-weight:400;color:#000;font-size:2rem}.small[data-v-9ff17a46]{font-size:.7rem}.mini[data-v-9ff17a46]{height:4rem}.top-promo[data-v-9ff17a46]{color:#ff0}.q-btn[data-v-9ff17a46]{text-transform:none}.fb[data-v-9ff17a46]{color:#3b5998;width:10rem}.footer[data-v-9ff17a46]{background-color:#111;color:#b40000;padding-bottom:3rem}.spacer[data-v-9ff17a46]{padding:.5rem 0;background-color:#000;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.cbtn[data-v-9ff17a46]{background-color:hsla(0,0%,7%,.88);color:#fff;padding:0 2rem}.card[data-v-9ff17a46]{padding:2rem}.card-mobile[data-v-9ff17a46],.card[data-v-9ff17a46]{background-color:rgba(197,7,7,.8)}.options[data-v-9ff17a46]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;background-color:hsla(0,0%,7%,.88);padding:3rem 5rem}.ride[data-v-9ff17a46]{margin:1rem 0;max-height:13rem}.top-logo[data-v-9ff17a46]{background-color:hsla(0,0%,7%,.88);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.promo[data-v-9ff17a46]{padding:0 2rem;background-color:rgba(0,128,128,.6);color:#000}.head[data-v-9ff17a46]{background-color:hsla(0,0%,7%,.88)}.tab[data-v-9ff17a46]{text-transform:none}.logo-container[data-v-9ff17a46]{width:255px;height:242px;-webkit-perspective:800px;perspective:800px;position:absolute;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.logo[data-v-9ff17a46]{position:absolute;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.back[data-v-9ff17a46]{background-attachment:fixed;background-repeat:no-repeat;background-size:cover}",""])},202:function(t,a,s){"use strict";var e=s(3);a.a={name:"index",components:{QLayout:e.r,QToolbar:e.A,QToolbarTitle:e.B,QBtn:e.b,QIcon:e.m,QList:e.s,QListHeader:e.t,QItem:e.o,QItemSide:e.q,QItemMain:e.p,QTab:e.y,QTabs:e.z,QParallax:e.u,QCard:e.c,QCardTitle:e.h,QCardSeparator:e.g,QCardMain:e.e,QRouteTab:e.w,QTransition:e.C,QSideLink:e.x,QPopover:e.v,QCollapsible:e.i,QFixedPosition:e.j},data:function(){return{}},computed:{home:function(){return"/"==this.$route.path}},methods:{launch:function(t){Object(e.G)(t)},collapse:function(){this.$refs.popover.close(),this.$refs.popoverRoutes.close()}},directives:{BackToTop:e.a,Ripple:e.D},mounted:function(){this.$refs.layout.toggleLeft()},beforeDestroy:function(){}}},203:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("q-layout",{ref:"layout",staticClass:"back",attrs:{view:"lHh Lpr fff","left-class":{"bg-grey-2":!0}}},[s("q-toolbar",{staticClass:"head"},[s("q-btn",{staticClass:"mobile-only",attrs:{flat:""},on:{click:function(a){t.$refs.layout.toggleLeft()}}},[s("q-icon",{attrs:{name:"menu"}})],1),t._v(" "),s("q-btn",{on:{click:function(a){t.$router.push("/")}}},[s("img",{staticClass:"mini",attrs:{src:"statics/RFHIdahoLogo.png",alt:"logo"}})]),t._v(" "),s("q-toolbar-title",{staticClass:"desktop-only"},[t._v("\n      Ride For Hope\n    ")]),t._v(" "),s("span",{staticClass:"desktop-only"},[t._v("Join Team Ride For Hope Idaho on Strava!\n      "),s("q-transition",{attrs:{appear:"",enter:"lightSpeedIn",leave:"fadeOut"}},[s("q-btn",{on:{click:function(a){t.launch("https://www.strava.com/clubs/302822")}}},[s("img",{staticClass:"strava-top",attrs:{src:"statics/strava2.png",alt:"strava logo"}})])],1)],1),t._v(" "),s("q-transition",{staticClass:"desktop-only",attrs:{appear:"",enter:"lightSpeedIn",leave:"fadeOut"}},[s("q-btn",{staticClass:"desktop-only",on:{click:function(a){t.launch("http://www.meridian-cycles.com/")}}},[s("img",{staticClass:"meridian desktop-only",attrs:{src:"statics/meridian.png",alt:"Meridian Cycles logo"}})])],1),t._v(" "),s("a",{staticClass:"mobile-only absolute-right",attrs:{href:"http://www.meridian-cycles.com/",target:"_blank"}},[s("q-btn",[s("img",{staticClass:"meridian-mobile",attrs:{src:"statics/meridian.png",alt:"Meridian Cycles logo"}})])],1)],1),t._v(" "),s("q-tabs",{staticClass:"shadow-2 desktop-only tabs",attrs:{slot:"header",align:"center"},slot:"header"},[s("q-route-tab",{staticClass:"tab",attrs:{slot:"title",label:"Home",name:"home",to:"/"},slot:"title"}),t._v(" "),s("q-route-tab",{staticClass:"tab",attrs:{slot:"title",label:"About",name:"about",to:"about"},slot:"title"}),t._v(" "),s("q-route-tab",{staticClass:"tab",attrs:{slot:"title",label:"Register",name:"register",to:"register"},slot:"title"}),t._v(" "),s("q-tab",{staticClass:"tab involved",attrs:{slot:"title",label:"Routes",name:"routes"},slot:"title"},[s("q-popover",{ref:"popoverRoutes",attrs:{fit:""}},[s("q-item-main",[s("q-route-tab",{staticClass:"tab",attrs:{slot:"title",label:"All Routes",name:"routes",to:"routes"},on:{click:t.collapse},slot:"title"})],1),t._v(" "),s("q-item-main",[s("q-route-tab",{staticClass:"tab",attrs:{slot:"title",label:"18 Mile",name:"18",to:"18-mile"},on:{click:t.collapse},slot:"title"})],1),t._v(" "),s("q-item-main",[s("q-route-tab",{staticClass:"tab",attrs:{slot:"title",label:"31 Mile",name:"31",to:"31-mile"},on:{click:t.collapse},slot:"title"})],1),t._v(" "),s("q-item-main",[s("q-route-tab",{staticClass:"tab",attrs:{slot:"title",label:"62.8 Mile",name:"62.8",to:"metric"},on:{click:t.collapse},slot:"title"})],1),t._v(" "),s("q-item-main",[s("q-route-tab",{staticClass:"tab",attrs:{slot:"title",label:"100 Mile",name:"100",to:"Century"},on:{click:t.collapse},slot:"title"})],1)],1)],1),t._v(" "),s("q-route-tab",{staticClass:"tab",attrs:{slot:"title",label:"Donate",name:"donate",to:"donate"},slot:"title"}),t._v(" "),s("q-route-tab",{staticClass:"tab",attrs:{slot:"title",label:"Raffle Items",name:"raffle",to:"raffle"},slot:"title"}),t._v(" "),s("q-tab",{staticClass:"tab involved",attrs:{slot:"title",label:"Get Involved",name:"involved"},slot:"title"},[s("q-popover",{ref:"popover",staticClass:"involved",attrs:{fit:""}},[s("q-item-main",[s("q-route-tab",{staticClass:"tab",attrs:{slot:"title",label:"Get Involved",name:"involved",to:"involved"},on:{click:t.collapse},slot:"title"})],1),t._v(" "),s("q-item-main",[s("q-route-tab",{staticClass:"tab",attrs:{slot:"title",label:"Volunteers",name:"volunteers",to:"volunteers"},on:{click:t.collapse},slot:"title"})],1),t._v(" "),s("q-item-main",[s("q-route-tab",{staticClass:"tab",attrs:{slot:"title",label:"Sponsors",name:"sponsors",to:"sponsors"},on:{click:t.collapse},slot:"title"})],1)],1)],1),t._v(" "),s("q-route-tab",{staticClass:"tab",attrs:{slot:"title",label:"Photo Gallery",name:"gallery",to:"gallery"},slot:"title"}),t._v(" "),s("q-route-tab",{staticClass:"tab",attrs:{slot:"title",label:"Contact",name:"contact",to:"contact"},slot:"title"})],1),t._v(" "),s("div",{staticClass:"mobile-only left-tab",attrs:{slot:"left"},slot:"left"},[s("q-list",{staticClass:"mobile-only",attrs:{"no-border":"",link:"","inset-delimiter":""}},[s("q-side-link",{attrs:{to:"/"}},[s("q-item-main",{staticClass:"side",attrs:{label:"Home"}}),t._v(" "),s("hr",{staticClass:"tabhr"})],1),t._v(" "),s("q-side-link",{attrs:{to:"about"}},[s("q-item-main",{staticClass:"side",attrs:{label:"About"}}),t._v(" "),s("hr",{staticClass:"tabhr"})],1),t._v(" "),s("q-side-link",{attrs:{to:"register"}},[s("q-item-main",{staticClass:"side",attrs:{label:"Register"}}),t._v(" "),s("hr",{staticClass:"tabhr"})],1),t._v(" "),s("q-collapsible",{staticClass:"side-collapse",attrs:{label:"Routes"}},[s("q-side-link",{attrs:{to:"routes"}},[s("q-item-main",{staticClass:"small-side",attrs:{label:"All Routes"}})],1),t._v(" "),s("hr",{staticClass:"tabhr"}),t._v(" "),s("q-side-link",{attrs:{to:"18-mile"}},[s("q-item-main",{staticClass:"small-side",attrs:{label:"18 Mile"}})],1),t._v(" "),s("hr",{staticClass:"tabhrs"}),t._v(" "),s("q-side-link",{attrs:{to:"31-mile"}},[s("q-item-main",{staticClass:"small-side",attrs:{label:"31 Mile"}})],1),t._v(" "),s("hr",{staticClass:"tabhrs"}),t._v(" "),s("q-side-link",{attrs:{to:"metric"}},[s("q-item-main",{staticClass:"small-side",attrs:{label:"62.8 Mile"}})],1),t._v(" "),s("hr",{staticClass:"tabhrs"}),t._v(" "),s("q-side-link",{attrs:{to:"century"}},[s("q-item-main",{staticClass:"small-side",attrs:{label:"100 Mile"}})],1)],1),t._v(" "),s("hr",{staticClass:"tabhr"}),t._v(" "),s("q-side-link",{attrs:{to:"donate"}},[s("q-item-main",{staticClass:"side",attrs:{label:"Donate"}}),t._v(" "),s("hr",{staticClass:"tabhr"})],1),t._v(" "),s("q-side-link",{attrs:{to:"raffle"}},[s("q-item-main",{staticClass:"side",attrs:{label:"Raffle Items"}}),t._v(" "),s("hr",{staticClass:"tabhr"})],1),t._v(" "),s("q-collapsible",{staticClass:"side-collapse",attrs:{label:"Get Involved"}},[s("q-side-link",{staticClass:"left",attrs:{to:"involved"}},[s("q-item-main",{staticClass:"small-side",attrs:{label:"General Information"}})],1),t._v(" "),s("hr",{staticClass:"tabhrs"}),t._v(" "),s("q-side-link",{attrs:{to:"volunteers"}},[s("q-item-main",{staticClass:"small-side",attrs:{label:"Volunteers"}})],1),t._v(" "),s("hr",{staticClass:"tabhrs"}),t._v(" "),s("q-side-link",{attrs:{to:"sponsors"}},[s("q-item-main",{staticClass:"small-side",attrs:{label:"Sponsors"}})],1)],1),t._v(" "),s("hr",{staticClass:"tabhr"}),t._v(" "),s("q-side-link",{attrs:{to:"gallery"}},[s("q-item-main",{staticClass:"side",attrs:{label:"Photo Gallery"}}),t._v(" "),s("hr",{staticClass:"tabhr"})],1),t._v(" "),s("q-side-link",{attrs:{to:"contact"}},[s("q-item-main",{staticClass:"side",attrs:{label:"Contact"}})],1)],1)],1),t._v(" "),s("router-view"),t._v(" "),t.home?s("div",[s("q-parallax",{attrs:{speed:1,height:500,src:"./statics/cover.jpg"}},[s("div",{attrs:{slot:"loading"},slot:"loading"},[t._v("Loading...")]),t._v(" "),s("q-transition",{attrs:{appear:"",enter:"slideInUp",leave:"fadeOut"}},[s("div",{staticClass:"promo text-center desktop-only"},[s("h5",{staticClass:"light-paragraph"},[t._v("SUPPORTING HEALTHCARE FOR THE MEDICALLY UNDERSERVED")]),t._v(" "),s("h2",{staticClass:"text-bold"},[t._v("2018 Event Date: Saturday, June 23")]),t._v(" "),s("h2",{staticClass:"text-bold"},[t._v("Kuna, ID")])])]),t._v(" "),s("div",{staticClass:"promo text-center mobile-only"},[s("h6",{staticClass:"light-paragraph"},[t._v("SUPPORTING HEALTHCARE FOR THE MEDICALLY UNDERSERVED")]),t._v(" "),s("h3",{staticClass:"text-bold"},[t._v("2018 Event Date: Saturday, June 23")]),t._v(" "),s("h3",{staticClass:"text-bold"},[t._v("Kuna, ID")])])],1),t._v(" "),s("div",{staticClass:"spacer"},[s("img",{staticClass:"ride",attrs:{src:"statics/RFHIdahoLogo.png",alt:"ride for hope logo"}})]),t._v(" "),s("q-parallax",{staticClass:"desktop-only",attrs:{speed:1,height:500,src:"./statics/cover2.jpg"}},[s("div",{attrs:{slot:"loading"},slot:"loading"},[t._v("Loading...")]),t._v(" "),s("div",{staticClass:"row options"},[s("q-card",{staticClass:"card"},[s("q-card-main",[s("hr"),t._v(" "),s("q-btn",{staticClass:"cbtn shadow-24",on:{click:function(a){t.launch("https://www.bikereg.com/ride-for-hope0")}}},[t._v("Register Now")]),t._v(" "),s("hr")],1)],1),t._v(" "),s("q-card",{staticClass:"card"},[s("q-card-main",[s("hr"),t._v(" "),s("q-btn",{staticClass:"cbtn shadow-24",on:{click:function(a){t.launch("https://www.bikereg.com/ride-for-hope0")}}},[t._v("Donate Now")]),t._v(" "),s("hr")],1)],1),t._v(" "),s("q-card",{staticClass:"card"},[s("q-card-main",[s("hr"),t._v(" "),s("q-btn",{staticClass:"cbtn shadow-24",on:{click:function(a){t.launch("https://www.bikereg.com/ride-for-hope0")}}},[t._v("Buy Raffle Tickets")]),t._v(" "),s("hr")],1)],1)],1)]),t._v(" "),s("q-parallax",{staticClass:"mobile-only",attrs:{speed:1,height:500,src:"./statics/cover2.jpg"}},[s("div",{attrs:{slot:"loading"},slot:"loading"},[t._v("Loading...")]),t._v(" "),s("div",{staticClass:"row options"},[s("q-card",{staticClass:"card-mobile col-xs-12 text-center"},[s("q-card-main",[s("hr"),t._v(" "),s("q-btn",{staticClass:"cbtn shadow-24",on:{click:function(a){t.launch("https://www.bikereg.com/ride-for-hope0")}}},[t._v("Register Now")]),t._v(" "),s("hr")],1)],1),t._v(" "),s("q-card",{staticClass:"card-mobile col-xs-12 text-center"},[s("q-card-main",[s("hr"),t._v(" "),s("q-btn",{staticClass:"cbtn shadow-24",on:{click:function(a){t.launch("https://www.bikereg.com/ride-for-hope0")}}},[t._v("Donate Now")]),t._v(" "),s("hr")],1)],1),t._v(" "),s("q-card",{staticClass:"card-mobile col-xs-12 text-center"},[s("q-card-main",[s("hr"),t._v(" "),s("q-btn",{staticClass:"cbtn shadow-24",on:{click:function(a){t.launch("https://www.bikereg.com/ride-for-hope0")}}},[t._v("Buy Raffle Tickets")]),t._v(" "),s("hr")],1)],1)],1)])],1):t._e(),t._v(" "),s("div",{staticClass:"footer text-center text-bold",attrs:{slot:"footer"},slot:"footer"},[s("div",{staticClass:"row justify-center"},[s("div",{staticClass:"col-xs-12"},[s("h3",{staticClass:"text-center desktop-only"},[t._v("\n          Thank you for supporting Ride for Hope!\n        ")]),t._v(" "),s("h6",{staticClass:"text-center mobile-only"},[t._v("\n          Thank you for supporting Ride for Hope!\n        ")])]),t._v(" "),s("div",{staticClass:"col-xs-12"},[s("q-btn",{attrs:{flat:""},on:{click:function(a){t.launch("https://www.strava.com/clubs/302822")}}},[s("img",{staticClass:"strava",attrs:{src:"statics/strava.png",alt:"strava logo"}})]),t._v(" "),s("q-btn",{attrs:{flat:""},on:{click:function(a){t.launch("https://www.facebook.com/rideforhopeidaho/")}}},[s("q-icon",{staticClass:"fb",attrs:{size:"5.75rem",name:"fa-facebook-square"}})],1)],1),t._v(" "),s("div",{staticClass:"col-xs-12 col-md-3"},[s("hr",{staticClass:"hr"}),t._v(" "),s("h5",{staticClass:"text-bold text-italic"},[t._v("Veni Vidi Vici Sponsors")]),t._v(" "),s("q-btn",{on:{click:function(a){t.launch("http://www.meridian-cycles.com/")}}},[s("img",{staticClass:"meridian",attrs:{src:"statics/meridian.png",alt:"Meridian Cycles logo"}})]),t._v(" "),s("hr",{staticClass:"hr"})],1),t._v(" "),s("div",{staticClass:"col-xs-12 col-md-3"},[s("hr",{staticClass:"hr"}),t._v(" "),s("h5",{staticClass:"text-bold text-italic"},[t._v("Semper Fidelis Sponsors")]),t._v(" "),s("q-btn",{on:{click:function(a){t.launch("http://www.meatsroyaleidaho.com/")}}},[s("h6",[t._v("Meats Royale")])]),t._v(" "),s("q-btn",{on:{click:function(a){t.launch("https://10barrel.com/pub/boise/")}}},[s("h6",[t._v("10 Barrel Brewing Co.")])]),t._v(" "),s("q-btn",{on:{click:function(a){t.launch("https://www.sherwin-williams.com/homeowners")}}},[s("h6",[t._v("Sherwin Williams")])]),t._v(" "),s("hr",{staticClass:"hr"})],1),t._v(" "),s("div",{staticClass:"col-xs-12 col-md-3"},[s("hr",{staticClass:"hr"}),t._v(" "),s("h5",{staticClass:"text-bold text-italic"},[t._v("Carpe Diem Sponsors")]),t._v(" "),s("q-btn",{on:{click:function(a){t.launch("http://www.raymondjames.com/boiseid/")}}},[s("h6",[t._v("Riverside Associates")])]),t._v(" "),s("q-btn",{on:{click:function(a){t.launch("http://www.lylepearson.com/")}}},[s("h6",[t._v("Lyle Pearson")])]),t._v(" "),s("hr",{staticClass:"hr"})],1)])]),t._v(" "),s("q-fixed-position",{attrs:{corner:"bottom-right",offset:[18,18]}},[s("q-btn",{directives:[{name:"back-to-top",rawName:"v-back-to-top.animate",value:{offset:200,duration:200},expression:"{offset: 200, duration: 200}",modifiers:{animate:!0}}],staticClass:"animate-pop back",attrs:{round:""}},[s("q-icon",{attrs:{name:"keyboard_arrow_up"}})],1)],1)],1)},l=[],o={render:e,staticRenderFns:l};a.a=o}});