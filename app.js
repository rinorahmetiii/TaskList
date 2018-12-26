//Percaktimin e UI vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');

const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');

//Load event listeners
loadEventListeners();

function loadEventListeners(){
    //Add task event
    form.addEventListener('submit' , addTask);
}

//addTask Function

function addTask(e){
    if(taskInput.value === ''){
        alert('You should add a task');
        e.preventDefault();
        return;
    }
    //Create li elements
    const li = document.createElement('li');
    //Add class
    li.className = 'collection-item';
    //Create the text node and appent to li
    li.appendChild(document.createTextNode(taskInput.value));
    //Create new link element(for delete icons of tasks)
    const link = document.createElement('a');
    //Add class 
    link.className = 'delete-item secondary-content';//(secondary-contetn)We need delete icons to the right of list items
    //Add icon Html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //Append the link to the li
    li.appendChild(link);

    //Append the li to ul
    taskList.appendChild(li);

    //After that clear the input
    taskInput.value = '';

    e.preventDefault();
}


