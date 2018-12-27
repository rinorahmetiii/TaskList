//Percaktimin e UI vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');

const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');

//Load event listeners
loadEventListeners();

function loadEventListeners(){
    //Add task
    form.addEventListener('submit' , addTask);
    //Remove task
    taskList.addEventListener('click' , removeTask);
    //Clear Tasks
    clearBtn.addEventListener('click' , clearTasks);
    //Filter Tasks
    filter.addEventListener('keyup' , filterTasks);
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


//Remove Task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
        }
    }
}

//Clear Tasks
function clearTasks(){
    taskList.innerHTML = '';
}

// //Clear Tasks
// function clearTasks(e){
//     if (e.target.classList.contains('clear-tasks')) {
//         let collection = document.getElementById('collection');
//         collection.innerHTML = '';
        
//         // while (collection.firstChild) {
//         //     collection.removeChild(collection.firstChild);
//         // }
//     }
// }


//Filter Tasks

function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    let el = document.querySelectorAll('.collection-item');
    if(text.trim().length != 0){
        for(let li of el){
            let liTxt = li.firstChild.textContent.toLowerCase();
            if(liTxt.indexOf(text) != -1) {
                li.style.display = 'block';
            }else {
                li.style.display = 'none';
            }
        }
    }else {
        for(let li of el){
            li.style.display = 'block';
        }
    }

    console.log(text);
}