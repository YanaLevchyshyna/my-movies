"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[559],{1011:function(n,e,t){t.d(e,{Z:function(){return s}});var r,i=t(5030),o=t(168),a=t(9202).Z.footer(r||(r=(0,o.Z)(["\n  padding: 50px 50px;\n  margin-top: auto;\n  background-color: #032541;\n"]))),c=t(184);var s=function(){return(0,c.jsx)(a,{children:(0,c.jsx)("div",{children:(0,c.jsx)(i.T,{to:"/"})})})}},3559:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var r,i,o,a,c=t(5861),s=t(9439),u=t(4687),p=t.n(u),h=t(2791),d=t(8174),f=(t(5462),t(9230)),l=t(171),m=t(1454),x=t(168),v=t(9202),g=t(9126),w=v.Z.form(r||(r=(0,x.Z)(["\n  position: relative;\n  width: 333px;\n  margin: 0 auto;\n  top: 0;\n  left: 0;\n\n  @media screen and (min-width: 768px) {\n  }\n\n  @media screen and (min-width: 1400px) {\n    width: 700px;\n  }\n"]))),b=v.Z.input(i||(i=(0,x.Z)(["\n  width: 100%;\n  height: 21px;\n  padding: 0;\n  padding-left: 10px;\n  border: 2px solid #032541;\n  border-radius: 30px;\n  font-size: ",";\n  outline: none;\n  color: #032541;\n\n  ::placeholder {\n    font-size: ",";\n    color: ",";\n    opacity: 0.4;\n\n    @media screen and (min-width: 768px) {\n      font-size: ",";\n    }\n\n    @media screen and (min-width: 1400px) {\n      font-size: ",";\n    }\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: ",";\n    height: 36px;\n  }\n\n  @media screen and (min-width: 1400px) {\n    font-size: ",";\n    height: 42px;\n  }\n"])),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.colors.placeHolder}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontSizes.m})),j=v.Z.button(o||(o=(0,x.Z)(["\n  position: absolute;\n  top: 2px;\n  right: -12px;\n  width: 90px;\n  height: 21px;\n  padding: 0;\n  border: none;\n  border-radius: 30px;\n  background: linear-gradient(93deg, #90cea1 25%, #01b4e4 92%);\n  cursor: pointer;\n\n  @media screen and (min-width: 768px) {\n    height: 36px;\n    width: 95px;\n  }\n\n  @media screen and (min-width: 1400px) {\n    height: 42px;\n    width: 111px;\n  }\n"]))),Z=(0,v.Z)(g.dVI)(a||(a=(0,x.Z)(["\n  fill: #032541;\n  width: 16px;\n  height: 16px;\n\n  :hover {\n    fill: #fff;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 18px;\n    height: 18px;\n  }\n\n  @media screen and (min-width: 1400px) {\n    width: 24px;\n    height: 24px;\n  }\n"]))),y=t(184);function S(n){var e=n.onSubmit,t=(0,h.useState)(""),r=(0,s.Z)(t,2),i=r[0],o=r[1];return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(w,{onSubmit:function(n){n.preventDefault(),""!==i.trim()?(e(i),o(i)):d.Am.info("Please enter the name of the movie",{position:d.Am.POSITION.TOP_RIGHT})},children:[(0,y.jsx)(b,{type:"text",name:"searchQuery",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:i,onChange:function(n){var e=n.currentTarget.value;o(e.toLowerCase())}}),(0,y.jsx)(j,{type:"submit",children:(0,y.jsx)(Z,{})})]})})}var k=t(7689),z=t(1087);function M(n){var e=n.movies,t=(0,k.TH)();return(0,y.jsx)("ul",{children:e.map((function(n){return(0,y.jsx)("li",{children:(0,y.jsx)(z.rU,{to:"/movies/".concat(n.id),state:{from:t},children:n.title})},n.id)}))})}var T,I=t(1011),O=v.Z.h1(T||(T=(0,x.Z)(["\n  text-align: center;\n  margin-bottom: 50px;\n  color: #032541;\n  font-size: ",";\n\n  @media screen and (min-width: 768px) {\n    font-size: 32px;\n  }\n"])),(function(n){return n.theme.fontSizes.s})),R=(0,l.Z)();function E(){var n=(0,f.$G)(),e=n.t,t=n.i18n.language,r=(0,h.useState)(null),i=(0,s.Z)(r,2),o=i[0],a=i[1],u=(0,h.useState)(""),l=(0,s.Z)(u,2),x=l[0],v=l[1],g=(0,h.useState)(!1),w=(0,s.Z)(g,2),b=w[0],j=w[1];return(0,h.useEffect)((function(){if(""!==x){j(!0);var n=function(){var n=(0,c.Z)(p().mark((function n(){var e,r;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,R.fetchSearchMovie(x,t);case 3:if(e=n.sent,r=e.results){n.next=8;break}return d.Am.error("The movie could not be found.",{position:d.Am.POSITION.TOP_CENTER}),n.abrupt("return");case 8:a(r),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),console.error(n.t0),d.Am.error("404 Error !!!",{position:d.Am.POSITION.TOP_CENTER});case 15:return n.prev=15,j(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[0,11,15,18]])})));return function(){return n.apply(this,arguments)}}();n(),j(!1)}}),[t,x]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("main",{children:[b&&(0,y.jsx)(m.Z,{}),(0,y.jsx)(O,{children:e("searchMovie")}),(0,y.jsx)(S,{onSubmit:function(n){v(n)}}),o&&(0,y.jsx)("section",{children:(0,y.jsx)(M,{movies:o})})]}),(0,y.jsx)(I.Z,{})]})}},171:function(n,e,t){var r=t(5861),i=t(4687),o=t.n(i),a={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTMxNTJlM2MxOWQ1YzU3NjQyMzVjZmFhMmU0MjJmMSIsInN1YiI6IjY0ZTU4ZTdhMWZlYWMxMDBhYjhlNTA4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k6MLKJDkEcuLx4u4b6W5X0t6JAySBDO73jvRSeD_w2g"}};function c(n){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://api.themoviedb.org/3/trending/movie/day?language=".concat(e),a);case 3:if((t=n.sent).ok){n.next=6;break}return n.abrupt("return",Promise.reject(new Error("Sorry, something went wrong...")));case 6:return n.next=8,t.json();case 8:return r=n.sent,n.abrupt("return",r);case 12:n.prev=12,n.t0=n.catch(0),console.error(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})))).apply(this,arguments)}function u(n,e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(o().mark((function n(e,t){var r,i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(e,"?language=").concat(t),a);case 3:return r=n.sent,n.next=6,r.json();case 6:return i=n.sent,n.abrupt("return",i);case 10:n.prev=10,n.t0=n.catch(0),console.error("ERROR",n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function h(n,e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(o().mark((function n(e,t){var r,i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?language=").concat(t),a);case 3:return r=n.sent,n.next=6,r.json();case 6:return i=n.sent,n.abrupt("return",i);case 10:n.prev=10,n.t0=n.catch(0),console.log("ERROR",n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function f(n,e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(o().mark((function n(e,t){var r,i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?language=").concat(t),a);case 3:return r=n.sent,n.next=6,r.json();case 6:return i=n.sent,n.abrupt("return",i);case 10:n.prev=10,n.t0=n.catch(0),console.log("ERROR",n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function m(n,e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(o().mark((function n(e,t){var r,i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&include_adult=false&language=").concat(t,"&page=1"),a);case 3:if((r=n.sent).ok){n.next=6;break}return n.abrupt("return",Promise.reject(new Error("Sorry, something went wrong...")));case 6:return n.next=8,r.json();case 8:return i=n.sent,n.abrupt("return",i);case 12:n.prev=12,n.t0=n.catch(0),console.error("ERROR",n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})))).apply(this,arguments)}e.Z=function(){return{fetchTrendingMovies:c,fetchMovieId:u,fetchMovieActors:h,fetchMovieReviews:f,fetchSearchMovie:m}}}}]);
//# sourceMappingURL=559.803f1d08.chunk.js.map