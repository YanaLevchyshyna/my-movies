"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[559],{1011:function(e,n,t){t.d(n,{Z:function(){return s}});var r,o=t(5030),a=t(168),c=t(9202).Z.footer(r||(r=(0,a.Z)(["\n  padding: 50px 50px;\n  margin-top: auto;\n  background-color: #032541;\n"]))),i=t(184);var s=function(){return(0,i.jsx)(c,{children:(0,i.jsx)("div",{children:(0,i.jsx)(o.T,{to:"/"})})})}},3559:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var r,o,a,c,i=t(5861),s=t(9439),u=t(4687),p=t.n(u),l=t(2791),h=t(8174),f=(t(5462),t(9230)),d=t(171),v=t(1454),x=t(168),m=t(9202),g=t(9126),b=m.Z.form(r||(r=(0,x.Z)(["\n  position: relative;\n  width: 700px;\n  margin: 0 auto;\n  top: 0;\n  left: 0;\n"]))),j=m.Z.input(o||(o=(0,x.Z)(["\n  width: 100%;\n  height: 42px;\n  padding: 0;\n  padding-left: 10px;\n  border: 2px solid #032541;\n  border-radius: 30px;\n  font-size: 18px;\n  font-weight: 400;\n  outline: none;\n  color: #032541;\n\n  ::placeholder {\n    font-size: 18px;\n    color: ",";\n    opacity: 0.4;\n  }\n"])),(function(e){return e.theme.colors.placeHolder})),w=m.Z.button(a||(a=(0,x.Z)(["\n  position: absolute;\n  top: 2px;\n  right: -12px;\n  width: 111px;\n  height: 42px;\n  padding: 0;\n  border: none;\n  border-radius: 30px;\n  background: linear-gradient(93deg, #90cea1 25%, #01b4e4 92%);\n  cursor: pointer;\n"]))),Z=(0,m.Z)(g.dVI)(c||(c=(0,x.Z)(["\n  fill: #032541;\n  width: 24px;\n  height: 24px;\n\n  :hover {\n    fill: #fff;\n  }\n"]))),S=t(184);function y(e){var n=e.onSubmit,t=(0,l.useState)(""),r=(0,s.Z)(t,2),o=r[0],a=r[1];return(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)(b,{onSubmit:function(e){e.preventDefault(),""!==o.trim()?(n(o),a(o)):h.Am.info("Please enter the name of the movie",{position:h.Am.POSITION.TOP_RIGHT})},children:[(0,S.jsx)(j,{type:"text",name:"searchQuery",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:o,onChange:function(e){var n=e.currentTarget.value;a(n.toLowerCase())}}),(0,S.jsx)(w,{type:"submit",children:(0,S.jsx)(Z,{})})]})})}var k=t(7689),R=t(1087);function T(e){var n=e.movies,t=(0,k.TH)();return(0,S.jsx)("ul",{children:n.map((function(e){return(0,S.jsx)("li",{children:(0,S.jsx)(R.rU,{to:"/movies/".concat(e.id),state:{from:t},children:e.title})},e.id)}))})}var I,M=t(1011),O=m.Z.h1(I||(I=(0,x.Z)(["\n  text-align: center;\n  margin-bottom: 50px;\n  color: #032541;\n"]))),E=(0,d.Z)();function A(){var e=(0,f.$G)().t,n=(0,l.useState)(null),t=(0,s.Z)(n,2),r=t[0],o=t[1],a=(0,l.useState)(""),c=(0,s.Z)(a,2),u=c[0],d=c[1],x=(0,l.useState)(!1),m=(0,s.Z)(x,2),g=m[0],b=m[1];return(0,l.useEffect)((function(){if(""!==u){b(!0);var e=function(){var e=(0,i.Z)(p().mark((function e(){var n,t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.fetchSearchMovie(u);case 3:if(n=e.sent,t=n.results){e.next=8;break}return h.Am.error("The movie could not be found.",{position:h.Am.POSITION.TOP_CENTER}),e.abrupt("return");case 8:o(t),console.log("setMovieName SEARCH ==>",t),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0),h.Am.error("404 Error !!!",{position:h.Am.POSITION.TOP_CENTER});case 16:return e.prev=16,b(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[0,12,16,19]])})));return function(){return e.apply(this,arguments)}}();e(),b(!1)}}),[u]),console.log("movies",r),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("main",{children:[g&&(0,S.jsx)(v.Z,{}),(0,S.jsx)(O,{children:e("searchMovie")}),(0,S.jsx)(y,{onSubmit:function(e){d(e)}}),r&&(0,S.jsx)("section",{children:(0,S.jsx)(T,{movies:r})})]}),(0,S.jsx)(M.Z,{})]})}},171:function(e,n,t){var r=t(5861),o=t(4687),a=t.n(o),c={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTMxNTJlM2MxOWQ1YzU3NjQyMzVjZmFhMmU0MjJmMSIsInN1YiI6IjY0ZTU4ZTdhMWZlYWMxMDBhYjhlNTA4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k6MLKJDkEcuLx4u4b6W5X0t6JAySBDO73jvRSeD_w2g"}};function i(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(a().mark((function e(){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US",c);case 3:if((n=e.sent).ok){e.next=6;break}return e.abrupt("return",Promise.reject(new Error("Sorry, something went wrong...")));case 6:return e.next=8,n.json();case 8:return t=e.sent,e.abrupt("return",t);case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function u(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(n,"?language=en-US"),c);case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,console.log("data ID == ID",r),e.abrupt("return",r);case 11:e.prev=11,e.t0=e.catch(0),console.error("ERROR",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?language=en-US"),c);case 3:return t=e.sent,console.log("response fetchActor",t),e.next=7,t.json();case 7:return r=e.sent,console.log("data ACTORS ACTORS",r),e.abrupt("return",r);case 12:e.prev=12,e.t0=e.catch(0),console.log("ERROR",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function f(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?language=en-US"),c);case 3:return t=e.sent,console.log("reviews",t),e.next=7,t.json();case 7:return r=e.sent,console.log("data reviews",r),e.abrupt("return",r);case 12:e.prev=12,e.t0=e.catch(0),console.log("ERROR",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function v(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/search/movie?query=".concat(n,"&include_adult=false&language=en-US&page=1"),c);case 3:if((t=e.sent).ok){e.next=6;break}return e.abrupt("return",Promise.reject(new Error("Sorry, something went wrong...")));case 6:return e.next=8,t.json();case 8:return r=e.sent,console.log("SEARCH QUERY",r),e.abrupt("return",r);case 13:e.prev=13,e.t0=e.catch(0),console.error("ERROR",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}n.Z=function(){return{fetchTrendingMovies:i,fetchMovieId:u,fetchMovieActors:l,fetchMovieReviews:f,fetchSearchMovie:v}}}}]);
//# sourceMappingURL=559.9120ea13.chunk.js.map