let btn = document.querySelector(".result-btn")
let number = document.querySelector("#number")
let resultContainer = document.querySelector(".result-container")

btn.addEventListener("click",decimal)
function decimal(){
    let value = number.value
  let binary =  Number(value).toString(2)
  const h1 = document.createElement('h1');
  h1.innerHTML = binary;
  resultContainer.appendChild(h1);
}