(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return o}),n.d(t,"postQuery",function(){return c});var r=n(7),a=n.n(r),i=n(150),u=n(0),l=n.n(u),o=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.data,t=null==e?void 0:e.markdownRemark,n=null==t?void 0:t.frontmatter;return l.a.createElement(i.a,null,l.a.createElement("h1",null,null==n?void 0:n.title),l.a.createElement("h2",null,l.a.createElement("time",null,null==n?void 0:n.date)),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:null==t?void 0:t.html}}))},t}(l.a.PureComponent),c="3833135361"},145:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var r=n(0),a=n.n(r),i=n(4),u=n.n(i),l=n(144),o=n.n(l);n.d(t,"Link",function(){return o.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(146),s=n.n(c);n.d(t,"PageRenderer",function(){return s.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var m=a.a.createContext({}),p=function(e){return a.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},146:function(e,t,n){var r;e.exports=(r=n(149))&&r.default||r},147:function(e){e.exports={data:{site:{siteMetadata:{title:"keff"}}}}},148:function(e,t,n){},149:function(e,t,n){"use strict";n.r(t);n(33);var r=n(0),a=n.n(r),i=n(4),u=n.n(i),l=n(51),o=n(2),c=function(e){var t=e.location,n=o.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=c},150:function(e,t,n){"use strict";var r=n(7),a=n.n(r),i=n(147),u=(n(148),n(0)),l=n(145),o=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return u.createElement("ul",{className:"nav"},u.createElement("li",null,u.createElement(l.Link,{to:"/"},"Blog")),u.createElement("li",{style:{marginLeft:12}},u.createElement(l.Link,{to:"/about/"},"About")))},t}(u.PureComponent),c=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e,t=this.props.site,n=(null==t?void 0:null===(e=t.siteMetadata)||void 0===e?void 0:e.title)||"";return u.createElement("header",{id:"site-header"},u.createElement("div",{className:"container"},u.createElement("h1",{className:"blog-title heading"},u.createElement(l.Link,{to:"/"},n)),u.createElement(o,null)))},t}(u.PureComponent),s=n(151),d=n.n(s);n.d(t,"a",function(){return m});var m=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).renderData=function(e){var n,r,a=t.props.children;return u.createElement(u.Fragment,null,u.createElement(d.a,null,u.createElement("html",{lang:"en"}),u.createElement("meta",{charSet:"utf-8"}),u.createElement("title",null,null==e?void 0:null===(n=e.site)||void 0===n?void 0:null===(r=n.siteMetadata)||void 0===r?void 0:r.title)),u.createElement(c,{site:e.site}),u.createElement("main",{className:"content",role:"main"},u.createElement("div",{className:"container"},u.createElement("div",null,a))))},t}return a()(t,e),t.prototype.render=function(){return u.createElement(l.StaticQuery,{query:"225374560",render:this.renderData,data:i})},t}(u.PureComponent)}}]);
//# sourceMappingURL=component---src-templates-post-js-126f8294e78af451cbf4.js.map