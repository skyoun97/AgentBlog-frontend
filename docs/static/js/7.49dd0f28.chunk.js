(this.webpackJsonpagentsblog=this.webpackJsonpagentsblog||[]).push([[7],{114:function(n,e,t){"use strict";var r=t(4),a=t(0),i=t.n(a),c=t(5),o=t(12);function l(){var n=Object(r.a)(["\n  @media (max-width: 768px) {\n    height: 1.5rem;\n    font-size: 0.75rem;\n    padding-left: 0.75rem;\n    padding-right: 0.75rem;\n    margin-right: 0.5rem;\n    margin-bottom: 0.5rem;\n    border-radius: 0.75rem;\n  }\n  display: inline-flex;\n  align-items: center;\n  height: 2rem;\n  padding: 0px 1rem;\n  margin-bottom: 0.875rem;\n  background-color: rgb(241, 243, 245);\n\n  color: rgb(12, 166, 120);\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 1rem;\n  border-radius: 1rem;\n\n  & + & {\n    margin-left: 10px;\n  }\n\n  transition: background-color 0.08s ease-out 0s;\n  &:hover {\n    background-color: rgb(249, 249, 250);\n  }\n"]);return l=function(){return n},n}var u=Object(c.c)(o.b)(l());e.a=i.a.memo((function(n){var e=n.name,t=n.isLink,r=void 0===t||t,a=n.onClick;return r?i.a.createElement(u,{to:"/tags/".concat(e)},e):i.a.createElement(u,{to:"/tags/".concat(e),onClick:function(n){n.preventDefault(),a&&a(n)}},e)}))},117:function(n,e,t){"use strict";var r=t(4),a=t(11),i=t(56),c=t(0),o=t.n(c),l=t(5),u=t(115),m=t.n(u);function d(){var n=Object(r.a)(["\n  display: ",";\n"]);return d=function(){return n},n}var g=l.c.img(d(),(function(n){return n._loading?"none":"inline"}));e.a=function(n){var e=n.loadingHeight,t=Object(i.a)(n,["loadingHeight"]),r=Object(c.useState)(!0),l=Object(a.a)(r,2),u=l[0],d=l[1],s=Object(c.useState)(!1),h=Object(a.a)(s,2),f=h[0],b=h[1];return o.a.createElement(o.a.Fragment,null,u&&!f&&o.a.createElement(m.a,{height:e}),!f&&o.a.createElement(g,Object.assign({_loading:u,onLoad:function(){return d(!1)},onError:function(n){b(!0),t.onError&&t.onError(n)}},t)))}},118:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t(122),a=t.n(r),i=function(n){return a()(n).replace(/<[^>]+>/g,"").replace(/&#(\d+);/g,(function(n,e){return String.fromCharCode(e)}))}},129:function(n,e,t){"use strict";t.d(e,"b",(function(){return o})),t.d(e,"a",(function(){return l}));var r=t(4),a=t(13);function i(){var n=Object(r.a)(["\n  query searchHashtag($name: String!) {\n    searchHashtag(name: $name) {\n      id\n      explanation\n      posts {\n        id\n        user {\n          id\n          username\n          avatar\n        }\n        thumbnail\n        description\n        files {\n          id\n          url\n        }\n        url\n        title\n        content\n        hashtags {\n          id\n          name\n        }\n        createdAt\n        commentCount\n      }\n    }\n  }\n"]);return i=function(){return n},n}function c(){var n=Object(r.a)(["\n  query searchPost($term: String!) {\n    searchPost(term: $term) {\n      id\n      user {\n        id\n        username\n        avatar\n      }\n      thumbnail\n      description\n      files {\n        id\n        url\n      }\n      url\n      title\n      content\n      hashtags {\n        id\n        name\n      }\n      createdAt\n      commentCount\n    }\n  }\n"]);return c=function(){return n},n}var o=Object(a.b)(c()),l=Object(a.b)(i())},130:function(n,e,t){"use strict";var r=t(4),a=t(0),i=t.n(a),c=t(5),o=t(30),l=t(11),u=t(12),m=t(54),d=t(49),g=t(114),s=t(115),h=t.n(s),f=t(117),b=t(118);function p(){var n=Object(r.a)(["\n  font-weight: 400;\n  font-size: 14px;\n  text-transform: uppercase;\n  opacity: 0.5;\n  display: block;\n  margin: 10px 0px;\n"]);return p=function(){return n},n}function v(){var n=Object(r.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 10px;\n"]);return v=function(){return n},n}function E(){var n=Object(r.a)(["\n  @media (max-width: 768px) {\n    font-size: 0.875rem;\n    margin-bottom: 1.5rem;\n  }\n  width: 100%;\n  max-height: 75px;\n  font-size: 1rem;\n  color: ",";\n  word-break: keep-all;\n  overflow-wrap: break-word;\n  margin-top: 0.5rem;\n  margin-bottom: 2rem;\n"]);return E=function(){return n},n}function x(){var n=Object(r.a)(["\n  @media (max-width: 768px) {\n    font-size: 1rem;\n  }\n  font-size: 1.5rem;\n  word-break: keep-all;\n  color: ",";\n  text-decoration: none;\n"]);return x=function(){return n},n}function j(){var n=Object(r.a)(["\n  max-width: 100%;\n  width: 100%;\n  height: 370px;\n  position: absolute;\n  top: 0;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center;\n  object-fit: cover;\n"]);return j=function(){return n},n}function O(){var n=Object(r.a)(["\n  position: relative;\n  height: 370px;\n  width: 100%;\n  overflow: hidden;\n  margin-bottom: 12px;\n"]);return O=function(){return n},n}function w(){var n=Object(r.a)(["\n  margin-left: 10px;\n"]);return w=function(){return n},n}function k(){var n=Object(r.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  margin-bottom: 1.5rem;\n"]);return k=function(){return n},n}function y(){var n=Object(r.a)(["\n  width: 100%;\n  line-height: 1.5;\n  padding-bottom: 4rem;\n"]);return y=function(){return n},n}var C=function(){return i.a.createElement(z,null,i.a.createElement("div",{style:{fontSize:20,lineHeight:2}},i.a.createElement(S,null,i.a.createElement(h.a,{circle:!0,height:50,width:50}),i.a.createElement(H,null,i.a.createElement(h.a,{width:300,height:40}))),i.a.createElement(h.a,{height:370}),i.a.createElement(h.a,{height:50})))},z=c.c.article(y()),S=c.c.div(k()),H=c.c.div(w()),A=c.c.div(O()),D=Object(c.c)(f.a)(j(),(function(n){return n.src})),G=Object(c.c)(d.a)(x(),(function(n){return n.theme.deepDarkGreyColor})),T=c.c.p(E(),(function(n){return n.theme.greyColor})),$=c.c.div(v()),q=c.c.span(p()),P=function(n){var e=n.user,t=e.username,r=e.avatar,c=n.url,o=n.thumbnail,s=n.files,h=n.title,f=n.content,p=n.description,v=n.hashtags,E=n.createdAt,x=n.commentCount,j=o||(s.length>0?s[0].url:null),O=p||Object(b.a)(f),w=Object(a.useState)(!1),k=Object(l.a)(w,2),y=k[0],C=k[1];return i.a.createElement(z,null,i.a.createElement(S,null,i.a.createElement(u.b,{to:"/@".concat(t)},i.a.createElement(m.a,{size:"md",url:r})),i.a.createElement(H,null,i.a.createElement(u.b,{to:"/@".concat(t)},i.a.createElement(d.a,{text:t})))),j&&!y&&i.a.createElement(A,null,i.a.createElement(u.b,{to:"/@".concat(t,"/").concat(c)},i.a.createElement(D,{src:j,loadingHeight:370,onError:function(){return C(!0)}}))),i.a.createElement(u.b,{to:"/@".concat(t,"/").concat(c)},i.a.createElement(G,{text:h})),i.a.createElement(T,null,O.length<150?O:O.slice(0,150).concat("...")),i.a.createElement($,null,v.map((function(n){return i.a.createElement(g.a,{key:n.id,name:n.name})}))),i.a.createElement(q,null,E," "," \xb7 "," ",x,"\uc758 \ub313\uae00"))},B=t(55);function F(){var n=Object(r.a)(["\n  font-weight: 700;\n  font-size: 3rem;\n  line-height: 1.5;\n  margin-bottom: 20px;\n"]);return F=function(){return n},n}function J(){var n=Object(r.a)(["\n  @media (max-width: 768px) {\n    height: 2.25rem;\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  display: block;\n  border-radius: 1px;\n  border-color: ",";\n  background: white;\n  font-size: 25px;\n  height: 4rem;\n  width: 100%;\n  padding: 0px 1.5rem;\n\n  transition: border-color 0.08s ease-out 0s;\n  &:focus {\n    border-color: ",";\n  }\n"]);return J=function(){return n},n}function L(){var n=Object(r.a)(["\n  margin-bottom: 1.5rem;\n"]);return L=function(){return n},n}function _(){var n=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-height: 50vh;\n"]);return _=function(){return n},n}function I(){var n=Object(r.a)(["\n  display: block;\n  font-weight: 400;\n  width: 100%;\n  color: ",";\n  line-height: 1.5;\n  font-size: 1.125rem;\n  margin-bottom: 4rem;\n"]);return I=function(){return n},n}function K(){var n=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  max-width: 780px;\n  margin: auto;\n  min-height: 50vh;\n"]);return K=function(){return n},n}var M=c.c.main(K()),N=c.c.span(I(),(function(n){return n.theme.greyColor})),Q=c.c.section(_()),R=c.c.div(L()),U=Object(c.c)(o.a)(J(),(function(n){return n.theme.darkGreyColor}),(function(n){return n.theme.deepDarkGreyColor})),V=c.c.h2(F());e.a=function(n){var e=n.searchType,t=n.posts,r=n.loading,a=n.term,c=n.onTermChange,o=n.tagname;return i.a.createElement(M,null,i.a.createElement(Q,null,i.a.createElement("header",null,"Hashtag"===e&&i.a.createElement(V,null,"# ".concat(o)),"Search"===e&&i.a.createElement(R,null,i.a.createElement(U,{value:a,onChange:c,placeholder:"\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud558\uc138\uc694."})),!r&&t&&(0===t.length?i.a.createElement(N,null,"\uac80\uc0c9 \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."):i.a.createElement(N,null,"\ucd1d"," ",i.a.createElement("b",{style:{color:B.a.deepDarkGreyColor}},t.length,"\uac1c"),"\uc758 \ud3ec\uc2a4\ud2b8\ub97c \ucc3e\uc558\uc2b5\ub2c8\ub2e4."))),r&&("Search"!==e||a&&a.length>0)&&i.a.createElement(i.a.Fragment,null,i.a.createElement(C,null),i.a.createElement(C,null)),t&&t.map((function(n){return i.a.createElement(P,Object.assign({key:n.id},n))}))))}},253:function(n,e,t){"use strict";t.r(e);var r=t(4),a=t(11),i=t(0),c=t.n(i),o=t(130),l=t(25),u=t(110),m=t(129),d=t(119),g=t(5),s=t(16);function h(){var n=Object(r.a)(["\n  @media (max-width: 1024px) {\n    padding-left: 1rem;\n    padding-right: 1rem;\n    margin-top: 2rem;\n  }\n  @media (max-width: 768px) {\n    margin-top: 0.5rem;\n    width: 100%;\n  }\n\n  margin-top: 3.5rem;\n  width: 768px;\n  margin-left: auto;\n  margin-right: auto;\n"]);return h=function(){return n},n}var f=g.c.div(h());e.default=function(){var n=Object(l.g)(),e=Object(l.h)().search.split("=")[1],t=Object(i.useState)(e||""),r=Object(a.a)(t,2),g=r[0],h=r[1],b=Object(u.a)(m.b,{variables:{term:g},skip:0===g.length}),p=b.data,v=b.loading,E=b.error;return Object(i.useEffect)((function(){E&&(window.location.reload(),s.b.error("\ud3ec\uc2a4\ud2b8\ub97c \uac00\uc838\uc624\ub358 \uc911 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."))}),[E]),c.a.createElement(f,null,c.a.createElement(d.a,null,c.a.createElement("title",null,g.length>0?'"'.concat(g,'" \uac80\uc0c9 \uacb0\uacfc - Agent Blog'):"Agent Blog")),c.a.createElement(o.a,{searchType:"Search",posts:null===p||void 0===p?void 0:p.searchPost,term:g,onTermChange:function(e){n.replace("/search?q="+e.target.value),h(e.target.value)},loading:v}))}}}]);
//# sourceMappingURL=7.49dd0f28.chunk.js.map