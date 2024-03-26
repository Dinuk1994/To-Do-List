const input = document.getElementById('text');
const addBtn = document.getElementById('button');
const toDOList = document.getElementById('toDoList');

addBtn.addEventListener('click', function() {
  const div = document.createElement('div');
  div.style.backgroundColor = '#9CAFAA';

  div.style.marginTop = "5px"
  div.style.borderRadius = "15px"
  div.style.padding = "8px"
  div.style.width = "300px"

  const list = document.createElement('li');

  const text = document.createTextNode(input.value); 

  
  const btnDone = document.createElement('button');
  btnDone.textContent = "Done";
  btnDone.classList.add("done-btn");
  btnDone.style.color = "white";
  btnDone.style.backgroundColor = "#FA7070"; 
  btnDone.style.borderRadius = "15px";
  btnDone.style.border = "none";
  btnDone.style.padding = "10px 10px";
  btnDone.style.textAlign = "center";
  btnDone.style.textDecoration = "none";
  btnDone.style.display = "inline-block";
  btnDone.style.fontSize = "16px";
  btnDone.style.cursor = "pointer";
  btnDone.style.marginLeft = "5px";
  btnDone.style.marginTop = "5px";

  
  btnDone.addEventListener('click', function() {
    toDOList.removeChild(div);
  });
  
  list.appendChild(text);
  div.appendChild(list);
  div.appendChild(btnDone);
  toDOList.appendChild(div);
  input.value = '';
});
