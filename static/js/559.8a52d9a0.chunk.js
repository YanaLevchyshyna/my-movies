"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[559],{1011:function(e,n,t){t.d(n,{Z:function(){return u}});var r,o=t(5030),a=t(168),c=t(9202).Z.footer(r||(r=(0,a.Z)(["\n  padding: 50px 50px;\n  margin-top: auto;\n  background-color: #032541;\n"]))),i=t(184);var u=function(){return(0,i.jsx)(c,{children:(0,i.jsx)("div",{children:(0,i.jsx)(o.T,{to:"/"})})})}},3559:function(e,n,t){t.r(n),t.d(n,{default:function(){return J}});var r,o,a,c,i=t(5861),u=t(9439),s=t(4687),p=t.n(s),h=t(2791),l=t(8174),f=(t(5462),t(9230)),d=t(171),v=t(1454),x=t(168),m=t(9202),g=t(9126),b=m.Z.form(r||(r=(0,x.Z)(["\n  position: relative;\n  width: 700px;\n  margin: 0 auto;\n  top: 0;\n  left: 0;\n"]))),j=m.Z.input(o||(o=(0,x.Z)(["\n  width: 100%;\n  height: 42px;\n  padding: 0;\n  padding-left: 10px;\n  border: 2px solid #032541;\n  border-radius: 30px;\n  font-size: 18px;\n  font-weight: 400;\n  outline: none;\n  color: #032541;\n\n  ::placeholder {\n    font-size: 18px;\n    color: ",";\n    opacity: 0.4;\n  }\n"])),(function(e){return e.theme.colors.placeHolder})),Z=m.Z.button(a||(a=(0,x.Z)(["\n  position: absolute;\n  top: 2px;\n  right: -12px;\n  width: 111px;\n  height: 42px;\n  padding: 0;\n  border: none;\n  border-radius: 30px;\n  background: linear-gradient(93deg, #90cea1 25%, #01b4e4 92%);\n  cursor: pointer;\n"]))),w=(0,m.Z)(g.dVI)(c||(c=(0,x.Z)(["\n  fill: #032541;\n  width: 24px;\n  height: 24px;\n\n  :hover {\n    fill: #fff;\n  }\n"]))),y=t(184);function k(e){var n=e.onSubmit,t=(0,h.useState)(""),r=(0,u.Z)(t,2),o=r[0],a=r[1];return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(b,{onSubmit:function(e){e.preventDefault(),""!==o.trim()?(n(o),a(o)):l.Am.info("Please enter the name of the movie",{position:l.Am.POSITION.TOP_RIGHT})},children:[(0,y.jsx)(j,{type:"text",name:"searchQuery",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:o,onChange:function(e){var n=e.currentTarget.value;a(n.toLowerCase())}}),(0,y.jsx)(Z,{type:"submit",children:(0,y.jsx)(w,{})})]})})}var M=t(7689),T=t(1087);function I(e){var n=e.movies,t=(0,M.TH)();return(0,y.jsx)("ul",{children:n.map((function(e){return(0,y.jsx)("li",{children:(0,y.jsx)(T.rU,{to:"/movies/".concat(e.id),state:{from:t},children:e.title})},e.id)}))})}var S,O=t(1011),R=m.Z.h1(S||(S=(0,x.Z)(["\n  text-align: center;\n  margin-bottom: 50px;\n  color: #032541;\n"]))),E=(0,d.Z)();function J(){var e=(0,f.$G)(),n=e.t,t=e.i18n.language,r=(0,h.useState)(null),o=(0,u.Z)(r,2),a=o[0],c=o[1],s=(0,h.useState)(""),d=(0,u.Z)(s,2),x=d[0],m=d[1],g=(0,h.useState)(!1),b=(0,u.Z)(g,2),j=b[0],Z=b[1];return(0,h.useEffect)((function(){if(""!==x){Z(!0);var e=function(){var e=(0,i.Z)(p().mark((function e(){var n,r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.fetchSearchMovie(x,t);case 3:if(n=e.sent,r=n.results){e.next=8;break}return l.Am.error("The movie could not be found.",{position:l.Am.POSITION.TOP_CENTER}),e.abrupt("return");case 8:c(r),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0),l.Am.error("404 Error !!!",{position:l.Am.POSITION.TOP_CENTER});case 15:return e.prev=15,Z(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,11,15,18]])})));return function(){return e.apply(this,arguments)}}();e(),Z(!1)}}),[t,x]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("main",{children:[j&&(0,y.jsx)(v.Z,{}),(0,y.jsx)(R,{children:n("searchMovie")}),(0,y.jsx)(k,{onSubmit:function(e){m(e)}}),a&&(0,y.jsx)("section",{children:(0,y.jsx)(I,{movies:a})})]}),(0,y.jsx)(O.Z,{})]})}},171:function(e,n,t){var r=t(5861),o=t(4687),a=t.n(o),c={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTMxNTJlM2MxOWQ1YzU3NjQyMzVjZmFhMmU0MjJmMSIsInN1YiI6IjY0ZTU4ZTdhMWZlYWMxMDBhYjhlNTA4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k6MLKJDkEcuLx4u4b6W5X0t6JAySBDO73jvRSeD_w2g"}};function i(e){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/trending/movie/day?language=".concat(n),c);case 3:if((t=e.sent).ok){e.next=6;break}return e.abrupt("return",Promise.reject(new Error("Sorry, something went wrong...")));case 6:return e.next=8,t.json();case 8:return r=e.sent,e.abrupt("return",r);case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function s(e,n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function e(n,t){var r,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(n,"?language=").concat(t),c);case 3:return r=e.sent,e.next=6,r.json();case 6:return o=e.sent,e.abrupt("return",o);case 10:e.prev=10,e.t0=e.catch(0),console.error("ERROR",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function h(e,n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function e(n,t){var r,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?language=").concat(t),c);case 3:return r=e.sent,e.next=6,r.json();case 6:return o=e.sent,e.abrupt("return",o);case 10:e.prev=10,e.t0=e.catch(0),console.log("ERROR",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function f(e,n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function e(n,t){var r,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?language=").concat(t),c);case 3:return r=e.sent,e.next=6,r.json();case 6:return o=e.sent,e.abrupt("return",o);case 10:e.prev=10,e.t0=e.catch(0),console.log("ERROR",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function v(e,n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function e(n,t){var r,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/search/movie?query=".concat(n,"&include_adult=false&language=").concat(t,"&page=1"),c);case 3:if((r=e.sent).ok){e.next=6;break}return e.abrupt("return",Promise.reject(new Error("Sorry, something went wrong...")));case 6:return e.next=8,r.json();case 8:return o=e.sent,e.abrupt("return",o);case 12:e.prev=12,e.t0=e.catch(0),console.error("ERROR",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}n.Z=function(){return{fetchTrendingMovies:i,fetchMovieId:s,fetchMovieActors:h,fetchMovieReviews:f,fetchSearchMovie:v}}}}]);
//# sourceMappingURL=559.8a52d9a0.chunk.js.map