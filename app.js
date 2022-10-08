const addBasketButtons = document.querySelectorAll(".addToBasket");
const productName = document.querySelector('.productName');
const size = document.querySelector('.sizeClass');
const qty = document.querySelector('.qtyClass');
const basket = document.querySelector('.basket');
const dateClass = document.querySelector('.date');
const basketAmount = document.querySelector('.basketAmount');

let basketCount = 0;
const itemsArray = [{
    id: 1,
    img: "/home/joew/Desktop/CrewMate-v2/assets/hi-vis-1.jpeg",
    name: "Hi-Vis Vest"
}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]

function loadTime() {
    setInterval( () => {
        let dateObj = new Date().toLocaleString();
        let readableDate = dateObj;
        dateClass.innerText = readableDate;
    }, 1000)
}
loadTime();

addBasketButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        // console.log(event.target.parentElement.previousElementSibling.innerText);
        const newBasketItem = document.createElement('li');
        newBasketItem.classList.add('borderBottom');
        const removeButton = '<button class="removeBtn">Remove Item</button>';
        console.log(button.parentElement.children[1].children);
        newBasketItem.innerHTML = `${button.parentElement.children[0].innerText} - Size: ${event.target.parentElement.children[1].children.size.value} - Quantity: ${event.target.parentElement.children[2].children.qty.value} ${removeButton}`;
        basket.append(newBasketItem);
        const removeBtn = document.querySelectorAll('.removeBtn');
        basketCount++
        basketAmount.innerText = `Basket: ${basketCount}`;

        // size.selectedIndex = -1;
        // qty.selectedIndex = -1;

        removeBtn.forEach((Btn) => {
            Btn.addEventListener('click', (event) => {
                Btn.parentElement.remove();
            })
        })
        // console.log(`Item: ${productName.innerText}, Size: ${size.value} Quantity: ${qty.value}`);
        // console.log(event.srcElement.parentElement.children[0].name, event.srcElement.parentElement.children[0].value);
        // console.log(event.srcElement.parentElement.children[1].name, event.srcElement.parentElement.children[1].value);
    })
});

const basketObj = {};