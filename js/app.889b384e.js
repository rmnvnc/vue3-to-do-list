(function(t){function e(e){for(var i,a,o=e[0],u=e[1],l=e[2],s=0,b=[];s<o.length;s++)a=o[s],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&b.push(r[a][0]),r[a]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);d&&d(e);while(b.length)b.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],i=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(i=!1)}i&&(c.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},r={app:0},c=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=u;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"010c":function(t,e,n){},"067e":function(t,e,n){},"0f19":function(t,e,n){"use strict";n("a3e1")},"2ff7":function(t,e,n){"use strict";n("e017")},"36e4":function(t,e,n){"use strict";n("5f09")},4131:function(t,e,n){"use strict";n("010c")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23");function r(t,e){var n=Object(i["w"])("router-view");return Object(i["r"])(),Object(i["f"])(n)}n("9b9a");const c={};c.render=r;var a=c,o=n("6c02"),u=Object(i["h"])("h1",null,"To do list",-1),l=Object(i["h"])("ul",{class:"description"},[Object(i["h"])("li",null,"we can add another lists and its items"),Object(i["h"])("li",null,"we can edit headline of created list by doubleclicked it"),Object(i["h"])("li",null,"we can edit/delete content of list by right click on specific item")],-1),d={id:"overlay",key:"-1"};function s(t,e,n,r,c,a){var o=Object(i["w"])("ListCreateForm"),s=Object(i["w"])("TruloList");return Object(i["r"])(),Object(i["f"])("main",null,[u,l,Object(i["h"])(o,{onNewListComing:e[1]||(e[1]=function(t){return r.addNewList(t,r.lists)}),key:0}),Object(i["h"])(i["c"],{name:"list",tag:"div",class:"wrapper"},{default:Object(i["D"])((function(){return[r.overlay?(Object(i["r"])(),Object(i["f"])("div",d)):Object(i["g"])("",!0),(Object(i["r"])(!0),Object(i["f"])(i["a"],null,Object(i["v"])(r.lists,(function(t){return Object(i["r"])(),Object(i["f"])(s,{id:t.id,title:t.title,cards:t.cards,key:t.id,onEditListTitle:e[2]||(e[2]=function(t){return r.editListTitle(t,r.lists)})},null,8,["id","title","cards"])})),128))]})),_:1})])}var b=[{id:1,title:"Pondelok",cards:[{id:1,text:"Nákup"},{id:2,text:"Prezuť auto"},{id:3,text:"Vyvenčiť doga"}]},{id:2,title:"Víkend",cards:[{id:1,text:"Nejaky text",labels:["yellow","green","red","black"],tags:["#colors"]},{id:2,text:"Zabehat",labels:["blue","red"]},{id:3,text:"Dogovia",labels:["black","red"],tags:["#fess","#pekny","#haukovia"],image:{filename:"haukovia.jpg",alt:"Pekny haukovia"}}]},{id:3,title:"Filmy",cards:[{id:1,text:"James Bond"},{id:2,text:"Star Wars"},{id:3,text:"Mandalorian"},{id:4,text:"John Wick"}]}],f=n("2909"),p=(n("7db0"),n("d81d"),n("4de4"),function(t,e){if(t.text){var n=e.find((function(e){return e.id===t.listId})),i=n.cards.length?Math.max.apply(Math,Object(f["a"])(n.cards.map((function(t){return t.id})))):0;n.cards.push({id:i+1,text:t.text})}}),j=function(t,e){if(null!==t&&void 0!==t&&t.cardId&&null!==t&&void 0!==t&&t.listId){var n=e.find((function(e){return e.id===t.listId}));n.cards=n.cards.filter((function(e){return e.id!==t.cardId}))}},O=function(t,e){if(null!==t&&void 0!==t&&t.cardId&&null!==t&&void 0!==t&&t.listId&&null!==t&&void 0!==t&&t.newText){var n=e.find((function(e){return e.id===t.listId})),i=n.cards.find((function(e){return e.id==t.cardId}));i.text=t.newText}},v=function(t,e){if(t){var n=e.length?Math.max.apply(Math,Object(f["a"])(e.map((function(t){return t.id})))):0;e.push({id:n+1,title:t,cards:[]})}},m=function(t,e){if(null!==t&&void 0!==t&&t.id&&null!==t&&void 0!==t&&t.newTitle){var n=e.find((function(e){return e.id===t.id}));n.title=t.newTitle,console.log(e)}},h={class:"inner-wrapper"};function g(t,e,n,r,c,a){var o=Object(i["w"])("Card"),u=Object(i["w"])("CardCreateForm");return Object(i["r"])(),Object(i["f"])("section",null,[Object(i["h"])("div",h,[Object(i["h"])("header",null,[Object(i["h"])("h3",{ref:"titleElement",onClick:e[1]||(e[1]=function(){return r.startEditing&&r.startEditing.apply(r,arguments)}),onBlur:e[2]||(e[2]=function(){return r.saveTitle&&r.saveTitle.apply(r,arguments)}),onKeydown:e[3]||(e[3]=Object(i["F"])((function(){return r.saveTitle&&r.saveTitle.apply(r,arguments)}),["enter"])),contenteditable:t.isEditing,class:{"shadow-outline":t.isEditing}},Object(i["y"])(n.title),43,["contenteditable"])]),Object(i["h"])(i["c"],{name:"card",tag:"ul"},{default:Object(i["D"])((function(){return[(Object(i["r"])(!0),Object(i["f"])(i["a"],null,Object(i["v"])(n.cards,(function(t){return Object(i["r"])(),Object(i["f"])(o,{card:t,listId:n.id,key:t.id},null,8,["card","listId"])})),128))]})),_:1}),Object(i["h"])(u,{listId:n.id},null,8,["listId"])])])}var y=n("5530");n("a9e3");function w(t,e,n,r,c,a){var o=Object(i["w"])("CardLabels"),u=Object(i["w"])("CardImages"),l=Object(i["w"])("CardTags"),d=Object(i["w"])("CardPopUp");return Object(i["r"])(),Object(i["f"])("li",{class:[{"z-20 ":t.isPopped},"card"],onContextmenu:e[2]||(e[2]=Object(i["G"])((function(){return r.doPop&&r.doPop.apply(r,arguments)}),["prevent"]))},[Object(i["h"])(o,{labels:n.card.labels},null,8,["labels"]),Object(i["h"])(u,{image:n.card.image},null,8,["image"]),Object(i["h"])("div",null,[Object(i["h"])("p",{ref:"cardText",onKeydown:e[1]||(e[1]=Object(i["F"])((function(){return r.saveText&&r.saveText.apply(r,arguments)}),["enter"])),contenteditable:t.isEditing,class:{"shadow-outline":t.isEditing}},Object(i["y"])(n.card.text),43,["contenteditable"]),Object(i["h"])(l,{tags:n.card.tags},null,8,["tags"])]),Object(i["h"])(i["b"],{name:"pop"},{default:Object(i["D"])((function(){return[t.isPopped?(Object(i["r"])(),Object(i["f"])(d,{key:0,onClosePopup:r.undoPop,onStartEdit:r.startEditing,card:n.card,listId:n.listId},null,8,["onClosePopup","onStartEdit","card","listId"])):Object(i["g"])("",!0)]})),_:1})],34)}var x={key:0};function k(t,e,n,r,c,a){return n.tags?(Object(i["r"])(),Object(i["f"])("footer",x,[(Object(i["r"])(!0),Object(i["f"])(i["a"],null,Object(i["v"])(n.tags,(function(t,e){return Object(i["r"])(),Object(i["f"])("a",{href:"#",key:e},Object(i["y"])(t),1)})),128))])):Object(i["g"])("",!0)}var C={props:{tags:{type:Array}},setup:function(){return{}}};C.render=k;var I=C,T={key:0};function P(t,e,n,r,c,a){return n.labels?(Object(i["r"])(),Object(i["f"])("aside",T,[(Object(i["r"])(!0),Object(i["f"])(i["a"],null,Object(i["v"])(n.labels,(function(t,e){return Object(i["r"])(),Object(i["f"])("span",{key:e,class:"bg-".concat(t)},null,2)})),128))])):Object(i["g"])("",!0)}var E={props:{labels:{type:Array}},setup:function(){return{}}};E.render=P;var F=E,L={key:0};function B(t,e,n,r,c,a){return n.image?(Object(i["r"])(),Object(i["f"])("figure",L,[Object(i["h"])("img",{src:"./img/"+n.image.filename,alt:n.image.alt},null,8,["src","alt"])])):Object(i["g"])("",!0)}var S={props:{image:{type:Object}},setup:function(){return{}}};S.render=B;var V=S,_=Object(i["H"])("data-v-4fd56432"),M=_((function(t,e,n,r,c,a){return Object(i["r"])(),Object(i["f"])("ul",null,[Object(i["h"])("li",{onClick:e[1]||(e[1]=function(t){return r.emit("start-edit")})}," Edit text "),Object(i["h"])("li",{onClick:e[2]||(e[2]=function(){return r.deleteCard&&r.deleteCard.apply(r,arguments)})}," trash "),Object(i["h"])("li",{onClick:e[3]||(e[3]=function(t){return r.emit("close-popup")})}," X ")])})),N={props:{card:{type:Object},listId:{type:Number}},setup:function(t,e){var n=e.emit,i=function(){window.eventBus.emit("delete-card",{cardId:t.card.id,listId:t.listId}),window.eventBus.emit("toggle-overlay",!1)};return{emit:n,deleteCard:i}}};n("b90e");N.render=M,N.__scopeId="data-v-4fd56432";var A=N,z={components:{CardTags:I,CardLabels:F,CardImages:V,CardPopUp:A},props:{card:{type:Object},listId:{type:Number}},setup:function(t){var e=Object(i["u"])(null),n=Object(i["t"])({isPopped:!1,isEditing:!1}),r=function(){n.isPopped=!0,window.eventBus.emit("toggle-overlay",!0)},c=function(){n.isPopped=!1,window.eventBus.emit("toggle-overlay",!1)},a=function(){n.isEditing=!0,setTimeout((function(){return e.value.focus()}),0)},o=function(){n.isEditing=!1,window.eventBus.emit("edit-card-text",{cardId:t.card.id,listId:t.listId,newText:e.value.textContent}),c()};return Object(y["a"])(Object(y["a"])({},Object(i["z"])(n)),{},{doPop:r,undoPop:c,saveText:o,cardText:e,startEditing:a})}};n("4131");z.render=w;var D=z,J=Object(i["h"])("button",null,"Save",-1),U=Object(i["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 95.939 95.939",width:"20px"},[Object(i["h"])("path",{d:"M62.819 47.97l32.533-32.534a2 2 0 000-2.828L83.333.586a2.002 2.002 0 00-2.828 0L47.97 33.121 15.435.586c-.75-.75-2.078-.75-2.828 0L.587 12.608a2 2 0 000 2.828L33.121 47.97.587 80.504a2 2 0 000 2.828l12.02 12.021a2 2 0 002.828 0L47.97 62.818l32.535 32.535a2 2 0 002.828 0l12.02-12.021a2 2 0 000-2.828L62.819 47.97z"})],-1);function G(t,e,n,r,c,a){return Object(i["r"])(),Object(i["f"])("footer",null,[t.linkVisible?(Object(i["r"])(),Object(i["f"])("a",{key:0,onClick:e[1]||(e[1]=function(){return r.showForm&&r.showForm.apply(r,arguments)}),href:"#"}," Add card ")):Object(i["g"])("",!0),t.formVisible?(Object(i["r"])(),Object(i["f"])("form",{key:1,onSubmit:e[4]||(e[4]=Object(i["G"])((function(){return r.submitForm&&r.submitForm.apply(r,arguments)}),["prevent"])),action:"/"},[Object(i["E"])(Object(i["h"])("textarea",{"onUpdate:modelValue":e[2]||(e[2]=function(e){return t.text=e}),ref:"textAreaFocus"},"\r\n            ",512),[[i["B"],t.text]]),Object(i["h"])("div",null,[J,Object(i["h"])("a",{href:"#",onClick:e[3]||(e[3]=function(){return r.hideForm&&r.hideForm.apply(r,arguments)})},[U])])],32)):Object(i["g"])("",!0)])}var H={props:{listId:{type:Number}},setup:function(t){var e=Object(i["t"])({text:"",formVisible:!1,linkVisible:!0}),n=Object(i["u"])(null),r=function(){e.formVisible=!0,e.linkVisible=!1,Object(i["m"])((function(){n.value.focus()}))},c=function(){window.eventBus.emit("new-card-created",{listId:t.listId,text:e.text}),e.text="",n.value.focus()},a=function(){e.formVisible=!1,e.linkVisible=!0};return Object(y["a"])(Object(y["a"])({},Object(i["z"])(e)),{},{showForm:r,hideForm:a,textAreaFocus:n,submitForm:c})}};H.render=G;var K=H,W={components:{Card:D,CardCreateForm:K},props:{id:{type:Number},title:{type:String},cards:{type:Array}},setup:function(t,e){var n=e.emit,r=Object(i["u"])(null),c=Object(i["t"])({isEditing:!1}),a=function(){c.isEditing=!1,n("edit-list-title",{id:t.id,newTitle:r.value.textContent})},o=function(){c.isEditing=!0,setTimeout((function(){return r.value.focus()}),0)};return Object(y["a"])(Object(y["a"])({},Object(i["z"])(c)),{},{saveTitle:a,titleElement:r,startEditing:o})}};n("0f19");W.render=g;var X=W;function Z(t,e,n,r,c,a){return Object(i["r"])(),Object(i["f"])("form",{onSubmit:e[2]||(e[2]=Object(i["G"])((function(){return r.submitForm&&r.submitForm.apply(r,arguments)}),["prevent"]))},[Object(i["E"])(Object(i["h"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return r.title=t}),type:"text",placeholder:"Add another list"},null,512),[[i["B"],r.title]])],32)}var q={setup:function(t,e){var n=e.emit,r=Object(i["u"])(""),c=function(){n("new-list-coming",r.value),r.value=""};return{title:r,submitForm:c}}};n("2ff7");q.render=Z;var Q=q,R={components:{TruloList:X,ListCreateForm:Q},setup:function(){var t=Object(i["u"])(b),e=Object(i["u"])(!1);return Object(i["p"])((function(){window.eventBus.on("new-card-created",(function(e){p(e,t.value)})),window.eventBus.on("delete-card",(function(e){j(e,t.value)})),window.eventBus.on("edit-card-text",(function(e){O(e,t.value)})),window.eventBus.on("toggle-overlay",(function(t){e.value=t}))})),{lists:t,addNewList:v,editListTitle:m,overlay:e}}};n("36e4");R.render=s;var Y=R,$=[{path:"/",name:"Home",component:Y}],tt=Object(o["a"])({history:Object(o["b"])("/"),routes:$}),et=tt,nt=n("1344");window.eventBus=Object(nt["a"])(),Object(i["e"])(a).use(et).mount("#app")},"5f09":function(t,e,n){},"9b9a":function(t,e,n){"use strict";n("067e")},a3e1:function(t,e,n){},b3a6:function(t,e,n){},b90e:function(t,e,n){"use strict";n("b3a6")},e017:function(t,e,n){}});
//# sourceMappingURL=app.889b384e.js.map