(()=>{"use strict";class e{constructor(e,t="no value"){this.name=e,this.date=t}setName(e){this.name=e}getName(){return this.name}setDate(e){this.date=e}getDate(){return this.date}}let t=new class{constructor(){this.projeto=[]}storeArray(e){localStorage.setItem("myArray",JSON.stringify(e))}pushTask(t){let n=new e;return n.setName(t),this.projeto.push(n),this.storeArray(n),n}newTask(t,n){let a=new e;a.setName(t),a.setDate(n);let r=this.projeto.findIndex((e=>e.name===a.name));return this.projeto.splice(r,1,a),this.storeArray(this.projeto),a}setTask(t,n){let a=new e;return a.setName(t),a.setDate(n),this.projeto.push(a),a}removeTask(e){let t=this.projeto.indexOf(e);this.projeto.splice(t,1)}numberOfTask(){return this.projeto.length}};function n(e,t,n,a,r){let o=document.createElement("button");o.innerText=n,o.id=t,o.type=r,o.onclick=a,e.appendChild(o)}function a(e,t,n,a,r,o){let s=document.createElement("input");return s.type=t,s.classList=n,s.id=r,s.name=a,s.placeholder=o,e.appendChild(s),s}function r(e){e.preventDefault(),e.target.parentElement.remove(),t.removeTask(e),console.log(t)}function o(e,o,s){let c=document.createElement("div"),i=document.createElement("p");n(c,"delete-btn"," ",r,"radio"),i.innerHTML=o,c.classList.add("added-task"),c.appendChild(i);const l=a(c,"date","input","input","date","add task");l.value=s,l.addEventListener("change",(e=>{let n=e.target.value;t.newTask(i.innerHTML,n),console.log(t)})),e.appendChild(c)}function s(){let e=document.getElementById("text").value,n=document.querySelector(".task-container"),a=document.querySelector(".create-task-container");t.pushTask(e),console.log(t),a.innerHTML="",o(n,e)}function c(){document.querySelector(".input-container").remove()}document.getElementById("create-task-btn").addEventListener("click",(function(){let e=document.querySelector(".create-task-container");if(null==e.querySelector(".input-container")){let t=document.createElement("div"),r=document.createElement("div");r.classList.add("button-container"),t.classList.add("input-container"),n(r,"add-btn","ADD",s),n(r,"cancel-btn","cancel",c),a(t,"text","input","input","text","add task"),t.appendChild(r),e.appendChild(t)}else alert("you need to create the task first")})),document.addEventListener("DOMContentLoaded",(function(){if(null!==localStorage.getItem("myArray")){let e=document.querySelector(".task-container");JSON.parse(localStorage.getItem("myArray")).forEach((n=>{o(e,n.name,n.date),t.setTask(n.name,n.date)})),console.log(t)}}),!1)})();