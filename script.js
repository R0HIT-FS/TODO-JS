

    function addItem(){
        var taskname = document.getElementById('taskname').value
        var tododiv = document.getElementById('mytodo');
        if(taskname==""){
            alert('Please Enter Something To Add to The List')
        }
        else{

            
            
            var newItem = document.createElement('div')
            var todoTitle= document.createElement('li')
            todoTitle.innerHTML=taskname
           
            var deletebtn= document.createElement('button')
            deletebtn.classList.add("del")
            deletebtn.classList.add("btn")
            deletebtn.classList.add("btn-outline-light")
            deletebtn.classList.add("btn-dark")
            deletebtn.innerHTML="DELETE"
            // var edit= document.createElement('button')
            // edit.classList.add("edit")
            // edit.classList.add("btn")
            // edit.classList.add("btn-outline-light")
            // edit.classList.add("btn-dark")
            // edit.innerHTML="edit"
            
            newItem.appendChild(todoTitle);
            newItem.appendChild(deletebtn);
            // newItem.appendChild(edit);
            newItem.classList.add('disp');
            tododiv.appendChild(newItem);
            
            var taskname = document.getElementById('taskname').value=''
        }
        }
        

var tododiv=document.getElementById('mytodo');
tododiv.addEventListener('click',deleteItem)

function deleteItem(e){
    const element = e.target
    if(element.classList[0]=='del'){
        element.parentElement.remove()
    }
}