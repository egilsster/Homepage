function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function a(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function o(t,e,n,r){if(t){const a=u(t,e,n,r);return t[0](a)}}function u(t,e,n,r){return t[1]&&r?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](r(e))):n.ctx}function s(t,e,n,r,a,i,o){const s=function(t,e,n,r){if(t[2]&&r){const a=t[2](r(n));if(void 0===e.dirty)return a;if("object"==typeof a){const t=[],n=Math.max(e.dirty.length,a.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|a[r];return t}return e.dirty|a}return e.dirty}(e,r,a,i);if(s){const a=u(e,n,r,o);t.p(a,s)}}function c(t,e){t.appendChild(e)}function d(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function l(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function g(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function m(t){return document.createTextNode(t)}function w(){return m(" ")}function v(){return m("")}function b(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t){return Array.from(t.childNodes)}function M(t,e,n,r){for(let a=0;a<t.length;a+=1){const r=t[a];if(r.nodeName===e){let e=0;const i=[];for(;e<r.attributes.length;){const t=r.attributes[e++];n[t.name]||i.push(t.name)}for(let t=0;t<i.length;t++)r.removeAttribute(i[t]);return t.splice(a,1)[0]}}return r?g(e):h(e)}function T(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return m(e)}function C(t){return T(t," ")}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let D;function k(t){D=t}function P(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t(e)))}const S=[],U=[],Y=[],E=[],N=Promise.resolve();let W=!1;function O(t){Y.push(t)}let $=!1;const F=new Set;function q(){if(!$){$=!0;do{for(let t=0;t<S.length;t+=1){const e=S[t];k(e),j(e.$$)}for(k(null),S.length=0;U.length;)U.pop()();for(let t=0;t<Y.length;t+=1){const e=Y[t];F.has(e)||(F.add(e),e())}Y.length=0}while(S.length);for(;E.length;)E.pop()();W=!1,$=!1,F.clear()}}function j(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const H=new Set;let z;function L(){z={r:0,c:[],p:z}}function _(){z.r||r(z.c),z=z.p}function X(t,e){t&&t.i&&(H.delete(t),t.i(e))}function A(t,e,n,r){if(t&&t.o){if(H.has(t))return;H.add(t),z.c.push((()=>{H.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function Q(t){t&&t.c()}function B(t,e){t&&t.l(e)}function G(t,n,i,o){const{fragment:u,on_mount:s,on_destroy:c,after_update:d}=t.$$;u&&u.m(n,i),o||O((()=>{const n=s.map(e).filter(a);c?c.push(...n):r(n),t.$$.on_mount=[]})),d.forEach(O)}function R(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function J(t,e){-1===t.$$.dirty[0]&&(S.push(t),W||(W=!0,N.then(q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(e,a,i,o,u,s,c=[-1]){const d=D;k(e);const l=e.$$={fragment:null,ctx:null,props:s,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:a.context||[]),callbacks:n(),dirty:c,skip_bound:!1};let h=!1;if(l.ctx=i?i(e,a.props||{},((t,n,...r)=>{const a=r.length?r[0]:n;return l.ctx&&u(l.ctx[t],l.ctx[t]=a)&&(!l.skip_bound&&l.bound[t]&&l.bound[t](a),h&&J(e,t)),n})):[],l.update(),h=!0,r(l.before_update),l.fragment=!!o&&o(l.ctx),a.target){if(a.hydrate){const t=p(a.target);l.fragment&&l.fragment.l(t),t.forEach(f)}else l.fragment&&l.fragment.c();a.intro&&X(e.$$.fragment),G(e,a.target,a.anchor,a.customElement),q()}k(d)}class V{$destroy(){R(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function K(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function Z(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function tt(t){Z(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function et(t,e){Z(2,arguments);var n=tt(t),r=K(e);return isNaN(r)?new Date(NaN):r?(n.setDate(n.getDate()+r),n):n}function nt(t,e){Z(2,arguments);var n=tt(t),r=K(e);if(isNaN(r))return new Date(NaN);if(!r)return n;var a=n.getDate(),i=new Date(n.getTime());i.setMonth(n.getMonth()+r+1,0);var o=i.getDate();return a>=o?i:(n.setFullYear(i.getFullYear(),i.getMonth(),a),n)}function rt(t,e){Z(2,arguments);var n=tt(t).getTime(),r=K(e);return new Date(n+r)}function at(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function it(t){Z(1,arguments);var e=tt(t);return e.setHours(0,0,0,0),e}function ot(t,e){Z(2,arguments);var n=it(t),r=it(e),a=n.getTime()-at(n),i=r.getTime()-at(r);return Math.round((a-i)/864e5)}function ut(t,e){Z(2,arguments);var n=tt(t),r=tt(e),a=n.getTime()-r.getTime();return a<0?-1:a>0?1:a}function st(t){Z(1,arguments);var e=tt(t);return!isNaN(e)}function ct(t,e){Z(2,arguments);var n=tt(t),r=tt(e),a=n.getFullYear()-r.getFullYear(),i=n.getMonth()-r.getMonth();return 12*a+i}function dt(t,e){Z(2,arguments);var n=tt(t),r=tt(e);return n.getFullYear()-r.getFullYear()}function ft(t,e){var n=t.getFullYear()-e.getFullYear()||t.getMonth()-e.getMonth()||t.getDate()-e.getDate()||t.getHours()-e.getHours()||t.getMinutes()-e.getMinutes()||t.getSeconds()-e.getSeconds()||t.getMilliseconds()-e.getMilliseconds();return n<0?-1:n>0?1:n}function lt(t,e){Z(2,arguments);var n=tt(t),r=tt(e),a=ft(n,r),i=Math.abs(ot(n,r));n.setDate(n.getDate()-a*i);var o=ft(n,r)===-a,u=a*(i-o);return 0===u?0:u}function ht(t,e){Z(2,arguments);var n=tt(t),r=tt(e);return n.getTime()-r.getTime()}function gt(t,e){Z(2,arguments);var n=ht(t,e)/36e5;return n>0?Math.floor(n):Math.ceil(n)}function mt(t,e){Z(2,arguments);var n=ht(t,e)/6e4;return n>0?Math.floor(n):Math.ceil(n)}function wt(t){Z(1,arguments);var e=tt(t);return e.setHours(23,59,59,999),e}function vt(t){Z(1,arguments);var e=tt(t),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(23,59,59,999),e}function bt(t){Z(1,arguments);var e=tt(t);return wt(e).getTime()===vt(e).getTime()}function yt(t,e){Z(2,arguments);var n,r=tt(t),a=tt(e),i=ut(r,a),o=Math.abs(ct(r,a));if(o<1)n=0;else{1===r.getMonth()&&r.getDate()>27&&r.setDate(30),r.setMonth(r.getMonth()-i*o);var u=ut(r,a)===-i;bt(tt(t))&&1===o&&1===ut(t,a)&&(u=!1),n=i*(o-u)}return 0===n?0:n}function pt(t,e){Z(2,arguments);var n=ht(t,e)/1e3;return n>0?Math.floor(n):Math.ceil(n)}function Mt(t,e){Z(2,arguments);var n=tt(t),r=tt(e),a=ut(n,r),i=Math.abs(dt(n,r));n.setFullYear("1584"),r.setFullYear("1584");var o=ut(n,r)===-a,u=a*(i-o);return 0===u?0:u}var Tt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function Ct(t){return function(e){var n=e||{},r=n.width?String(n.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}var xt={date:Ct({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Ct({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Ct({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},Dt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function kt(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=a.width?String(a.width):i;r=t.formattingValues[o]||t.formattingValues[i]}else{var u=t.defaultWidth,s=a.width?String(a.width):t.defaultWidth;r=t.values[s]||t.values[u]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function Pt(t){return function(e,n){var r=String(e),a=n||{},i=a.width,o=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],u=r.match(o);if(!u)return null;var s,c=u[0],d=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(d)?function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}(d,(function(t){return t.test(c)})):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}(d,(function(t){return t.test(c)})),s=t.valueCallback?t.valueCallback(s):s,{value:s=a.valueCallback?a.valueCallback(s):s,rest:r.slice(c.length)}}}var St,Ut={code:"en-US",formatDistance:function(t,e,n){var r;return n=n||{},r="string"==typeof Tt[t]?Tt[t]:1===e?Tt[t].one:Tt[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:xt,formatRelative:function(t,e,n,r){return Dt[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:kt({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:kt({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:kt({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:kt({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:kt({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(St={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),r=e||{},a=n.match(St.matchPattern);if(!a)return null;var i=a[0],o=n.match(St.parsePattern);if(!o)return null;var u=St.valueCallback?St.valueCallback(o[0]):o[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(i.length)}}),era:Pt({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:Pt({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Pt({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Pt({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:Pt({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function Yt(t,e){Z(2,arguments);var n=K(e);return rt(t,-n)}function Et(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var Nt=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return Et("yy"===e?r%100:r,e.length)},Wt=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):Et(n+1,2)},Ot=function(t,e){return Et(t.getUTCDate(),e.length)},$t=function(t,e){return Et(t.getUTCHours()%12||12,e.length)},Ft=function(t,e){return Et(t.getUTCHours(),e.length)},qt=function(t,e){return Et(t.getUTCMinutes(),e.length)},jt=function(t,e){return Et(t.getUTCSeconds(),e.length)},Ht=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return Et(Math.floor(r*Math.pow(10,n-3)),e.length)};function zt(t){Z(1,arguments);var e=1,n=tt(t),r=n.getUTCDay(),a=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function Lt(t){Z(1,arguments);var e=tt(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=zt(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=zt(i);return e.getTime()>=a.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function _t(t){Z(1,arguments);var e=Lt(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=zt(n);return r}function Xt(t,e){Z(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,i=null==a?0:K(a),o=null==n.weekStartsOn?i:K(n.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=tt(t),s=u.getUTCDay(),c=(s<o?7:0)+s-o;return u.setUTCDate(u.getUTCDate()-c),u.setUTCHours(0,0,0,0),u}function At(t,e){Z(1,arguments);var n=tt(t,e),r=n.getUTCFullYear(),a=e||{},i=a.locale,o=i&&i.options&&i.options.firstWeekContainsDate,u=null==o?1:K(o),s=null==a.firstWeekContainsDate?u:K(a.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=new Date(0);c.setUTCFullYear(r+1,0,s),c.setUTCHours(0,0,0,0);var d=Xt(c,e),f=new Date(0);f.setUTCFullYear(r,0,s),f.setUTCHours(0,0,0,0);var l=Xt(f,e);return n.getTime()>=d.getTime()?r+1:n.getTime()>=l.getTime()?r:r-1}function Qt(t,e){Z(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,i=null==a?1:K(a),o=null==n.firstWeekContainsDate?i:K(n.firstWeekContainsDate),u=At(t,e),s=new Date(0);s.setUTCFullYear(u,0,o),s.setUTCHours(0,0,0,0);var c=Xt(s,e);return c}var Bt="midnight",Gt="noon",Rt="morning",Jt="afternoon",It="evening",Vt="night",Kt={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return Nt(t,e)},Y:function(t,e,n,r){var a=At(t,r),i=a>0?a:1-a;return"YY"===e?Et(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):Et(i,e.length)},R:function(t,e){return Et(Lt(t),e.length)},u:function(t,e){return Et(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return Et(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return Et(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return Wt(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return Et(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=function(t,e){Z(1,arguments);var n=tt(t),r=Xt(n,e).getTime()-Qt(n,e).getTime();return Math.round(r/6048e5)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):Et(a,e.length)},I:function(t,e,n){var r=function(t){Z(1,arguments);var e=tt(t),n=zt(e).getTime()-_t(e).getTime();return Math.round(n/6048e5)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):Et(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):Ot(t,e)},D:function(t,e,n){var r=function(t){Z(1,arguments);var e=tt(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),a=n-r;return Math.floor(a/864e5)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):Et(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return Et(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return Et(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return Et(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?Gt:0===a?Bt:a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?It:a>=12?Jt:a>=4?Rt:Vt,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return $t(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):Ft(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):Et(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):Et(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):qt(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):jt(t,e)},S:function(t,e){return Ht(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return te(a);case"XXXX":case"XX":return ee(a);case"XXXXX":case"XXX":default:return ee(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return te(a);case"xxxx":case"xx":return ee(a);case"xxxxx":case"xxx":default:return ee(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Zt(a,":");case"OOOO":default:return"GMT"+ee(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Zt(a,":");case"zzzz":default:return"GMT"+ee(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return Et(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return Et((r._originalDate||t).getTime(),e.length)}};function Zt(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+Et(i,2)}function te(t,e){return t%60==0?(t>0?"-":"+")+Et(Math.abs(t)/60,2):ee(t,e)}function ee(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+Et(Math.floor(a/60),2)+n+Et(a%60,2)}function ne(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function re(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}var ae={p:re,P:function(t,e){var n,r=t.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return ne(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",ne(a,e)).replace("{{time}}",re(i,e))}},ie=["D","DD"],oe=["YY","YYYY"];function ue(t){return-1!==ie.indexOf(t)}function se(t){return-1!==oe.indexOf(t)}function ce(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var de=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,fe=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,le=/^'([^]*?)'?$/,he=/''/g,ge=/[a-zA-Z]/;function me(t,e,n){Z(2,arguments);var r=String(e),a=n||{},i=a.locale||Ut,o=i.options&&i.options.firstWeekContainsDate,u=null==o?1:K(o),s=null==a.firstWeekContainsDate?u:K(a.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=i.options&&i.options.weekStartsOn,d=null==c?0:K(c),f=null==a.weekStartsOn?d:K(a.weekStartsOn);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var l=tt(t);if(!st(l))throw new RangeError("Invalid time value");var h=at(l),g=Yt(l,h),m={firstWeekContainsDate:s,weekStartsOn:f,locale:i,_originalDate:l},w=r.match(fe).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,ae[e])(t,i.formatLong,m):t})).join("").match(de).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return we(n);var o=Kt[r];if(o)return!a.useAdditionalWeekYearTokens&&se(n)&&ce(n,e,t),!a.useAdditionalDayOfYearTokens&&ue(n)&&ce(n,e,t),o(g,n,i.localize,m);if(r.match(ge))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("");return w}function we(t){return t.match(le)[1].replace(he,"'")}function ve(t,e){Z(2,arguments);var n=K(e);return et(t,-n)}function be(t,e){Z(2,arguments);var n=K(e);return nt(t,-n)}function ye(t,e){if(Z(2,arguments),!e||"object"!=typeof e)return new Date(NaN);var n="years"in e?K(e.years):0,r="months"in e?K(e.months):0,a="weeks"in e?K(e.weeks):0,i="days"in e?K(e.days):0,o="hours"in e?K(e.hours):0,u="minutes"in e?K(e.minutes):0,s="seconds"in e?K(e.seconds):0,c=be(tt(t),r+12*n),d=ve(c,i+7*a),f=u+60*o,l=s+60*f,h=1e3*l,g=new Date(d.getTime()-h);return g}function pe(t){var e=t.start,n=t.end;Z(1,arguments);var r=tt(e),a=tt(n);if(!st(r))throw new RangeError("Start Date is invalid");if(!st(a))throw new RangeError("End Date is invalid");var i={years:0,months:0,days:0,hours:0,minutes:0,seconds:0},o=ut(r,a);i.years=Math.abs(Mt(r,a));var u=ye(r,{years:o*i.years});i.months=Math.abs(yt(u,a));var s=ye(u,{months:o*i.months});i.days=Math.abs(lt(s,a));var c=ye(s,{days:o*i.days});i.hours=Math.abs(gt(c,a));var d=ye(c,{hours:o*i.hours});i.minutes=Math.abs(mt(d,a));var f=ye(d,{minutes:o*i.minutes});return i.seconds=Math.abs(pt(f,a)),i}export{s as A,x as B,l as C,v as D,L as E,_ as F,V as S,g as a,p as b,M as c,f as d,h as e,y as f,d as g,c as h,I as i,P as j,w as k,b as l,Q as m,t as n,T as o,C as p,B as q,G as r,i as s,m as t,X as u,A as v,R as w,me as x,pe as y,o as z};
