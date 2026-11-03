"use strict";var l=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var x=l(function(L,w){
var d=require('@stdlib/strided-base-reinterpret-complex64/dist');function A(e,r,i,v,c,a,t,o){var s,q,j,m,n,u,p,f;if(e<=0||r<=0)return a;for(s=d(i,0),q=d(a,0),n=c*2,u=o*2,v*=2,t*=2,p=0;p<e;p++){for(j=s[n],m=s[n+1],f=0;f<r;f++)q[u]=j,q[u+1]=m,u+=t;n+=v}return a}w.exports=A
});var E=l(function(M,_){
var R=require('@stdlib/strided-base-stride2offset/dist'),B=x();function C(e,r,i,v,c,a){var t=R(e,v),o=R(e*r,a);return B(e,r,i,v,t,c,a,o)}_.exports=C
});var h=l(function(O,g){
var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=E(),F=x();D(b,"ndarray",F);g.exports=b
});var G=require("path").join,H=require('@stdlib/utils-try-require/dist'),I=require('@stdlib/assert-is-error/dist'),J=h(),y,z=H(G(__dirname,"./native.js"));I(z)?y=J:y=z;module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
