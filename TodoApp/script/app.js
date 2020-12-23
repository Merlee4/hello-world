//vars
var item
var text
var count = 0

//consts
const textBox = document.querySelector('input')
const addButton = document.querySelector('.add')
addButton.addEventListener('click', addItem)

const main = document.querySelector('main')

const emptyIndicator = document.querySelector("section")

const countHolder = document.querySelector('.numberr')

const counter = document.querySelector('.counterE')


const closeWindow = document.querySelector(".deleterr")

const body = document.querySelector('body')
//consts above

//close app
const deleteButton = document.querySelector('.deleteA')
deleteButton.addEventListener('click', function () {
    window.close()
})
//close app above

window.onload = function () {
   alert('Happiness you did not believe me')
    
}

//main event
function addItem() {

    //changint the counter
    count = count + 1

    if (counter.innerHTML > -1) {
        countHolder.style.backgroundColor = "rgb(39, 214, 20)"
        countHolder.style.transition = ".5s"
    }
    //changint the counter above

    item = document.createElement('div')
   
    
    text = document.createElement('p')
    text.addEventListener('click', selectItem)

    var removeButt = document.createElement('button')
    removeButt.innerText = 'delete'

    //checking if input is empty
    if (textBox.value == '') {
        textBox.style.border = '2px solid red'
    } else {
        counter.innerText = count
        emptyIndicator.style.display = 'none'
        text.innerText = textBox.value
        textBox.value = ''
        textBox.style.border = 'none'

        main.appendChild(item)
        item.appendChild(text)
        item.appendChild(removeButt)

        body.scrollTo(item)
        if (count == 0) {
            countHolder.style.backgroundColor = 'rgb(39, 214, 20)'
        }
        removeButt.addEventListener('click', function () {

            var nice = removeButt.parentElement;
            nice.remove()

        })
        
    }
    //checking if string is empty above
}
//main event

//task done event
function selectItem(e) {
   var selected = e.target
   selected.style.backgroundColor = 'rgb(138, 155, 45)'
   text.style.textDecoration = 'line-through'
}
//task done event