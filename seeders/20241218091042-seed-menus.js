'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Menus', [
      {
        name: 'Iceberg Wedge Salad with House Cured Bacon – tomato salsa gorgonzola',
        type: 'appetizers',
        price: 7.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sautéed Shredded Brussels Sprouts – bacon hazelnuts gorgonzola',
        type: 'appetizers',
        price: 6.95,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Kale Salad – parmesan crisp corn radish garlic-lemon vinaigrette',
        type: 'appetizers',
        price: 7.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pecan Crusted Utah Goat Cheese with Basil-Mint Pesto - grilled tomato salsa crostini',
        type: 'appetizers',
        price: 6.95,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Chicken and Cabbage Eggrolls hot & sour dipping sauce',
        type: 'appetizers',
        price: 6.95,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Farfalle Pasta with Braised Pork in Tomato Cream – capers butternut squash kale',
        type: 'entrees',
        price: 12.95,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Stout Braised Bratwusrt - horseradish mashed potatoes roasted root veggies grilled onion',
        type: 'entrees',
        price: 13.95,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Salmon & Crispy Tofu in Yellow Curry Sauce – vegetable sauté golden raisin chutney',
        type: 'entrees',
        price: 15.95,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sesame Shrimp – udon noodles ramen broth shiitake mushrooms bean sprouts scallions',
        type: 'entrees',
        price: 13.95,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Served with choice of house pasta salad, green salad, or fresh fruit. For an additional $1.50, you can “upgrade” (by substituting) to ½ pasta salad of the day, French onion soup or soup of the day.',
        type: 'sandwiches',
        price: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'half sandwich',
        type: 'cold',
        price: 7.95,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'full sandwich',
        type: 'cold',
        price: 9.25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Turkey & Avocado – with tomato',
        type: 'cold',
        price: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pub Club – turkey, bacon. lettuce, tomato',
        type: 'cold',
        price: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Rare Roast Beef & Swiss – sweet-hot mustard, lettuce, red onion',
        type: 'cold',
        price: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Veggie – pepper jack, avocado, sprout, tomato',
        type: 'cold',
        price: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Southwest Chicken Breast Grilled Onion, Poblano Pepper, Tomato, Lettuce, Jack Cheese',
        type: 'hot',
        price: 9.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Portobello Fresh Mozzarella Caramelized Onion, Roasted Pepper, Tomato, Field Greens, Basil Aioli',
        type: 'hot',
        price: 9.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Chipotle BBQ Pork Sandwich with Pickled Jalapeño Slaw',
        type: 'hot',
        price: 9.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bacon Burger* Swiss, Lettuce, Tomato',
        type: 'hot',
        price: 9.25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mexi Burger* Pepper Relish, Pepper Jack, Tomato, Lettuce, Guacamole',
        type: 'hot',
        price: 9.25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Herb Marinated Top Sirloin* Crimini Mushrooms, Caramelized Onion, Gorgonzola, Basil Aioli, Served Open Faced on Fococcia',
        type: 'hot',
        price: 10.95,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Roast Beef with Ancho Au Jus Jack Cheese, Grilled Onions, Served on Crumb Bros. Baguette',
        type: 'hot',
        price: 9.75,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Blackened Catfish Creole Peppers & Onions, Fresh Herb Aioli, Served on house made Sourdough',
        type: 'hot',
        price: 9.75,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'French Onion or Soup of the Day',
        type: 'soup_salad_combos',
        price: 4.95,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'French Onion or Soup of the Day Combos',
        type: 'soup_salad_combos',
        price: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'with small green salad, fresh fruit or house pasta',
        type: 'soup_salad_combos',
        price: 7.25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'with half pasta of the day',
        type: 'soup_salad_combos',
        price: 8.75,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Served with red rice, black beans, grilled tomato salad, choice of corn or flour tortillas',
        type: 'fajitas',
        price: 10.95,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Chicken Onions, Poblano and Bell Peppers, Guacamole, Two Salsas',
        type: 'fajitas',
        price: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sirloin Steak, Onions, Poblano and Bell Peppers, Carrots, Onion, Guacamole, Two Salsas',
        type: 'fajitas',
        price: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Served with red rice, black beans, corn & romaine salad, tortilla chips',
        type: 'tacos',
        price: 9.95,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Beer Battered Fish with Jalapeño Remoulade, Roasted Salsa, Cabbage',
        type: 'tacos',
        price: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Carne Asada (marinated sirloin) with Guacamole, Tomatillo Salsa',
        type: 'tacos',
        price: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Citrus Marinated Chicken with Guacamole, Tomatillo Salsa',
        type: 'tacos',
        price: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Grilled Veggie with Zucchini, Yellow Squash, Bell Peppers, Onion, Guacamole, Tomatillo Salsa',
        type: 'tacos',
        price: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'with Southwestern Succotash, Black Beans with Chipotle Crema',
        type: 'enchiladas',
        price: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Choice of Beef, Chicken, Cheese or Veggie',
        type: 'enchiladas',
        price: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'uno',
        type: 'enchiladas',
        price: 8.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'dos',
        type: 'enchiladas',
        price: 9.95,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'tres',
        type: 'enchiladas',
        price: 11.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Chili Relleno Stuffed with Jack Cheese & Corn Glazed Yam, Chayote Squash Succotash, Red Chili Sauce',
        type: 'enchiladas',
        price: 9.95,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pepita Crusted Salmon with Chipotle Glaze – chevre whipped yams, jicama slaw, tomatillo sauce',
        type: 'enchiladas',
        price: 10.95,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bacon, Swiss, Mushroom, Zucchini and Mushroom Quiche Choice of Fresh Fruit or Green Salad',
        type: 'quiche',
        price: 8.95,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Grilled Red Trout Lentils, Tomatoes, Cukes, Green Beans, Red Bells, Almonds, Sundried Tomato Vinaigrette',
        type: 'green_salads',
        price: 10.95,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Smoked Turkey Cheese Tortellini, Bacon, Tomato, Cucumber, Egg, Black Bean-Corn Salsa, Avocado',
        type: 'green_salads',
        price: 9.95,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Asian Grilled Chicken Snow Peas, Carrot Slaw, Red Bells, Water Chestnut, Peanuts, Baby Corn, Cilantro, Cukes, Spicy Peanut Dressing',
        type: 'green_salads',
        price: 10.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Southwest Grilled Chicken Tomato, Guacamole, pepitas, Jicama, Corn & Black Bean Salsa, Orange Wedges, Spicy Citrus Vinaigrette',
        type: 'green_salads',
        price: 10.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mediterranean Italian Sausage, Artichoke Hearts, Green Beans, Roma Tomato, Kalamatas, Red Onion, Cucumber, Croutons, Parmesan, Fresh Mozzarella, Gorgonzola Vinaigrette',
        type: 'green_salads',
        price: 9.95,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Grilled Salmon Artichoke tapenade, shredded kale, corn, radish, parmesan crisps',
        type: 'green_salads',
        price: 11.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Menus', null, {});
  }
};
