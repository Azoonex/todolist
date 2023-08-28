let $ = document
let formElem = $.querySelector('form')
let inputElem = $.querySelector('input')
let ulListElem = $.querySelector('.list-group')
let removeiElem = $.querySelector('i')

// form cancelable 
formElem.addEventListener('submit',(event) => {
    event.preventDefault()
})


//add todo list

function addTodoList (valueInput) {
    let nowLi = $.createElement('li')
    let nowSpan = $.createElement('span')
    let newIelem = $.createElement('i')

    nowLi.className = "list-group-item d-flex justify-content-between align-items-center"
    newIelem.classList = "fa fa-trash-o delete"
    nowSpan.innerHTML = valueInput
    
    nowLi.append(nowSpan,newIelem)

    ulListElem.append(nowLi)
    inputElem.innerHTML = ''
}


//input adding todo

inputElem.addEventListener('keyup', (event)=>{
    let valueInput = event.target.value
    if (event.keyCode === 13){
        if (valueInput){
            inputElem.value = ''
            addTodoList(valueInput)

        }else {
            alert('you are fill input')
        }
    }
})


//remve todoitem

ulListElem.addEventListener('click',function (event){
    if (event.target.tagName === 'I'){
        event.target.parentElement.remove()
    }
})











