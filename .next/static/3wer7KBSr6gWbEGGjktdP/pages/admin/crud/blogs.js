(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"0lIN":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/crud/blogs",function(){return t("BzMX")}])},BzMX:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),c=t.n(a),r=t("5Yp1"),s=t("vC6e"),o=t("nVAt"),l=(t("YFqc"),t("TIwn"),c.a.createElement);n.default=function(){return l("div",{className:"content1"},l(r.a,null,l(s.a,null,l("div",{className:"container"},l("div",{className:"row"},l("div",{className:"col-md-12 pt-5 pb-5"},l("h2",null,"Manage blogs")),l("div",{className:"col-md-12"},l(o.a,null)))))))}},Pmoa:function(e,n){e.exports=next},nVAt:function(e,n,t){"use strict";var a=t("q1tI"),c=t.n(a),r=t("YFqc"),s=t.n(r),o=(t("nOHt"),t("iuBY")),l=t("zycw"),u=t("wd/R"),i=t.n(u),m=c.a.createElement;n.a=function(e){var n=e.username,t=Object(a.useState)([]),r=t[0],u=t[1],b=Object(a.useState)(""),d=b[0],f=b[1],p=Object(o.c)("token");Object(a.useEffect)((function(){g()}),[]);var g=function(){Object(l.b)(n).then((function(e){console.log(e),e.error?console.log(e.error):u(e)}))},w=function(e){window.confirm("Are you sure you want to delete your blog?")&&function(e){Object(l.g)(e,p).then((function(e){e.error?console.log(e.error):(f(e.message),g())}))}(e)},v=function(e){return Object(o.e)()&&0===Object(o.e)().role?m(s.a,{href:"/user/crud/".concat(e.slug)},m("a",{className:"ml-2 btn btn-sm btn-warning"},"Update")):Object(o.e)()&&1===Object(o.e)().role?m(s.a,{href:"/admin/crud/".concat(e.slug)},m("a",{className:"ml-2 btn btn-sm btn-warning"},"Update")):void 0};return m(c.a.Fragment,null,m("div",{className:"row"},m("div",{className:"col-md-12"},d&&m("div",{className:"alert alert-warning"},d),r.map((function(e,n){var t="";return 0==e.isPublished?(t="Blog will be published after the admin reviews and publishes it",m("div",{key:n,className:"pb-5"},m("h3",null,e.title),m("p",{className:"mark"},"Written by ",m("a",{href:"/profile/".concat(e.postedBy.username)},e.postedBy.name)," | ",t),m("button",{className:"btn btn-sm btn-danger",onClick:function(){return w(e.slug)}},"Delete"),v(e))):(t="Published on "+i()(e.updatedAt).fromNow(),m("div",{key:n,className:"pb-5"},m("h3",null,m("a",{href:"/blogs/".concat(e.slug)},e.title)),m("p",{className:"mark"},"Written by ",m("a",{href:"/profile/".concat(e.postedBy.username)},e.postedBy.name)," | ",t),m("button",{className:"btn btn-sm btn-danger",onClick:function(){return w(e.slug)}},"Delete"),v(e)))})))))}},vC6e:function(e,n,t){"use strict";var a=t("q1tI"),c=t.n(a),r=t("nOHt"),s=t.n(r),o=t("iuBY"),l=c.a.createElement;n.a=function(e){var n=e.children;return Object(a.useEffect)((function(){Object(o.e)()?1!=Object(o.e)().role&&s.a.push("/"):s.a.push("/signin")}),[]),l(c.a.Fragment,null,n)}}},[["0lIN",1,0,4,2,3,5]]]);