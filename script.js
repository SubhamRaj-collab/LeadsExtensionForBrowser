const ulEl = document.getElementById('ul-el')
const inputBtn = document.getElementById('input-btn')
const deleteBtn = document.getElementById('delete-btn')
const inputEl = document.getElementById('input-el')
const savetabBtn = document.getElementById('saveTab-btn')
let myLeads = localStorage.getItem('myLeads')

if(myLeads == null)
{
    myLeads = `[]`
}

let leads = JSON.parse(localStorage.getItem("myLeads"))
render(leads)

savetabBtn.addEventListener('click', function(){

    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs){
        console.log(tabs)
        
        let leads = JSON.parse(localStorage.getItem("myLeads"))
        if(leads == null)
        {
            leads = []
        }
        leads.push(tabs[0].url)
        render(leads)
        leads = JSON.stringify(leads)
        localStorage.setItem("myLeads", leads)
    })

})

deleteBtn.addEventListener('dblclick', function(){

    localStorage.clear()
    myLeads = '[]'
    render(JSON.parse(myLeads))

})

inputBtn.addEventListener('click', function(){

    if(inputEl.value != '')
    {
        myLeads = JSON.parse(localStorage.getItem("myLeads"))
        myLeads.push(inputEl.value)
        inputEl.value = ''
        render(myLeads)
        myLeads = JSON.stringify(myLeads)
        localStorage.setItem("myLeads",myLeads)
    }   

    console.log(myLeads)
    

})

function render(leads)
{
    let listItems = ""

    for(let i in leads)
    {

        listItems += `<li>
            <a href = '${leads[i]}' target='_blank'>
                ${leads[i]} 
            </a>
        </li>`
    }

    ulEl.innerHTML = listItems
}

