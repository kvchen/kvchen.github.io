(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return l});n(151);var r=n(7),a=n.n(r),i=n(0),o=n(138),u=n(147),l=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.pageContext,t=e.group,n=e.index;n-1==1||(n-1).toString(),(n+1).toString();return i.createElement(u.a,null,(t||[]).map(function(e){var t=null==e?void 0:e.node,n=null==t?void 0:t.frontmatter;return i.createElement("article",{key:t.id},i.createElement("header",{className:"post-header"},i.createElement("h2",{className:"post-title"},i.createElement(o.Link,{to:null==n?void 0:n.path},null==n?void 0:n.title)),i.createElement("p",{class:"post-time"},i.createElement("time",{datetime:null==n?void 0:n.date},null==n?void 0:n.date))),i.createElement("section",{className:"post-excerpt"},i.createElement("p",null,null==t?void 0:t.excerpt)))}))},t}(i.PureComponent)},138:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return m});var r=n(0),a=n.n(r),i=n(4),o=n.n(i),u=n(137),l=n.n(u);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var c=n(22);n.d(t,"waitForRouteChange",function(){return c.c});var s=n(139),d=n.n(s);n.d(t,"PageRenderer",function(){return d.a});var p=n(33);n.d(t,"parsePath",function(){return p.a});var f=a.a.createContext({}),m=function(e){return a.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},139:function(e,t,n){var r;e.exports=(r=n(140))&&r.default||r},140:function(e,t,n){"use strict";n.r(t);n(34);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),u=n(50),l=n(1),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(u.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},141:function(e){e.exports={data:{site:{siteMetadata:{title:"keff"}}}}},142:function(e,t,n){},147:function(e,t,n){"use strict";var r=n(7),a=n.n(r),i=n(141),o=n(0),u=n(138),l=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return o.createElement("ul",{className:"nav"},o.createElement("li",null,o.createElement(u.Link,{to:"/"},"Blog")),o.createElement("li",{style:{marginLeft:12}},o.createElement(u.Link,{to:"/about/"},"About")))},t}(o.PureComponent),c=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e,t=this.props.site,n=(null==t?void 0:null===(e=t.siteMetadata)||void 0===e?void 0:e.title)||"";return o.createElement("header",{id:"site-header"},o.createElement("div",{className:"container"},o.createElement("h1",{className:"blog-title heading"},o.createElement(u.Link,{to:"/"},n)),o.createElement(l,null)))},t}(o.PureComponent),s=n(148),d=n.n(s);n(142);n.d(t,"a",function(){return p});var p=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).renderData=function(e){var n,r,a=t.props.children;return o.createElement(o.Fragment,null,o.createElement(d.a,null,o.createElement("html",{lang:"en"}),o.createElement("meta",{charSet:"utf-8"}),o.createElement("title",null,null==e?void 0:null===(n=e.site)||void 0===n?void 0:null===(r=n.siteMetadata)||void 0===r?void 0:r.title)),o.createElement(c,{site:e.site}),o.createElement("main",{className:"content",role:"main"},o.createElement("div",{className:"container"},o.createElement("div",null,a))))},t}return a()(t,e),t.prototype.render=function(){return o.createElement(u.StaticQuery,{query:"225374560",render:this.renderData,data:i})},t}(o.PureComponent)},149:function(e,t,n){"use strict";var r=n(10);e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},151:function(e,t,n){"use strict";n(152);var r=n(10),a=n(149),i=n(15),o=/./.toString,u=function(e){n(16)(RegExp.prototype,"toString",e,!0)};n(24)(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?u(function(){var e=r(this);return"/".concat(e.source,"/","flags"in e?e.flags:!i&&e instanceof RegExp?a.call(e):void 0)}):"toString"!=o.name&&u(function(){return o.call(this)})},152:function(e,t,n){n(15)&&"g"!=/./g.flags&&n(23).f(RegExp.prototype,"flags",{configurable:!0,get:n(149)})}}]);
//# sourceMappingURL=component---src-templates-index-js-86d8c396c35f13dc8d44.js.map