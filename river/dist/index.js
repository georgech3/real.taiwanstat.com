!function e(o,t,r){function n(a,s){if(!t[a]){if(!o[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(i)return i(a,!0);throw new Error("Cannot find module '"+a+"'")}var u=t[a]={exports:{}};o[a][0].call(u.exports,function(e){var t=o[a][1][e];return n(t||e)},u,u.exports,e,o,t,r)}return t[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)n(r[a]);return n}({1:[function(e,o,t){!function(){function o(){$.getJSON("./data/siteInfo.json",function(e){y=e;for(var o in y)if(y[o].SiteName in v){if(v[y[o].SiteName].RPI=parseFloat(v[y[o].SiteName].RPI),isNaN(v[y[o].SiteName].RPI))continue;var r=t(v[y[o].SiteName].RPI),i=L.AwesomeMarkers.icon({prefix:"fa",icon:"map-marker",markerColor:r.color}),a=L.marker([y[o].TWD97Lat,y[o].TWD97Lon],{icon:i,opacity:.9}).addTo(g);a.bindPopup("<strong>測站名稱："+y[o].SiteName+'</strong><br/><span class="red">污染程度：'+r.disc+"</span><br/>所屬流域："+y[o].Basin+"<br/>RPI指標："+v[y[o].SiteName].RPI+"<br/>酸鹼值："+v[y[o].SiteName].PH+"<br/>懸浮固體："+v[y[o].SiteName].SS+"（mg/L）<br/>溶氧量："+v[y[o].SiteName].DO+"（mg/L）<br/>生化需氧量："+v[y[o].SiteName].COD+"（mg/L）<br/>氨氮："+v[y[o].SiteName].NH3N+"（mg/L）<br/>地址："+y[o].SiteAddress),y[o].Basin in N?(N[y[o].Basin].RPI+=v[y[o].SiteName].RPI,N[y[o].Basin].siteNumber+=1):(N[y[o].Basin]={},N[y[o].Basin].RPI=v[y[o].SiteName].RPI,N[y[o].Basin].siteNumber=1)}for(var o in N)N[o].RPI=parseFloat(N[o].RPI)/N[o].siteNumber;w=L.geoJson(b,{style:n,onEachFeature:u}),w.addTo(g)})}function t(e){return e<=2?{disc:"未(稍)受污染",color:"blue"}:e<=3?{disc:"輕度污染",color:"orange"}:e<=6?{disc:"中度污染",color:"red"}:{disc:"嚴重污染",color:"darkpurple"}}function r(){g=new L.Map("map");var e=new L.TileLayer("https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png",{minZoom:1,maxZoom:16,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'});g.setView(new L.LatLng(23.7,121),8),e.addTo(g),P.addTo(g),R.addTo(g)}function n(e){return{fillColor:i(e.properties.name),weight:2,opacity:1,color:"#eee",dashArray:"3",fillOpacity:.4}}function i(e){var o=0;return e+"流域"in N?(o=N[e+"流域"].RPI,o<=2?"#39AADD":o<=3?"#E39941":o<=6?"#D24C39":"#684064"):"transparent"}function a(e){var o=e.target;o.setStyle({weight:5,color:"#666",dashArray:"",fillOpacity:.7}),L.Browser.ie||L.Browser.opera||o.bringToFront(),P.update(o.feature.properties)}function s(e){w.resetStyle(e.target)}function c(e){g.fitBounds(e.target.getBounds()),P.update(e.target.feature.properties)}function u(e,o){o.on({mouseover:a,mouseout:s,click:c})}function f(){if(navigator.geolocation)return navigator.geolocation.getCurrentPosition(d)}function d(e){g.setView(new L.LatLng(e.coords.latitude,e.coords.longitude),12)}function p(){g.setView(new L.LatLng(23.7,121),8)}function l(){S?$(".links").hide():$(".links").show(),S=!S}function h(){$(".rpi-info").show()}function m(){$(".rpi-info").hide()}var g,y,v,w,N={},b=null,S=!1,P=L.control(),k=e("geojson-minifier"),I=new k({precision:3});window.getLocation=f,window.resetView=p,window.toogleLinks=l,window.showRPIInfo=h,window.hideRPIInfo=m;$.getJSON("./data/river.geojson.packed",function(e){I.unpack(e);b=e,w=L.geoJson(b,{style:n,onEachFeature:u}),w.addTo(g),P.update()}),$(document).ready(function(){r(),$.getJSON("./data/river.json",function(e){v=e,console.log(e),o()})}),P.onAdd=function(e){return this._div=L.DomUtil.create("div","info"),this._div.innerHTML='<h4>流域圖層載入中 <i class="fa fa-spinner"></i></h4>',this._div},P.update=function(e){e&&e.name+"流域"in N?this._div.innerHTML="<h4>河川流域名稱："+(e?e.name+'</h4>平均污染指數RPI<sup class="rpi-q"><a href="#" onclick="showRPIInfo()">[?]</a></sup>：'+N[e.name+"流域"].RPI.toFixed(1):"</h4>請點選畫面區塊"):this._div.innerHTML="<h4>河川流域名稱："+(e?e.name+"</h4>流域內無測站資料":"</h4>請點選畫面區塊")};var R=L.control({position:"bottomright"});R.onAdd=function(e){for(var o=L.DomUtil.create("div","info legend"),t=["#684064","#D24C39","#E39941","#39AADD"],r=["嚴重污染（6+）","中度污染（3-6）","輕度污染（2-3）","未（稍）受污染（0-2）"],n=0;n<r.length;n++)o.innerHTML+='<i style="background:'+t[n]+'"></i>'+r[n]+"<br/>";return o}}()},{"geojson-minifier":2}],2:[function(e,o,t){function r(e){this.precision=e&&e.precision||0}r.prototype.pack=function(e){if(e&&e.features)for(var o=0;o<e.features.length;o++){var t=e.features[o].geometry;if(t)switch(t.type){case"Point":console.log("Skipping point geometries");break;case"LineString":t.coordinates=this.encodeGeometry(t.coordinates);break;case"MultiLineString":case"Polygon":t.coordinates=this.encodeGeometry(t.coordinates[0]);break;case"MultiPolygon":for(var r=0;r<t.coordinates.length;r++)t.coordinates[r]=this.encodeGeometry(t.coordinates[r][0])}else t=null}return JSON.stringify(e)},r.prototype.unpack=function(e){if(e&&e.features)for(var o=0;o<e.features.length;o++){var t=e.features[o].geometry;if(t)switch(t.type){case"Point":console.log("Skipping point geometries");break;case"LineString":var r=this.decodeGeometry(t.coordinates);t.coordinates=r;break;case"MultiLineString":case"Polygon":var r=this.decodeGeometry(t.coordinates);t.coordinates=[],t.coordinates.push(r);break;case"MultiPolygon":for(var n=0;n<t.coordinates.length;n++){var r=this.decodeGeometry(t.coordinates[n]);t.coordinates[n]=[],t.coordinates[n].push(r)}}else t=null}return JSON.stringify(e)},r.prototype.encodeGeometry=function(e){var o=[],t=e[0];o.push(t[0],t[1]);for(var r=1;r<e.length;r++){var n=this.toWholeNumber(e[r][0]),i=this.toWholeNumber(e[r][1]),a=n-this.toWholeNumber(t[0]),s=a<<1^a>>31;o.push(s),a=i-this.toWholeNumber(t[1]),s=a<<1^a>>31,o.push(s),t=e[r]}return o},r.prototype.decodeGeometry=function(e){var o=[],t=[];t.push(e[0],e[1]),o.push(t);for(var r=2;r<e.length;r+=2){var n=[e[r],e[r+1]],i=[],a=n[0]>>>1^-(1&n[0]),s=this.toWholeNumber(t[0])+a;i.push(this.fromWholeNumber(s)),a=n[1]>>>1^-(1&n[1]),s=this.toWholeNumber(t[1])+a,i.push(this.fromWholeNumber(s)),o.push(i),t=i}return o},r.prototype.toWholeNumber=function(e){return Math.floor(e*Math.pow(10,this.precision))},r.prototype.fromWholeNumber=function(e){return e/Math.pow(10,this.precision)},o.exports=r},{}]},{},[1]);