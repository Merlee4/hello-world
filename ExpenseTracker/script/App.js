//linking inputs
const itemInput = document.querySelector('#itemName')
const dateDone = document.querySelector('#date')
const priceInput = document.querySelector('.price')
//linking inputs above

//linking view
const main = document.querySelector("main")
var thePrice = document.querySelector('.amount')
//linkning views above

//hp
window.onload = function () {
  alert('Happiness you did not believe me')
}
//hp above

//addButton event
const addButton = document.querySelector('.addbtn')
addButton.addEventListener('click', addItem)
//addButton event above

var itemNumber = 0
var totalPrice = 0
var second
var myname = addButton.onc
function addItem() {


    //rejects aplha on price


    //display the date
    var iname = itemInput.value
    var date = dateDone.value
    var reverse = date.split('-')
    day = reverse[2]
    month = reverse[1]
    year = reverse[0]

    var full = day + '/' + month + '/' + year
    //display the date above

    //display the amount
    var price = priceInput.value

    var currency = 'K '
    totalPrice = totalPrice + parseInt(price)

    var dive = document.createElement('div')
    var first = document.createElement('p')
    first.innerText = iname

    second = document.createElement('p')
    second.innerText = full

    var third = document.createElement('p')
    var moneyFormat = currency + ' ' + price
    third.innerText = moneyFormat
    //display the amount above

    //delete button 
    var fourth = document.createElement('button')
    fourth.innerHTML = 'X'
    fourth.addEventListener('click', function () {

      totalPrice = parseInt(thePrice.innerText) - parseInt(price)
      thePrice.innerText = totalPrice
      var nice = fourth.parentElement;
      nice.remove()

    })
    //delete button above

    thePrice.innerText = totalPrice

    //adding the created elements to view
    dive.appendChild(first)
    dive.appendChild(second)
    dive.appendChild(third)
    dive.appendChild(fourth)
    main.appendChild(dive)
    //adding the created elements to view above



    //FixME: please
  function nowCall() {

  //rejects aplha on price
  //check the price
  var thePrice = priceInput
  if (thePrice.value == '' ) {
    thePrice.style.border = '2px solid red'
  } else {
    thePrice.style.border = 'none'
    nowCall()
  }

  //check the price above

  //check the date
  var theDate = dateDone
  if (dateDone.value == '') {
    theDate.style.border = '2px solid red'
  } else {
    theDate.style.border = 'none'
    nowCall()
  }
  //check the date above

  //check the item name
  var theName = itemInput
  if (itemInput.value == '') {
    theName.style.border = '2px solid red'
  } else {
    theName.style.border = 'none'
    nowCall()
  }
  //check the item name above

  }

}
