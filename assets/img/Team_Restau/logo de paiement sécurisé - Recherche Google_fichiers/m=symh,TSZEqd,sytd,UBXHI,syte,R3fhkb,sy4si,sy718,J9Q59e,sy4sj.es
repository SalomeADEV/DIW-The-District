this._s=this._s||{};(function(_){var window=this;
try{
_.Azb=_.A("TSZEqd",[_.zn]);
}catch(e){_._DumpException(e)}
try{
_.y("TSZEqd");
_.Bzb=function(a){_.E.call(this,a.Ka);this.loaded=!1;this.window=a.service.window;this.image=this.getRoot();this.ka()};_.F(_.Bzb,_.E);_.Bzb.Ga=function(){return{service:{window:_.Dn}}};
_.Bzb.prototype.ka=function(){var a;if(a=!this.loaded)a=_.Feb(this.image.el()),a=0===a.offsetHeight&&0===a.offsetWidth||"hidden"===_.v.getComputedStyle(a,"visibility")||!_.v.WZ(a)?!1:(a=a.parentElement.getBoundingClientRect())?a.left>this.window.get().scrollX+this.window.get().innerWidth||a.left+a.width<this.window.get().scrollX?!1:!0:!0;a&&this.load()};
_.Bzb.prototype.load=function(){if(!this.loaded){var a=_.hm(this.image.getData("src"));a&&(a!==this.image.Xc("src")&&_.On(this.image,"src",a),this.image.setData("src",null));this.loaded=!0}};_.Bzb.prototype.oa=function(){var a=this.image.getData("src");a.Gb()&&a.string()!==this.image.Xc("src")||this.image.parent().setStyle("background-color","")};_.I(_.Bzb.prototype,"K1e2pe",function(){return this.oa});_.I(_.Bzb.prototype,"eNYuKb",function(){return this.load});_.I(_.Bzb.prototype,"KpWyKc",function(){return this.ka});
_.Vq(_.Azb,_.Bzb);
_.z();
}catch(e){_._DumpException(e)}
try{
_.oOb=_.A("UBXHI",[]);
}catch(e){_._DumpException(e)}
try{
_.y("UBXHI");
_.pOb=function(a){_.E.call(this,a.Ka);this.loaded=!1;this.root=this.getRoot()};_.F(_.pOb,_.E);_.pOb.Ga=_.E.Ga;_.pOb.prototype.ka=function(){if(!this.loaded){var a=_.hm(this.root.getData("src"));a&&(a!==this.root.Xc("src")&&_.On(this.root,"src",a),this.root.setData("src",null));this.loaded=!0}};_.I(_.pOb.prototype,"QT8fkf",function(){return this.ka});_.Vq(_.oOb,_.pOb);
_.z();
}catch(e){_._DumpException(e)}
try{
_.qOb=_.A("R3fhkb",[_.zn,_.oOb]);
}catch(e){_._DumpException(e)}
try{
_.y("R3fhkb");
var rOb=function(a){_.pOb.call(this,a.Ka);this.window=a.service.window;this.oa()};_.F(rOb,_.pOb);rOb.Ga=function(){return{service:{window:_.Dn}}};
rOb.prototype.oa=function(){if(!this.loaded){var a=this.root.Bb();if((0!==a.offsetHeight||0!==a.offsetWidth)&&"hidden"!==_.v.getComputedStyle(a,"visibility")&&_.v.WZ(a.parentElement)){var b;(a=null==(b=a.parentElement)?void 0:b.getBoundingClientRect())&&(a.left>this.window.get().scrollX+this.window.get().innerWidth||a.left+a.width<this.window.get().scrollX)||this.ka()}}};_.I(rOb.prototype,"iSvHDf",function(){return this.oa});_.Vq(_.qOb,rOb);
_.z();
}catch(e){_._DumpException(e)}
try{
_.S_k=_.A("J9Q59e",[]);
}catch(e){_._DumpException(e)}
try{
var KJv=function(a){this.Ia=_.n(a)};_.F(KJv,_.p);_.k=KJv.prototype;_.k.Fuf=function(){return _.C(this,1)};_.k.Ymg=function(a){return _.Ee(this,1,a)};_.k.x5e=function(){return _.Mf(this,1)};_.k.PKf=function(){return _.Ve(this,1)};_.k.Mrd=function(){return _.C(this,2)};_.k.MVd=function(a){return _.Ee(this,2,a)};_.k.N2e=function(){return _.Mf(this,2)};_.k.UHf=function(){return _.Ve(this,2)};_.k.Bxc=function(){return _.C(this,3)};_.k.NVd=function(a){return _.Ee(this,3,a)};
_.k.Vid=function(){return _.Mf(this,3)};_.k.Zzd=function(){return _.Ve(this,3)};_.k.ob="mZlIp";var LJv={OG:function(){return["shem","bshm"]},Yr:function(){return["bsht"]},Ij:function(a,b){var c=new _.jt(a.searchParams,b);_.lt(c,"shem",b.Ymg,b.x5e);_.lt(c,"bshm",b.NVd,b.Vid);c=new _.jt(a.ka,b);_.lt(c,"bsht",b.MVd,b.N2e)},nk:function(a,b){var c=new _.jt(b.searchParams,a);_.pt(c,a.PKf,a.Fuf,"shem");_.pt(c,a.Zzd,a.Bxc,"bshm");c=new _.jt(b.ka,a);_.pt(c,a.UHf,a.Mrd,"bsht")}};var MJv;MJv=null;_.NJv=function(a){_.zu.call(this,a.Ka);new _.Bu(this);this.qe=_.uu(a.service.qe,this,new _.tu(LJv))};_.F(_.NJv,_.zu);_.NJv.Ga=function(){return{service:{qe:_.ku},context:{an:"I4I0mc"}}};_.NJv.Uk=function(){return KJv};_.NJv.Nl=function(a){if(MJv)return MJv;var b=new _.rd("FdVNMc");MJv=_.bf(b,_.NJv,new _.yu(b,_.NJv,KJv));MJv.then(function(c){c.initialize(a)});return MJv};_.so.mZlIp=_.ro;
}catch(e){_._DumpException(e)}
try{
_.y("J9Q59e");
_.OJv=function(a){_.og.call(this,a.Ka);this.Rg=a.Td.npc};_.F(_.OJv,_.og);_.OJv.Ga=function(){return{Td:{npc:_.NJv}}};_.yq(_.S_k,_.OJv);
_.z();
}catch(e){_._DumpException(e)}
try{
_.T_k=_.A("a6Sgfb",[_.S_k]);
}catch(e){_._DumpException(e)}
try{
_.y("a6Sgfb");
var PJv=function(a,b){a.Rg.transition(function(c){c.NVd(b.join(","));return c}).run(_.qv({replace:!0}))},QJv=function(a){a.Rg.get().Zzd()&&a.Rg.transition(function(b){b.Vid();return b}).run(_.qv({replace:!0}))};var RJv=function(a){this.Ia=_.n(a)};_.F(RJv,_.p);RJv.wb=[5,3];RJv.prototype.ob="YzXGMb";var VJv=function(a){_.E.call(this,a.Ka);this.Ja=[];this.ka=this.Ba=this.Aa=this.wa="";this.Na=[];this.oa="";this.Qa=0;var b=a.jsdata.data;this.model=a.model.model;this.Ja=_.ci(b,5,_.Ue());this.Na=_.ci(b,3,_.Ue());this.Qa=_.gi(b,4);this.wa=SJv(TJv(this,this.Na));this.Aa=this.wa+"/"+this.Qa.toString();this.oa=this.model.Rg.get().Bxc();this.ka=TJv(this,this.oa.split(","));this.Ba=SJv(this.ka);if(""!==this.wa||""!==this.Ba)a:{if(""!==this.ka){if(this.ka===this.Aa){UJv(this);break a}this.wa!==this.Ba&&
(a=this.ka,_.Ed().Ec("bshom",a).log())}""!==this.wa&&("complete"===document.readyState?this.Ha():_.Sq(this).listenOnce(_.Re(),"load",this.Ha),UJv(this))}};_.F(VJv,_.E);VJv.Ga=function(){return{model:{model:_.OJv},jsdata:{data:RJv}}};VJv.prototype.Ha=function(){PJv(this.model,WJv(this))};
var UJv=function(a){_.Sq(a).listen(_.Re(),"visibilitychange",function(){_.fd().mD()?QJv(a.model):PJv(a.model,WJv(a))})},WJv=function(a){a.oa=a.model.Rg.get().Bxc();if(!a.oa)return[a.Aa];var b=a.oa.split(",");""===a.ka?b.push(a.Aa):b[b.indexOf(a.ka)]=a.Aa;return b},TJv=function(a,b){b=b.filter(function(c){return a.Ja.includes(SJv(c))});return 0<b.length?b[0]:""},SJv=function(a){var b=a.lastIndexOf("/");return 0>b?a:a.substring(0,b)};_.Vq(_.T_k,VJv);
_.z();
}catch(e){_._DumpException(e)}
try{
_.y("Tia57b");
var H5d=function(a){_.Cn.call(this,a.Ka)};_.F(H5d,_.Cn);H5d.nb=_.Cn.nb;H5d.Ga=_.Cn.Ga;_.k=H5d.prototype;_.k.FYc=function(a,b){(void 0===b?0:b)&&_.Ec(location,_.ec(a));return!1};_.k.gja=function(){};_.k.Tra=function(){var a=this;return new Promise(function(b){_.ig(_.mf(a,{service:{Nba:_.$_a}}).addCallback(function(c){return b(c.service.Nba)}),function(){return b(a)})})};_.k.Afa=function(a,b){b=void 0===b?{}:b;b.replace?(_.Fc(location,_.ec(a)),location.reload()):_.Ec(location,_.ec(a));return Promise.resolve(null)};
_.k.prefetch=function(){return Promise.resolve(null)};_.En(_.hUa,H5d);
_.z();
}catch(e){_._DumpException(e)}
try{
_.y("KpRAue");
_.o8d=new _.xd(_.iUa);
_.z();
}catch(e){_._DumpException(e)}
try{
_.C6d=function(a){if(!a.match(/.*com\/search|^\/search/))return _.$c(new _.Hd("url invalid not /search")),{ZOa:!1,Szd:!0};var b,c=null!=(b=_.fm(a,"tbm"))?b:"web";return"web"!==c?(_.$c(new _.Hd("url invalid mode: "+c)),{ZOa:!1,Szd:!0}):_.B6d(a)?{ZOa:!0}:(_.$c(new _.Hd("url invalid missing query: "+a)),{ZOa:!1,reload:!0})};_.B6d=function(a){return!!_.fm(a,"q")};
}catch(e){_._DumpException(e)}
try{
_.y("NyeqM");
_.nN=function(a){_.Cn.call(this,a.Ka);this.wa=!1;this.oa=new Map;this.Nq=a.service.Nq};_.F(_.nN,_.Cn);_.nN.nb=_.Cn.nb;_.nN.Ga=function(){return{service:{Nq:_.o8d}}};_.nN.prototype.ka=function(){};_.U3g=function(a,b){b=void 0===b?{}:b;S3g(a);b.jmh&&_.T3g(a);b.feature&&a.Nq.gja(b);if(b.Q5){var c=b.Q5;c=Array.isArray(c)?c:[c];c=_.Xa(c);for(var d=c.next();!d.done;d=c.next())a.oa.set(d.value,b)}};_.T3g=function(a){a.Nq.Tra().then(function(b){a.Nq=b})};
_.nN.prototype.transition=function(a,b){return this.Nq.Afa(a,b)};
var S3g=function(a){a.wa||(a.wa=!0,document.addEventListener("click",function(b){try{var c=b.target.closest("a");if(c&&!b.defaultPrevented){var d=V3g(a,c);if(d){var e,f=null==(e=d.onClick)?void 0:e.call(d,b,c),g=Object.assign({},d,f);if(_.C6d(c.href).ZOa){if(!g.triggerElement){for(d=c;d&&!d.getAttribute("jslog")&&!d.getAttribute("data-ved");)d=d.parentElement;d||_.$c(Error("rl"));g.triggerElement=d}a.transition(c.href,g);b.preventDefault()}}}}catch(h){_.$c(Error("pl`"+h))}}))},V3g=function(a,b){try{var c=
W3g(a,b),d=c?a.oa.get(c):void 0;return((null==d?0:d.omit)?X3g(d.omit):[]).find(function(e){return"function"===typeof e?e(b):a.isMatch(b,e)||"string"===typeof e&&b.closest(e)})?void 0:d}catch(e){_.$c(Error("ql`"+e))}},W3g=function(a,b){return Array.from(a.oa.keys()).find(function(c){return a.isMatch(b,c)})};_.nN.prototype.isMatch=function(a,b){return b instanceof Element?a.isEqualNode(b):a.matches(b)||a.closest(b)};var X3g=function(a){return Array.isArray(a)?a:[a]};_.En(_.i0a,_.nN);

_.z();
}catch(e){_._DumpException(e)}
try{
_.t4g=!!(_.Mg[32]>>27&1);_.u4g=!!(_.Mg[32]>>28&1);_.v4g=!!(_.Mg[32]>>29&1);_.w4g=!!(_.Mg[33]&1);
}catch(e){_._DumpException(e)}
try{
_.x4g=_.A("O9SqHb",[_.cq,_.i0a]);
}catch(e){_._DumpException(e)}
try{
_.y("O9SqHb");
var y4g=function(a){_.E.call(this,a.Ka);this.Jc=a.service.Jc;_.u4g&&(this.DI=a.service.DI)};_.F(y4g,_.E);y4g.Ga=function(){return{service:{Jc:_.hu,DI:_.nN}}};y4g.prototype.navigate=function(a){var b=this,c,d,e;return _.Jg(function(f){switch(f.ka){case 1:c=!!a&&a.data||{};d=c.url;if(!b.DI){f.Hb(2);break}_.vg(f,3);return f.yield(b.DI.transition(d.toString()),5);case 5:return f.return();case 3:e=_.Ag(f),_.$c(Error("ul`"+e));case 2:b.Jc.Ah(d,!1),_.ug(f)}})};_.I(y4g.prototype,"RySO6d",function(){return this.navigate});
_.Vq(_.x4g,y4g);
_.z();
}catch(e){_._DumpException(e)}
})(this._s);
// Google Inc.
