export const name = "Wolf's Superior Sandwiches"
export const phone = "484.487.3970"
export const street = "4417 Pennell Rd."
export const city = "Aston"
export const state = "PA"
export const postal = "19104"

export const hours = [
  { days: "Mon-Thurs", open: 11, close: 10 },
  { days: "Fri-Sat", open: 11, close: 11 },
  { days: "Sun", open: 11, close: 9 },
]

export const tagNames = {
  'SR': 'Seeded Roll',
  'GF': 'Gluten Free',
}

export const menuSections = [
  {
    title: "Speciality Sandwiches",
    description: "Likely the reason you're here.",
    items: [
      {
        "name": "The Ashley",
        "description": "panko breaded mozzarella, roma tomatoes, basil aioli, arugula, balsamic reduction",
        "price": 9,
        "tags": ["SR"],
      },
      {
        "name": "Pollo Loco",
        "description": "pulled chicken, chimichurri, cheddar, jalapenos, pickled onions, cilantro",
        "price": 9,
        "tags": ["GF"],
      },
      {
        "name": "The Pacino",
        "description": "grilled chicken breast, hot pepper spread, long hots, roasted Roma tomatoes, basil aioli, arugula, mozzarella and red pepper flakes",
        "price": 9.5,
        "tags": ["GF"],
      },
      {
        "name": "The De Niro",
        "description": "chicken cutlet, roasted peppers, prosciutto di Parma, pesto mayo, arugula, red onion, Aged provolone, balsamic reduction",
        "price": 9.5,
        "tags": ["SR"],
      },
      {
        "name": "The Liotta",
        "description": "Italian sausage, peppers, onions, roasted garlic aioli and fresh mozzarella, oven toasted",
        "price": 9.5,
        "tags": ["SR", "GF"],
      },
      {
        "name": "The Pesci",
        "description": "prosciutto di parma, sopressata, hot capicola, Genoa salami, sliced Roma tomatoes, red onion, aged sharp provolone, red wine vinegar, olive oil, red pepper flakes",
        "price": 9.5,
        "tags": [],
      },
      {
        "name": "The Pickle Rick",
        "description": "bourbon bbq brisket, fried pickles, cooper sharp, garlic aioli",
        "price": 9.5,
        "tags": ["SR", "GF"],
      },
      {
        "name": "Death By Swine",
        "description": "bourbon bbq pork belly, cheddar cheese, pulled pork, smoked gouda cheese sauce, chipotle ranch, spicy pickles, bacon, onion rings and 2 sunny up eggs ",
        "price": 10.5,
        "tags": ["SR", "GF"],
      },
      {
        "name": "The So-Cal",
        "description": "turkey, bacon, avocado, tomato, arugula, mayo, smoked cheddar",
        "price": 9,
        "tags": ["GF"],
      },
      {
        "name": "The Big Memphis",
        "description": "bbq brisket, smoked gouda mac n chez, jalapenos, onion rings, bourbon bbq sauce",
        "price": 9.5,
        "tags": [],
      },
      {
        "name": "The NOLA",
        "description": "Andouille sausage, creole mayo, pickles, red onion",
        "price": 9,
        "tags": ["GF"],
      },
      {
        "name": "The Chi-Town Beef",
        "description": "sliced beef, giardiniera (assorted pickled vegetables and chilies) beef jus and provolone",
        "price": 9,
        "tags": ["GF", "SR"],
      },
      {
        "name": "The Backyard BBQ",
        "description": "buttermilk fried chicken tenders, iceberg lettuce, sliced tomato, black pepper pork belly, avocado and deviled egg mayo",
        "price": 9.5,
        "tags": ["GF"],
      },
      {
        "name": "The Cozumel",
        "description": "citrus braised pork, salsa verde, salsa roja, red onion, queso fresco, cilantro",
        "price": 9,
        "tags": ["GF"],
      },
      {
        "name": "The Corey Matthew's",
        "description": "ham, cooper sharp, iceberg lettuce, tomato, yellow mustard, potato chips",
        "price": 8.5,
        "tags": ["GF"],
      },
      {
        "name": "The Nor-Cal",
        "description": "roast beef, artichoke bruschetta, roasted garlic mayo, swiss, roma tomatoes, red onion, fresh basil",
        "price": 9,
        "tags": ["GF"],
      },
      {
        "name": "The Big Cubano",
        "description": "sliced ham, pulled pork, bacon, salami, swiss, mustard, lettuce, tomato",
        "price": 10,
        "tags": ["GF"],
      },
      {
        "name": "The Thanksgiving Jawn",
        "description": "sliced Turkey, stuffing, cranberry, mayo",
        "price": 9.5,
        "tags": [],
      },
      {
        "name": "The Gritty",
        "description": "a mix of chopped steak and habbersett scrapple, caramelized onions, spicy ketchup, creamy cheese sauce",
        "price": 9,
        "tags": [],
      },
    ],
  },
  {
    title: "Speciality Burgers",
    items: [
      {
        "name": "The G.O.A.T.",
        "description": "baby arugula, balsamic onion jam, goat cheese",
        "price": 10,
        "tags": ['GF']
      },
      {
        "name": "The West Coast BLT",
        "description": "iceberg, tomato, avocado, crispy pork belly, roasted garlic mayo",
        "price": 12,
        "tags": ['GF']
      },
      {
        "name": "The Vesuvius",
        "description": "arugula, prosciutto di parma, balsamic reduction, long hots, aged provolone",
        price: 10,
        "tags": ['GF']
      },
      {
        "name": "The 'merica",
        "description": "lettuce, tomato, american cheese, bacon topped with a hot dog, onion rings and bbq sauce",
        price: 12,
        "tags": [],
      },
      {
        "name": "The Sonny",
        "description": "(only for big mouths) lettuce, tomato, red onion, american cheese, ham, capocolla, sopressata, salami, hot pepper jam",
        price: 12,
        "tags": ['GF']
      },
      {
        "name": "Mac n Chez Burger",
        "description": "smoked gouda mac n cheese, crispy bacon, chipotle ranch",
        price: 10,
        "tags": []
      }
    ],
  },
  {
    "title": "Specialty Hot Dogs",
    "description": "Serves w/ Chips and One Side",
    "items": [
      {
        "name": "The Chronic",
        "description": "honey bbq pulled pork, bacon, cheese sauce, onion rings, banana peppers, sunny up egg",
        "price": 9
      },
      {
        "name": "Cheesesteak Dog",
        "description": "chopped steak, cooper sharp, caramelized onions, sriracha ketchup",
        "price": 9
      },
      {
        "name": "Chili Chez",
        "description": "Howlin Chili, Cheddar Cheese, Pickled Jalapenos, Onion Ring",
        "price": 8
      },
      {
        "name": "The Chi",
        "description": "mustard, onions, relish, pickles, tomato, jalapeno",
        "price": 7
      },
      {
        "name": "The MexiCali",
        "description": "bacon, avocado, onion, chipotle ranch, salsa",
        "price": 7
      }
    ],
  },
  {
    "title": "Speciality Pizza",
    "items": [
      {
        "name": "Upside Down",
        "description": "mozzarella, provolone, pecorino with sauce on top",
        "price": "(sm-$10, lg-$14)",
      },
      {
        "name": "Delco Scrappy*",
        "description": "scrapple, caramelized onions, sriracha ketchup, cheese sauce",
        "price": "(sm-$13.50, lg-$17.5)",
      },
      {
        "name": "Spicy Pina",
        "description": "ham, pineapple, banana pepper, hot sauce",
        "price": "(sm-$13.5, lg-$17.5)",
      },
      {
        "name": "Saucy Taco",
        "description": "seasoned beef, mozzarella, cheddar, red onion, salsa",
        "price": "(sm-$14, lg-$18)",
      },
      {
        "name": "Philly Philly*",
        "description": "chopped steak, caramelized onion, cheese sauce, sriracha ketchup",
        "price": "(sm-$13.5, lg-$17.5)",
      },
      {
        "name": "Buff Chic*",
        "description": "grilled chicken, hot sauce, bleu cheese",
        "price": "(sm-$12.5, lg-$16.5)",
      },
      {
        "name": "Amarillo Smokehouse*",
        "description": "pulled brisket, onion rings, jalapeno, smoked cheddar, bourbon bbq",
        "price": "(sm-$15, lg-$19)",
      },
      {
        "name": "Anti-pie-sto",
        "description": "prosciutto di Parma, soppressata, hot capaccola, Genoa salami, pepperoni, black olives, roma tomato, red onion, arugula, shaved parmesan, oil, vinegar, balsamic reduction",
        "price": "(sm-$16, lg-$20)",
      },
    ]
  },
  {
    "title": "Tacos",
    "description": "Served on White Cord Tortilla",
    "items": [
      {
        "name": "Carnitas",
        "description": "citrus braised pork, onion, queso fresco, salsa roja, salsa verde, cilantro",
        "price": "$8.00",
        "tags": ['GF'],
      },
      {
        "name": "Pollo",
        "description": "pulled chicken, pickled red onion, queso fresco, chimichurri, cilantro",
        "price": "$8.00",
        "tags": ['GF'],
      },
      {
        "name": "Baja",
        "description": "beer battered cod, mango salsa, lettuce, chipotle ranch, cilantro",
        "price": "$9.00",
        "tags": [],
      },
      {
        "name": "Brisket",
        "description": "bbq brisket, smoked gouda cheese sauce, purple cabbage slaw, onions",
        "price": "$9.00",
        "tags": ['GF'],
      },
      {
        "name": "Gringo",
        "description": "ground beef, lettuce, salsa, sour cream, cheddar",
        "price": "$8.00",
        "tags": [],
      },
      {
        "name": "Pork Belly",
        "description": "spice rubbed pork belly, arugula, cucumber apple slaw, cilantro",
        "price": "$9.00",
        "tags": ['GF'],
      },
    ]
  },
  {
    "title": "Appetizers",
    "items": [
      {
        "name": "Chicken Fingers",
        "price": 6,
      },
      {
        "name": "French Fries",
        "price": 4,
      },
      {
        "name": "Chorizo Cheddar Empanadas",
        "price": 7,
      },
      {
        "name": "BBQ Cheddar Ranch Fries",
        "price": 5.5,
      },
      {
        "name": "Mozzarella sticks",
        "price": 5.5,
      },
      {
        "name": "Chili Cheese Fries",
        "price": 7,
      },
      {
        "name": "Smoked gouda mac and cheese bites",
        "price": 5,
      },
      {
        "name": "Cheesesteak Egg Rolls",
        "price": 8,
      },
      {
        "name": "Fried pickles",
        "price": 5,
      },
      {
        "name": "Onion rings",
        "price": 5,
      },
    ],
  },
  {
    "title": "Sides",
    "items": [
      {
        "name": "Pasta Salad",
        "price": 2,
      },
      {
        "name": "Cucumber Apple Slaw	Potato Salad",
        "price": 2,
      },
      {
        "name": "Macaroni Salad",
        "price": 2,
      },
      {
        "name": "Artichoke Bruschetta",
        "price": 2,
      },
      {
        "name": "Tomato Salad",
        "price": 2,
      },
      {
        "name": "Purple Cabbage Slaw",
        "price": 2,
      },
      {
        "name": "Balsamic Onion Jam",
        "price": 2,
      },
      {
        "name": "Bruschetta",
        "price": 2,
      },
    ]
  },
  {
    "title": "Wings",
    "description": "House Wings or Breaded Wing Dings served with Choice of Bleu Cheese or Ranch",
    "items": [
      {
        "name": 10,
        "price": 10,
      },
      {
        "name": 20,
        "price": 18,
      },
      {
        "name": 30,
        "price": 25,
      },
      {
        "name": 50,
        "price": 40,
      },
      {
        "name": 10,
        "price": 75,
      },
    ],
    "footnotes": "Sauces: Hot, Mild, Roasted Garlic Hot, BBQ, Honey BBQ, Bourbon BBQ, Honey Chipotle",
  },
  {
    "title": "Salads",
    "description": "Add Protein $2.50",
    "items": [
      {
        "name": "Chopped Wedge",
        "description": "iceberg, bleu cheese dressing, bleu cheese crumbles, grape tomatoes, crispy bacon, croutons",
        "price": 8,
      },
      {
        "name": "Caesar",
        "description": "romaine, parmesan, croutons, shaved parmesan, grape tomatoes, creamy caesar dressing",
        "price": 7,
      },
      {
        "name": "House",
        "description": "spring mix, grape tomatoes, cucumber, red onion, balsamic vinaigrette, croutons",
        "price": 7,
      },
      {
        "name": "Taco",
        "description": "romaine, tomato, avocado, cheddar cheese, salsa, seasoned beef, tortilla strips, chipotle ranch",
        "price": 9,
      },
      {
        "name": "The Winterfell",
        "description": "arugula, dried cherries, bleu cheese crumbles, red onion, candied walnuts, champagne vinaigrette",
        "price": 9,
      },
      {
        "name": "Caprese",
        "description": "sliced tomato, panko breaded mozzarella, pesto sauce, arugula, red wine vinaigrette, balsamic reduction",
        "price": 9,
      },
      {
        "name": "Aston Spin",
        "description": "baby spinach, grape tomatoes, hard boiled egg, chopped bacon, goat cheese, toasted almonds, red onion, red wine vinaigrette",
        "price": 9,
      },
    ],
  },
]
