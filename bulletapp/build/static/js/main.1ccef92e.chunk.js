(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABWUlEQVRoge2ZMU4DMRBF/yBaEIroUqcO10BI5BachYaDpEifI1ByBjZBAqWJL/ApshEC1iOvF+/EaF63GuvPfI3XXnsBx3F6QXJB8oPkO8n7U9NLSbjlFxtrPclIyG8CIr01/lLvbEjyU0A1QHJGckUyHHvcMWYQil4guSQ51WqMtovkDMAzgIkmMAI7ADcisu0Kah14hH3xAHAN4CkW1DoQAFyUqCiDvYhcdQU0A7/mpyWx1el/r0I14Aasqd7AeerAod88fUldBavvgBuwxg1Y4wasKW6A5B3JjXIoa0jelkisHv166DQJJ8vX3PzJ54HcnTjV/E/91Pz+DljjBqxxAwmkXNg2ueJjGHiAbqJpx2RRfB/IxfeBWqjegHYrEQBcHh+M70r3sYDWgXWBQnKJ1qKtQlMALzjcz1uyAzAXkbeuYLQD7R+ROYAlDtNpbEKbO1q84zjAJzA2VroXES/dAAAAAElFTkSuQmCC"},22:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACI0lEQVRoge3WP0scQRjH8WctVAjYWNra+AYkwl2jhZYGbBWRJBBIkbcgFlY2BgwEtNAiKYN/CxshXVIF1DLEQjBdQnJgiPhNkdk4LnNzc97MPmfYX7c3czfPZ58ZbkSqVKlS5T4l01gUyERkSkSmRaQmIkMi0iciFyLySUT2RORNlmU/NeoLCjAGfKR1vgLPtOt1BlgAfjmK/gZsA2+Bz4WxLaBPu/Z/AXqAAwdiCxgozHsC/LbmbGoWXgeOgTNg1nzW78AMmrEa8AjoNc/vC/OeaiDGgYZVxHW+3x2YQ2DPej4BXgNXBcgF8EATEYIJzWNtRCzMuzIQdeBHQDHXwHPznV5gpw3Il9QIXyeOgCVu7/m7duZSC3EA9Jt5x4Wxu2C+ayD2LcSLJnPaxZymQPjOhN2JZggbE3pmXsVG+Dqxi7lSBCBsTEhnJmMifJ0I2U4+jK8zH/h7a46C8HVim5vrRbsIG+PqzCUwGgVhfnwxIcKHmY+GsDDLjsUHIiFcmJ5YhY8BM8AwZo86MKvASiSEjZmLhSieifX8DTkwKXKeAqGB6ewPEBhpgigT0wDqnUIy4GWLhTYszFICxERHiC7AxEMoYuIjFDDpECVi0iNKwJSHSIgpH5EAo4eIiNFH5OkA0z2IPAaz1gKzzs2teREY167bmcDODGvXGZQAzIx2jcHxbLMG8FC7vrbi6Ez3HezQWJj7i8hjMCPadVSpUuU/zB9EqVlGnBLRRwAAAABJRU5ErkJggg=="},23:function(e,t,a){e.exports=a(36)},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(11),o=a.n(r),i=a(8),c=a(10),l=a(12),u=(a(32),new Date),d=function(e,t){for(var a,n=new Date(e,t+1,0).getDate(),s=new Array(7),r=0;r<s.length;r++)s[r]=new Array(7).fill("");s[0]=["S","M","T","W","T","F","S"];var o=1;a=new Date(e,t,1).getDay(),s[o][a]=1;for(var i=2;i<=n;i++)(a=new Date(e,t,i).getDay())-1<0&&(o+=1),s[o][a]=i;return s},h=function(e,t,a){var n=[],s=new Date(e,t+1,0).getDate(),r=["SUN","MON","TUE","WED","THU","FRI","SAT"],o=a,i=new Date(e,t,o).getDay();n[0]={year:e,month:t,date:o,day:r[i]};for(var c=1;c<5;c++)(o+=1)>s&&(o=1,(t+=1)>11&&(t=0,e+=1)),i=new Date(e,t,o).getDay(),n[c]={year:e,month:t,date:o,day:r[i]};return n},m=function(e,t){for(var a=e.year,n=e.month,s=e.date,r=[],o=new Date(a,n+1,0).getDate(),i=["SUN","MON","TUE","WED","THU","FRI","SAT"],c=s,l=new Date(a,n,c).getDay(),u=0;u<t;u++)(c+=1)>o&&(n+=1,o=new Date(a,n+1,0).getDate(),c=1,n>11&&(n=0,a+=1)),l=new Date(a,n,c).getDay(),r[u]={year:a,month:n,date:c,day:i[l]};return r},p=function(e,t){for(var a=e.year,n=e.month,s=e.date,r=[],o=(new Date(a,n+1,0).getDate(),["SUN","MON","TUE","WED","THU","FRI","SAT"]),i=s,c=new Date(a,n,i).getDay(),l=1;l<=t;l++)(i-=1)<1&&(n-=1,i=new Date(a,n+1,0).getDate(),n<0&&(n=11,a-=1)),c=new Date(a,n,i).getDay(),r[t-l]={year:a,month:n,date:i,day:o[c]};return r},y=Object(c.b)({bookmark:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{bookmarkKey:!1,bookmarkMonth:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_KEY_BTN":return Object.assign({},e,{bookmarkKey:!e.bookmarkKey});case"TOGGLE_MONTH_BTN":return Object.assign({},e,{bookmarkMonth:!e.bookmarkMonth});default:return e}},date:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{firstDay:h(u.getFullYear(),u.getMonth(),u.getDate())[0],lastDay:h(u.getFullYear(),u.getMonth(),u.getDate()).slice(-1)[0],calender:d(u.getFullYear(),u.getMonth()),year:u.getFullYear(),month:u.getMonth(),date:u.getDate(),day:u.getDay(),dates:h(u.getFullYear(),u.getMonth(),u.getDate())},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_MONTH":return Object.assign({},e,{calender:d(u.getFullYear(),t.month),month:t.month,dates:h(e.year,t.month,e.date),firstDay:h(e.year,t.month,e.date)[0],lastDay:h(e.year,t.month,e.date).slice(-1)[0]});case"CHANGE_YEAR":return Object.assign({},e,{calender:d(t.year,u.getMonth()),year:t.year,dates:h(t.year,e.month,e.date),firstDay:h(t.year,e.month,e.date)[0],lastDay:h(t.year,e.month,e.date).slice(-1)[0]});case"CHANGE_DATE":return Object.assign({},e,{calender:d(t.year,t.month),year:t.year,month:t.month,date:t.date,day:t.day,dates:h(t.year,t.month,t.date),firstDay:h(t.year,t.month,t.date)[0],lastDay:h(t.year,t.month,t.date).slice(-1)[0]});case"LOAD_MORE_AFTER":var a=m(e.lastDay,5),n=[].concat(Object(l.a)(e.dates),Object(l.a)(a));return Object.assign({},e,{dates:n,lastDay:a.slice(-1)[0]});case"LOAD_MORE_BEFORE":var s=p(e.firstDay,5),r=[].concat(Object(l.a)(s),Object(l.a)(e.dates));return Object.assign({},e,{dates:r,firstDay:s[0]});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{userId:0,userName:"system"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOGIN":return Object.assign({},e,{userId:t.userId,userName:t.userName});case"USER_LOGOUT":return Object.assign({},e,{userId:0,userName:"system"});default:return e}}}),g=(a(35),a(2)),f=a(3),k=a(6),E=a(4),v=a(1),b=a(5),O=a(18),N="http://54.164.55.232:3001/bulletapp",A=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(k.a)(this,Object(E.a)(t).call(this,e))).handleClick=function(e){a.node.contains(e.target)||a.setState({openBulletList:!1})},a.openBulletList=function(){a.setState({openBulletList:!0})},a.state={openBulletList:!1},a.openBulletList=a.openBulletList.bind(Object(v.a)(a)),a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentWillMount",value:function(){document.addEventListener("mousedown",this.handleClick)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClick)}},{key:"handleBulletChange",value:function(e,t){var a=this,n=this.props,s=n.date,r=n.user,o=this.props.date.month+1;"tasks"==this.props.taskType?fetch("".concat(N,"/tasks/").concat(r.userId,"/").concat(s.year,"/").concat(o,"/").concat(s.date,"/bulletType"),{method:"PUT",body:JSON.stringify({bulletType:e,id:t}),headers:{"Content-Type":"application/json"}}).then((function(){a.setState({openBulletList:!1}),a.props.changeMissionType(t,e)})):fetch("".concat(N,"/").concat(this.props.taskType,"/").concat(r.userId,"/").concat(s.year,"/").concat(o,"/bulletType"),{method:"PUT",body:JSON.stringify({bulletType:e,id:t}),headers:{"Content-Type":"application/json"}}).then((function(){a.setState({openBulletList:!1}),a.props.changeMissionType(t,e)}))}},{key:"render",value:function(){var e=this,t=["\xb7","x",">","<","!","#","-"],a=this.props.task;return s.a.createElement("span",{ref:function(t){return e.node=t}},s.a.createElement("span",{className:"bulletType",onClick:this.openBulletList},t[a.bulletType]),this.state.openBulletList?s.a.createElement("div",{className:"bulletList"},t.map((function(t,n){return s.a.createElement("div",{key:n,value:n,onClick:function(){return e.handleBulletChange(n,a.id)}},t)}))):s.a.createElement(s.a.Fragment,null))}}]),t}(s.a.Component),T=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(k.a)(this,Object(E.a)(t).call(this,e))).handleClick=function(e){a.node.contains(e.target)||a.state.delete||a.setState({status:"view"})},a.changeStatus=function(e){a.setState({status:e})},a.state={status:a.props.initstatus,delete:!1},a.handleEdit=a.handleEdit.bind(Object(v.a)(a)),a.handleEditChange=a.handleEditChange.bind(Object(v.a)(a)),a.handleMissionBulletType=a.handleMissionBulletType.bind(Object(v.a)(a)),a.handleDelete=a.handleDelete.bind(Object(v.a)(a)),a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentWillMount",value:function(){document.addEventListener("mousedown",this.handleClick)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClick)}},{key:"handleEditChange",value:function(e,t){var a=this.props.task;a.status="view",a.content=e.target.value,this.props.updateTask(t,a),13===e.which&&this.setState({status:"view"})}},{key:"handleEdit",value:function(e,t){e.preventDefault();var a=this.props,n=a.date,s=a.user,r=this.props.date.month+1;if("tasks"==this.props.taskType){fetch("".concat(N,"/tasks/").concat(s.userId,"/").concat(n.year,"/").concat(r,"/").concat(n.date),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:this.props.task.content,id:t}),credentials:"include"});var o=this.props.task;o.status="view",this.setState({status:"view"}),this.props.updateTask(t,o)}else{fetch("".concat(N,"/").concat(this.props.taskType,"/").concat(s.userId,"/").concat(n.year,"/").concat(r),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:this.props.task.content,id:t}),credentials:"include"});var i=this.props.task;i.status="view",this.setState({status:"view"}),this.props.updateTask(t,i)}}},{key:"handleDelete",value:function(e){var t=this;this.changeStatus("hide"),this.setState({delete:!0});var a=this.props,n=a.date,s=a.user,r=this.props.date.month+1;"tasks"==this.props.taskType?fetch("".concat(N,"/tasks/").concat(s.userId,"/").concat(n.year,"/").concat(r,"/").concat(n.date),{method:"DELETE",body:JSON.stringify({id:e}),headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(e){return e.json()})).then((function(a){if(a.deleted){var n=Object.assign({},t.props.task);n.status="hide",t.props.updateTask(e,n)}})).catch((function(e){return console.log(e)})):fetch("".concat(N,"/").concat(this.props.taskType,"/").concat(s.userId,"/").concat(n.year,"/").concat(r),{method:"DELETE",body:JSON.stringify({id:e}),headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(){var a=Object.assign({},t.props.task);a.status="hide",t.props.updateTask(e,a)})).catch((function(e){return console.log(e)}))}},{key:"handleMissionBulletType",value:function(e,t){var a=this.props.task;a.bulletType=t,this.props.updateTask(e,a)}},{key:"render",value:function(){var e,t=this,a=this.props.task;return e="hide"==this.state.status?null:"view"==this.state.status?s.a.createElement("li",{className:"listOfTask"},s.a.createElement(A,{task:a,date:this.props.date,taskType:this.props.taskType,user:this.props.user,changeMissionType:this.handleMissionBulletType}),6!=a.bulletType?s.a.createElement("span",{onClick:function(){return t.changeStatus("edit")}},a.content):s.a.createElement("span",{className:"lineThrough",onClick:function(){return t.handelMissionStatus(a.id)}},a.content)):s.a.createElement("li",{className:"listOfTask, taskEditLi"},s.a.createElement(A,{task:a,date:this.props.date,taskType:this.props.taskType,user:this.props.user,changeMissionType:this.handleMissionBulletType}),s.a.createElement("form",{className:"myForm",onSubmit:function(e){return t.handleEdit(e,a.id)}},s.a.createElement("input",{className:"myInput",type:"text",value:a.content,onChange:function(e){return t.handleEditChange(e,a.id)}})),s.a.createElement("span",{className:"delete",onClick:function(){return t.handleDelete(a.id)}},"x")),s.a.createElement("div",{ref:function(e){return t.node=e}},e)}}]),t}(s.a.Component),j=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(k.a)(this,Object(E.a)(t).call(this,e))).handleClick=function(e){a.node.contains(e.target)||a.setState({add:!1})},a.state={add:!1,newMission:""},a.handleAdd=a.handleAdd.bind(Object(v.a)(a)),a.handleChange=a.handleChange.bind(Object(v.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentWillMount",value:function(){document.addEventListener("mousedown",this.handleClick)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClick)}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.props,n=a.date,s=a.user,r=n.month+1;"tasks"==this.props.taskType?fetch("".concat(N,"/tasks/").concat(s.userId,"/").concat(n.year,"/").concat(r,"/").concat(n.date),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:this.state.newMission,bulletType:0})}).then((function(e){return e.json()})).then((function(e){var a=Object(O.a)({},e,{status:"view",bulletList:!1});t.setState({add:!1,newMission:""}),t.props.addNewTask(e.id,a)})).catch((function(e){return console.log(e)})):fetch("".concat(N,"/").concat(this.props.taskType,"/").concat(s.userId,"/").concat(n.year,"/").concat(r),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:this.state.newMission,bulletType:0})}).then((function(e){return e.json()})).then((function(e){var a=Object(O.a)({},e,{status:"view",bulletList:!1});t.setState({add:!1,newMission:""}),t.props.addNewTask(e.id,a)})).catch((function(e){return console.log(e)}))}},{key:"handleChange",value:function(e){this.setState({newMission:e.target.value})}},{key:"handleAdd",value:function(){this.setState({add:!0})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{ref:function(t){return e.node=t}},this.state.add?s.a.createElement("li",{key:this.props.date.date,className:"taskEditLi"},s.a.createElement("div",{className:"flex"},s.a.createElement("span",{className:"bulletArea bulletArea_add"},s.a.createElement("span",{className:"bulletType"},"\xb7")),s.a.createElement("form",{className:"myForm",onSubmit:this.handleSubmit},s.a.createElement("input",{className:"myInput",type:"text",value:this.state.newMission,onChange:this.handleChange})))):s.a.createElement("li",{key:this.props.date.date},s.a.createElement("div",{onClick:this.handleAdd},"+")))}}]),t}(s.a.Component),C=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(k.a)(this,Object(E.a)(t).call(this,e))).handleAddTask=function(e,t){var n=Object.assign({},a.state.tasks);n[e]=t,a.setState({tasks:n})},a.handleUpdateTask=function(e,t){var n=Object.assign({},a.state.tasks);n[e]=t,a.setState({tasks:n})},a.state={add:!1,newMission:""},a.handleUpdateTask=a.handleUpdateTask.bind(Object(v.a)(a)),a.handleAddTask=a.handleAddTask.bind(Object(v.a)(a)),a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.date,a=e.user;this.node=s.a.createRef();var n=this,r=t.month+1,o={};"tasks"==this.props.taskType?fetch("".concat(N,"/tasks/").concat(a.userId,"/").concat(t.year,"/").concat(r,"/").concat(t.date),{credentials:"include"}).then((function(e){return e.json()})).then((function(e){for(var t=0;t<e.length;t++)o[e[t].id]=e[t],o[e[t].id].bulletList=!1,o[e[t].id].status="view";n.setState({tasks:o})})):fetch("".concat(N,"/").concat(this.props.taskType,"/").concat(a.userId,"/").concat(t.year,"/").concat(r),{credentials:"include"}).then((function(e){return e.json()})).then((function(e){for(var t=0;t<e.length;t++)o[e[t].id]=e[t],o[e[t].id].bulletList=!1,o[e[t].id].status="view";n.setState({tasks:o})}))}},{key:"componentDidUpdate",value:function(e,t){if(e.date.month!=this.props.date.month||e.date.year!=this.props.date.year||e.user.userId!=this.props.user.userId){var a=this.props,n=a.date,r=a.user;this.node=s.a.createRef();var o=this,i=n.month+1,c={};"tasks"==this.props.taskType?fetch("".concat(N,"/tasks/").concat(r.userId,"/").concat(n.year,"/").concat(i,"/").concat(n.date),{credentials:"include"}).then((function(e){return e.json()})).then((function(e){for(var t=0;t<e.length;t++)c[e[t].id]=e[t],c[e[t].id].bulletList=!1,c[e[t].id].status="view";o.setState({tasks:c})})):fetch("".concat(N,"/").concat(this.props.taskType,"/").concat(r.userId,"/").concat(n.year,"/").concat(i,"/"),{credentials:"include"}).then((function(e){return e.json()})).then((function(e){for(var t=0;t<e.length;t++)c[e[t].id]=e[t],c[e[t].id].bulletList=!1,c[e[t].id].status="view";o.setState({tasks:c})}))}}},{key:"render",value:function(){var e=[];if(this.state.tasks)for(var t in this.state.tasks){var a=this.state.tasks[t];e.push(s.a.createElement(T,{key:t,initstatus:a.status,taskType:this.props.taskType,task:a,date:this.props.date,user:this.props.user,updateTask:this.handleUpdateTask}))}else e=null;return s.a.createElement("div",{className:"tasksStyle"},s.a.createElement("div",{className:"title"},this.props.title),s.a.createElement("ul",{className:"tasksList"},e,s.a.createElement(j,{taskType:this.props.taskType,date:this.props.date,addNewTask:this.handleAddTask,user:this.props.user})))}}]),t}(s.a.Component),S=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(k.a)(this,Object(E.a)(t).call(this,e))).state={offsetWidth:0},a.myInput=s.a.createRef(),a.handleOnScroll=a.handleOnScroll.bind(Object(v.a)(a)),a.resizeDetection=a.resizeDetection.bind(Object(v.a)(a)),a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"resizeDetection",value:function(){this.setState({offsetWidth:this.myInput.current.offsetWidth})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resizeDetection);this.setState({offsetWidth:this.myInput.current.offsetWidth})}},{key:"handleOnScroll",value:function(e){var t=e.target.scrollLeft;t<0&&this.props.loadUnshift();var a=this.state.offsetWidth;270*this.props.dates.length-(t+a)<100&&this.props.loadMore()}},{key:"render",value:function(){var e=["JAN","FEB","MAR","APR","MAY","JUNE","JULY","AUG","SEP","OCT","NOV","DEC"],t=this.props,a=t.dates,n=t.date,r=t.user,o=280*a.length;return s.a.createElement("div",{className:"mainArea",onScroll:this.handleOnScroll,ref:this.myInput},s.a.createElement("div",{className:"monthTasks"},s.a.createElement("div",{className:"monthSquare"},e[a[0].month]),s.a.createElement("div",{className:"tasksContainer",style:{width:o+"px"}},s.a.createElement("div",{style:{opacity:0,height:"0px"}},"123"),a.map((function(t){var a=t.day+" "+t.date,o=""+t.year+t.month+t.date;return t.date==n.date&&t.month==n.month&&t.year==n.year?s.a.createElement("div",{key:o,className:"dateTasksDiv chooseDay"},s.a.createElement(C,{title:a,date:t,taskType:"tasks",user:r})):1==t.date?s.a.createElement("div",{key:o,className:"dateTasksDiv"},s.a.createElement("div",{className:"monthSquare test"},e[t.month]),s.a.createElement(C,{title:a,date:t,taskType:"tasks",user:r})):s.a.createElement("div",{key:o,className:"dateTasksDiv"},s.a.createElement(C,{title:a,date:t,taskType:"tasks",user:r}))})))))}}]),t}(n.Component),D=Object(i.b)((function(e,t){return{date:e.date,dates:e.date.dates,user:e.user}}),(function(e,t){return{addTask:function(t){e({type:"ADD_TASK",content:"ownProps.content"})},handleScroll:function(e){console.log(e.target.scrollLeft)},handleClick:function(e){console.log(e.target)},loadMore:function(){e({type:"LOAD_MORE_AFTER"})},loadUnshift:function(){e({type:"LOAD_MORE_BEFORE"})}}}))(S),w=a(21),L=a.n(w),M=a(22),B=a.n(M),I=function(e){return s.a.createElement("div",{className:"bookmarkBtn bookmarkBtnKey",onClick:e.onClick},s.a.createElement("img",{src:L.a,alt:"planner_logo"}))},U=function(e){return s.a.createElement("div",{className:"bookmarkBtn bookmarkBtnMonth",onClick:e.onClick},s.a.createElement("img",{src:B.a,alt:"bullet_logo"}))},R=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(k.a)(this,Object(E.a)(t).call(this,e))).handleClick=function(e){a.node.contains(e.target)||a.setState({openList:!1})},a.state={openList:!1},a.selectMonth=a.selectMonth.bind(Object(v.a)(a)),a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentWillMount",value:function(){document.addEventListener("mousedown",this.handleClick)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClick)}},{key:"selectMonth",value:function(e){this.props.changeMonth(e),this.setState({openList:!1})}},{key:"render",value:function(){var e=this;return s.a.createElement("span",{className:"relative",ref:function(t){return e.node=t}},s.a.createElement("div",{className:"monthItem",onClick:function(){return e.setState({openList:!0})}},this.props.title),s.a.createElement("div",{className:"monthList"},this.state.openList?["JAN","FEB","MAR","APR","MAY","JUNE","JULY","AUG","SEP","OCT","NOV","DEC"].map((function(t,a){return s.a.createElement("div",{key:a,className:"monthItem",onClick:function(){return e.selectMonth(a)}},t)})):s.a.createElement(s.a.Fragment,null)))}}]),t}(s.a.Component),F=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(k.a)(this,Object(E.a)(t).call(this,e))).handleClick=function(e){a.node.contains(e.target)||a.setState({openList:!1})},a.state={openList:!1},a.selectYear=a.selectYear.bind(Object(v.a)(a)),a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentWillMount",value:function(){document.addEventListener("mousedown",this.handleClick)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClick)}},{key:"selectYear",value:function(e){this.props.changeYear(e),this.setState({openList:!1})}},{key:"render",value:function(){for(var e=this,t=[],a=0;a<20;a++)t[a]=2020+a;return s.a.createElement("span",{className:"relative",ref:function(t){return e.node=t}},s.a.createElement("div",{className:"monthItem",onClick:function(){return e.setState({openList:!0})}},this.props.title),s.a.createElement("div",{className:"monthList"},this.state.openList?t.map((function(t,a){return s.a.createElement("div",{key:a,className:"monthItem",onClick:function(){return e.selectYear(t)}},t)})):s.a.createElement(s.a.Fragment,null)))}}]),t}(s.a.Component),Y=function(e){function t(){return Object(g.a)(this,t),Object(k.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this,t=this.props.calender.map((function(t,a){return s.a.createElement("div",{key:a},t.map((function(t,n){var r=""+e.props.date.year+e.props.date.month+t,o=""+a+n;return r==""+e.props.date.year+e.props.date.month+e.props.date.date?s.a.createElement("div",{key:o,className:"chooseDate"},t):Number.isInteger(t)?s.a.createElement("div",{key:o,className:"dateInCalender",onClick:function(){return e.props.onClick(e.props.date.year,e.props.date.month,t)}},t):s.a.createElement("div",{key:o},t)})))}));return s.a.createElement("div",{className:"tasksStyle"},s.a.createElement("div",{className:"calenderTitle"},s.a.createElement(R,{title:this.props.calenderTitle.month,changeMonth:this.props.changeMonth}),s.a.createElement(F,{title:this.props.calenderTitle.year,changeYear:this.props.changeYear})),s.a.createElement("div",{className:"calender"},t))}}]),t}(s.a.Component),P=function(e){var t=s.a.createElement("div",{className:"keyBookmark"},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("span",null,"."),s.a.createElement("span",null,"Task")),s.a.createElement("li",null,s.a.createElement("span",null,"x"),s.a.createElement("span",null,"Finished")),s.a.createElement("li",null,s.a.createElement("span",null,">"),s.a.createElement("span",null,"Migrated")),s.a.createElement("li",null,s.a.createElement("span",null,"<"),s.a.createElement("span",null,"Planned")),s.a.createElement("li",null,s.a.createElement("span",null,"!"),s.a.createElement("span",null,"Idea")),s.a.createElement("li",null,s.a.createElement("span",null,"#"),s.a.createElement("span",null,"Event")),s.a.createElement("li",null,s.a.createElement("span",null,"-"),s.a.createElement("span",null,"Delete")))),a=s.a.createElement("div",{className:"monthBookmark"},s.a.createElement(Y,{calender:e.calender,changeYear:e.changeYear,changeMonth:e.changeMonth,calenderTitle:e.calenderTitle,date:e.date,year:"2019",onClick:function(t,a,n){return e.chooseDate(t,a,n)}}),s.a.createElement(C,{title:"MISSIONS",date:e.date,taskType:"missions",user:e.user}),s.a.createElement(C,{title:"NOTES",date:e.date,taskType:"notes",user:e.user})),n=s.a.createElement("div",{className:"monthBookmarkEmpty"});return s.a.createElement("div",{className:"bookmark"},s.a.createElement(I,{onClick:e.toggleKeyBtn}),s.a.createElement(U,{onClick:e.toggleMonthBtn}),e.bookmarkKey?t:null,e.bookmarkMonth?a:n)},J=Object(i.b)((function(e,t){return{bookmarkKey:e.bookmark.bookmarkKey,bookmarkMonth:e.bookmark.bookmarkMonth,date:e.date,calender:e.date.calender,calenderTitle:{month:(e.date.year,a=e.date.month,["JAN","FEB","MAR","APR","MAY","JUNE","JULY","AUG","SEP","OCT","NOV","DEC"][a]),year:e.date.year},tasksDateTitle:e.dates,tasks:e.tasks,user:e.user};var a}),(function(e,t){return{chooseDate:function(t,a,n){e(function(e,t){return{type:"GET_CALENDER",year:e,month:t}}(t,a)),e(function(e,t,a){return{type:"CHANGE_DATE",year:e,month:t,date:a}}(t,a,n))},addMission:function(t){e(function(e){return{type:"ADD_MISSION",content:e}}(t))},toggleKeyBtn:function(){e({type:"TOGGLE_KEY_BTN"})},toggleMonthBtn:function(){e({type:"TOGGLE_MONTH_BTN"})},changeMonth:function(t){e(function(e){return{type:"CHANGE_MONTH",month:e}}(t))},changeYear:function(t){e(function(e){return{type:"CHANGE_YEAR",year:e}}(t))}}}))(P),W=a(13),G=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(k.a)(this,Object(E.a)(t).call(this,e))).state={error:!1,openregist:!1,openlogin:!1,userName:"guest",userPassword:"guest",openLogout:!0},a.openRegister=a.openRegister.bind(Object(v.a)(a)),a.openLogin=a.openLogin.bind(Object(v.a)(a)),a.handleChangeInput=a.handleChangeInput.bind(Object(v.a)(a)),a.handleLogin=a.handleLogin.bind(Object(v.a)(a)),a.handleRegister=a.handleRegister.bind(Object(v.a)(a)),a.closeForm=a.closeForm.bind(Object(v.a)(a)),a.userLogout=a.userLogout.bind(Object(v.a)(a)),a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(N,"/init"),{credentials:"include"}).then((function(e){return e.json()})).then((function(t){t.logined&&(e.props.userLogin(t.id,t.userName),e.setState({openlogin:!1}))}))}},{key:"closeForm",value:function(){this.setState({error:!1,openregist:!1,openlogin:!1})}},{key:"openLogin",value:function(){this.setState({error:!1,message:"",openregist:!1,openlogin:!0})}},{key:"openRegister",value:function(){this.setState({error:!1,message:"",openregist:!0,openlogin:!1})}},{key:"handleChangeInput",value:function(e,t){this.setState(Object(W.a)({},t,e.target.value))}},{key:"handleLogin",value:function(e){var t=this;e.preventDefault(),""==this.state.userName||""==this.state.userPassword?this.setState({error:!0,message:"\u8acb\u8f38\u5165\u5e33\u865f\u53ca\u5bc6\u78bc"}):fetch("".concat(N,"/userLogin"),{method:"POST",body:JSON.stringify({userName:this.state.userName,password:this.state.userPassword}),headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(e){return e.json()})).then((function(e){e.success?(t.props.userLogin(e.id,e.userName),t.setState({openlogin:!1})):t.setState({error:!0,message:e.message,userName:"",userPassword:""})}))}},{key:"handleRegister",value:function(e){var t=this;e.preventDefault(),""==this.state.userName||""==this.state.userPassword?this.setState({error:!0,message:"\u8acb\u8f38\u5165\u5e33\u865f\u53ca\u5bc6\u78bc"}):fetch("".concat(N,"/userRegister"),{method:"POST",body:JSON.stringify({userName:this.state.userName,password:this.state.userPassword}),headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(e){return e.json()})).then((function(e){e.success?(t.setState({openregist:!1}),t.props.userLogin(e.id,e.userName)):t.setState({error:!0,message:e.message,userName:"",userPassword:""})}))}},{key:"userLogout",value:function(){var e=this;fetch("".concat(N,"/userLogout"),{credentials:"include"}).then((function(t){e.props.userLogout()}))}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,0==this.props.user.userId?s.a.createElement("div",{className:"loginbtn unloginBtn",onClick:this.openLogin},"\u767b\u5165/\u8a3b\u518a"):s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"loginbtn loginUser"},s.a.createElement("span",null,this.props.user.userName),"'s Bullet Journal / ",s.a.createElement("span",{className:"logoutbtn",onClick:this.userLogout},"\u767b\u51fa"))),this.state.openlogin?s.a.createElement("div",{className:"fixedBg"},s.a.createElement("div",{className:"loginForm"},s.a.createElement("div",{className:"formTitle"},"Open Your Bullet!"),this.state.error?s.a.createElement("span",{className:"errormessage"},this.state.message):s.a.createElement(s.a.Fragment,null),s.a.createElement("span",{className:"close",onClick:this.closeForm},"x"),s.a.createElement("form",{onSubmit:this.handleLogin},s.a.createElement("input",{className:"myInput",type:"text",placeholder:"\u5e33\u865f",value:this.state.userName,onChange:function(t){return e.handleChangeInput(t,"userName")}}),s.a.createElement("input",{className:"myInput",type:"password",placeholder:"\u5bc6\u78bc",value:this.state.userPassword,onChange:function(t){return e.handleChangeInput(t,"userPassword")}}),s.a.createElement("input",{className:"myInput",type:"submit",value:"\u767b\u5165"})),s.a.createElement("div",null,"\u9084\u6c92\u8a3b\u518a\u55ce\uff1f",s.a.createElement("span",{onClick:this.openRegister},"\u8a3b\u518a")),s.a.createElement("div",{className:"warningmessage"},"\u6b64\u70ba\u7df4\u7fd2\u4f5c\u54c1\uff0c\u8acb\u52ff\u8f38\u5165\u771f\u5be6\u5e33\u5bc6"))):s.a.createElement(s.a.Fragment,null,null),this.state.openregist?s.a.createElement("div",{className:"fixedBg"},s.a.createElement("div",{className:"loginForm"},s.a.createElement("div",{className:"formTitle"},"Start Your Bullet!"),s.a.createElement("span",{className:"close",onClick:this.closeForm},"x"),this.state.error?s.a.createElement("span",{className:"errormessage"},this.state.message):s.a.createElement(s.a.Fragment,null),s.a.createElement("form",{onSubmit:this.handleRegister},s.a.createElement("input",{className:"myInput",type:"text",placeholder:"\u5e33\u865f",value:this.state.userName,onChange:function(t){return e.handleChangeInput(t,"userName")}}),s.a.createElement("input",{className:"myInput",type:"password",placeholder:"\u5bc6\u78bc",value:this.state.userPassword,onChange:function(t){return e.handleChangeInput(t,"userPassword")}}),s.a.createElement("input",{className:"myInput",type:"submit",value:"\u8a3b\u518a"})),s.a.createElement("div",null,"\u5df2\u7d93\u6709\u5e33\u865f\u4e86!",s.a.createElement("span",{onClick:this.openLogin},"\u767b\u5165")),s.a.createElement("div",null,s.a.createElement("span",{className:"warningmessage"},"\u6b64\u70ba\u7df4\u7fd2\u4f5c\u54c1\uff0c\u8acb\u52ff\u8f38\u5165\u771f\u5be6\u5e33\u5bc6")))):s.a.createElement(s.a.Fragment,null,null))}}]),t}(s.a.Component),x=Object(i.b)((function(e,t){return{user:e.user,loginStatus:e.user.loginStatus}}),(function(e){return{userLogin:function(t,a){e(function(e,t){return{type:"USER_LOGIN",userId:e,userName:t}}(t,a))},userLogout:function(){e({type:"USER_LOGOUT"})}}}))(G),H=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"App"},s.a.createElement(J,null),s.a.createElement(D,null),s.a.createElement(x,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=Object(c.c)(y);o.a.render(s.a.createElement(i.a,{store:z},s.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.1ccef92e.chunk.js.map