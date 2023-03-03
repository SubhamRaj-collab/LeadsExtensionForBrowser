const ulEl = document.getElementById('ul-el')
const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
let myLeads = []

inputBtn.addEventListener('click', function(){

    if(inputEl.value != '')
    {
        myLeads.push(inputEl.value)
        inputEl.value = ''
        
    }   

    console.log(myLeads)
    renderLeads()
})

function renderLeads()
{
    let listItems = ""

    for(let i in myLeads)
    {
        // listItems += '<li>'+"<a href = "+ myLeads[i] +" target='_blank'>"+ myLeads[i] +'</a>'+'</li>'
        // Normal Statement with HTML tags

        listItems += `<li>
            <a href = '${myLeads[i]}' target='_blank'>
                ${myLeads[i]} 
            </a>
        </li>`
        // Template String/literal Method of writing statements with HTML tags.

        // Method1
        // Create Element
        // set textContent
        // append to ul
        // const li = document.createElement('li')
        // li.textContent = myLeads[i]
        // ulEl.append(li)
        // Method2
    }

    ulEl.innerHTML = listItems
    // DOM manipulation comes with a cost, so it must be done least number of times
}

