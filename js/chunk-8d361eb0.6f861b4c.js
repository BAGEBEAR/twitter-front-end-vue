(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8d361eb0"],{"17ee":function(t,e,n){"use strict";n("cfee")},7696:function(t,e,n){"use strict";n("b0c0");var c=n("2fa3");e["a"]={signIn:function(t){var e=t.account,n=t.password;return c["a"].post("/users/signin",{account:e,password:n})},signUp:function(t){var e=t.name,n=t.account,r=t.email,a=t.password,o=t.checkPassword;return c["a"].post("/users",{name:e,account:n,email:r,password:a,checkPassword:o})}}},9787:function(t,e,n){"use strict";n("b0c0");var c=n("7a23"),r=function(t){return Object(c["w"])("data-v-6f0dd978"),t=t(),Object(c["u"])(),t},a=r((function(){return Object(c["h"])("label",{class:"form__label",for:"account"},"帳號",-1)})),o={class:"account-form__input-container form__input-container"},s={class:"form__hint"},u={key:0,class:"form__error-message"},i=r((function(){return Object(c["h"])("label",{class:"form__label",for:"name"},"名稱",-1)})),m={class:"account-form__input-container form__input-container"},l={class:"form__hint"},b={key:0,class:"form__error-message"},f=r((function(){return Object(c["h"])("label",{class:"form__label",for:"email"},"email",-1)})),p={class:"account-form__input-container form__input-container"},d=r((function(){return Object(c["h"])("label",{class:"form__label",for:"password"},"密碼",-1)})),_={class:"account-form__input-container form__input-container"},h=r((function(){return Object(c["h"])("label",{class:"form__label",for:"checkPassword"},"密碼確認",-1)})),j={class:"account-form__input-container form__input-container"},O={class:"form__hint"},w={key:0,class:"form__error-message"},g={key:0},k=r((function(){return Object(c["h"])("button",{type:"submit",class:"account-form__btn btn btn--primary"}," 註冊 ",-1)})),v={class:"account-form__btn--small btn--small"},x=Object(c["i"])("取消"),U={key:1,class:"account-form__btn-wrapper"},P=r((function(){return Object(c["h"])("button",{type:"submit",class:"account-form__btn--setting btn btn--primary"}," 儲存 ",-1)})),y=[P];function A(t,e,n,r,P,A){var S=Object(c["A"])("router-link");return Object(c["t"])(),Object(c["g"])("form",{onSubmit:e[9]||(e[9]=Object(c["L"])((function(){return A.handleSubmit&&A.handleSubmit.apply(A,arguments)}),["stop","prevent"])),class:Object(c["p"])(["account-form__form",[{"account-form__form--setting":"SettingAccount"==t.$route.name}]])},[Object(c["h"])("div",{class:Object(c["p"])(["account-form__input-box form__input-box",[{"account-form__input-box--setting":"SettingAccount"==t.$route.name}]])},[a,Object(c["h"])("div",o,[Object(c["J"])(Object(c["h"])("input",{id:"account","onUpdate:modelValue":e[0]||(e[0]=function(t){return P.account=t}),name:"account",type:"text",class:"account-form__input form__input",required:"",onFocus:e[1]||(e[1]=function(t){return P.focus="account"}),onBlur:e[2]||(e[2]=function(t){return P.focus=null})},null,544),[[c["F"],P.account]])]),Object(c["h"])("div",s,[A.accountLength>50?(Object(c["t"])(),Object(c["g"])("p",u," 字數超出上限！ ")):Object(c["f"])("",!0),Object(c["J"])(Object(c["h"])("p",{class:"form__counter"},Object(c["D"])(A.accountLength)+"/50 ",513),[[c["G"],"account"===P.focus]])])],2),Object(c["h"])("div",{class:Object(c["p"])(["account-form__input-box form__input-box",[{"account-form__input-box--setting":"SettingAccount"==t.$route.name}]])},[i,Object(c["h"])("div",m,[Object(c["J"])(Object(c["h"])("input",{id:"name","onUpdate:modelValue":e[3]||(e[3]=function(t){return P.name=t}),name:"name",type:"text",class:"account-form__input form__input",required:"",onFocus:e[4]||(e[4]=function(t){return P.focus="name"}),onBlur:e[5]||(e[5]=function(t){return P.focus=null})},null,544),[[c["F"],P.name]])]),Object(c["h"])("div",l,[A.nameLength>50?(Object(c["t"])(),Object(c["g"])("p",b,"字數超出上限！")):Object(c["f"])("",!0),Object(c["J"])(Object(c["h"])("p",{class:"form__counter"},Object(c["D"])(A.nameLength)+"/50 ",513),[[c["G"],"name"===P.focus]])])],2),Object(c["h"])("div",{class:Object(c["p"])(["account-form__input-box form__input-box",[{"account-form__input-box--setting":"SettingAccount"==t.$route.name}]])},[f,Object(c["h"])("div",p,[Object(c["J"])(Object(c["h"])("input",{id:"email","onUpdate:modelValue":e[6]||(e[6]=function(t){return P.email=t}),name:"email",type:"email",class:"account-form__input form__input",required:""},null,512),[[c["F"],P.email]])])],2),Object(c["h"])("div",{class:Object(c["p"])(["account-form__input-box form__input-box",[{"account-form__input-box--setting":"SettingAccount"==t.$route.name}]])},[d,Object(c["h"])("div",_,[Object(c["J"])(Object(c["h"])("input",{id:"password","onUpdate:modelValue":e[7]||(e[7]=function(t){return P.password=t}),name:"password",type:"password",class:"account-form__input form__input",required:"",autocomplete:""},null,512),[[c["F"],P.password]])])],2),Object(c["h"])("div",{class:Object(c["p"])(["account-form__input-box form__input-box",[{"account-form__input-box--setting":"SettingAccount"==t.$route.name}]])},[h,Object(c["h"])("div",j,[Object(c["J"])(Object(c["h"])("input",{id:"checkPassword","onUpdate:modelValue":e[8]||(e[8]=function(t){return P.checkPassword=t}),name:"checkPassword",type:"password",class:"account-form__input form__input",required:"",autocomplete:""},null,512),[[c["F"],P.checkPassword]])]),Object(c["h"])("div",O,[P.checkPassword&&P.password!==P.checkPassword?(Object(c["t"])(),Object(c["g"])("p",w," 兩組密碼不相符 ")):Object(c["f"])("",!0)])],2),"Signup"===this.$route.name?(Object(c["t"])(),Object(c["g"])("div",g,[k,Object(c["h"])("div",v,[Object(c["j"])(S,{to:"/login",class:"btn--small__text"},{default:Object(c["I"])((function(){return[x]})),_:1})])])):Object(c["f"])("",!0),"SettingAccount"===this.$route.name?(Object(c["t"])(),Object(c["g"])("div",U,y)):Object(c["f"])("",!0)],34)}var S=n("1da1"),$=(n("96cf"),n("7696")),E=n("4cce"),F={name:"AccountForm",props:{initialUser:{type:Object,default:function(){return{account:null,name:"",email:"",password:"",checkPassword:""}}}},data:function(){return{account:"",name:"",email:"",password:"",checkPassword:"",isProcessing:!1,adminToggled:!1,focus:null}},computed:{accountLength:function(){return this.account.length},nameLength:function(){return this.name.length}},watch:{initialUser:function(t){this.account=t.account,this.name=t.name,this.email=t.email}},methods:{handleSubmit:function(){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function e(){var n,c,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.account){e.next=3;break}throw new Error("請輸入帳號");case 3:if(!(t.account.length>50)){e.next=5;break}throw new Error("帳號長度上限50字");case 5:if(t.name){e.next=7;break}throw new Error("請輸入名稱");case 7:if(!(t.name.length>50)){e.next=9;break}throw new Error("名稱長度上限50字");case 9:if(t.email){e.next=11;break}throw new Error("請輸入email");case 11:if(t.password){e.next=13;break}throw new Error("請輸入密碼");case 13:if(t.checkPassword){e.next=15;break}throw new Error("請輸入密碼確認");case 15:if(t.password===t.checkPassword){e.next=17;break}throw new Error("兩次輸入密碼不同，請重新確認");case 17:if(t.isProcessing=!0,"Signup"!==t.$route.name){e.next=28;break}return e.next=21,$["a"].signUp({id:t.initialUser.id,name:t.name,account:t.account,email:t.email,password:t.password,checkPassword:t.checkPassword});case 21:if(n=e.sent,c=n.data,"success"===c.status){e.next=25;break}throw new Error(c.message);case 25:t.$router.push({name:"Login"}),e.next=36;break;case 28:return e.next=30,E["a"].account.update({id:t.initialUser.id,name:t.name,account:t.account,email:t.email,password:t.password,checkPassword:t.checkPassword});case 30:if(r=e.sent,a=r.data,"success"===a.status){e.next=34;break}throw new Error(a.message);case 34:t.$store.commit("noticeInfo/toggleNotice",{type:"success",message:"成功編輯帳號資料"}),t.$router.push({name:"UserInfo",params:{userId:t.initialUser.id}});case 36:e.next=42;break;case 38:e.prev=38,e.t0=e["catch"](0),t.$store.commit("noticeInfo/toggleNotice",{type:"error",message:e.t0.message}),t.isProcessing=!1;case 42:case"end":return e.stop()}}),e,null,[[0,38]])})))()}}},J=(n("17ee"),n("d959")),L=n.n(J);const I=L()(F,[["render",A],["__scopeId","data-v-6f0dd978"]]);e["a"]=I},ce99:function(t,e,n){"use strict";n.r(e);var c=n("7a23");function r(t,e,n,r,a,o){var s=Object(c["A"])("AppBar"),u=Object(c["A"])("AccountForm");return Object(c["t"])(),Object(c["g"])(c["a"],null,[Object(c["j"])(s,{status:"帳戶設定"}),Object(c["j"])(u,{initialUser:a.currentUser},null,8,["initialUser"])],64)}var a=n("5530"),o=n("1da1"),s=(n("96cf"),n("b0c0"),n("dd38")),u=n("9787"),i=n("4cce"),m={name:"UserSetting",components:{AccountForm:u["a"],AppBar:s["a"]},data:function(){return{currentUser:{id:-1,account:"",email:"",password:"",name:"",introduction:"",avatar:"",cover:"",role:""}}},mounted:function(){this.fetchUser()},methods:{fetchUser:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,c,r,o,s,u,m;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i["a"].getCurrentUser();case 3:n=e.sent,c=n.data,r=c.user,o=r.id,s=r.account,u=r.name,m=r.email,t.currentUser=Object(a["a"])(Object(a["a"])({},t.currentUser),{},{id:o,account:s,name:u,email:m}),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},l=n("d959"),b=n.n(l);const f=b()(m,[["render",r]]);e["default"]=f},cfee:function(t,e,n){}}]);
//# sourceMappingURL=chunk-8d361eb0.6f861b4c.js.map