const toDoForm = document.querySelector('#todo_form');
const toDoInput = toDoForm.querySelector('input');          
const toDoList = document.querySelector('#todo_list');


let toDos = []      //localStorage를 다룰려고 만든 배열임

// input 저장함수
const saveToDos =()=>{
    localStorage.setItem('toDos', JSON.stringify(toDos))
}

// todo 삭제함수
const deleteToDo =(event)=>{
    const li = event.target.parentElement;  
    li.remove()
    toDos = toDos.filter((todo)=> todo.id !== parseInt(li.id))
    saveToDos()
}


// todolist항목생성 함수
const paintToDo =(newTodo)=>{
        const li = document.createElement('li')       
        li.id = newTodo.id;  
        const span = document.createElement('span')
        span.textContent = newTodo.text;  
        const button = document.createElement('button')
        button.textContent = 'X';
        button.addEventListener('click', deleteToDo)
        li.appendChild(span);  
        li.appendChild(button);
        toDoList.appendChild(li)  
}

// todo form submit했을때 함수
const handleToDoSubmit =(event)=>{
    event.preventDefault();
    const newTodo = toDoInput.value; 
    toDoInput.value = '';
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj)   
    paintToDo(newTodoObj)
    saveToDos()
}

toDoForm.addEventListener('submit', handleToDoSubmit)


// local Storage에 저장된 할 일들을 목록#todo-list 으로 불러오는 함수
const savedToDos = localStorage.getItem('toDos');

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

