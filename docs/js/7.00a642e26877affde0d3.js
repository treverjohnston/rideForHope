webpackJsonp([7],{159:function(a,t,e){"use strict";function r(a){e(294)}Object.defineProperty(t,"__esModule",{value:!0});var s=e(296),i=e(297),n=e(13),o=r,c=n(s.a,i.a,!1,o,"data-v-7af4abd4",null);t.default=c.exports},223:function(a,t,e){a.exports=e.p+"img/road.aa222c2.jpg"},294:function(a,t,e){var r=e(295);"string"==typeof r&&(r=[[a.i,r,""]]),r.locals&&(a.exports=r.locals);e(141)("1be13be2",r,!0)},295:function(a,t,e){t=a.exports=e(140)(void 0),t.push([a.i,".back[data-v-7af4abd4]{background-color:transparent}.btn[data-v-7af4abd4]{background-color:rgba(197,7,7,.8);color:#fff;padding:1rem;margin:1rem 0}.fancy[data-v-7af4abd4]{font-family:Niconne,cursive}.headline[data-v-7af4abd4]{text-shadow:6px 6px 0 rgba(0,0,0,.2)}.hr[data-v-7af4abd4]{width:80%}.top[data-v-7af4abd4]{background-color:hsla(0,0%,63%,.507);margin:3rem 0;padding:2rem 0 1rem}.img[data-v-7af4abd4]{max-height:20rem}.raffle[data-v-7af4abd4]{background-image:url("+e(223)+");background-size:cover;overflow:auto;background-attachment:fixed;width:100%;height:100%;top:0;left:0}.pics[data-v-7af4abd4]{margin:0 10rem;padding-top:2rem}.pics-mobile[data-v-7af4abd4],.pics[data-v-7af4abd4]{background-color:hsla(0,0%,63%,.507)}",""])},296:function(a,t,e){"use strict";var r=e(2);t.a={name:"Raffle",data:function(){return{}},components:{QLayout:r.s,QCard:r.d,QCardTitle:r.i,QCardMain:r.f,QCardMedia:r.g,QBtn:r.c,QTransition:r.E,QFixedPosition:r.l,QIcon:r.n},computed:{items:function(){return this.$store.state.raffles}},directives:{BackToTop:r.b,Ripple:r.G},methods:{launch:function(a){Object(r.K)(a)},bounceImage:function(a){a.classList.add("animate-bounce"),setTimeout(function(){document.body.contains(a)&&a.classList.remove("animate-bounce")},2e3)}}}},297:function(a,t,e){"use strict";var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("q-layout",{staticClass:"raffle"},[e("div",{staticClass:"row wrap justify-center desktop-only"},[e("q-transition",{attrs:{appear:"",enter:"fadeIn",leave:"fadeOut"}},[e("div",{staticClass:"col-lg-8 top text-center"},[e("hr",{staticClass:"hr",attrs:{color:"red"}}),a._v(" "),e("h2",{staticClass:"headline text-bold"},[a._v("2018 RAFFLE ITEMS")]),a._v(" "),e("hr",{staticClass:"hr",attrs:{color:"red"}})])])],1),a._v(" "),e("div",{staticClass:"row wrap justify-center mobile-only"},[e("div",{staticClass:"col-xs-11 top text-center"},[e("hr",{staticClass:"hr",attrs:{color:"red"}}),a._v(" "),e("h4",{staticClass:"headline text-bold"},[a._v("2018 RAFFLE ITEMS")]),a._v(" "),e("hr",{staticClass:"hr",attrs:{color:"red"}})])]),a._v(" "),e("div",{staticClass:"row wrap justify-center pics desktop-only"},a._l(a.items,function(t){return e("q-card",{staticClass:"col-xs-12 col-lg-3",attrs:{flat:"",align:"center"}},[e("q-card-media",[e("img",{staticClass:"img",attrs:{src:t.link,alt:"Raffle item picture"}})]),a._v(" "),e("q-card-title",[a._v("\n                "+a._s(t.donator)+"\n            ")]),a._v(" "),e("q-card-main",[e("p",[a._v(a._s(t.description))])])],1)})),a._v(" "),e("div",{staticClass:"row wrap justify-center mobile-only"},a._l(a.items,function(t){return e("q-card",{staticClass:"col-xs-11 col-sm-8 col-lg-3 pics-mobile",attrs:{align:"center"}},[e("q-card-media",[e("img",{attrs:{src:t.link,alt:"Raffle item picture"}})]),a._v(" "),e("q-card-title",[a._v("\n                "+a._s(t.donator)+"\n            ")]),a._v(" "),e("q-card-main",[e("p",[a._v(a._s(t.description))])])],1)}))])},s=[],i={render:r,staticRenderFns:s};t.a=i}});