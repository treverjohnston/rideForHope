webpackJsonp([10],{151:function(t,a,e){"use strict";function s(t){e(246)}Object.defineProperty(a,"__esModule",{value:!0});var i=e(248),r=e(249),c=e(12),n=s,o=c(i.a,r.a,!1,n,"data-v-486db526",null);a.default=o.exports},201:function(t,a,e){t.exports=e.p+"img/road.aa222c2.jpg"},246:function(t,a,e){var s=e(247);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(139)("d58cb0bc",s,!0)},247:function(t,a,e){a=t.exports=e(138)(void 0),a.push([t.i,".back[data-v-486db526]{background-color:transparent}.btn[data-v-486db526]{background-color:rgba(197,7,7,.8);color:#fff;padding:1rem;margin:1rem 0}.fancy[data-v-486db526]{font-family:Niconne,cursive}.headline[data-v-486db526]{text-shadow:6px 6px 0 rgba(0,0,0,.2)}.hr[data-v-486db526]{width:80%}.top[data-v-486db526]{background-color:hsla(0,0%,63%,.507);margin:3rem 0;padding:2rem 0 1rem}.img[data-v-486db526]{max-height:20rem}.raffle[data-v-486db526]{background-image:url("+e(201)+");background-size:cover;overflow:auto;background-attachment:fixed;width:100%;height:100%;top:0;left:0}.pics[data-v-486db526]{margin:0 10rem;padding-top:2rem}.pics-mobile[data-v-486db526],.pics[data-v-486db526]{background-color:hsla(0,0%,63%,.507)}",""])},248:function(t,a,e){"use strict";var s=e(5);a.a={name:"Raffle",data:function(){return{}},components:{QLayout:s.r,QCard:s.c,QCardTitle:s.h,QCardMain:s.e,QCardMedia:s.f,QBtn:s.b,QTransition:s.C,QFixedPosition:s.j,QIcon:s.m},computed:{items:function(){return this.$store.state.raffles}},directives:{BackToTop:s.a,Ripple:s.D},methods:{launch:function(t){Object(s.H)(t)},bounceImage:function(t){t.classList.add("animate-bounce"),setTimeout(function(){document.body.contains(t)&&t.classList.remove("animate-bounce")},2e3)}}}},249:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-layout",{staticClass:"raffle"},[e("div",{staticClass:"row wrap justify-center desktop-only"},[e("q-transition",{attrs:{appear:"",enter:"fadeIn",leave:"fadeOut"}},[e("div",{staticClass:"col-lg-8 top text-center"},[e("hr",{staticClass:"hr",attrs:{color:"red"}}),t._v(" "),e("h2",{staticClass:"headline text-bold"},[t._v("RAFFLE ITEMS")]),t._v(" "),e("h4",{staticClass:"fancy"},[t._v("2018 raffle items coming soon")]),t._v(" "),e("q-btn",{staticClass:"btn",attrs:{"no-caps":""},on:{click:function(a){t.launch("https://legacy.imathlete.com/events/rideforhopeidaho")}}},[t._v("Purchase Raffle Tickets")]),t._v(" "),e("hr",{staticClass:"hr",attrs:{color:"red"}}),t._v(" "),e("h4",{staticClass:"text-italic"},[t._v("\n                    Congratulations to 2017 Raffle item winners!!!\n                ")]),t._v(" "),e("h4",{staticClass:"text-italic"},[t._v("\n                    2017 Raffle Items were Donated By:\n                ")])],1)])],1),t._v(" "),e("div",{staticClass:"row wrap justify-center mobile-only"},[e("div",{staticClass:"col-xs-11 top text-center"},[e("hr",{staticClass:"hr",attrs:{color:"red"}}),t._v(" "),e("h4",{staticClass:"headline text-bold"},[t._v("RAFFLE ITEMS")]),t._v(" "),e("h5",{staticClass:"fancy"},[t._v("2018 raffle items coming soon")]),t._v(" "),e("q-btn",{staticClass:"btn shadow-24",attrs:{"no-caps":""}},[t._v("Purchase Raffle Tickets")]),t._v(" "),e("hr",{staticClass:"hr",attrs:{color:"red"}}),t._v(" "),e("h6",{staticClass:"text-italic"},[t._v("\n                Congratulations to 2017 Raffle item winners!!!\n            ")]),t._v(" "),e("h6",{staticClass:"text-italic"},[t._v("\n                2017 Raffle Items were Donated By:\n            ")])],1)]),t._v(" "),e("q-transition",{attrs:{appear:"",enter:"fadeIn",leave:"fadeOut"}},[e("div",{staticClass:"row wrap justify-center pics desktop-only"},[e("q-card",{staticClass:"col-xs-12 col-lg-6",attrs:{flat:"",align:"center"}},[e("q-card-media",[e("img",{staticClass:"img",attrs:{src:"http://res.cloudinary.com/treverscloud/image/upload/v1511556283/Ride/cycle.jpg",alt:"Raffle item picture"}})]),t._v(" "),e("q-card-title",[t._v("\n                    Meridian Cycles\n                ")]),t._v(" "),e("q-card-main",[e("p",[t._v("(Starlite Lazer 20 Youth Bike (Made to Order: Girls or Boys, various colors available)")])])],1)],1)]),t._v(" "),e("div",{staticClass:"row wrap justify-center pics desktop-only"},t._l(t.items,function(a){return e("q-card",{staticClass:"col-xs-12 col-lg-3",attrs:{flat:"",align:"center"}},[e("q-card-media",[e("img",{staticClass:"img",attrs:{src:a.link,alt:"Raffle item picture"}})]),t._v(" "),e("q-card-title",[t._v("\n                "+t._s(a.donator)+"\n            ")]),t._v(" "),e("q-card-main",[e("p",[t._v(t._s(a.description))])])],1)})),t._v(" "),e("div",{staticClass:"row wrap justify-center mobile-only"},[e("q-card",{staticClass:"col-xs-11 col-sm-8 col-lg-3 pics-mobile",attrs:{align:"center"}},[e("q-card-media",[e("img",{staticClass:"img",attrs:{src:"https://static.wixstatic.com/media/a44970_f74796a9307f49fcb7522d98ce8d751e~mv2.jpg/v1/fill/w_413,h_218,al_c,q_80,usm_0.66_1.00_0.01/a44970_f74796a9307f49fcb7522d98ce8d751e~mv2.webp",alt:"Raffle item picture"}})]),t._v(" "),e("q-card-title",[t._v("\n                Meridian Cycles\n            ")]),t._v(" "),e("q-card-main",[e("p",[t._v("(Starlite Lazer 20 Youth Bike (Made to Order: Girls or Boys, various colors available)")])])],1)],1),t._v(" "),e("div",{staticClass:"row wrap justify-center mobile-only"},t._l(t.items,function(a){return e("q-card",{staticClass:"col-xs-11 col-sm-8 col-lg-3 pics-mobile",attrs:{align:"center"}},[e("q-card-media",[e("img",{attrs:{src:a.link,alt:"Raffle item picture"}})]),t._v(" "),e("q-card-title",[t._v("\n                "+t._s(a.donator)+"\n            ")]),t._v(" "),e("q-card-main",[e("p",[t._v(t._s(a.description))])])],1)}))],1)},i=[],r={render:s,staticRenderFns:i};a.a=r}});