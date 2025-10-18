let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}



tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })

})


function render(leads) {
    ulEl.innerHTML = ""
    for (let i = 0; i < leads.length; i++) {
        ulEl.innerHTML += `<li><a  href="${leads[i]}" > ${leads[i]}
        </a></li>   `
    }
}

inputBtn.addEventListener("click", function () {
    if (inputEl.value.trim() !== "") {
        myLeads.push(inputEl.value)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
        inputEl.value = ""
    }
})


deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})
