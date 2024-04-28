"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{4387:function(e,n,t){t.r(n),t.d(n,{default:function(){return O}});var r,c,a,o,s,i,u,p=t(5861),h=t(9439),l=t(4687),f=t.n(l),v=t(7689),x=t(2791),d=t(9230),g=(t(5462),t(171)),m=t(1454),b=t(168),w=t(9202),Z=t(71),y=w.Z.ul(r||(r=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),j=w.Z.li(c||(c=(0,b.Z)(["\n  display: block;\n  padding: 20px;\n  border-radius: 8px;\n  border: 1px solid rgba(227, 227, 227, 1);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n"]))),k=w.Z.div(a||(a=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 8px;\n"]))),M=(0,w.Z)(Z.bq1)(o||(o=(0,b.Z)(["\n  margin-right: 15px;\n  width: 30px;\n  height: 30px;\n  stroke: grey;\n"]))),R=w.Z.p(s||(s=(0,b.Z)(["\n  font-weight: 700;\n"]))),J=w.Z.p(i||(i=(0,b.Z)(["\n  font-family: 'Source Sans Pro', Arial, sans-serif;\n"]))),E=w.Z.p(u||(u=(0,b.Z)(["\n  text-align: center;\n  padding: 34px 10px;\n  color: #ffffff;\n  background-image: radial-gradient(\n    circle at center,\n    rgb(32, 32, 32) calc(50vw - 510px),\n    rgba(32, 32, 32, 0.84) 50%,\n    rgba(32, 32, 32, 0.84) 100%\n  );\n  font-size: 20px;\n"]))),I=t(184),S=(0,g.Z)();function O(){var e=(0,d.$G)(),n=e.t,t=e.i18n.language,r=(0,x.useState)(null),c=(0,h.Z)(r,2),a=c[0],o=c[1],s=(0,x.useState)(!1),i=(0,h.Z)(s,2),u=i[0],l=i[1],g=(0,v.UO)().id;return(0,x.useEffect)((function(){l(!0);var e=function(){var e=(0,p.Z)(f().mark((function e(){var n,r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.fetchMovieReviews(g,t);case 3:n=e.sent,r=n.results,o(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:return e.prev=11,l(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[g,t]),(0,I.jsxs)(I.Fragment,{children:[u&&(0,I.jsx)(m.Z,{}),a&&a.length>0?(0,I.jsx)("section",{children:(0,I.jsx)("div",{children:(0,I.jsx)(y,{children:a.map((function(e){return(0,I.jsxs)(j,{children:[(0,I.jsxs)(k,{children:[(0,I.jsx)(M,{}),(0,I.jsx)(R,{children:e.author})]}),(0,I.jsx)(J,{children:e.content})]},e.id)}))})})}):(0,I.jsx)(E,{children:n("movieDetails.noReviews")})]})}},171:function(e,n,t){var r=t(5861),c=t(4687),a=t.n(c),o={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTMxNTJlM2MxOWQ1YzU3NjQyMzVjZmFhMmU0MjJmMSIsInN1YiI6IjY0ZTU4ZTdhMWZlYWMxMDBhYjhlNTA4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k6MLKJDkEcuLx4u4b6W5X0t6JAySBDO73jvRSeD_w2g"}};function s(e,n){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(a().mark((function e(n,t){var r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/popular?language=".concat(n,"&page=").concat(t),o);case 3:if((r=e.sent).ok){e.next=6;break}return e.abrupt("return",Promise.reject(new Error("Sorry, something went wrong...")));case 6:return e.next=8,r.json();case 8:return c=e.sent,e.abrupt("return",c);case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function u(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/trending/movie/day?language=".concat(n),o);case 3:if((t=e.sent).ok){e.next=6;break}return e.abrupt("return",Promise.reject(new Error("Sorry, something went wrong...")));case 6:return e.next=8,t.json();case 8:return r=e.sent,e.abrupt("return",r);case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function h(e,n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function e(n,t){var r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(n,"?language=").concat(t),o);case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(0),console.error("ERROR",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function f(e,n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function e(n,t){var r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?language=").concat(t),o);case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(0),console.log("ERROR",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function x(e,n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function e(n,t){var r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?language=").concat(t),o);case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(0),console.log("ERROR",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function g(e,n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function e(n,t){var r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/search/movie?query=".concat(n,"&include_adult=false&language=").concat(t,"&page=1"),o);case 3:if((r=e.sent).ok){e.next=6;break}return e.abrupt("return",Promise.reject(new Error("Sorry, something went wrong...")));case 6:return e.next=8,r.json();case 8:return c=e.sent,e.abrupt("return",c);case 12:e.prev=12,e.t0=e.catch(0),console.error("ERROR",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function b(e){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/videos"),o);case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.log("ERROR",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}n.Z=function(){return{fetchTrendingMovies:u,fetchMovieId:h,fetchMovieActors:f,fetchMovieReviews:x,fetchSearchMovie:g,fetchPopularMovies:s,fetchMovieVideos:b}}}}]);
//# sourceMappingURL=387.906f5e31.chunk.js.map