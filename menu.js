let breakFast = {
    dosa: 12,
    appam: 10,
    porotta: 8,
    puttu: 5
}
let lunch = {
    biriyani: 15,
    meals: 10,
    majboos: 13
}

let snacks = {
    pazham: 1,
    bonda: 1,
    kayippola: 2,
}
let hotItems = {
    tea: 1,
    coffee: 2,
    horlicks: 2,
}
let juice = {
    "mango-large": 7,
    "avocado-large": 7,
    "mango-small": 4,
    "avocado-small": 4,
}

//breakFast
let breakFastBody = document.getElementById("break-fast-body")
Object.keys(breakFast).map(food => {
    let item = food;
    let price = breakFast[food]
    let tItem = document.createElement('td')
    let tPrice = document.createElement('td')
    let tRow = document.createElement('tr')
    tItem.innerHTML = item
    tPrice.innerHTML = "QR." + price
    tRow.appendChild(tItem)
    tRow.appendChild(tPrice)
    breakFastBody.appendChild(tRow)
}
)

//lunch
let lunchBody=document.getElementById('lunch-body')
Object.keys(lunch).map(food=>{
    let item = food;
    let price = lunch[food]
    let tItem = document.createElement('td')
    let tPrice = document.createElement('td')
    let tRow = document.createElement('tr')
    tItem.innerHTML = item
    tPrice.innerHTML = "QR." + price
    tRow.appendChild(tItem)
    tRow.appendChild(tPrice)
    lunchBody.appendChild(tRow)
})

//snacks

let snacksBody=document.getElementById('snacks-body')
Object.keys(snacks).map(food=>{
    let item = food;
    let price = snacks[food]
    let tItem = document.createElement('td')
    let tPrice = document.createElement('td')
    let tRow = document.createElement('tr')
    tItem.innerHTML = item
    tPrice.innerHTML = "QR." + price
    tRow.appendChild(tItem)
    tRow.appendChild(tPrice)
    snacksBody.appendChild(tRow)
})

//juice
let hotItemsBody=document.getElementById('hot-items-body')
Object.keys(hotItems).map(food=>{
    let item = food;
    let price = hotItems[food]
    let tItem = document.createElement('td')
    let tPrice = document.createElement('td')
    let tRow = document.createElement('tr')
    tItem.innerHTML = item
    tPrice.innerHTML = "QR." + price
    tRow.appendChild(tItem)
    tRow.appendChild(tPrice)
    hotItemsBody.appendChild(tRow)
})
let juiceBody=document.getElementById('juice-body')
Object.keys(juice).map(food=>{
    let item = food;
    let price = juice[food]
    let tItem = document.createElement('td')
    let tPrice = document.createElement('td')
    let tRow = document.createElement('tr')
    tItem.innerHTML = item
    tPrice.innerHTML = "QR." + price
    tRow.appendChild(tItem)
    tRow.appendChild(tPrice)
    juiceBody.appendChild(tRow)
})

//adding date to footer
let date=new Date().getFullYear()
let dateId=document.getElementById('footer-date')
dateId.innerHTML=date