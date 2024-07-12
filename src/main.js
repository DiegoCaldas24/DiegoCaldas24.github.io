//--------------Checkbox-------------------------------
const checkboxes = document.querySelectorAll(".group");
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
      checkboxes.forEach((otherCheckbox) => {
        if (otherCheckbox !== checkbox) {
          otherCheckbox.checked = false;
        }
      });
    }
  });
});


//---------------Filters--------------------------------
const check = document.querySelectorAll('#list input[type="checkbox"]');

for (const checkbox of check) {
  checkbox.addEventListener('click', handleCheckboxClick);
}

function handleCheckboxClick(event) {
  const checkbox = event.target;
  const value = checkbox.value;
  //---
  const content = document.getElementsByTagName('h4')
  const medicineList = document.querySelectorAll('.medicineList')
  for(let i = 0 , j = 0;i<content.length, j< medicineList.length;i++,j++){
    let valor = content[i];
    let valorCon = medicineList[j];
    if(valor.innerText === value){
      valorCon.removeAttribute('id')
    } else{
      valorCon.setAttribute('id','medicineListId') 
    }
    if(!checkbox.checked){
      valorCon.removeAttribute('id')
    }
  }
}

//-------------search bar----------------------
const bar = document.getElementById('searchBar')
const content = document.getElementsByTagName('h3')
const medicineList = document.querySelectorAll('.medicineList')
bar.addEventListener('keyup', (e)=>{
  let value = e.target.value;
  let re = RegExp(value, 'i');
  for(let i = 0 , j = 0;i<content.length, j< medicineList.length;i++,j++){
    let valor = content[i];
    let valorCon = medicineList[j];
    if(re.test(valor.innerText)){
      valorCon.removeAttribute('id')
    } else{
      valorCon.setAttribute('id','medicineListId') 
    }
  }
})


//-----------
let val = false
const filtros = document.getElementById('filtros')
const list = document.getElementById('list')
  list.style.display = 'none'
filtros.addEventListener('click', () =>{
  
  if(!val){
    list.style.display ='inline-block';
    val = true
  }else{
    list.style.display ='none';
    val = false
  }
})