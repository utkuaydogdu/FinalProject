const openShopping = document.querySelector(".shopping"),
      closeShopping = document.querySelector(".closeShopping"),
      body = document.querySelector("body"),
      list= document.querySelector(".list"),
      listCart = document.querySelector(".listCart"),
      total = document.querySelector(".total"),
      quantity = document.querySelector(".quantity")


openShopping.addEventListener("click", () => {
    body.classList.add("active");
})

closeShopping.addEventListener("click", () => {
    body.classList.remove("active")
})

let products = [
    {
        "id": 1,
        "name": "British Shorthair",
        "image":"BritishShort.jpg",
        "price": 1750
    },
    {
        "id": 2,
        "name": "Bulldog",
        "image":"BulldogPuppy.jpg",
        "price": 1500
    },
    {
        "id": 3,
        "name": "Egyptian Mau",
        "image":"EgyptianMau.jpg",
        "price": 3400
    },
    {
        "id": 4,
        "name": "German Sheppard",
        "image":"germanpuppy.jpg",
        "price": 2850
    },
    {
        "id": 5,
        "name": "Golden Retriever",
        "image":"GoldenPuppy.jpg",
        "price": 3000
    },
    {
        "id": 6,
        "name": "Sphinx",
        "image":"sphinx.jpg",
        "price": 4500
    }
]


let listCarts = [];

const initApp = () => {
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
            <img height = "100px" width = "100px" src = "images/${value.image}">
            <div class = "title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick = "addToCart(${key})">Add To Cart</button>
        `;
        list.appendChild(newDiv)
    })
}

initApp()


const addToCart = key => {
    if(listCarts[key] == null) {
        listCarts[key] = JSON.parse(JSON.stringify(products[key]));
        console.log(listCarts);
        listCarts[key].quantity = 1;
        console.log(listCarts[key].quantity);
    }

    reloadCart()
}

const reloadCart = () => {
    listCart.innerHTML = "";
    let count = 0;
    let totalPrice= 0;

    listCarts.forEach((value, key) => {
        totalPrice = totalPrice + value.price
        count = count + value.quantity;

        if(value != null) {
            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
                <div><img height = "100px" width = "100px" src = "images/${value.image}"></div>
                <div class = "cardTitle">${value.name}</div>
                <div class = "cardPrice">${value.price.toLocaleString()}</div>

                <div>
                    <button style = "background-color:#efefef;" class = "cartButton" onclick = "changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class = "count">${value.quantity}</div>
                    <button style = "background-color:#efefef;" class = "cartButton" onclick = "changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `
            listCart.appendChild(newDiv)
        }

        total.innerText = totalPrice.toLocaleString();
        quantity.innerText = count;
    })
}


const changeQuantity = (key, quantity) => {
    if(quantity == 0) {
        delete listCarts[key]
    }
    else {
        listCarts[key].quantity = quantity;
        listCarts[key].price = quantity * products[key].price
    }
    reloadCart()
}