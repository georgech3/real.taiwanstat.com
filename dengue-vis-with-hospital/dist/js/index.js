"use strict";function getData(e){return new Promise(function(o,n){d3.csv(e,function(e){e?o(e):n(new Error("get data error"))})})}function getGPS(){return new Promise(function(e,o){navigator.geolocation?navigator.geolocation.getCurrentPosition(function(o){e(o)}):o()})}function urlParse(e,o){o||(o=location.href),e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var n="[\\?&]"+e+"=([^&#]*)",t=new RegExp(n),a=t.exec(o);return null==a?null:a[1]}window.innerWidth<=800&&window.innerHeight<=600&&window.alert("請開啟定位，才能正常瀏覽此網頁！");var map=L.map("map").setView([22.99,120.218],13),accessToken="pk.eyJ1IjoiYWJ6NTMzNzgiLCJhIjoiUkRleEgwVSJ9.rWFItANcHAZQ2U0ousK4cA",mapID="abz53378.0klc153h",today=new Date;L.tileLayer("https://api.tiles.mapbox.com/v4/"+mapID+"/{z}/{x}/{y}.png?access_token="+accessToken,{attribution:'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a><a rel="license" href="http://creativecommons.org/licenses/by-nc/3.0/nl/"><img alt="Creative Commons Licence" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/3.0/nl/80x15.png" /></a>.'}).addTo(map),getGPS().then(function(e){console.log(e);var o=e.coords.latitude,n=e.coords.longitude;map.setView([o,n],15),L.marker([o,n]).addTo(map).bindPopup("所在位置").openPopup(),L.circle([o,n],500,{stroke:!1,fillColor:"blue"}).addTo(map)})["catch"](function(){window.alert("此裝置不支援GPS")});var myIcon=L.icon({iconUrl:"./hospital1.png",iconSize:[42,42]});getData("./data/dengue105.csv").then(function(e){var o=0;return e.forEach(function(e){var n=new Date(e["確診日"]),t=432e6;today-n<t&&(o++,L.circle([e["緯度座標"],e["經度座標"]],200,{stroke:!1,fillColor:"red"}).addTo(map))}),o}).then(function(e){document.getElementsByClassName("leaflet-control-container")[0].innerHTML+='<div id="info">近五日內共有'+e+"個確診病例數</div>"})["catch"](function(e){console.error(e)}),getData("./data/eggs.csv").then(function(e){var o=0;return e.forEach(function(e){L.marker([e["緯度"],e["經度"]],{icon:myIcon}).addTo(map).bindPopup(e["醫療院所名稱"]+"<br/>"+e["電話"])}),o});