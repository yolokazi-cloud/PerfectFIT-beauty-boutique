export default function(e){const l=SEMICOLON.Core;if(l.initFunction({class:"has-plugin-toggles",event:"pluginTogglesReady"}),(e=l.getSelector(e,!1)).length<1)return!0;e.forEach(t=>{let o=t.getAttribute("data-speed")||300,e=t.getAttribute("data-state");"open"!=e?t.querySelector(".toggle-content").classList.add("d-none"):(t.classList.add("toggle-active"),l.slideDown(t.querySelector(".toggle-content"),Number(o))),t.querySelector(".toggle-header").onclick=e=>{t.classList.contains("toggle-active")?(t.classList.remove("toggle-active"),l.slideUp(t.querySelector(".toggle-content"),Number(o),()=>{t.querySelector(".toggle-content").classList.add("d-none")})):(t.classList.add("toggle-active"),t.querySelector(".toggle-content").classList.remove("d-none"),l.slideDown(t.querySelector(".toggle-content"),Number(o))),e.preventDefault()}})}