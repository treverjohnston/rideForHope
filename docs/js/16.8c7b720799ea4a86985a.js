webpackJsonp([16],{146:function(t,e,a){"use strict";function r(t){a(226)}Object.defineProperty(e,"__esModule",{value:!0});var s=a(228),n=a(229),c=a(12),i=r,l=c(s.a,n.a,!1,i,"data-v-6f65dec6",null);e.default=l.exports},226:function(t,e,a){var r=a(227);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a(139)("3d97121e",r,!0)},227:function(t,e,a){e=t.exports=a(138)(void 0),e.push([t.i,".gallery[data-v-6f65dec6]{background-color:#000}.pics[data-v-6f65dec6]{height:85vh}",""])},228:function(t,e,a){"use strict";var r=a(2);e.a={name:"Gallery",data:function(){return{}},components:{QLayout:r.s,QGalleryCarousel:r.m},computed:{pictures:function(){return this.$store.state.gallery}},mounted:function(){this.$store.dispatch("getPictures")}}},229:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{staticClass:"gallery"},[a("q-gallery-carousel",{ref:"gallery",staticClass:"pics",attrs:{infinite:"","handle-arrow-keys":"",fullscreen:"",src:t.pictures}})],1)},s=[],n={render:r,staticRenderFns:s};e.a=n}});