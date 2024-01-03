"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[559],{1011:function(e,n,t){t.d(n,{Z:function(){return s}});var r,o=t(5030),c=t(168),a=t(9202).Z.footer(r||(r=(0,c.Z)(["\n  padding: 50px 50px;\n  margin-top: auto;\n  background-color: #032541;\n"]))),i=t(184);var s=function(){return(0,i.jsx)(a,{children:(0,i.jsx)("div",{children:(0,i.jsx)(o.T,{to:"/"})})})}},3559:function(e,n,t){t.r(n),t.d(n,{default:function(){return J}});var r,o,c,a,i=t(5861),s=t(9439),u=t(4687),p=t.n(u),l=t(2791),h=t(8174),f=(t(5462),t(9230)),v=t(171),d=t(1454),x=t(168),m=t(9202),g=t(9126),b=m.Z.form(r||(r=(0,x.Z)(["\n  position: relative;\n  width: 700px;\n  margin: 0 auto;\n  top: 0;\n  left: 0;\n"]))),j=m.Z.input(o||(o=(0,x.Z)(["\n  width: 100%;\n  height: 42px;\n  padding: 0;\n  padding-left: 10px;\n  border: 2px solid #032541;\n  border-radius: 30px;\n  font-size: 18px;\n  font-weight: 400;\n  outline: none;\n  color: #032541;\n\n  ::placeholder {\n    font-size: 18px;\n    color: ",";\n    opacity: 0.4;\n  }\n"])),(function(e){return e.theme.colors.placeHolder})),Z=m.Z.button(c||(c=(0,x.Z)(["\n  position: absolute;\n  top: 2px;\n  right: -12px;\n  width: 111px;\n  height: 42px;\n  padding: 0;\n  border: none;\n  border-radius: 30px;\n  background: linear-gradient(93deg, #90cea1 25%, #01b4e4 92%);\n  cursor: pointer;\n"]))),w=(0,m.Z)(g.dVI)(a||(a=(0,x.Z)(["\n  fill: #032541;\n  width: 24px;\n  height: 24px;\n\n  :hover {\n    fill: #fff;\n  }\n"]))),y=t(184);function k(e){var n=e.onSubmit,t=(0,l.useState)(""),r=(0,s.Z)(t,2),o=r[0],c=r[1];return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(b,{onSubmit:function(e){e.preventDefault(),""!==o.trim()?(n(o),c(o)):h.Am.info("Please enter the name of the movie",{position:h.Am.POSITION.TOP_RIGHT})},children:[(0,y.jsx)(j,{type:"text",name:"searchQuery",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:o,onChange:function(e){var n=e.currentTarget.value;c(n.toLowerCase())}}),(0,y.jsx)(Z,{type:"submit",children:(0,y.jsx)(w,{})})]})})}var M=t(7689),T=t(1087);function I(e){var n=e.movies,t=(0,M.TH)();return(0,y.jsx)("ul",{children:n.map((function(e){return(0,y.jsx)("li",{children:(0,y.jsx)(T.rU,{to:"/movies/".concat(e.id),state:{from:t},children:e.title})},e.id)}))})}var S,R=t(1011),O=m.Z.h1(S||(S=(0,x.Z)(["\n  text-align: center;\n  margin-bottom: 50px;\n  color: #032541;\n"]))),E=(0,v.Z)();function J(){var e=(0,f.$G)().t,n=(0,l.useState)(null),t=(0,s.Z)(n,2),r=t[0],o=t[1],c=(0,l.useState)(""),a=(0,s.Z)(c,2),u=a[0],v=a[1],x=(0,l.useState)(!1),m=(0,s.Z)(x,2),g=m[0],b=m[1];return(0,l.useEffect)((function(){if(""!==u){b(!0);var e=function(){var e=(0,i.Z)(p().mark((function e(){var n,t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.fetchSearchMovie(u);case 3:if(n=e.sent,t=n.results){e.next=8;break}return h.Am.error("The movie could not be found.",{position:h.Am.POSITION.TOP_CENTER}),e.abrupt("return");case 8:o(t),console.log("setMovieName SEARCH ==>",t),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0),h.Am.error("404 Error !!!",{position:h.Am.POSITION.TOP_CENTER});case 16:return e.prev=16,b(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[0,12,16,19]])})));return function(){return e.apply(this,arguments)}}();e(),b(!1)}}),[u]),console.log("movies",r),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("main",{children:[g&&(0,y.jsx)(d.Z,{}),(0,y.jsx)(O,{children:e("searchMovie")}),(0,y.jsx)(k,{onSubmit:function(e){v(e)}}),r&&(0,y.jsx)("section",{children:(0,y.jsx)(I,{movies:r})})]}),(0,y.jsx)(R.Z,{})]})}},171:function(e,n,t){var r=t(5861),o=t(4687),c=t.n(o),a={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTMxNTJlM2MxOWQ1YzU3NjQyMzVjZmFhMmU0MjJmMSIsInN1YiI6IjY0ZTU4ZTdhMWZlYWMxMDBhYjhlNTA4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k6MLKJDkEcuLx4u4b6W5X0t6JAySBDO73jvRSeD_w2g"}};function i(e){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/trending/movie/day?language=".concat(n),a);case 3:if((t=e.sent).ok){e.next=6;break}return e.abrupt("return",Promise.reject(new Error("Sorry, something went wrong...")));case 6:return e.next=8,t.json();case 8:return r=e.sent,e.abrupt("return",r);case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function u(e,n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(n,t){var r,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(n,"?language=").concat(t),a);case 3:return r=e.sent,e.next=6,r.json();case 6:return o=e.sent,e.abrupt("return",o);case 10:e.prev=10,e.t0=e.catch(0),console.error("ERROR",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function l(e,n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(n,t){var r,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?language=").concat(t),a);case 3:return r=e.sent,e.next=6,r.json();case 6:return o=e.sent,e.abrupt("return",o);case 10:e.prev=10,e.t0=e.catch(0),console.log("ERROR",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function f(e,n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function e(n,t){var r,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?language=").concat(t),a);case 3:return r=e.sent,console.log("reviews",r),e.next=7,r.json();case 7:return o=e.sent,e.abrupt("return",o);case 11:e.prev=11,e.t0=e.catch(0),console.log("ERROR",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function d(e,n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function e(n,t){var r,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/search/movie?query=".concat(n,"&include_adult=false&language=").concat(t,"&page=1"),a);case 3:if((r=e.sent).ok){e.next=6;break}return e.abrupt("return",Promise.reject(new Error("Sorry, something went wrong...")));case 6:return e.next=8,r.json();case 8:return o=e.sent,e.abrupt("return",o);case 12:e.prev=12,e.t0=e.catch(0),console.error("ERROR",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}n.Z=function(){return{fetchTrendingMovies:i,fetchMovieId:u,fetchMovieActors:l,fetchMovieReviews:f,fetchSearchMovie:d}}}}]);
//# sourceMappingURL=559.8b25ba54.chunk.js.map