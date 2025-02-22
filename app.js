function addTodo(){
    const title=document.getElementById("title").value;
    const description=document.getElementById("description").value;
    const originalContainer=document.getElementById("container").innerHTML;
    
    document.getElementById("container").innerHTML= originalContainer + 
    `<div>${title}</div>
    <div>${description}</div>
    <button onclick="this.innerHTML='Done!'; ">Mark as Done</button>`    
}