(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=(n(14),n(1)),l=n(2),s=n(6),u=n(5),h=n(7),m=(n(15),function(){function t(){Object(c.a)(this,t)}return Object(l.a)(t,null,[{key:"convertor",value:function(t){var e=this.dictionary[t];if(!e){if(/[^\u3046\u307b\u3063\u30a6\u30db\u30c3\u30b4\u30ea\u30e9\u3054\u308a\u3089]/.test(t))return{text:"\u304a\u307e\u3048\u672c\u5f53\u306b\u30b4\u30ea\u30e9\u304b\uff1f\u30b4\u30ea\u30e9\u8a9e\u558b\u308c\u3088",g:!0};e=this.randomDict[Math.floor(Math.random()*this.randomDict.length)]}return{text:e}}}]),t}());m.dictionary={"\u3046":"\u3093\uff1f","\u3046\u307b":"\u304a\u306f\u3088\u3046","\u30a6\u30db":"\u3084\u3042","\u3046\u3063\u307b":"\u3084\u3063\u307b\u30fc","\u30a6\u30c3\u30db":"\u5143\u6c17\uff1f","\u30b4\u30ea\u30e9":"\u30c8\u30df\u30e4","\u3068\u307f\u3084":"\u3054\u308a\u3089","\u30c8\u30df\u30e4":"\u30b4\u30ea\u30e9","\u5927\u5ead":"\u4eba\u9593","\u3054\u308a\u3089":"T.T","\u3046\u307b\u3046\u307b":"\u30dc\u30eb\u30c0\u30ea\u30f3\u30b0\u884c\u3053\u3046\u305c","\u30a6\u30db\u30a6\u30db":"\u30dc\u30eb\u30c0\u30ea\u30f3\u30b0\u884c\u3053\u3046\u305c"},m.randomDict=["\u30dc\u30eb\u30c0\u30ea\u30f3\u30b0\u884c\u3053\u3046\u305c","\u306a\u3093\u3060\u3066\u3081\u3048","\u6700\u8fd1\u96e8\u304c\u591a\u3044\u3067\u3059\u306d","\u597d\u304d\u306a\u30bf\u30a4\u30d7\u306f\uff1f","\u3061\u3093\u307d\u306f\u672c\u5f53\u306b\u795e","\u6700\u8fd1\u604b\u30b4\u30ea\u30e9\u304c\u3067\u304d\u305f\u308f","\u304a\u307e\u3048\u30cd\u30c3\u30c8\u3067\u4ffa\u306e\u3053\u3068\u3070\u304b\u306b\u3057\u3066\u305f\u3088\u306a","\u30b4\u30ea\u30e9\u3092\u7b11\u3046\u3068\u304d\u3001\u8cb4\u69d8\u3082\u307e\u305f\u30b4\u30ea\u30e9\u3084\u305e","\u3067\u308c\u3052\u3093\u3079\u30fc\u308c","\u3048\u3093\u307a\u3093\u3081\u3093"];var d=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).change=function(){var t=m.convertor(n.state.text);n.setState({answer:t.text,g:t.g})},n.state={text:""},n}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"\u30b4\u30ea\u30e9\u8a9e\u5909\u63db",r.a.createElement("span",{style:{textDecorationLine:"line-through"}},"\u30af\u30bd"),"\u30c4\u30fc\u30eb")),r.a.createElement("div",null,r.a.createElement("h3",null,"\u30b4\u30ea\u30e9\u8a9e\u3092\u5165\u308c\u3066\u306d\uff1f"),r.a.createElement("input",{type:"text",value:this.state.text,onChange:function(e){return t.setState({text:e.target.value})}}),r.a.createElement("button",{onClick:this.change},"\u5909\u63db\uff01"),this.state.answer&&r.a.createElement("div",null,r.a.createElement("div",null,"\u7ffb\u8a33\u7d50\u679c"),r.a.createElement("div",null,this.state.answer),this.state.g&&r.a.createElement("div",null,"\u203b\u3046,\u307b,\u30a6,\u30db,\u3063,\u30c3,\u30b4,\u30ea,\u30e9\u4ee5\u5916\u3092\u4f7f\u3046\u3068\u6012\u3089\u308c\u3061\u3083\u3046\u305e\u2661"))))}}]),e}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,n){t.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.626c8ab4.chunk.js.map