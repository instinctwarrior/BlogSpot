(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"3GiG":function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/password/reset/[id]",function(){return t("frO5")}])},Pmoa:function(e,r){e.exports=next},frO5:function(e,r,t){"use strict";t.r(r);var n=t("rePB"),o=t("q1tI"),s=t.n(o),a=t("5Yp1"),c=t("nOHt"),i=t("iuBY"),u=s.a.createElement;function w(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?w(Object(t),!0).forEach((function(r){Object(n.a)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.default=Object(c.withRouter)((function(e){var r=e.router,t=Object(o.useState)({name:"",newPassword:"",error:"",message:"",showForm:!0}),n=t[0],s=t[1],c=(n.showForm,n.name,n.newPassword),w=n.error,l=n.message,d=function(e){e.preventDefault(),Object(i.g)({newPassword:c,resetPasswordLink:r.query.id}).then((function(e){e.error?s(p(p({},n),{},{error:e.error,showForm:!1,newPassword:""})):s(p(p({},n),{},{message:e.message,showForm:!1,newPassword:"",error:!1}))}))};return u("div",{className:"content2"},u(a.a,null,u("div",{className:"container"},u("h2",null,"Reset password"),u("hr",null),w?u("div",{className:"alert alert-danger"},w):"",l?u("div",{className:"alert alert-success"},l):"",u("form",{onSubmit:d},u("div",{className:"form-group pt-5"},u("input",{type:"password",onChange:function(e){return s(p(p({},n),{},{newPassword:e.target.value}))},className:"form-control",value:c,placeholder:"Type new password",required:!0})),u("div",null,u("button",{className:"btn btn-primary"},"Change password"))))))}))}},[["3GiG",1,0,2,3]]]);