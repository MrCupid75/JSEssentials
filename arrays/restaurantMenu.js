const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const updateHTMLArray = (array, id) => {
    array.forEach((item, index) => {
        let paraElement = document.createElement("P")
        paraElement.innerHTML = `Main ${index + 1}: ${item}`
        document.getElementById(id).appendChild(paraElement);
    });
}

updateHTMLArray(dessertMenu, "dessertMenuItems")