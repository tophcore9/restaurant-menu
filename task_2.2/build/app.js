"use strict";
let dishes = new Dishes(new Dish('Bruschetta', 'Toasted baguette topped with diced tomatoes, garlic, basil, and olive oil.', 1973, 'appertizers', 'bruschetta.jpg'), new Dish('Stuffed Mushrooms', 'Mushroom caps filled with cream cheese, garlic, spinach, and herbs.', 846, 'appertizers', 'stuffed_mushrooms.jpg'), new Dish('Mozzarella Sticks', 'Toasted baguette topped with diced tomatoes, garlic, basil, and olive oil.', 2331, 'appertizers', 'mozzarella_sticks.jpg'), new Dish('Calamari Fritti', 'Fried squid served with a tangy marinara dipping sauce.', 1371, 'appertizers', 'calamari_fritti.jpg'), new Dish('Tomato Basil Soup', 'Rich tomato soup with fresh basil, served with a slice of grilled cheese.', 1181, 'soups', 'tomato_basil_soup.jpg'), new Dish('Lobster Bisque', 'Creamy soup made with fresh lobster, served with a drizzle of sherry.', 3142, 'soups', 'lobster_bisque.jpg'), new Dish('Caesar Salad', 'Romaine lettuce, croutons, parmesan cheese, and Caesar dressing.', 7163, 'salads', 'caesar_salad.jpg'), new Dish('Greek Salad', 'Mixed greens, feta cheese, Kalamata olives, cucumbers, red onions, and a lemon-oregano dressing.', 1638, 'salads', 'greek_salad.jpg'), new Dish('Waldorf Salad', 'A blend of apples, celery, walnuts, and grapes in a creamy dressing.', 836, 'salads', 'waldorf_salad.jpg'), new Dish('Caprese Salad', 'Fresh mozzarella, tomatoes, basil, olive oil, and balsamic glaze.', 6156, 'salads', 'caprese_salad.jpg'), new Dish('Grilled Ribeye Steak', '12 oz ribeye served with mashed potatoes and steamed vegetables.', 7119, 'entrees', 'grilled_ribeye_steak.jpg'), new Dish('BBQ Ribs', 'Slow-cooked ribs glazed in a smoky BBQ sauce, served with coleslaw and fries.', 4251, 'entrees', 'bbq_ribs.jpg'), new Dish('Lamb Chops', 'Grilled lamb chops served with rosemary potatoes and sautéed spinach.', 6715, 'entrees', 'lamb_chops.jpg'), new Dish('Cheesecake', 'Creamy cheesecake with a graham cracker crust, served plain or with a fruit topping.', 10263, 'desserts', 'cheesecake.jpg'), new Dish('Gelato', 'Italian-style ice cream in various flavors, including chocolate, vanilla, and pistachio.', 9628, 'desserts', 'gelato.jpg'), new Dish('Tiramisu', 'A classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.', 1638, 'desserts', 'tiramisu.jpg'), new Dish('Orange Juice', 'Squeeze the day’s brightness into every sip with our freshly squeezed orange juice.', 1623, 'drinks', 'orange_juice.jpg'), new Dish('Coffee', 'Our freshly brewed coffee is made from premium, hand-picked beans, carefully roasted to bring out a rich, full-bodied flavor.', 17362, 'drinks', 'coffee.jpg'));
dishes.sortBy().renderAll();
// Sort select processing
const sort = document.querySelector('.sort');
sort.addEventListener('change', () => {
    dishes.clearRender();
    dishes.sortBy(sort.options[sort.selectedIndex].value).renderAll();
});
// Filter buttons processing
const filters = document.getElementsByClassName('filter');
[...filters].forEach(filter => {
    filter.addEventListener('click', function (event) {
        const currentFilter = event.target;
        // If we click on the element that already pressed then clear all the filters
        if (filter.classList.contains('filter_active')) {
            filter.classList.remove('filter_active');
            dishes.clearRender();
            dishes.clearChanges().sortBy(sort.options[sort.selectedIndex].value);
            dishes.renderAll();
        }
        // Otherwise filter dishes by their value
        else {
            [...filters].forEach(element => {
                element.classList.remove('filter_active');
            });
            filter.classList.add('filter_active');
            dishes.clearRender();
            dishes.clearChanges().sortBy(sort.options[sort.selectedIndex].value);
            dishes.filterBy(filter.innerHTML.toLowerCase()).renderAll();
        }
    });
});
