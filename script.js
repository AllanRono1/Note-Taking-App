let myLeads = []

const saveEl = document.getElementById("save-el")
const inputEl = document.getElementById("input-el")
const inputList = document.getElementById("list-items")
const storageValues = JSON.parse(localStorage.getItem("myLeads"))
if(storageValues) {
    render()
}

saveEl.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value= "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render()

})

function render() {
    let list = ""
    for(let i = 0; i < myLeads.length; i++) {
        list += `
        <li>
        <div class="index-container">
        <div class="link-anchor">
            <a href="#">${myLeads[i]}</a>
        </div>
        <div>
            <button class="edit" title="delete">📝</button>
            <button class="edit clear" title="delete">❌</button>
            <button class="edit delete" title="done">✅</button>
        </div>
        </div>
        </li>
        `
    }
    inputList.innerHTML = list
}