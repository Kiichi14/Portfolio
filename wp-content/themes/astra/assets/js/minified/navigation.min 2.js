var astraGetParents=function(e,t){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),a=t.length;0<=--a&&t.item(a)!==this;);return-1<a});for(var a=[];e&&e!==document;e=e.parentNode)(!t||e.matches(t))&&a.push(e);return a},getParents=function(e,t){console.warn("getParents() function has been deprecated since version 2.5.0 or above of Astra Theme and will be removed in the future. Use astraGetParents() instead."),astraGetParents(e,t)},astraToggleClass=function(e,t){e.classList.contains(t)?e.classList.remove(t):e.classList.add(t)},toggleClass=function(e,t){console.warn("toggleClass() function has been deprecated since version 2.5.0 or above of Astra Theme and will be removed in the future. Use astraToggleClass() instead."),astraToggleClass(e,t)};!function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var a=document.createEvent("CustomEvent");return a.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),a}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e)}();var astraTriggerEvent=function(e,t){var a=new CustomEvent(t,2<arguments.length&&void 0!==arguments[2]?arguments[2]:{});e.dispatchEvent(a)};!function(){function e(){var e=document.querySelector("body").style.overflow;document.querySelector("body").style.overflow="hidden";var t=window.innerWidth;document.querySelector("body").style.overflow=e;var a=astra.break_point,s=document.querySelectorAll(".main-header-bar-wrap");if(0<s.length)for(var n=0;n<s.length;n++)"DIV"==s[n].tagName&&s[n].classList.contains("main-header-bar-wrap")&&(a<t?(null!=r[n]&&r[n].classList.remove("toggled"),document.body.classList.remove("ast-header-break-point"),document.body.classList.add("ast-desktop"),astraTriggerEvent(document.body,"astra-header-responsive-enabled")):(document.body.classList.add("ast-header-break-point"),document.body.classList.remove("ast-desktop"),astraTriggerEvent(document.body,"astra-header-responsive-disabled")))}var r=document.querySelectorAll(".main-header-menu-toggle"),n={};e(),AstraToggleSubMenu=function(){var e,t=this.parentNode;t.classList.contains("ast-submenu-expanded")&&document.querySelector("header.site-header").classList.contains("ast-menu-toggle-link")&&(this.classList.contains("ast-menu-toggle")||(""===(e=t.querySelector("a").getAttribute("href"))&&"#"===e||(window.location=e)));for(var a=t.querySelectorAll(".menu-item-has-children"),s=0;s<a.length;s++){a[s].classList.remove("ast-submenu-expanded");var n=a[s].querySelector(".sub-menu, .children");null!==n&&(n.style.display="none")}for(var o=t.parentNode.querySelectorAll(".menu-item-has-children"),s=0;s<o.length;s++)if(o[s]!=t){o[s].classList.remove("ast-submenu-expanded");for(var r=o[s].querySelectorAll(".sub-menu"),l=0;l<r.length;l++)r[l].style.display="none"}t.classList.contains("menu-item-has-children")&&(astraToggleClass(t,"ast-submenu-expanded"),t.classList.contains("ast-submenu-expanded")?t.querySelector(".sub-menu").style.display="block":t.querySelector(".sub-menu").style.display="none")},AstraNavigationMenu=function(e){console.warn("AstraNavigationMenu() function has been deprecated since version 1.6.5 or above of Astra Theme and will be removed in the future.")},AstraToggleMenu=function(e){if(console.warn("AstraToggleMenu() function has been deprecated since version 1.6.5 or above of Astra Theme and will be removed in the future. Use AstraToggleSubMenu() instead."),0<e.length)for(var t=0;t<e.length;t++)e[t].addEventListener("click",AstraToggleSubMenu,!1)},AstraToggleSetup=function(){var e=document.querySelectorAll(".main-header-bar-navigation");if(0<r.length)for(var t,a=0;a<r.length;a++)if(r[a].setAttribute("data-index",a),n[a]||(n[a]=r[a],r[a].addEventListener("click",astraNavMenuToggle,!1)),void 0!==e[a])if(0<(t=document.querySelector("header.site-header").classList.contains("ast-menu-toggle-link")?e[a].querySelectorAll(".ast-header-break-point .main-header-menu .menu-item-has-children > .menu-link, .ast-header-break-point ul.main-header-menu .ast-menu-toggle"):e[a].querySelectorAll("ul.main-header-menu .ast-menu-toggle")).length)for(var s=0;s<t.length;s++)t[s].addEventListener("click",AstraToggleSubMenu,!1)},astraNavMenuToggle=function(e){e.preventDefault();var t=document.querySelectorAll(".main-header-bar-navigation"),e=this.getAttribute("data-index");if(void 0===t[e])return!1;for(var a=t[e].querySelectorAll(".menu-item-has-children"),s=0;s<a.length;s++){a[s].classList.remove("ast-submenu-expanded");for(var n=a[s].querySelectorAll(".sub-menu"),o=0;o<n.length;o++)n[o].style.display="none"}-1!==(this.getAttribute("class")||"").indexOf("main-header-menu-toggle")&&(astraToggleClass(t[e],"toggle-on"),astraToggleClass(r[e],"toggled"),t[e].classList.contains("toggle-on")?(t[e].style.display="block",document.body.classList.add("ast-main-header-nav-open")):(t[e].style.display="",document.body.classList.remove("ast-main-header-nav-open")))},document.body.addEventListener("astra-header-responsive-enabled",function(){var e=document.querySelectorAll(".main-header-bar-navigation");if(0<e.length)for(var t=0;t<e.length;t++){null!=e[t]&&(e[t].classList.remove("toggle-on"),e[t].style.display="");for(var a=e[t].getElementsByClassName("sub-menu"),s=0;s<a.length;s++)a[s].style.display="";for(var n=e[t].getElementsByClassName("children"),o=0;o<n.length;o++)n[o].style.display="";for(var r=e[t].getElementsByClassName("ast-search-menu-icon"),l=0;l<r.length;l++)r[l].classList.remove("ast-dropdown-active"),r[l].style.display=""}},!1),window.addEventListener("resize",function(){"INPUT"!==document.activeElement.tagName&&(e(),AstraToggleSetup())}),document.addEventListener("DOMContentLoaded",function(){var e,t;for(AstraToggleSetup(),e=document.querySelectorAll(".navigation-accessibility"),t=0;t<=e.length-1;t++)e[t]&&function(e){if(e){var t=e.getElementsByTagName("button")[0];if(void 0!==t||void 0!==(t=e.getElementsByTagName("a")[0])){var a=e.getElementsByTagName("ul")[0];if(void 0!==a){a.setAttribute("aria-expanded","false"),-1===a.className.indexOf("nav-menu")&&(a.className+=" nav-menu"),t.onclick=function(){-1!==e.className.indexOf("toggled")?(e.className=e.className.replace(" toggled",""),t.setAttribute("aria-expanded","false"),a.setAttribute("aria-expanded","false")):(e.className+=" toggled",t.setAttribute("aria-expanded","true"),a.setAttribute("aria-expanded","true"))};for(var s=a.getElementsByTagName("a"),n=a.getElementsByTagName("ul"),o=0,r=n.length;o<r;o++)n[o].parentNode.setAttribute("aria-haspopup","true");for(o=0,r=s.length;o<r;o++)s[o].addEventListener("focus",d,!0),s[o].addEventListener("blur",u,!0),s[o].addEventListener("click",c,!0)}else t.style.display="none"}}}(e[t])});var t,a,s;a=navigator.userAgent,s=a.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[],/trident/i.test(s[1])?t=/\brv[ :]+(\d+)/g.exec(a)||[]:"Chrome"===s[1]&&null!=(t=a.match(/\bOPR|Edge\/(\d+)/))||(s=s[2]?[s[1],s[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(t=a.match(/version\/(\d+)/i))&&s.splice(1,1,t[1]),t=document.body,"Safari"===s[0]&&s[1]<11&&t.classList.add("ast-safari-browser-less-than-11"));for(var o,l=document.getElementsByClassName("astra-search-icon"),i=0;i<l.length;i++)l[i].onclick=function(e){var t;this.classList.contains("slide-search")&&(e.preventDefault(),(t=this.parentNode.parentNode.parentNode.querySelector(".ast-search-menu-icon")).classList.contains("ast-dropdown-active")?(""!==(t.querySelector(".search-field").value||"")&&t.querySelector(".search-form").submit(),t.classList.remove("ast-dropdown-active")):(t.classList.add("ast-dropdown-active"),t.querySelector(".search-field").setAttribute("autocomplete","off"),setTimeout(function(){t.querySelector(".search-field").focus()},200)))};function c(){var e=this||"";if(e&&!e.classList.contains("astra-search-icon")&&-1!==new String(e).indexOf("#")){var t=e.parentNode;if(!document.body.classList.contains("ast-header-break-point")||document.querySelector("header.site-header").classList.contains("ast-menu-toggle-link")&&t.classList.contains("menu-item-has-children"))for(;-1===e.className.indexOf("nav-menu");)"li"===e.tagName.toLowerCase()&&-1!==e.className.indexOf("focus")&&(e.className=e.className.replace(" focus","")),e=e.parentElement;else{document.querySelector(".main-header-menu-toggle").classList.remove("toggled");var a=document.querySelector(".main-header-bar-navigation");a.classList.remove("toggle-on"),a.style.display="none";var s=document.querySelector(".menu-below-header-toggle"),t=document.querySelector(".ast-below-header"),a=document.querySelector(".ast-below-header-actual-nav");s&&t&&a&&(s.classList.remove("toggled"),t.classList.remove("toggle-on"),a.style.display="none");s=document.querySelector(".menu-above-header-toggle"),t=document.querySelector(".ast-above-header"),a=document.querySelector(".ast-above-header-navigation");s&&t&&a&&(s.classList.remove("toggled"),t.classList.remove("toggle-on"),a.style.display="none"),astraTriggerEvent(document.querySelector("body"),"astraMenuHashLinkClicked")}}}function d(){for(var e=this;-1===e.className.indexOf("nav-menu");)"li"===e.tagName.toLowerCase()&&(-1!==e.className.indexOf("focus")?e.className=e.className.replace(" focus",""):e.className+=" focus"),e=e.parentElement}function u(){var e=this||"";if(-1===new String(e).indexOf("#")||!document.body.classList.contains("ast-mouse-clicked"))for(;-1===e.className.indexOf("nav-menu");)"li"===e.tagName.toLowerCase()&&(-1!==e.className.indexOf("focus")?e.className=e.className.replace(" focus",""):e.className+=" focus"),e=e.parentElement}document.body.onclick=function(e){if(void 0!==e.target.classList&&!e.target.classList.contains("ast-search-menu-icon")&&0===astraGetParents(e.target,".ast-search-menu-icon").length&&0===astraGetParents(e.target,".ast-search-icon").length)for(var t=document.getElementsByClassName("ast-search-menu-icon"),a=0;a<t.length;a++)t[a].classList.remove("ast-dropdown-active")},"querySelector"in document&&"addEventListener"in window&&((o=document.body).addEventListener("mousedown",function(){o.classList.add("ast-mouse-clicked")}),o.addEventListener("keydown",function(){o.classList.remove("ast-mouse-clicked")}))}();