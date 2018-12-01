import { getPath } from './helpers'

export const domain = 'https://wolfssuperiorsandwiches.com'
export const name = "Wolf's Superior Sandwiches"
export const phone = "484-480-3181"
export const phone2 = "484-480-3775"
export const street = "4417 Pennell Rd."
export const city = "Aston"
export const state = "PA"
export const postal = "19104"

export const networks = [
  {
    "name": "Facebook",
    "url": "https://www.facebook.com/WolfsSuperiorSandwiches",
    "text": "Like Us on Facebook!",
  },
  {
    "name": "Twitter",
    "url": "https://twitter.com/wolfssuperiorsandwiches",
    "text": "Follow Us on Twitter",
  },
]
export const hours = [
  { days: "Mon-Thurs", open: 11, close: 10 },
  { days: "Fri-Sat", open: 11, close: 11 },
  { days: "Sun", open: 11, close: 9 },
]

export const tagNames = {
  'SR': 'On A Seeded Roll',
  'GF': 'Available Gluten Free',
  'W': 'White',
  'VEG': 'Vegetarian',
}

export const menuSectionOrder = [
  "Speciality Sandwiches",
  "Speciality Burgers",
  "Specialty Hot Dogs",
  "Speciality Pizza",
  "Tacos",
  "Appetizers",
  "Sides",
  "Salads",
  "Wings",
  "Soups",
  "Pizza",
  "Premium Grilled Sandwiches",
  "Hoagies & Sandwiches",
]

