let breakFast = {
     Appam: 1,
    Porotta: 1,
    " Wheat Porotta": 1,
    Chappathi: 1,
    appam: 1,
    "Poori Set": 5,
    "Iddaly Set": 5,
    Puttu: 3,
    " Wheat Puttu": 3,
    "Kuthari Puttu": 3,
    Idiyappam: 1,
    Vellappam: 1,
    Neypathal: 1,
    "Nice pathiri": "2/3",
    "Thattu Dosa": 4,
    "Plain Dosa": 4,
    "Masala Dosa": 6,
    "Gee Dosa": 5,
    "Onion Dosa": 5,
    "Egg Dosa": 5,
    "Curry Dosa": 12,
    "Kalmutta Dosa": 2,
    "Oothappam": 6,
    "Onion Oothappam": 6,
    "Carrot Oothappam": 6,
}
let curry = {
    'Hello Tea VV Chicken': 25,
    "Sheri Toasted": 10,
    "King Fish Toasted": 12,
    "Aavoli Toasted": 15,
    "King Fish Pollichath": 15,
    "Sheri Pollichath": 15,
    "Aavoli Pollichath": 18,
    "Fish BBQ": '',
    'Green Chilli Chicken BBQ': '12/24',
    'Pepper Chicken BBQ': '13/25',
    'Butter Chicken':12,
    "Chicken Curry": 7,
    "Chicken Fry": 7,
    "Chicken 65": 7,
    "Chicken Chilli": 10,
    "Dragon Chicken": 10,
    "Ginger Chicken": 10,
    "Garlic Chicken": 10,
    "Chicken Chettinadu": 10,
    "Chicken Karahi": 10,
    "Chicken Kuruma": 10,
    "Chicken Pepper Masala": 10,
    "Chicken Chukka": 8,
    "Beef Masala": 10,
    "Beef Pepper Masala": 10,
    "Beef Dry Fry": 10,
    "Beef Roast": 8,
    "Beef Chilli": 10,
    "Beef Curry": 8,
    "Beef Idichath": 10,
    "Mutton Curry": 10,
    "Mutton Masala": 12,
    "Pothum Kaal": "",
    "Paaya": "",
    "Mixed Vegetables": "3/5",
    "Aalu Baji": "3/5",
    "Aalu Thadkka": "3/5",
    "Mong Daal": "3/5",
    "Maisoor Daal": "3/5",
    "Chana Daal": "3/5",
    "Chana Masala": "3/5",
    "Chilli Gopi": 5,
    "Aalu Gopi": "3/5",
    "Veg Kuruma": 5,
    "Bindi Masala": 5,
    "Bitter Guard Masala": 5,
    "Greenpeace": "3/5",
    "Egg Curry": 4,
    "Egg Roast": 4,
    'Egg Burji':5
}
let sandwich = {

    'Egg Sandwich': 3,
    'Vegetable Sandwich': 3,
    'Chicken Sandwich': 4,
    'Beef Sandwich': 4,
    'Falafel Sandwich': 4,
    'Club Sandwich': 12,
    "Chicken Burger": "6/8/10",
    "Vegetable Burger": "7/8/10",
    "Beef Burger": "6/8/10",
    "Shawarma": 5,
}
let lunch = {
    "Chicken Dum Biriyani": 10,
    "Chicken Fry Biriyani": 10,
    "Beef Biriyani": 12,
    "Mutton Biriyani": 15,
    "Fish Biriyani": 12,
    "Hyderabadi Biriyani": 15,
    "Chicken Majboos": 12,
    "Mutton Majboos": 18,
    "Beef Majboos": 14,
    "Chicken Fried Rice": 12,
    "Beef Fried Rice": 14,
    "Egg Fried Rice": 10,
    "Mixed Fried Rice": 16,
}

let snacks = {
    "Ulli Vada": 1,
    "Paripp Vada": 1,
    "Pazham pori": 1,
    "Unda": 1,
    "Alu Bonda": 1,
    "Vettu Cake": 1,
    'Mulak Baji': 1,
    'Eethapazham Porichath': 1,
    'Masala Mutta': 1,
    'Ela Ada': 1,
    'Ela Ada': 2,
    'Kayi Pola': 2,
    'Chicken Cutlet': 2,
    'Mutta Pathiri': 2,
    'Chicken Pathiri': 2,
    'Elanji': 2,
    'Bread Omlette': 2,
    'Chicken Roll': 2,
    'Bread Baji': 1,
    'Bread Sweet': 1,
    'Samosa': 1,
    'Dounut': 2,

}
let hotItems = {
   "Karak Tea": 1,
    'Samavar Tea',
    coffee: 2,
    horlicks: 3,
}
let juice = {
    'Lemon': 4,
    'Orange': "4/6",
    'Banana': "4/6",
    'Mango': "6/8",
    'Papaya': "6/8",
    'Pineapple': "6/8",
    'Shamam': "6/8",
    'Avocado': "6/8",
    'Apple': "6/8",
    'Strawberry': "6/8",
    'Chikku': "6/8",
    'Guava': "6/8",
    'Grapes': "6/8",
    'Anar': "6/8",
    'Carrot': "8/10",
    'Watermelon': "5/7",

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
let lunchBody = document.getElementById('lunch-body')
Object.keys(lunch).map(food => {
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

//sanswich
let sandwichBody = document.getElementById('sandwich-body')
Object.keys(sandwich).map(food => {
    let item = food;
    let price = sandwich[food]
    let tItem = document.createElement('td')
    let tPrice = document.createElement('td')
    let tRow = document.createElement('tr')
    tItem.innerHTML = item
    tPrice.innerHTML = "QR." + price
    tRow.appendChild(tItem)
    tRow.appendChild(tPrice)
    sandwichBody.appendChild(tRow)
})

//snacks

let snacksBody = document.getElementById('snacks-body')
Object.keys(snacks).map(food => {
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

//curry
let curryBody = document.getElementById('curry-body')
Object.keys(curry).map(food => {
    let item = food;
    let price = curry[food]
    let tItem = document.createElement('td')
    let tPrice = document.createElement('td')
    let tRow = document.createElement('tr')
    tItem.innerHTML = item
    tPrice.innerHTML = "QR." + price
    tRow.appendChild(tItem)
    tRow.appendChild(tPrice)
    curryBody.appendChild(tRow)
})

//juice
let hotItemsBody = document.getElementById('hot-items-body')
Object.keys(hotItems).map(food => {
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
let juiceBody = document.getElementById('juice-body')
Object.keys(juice).map(food => {
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
let date = new Date().getFullYear()
let dateId = document.getElementById('footer-date')
dateId.innerHTML = date
