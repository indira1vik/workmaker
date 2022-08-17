window.addEventListener('load',() => { //allows you handle the windows DOM

    todos = JSON.parse(localStorage.getItem('todos')) || [];

    const form = document.querySelector("#reader");
    const input = document.querySelector("#ask");
    const list_all_tasks = document.querySelector("#list");

    form.addEventListener('submit', (e) => {
        e.preventDefault(); //not to delete content after any clicks
        const task = input.value;
        
        if (!task){
            alert("Please fill the task!");
            return;
        }
        else{
            console.log("Submitted form");
        }

        const each_task_element = document.createElement("div"); //to create div element
        each_task_element.classList.add("each-task");
        const each_task_content = document.createElement("div"); //to create div inside each task
        each_task_content.classList.add("content");
        each_task_element.appendChild(each_task_content);

        const each_task_input = document.createElement("input"); //to store in list
        each_task_input.classList.add("text");
        each_task_input.type = "text";
        each_task_input.value = task;
        each_task_input.setAttribute("readonly","readonly");
        each_task_content.appendChild(each_task_input);

        localStorage.setItem('todos', JSON.stringify(todos));

        //all buttons create and append in classList
        const each_task_actions = document.createElement("div");
        each_task_actions.classList.add("actions");

        const each_task_edit = document.createElement('button');
		each_task_edit.classList.add('edit');
		each_task_edit.innerText = 'Edit';

        const each_task_delete = document.createElement('button');
		each_task_delete.classList.add('delete');
		each_task_delete.innerText = 'Delete';

		each_task_actions.appendChild(each_task_edit);
		each_task_actions.appendChild(each_task_delete);

		each_task_element.appendChild(each_task_actions);

		list_all_tasks.appendChild(each_task_element);

		input.value = ''; //initialize input

        //button contol
        each_task_edit.addEventListener('click', (e) => {
			if (each_task_edit.innerText.toLowerCase() == "edit") {
				each_task_edit.innerText = "Save";
				each_task_input.removeAttribute("readonly");
				each_task_input.focus();
			} else {
				each_task_edit.innerText = "Edit";
				each_task_input.setAttribute("readonly", "readonly");
			}
		});

		each_task_delete.addEventListener('click', (e) => {
			list_all_tasks.removeChild(each_task_element);
		});

        localStorage.setItem('todos', JSON.stringify(todos));

    })
})