(()=>{"use strict";function e(e,t,n){let d=document.createElement("button");d.innerText=t,d.id=n,e.appendChild(d)}let t=document.getElementById("create-task-btn");document.getElementById("add-task-btn"),t.addEventListener("click",(function(){let t=document.querySelector(".toDo-container"),n=document.createElement("div"),d=document.createElement("div");!function(e,t,n,d,c,a){let l=document.createElement("input");l.type="text",l.className="input",l.id="input",l.placeholder="Add a task",l.name="input",e.appendChild(l)}(n),e(d,"Add","add-task-btn"),e(d,"cancel","cancel-task-btn"),n.appendChild(d),t.appendChild(n)}))})();