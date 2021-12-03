function addToCart(quantity,productName="Elma") {
    console.log("Sepete Eklendi : " + productName, "-- Adet : " + quantity)
}

//addToCart()
addToCart(10)
//addToCart(15)

let sayHello = ()=>{
        console.log(" Hello World ")
}
sayHello()

let sayHello2 = function () {
    console.log(" Hello World 2 ")
}
sayHello2()


function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart2("Elma",5,10)
addToCart2("Armut",2,20)
addToCart2("Limon",3,15)

let product1 = {productName:"Elma", unitPrice:10, quantity:5}

function addToCart3(product) {
    console.log(" Ürün : " + product.productName + " -- Adet : " + product.quantity + " -- Fiyat : " + product.unitPrice + " ✔️ ")

    
}

addToCart3(product1)

let product2 = {productName:"Norveç Elması", unitPrice:10, quantity:5}
let product3 = {productName:"Norveç Elması", unitPrice:10, quantity:5}
product2 = product3
product2.productName = "Diyarbakır K A R P U Z U "
console.log(product3.productName)

function addToCart4(products) {
    console.log(products)
}


let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}]

addToCart4(products)

function add(...numbers) { //rest
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total= total + numbers[i]
        
    }
    console.log(total)
}


add(20,30)
add(20,30,40)
add(20,30,40,50)

let numbers = [30,10,500,600,120]
//console.log(...numbers)
console.log(Math.max(...numbers)) 

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", populations:"20M"},
    {name:"Marmara", populations:"30M"},
    {name:"Karadeniz", populations:"10M"},
        [
            ["Ankara","Konya"],
            ["İstanbul","Bursa"],
            ["Sinop","Trabzon"],

        ]

]

console.log(icAnadolu.populations)
console.log(marmara.name)
console.log(icAnadoluSehirleri)


let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity}= {productName:"Elma", unitPrice:10, quantity:5})
console.log(" "+newProductName  +" "+ newUnitPrice, +" "+ newQuantity)