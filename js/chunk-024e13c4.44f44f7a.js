(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-024e13c4"],{"0cb2":function(t,e,n){var a=n("7b0b"),r=Math.floor,i="".replace,c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,o,s,u){var f=n+t.length,d=o.length,x=l;return void 0!==s&&(s=a(s),x=c),i.call(u,x,(function(a,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(f);case"<":c=s[i.slice(1,-1)];break;default:var l=+i;if(0===l)return a;if(l>d){var u=r(l/10);return 0===u?a:u<=d?void 0===o[u-1]?i.charAt(1):o[u-1]+i.charAt(1):a}c=o[l-1]}return void 0===c?"":c}))}},"14c3":function(t,e,n){var a=n("c6b6"),r=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==a(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},5319:function(t,e,n){"use strict";var a=n("d784"),r=n("825a"),i=n("50c4"),c=n("a691"),l=n("1d80"),o=n("8aa5"),s=n("0cb2"),u=n("14c3"),f=Math.max,d=Math.min,x=function(t){return void 0===t?t:String(t)};a("replace",2,(function(t,e,n,a){var p=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,h=a.REPLACE_KEEPS_$0,v=p?"$":"$0";return[function(n,a){var r=l(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,r,a):e.call(String(r),n,a)},function(t,a){if(!p&&h||"string"===typeof a&&-1===a.indexOf(v)){var l=n(e,t,this,a);if(l.done)return l.value}var g=r(t),m=String(this),b="function"===typeof a;b||(a=String(a));var E=g.global;if(E){var _=g.unicode;g.lastIndex=0}var k=[];while(1){var w=u(g,m);if(null===w)break;if(k.push(w),!E)break;var y=String(w[0]);""===y&&(g.lastIndex=o(m,i(g.lastIndex),_))}for(var R="",C=0,T=0;T<k.length;T++){w=k[T];for(var P=String(w[0]),S=f(d(c(w.index),m.length),0),$=[],I=1;I<w.length;I++)$.push(x(w[I]));var A=w.groups;if(b){var U=[P].concat($,S,m);void 0!==A&&U.push(A);var N=String(a.apply(void 0,U))}else N=s(P,m,S,$,A,a);S>=C&&(R+=m.slice(C,S)+N,C=S+P.length)}return R+m.slice(C)}]}))},"8aa5":function(t,e,n){"use strict";var a=n("6547").charAt;t.exports=function(t,e,n){return e+(n?a(t,e).length:1)}},9263:function(t,e,n){"use strict";var a=n("ad6d"),r=n("9f7f"),i=n("5692"),c=RegExp.prototype.exec,l=i("native-string-replace",String.prototype.replace),o=c,s=function(){var t=/a/,e=/b*/g;return c.call(t,"a"),c.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=r.UNSUPPORTED_Y||r.BROKEN_CARET,f=void 0!==/()??/.exec("")[1],d=s||f||u;d&&(o=function(t){var e,n,r,i,o=this,d=u&&o.sticky,x=a.call(o),p=o.source,h=0,v=t;return d&&(x=x.replace("y",""),-1===x.indexOf("g")&&(x+="g"),v=String(t).slice(o.lastIndex),o.lastIndex>0&&(!o.multiline||o.multiline&&"\n"!==t[o.lastIndex-1])&&(p="(?: "+p+")",v=" "+v,h++),n=new RegExp("^(?:"+p+")",x)),f&&(n=new RegExp("^"+p+"$(?!\\s)",x)),s&&(e=o.lastIndex),r=c.call(d?n:o,v),d?r?(r.input=r.input.slice(h),r[0]=r[0].slice(h),r.index=o.lastIndex,o.lastIndex+=r[0].length):o.lastIndex=0:s&&r&&(o.lastIndex=o.global?r.index+r[0].length:e),f&&r&&r.length>1&&l.call(r[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)})),r}),t.exports=o},"9f7f":function(t,e,n){"use strict";var a=n("d039");function r(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=a((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=a((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var a=n("23e7"),r=n("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(t,e,n){"use strict";var a=n("825a");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b096:function(t,e,n){},d65c:function(t,e,n){"use strict";n("b096")},d784:function(t,e,n){"use strict";n("ac1f");var a=n("6eeb"),r=n("9263"),i=n("d039"),c=n("b622"),l=n("9112"),o=c("species"),s=RegExp.prototype,u=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){return"$0"==="a".replace(/./,"$0")}(),d=c("replace"),x=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var h=c(t),v=!i((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),g=v&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[o]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return e=!0,null},n[h](""),!e}));if(!v||!g||"replace"===t&&(!u||!f||x)||"split"===t&&!p){var m=/./[h],b=n(h,""[t],(function(t,e,n,a,i){var c=e.exec;return c===r||c===s.exec?v&&!i?{done:!0,value:m.call(e,n,a)}:{done:!0,value:t.call(n,e,a)}:{done:!1}}),{REPLACE_KEEPS_$0:f,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:x}),E=b[0],_=b[1];a(String.prototype,t,E),a(s,h,2==e?function(t,e){return _.call(t,this,e)}:function(t){return _.call(t,this)})}d&&l(s[h],"sham",!0)}},df2a:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"penelitian"}},[t._m(0),n("div",{staticClass:"container py-4"},[t._m(1),n("div",{staticClass:"py-2 text-left"},[t.userLogin?n("button",{staticClass:"border rounded-md p-2 bg-green-500 text-white font-semibold",on:{click:function(e){return t.tableToExcel("table","Lorem Table")}}},[n("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:"file-excel"}}),t._v("Download ")],1):n("div")]),n("table",{ref:"table",staticClass:"table table-bordered py-4",attrs:{id:"myTable"}},[t._m(2)])])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hijau"},[n("div",{staticClass:"flex items-center px-4 py-4 container mx-auto"},[n("h1",{staticClass:"text-white font-bold text-2xl text-left"},[t._v(" Penelitian ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"text-2xl font-semibold"},[t._v(" Data Penelitian dashboard UP2M "),n("br"),t._v("Politeknik Negeri Jakarta")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{staticClass:"text-center"},[t._v("Judul")]),n("th",{staticClass:"text-center"},[t._v("Nama Ketua Penelitian")]),n("th",{staticClass:"text-center"},[t._v("Skim Penelitian")]),n("th",{staticClass:"text-center"},[t._v("Jurusan")]),n("th",{staticClass:"text-center"},[t._v("Tahun")])])])}],i=(n("ac1f"),n("5319"),n("bc3a")),c=n.n(i),l=n("1157"),o=n.n(l),s={name:"Penelitian",components:{},data:function(){return{userLogin:this.$cookies.get("uid"),uri:"data:application/vnd.ms-excel;base64,",template:'<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head>\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e</head><body><table>{table}</table></body></html>',base64:function(t){return window.btoa(unescape(encodeURIComponent(t)))},format:function(t,e){return t.replace(/{(\w+)}/g,(function(t,n){return e[n]}))}}},mounted:function(){this.getAuthors()},methods:{getAuthors:function(){c.a.get("https://admin-be.repo-up2m.com/api/list-penelitian?limit=10000").then((function(t){o()("#myTable").DataTable({lengthMenu:[[10,25,50,-1],[10,25,50,"All"]],data:t.data.data.data,columns:[{data:"judul",class:"py-4 text-left w-1/2 px-4"},{data:"nama_ketua_penelitian",class:" p-4"},{data:"skim_penelitian",class:" p-4"},{data:"jurusan",class:" p-4"},{data:"tahun",class:"w-40 p-4"}]})})).catch((function(t){return console.log(t.response)}))},tableToExcel:function(t,e){t.nodeType||(t=this.$refs.table);var n={worksheet:e||"Worksheet",table:t.innerHTML};window.location.href=this.uri+this.base64(this.format(this.template,n))}}},u=s,f=(n("d65c"),n("2877")),d=Object(f["a"])(u,a,r,!1,null,"68a2d91d",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-024e13c4.44f44f7a.js.map