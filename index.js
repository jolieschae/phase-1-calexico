let menuItemContainer = document.getElementById("menu-items")
let dish = document.getElementById("dish")
let dishImg = document.getElementById("dish-image")
let dishName = document.getElementById("dish-name")
let dishDescription = document.getElementById("dish-description")
let dishPrice = document.getElementById("dish-price")
let numberInCart = document.getElementById("number-in-cart")
let form = document.getElementById("cart-form")
let featuredDish = {}

fetch("http://localhost:3000/menu") 
.then((response) => response.json())
.then((data) => renderMenu(data));


function renderMenu(menu){
    fillDishDetails(menuItem = menu[0])
    menu.forEach((menuItem) => {
        let span = document.createElement('span');
        span.textContent = menuItem.name;
        menuItemContainer.append(span);

        span.addEventListener('click', () => {
            fillDishDetails(menuItem)
            featuredDish = menuItem
        });
    });
};

function fillDishDetails(menuItem) {
            dishImg.src = menuItem.image;
            dishName.textContent = menuItem.name;
            dishDescription.textContent = menuItem.description;
            dishPrice.textContent = menuItem.price;
            numberInCart.textContent = menuItem.number_in_bag
};

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let input = parseInt(e.target["cart-amount"].value)
    let total = input + featuredDish.number_in_bag
    numberInCart.textContent = total
});


