let myLeads = ["www.google.com"]
const inputEl = document.getElementById("input-el")

const inputBtn = document.getElementById("input-btn")

const ulEl = document.getElementById("ul-el")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    renderList()
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))


})

function renderList() {
    let listItem = `
    <li>
         <a target='_blank' href='${inputEl.value}'> 
              ${inputEl.value}  
         </a>
    </li>`
    ulEl.innerHTML += listItem


    // for (let i = 0; i < myLeads.length; i++) {
    //     // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    //     //////////////  OR /////////////

    //     //     const li = document.createElement("li")
    //     //     li.textContent = myLeads[i]
    //     //     ulEl.append(li)

    //     ////////////////////////////////////////
    //     /// for performance instead of using DOM
    //     listItems += "<li>" + myLeads[i] + "</li>"
    // }

}
