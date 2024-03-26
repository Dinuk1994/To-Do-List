const input = document.getElementById('text')
const addBtn = document.getElementById('button')
const toDOList = document.getElementById('toDoList')

addBtn.addEventListener('click',function(){
  const list =document.createElement('li')
  const text = document.createTextNode(input.value)


  const btnDone = document.createElement('button')
  btnDone.textContent ="Done"
  btnDone.classList.add("done-btn")

  btnDone.addEventListener('click', function(){
    toDOList.removeChild(list)
  })

  list.appendChild(text)
  list.appendChild(btnDone)
  toDOList.appendChild(list)
  input.value = ''


})