export const menuSections = [
  {
    "title": "Speciality Sandwiches",
    "description": "Likely the reason you're here.",
    "items": [
      {
        "name": "The Gritty",
        "description": "a mix of chopped steak and habbersett scrapple, caramelized onions, spicy ketchup, creamy cheese sauce",
        "price": 10,
        "tags": [],
      },
      {
        "name": "The Ashley",
        "description": "panko breaded mozzarella, roma tomatoes, basil aioli, arugula, balsamic reduction",
        "price": 9,
        "tags": ["SR", "VEG"],
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
        "tags": ['GF'],
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
    ],
  },
  {
    "title": "Speciality Burgers",
    "description": "All Burgers are Half Pound in Weight and Certified Wagyu Beef. Served with Chips and One Side",
    "items": [
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
    "description": "Served with Chips and One Side",
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
        "name": "The Chi-Town",
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
        "tags": ["VEG"],
        "price": [
          { "label": "Sm", "price": 10 },
          { "label": "Lg", "price": 14 },
        ],
      },
      {
        "name": "Delco Scrappy",
        "description": "scrapple, caramelized onions, sriracha ketchup, cheese sauce",
        "price": [
          { "label": "Sm", "price": 13.5 },
          { "label": "Lg", "price": 17.5 },
        ],
        "tags": ["W"],
      },
      {
        "name": "Spicy Pina",
        "description": "ham, pineapple, banana pepper, hot sauce",
        "price": [
          { "label": "Sm", "price": 13.5 },
          { "label": "Lg", "price": 17.5 },
        ],
      },
      {
        "name": "Saucy Taco",
        "description": "seasoned beef, mozzarella, cheddar, red onion, salsa",
        "price": [
          { "label": "Sm", "price": 14 },
          { "label": "Lg", "price": 18 },
        ],
      },
      {
        "name": "Philly Philly",
        "description": "chopped steak, caramelized onion, cheese sauce, sriracha ketchup",
        "price": [
          { "label": "Sm", "price": 13.5 },
          { "label": "Lg", "price": 17.5 },
        ],
      },
      {
        "name": "Buff Chic",
        "description": "grilled chicken, hot sauce, bleu cheese",
        "price": [
          { "label": "Sm", "price": 12.5 },
          { "label": "Lg", "price": 16.5 },
        ],
        "tags": ["W"],
      },
      {
        "name": "Amarillo Smokehouse",
        "description": "pulled brisket, onion rings, jalapeno, smoked cheddar, bourbon bbq",
        "price": [
          { "label": "Sm", "price": 15 },
          { "label": "Lg", "price": 19 },
        ],
        "tags": ["W"],
      },
      {
        "name": "Anti-pie-sto",
        "description": "prosciutto di Parma, soppressata, hot capaccola, Genoa salami, pepperoni, black olives, roma tomato, red onion, arugula, shaved parmesan, oil, vinegar, balsamic reduction",
        "price": [
          { "label": "Sm", "price": 16 },
          { "label": "Lg", "price": 20 },
        ],
      },
    ]
  },
  {
    "title": "Tacos",
    "description": "Served on White Corn Tortilla",
    "items": [
      {
        "name": "Carnitas",
        "description": "citrus braised pork, onion, queso fresco, salsa roja, salsa verde, cilantro",
        "price": 8,
        "tags": ['GF'],
      },
      {
        "name": "Pollo",
        "description": "pulled chicken, pickled red onion, queso fresco, chimichurri, cilantro",
        "price": 8,
        "tags": ['GF'],
      },
      {
        "name": "Baja",
        "description": "beer battered cod, mango salsa, lettuce, chipotle ranch, cilantro",
        "price": 9,
        "tags": [],
      },
      {
        "name": "Brisket",
        "description": "bbq brisket, smoked gouda cheese sauce, purple cabbage slaw, onions",
        "price": 9,
        "tags": ['GF'],
      },
      {
        "name": "Gringo",
        "description": "ground beef, lettuce, salsa, sour cream, cheddar",
        "price": 8,
        "tags": [],
      },
      {
        "name": "Pork Belly",
        "description": "spice rubbed pork belly, arugula, cucumber apple slaw, cilantro",
        "price": 9,
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
        "tags": ["VEG"],
      },
      {
        "name": "Chorizo Cheddar Empanadas",
        "price": 7,
      },
      {
        "name": "BBQ Cheddar Ranch Fries",
        "price": 5.5,
        "tags": ["VEG"],
      },
      {
        "name": "Mozzarella sticks",
        "price": 5.5,
        "tags": ["VEG"],
      },
      {
        "name": "Chili Cheese Fries",
        "price": 7,
      },
      {
        "name": "Cheese Fries",
        "price": 5,
        "tags": ["VEG"],
      },
      {
        "name": "Smoked Gouda Mac and Cheese Bites",
        "price": 5,
        "tags": ["VEG"],
      },
      {
        "name": "Cheesesteak Egg Rolls",
        "price": 8,
      },
      {
        "name": "Fried Pickles",
        "price": 5,
        "tags": ["VEG"],
      },
      {
        "name": "Onion rings",
        "price": 5,
        "tags": ["VEG"],
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
        "tags": ["VEG"],
      },
      {
        "name": "Macaroni Salad",
        "price": 2,
        "tags": ["VEG"],
      },
      {
        "name": "Artichoke Bruschetta",
        "price": 2,
        "tags": ["VEG"],
      },
      {
        "name": "Tomato Salad",
        "price": 2,
        "tags": ["VEG"],
      },
      {
        "name": "Purple Cabbage Slaw",
        "price": 2,
        "tags": ["VEG"],
      },
      {
        "name": "Balsamic Onion Jam",
        "price": 2,
        "tags": ["VEG"],
      },
      {
        "name": "Bruschetta",
        "price": 2,
        "tags": ["VEG"],
      },
    ]
  },
  {
    "title": "Wings",
    "description": "House Wings or Breaded Wing Dings served with Choice of Bleu Cheese or Ranch. Sauces: Hot, Mild, Roasted Garlic Hot, BBQ, Honey BBQ, Bourbon BBQ, Honey Chipotle.",
    "items": [
      {
        "name": "10 Wings",
        "price": 10,
      },
      {
        "name": "20 Wings",
        "price": 18,
      },
      {
        "name": "30 Wings",
        "price": 25,
      },
      {
        "name": "50 Wings",
        "price": 40,
      },
      {
        "name": "100 Wings",
        "price": 75,
      },
    ],
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
        "tags": ["VEG"],
      },
      {
        "name": "House",
        "description": "spring mix, grape tomatoes, cucumber, red onion, balsamic vinaigrette, croutons",
        "price": 7,
        "tags": ["VEG"],
      },
      {
        "name": "Taco",
        "description": "romaine, tomato, avocado, cheddar cheese, salsa, seasoned beef, tortilla strips, chipotle ranch",
        "price": 9,
        "tags": ["VEG"],
      },
      {
        "name": "The Winterfell",
        "description": "arugula, dried cherries, bleu cheese crumbles, red onion, candied walnuts, champagne vinaigrette",
        "price": 9,
        "tags": ["VEG"],
      },
      {
        "name": "Caprese",
        "description": "sliced tomato, panko breaded mozzarella, pesto sauce, arugula, red wine vinaigrette, balsamic reduction",
        "price": 9,
        "tags": ["VEG"],
      },
      {
        "name": "Aston Spin",
        "description": "baby spinach, grape tomatoes, hard boiled egg, chopped bacon, goat cheese, toasted almonds, red onion, red wine vinaigrette",
        "price": 9,
      },
    ],
  },
  {
    "title": "Soups",
    "items": [
      {
        "name": "Howling Chorizo Beef Chili",
        "price": [
          { "label": "Cup", "price": 4 },
          { "label": "Pint", "price": 8 },
          { "label": "Quart", "price": 12 },
        ]
      },
      {
        "name": "Mushroom Bisque",
        "price": [
          { "label": "Cup", "price": 4 },
          { "label": "Pint", "price": 8 },
          { "label": "Quart", "price": 12 },
        ],
        "tags": ["GF", "VEG"],
      },
      {
        "name": "Baked Potato",
        "price": [
          { "label": "Cup", "price": 4 },
          { "label": "Pint", "price": 8 },
          { "label": "Quart", "price": 12 },
        ],
        "tags": ["GF", "VEG"],
      },
      {
        "name": "Roasted Tomato & Carrot",
        "price": [
          { "label": "Cup", "price": 4 },
          { "label": "Pint", "price": 8 },
          { "label": "Quart", "price": 12 },
        ],
        "tags": ["GF", "VEG"],
      },
    ]
  },
  {
    "title": "Pizza",
    "items": [
      {
        "name": "Small (13 inch)",
        "price": 10,
      },
      {
        "name": "Large (16 inch)",
        "price": 14,
      },
      {
        "name": "Meat Toppings",
        "price": "+$2.00 Each",
        "description": "Pepperoni, sausage, ham, pulled pork, bacon, pulled chicken, chicken cutlet, grilled chicken, salami, seasoned beef, chopped steak, anchovies, cooked scrapple",
      },
      {
        "name": "Veggie Toppings",
        "price": "+$2.00 Each",
        "description": "Mushrooms, onions, green pepper, roasted red peppers, jalapenos, banana peppers, tomatoes, spinach, arugula, pineapple, black olives, long hots, caramelized onions, artichoke, spinach, sweet peppers",
      },
      {
        "name": "Premium Toppings",
        "price": "+$2.75 Each",
        "description": "Prosciutto di Parma, andouille sausage, sopressata, pulled brisket, chorizo, capocolla",
      },
      {
        "name": "On Top Sauces",
        "price": "",
        "description": "Hot sauce, bbq, bourbon bbq, honey bbq, smoked gouda cheese sauce, cheese sauce, ranch, chipotle ranch, salsa verde, salsa roja, pesto mayo, sriracha ketchup, fresh garlic",
      },
      {
        "name": "Cheeses",
        "price": "",
        "description": "Mozzarella, fresh mozzarella, cheddar, smoked cheddar, provolone, american, queso fresco, shaved parmesan, pecorino, bleu cheese, aged provolone, cooper sharp, riccotta",
      },
    ],
  },
  {
    "title": "Hoagies & Sandwiches",
    "items": [
      {
        "name": "Italian",
        "price": 8,
      },
      {
        "name": "Turkey & Cheese",
        "price": 8,
      },
      {
        "name": "Roast Beef",
        "price": 8,
      },
      {
        "name": "Tuna Salad",
        "price": 8,
      },
      {
        "name": "Club Sandwich",
        "price": 7.5,
      },
      {
        "name": "Chicken Salad",
        "price": 8,
      },
      {
        "name": "BLT",
        "price": 7.5,
      },
      {
        "name": "Cheese Hoagie",
        "price": 8,
        "tags": ["VEG"],
      },
      {
        "name": "Ham & Cheese",
        "price": 8,
      },
    ],
  },
  {
    "title": "Premium Grilled Sandwiches",
    "items": [
      {
        "name": "Cheesesteak",
        "price": 9,
      },
      {
        "name": "Chicken Steak",
        "price": 9,
      },
      {
        "name": "Pizzasteak",
        "price": 9,
      },
      {
        "name": "Cheeseburger",
        "price": 9,
      },
      {
        "name": "Grilled Cheese",
        "price": 7,
      },
      {
        "name": "Buffalo Chicken Steak",
        "price": 9,
      },
      {
        "name": "Grilled Ham & Cheese",
        "price": 7.5,
      },
      {
        "name": "Hamburger",
        "price": 8,
      },
    ],
  }
]

export const businessJson = {
  "@context": "http://schema.org",
  "@type": "Restaurant",
  "name": "Wolfs Superior Sandwiches",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4417 Pennell Rd.",
    "addressLocality": "Aston",
    "addressRegion": "PA",
    "postalCode": "19104"
  },
  "telePhone": "484-487-3970",
  "image": getPath('/static/wolfie.png'),
  "url": getPath(),
  "paymentAccepted": [ "cash", "check", "credit card" ],
  "openingHours": "Mo 11:00-22:00,Tu 11:00-22:00,We 11:00-22:00,Th 11:00-22:00,Fr 11:00-23:00,Sa 11:00-23:00,Su 11:00-21:00",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
      ],
      "opens": "11:00",
      "closes": "22:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Friday",
        "Saturday",
      ],
      "opens": "11:00",
      "closes": "23:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Sunday",
      ],
      "opens": "11:00",
      "closes": "21:00"
    }
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "39.857610",
    "longitude": "-75.427063"
  },
  "priceRange":"$"
}
