this._s=this._s||{};(function(_){var window=this;
try{
_.Lsb=function(a){this.Om=a};
}catch(e){_._DumpException(e)}
try{
var Msb=function(a){_.Cn.call(this,a.Ka);var b=this;this.window=a.service.window.get();this.wa=this.Om();this.oa=window.orientation;this.ka=function(){var c=b.Om(),d=b.yMb()&&90===Math.abs(window.orientation)&&b.oa===-1*window.orientation;b.oa=window.orientation;if(c!==b.wa||d){b.wa=c;d=_.Xa(b.Ge);for(var e=d.next();!e.done;e=d.next()){e=e.value;var f=new _.Lsb(c);try{e(f)}catch(g){_.ca(g)}}}};this.Ge=new Set;this.window.addEventListener("resize",this.ka);this.yMb()&&this.window.addEventListener("orientationchange",
this.ka)};_.F(Msb,_.Cn);Msb.nb=_.Cn.nb;Msb.Ga=function(){return{service:{window:_.Dn}}};Msb.prototype.addListener=function(a){this.Ge.add(a)};Msb.prototype.removeListener=function(a){this.Ge.delete(a)};
Msb.prototype.Om=function(){if(Nsb()){var a=_.tl(this.window);a=new _.al(a.width,Math.round(a.width*this.window.innerHeight/this.window.innerWidth))}else a=this.Zb()||(_.ia()?Nsb():this.window.visualViewport)?_.tl(this.window):new _.al(this.window.innerWidth,this.window.innerHeight);return a.height<a.width};Msb.prototype.destroy=function(){this.window.removeEventListener("resize",this.ka);this.window.removeEventListener("orientationchange",this.ka)};var Nsb=function(){return _.ia()&&_.Se.mI()&&!navigator.userAgent.includes("GSA")};
Msb.prototype.Zb=function(){return _.Osb};Msb.prototype.yMb=function(){return"orientation"in window};_.Osb=!1;_.En(_.BTa,Msb);
_.Osb=!0;
}catch(e){_._DumpException(e)}
try{
_.y("aLUfP");

_.z();
}catch(e){_._DumpException(e)}
})(this._s);
// Google Inc.
