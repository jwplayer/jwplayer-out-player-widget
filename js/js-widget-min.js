function outPlayerWidget(e){function t(t){function i(t){var i=e.playlist,n=new XMLHttpRequest;n.open("GET",i,!0),n.onreadystatechange=function(){if(4===n.readyState&&n.status>=200){var e=JSON.parse(n.responseText);t(e)}},n.send()}function n(i){var n=[],s=document.getElementById(e.widgetDivId);s.classList.add(e.widgetLayout);var l=s.querySelector(".jw-widget-content");i.playlist.forEach(function(t,i){n.push("<div id='"+e.widgetLayout+"-item-"+i+"' data-mediaid='"+t.mediaid+"' class='jw-widget-item'><div class='jw-content-image'><img src='"+t.image+"'/></div><div class='jw-content-title'>"+t.title+"</div></div>"),l.insertAdjacentHTML("beforeend",n[i])}),t(n)}i(n)}function i(){t(function(t){function i(e){e.scrollIntoView({behavior:"smooth"})}function n(){if("spotlight"===y){if("large"===w)return t.length-3;if("medium"===w)return t.length-2;if("small"===w)return t.length-1}else if("shelf"===y){var e;for("large"===w?e=4:"medium"===w?e=3:"small"===w&&(e=2);t.length>0;)o.push(t.splice(0,e));return o.length-1}}function s(e){if(d+=e,"spotlight"===y){b.classList.remove("spotlight"),b.removeChild(S);b=document.getElementById(y+"-item-"+d),b.classList.add("spotlight"),b.append(S),S.classList.add("fade")}}var l,d=0,a=0,o=[],r=document.getElementById(e.widgetDivId),c=document.getElementById(e.videoPlayerId),u=(document.querySelector(".jw-"+y),r.querySelector(".jw-widget-content")),f=r.querySelector(".next"),g=r.querySelector(".previous"),m=r.querySelectorAll(".icon"),v=r.querySelectorAll(".jw-widget-item"),p=jwplayer(c),y=e.widgetLayout||"spotlight",w=e.widgetSize||"large",h=e.textColor||"#fff",L=e.backgroundColor||"#000",j=e.iconColor||"#fff",E=e.header||"Discover More Videos";if(r.classList.add(w),r.querySelector(".jw-widget-title").innerText=E,r.style.backgroundColor=L,r.style.color=h,m.forEach(function(e){e.style.fill=j}),v.forEach(function(e){e.addEventListener("click",function(){var t="https://cdn.jwplayer.com/v2/media/"+e.dataset.mediaid;p.load(t),p.getViewable()||i(document.getElementById(c.id)),p.on("playlistItem",function(){p.play()})})}),"spotlight"===y){var S=document.createElement("div");S.innerHTML='<svg width="477.9px" height="501.1px" viewBox="0 0 477.9 501.1" style="enable-background:new 0 0 477.9 501.1;" xml:space="preserve" fill="#fff"><g transform="translate(887 1706)"><path d="M-875.6-1206.4c-3.1,2.4-7.5,1.8-9.9-1.3c-1.2-1.6-1.7-3.6-1.4-5.5v-484.5c-0.7-3.8,1.9-7.5,5.7-8.2 c2-0.3,4,0.2,5.5,1.4l461.9,243.1c6.2,3.3,6.2,8.6,0,11.9L-875.6-1206.4z"/></g></svg>';var b=r.querySelector(".jw-widget-item");l=document.querySelector(".jw-widget-item").offsetWidth+10,b.classList.add("spotlight"),S.src="src/img/play.svg",S.classList.add("jw-play-button"),b.append(S)}else"shelf"===y&&("large"===w?l=960:"medium"===w?l=720:"small"===w&&(l=380));f.addEventListener("click",function(){return d===n()?(f.classList.add("disabled"),!1):(f.classList.remove("disabled"),g.classList.remove("disabled"),a-=l,u.style.left=a+"px",s(1),void 0)}),g.addEventListener("click",function(){return 1>=d&&g.classList.add("disabled"),d>0?(a+=l,u.style.left=a+"px",s(-1),void 0):(g.classList.add("disabled"),!1)})})}i()}!function(){var e=new XMLHttpRequest;e.onreadystatechange=function(){if(4===e.readyState&&e.status>=200){var t=JSON.parse(e.responseText),i=t.widgets;i.forEach(function(e){outPlayerWidget(e)})}},e.open("GET","./src/config.json",!0),e.send()}();
