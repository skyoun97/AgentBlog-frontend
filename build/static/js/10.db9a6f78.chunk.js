(this.webpackJsonpagentblog=this.webpackJsonpagentblog||[]).push([[10],{145:function(n,e,t){"use strict";t.d(e,"b",(function(){return m})),t.d(e,"c",(function(){return d})),t.d(e,"a",(function(){return h}));var r=t(33),a=t.n(r),i=t(75),c=t(150),o=t.n(c),l=t(151),u=t.n(l),s=t(77),m=function(n){return o()(n).replace(/<[^>]+>/g,"").replace(/&#(\d+);/g,(function(n,e){return String.fromCharCode(e)}))},d=function(){var n=Object(i.a)(a.a.mark((function n(e){var t;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(t=new FormData).append("file",e,e.name),n.next=4,u.a.post(s.b+"/api/upload",t,{headers:{"content-type":"multipart/form-data"}});case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(n){var e=n.slice(0,10).split("-");return"".concat(e[0],"\ub144 ").concat(e[1],"\uc6d4 ").concat(e[2],"\uc77c")}},149:function(n,e,t){"use strict";var r=t(5),a=t(0),i=t.n(a),c=t(6),o=t(20);function l(){var n=Object(r.a)(["\n  @media (max-width: 768px) {\n    height: 1.5rem;\n    font-size: 0.75rem;\n    padding-left: 0.75rem;\n    padding-right: 0.75rem;\n    margin-right: 0.5rem;\n    margin-bottom: 0.5rem;\n    border-radius: 0.75rem;\n  }\n  display: inline-flex;\n  align-items: center;\n  height: 2rem;\n  padding: 0px 1rem;\n  margin-bottom: 0.875rem;\n  background-color: rgb(241, 243, 245);\n\n  color: rgb(12, 166, 120);\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 1rem;\n  border-radius: 1rem;\n\n  & + & {\n    margin-left: 10px;\n  }\n\n  transition: background-color 0.08s ease-out 0s;\n  &:hover {\n    background-color: rgb(249, 249, 250);\n  }\n"]);return l=function(){return n},n}var u=Object(c.c)(o.b)(l());e.a=i.a.memo((function(n){var e=n.name,t=n.isLink,r=void 0===t||t,a=n.onClick;return r?i.a.createElement(u,{to:"/tags/".concat(e)},e):i.a.createElement(u,{to:"/tags/".concat(e),onClick:function(n){n.preventDefault(),a&&a(n)}},e)}))},158:function(n,e,t){"use strict";var r=t(5),a=t(52),i=t(0),c=t.n(i),o=t(6),l=t(176),u=t.n(l);function s(){var n=Object(r.a)(["\n  line-height: 1.7;\n  color: rgb(34, 36, 38);\n  & pre > code {\n    display: block;\n    overflow: scroll;\n  }\n"]);return s=function(){return n},n}function m(){var n=Object(r.a)(["\n  color: #0ca678;\n  &:hover {\n    color: #12b886;\n    text-decoration: underline;\n  }\n"]);return m=function(){return n},n}function d(n){n.alt;var e=Object(a.a)(n,["alt"]);return c.a.createElement("img",Object.assign({alt:n.alt},e,{style:{display:"flex",maxWidth:"100%",marginLeft:"auto",marginRight:"auto"}}))}var h=function(n){return c.a.createElement("code",{style:{background:"rgba(27, 31, 35, 0.05)",padding:"0.2rem 0.4rem",borderRadius:"3px"}},n.value)},g=function(n){return c.a.createElement("blockquote",{style:{backgroundColor:"rgb(248,249,250)",padding:"1rem 1rem 1rem 2rem",margin:5,display:"flex",flexWrap:"wrap",borderLeft:"4px solid rgb(32, 201, 151)"}},n.children)},b=function(n){return c.a.createElement("pre",{style:{background:"rgb(248,249,250)",color:"#000",padding:10,lineHeight:1.5}},c.a.createElement("code",null,n.value))},f=function(n){n.value;var e=n.children,t=n.href,r=Object(a.a)(n,["value","children","href"]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(p,Object.assign({href:t},r),e))},p=o.c.a(m()),v=o.c.div(s());e.a=c.a.memo((function(n){var e=n.source;return c.a.createElement(v,null,c.a.createElement(u.a,{source:e.replace(/\n/g,"  \n"),renderers:{code:b,inlineCode:h,blockquote:g,image:d,link:f},skipHtml:!1,escapeHtml:!1}))}))},165:function(n,e,t){"use strict";t.d(e,"c",(function(){return l})),t.d(e,"b",(function(){return u})),t.d(e,"a",(function(){return s}));var r=t(5),a=t(10);function i(){var n=Object(r.a)(["\n  mutation editPost(\n    $id: String!\n    $title: String!\n    $url: String!\n    $hashtags: [String!]!\n    $thumbnail: String\n    $content: String!\n    $description: String\n    $series_id: String\n    $action: ACTIONS!\n  ) {\n    editPost(\n      id: $id\n      title: $title\n      url: $url\n      hashtags: $hashtags\n      thumbnail: $thumbnail\n      content: $content\n      description: $description\n      series_id: $series_id\n      action: $action\n    ) {\n      url\n    }\n  }\n"]);return i=function(){return n},n}function c(){var n=Object(r.a)(["\n  query getPostDetail($username: String!, $url: String!) {\n    getPostDetail(username: $username, url: $url) {\n      id\n      title\n      url\n      user {\n        id\n        bio\n        avatar\n      }\n      files {\n        id\n        url\n      }\n      hashtags {\n        id\n        name\n      }\n      series {\n        id\n        title\n      }\n      thumbnail\n      createdAt\n      commentCount\n      content\n      comments {\n        id\n        text\n        user {\n          username\n          avatar\n        }\n        createdAt\n      }\n      isLiked\n      likeCount\n    }\n  }\n"]);return c=function(){return n},n}function o(){var n=Object(r.a)(["\n  mutation posting(\n    $title: String!\n    $hashtags: [String!]\n    $content: String!\n    $series_id: String\n    $thumbnail: String\n    $url: String!\n  ) {\n    posting(\n      title: $title\n      hashtags: $hashtags\n      content: $content\n      series_id: $series_id\n      thumbnail: $thumbnail\n      url: $url\n    ) {\n      url\n      user {\n        username\n      }\n    }\n  }\n"]);return o=function(){return n},n}var l=Object(a.gql)(o()),u=Object(a.gql)(c()),s=Object(a.gql)(i())},291:function(n,e,t){"use strict";t.r(e);var r=t(33),a=t.n(r),i=t(75),c=t(68);var o=t(81);function l(n){return function(n){if(Array.isArray(n))return Object(c.a)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||Object(o.a)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=t(16),s=t(0),m=t.n(s),d=t(24),h=t(5),g=t(6),b=t(155),f=t(149),p=t(41),v=t(158);function x(){var n=Object(h.a)(["\n  stroke: currentColor;\n  fill: currentColor;\n  stroke-width: 0;\n  height: 24px;\n  width: 24px;\n"]);return x=function(){return n},n}function k(){var n=Object(h.a)(["\n  display: flex;\n  width: 3rem;\n  height: 3rem;\n  font: 400 13.3333px Arial;\n  font-size: 1rem;\n  font-weight: bold;\n  align-items: center;\n  justify-content: center;\n  border: 0px;\n  background-color: white;\n  color: rgb(134, 142, 150) !important;\n  &:hover {\n    color: rgb(33, 37, 41) !important;\n    background: rgb(248, 249, 250) !important;\n  }\n  transition: all 0.05s ease-in 0s;\n  cursor: pointer;\n"]);return k=function(){return n},n}function w(){var n=Object(h.a)(["\n  width: 1px;\n  height: 1.25rem;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  background: rgb(206, 212, 218);\n"]);return w=function(){return n},n}function E(){var n=Object(h.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  margin-bottom: 1rem;\n"]);return E=function(){return n},n}var j=g.c.div(E()),O=g.c.div(w()),C=g.c.button(k()),y=g.c.svg(x()),$=function(n){var e=n.onClick,t=n.onImageUpload;return m.a.createElement(j,null,m.a.createElement(C,{name:"h1",onClick:e},"H",m.a.createElement("sub",null,"1")),m.a.createElement(C,{name:"h2",onClick:e},"H",m.a.createElement("sub",null,"2")),m.a.createElement(C,{name:"h3",onClick:e},"H",m.a.createElement("sub",null,"3")),m.a.createElement(C,{name:"h4",onClick:e},"H",m.a.createElement("sub",null,"4")),m.a.createElement(O,null),m.a.createElement(C,{name:"bold",onClick:e},m.a.createElement(y,{xmlns:"http://www.w3.org/2000/svg"},m.a.createElement("path",{d:"M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"}))),m.a.createElement(C,{name:"italic",onClick:e},m.a.createElement(y,{xmlns:"http://www.w3.org/2000/svg"},m.a.createElement("path",{d:"M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"}))),m.a.createElement(C,{name:"del",onClick:e},m.a.createElement(y,{xmlns:"http://www.w3.org/2000/svg"},m.a.createElement("path",{d:"M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z"}))),m.a.createElement(O,null),m.a.createElement(C,{name:"quote",onClick:e},m.a.createElement(y,{xmlns:"http://www.w3.org/2000/svg"},m.a.createElement("path",{d:"M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"}))),m.a.createElement(C,{name:"link",onClick:e},m.a.createElement(y,{xmlns:"http://www.w3.org/2000/svg"},m.a.createElement("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}))),m.a.createElement(C,{name:"uploadImage",onClick:function(){var n;return null===(n=document.getElementById("fileid"))||void 0===n?void 0:n.click()}},m.a.createElement("input",{id:"fileid",type:"file",accept:"image/*",onChange:t,hidden:!0}),m.a.createElement(y,{xmlns:"http://www.w3.org/2000/svg"},m.a.createElement("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"}))),m.a.createElement(C,{name:"codeBlock",onClick:e},m.a.createElement(y,{xmlns:"http://www.w3.org/2000/svg"},m.a.createElement("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}))))};function z(){var n=Object(h.a)(["\n  width: 4rem;\n  height: 0.5rem;\n  background: rgb(52, 58, 64);\n  margin: 1rem 0rem;\n"]);return z=function(){return n},n}function S(){var n=Object(h.a)(["\n  height: 100%;\n  width: 50%;\n  padding: 3rem;\n  overflow: scroll;\n  background-color: rgb(251, 253, 252);\n  @media (max-width: 1024px) {\n    display: none;\n  }\n"]);return S=function(){return n},n}function H(){var n=Object(h.a)(["\n  font-size: 2.5em;\n  margin-bottom: 5rem;\n"]);return H=function(){return n},n}function M(){var n=Object(h.a)(["\n  font-size: 1.125rem;\n  height: 2.5rem;\n  width: 10rem;\n  font-weight: bold;\n"]);return M=function(){return n},n}function I(){var n=Object(h.a)(["\n  font-size: 1.125rem;\n  height: 2.5rem;\n  width: 7rem;\n  font-weight: 100;\n"]);return I=function(){return n},n}function _(){var n=Object(h.a)(["\n  box-shadow: rgba(0, 0, 0, 0.04) 0px -4px 16px 0px;\n  margin: 0 -30px -30px -30px;\n  padding: 10px;\n  display: flex;\n  align-content: center;\n  justify-content: space-between;\n"]);return _=function(){return n},n}function T(){var n=Object(h.a)(["\n  width: 100%;\n  margin-top: 15px;\n  height: 100%;\n  font-size: 18px;\n  line-height: 27px;\n  resize: none;\n  padding: 0;\n  border: none;\n  color: rgb(52, 58, 64);\n  &:focus {\n    outline: none;\n  }\n"]);return T=function(){return n},n}function q(){var n=Object(h.a)(["\n  margin: 10px 0;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n"]);return q=function(){return n},n}function B(){var n=Object(h.a)(["\n  min-width: 12rem;\n  padding: 0;\n  margin-left: 1rem;\n  margin-bottom: 10px;\n  height: 40px;\n  font-size: 18px;\n  font-weight: 500;\n  padding: 0;\n  border: none;\n\n  &:first-child {\n    margin-left: 0rem;\n  }\n\n  &:focus {\n    outline: none;\n  }\n"]);return B=function(){return n},n}function L(){var n=Object(h.a)(["\n  width: 100%;\n  height: 70px;\n  font-size: 40px;\n  padding: 0;\n  border: none;\n  font-weight: 650;\n\n  &:focus {\n    outline: none;\n  }\n"]);return L=function(){return n},n}function P(){var n=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  height: 100%;\n  padding: 2rem 3rem;\n  background-color: white;\n\n  @media (max-width: 1024px) {\n    width: 100%;\n  }\n"]);return P=function(){return n},n}function V(){var n=Object(h.a)(["\n  display: flex;\n  width: 100%;\n  height: calc(100% - 0px);\n  flex-wrap: no-wrap;\n"]);return V=function(){return n},n}var A=g.c.div(V()),D=g.c.div(P()),R=g.c.input(L()),U=g.c.input(B()),W=g.c.div(q()),F=g.c.textarea(T()),J=g.c.div(_()),G=Object(g.c)(p.a)(I()),K=Object(g.c)(p.a)(M()),N=g.c.h1(H()),Q=g.c.div(S()),X=g.c.div(z()),Y=function(n){var e=n.title,t=n.hashtag,r=n.hashtags,a=n.content,i=n.handleChangeText,c=n.handleChangeHashtags,o=n.handleSubmit,l=n.handleClickHashtag,u=n.hanldExit,s=n.onUpload,h=n.textareaEl,g=n.hanldToolbarButton,p=n.isEditing,x=m.a.useCallback((function(){return d.b.dark("\uc27c\ud45c \ud639\uc740 \uc5d4\ud130\ub97c \ub20c\ub7ec \ud574\uc2dc\ud0dc\uadf8\ub97c \ub4f1\ub85d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ub4f1\ub85d\ub41c \ud0dc\uadf8\ub294 \ud074\ub9ad\ud558\uba74 \uc0ad\uc81c\ub429\ub2c8\ub2e4.",{position:"top-center",hideProgressBar:!0,autoClose:!1,toastId:"tagInfo"})}),[]),k=m.a.useCallback((function(){return d.b.dismiss("tagInfo")}),[]),w=m.a.useMemo((function(){return m.a.createElement(W,null,r.map((function(n){return m.a.createElement(f.a,{key:n,name:n,isLink:!1,onClick:l})})),m.a.createElement(U,{value:t,onChange:i,onKeyPress:c,onFocus:x,onBlur:k,placeholder:"\ud0dc\uadf8\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",name:"hashtag",tabIndex:1}))}),[r,t,l,k,x,c,i]);return m.a.createElement(A,null,m.a.createElement(b.a,null,e.length>0?m.a.createElement("title",null,"(\uc791\uc131\uc911) ",e):m.a.createElement("title",null,"\uae00 \uc791\uc131")),m.a.createElement(D,null,m.a.useMemo((function(){return m.a.createElement(R,{value:e,onChange:i,placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",name:"title",tabIndex:0})}),[e,i]),m.a.createElement(X,null),w,m.a.createElement($,{onClick:g,onImageUpload:s}),m.a.useMemo((function(){return m.a.createElement(F,{value:a,onChange:i,ref:h,placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",name:"content",tabIndex:2})}),[a,i,h]),m.a.createElement(J,null,m.a.createElement(G,{text:"\ub098\uac00\uae30",icon:{type:"back",size:16},buttonType:"text",colorStyle:"lightGrey",onClick:u}),m.a.useMemo((function(){return m.a.createElement(K,{text:p?"\uc218\uc815\ud558\uae30":"\ucd9c\uac04\ud558\uae30",onClick:o})}),[o,p]))),m.a.useMemo((function(){return m.a.createElement(Q,null,m.a.createElement(N,null,e),m.a.createElement(v.a,{source:"".concat(a)}))}),[e,a]))},Z=t(165),nn=t(42),en=t(80),tn=t(15),rn=t(145),an=t(10),cn=function(){var n=Object(s.useState)(""),e=Object(u.a)(n,2),t=e[0],r=e[1],c=Object(nn.c)((function(n){return n.posting.id})),o=Object(nn.c)((function(n){return n.posting.isEditing})),h=Object(nn.c)((function(n){return n.posting.title})),g=Object(nn.c)((function(n){return n.posting.hashtags})),b=Object(nn.c)((function(n){return n.posting.content})),f=Object(nn.c)((function(n){return n.posting.series_id})),p=Object(nn.c)((function(n){return n.posting.thumbnail})),v=Object(nn.c)((function(n){return n.posting.url})),x=Object(nn.c)((function(n){return n.me.username})),k=Object(nn.b)(),w=Object(tn.g)(),E=Object(s.useRef)(null),j=Object(s.useCallback)((function(n){var e=n.target,t=e.name,a=e.value;"hashtag"===t&&r(a),"title"!==t&&"content"!==t||k(Object(en.e)({key:t,value:a}))}),[k]),O=Object(s.useCallback)((function(n){if("Enter"===n.key||","===n.key){if(n.preventDefault(),g.find((function(n){return n===t})))return d.b.warning("\uc774\ubbf8 \uc788\ub294 \ud574\uc2dc\ud0dc\uadf8\uc785\ub2c8\ub2e4.");""!==t.trim()?(r(""),k(Object(en.e)({key:"hashtags",value:[].concat(l(g),[t])}))):d.b.error("\ud574\uc2dc\ud0dc\uadf8\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694!")}}),[t,g,k]),C=Object(an.useMutation)(Z.c,{variables:{title:h,hashtags:g,content:b,series_id:f,thumbnail:p,url:h}}),y=Object(u.a)(C,1)[0],$=Object(an.useMutation)(Z.a,{variables:{id:c,title:h,hashtags:g,content:b,series_id:f,thumbnail:p,url:v,action:"EDIT"}}),z=Object(u.a)($,1)[0],S=Object(s.useCallback)(function(){var n=Object(i.a)(a.a.mark((function n(e){var t,r,i,c,l;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),""!==h&&""!==b){n.next=5;break}d.b.error("\uc81c\ubaa9\uacfc \ub0b4\uc6a9\uc744 \ube44\uc6b0\uc9c0 \ub9d0\uc544\uc8fc\uc138\uc694!"),n.next=28;break;case 5:if(n.prev=5,o){n.next=15;break}return n.next=9,y();case 9:r=n.sent,i=r.data,t=i.posting.url,i.posting?d.b.success("\uae00 \uc791\uc131\uc5d0 \uc131\uacf5\ud588\uc2b5\ub2c8\ub2e4."):d.b.error("\uae00 \uc791\uc131\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."),n.next=21;break;case 15:return n.next=17,z();case 17:c=n.sent,l=c.data,t=l.editPost.url,l.editPost?(d.b.success("\uac8c\uc2dc\uae00 \uc218\uc815\uc5d0 \uc131\uacf5\ud588\uc2b5\ub2c8\ub2e4."),k(Object(en.c)())):d.b.error("\uac8c\uc2dc\uae00 \uc218\uc815\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.");case 21:w.push("/@".concat(x,"/").concat(t)),n.next=28;break;case 24:n.prev=24,n.t0=n.catch(5),console.log(n.t0),d.b.error("\uc694\uccad\uc744 \uc644\ub8cc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.");case 28:case"end":return n.stop()}}),n,null,[[5,24]])})));return function(e){return n.apply(this,arguments)}}(),[o,h,b,x,y,z,k,w]),H=Object(s.useCallback)((function(n){return k(Object(en.e)({key:"hashtags",value:g.filter((function(e){return e!==n.target.textContent}))}))}),[g,k]),M=Object(s.useCallback)(function(){var n=Object(i.a)(a.a.mark((function n(e){var t,r,i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.target.files&&0!==e.target.files.length){n.next=2;break}return n.abrupt("return");case 2:return t=e.target.files[0],n.prev=3,n.next=6,Object(rn.c)(t);case 6:r=n.sent,i=r.data,k(Object(en.b)("\n![](".concat(i.location,")"))),n.next=15;break;case 11:return n.prev=11,n.t0=n.catch(3),d.b.error("\ud30c\uc77c \uc5c5\ub85c\ub4dc\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4."+n.t0),n.abrupt("return",null);case 15:case"end":return n.stop()}}),n,null,[[3,11]])})));return function(e){return n.apply(this,arguments)}}(),[k]),I=Object(s.useCallback)((function(n){var e,t,r,a,i,c,o,l={h1:["# ",""],h2:["## ",""],h3:["### ",""],h4:["#### ",""],quote:["> ",""],codeBlock:["```\n","\n```\n"],bold:["**","**"],italic:["_","_ "],del:["~~","~~"],link:["[","](link here)"]},u=n.currentTarget.name,s=(null===(e=E.current)||void 0===e?void 0:e.selectionStart)||0;["h1","h2","h3","h4","quote","codeBlock"].includes(u)&&(s=((null===(o=E.current)||void 0===o?void 0:o.value.lastIndexOf("\n",s-1))||0)+1);var m=(null===(t=E.current)||void 0===t?void 0:t.selectionEnd)||0,d=(null===(r=E.current)||void 0===r?void 0:r.value.slice(s,m))||"\ud14d\uc2a4\ud2b8",h="";d.startsWith(l[u][0])&&d.endsWith(l[u][1])?""===l[u][1]?h+=d.slice(l[u][0].length):h+=d.slice(l[u][0].length,-l[u][1].length):h+=l[u][0]+d+l[u][1],null===(a=E.current)||void 0===a||a.focus(),null===(i=E.current)||void 0===i||i.setRangeText(h,s,m,"select"),k(Object(en.e)({key:"content",value:null===(c=E.current)||void 0===c?void 0:c.value}))}),[k]);return m.a.createElement(Y,{title:h,hashtag:t,hashtags:g,content:b,handleChangeText:j,handleChangeHashtags:O,handleSubmit:S,handleClickHashtag:H,hanldExit:function(){o&&k(Object(en.c)()),w.goBack()},onUpload:M,textareaEl:E,hanldToolbarButton:I,isEditing:o})};e.default=cn}}]);
//# sourceMappingURL=10.db9a6f78.chunk.js.map