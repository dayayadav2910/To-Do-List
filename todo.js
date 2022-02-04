function additem()
{
	document.getElementById("error").innerHTML ="";
	let task = document.getElementById("new-task").value;
	var deleteButton= document.createElement("delete");

	
	if(task ==''){
		document.getElementById('error').innerHTML = "Please Enter Task"; 
	}
	else
	{
		let tasks = document.getElementById("task1");
		let li = document.createElement("li");
		li.textContent = task;
		let pos = tasks.firstElementChild;

		let btn_ = document.createElement("a");
		btn_.textContent = "Delete";
		btn_.href="javascript:void(0)";
		btn_.className = "remove";
		li.appendChild(btn_)



		if(pos==null){
			tasks.appendChild(li);	
		
		}
		else{
			tasks.insertBefore(li,pos);

		}
	}

	document.getElementById("new-task").value = "";
}

let btn = document.querySelector("ul");
btn.addEventListener("click", function(e)
{
	let tasks =document.getElementById("task1");
	let li = e.target.parentNode;
	tasks.removeChild(li);
})