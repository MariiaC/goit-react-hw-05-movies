"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[105],{8956:function(e,t,r){var n=r(6731),a=r(184);t.Z=function(e){var t=e.films,r=e.state;return(0,a.jsx)("ul",{children:t&&t.map((function(e){return(0,a.jsx)("li",{children:(0,a.jsx)(n.rU,{to:"/movies/".concat(e.id),state:{from:r},children:e.title})},e.id)}))})}},9105:function(e,t,r){r.r(t);var n=r(5861),a=r(885),c=r(7757),u=r.n(c),s=r(2791),i=r(8956),o=r(4952),f=r(2681),p=r(470),l=r(184);t.default=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1],v=(0,s.useState)(!1),d=(0,a.Z)(v,2),h=d[0],g=d[1],m=(0,p.TH)();return(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.prev=1,e.next=4,o.Z.fetchTrending();case 4:t=e.sent,console.log(t),c(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:return e.prev=12,g(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:"Trending Today"}),r&&(0,l.jsx)(i.Z,{films:r,state:m}),h&&(0,l.jsx)(f.Z,{})]})}},2681:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(7322),a="Loader_loader__wrapper__rPycD",c="Loader_loader__+lRPl",u=r(184);var s=function(){return(0,u.jsx)("div",{className:a,children:(0,u.jsx)(n.hgL,{className:c})})}},4952:function(e,t,r){var n=r(5861),a=r(7757),c=r.n(a),u=r(4569),s=r.n(u),i="f128f86d2bf775a9e4af5bbb9b38ef94";s().defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d={fetchTrending:o,fetchSearchByKeyword:f,fetchMovieDetails:p,fetchActors:l,fetchReviews:v};t.Z=d}}]);
//# sourceMappingURL=105.53f39008.chunk.js.map