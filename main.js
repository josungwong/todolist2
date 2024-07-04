// 값 입력
// + 누르면 할일추가
// delete는 할일 삭제
// check는 할일 끝
// 탭을 누르면 언더바 이동
// 끝남 탭은 끝난 아이탬만 , 진행중은 진행중만
// 전체탭을 누르면 전채 아이탬으로 돌아옴

let taskInput = document.getElementById("task-input")
let addButton = document.getElementById("add-button")
let taskList = []

addButton.addEventListener("click",addTask)

function addTask(){
    let task = {
        id:randomIDGenerate(),
        taskContent: taskInput.value,
        isComplete:false
    }
    taskList.push(task)
    console.log(taskList)
    render()
}

function render(){
    let resultHTML = ''
    for(let i = 0; i<taskList.length; i++){
        if(taskList[i].isComplete == true){
            resultHTML +=`<div class="task">
                    <div class="task-done">${taskList[i].taskContent}</div>
                    <div>
                        <button onclick="toggleComplete('${taskList[i].id}')"><img src="/img/re.png" alt="re"></button>
                        <button onclick="deleteTask('${taskList[i].id}')"><img src="/img/can.png" alt="can"></button>
                    </div>
                </div>`
        } else{
        resultHTML += `<div class="task">
                    <div>${taskList[i].taskContent}</div>
                    <div>
                        <button onclick="toggleComplete('${taskList[i].id}')"><img src="/img/check.png" alt="check"></button>
                        <button onclick="deleteTask('${taskList[i].id}')"><img src="/img/can.png" alt="can"></button>
                    </div>
                </div>`
                }
    }

    
    document.getElementById("task-board").innerHTML = resultHTML
}

function toggleComplete(id){
    for(let i = 0; i < taskList.length; i++){
        if(taskList[i].id == id){
            taskList[i].isComplete = !taskList[i].isComplete;
            break
        }
    }
    render()
    console.log(taskList)
}
function randomIDGenerate(){
    return Math.random().toString(36).substr(2, 16);
    
}
function deleteTask(id){
    for(let i = 0; i<taskList.length;i++){
        if(taskList[i].id == id){
            taskList.splice(i,1)
            break
        }
    }
    render()
}