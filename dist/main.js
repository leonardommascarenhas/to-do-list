(()=>{"use strict";let e=[];class t{constructor(e,t="No date"){this.name=e,this.date=t}setName(e){this.name=e}getName(){return this.name}setDate(e){this.date=e}getDate(){return this.date}pushTask(){e.push(this.name),console.log(e)}}function n(e,t,n,a){let c=document.createElement("button");c.innerText=n,c.id=t,c.onclick=a,e.appendChild(c)}function a(){let e=document.getElementById("text").value,n=document.querySelector(".task-container"),a=document.createElement("div"),c=document.querySelector(".create-task-container");const d=new t;d.setName(e),d.pushTask(),c.innerHTML="",a.innerHTML=e,n.appendChild(a)}function c(){document.querySelector(".input-container").remove()}document.getElementById("create-task-btn").addEventListener("click",(function(){let e=document.querySelector(".create-task-container"),t=document.createElement("div"),d=document.createElement("div");d.classList.add("button-container"),t.classList.add("input-container"),n(d,"add-btn","ADD",a),n(d,"cancel-btn","cancel",c),function(e,t,n,a,c,d){let i=document.createElement("input");i.type="text",i.classList="input",i.id="text",i.name="input",i.placeholder="add task",e.appendChild(i)}(t),t.appendChild(d),e.appendChild(t)}))})();