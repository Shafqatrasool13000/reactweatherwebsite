(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{12:function(e,t,s){},14:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(5),i=s.n(n),r=(s(12),s(7)),j=s(4),d=s.n(j),l=s(6),o=s(2),b=(s(14),s(0)),h=function(e){var t=e.temp,s=e.pressure,a=e.humidity,n=e.speed,i=e.weathermood,r=e.city,j=e.country,d=e.sunset,l=Object(c.useState)(""),h=Object(o.a)(l,2),u=h[0],m=h[1];Object(c.useEffect)((function(){if(i)switch(i){case"Clouds":m("wi-night-cloudy");break;case"Rain":m("wi-night-alt-sleet");break;case"Clear":m("wi-night-clear");break;case"Haze":m("wi-day-haze");break;case"Smoke":m("wi-smoke");break;case"Drizzle":m("wi-raindrops");break;default:m("wi-night-cloudy")}}),[i]);var x=new Date(1e3*d),O="".concat(x.getHours(),":").concat(x.getMinutes());return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("article",{className:"widget",children:[Object(b.jsxs)("div",{className:"weatherIcon",children:[Object(b.jsx)("i",{className:"wi ".concat(u)}),Object(b.jsx)("p",{children:'"'.concat(i,'"')})]}),Object(b.jsxs)("div",{className:"weatherInfo",children:[Object(b.jsx)("div",{className:"temperature",children:Object(b.jsxs)("span",{children:[t,"\xb0"]})}),Object(b.jsxs)("div",{className:"description",children:[Object(b.jsx)("div",{className:"weatherCondition",children:i}),Object(b.jsx)("div",{className:"place",children:"".concat(r,",").concat(j)})]})]}),Object(b.jsx)("div",{className:"date",children:(new Date).toLocaleString()}),Object(b.jsxs)("div",{className:"extra-temp",children:[Object(b.jsxs)("div",{className:"temp-info-minmax",children:[Object(b.jsxs)("div",{className:"two-sided-section",children:[Object(b.jsxs)("p",{children:[" ",Object(b.jsx)("i",{className:"wi wi-sunset"})]}),Object(b.jsxs)("p",{className:"extra-info-leftside",children:[O," PM ",Object(b.jsx)("br",{}),"SunSet"]})]}),Object(b.jsxs)("div",{className:"two-sided-section",children:[Object(b.jsxs)("p",{children:[" ",Object(b.jsx)("i",{className:"wi wi-humidity"})]}),Object(b.jsxs)("p",{className:"extra-info-leftside",children:[a," ",Object(b.jsx)("br",{}),"humidity"]})]}),Object(b.jsx)("div",{className:"two-sided-section"})]}),Object(b.jsxs)("div",{className:"weather-extra-info",children:[Object(b.jsxs)("div",{className:"two-sided-section",children:[Object(b.jsxs)("p",{children:[" ",Object(b.jsx)("i",{className:"wi wi-rain"})]}),Object(b.jsxs)("p",{className:"extra-info-leftside",children:[s," ",Object(b.jsx)("br",{}),"pressure"]})]}),Object(b.jsxs)("div",{className:"two-sided-section",children:[Object(b.jsxs)("p",{children:[" ",Object(b.jsx)("i",{className:"wi wi-strong-wind"})]}),Object(b.jsxs)("p",{className:"extra-info-leftside",children:[n," ",Object(b.jsx)("br",{}),"Speed"]})]})]})]})]})})},u=function(){var e=Object(c.useState)("Okara"),t=Object(o.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(""),i=Object(o.a)(n,2),j=i[0],u=i[1],m=function(){var e=Object(l.a)(d.a.mark((function e(){var t,c,n,i,r,j,l,o,b,h,m;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.openweathermap.org/data/2.5/weather?q=".concat(s,"&units=metric&appid=71f417e6c80f8b57b0b5338c2017390b"),e.next=4,fetch(t);case 4:return c=e.sent,e.next=7,c.json();case 7:n=e.sent,i=n.main.temp,r=n.main.pressure,j=n.main.humidity,l=n.wind.speed,o=n.weather[0].main,b=n.name,h=n.sys.country,m=n.sys.sunset,u({temp:i,pressure:r,humidity:j,speed:l,weathermood:o,city:b,country:h,sunset:m}),e.next=24;break;case 20:e.prev=20,e.t0=e.catch(0),s||alert("fill Search Field "),console.log(e.t0);case 24:a("");case 25:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){m()}),[]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"wrap",children:Object(b.jsxs)("div",{className:"search",children:[Object(b.jsx)("input",{type:"search",placeholder:"Search...",autoFocus:!0,id:"search",className:"searchTerm",value:s,onChange:function(e){return a(e.target.value)},onKeyPress:function(e){return function(e){if("Enter"===e.key)return m()}(e)}}),Object(b.jsx)("button",{className:"searchButton",type:"button ",onClick:function(){m()},children:"Search "})]})}),Object(b.jsx)(h,Object(r.a)({},j))]})},m=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(u,{})})},x=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,17)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.ed771317.chunk.js.map