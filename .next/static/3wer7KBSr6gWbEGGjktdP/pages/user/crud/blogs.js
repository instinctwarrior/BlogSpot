(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{N65x:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),c=t.n(a),r=t("5Yp1"),s=t("yxxe"),o=t("nVAt"),l=(t("YFqc"),t("iuBY")),u=c.a.createElement;n.default=function(){var e=Object(l.e)()&&Object(l.e)().username;return u("div",{className:"content1"},u(r.a,null,u(s.a,null,u("div",{className:"container"},u("div",{className:"row"},u("div",{className:"col-md-12 pt-5 pb-5"},u("h2",null,"Manage blogs")),u("div",{className:"col-md-12"},u(o.a,{username:e})))))))}},Pmoa:function(e,n){e.exports=next},SCLT:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/crud/blogs",function(){return t("N65x")}])},nVAt:function(e,n,t){"use strict";var a=t("q1tI"),c=t.n(a),r=t("YFqc"),s=t.n(r),o=(t("nOHt"),t("iuBY")),l=t("zycw"),u=t("wd/R"),i=t.n(u),m=c.a.createElement;n.a=function(e){var n=e.username,t=Object(a.useState)([]),r=t[0],u=t[1],b=Object(a.useState)(""),d=b[0],f=b[1],p=Object(o.c)("token");Object(a.useEffect)((function(){g()}),[]);var g=function(){Object(l.b)(n).then((function(e){console.log(e),e.error?console.log(e.error):u(e)}))},w=function(e){window.confirm("Are you sure you want to delete your blog?")&&function(e){Object(l.g)(e,p).then((function(e){e.error?console.log(e.error):(f(e.message),g())}))}(e)},N=function(e){return Object(o.e)()&&0===Object(o.e)().role?m(s.a,{href:"/user/crud/".concat(e.slug)},m("a",{className:"ml-2 btn btn-sm btn-warning"},"Update")):Object(o.e)()&&1===Object(o.e)().role?m(s.a,{href:"/admin/crud/".concat(e.slug)},m("a",{className:"ml-2 btn btn-sm btn-warning"},"Update")):void 0};return m(c.a.Fragment,null,m("div",{className:"row"},m("div",{className:"col-md-12"},d&&m("div",{className:"alert alert-warning"},d),r.map((function(e,n){var t="";return 0==e.isPublished?(t="Blog will be published after the admin reviews and publishes it",m("div",{key:n,className:"pb-5"},m("h3",null,e.title),m("p",{className:"mark"},"Written by ",m("a",{href:"/profile/".concat(e.postedBy.username)},e.postedBy.name)," | ",t),m("button",{className:"btn btn-sm btn-danger",onClick:function(){return w(e.slug)}},"Delete"),N(e))):(t="Published on "+i()(e.updatedAt).fromNow(),m("div",{key:n,className:"pb-5"},m("h3",null,m("a",{href:"/blogs/".concat(e.slug)},e.title)),m("p",{className:"mark"},"Written by ",m("a",{href:"/profile/".concat(e.postedBy.username)},e.postedBy.name)," | ",t),m("button",{className:"btn btn-sm btn-danger",onClick:function(){return w(e.slug)}},"Delete"),N(e)))})))))}},yxxe:function(e,n,t){"use strict";var a=t("q1tI"),c=t.n(a),r=t("nOHt"),s=t.n(r),o=t("iuBY"),l=c.a.createElement;n.a=function(e){var n=e.children;return Object(a.useEffect)((function(){Object(o.e)()||s.a.push("/signin")}),[]),l(c.a.Fragment,null,n)}}},[["SCLT",1,0,4,2,3,5]]]);