!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Kalendar=e()}(this,function(){"use strict";var f=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},t=function(){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}(),o=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,i=!1,a=void 0;try{for(var o,u=t[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(t){i=!0,a=t}finally{try{!r&&u.return&&u.return()}finally{if(i)throw a}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")};function w(t,e){var n=t.getMonth()+1,r=t.getDate();return n=(n<10?"0":"")+n,r=(r<10?"0":"")+r,(e?[t.getFullYear(),n]:[t.getFullYear(),n,r]).join("-")}function e(t){var e=new Date,n=t.split("-"),r=o(n,2),i=r[0],a=r[1];return e.setFullYear(+i),e.setMonth(a-1,1),e}var M=function(){function r(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};f(this,r),this.year=t.getFullYear(),this.month=t.getMonth(),this.date=t.getDate(),this.day=t.getDay(),this.dateText=w(t),this.past=this.toDay.getTime()>t.getTime(),this.today=w(new Date)===this.dateText,this.timestamp=t.getTime();var n=this;Object.keys(e).forEach(function(t){n[t]=e[t]})}return t(r,[{key:"toDay",get:function(){var t=new Date;return t.setHours(0),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0),t}}]),r}();return function(){function h(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.start,n=t.end,r=t.unifiedMount,i=void 0===r?{}:r,a=t.mount,o=void 0===a?{}:a,u=t.weekStart,s=void 0===u?0:u;return f(this,h),this.startTime=e,this.endTime=n,this.unifiedMount=i,this.mount=o,this.weekStart=s,this._create()}return t(h,[{key:"_create",value:function(){var t=this.mount,e=this.weekStart,n=this.unifiedMount,r=this.startDate,i=this.endDate,a={},o=12*i.getFullYear()+i.getMonth()+1-(12*r.getFullYear()+r.getMonth()+1);if(o<0)return null;var u=0;do{var s=new Date(r.getTime());s.setMonth(s.getMonth()+u),a[w(s,!0)]=h.monthly({date:s,mount:t,weekStart:e,unifiedMount:n}),o--,u++}while(0<o);return a}},{key:"startDate",get:function(){var t=this.startTime?e(this.startTime):new Date;return t.setDate(1),t}},{key:"endDate",get:function(){if(this.endTime)return e(this.endTime);var t=this.startDate;return t.setMonth(t.getMonth()+3),t}}],[{key:"monthly",value:function(t){var e=t.date,n=t.mount,r=void 0===n?{}:n,i=t.weekStart,a=void 0===i?0:i,o=t.unifiedMount,u=void 0===o?{}:o;e.setDate(1);var s,h,f=[],l=[31,(h=(s=e).getFullYear())%4||!(h%100)&&h%400?28:29,31,30,31,30,31,31,30,31,30,31][s.getMonth()],d=e.getDay(),c=0;d!==a&&(c=d-a);for(var v=0;v<l+c;v+=7){var g=[],y=7;if(!v&&c){for(var m=0;m<c;m++)g.push(null);y-=c}for(var D=0;D<y;D++){var p=w(e);if(g.push(new M(e,Object.assign({},u,r[p]))),e.getDate()>=l)break;e.setDate(e.getDate()+1)}for(;g.length<y;)g.push(null);f.push(g)}return f}}]),h}()});
