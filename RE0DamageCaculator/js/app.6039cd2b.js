(function(i){function e(e){for(var n,s,c=e[0],o=e[1],h=e[2],u=0,d=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(i[n]=o[n]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,h||[]),t()}function t(){for(var i,e=0;e<r.length;e++){for(var t=r[e],n=!0,c=1;c<t.length;c++){var o=t[c];0!==a[o]&&(n=!1)}n&&(r.splice(e--,1),i=s(s.s=t[0]))}return i}var n={},a={app:0},r=[];function s(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=i,s.c=n,s.d=function(i,e,t){s.o(i,e)||Object.defineProperty(i,e,{enumerable:!0,get:t})},s.r=function(i){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},s.t=function(i,e){if(1&e&&(i=s(i)),8&e)return i;if(4&e&&"object"===typeof i&&i&&i.__esModule)return i;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:i}),2&e&&"string"!=typeof i)for(var n in i)s.d(t,n,function(e){return i[e]}.bind(null,n));return t},s.n=function(i){var e=i&&i.__esModule?function(){return i["default"]}:function(){return i};return s.d(e,"a",e),e},s.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)},s.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var h=0;h<c.length;h++)e(c[h]);var l=o;r.push([0,"chunk-vendors"]),t()})({0:function(i,e,t){i.exports=t("56d7")},"0074":function(i,e,t){},"034f":function(i,e,t){"use strict";var n=t("85ec"),a=t.n(n);a.a},"56d7":function(i,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),a=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",{attrs:{id:"app"}},[t("Main")],1)},r=[],s=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",[t("el-header",[t("h1",[i._v("简易RE0必杀技伤害计算器")])]),t("el-main",[t("el-row",[t("h3",[i._v("一些说明:")])]),t("el-row",[t("el-col",{attrs:{span:24}},[i._v("1."),t("span",{staticStyle:{color:"blue"}},[i._v("角色基础数据")]),i._v("其实就是除了心之器,魔法器以外的数据,包括微精灵,战斗中的buff等.懒得再加专门的模块了,统统算在这里吧,只要知道同类数据是加算就可以了.比如暴击伤害加30%的buff,你可以给"),t("span",{staticStyle:{color:"red"}},[i._v("暴击伤害")]),i._v("的值手动加上0.3,也可以把"),t("span",{staticStyle:{color:"red"}},[i._v("暴击伤害加成")]),i._v("的值设为0.3,结果是一样的.")]),t("el-col",{attrs:{span:24}},[i._v("2."),t("span",{staticStyle:{color:"red"}},[i._v("基础攻击力")]),i._v("的值为角色的黑字攻击力,这个不能随意更改,因为影响攻击力加成的基数")]),t("el-col",[i._v("3.修改心之器数据后一定要点"),t("span",{staticStyle:{color:"green"}},[i._v("保存")])])],1),t("br")],1),t("el-container",[t("el-header",[i._v("角色基础数据")]),t("el-main",[t("table",[i._l(i.characterData,(function(e,n){return t("tr",{key:n},[t("td",["攻击力"!=n?t("span",[i._v(i._s(n+":"))]):i._e(),"攻击力"==n?t("span",[i._v("额外攻击力加成")]):i._e()]),t("td",[t("el-input",{attrs:{type:"number",step:"0.0001"},nativeOn:{mousewheel:function(i){i.preventDefault()},DOMMouseScroll:function(i){i.preventDefault()}},model:{value:i.characterData[n],callback:function(e){i.$set(i.characterData,n,e)},expression:"characterData[k]"}})],1)])})),t("tr",[t("td",[i._v("最终伤害:")]),t("td",[t("span",{staticStyle:{color:"red","font-weight":"bold","font-size":"36px"}},[i._v(i._s(i.damage))])])])],2)]),t("el-header",[i._v("心之器")]),t("el-main",[t("el-row",{attrs:{gutter:10}},[t("el-col"),i._l(i.xinzhiqis,(function(i,e){return t("el-col",{key:e,attrs:{xs:24,sm:12,md:8,lg:8,xl:6}},[t("xinzhiqi",{attrs:{xinzhiqiData:i}})],1)})),t("el-col",{attrs:{span:24}},[t("xinzhiqi",{attrs:{xinzhiqiData:i.newXinzhiqiModel}})],1)],2)],1),t("el-main",[t("el-button",{attrs:{type:"danger"},on:{click:i.uncheckAll}},[i._v("全部取消勾选")])],1),t("el-header",[i._v("魔法器")]),t("el-main",[t("table",i._l(i.mofaqi,(function(e,n){return t("tr",{key:n},[t("td",[i._v(i._s(n+":"))]),t("td",[t("el-input",{attrs:{type:"number",step:"0.0001"},nativeOn:{mousewheel:function(i){i.preventDefault()},DOMMouseScroll:function(i){i.preventDefault()}},model:{value:i.mofaqi[n],callback:function(e){i.$set(i.mofaqi,n,e)},expression:"mofaqi[k]"}})],1)])})),0)])],1)],1)},c=[],o=(t("a434"),t("a9e3"),t("b680"),function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",{attrs:{id:"xinzhiqi"}},[t("br"),t("table",[t("tr",[t("td",[-1!=i.xinzhiqiData.id?t("el-checkbox",{attrs:{disabled:i.xinzhiqiData.disabled},on:{change:i.checkChanged},model:{value:i.xinzhiqiData.checked,callback:function(e){i.$set(i.xinzhiqiData,"checked",e)},expression:"xinzhiqiData.checked"}}):i._e()],1),-1!=i.xinzhiqiData.id?t("td",[t("el-button",{attrs:{type:"success",plain:""},on:{click:i.save}},[i._v("保存")]),0==i.saveSuccess?t("span",{staticStyle:{color:"red","font-size":"12px"}},[i._v("保存失败")]):i._e()],1):i._e(),-1==i.xinzhiqiData.id?t("td",[t("el-button",{attrs:{type:"primary"},on:{click:i.save}},[i._v("新建")])],1):i._e()]),t("tr",[t("td",[i._v("名称")]),t("td",[t("el-input",{ref:"name",staticStyle:{"font-weight":"bold","font-size":"14px"},model:{value:i.xinzhiqiData.name,callback:function(e){i.$set(i.xinzhiqiData,"name",e)},expression:"xinzhiqiData.name"}})],1)]),t("tr",[t("td",[i._v("攻击力:")]),t("td",[t("el-input",{ref:"attack",attrs:{type:"number",step:"0.0001"},nativeOn:{mousewheel:function(i){i.preventDefault()},DOMMouseScroll:function(i){i.preventDefault()}},model:{value:i.xinzhiqiData.attack,callback:function(e){i.$set(i.xinzhiqiData,"attack",e)},expression:"xinzhiqiData.attack"}}),0==i.attackValid?t("div",[t("span",{staticStyle:{color:"red","font-size":"12px"}},[i._v(i._s(i.errorMsg))])]):i._e()],1)]),i._l(i.xinzhiqiData.properties,(function(e,n,a){return t("tr",{key:n},[t("td",[t("select",{ref:"select"+a,refInFor:!0},i._l(i.x_properties,(function(e,a){return t("option",{key:a,domProps:{selected:n==a}},[i._v(i._s(a))])})),0)]),t("td",[t("el-input",{ref:"input"+a,refInFor:!0,attrs:{type:"number",step:"0.0001"},nativeOn:{mousewheel:function(i){i.preventDefault()},DOMMouseScroll:function(i){i.preventDefault()}},model:{value:i.xinzhiqiData.properties[n],callback:function(e){i.$set(i.xinzhiqiData.properties,n,e)},expression:"xinzhiqiData.properties[k]"}}),1==i.inputErrors[a]?t("div",[t("span",{staticStyle:{color:"red","font-size":"12px"}},[i._v(i._s(i.errorMsg))])]):i._e()],1)])})),t("tr"),t("tr",[-1!=i.xinzhiqiData.id?t("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""},on:{click:i.remove}}):i._e()],1)],2)])}),h=[],l=(t("c975"),t("b0c0"),t("b64b"),t("d3b7"),t("25f0"),{name:"xinzhiqi",computed:{propertiesNum:function(){return Object.keys(this.xinzhiqiData.properties).length}},methods:{save:function(){var i={},e={};i.attack=this.$refs.attack.value;for(var t=0;t<this.propertiesNum;t++){var n=this.$refs["select"+t.toString()][0].value,a=this.$refs["input"+t][0].value;e[n]=a}if(-1!=this.xinzhiqiData.id)this.xinzhiqiData.name=this.$refs.name.value,this.xinzhiqiData.attack=this.$refs.attack.value,this.xinzhiqiData.properties=e;else{var r=JSON.parse(JSON.stringify(this.newXinzhiqiModel));r.name=this.$refs.name.value,r.id=this.currentID+1,r.attack=this.$refs.attack.value,r.properties=e,3==this.checkedXinzhiqiIDs.length&&(r.disabled=!0),this.xinzhiqis.push(r),this.currentID+=1}},remove:function(){for(var i in this.xinzhiqis)this.xinzhiqis[i].id==this.xinzhiqiData.id&&this.xinzhiqis.splice(i,1)},checkChanged:function(){var i;if(0==this.xinzhiqiData.disabled)if(1==this.xinzhiqiData.checked){if(this.checkedXinzhiqiIDs.push(this.xinzhiqiData.id),3==this.checkedXinzhiqiIDs.length)for(i in this.xinzhiqis)0==this.xinzhiqis[i].checked&&(this.xinzhiqis[i].disabled=!0)}else for(i in this.checkedXinzhiqiIDs.splice(this.checkedXinzhiqiIDs.indexOf(this.xinzhiqiData.id),1),this.xinzhiqis)this.xinzhiqis[i].disabled=!1}},data:function(){return{x_properties:{"攻击力_百分比":0,"暴击几率":0,"连击几率":0,"暴击伤害":0,"连击伤害":0,"伤害加成":0,"防御忽视":0,"必杀技伤害提升":0,"--None--":0},saveSuccess:!0,attackValid:!0,inputErrors:[],errorMsg:"值必须为数字",xinzhiqis:this.$root.$data.xinzhiqis,currentID:this.$root.$data.currentID,checkedXinzhiqiIDs:this.$root.$data.checkedXinzhiqiIDs,percentageDatas:this.$root.$data.percentageDatas,newXinzhiqiModel:this.$root.$data.newXinzhiqiModel}},props:{xinzhiqiData:Object}}),u=l,d=(t("abcb"),t("2877")),p=Object(d["a"])(u,o,h,!1,null,null,null),f=p.exports,v={name:"Main",components:{xinzhiqi:f},computed:{damage:function(){var i=JSON.parse(JSON.stringify(this.characterData));for(var e in i)i[e]=Number(i[e]);if(0!=this.checkedXinzhiqiIDs.length)for(var t in this.checkedXinzhiqiIDs)for(var n in this.xinzhiqis)this.xinzhiqis[n].id==this.checkedXinzhiqiIDs[t]&&(i["攻击力"]+=Number(this.xinzhiqis[n].attack));for(e in i){if(0!=this.checkedXinzhiqiIDs.length)for(t in this.checkedXinzhiqiIDs)for(n in this.xinzhiqis)this.xinzhiqis[n].id==this.checkedXinzhiqiIDs[t]&&e in this.xinzhiqis[n].properties&&(i[e]+=Number(this.xinzhiqis[n].properties[e]));e in this.mofaqi&&(i[e]+=Number(this.mofaqi[e]))}var a=(i["基础攻击力"]*(1+i["攻击力_百分比"])+i["攻击力"])*(1+i["伤害加成"])*Math.min(i["怒气"]+1e3,2e3)/2e3*(1+i["必杀技伤害提升"])*i["连携"]*i["必杀技倍率"]*(1+Math.min(i["暴击几率"],1)*(i["暴击伤害"]+i["暴击伤害加成"]-1)+10*Math.min(i["连击几率"],1)*(i["连击伤害"]+i["连击伤害加成"]))*375/(375+i["敌人防御"]*Math.max(0,1-i["防御忽视"]));return a.toFixed(0)},xinzhiqiNums:function(){return this.xinzhiqis.length}},methods:{uncheckAll:function(){for(var i in this.xinzhiqis)this.xinzhiqis[i].checked=!1,this.xinzhiqis[i].disabled=!1,this.checkedXinzhiqiIDs.splice(0,this.checkedXinzhiqiIDs.length)}},data:function(){return{xinzhiqis:this.$root.$data.xinzhiqis,characterData:this.$root.$data.characterData,mofaqi:this.$root.$data.mofaqi,checkedXinzhiqiIDs:this.$root.$data.checkedXinzhiqiIDs,newXinzhiqiModel:this.$root.$data.newXinzhiqiModel}}},q=v,z=(t("d969"),Object(d["a"])(q,s,c,!1,null,null,null)),x=z.exports,m={name:"App",components:{Main:x}},D=m,b=(t("034f"),Object(d["a"])(D,a,r,!1,null,null,null)),_=b.exports,k=t("b705"),y=t.n(k);t("3880");n["default"].use(y.a),n["default"].config.productionTip=!1;var g={currentID:0,damage:0,characterData:{"基础攻击力":1582,"暴击几率":.2,"暴击伤害":1.5,"连击几率":0,"连击伤害":.15,"怒气":2e3,"必杀技伤害提升":0,"必杀技倍率":21.25,"敌人防御":375,"防御忽视":.62,"暴击伤害加成":0,"连击伤害加成":0,"伤害加成":0,"连携":1.5,"攻击力":142,"攻击力_百分比":.4},xinzhiqis:[{name:"从天而降的美好祝福",id:0,attack:366,checked:!1,disabled:!1,properties:{"攻击力_百分比":.12,"暴击几率":.18,"防御忽视":.15}}],checkedXinzhiqiIDs:[],mofaqi:{"攻击力":0,"暴击几率":0,"暴击伤害":0,"连击几率":0,"连击伤害":0,"伤害加成":0},newXinzhiqiModel:{name:"新建心之器",id:-1,attack:0,checked:!1,disabled:!1,properties:{"基础攻击":0,"暴击几率":0,"连击几率":0}}};new n["default"]({data:g,render:function(i){return i(_)}}).$mount("#app")},"85ec":function(i,e,t){},abcb:function(i,e,t){"use strict";var n=t("c4f3"),a=t.n(n);a.a},c4f3:function(i,e,t){},d969:function(i,e,t){"use strict";var n=t("0074"),a=t.n(n);a.a}});
//# sourceMappingURL=app.6039cd2b.js.map