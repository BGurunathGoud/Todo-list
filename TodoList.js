var myTasks=[];                  //It will store all uncompleted tasks is stored in the Array.                

const Tasksleft= document.getElementById('Tasks-inprogress');  //This will update the inprogress tasks afterwards
const Task_present=document.getElementById('Todo-list-tasks');       
const addDetails=document.getElementById('Task_detail');
const addTaskButton=document.querySelector('.AddBtn');


//create a list of items and display them on the screen.

function displayAllitems(){
    if(addDetails.value ==""){            //This condition will show alert message, whenever the values are empty.
        alert('Details cannot be left blank... Please enter details...!');
        return;
    }
    
    const List= document.createElement('li');          //Create's a list of items here. 
    var Input=document.createElement('input');         //Create's an input element here.
    Input.type="checkbox";                             //Provide's the type for the input element.
    Input.labels= addDetails.value;                    //Provide's label for the Checkbox along with task name.
    List.appendChild(Input);                           //Add's item to the list by appending 
    List.innerHTML=`<input type="checkbox" class="Checked"/>    
                    <label for="Checked" >${addDetails.value} </label>`;
                                                    // Changes the innerHTML of the list item.
                        // Add's list item to UL (parent tag). 
    var Span = document.createElement("SPAN");      
    Span.innerHTML="\u00d7";                        
    Span.className = "close";                       //Create's a delete button and appends to the List.
    List.appendChild(Span);
    Task_present.appendChild(List);
    addDetails.value="";
    addlists(Task_present);                           //Call's the add lists function to add it to the array.
    Tasksleft.innerHTML=myTasks.length+":Tasks left";    //Change's the number of inprogress tasks.
}

//Add's list into the myTasks array

function addlists(mylist){
    if(mylist){
        myTasks.push(mylist);
        alert('Task added to list successfully..!');
        return;
    }
    alert('!..Task not added to list.. Check Again..!');
}
// It is used to remove items from list or mark it is completed.

function deletes_lists(e){
    if(e.target.tagName=== "SPAN"){        
        const del=e.target.parentElement.remove();  //It remove's, the Parent's element and delete's task from the lists.
        myTasks.length--;
        Tasksleft.innerHTML=myTasks.length+":Tasks left";  //If it delete's successfully, then it will update the remaining Inprogress Tasks.
        alert('Task is deleted from list successfully..!');
    }
    else if(e.target.className === "Checked"){
        
        alert('!..successfully Updated..!');          //Toggle's the task status in Checkbox.
    }
}

//  Here the To-do list application will start

addTaskButton.addEventListener('click', displayAllitems);
Task_present.addEventListener('click', deletes_lists);
