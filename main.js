(()=>{var t={720:t=>{t.exports={0:"35",1:"36",2:"37",3:"38",4:"39",5:"40",6:"41",7:"42",8:"43",9:"44",A:"10",B:"11",C:"12",D:"7",E:"8",F:"9",G:"15",H:"98",I:"4",J:"6",K:"13",L:"14",M:"16",N:"17",O:"18",P:"79",Q:"80",R:"81",S:"83",T:"96",U:"64",V:"84",W:"85",X:"86",Y:"87",Z:"88",a:"89",b:"90",c:"91",d:"92",e:"93",f:"94",g:"95",h:"97",i:"99",j:"5",k:"19",l:"20",m:"21",n:"22",o:"23",p:"24",q:"25",r:"26",s:"27",t:"28",u:"29",v:"30",w:"31",x:"32",y:"33",z:"34",AB:"45",BB:"46",CB:"47",DB:"48",EB:"49",FB:"50",GB:"51",HB:"52",IB:"53",JB:"54",KB:"55",LB:"56",MB:"57",NB:"58",OB:"60",PB:"62",QB:"63",RB:"65",SB:"66",TB:"67",UB:"68",VB:"69",WB:"70",XB:"71",YB:"72",ZB:"73",aB:"74",bB:"75",cB:"76",dB:"77",eB:"78",fB:"11.1",gB:"12.1",hB:"3",iB:"59",jB:"61",kB:"82",lB:"100",mB:"3.2",nB:"10.1",oB:"15.2-15.3",pB:"15.4",qB:"11.5",rB:"4.2-4.3",sB:"5.5",tB:"2",uB:"3.5",vB:"3.6",wB:"101",xB:"102",yB:"3.1",zB:"5.1","0B":"6.1","1B":"7.1","2B":"9.1","3B":"13.1","4B":"14.1","5B":"15.1","6B":"TP","7B":"9.5-9.6","8B":"10.0-10.1","9B":"10.5",AC:"10.6",BC:"11.6",CC:"4.0-4.1",DC:"5.0-5.1",EC:"6.0-6.1",FC:"7.0-7.1",GC:"8.1-8.4",HC:"9.0-9.2",IC:"9.3",JC:"10.0-10.2",KC:"10.3",LC:"11.0-11.2",MC:"11.3-11.4",NC:"12.0-12.1",OC:"12.2-12.5",PC:"13.0-13.1",QC:"13.2",RC:"13.3",SC:"13.4-13.7",TC:"14.0-14.4",UC:"14.5-14.8",VC:"15.0-15.1",WC:"all",XC:"2.1",YC:"2.2",ZC:"2.3",aC:"4.1",bC:"4.4",cC:"4.4.3-4.4.4",dC:"12.12",eC:"5.0-5.4",fC:"6.2-6.4",gC:"7.2-7.4",hC:"8.2",iC:"9.2",jC:"11.1-11.2",kC:"12.0",lC:"13.0",mC:"14.0",nC:"15.0",oC:"16.0",pC:"10.4",qC:"7.12",rC:"2.5"}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var e=function(){function e(t,n,o,r,i,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._imageLink=t.link,this._numberOfLikes=t.likes.length,this._cardTemplate=n,this._isThisMyCard=t.owner._id===a,this._handleClickOnImage=o,this._openDeleteQuestion=r,this.cardId=t._id,this._handleClickOnLike=i,this._isUserLikeCard=this._findIsUserLikeIt(t.likes,a)}var n,o;return n=e,(o=[{key:"_findIsUserLikeIt",value:function(t,e){for(var n=0;n<t.length;n++)if(t[n]._id===e)return!0;return!1}},{key:"_setEventListeners",value:function(){var t=this;this._image.addEventListener("click",(function(){t._handleClickOnImage(t._name,t._imageLink)})),this._likeButton.addEventListener("click",(function(){t._handleClickOnLike(t._isUserLikeCard)})),this._deleteButton&&this._deleteButton.addEventListener("click",(function(){t._handleClickOnDelete()}))}},{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplate).content.querySelector(".card").cloneNode(!0)}},{key:"toggleLikeButton",value:function(){this._likeButton.classList.toggle("card__like_black")}},{key:"_handleClickOnDelete",value:function(){this._openDeleteQuestion(this)}},{key:"updateLikeNumber",value:function(t){this._numberOfLikes=t,this._likeNumberCaption.textContent=t}},{key:"removeSelf",value:function(){this._deleteButton.closest(".card").remove()}},{key:"initiateCard",value:function(){return this._card=this._getTemplate(),this._image=this._card.querySelector(".card__image"),this._likeButton=this._card.querySelector(".card__like"),this._isUserLikeCard&&this._likeButton.classList.add("card__like_black"),this._likeNumberCaption=this._card.querySelector(".card__like-number"),this._isThisMyCard?this._deleteButton=this._card.querySelector(".card__delete-button"):this._card.querySelector(".card__delete-button").remove(),this._card.querySelector(".card__name").textContent=this._name,this._image.alt=this._name,this._image.src=this._imageLink,this._likeNumberCaption.textContent=this._numberOfLikes,this._setEventListeners(),this._card}}])&&t(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),e}();function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var r=function(){function t(e,n){var o=e.inputSelector,r=e.submitButtonSelector,i=e.inputErrorClass;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._form=n,this._inputList=Array.from(this._form.querySelectorAll(o)),this._submitButton=this._form.querySelector(r),this._inputErrorClass=i}var e,n;return e=t,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetValidation",value:function(){var t=this;this._toggleSubmitButtonStatus(),this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"_setEventListeners",value:function(){var t=this;this._toggleSubmitButtonStatus(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleSubmitButtonStatus()}))}))}},{key:"_toggleSubmitButtonStatus",value:function(){this._submitButton.disabled=this._hasInvalidInput()}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_hideInputError",value:function(t){var e=this._form.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.textContent=""}},{key:"_showInputError",value:function(t){var e=this._form.querySelector(".".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),e.textContent=t.validationMessage}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var a=function(){function t(e,n){var o=e.items,r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._itemList=o,this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderElement",value:function(){var t=this;this._itemList.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handlerEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("overlay_active"),document.addEventListener("keydown",this._handlerEscClose)}},{key:"close",value:function(){this._popup.classList.remove("overlay_active"),document.removeEventListener("keydown",this._handlerEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.code&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){e.target.classList.contains("close-button")&&t.close(),e.target.classList.contains("overlay")&&t.close()}))}}])&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function l(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=p(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},f.apply(this,arguments)}function p(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=y(t)););return t}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}function d(t,e){if(e&&("object"===s(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}var _=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=y(o);if(r){var n=y(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return d(this,t)});function a(t){var e,n=t.popupSelector,o=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,n))._handleFormSubmit=o,e._popupForm=e._popup.querySelector(".form"),e._inputList=Array.from(e._popupForm.querySelectorAll(".form__input")),e._submitButton=e._popup.querySelector(".form__submit-button"),e}return e=a,(n=[{key:"getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.name]=e.value})),t}},{key:"setInputValues",value:function(t){var e=this,n=function(n){e._inputList.forEach((function(e){e.name===n&&(e.value=t[n])}))};for(var o in t)n(o)}},{key:"setEventListeners",value:function(){var t=this;f(y(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(e){e.preventDefault(),t._submitButton.textContent="Сохранение...",t._handleFormSubmit()}))}},{key:"close",value:function(){f(y(a.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"open",value:function(){this._submitButton.textContent="Сохранение",f(y(a.prototype),"open",this).call(this)}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(c);function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function m(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=k(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},b.apply(this,arguments)}function k(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=B(t)););return t}function g(t,e){return g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},g(t,e)}function C(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=B(o);if(r){var n=B(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return C(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._name=e._popup.querySelector(".image-popup__caption"),e._image=e._popup.querySelector(".image-popup__image"),e}return e=a,(n=[{key:"open",value:function(t,e){this._name.textContent=t,this._image.alt=t,this._image.src=e,b(B(a.prototype),"open",this).call(this)}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(c);function S(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var O=function(){function t(e,n,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(e),this._profileProfession=document.querySelector(n),this._profileAvatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{profileName:this._profileName.textContent,profileProfession:this._profileProfession.textContent,profileId:this._profileId}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about,o=t.avatar,r=t._id;this._profileName.textContent=e,this._profileProfession.textContent=n,this._profileId=r,this._profileAvatar.src=o}},{key:"updateAvatar",value:function(t){this._profileAvatar.src=t}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function j(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=P(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},L.apply(this,arguments)}function P(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=q(t)););return t}function I(t,e){return I=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},I(t,e)}function T(t,e){if(e&&("object"===E(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function q(t){return q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},q(t)}var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&I(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=q(o);if(r){var n=q(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return T(this,t)});function a(t){var e,n=t.popupSelector,o=t.handleSubmitButton;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,n))._handleSubmitButton=o,e._submitButton=e._popup.querySelector(".form__submit-button"),e}return e=a,(n=[{key:"setEventListeners",value:function(){var t=this;L(q(a.prototype),"setEventListeners",this).call(this),this._submitButton.addEventListener("click",(function(e){e.preventDefault(),t._handleSubmitButton(),t.close()}))}},{key:"open",value:function(t){this.card=t,L(q(a.prototype),"open",this).call(this)}}])&&j(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(c);function x(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}n(720);var N,A=function(){function t(e){var n=e.url,o=e.groupId,r=e.token;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=n,this._groupId=o,this._token=r}var e,n;return e=t,(n=[{key:"loadUserInfo",value:function(){return fetch("https://nomoreparties.co/v1/".concat(this._groupId,"/users/me"),{headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).then((function(t){return t})).catch((function(t){console.log(t)}))}},{key:"editProfile",value:function(t){var e=t.profileName,n=t.profileProfession;return console.log(e+"  "+n),fetch("https://mesto.nomoreparties.co/v1/".concat(this._groupId,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:n})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.log(t)}))}},{key:"editAvatar",value:function(t){return fetch("https://mesto.nomoreparties.co/v1/".concat(this._groupId,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.log(t)}))}},{key:"loadCards",value:function(){return fetch("".concat(this._url).concat(this._groupId,"/cards"),{headers:{authorization:this._token}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).then((function(t){return t})).catch((function(t){console.log(t)}))}},{key:"addNewCard",value:function(t){var e=t.name,n=t.imageLink;return fetch("".concat(this._url).concat(this._groupId,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,link:n})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).then((function(t){return t})).catch((function(t){console.log(t)}))}},{key:"deleteCardOnServer",value:function(t){return fetch("".concat(this._url).concat(this._groupId,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.log(t)}))}},{key:"addLike",value:function(t){return fetch("".concat(this._url).concat(this._groupId,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.log(t)}))}},{key:"removeLike",value:function(t){return fetch("".concat(this._url).concat(this._groupId,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.log(t)}))}}])&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),U={},V=document.querySelector(".profile__edit-button"),D=document.querySelector(".profile__add-button"),F=document.querySelector(".profile__avatar-edit-button"),z=new O(".profile__name",".profile__profession",".profile__avatar"),J=new A({url:"https://mesto.nomoreparties.co/v1/",groupId:"cohort-38",token:"73bbc2c4-cda9-4c41-a59c-d7d4ba072805"}),M=new a({items:[],renderer:function(t){M.addItem(t)}},".cards"),H=new _({popupSelector:".overlay_card-add-popup",handleFormSubmit:function(){J.addNewCard(H.getInputValues()).then((function(t){M.addItem(X(t)),H.close()}))}}),Q=new R({popupSelector:".overlay_delete-question-popup",handleSubmitButton:function(){J.deleteCardOnServer(Q.card.cardId).then((function(){Q.card.removeSelf()}))}}),G=new _({popupSelector:".overlay_card-edit-popup",handleFormSubmit:function(){console.log(G.getInputValues()),J.editProfile(G.getInputValues()).then((function(t){z.setUserInfo(t)})),G.close()}}),K=new w(".overlay_image-popup"),W=new _({popupSelector:".overlay_avatar-popup",handleFormSubmit:function(){J.editAvatar(W.getInputValues().avatarLink).then((function(t){z.updateAvatar(t.avatar),W.close()}))}});function X(t){var n=new e(t,".card-template",(function(t,e){K.open(t,e)}),(function(){Q.open(n)}),(function(t){t?J.removeLike(n.cardId).then((function(t){n.updateLikeNumber(t.likes.length),n.toggleLikeButton()})):J.addLike(n.cardId).then((function(t){n.updateLikeNumber(t.likes.length),n.toggleLikeButton()}))}),z.getUserInfo().profileId);return n.initiateCard()}D.addEventListener("click",(function(){U["card-add-form"].resetValidation(),H.open()})),V.addEventListener("click",(function(){G.setInputValues(z.getUserInfo()),U["profile-edit-form"].resetValidation(),G.open()})),F.addEventListener("click",(function(){U["avatar-form"].resetValidation(),W.open()})),J.loadUserInfo().then((function(t){z.setUserInfo(t)})),Promise.allSettled([J.loadUserInfo()]).then((function(){J.loadCards().then((function(t){t.forEach((function(t){M.addItem(X(t))})),M.renderElement()}))})),N={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit-button",inputErrorClass:".form__input_status_error"},Array.from(document.querySelectorAll(".form")).forEach((function(t){var e=new r(N,t),n=t.getAttribute("name");U[n]=e,e.enableValidation()})),Q.setEventListeners(),H.setEventListeners(),G.setEventListeners(),K.setEventListeners(),W.setEventListeners()})()})();