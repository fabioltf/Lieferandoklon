"use strict";

const appetizers = [
  {
    title: "Crispy Calamari",
    description:
      "Golden fried calamari served with a side of zesty marinara sauce and lemon wedges.",
    ingredients: "Calamari, Flour, Salt, Pepper, Marinara sauce, Lemon wedges",
    price: 8.99,
    category: "Appetizers",
  },
  {
    title: "Buffalo Wings",
    description:
      "Spicy buffalo wings served with celery sticks and blue cheese dressing.",
    ingredients:
      "Chicken wings,Buffalo sauce,Celery sticks, Blue cheese dressing",
    price: 9.99,
    category: "Appetizers",
  },
  {
    title: "Loaded Nachos",
    description:
      "Crispy tortilla chips topped with melted cheese, jalapeños, sour cream, guacamole, and pico de gallo.",
    ingredients:
      "Tortilla chips, Cheese, Jalapeños, Sour cream, Guacamole, Pico de gallo",
    price: 7.99,
    category: "Appetizers",
  },
  {
    title: "Garlic Parmesan Fries",
    description:
      "Crispy fries tossed in garlic and Parmesan cheese, served with a side of garlic aioli.",
    ingredients: "Fries, Garlic, Parmesan cheese, Garlic aioli",
    price: 6.49,
    category: "Appetizers",
  },
  {
    title: "Stuffed Jalapeños",
    description:
      "Jalapeño peppers stuffed with cream cheese and wrapped in crispy bacon.",
    ingredients: "Jalapeños, Cream cheese, Bacon",
    price: 7.49,
    category: "Appetizers",
  },
];

const burgers = [
  {
    title: "Classic Cheeseburger",
    description:
      "A timeless favorite with a juicy beef patty, melted cheddar cheese, fresh lettuce, ripe tomatoes, and our signature house sauce.",
    ingredients:
      "Beef patty, Cheddar cheese, Lettuce, Tomatoes, House sauce, Brioche",
    price: 10.99,
    category: "Burgers",
  },
  {
    title: "BBQ Bacon Burger",
    description:
      "A smoky delight featuring a beef patty topped with crispy bacon, sharp cheddar cheese, onion rings, and tangy BBQ sauce.",
    ingredients:
      "Beef patty, Bacon, Cheddar cheese, Onion rings, BBQ sauce, Sesame seed bun",
    price: 12.49,
    category: "Burgers",
  },
  {
    title: "Mushroom Swiss Burger",
    description:
      "A gourmet burger with a beef patty, sautéed mushrooms, Swiss cheese, caramelized onions, and a garlic aioli spread.",
    ingredients:
      "Beef patty, Sautéed mushrooms, Swiss cheese, Caramelized onions, Garlic aioli, Whole grain bun",
    price: 11.99,
    category: "Burgers",
  },
  {
    title: "Spicy Jalapeño Burger",
    description:
      "For those who like it hot: a beef patty with pepper jack cheese, pickled jalapeños, spicy mayo, and fresh avocado slices.",
    ingredients:
      "Beef patty, Pepper jack cheese, Pickled jalapeños, Spicy mayo, Avocado slices, Ciabatta bun",
    price: 11.49,
    category: "Burgers",
  },
  {
    title: "Veggie Delight Burger",
    description:
      "A vegetarian option with a grilled portobello mushroom cap, goat cheese, roasted red peppers, arugula, and basil pesto.",
    ingredients:
      "Portobello mushroom, Goat cheese, Roasted red peppers, Arugula, Basil pesto, Whole wheat bun",
    price: 9.99,
    category: "Burgers",
  },
];

