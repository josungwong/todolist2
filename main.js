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
    let taskContent = taskInput.value
    taskList.push(taskContent)
    console.log(taskList)
    render()
}

function render(){
    let resultHTML = ''
    for(let i = 0; i<taskList.length; i++){
        resultHTML += `<div class="task">
                    <div>${taskList[i]}</div>
                    <div>
                        <button>Check</button>
                        <button>Delete</button>
                    </div>
                </div>`
    }


    document.getElementById("task-board").innerHTML = resultHTML
}