let myLeads = []

const saveEl = document.getElementById("save-el")
const inputEl = document.getElementById("input-el")
const inputList = document.getElementById("list-items")

saveEl.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value= "";
    render()

})

function render() {
    let list = ""
    for(let i = 0; i < myLeads.length; i++) {
        list += `
        <li>
        <a href="#">${myLeads[i]}</a>
        </li>
        `
    }
    inputList.innerHTML = list
}