const nuggets = [
  {
    title: "Classic Chicken Nuggets",
    description:
      "Golden and crispy chicken nuggets served with a side of honey mustard dipping sauce.",
    ingredients:
      "Chicken breast, Bread crumbs, Egg, Salt, Pepper, Honey mustard",
    price: 6.99,
    category: "Nuggets",
  },
  {
    title: "Spicy Chicken Nuggets",
    description:
      "Spicy chicken nuggets with a crunchy coating, served with a side of ranch dressing.",
    ingredients:
      "Chicken breast, Spicy bread crumbs, Egg, Cayenne pepper, Salt, Ranch dressing",
    price: 7.49,
    category: "Nuggets",
  },
  {
    title: "BBQ Chicken Nuggets",
    description:
      "Chicken nuggets coated in tangy BBQ sauce, served with extra sauce for dipping.",
    ingredients: "Chicken breast, Bread crumbs, Egg, Salt, Pepper, BBQ sauce",
    price: 7.99,
    category: "Nuggets",
  },
  {
    title: "Parmesan Herb Nuggets",
    description:
      "Chicken nuggets coated with Parmesan cheese and Italian herbs, served with marinara sauce.",
    ingredients:
      "Chicken breast, Bread crumbs, Parmesan cheese, Italian herbs, Egg, Marinara sauce",
    price: 7.99,
    category: "Nuggets",
  },
  {
    title: "Vegan Nuggets",
    description:
      "Plant-based nuggets made from soy protein, served with a side of vegan sriracha mayo.",
    ingredients:
      "Soy protein, Bread crumbs, Flaxseed meal, Salt, Pepper, Sriracha mayo",
    price: 8.49,
    category: "Nuggets",
  },
];

const salad = [
  {
    title: "Asian Sesame Chicken Salad",
    description:
      "Grilled chicken, mixed greens, mandarin oranges, sliced almonds, and crispy wontons, tossed in an Asian sesame dressing.",
    ingredients:
      "Grilled chicken, Mixed greens, Mandarin oranges, Sliced almonds, Crispy wontons, Asian sesame dressing",
    price: 10.49,
    category: "Salad",
  },
  {
    title: "Cobb Salad",
    description:
      "A hearty salad with grilled chicken, avocado, bacon, hard-boiled egg, blue cheese, and a tangy vinaigrette.",
    ingredients:
      "Grilled chicken, Avocado, Bacon, Hard-boiled egg, Blue cheese, Mixed greens, Vinaigrette",
    price: 10.99,
    category: "Salad",
  },
  {
    title: "Spinach & Strawberry Salad",
    description:
      "Fresh spinach and sweet strawberries with goat cheese, candied pecans, and a balsamic vinaigrette.",
    ingredients:
      "Spinach, Strawberries, Goat cheese, Candied pecans, Balsamic vinaigrette",
    price: 9.49,
    category: "Salad",
  },
  {
    title: "Quinoa Avocado Salad",
    description:
      "A nutritious salad with quinoa, avocado, cherry tomatoes, corn, black beans, and a lime cilantro dressing.",
    ingredients:
      "Quinoa, Avocado, Cherry tomatoes, Corn, Black beans, Lime cilantro dressing",
    price: 9.99,
    category: "Salad",
  },
  {
    title: "Kale and Quinoa Salad",
    description:
      "A healthy blend of kale, quinoa, cranberries, almonds, and feta cheese, tossed in a lemon tahini dressing.",
    ingredients:
      "Kale, Quinoa, Cranberries, Almonds, Feta cheese, Lemon tahini dressing",
    price: 9.99,
    category: "Salad",
  },
];

const beer = [
  {
    title: "Hazy New England IPA",
    description:
      "A juicy and hazy IPA with notes of tropical fruit and citrus, brewed with oats and wheat for a smooth mouthfeel.",
    ingredients: "Water, Barley, Wheat, Oats, Hops, Yeast",
    price: 6.99,
    category: "Beer",
  },
  {
    title: "West Coast IPA",
    description:
      "A classic West Coast IPA featuring bold hop flavors and aromas of pine and citrus, with a crisp, dry finish.",
    ingredients: "Water, Barley, Hops, Yeast",
    price: 6.49,
    category: "Beer",
  },
  {
    title: "Double IPA",
    description:
      "An intensely hoppy Double IPA with a higher alcohol content and a complex blend of tropical fruit, pine, and floral notes.",
    ingredients: "Water, Barley, Hops, Yeast",
    price: 7.99,
    category: "Beer",
  },
  {
    title: "Session IPA",
    description:
      "A lighter, more sessionable IPA with a balanced hop profile and lower alcohol content, perfect for enjoying multiple pints.",
    ingredients: "Water, Barley, Hops, Yeast",
    price: 5.99,
    category: "Beer",
  },
  {
    title: "Citrus IPA",
    description:
      "A refreshing IPA brewed with real citrus fruits, offering a zesty, tangy twist on the classic IPA flavor.",
    ingredients: "Water, Barley, Hops, Yeast, Citrus fruits",
    price: 6.99,
    category: "Beer",
  },
];
