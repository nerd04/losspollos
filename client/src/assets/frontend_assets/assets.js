import basket_icon from './basket_icon.png'
import logo from './logo.png'
import header_image from './header-image.jpg'
import search_icon from './search_icon.png'


import menu_1 from './menu_1.png'
import menu_2 from './menu_2.png'
import menu_3 from './menu_3.png'
import menu_4 from './menu_4.png'
import menu_5 from './menu_5.png'
import menu_6 from './menu_6.png'
import menu_7 from './menu_7.png'
import menu_8 from './menu_8.png'


import food_1 from './food_1.jpg'
import food_2 from './food_2.jpg'
import food_3 from './food_3.jpg'
import food_4 from './food_4.png'
import food_5 from './food_5.jpg'
import food_6 from './food_6.jpg'
import food_7 from './food_7.png'
import food_8 from './food_8.png'
import food_9 from './food_9.png'
import food_10 from './food_10.png'
import food_11 from './food_11.png'
import food_12 from './food_12.png'
import food_13 from './food_13.png'
import food_14 from './food_14.png'
import food_15 from './food_15.png'
import food_16 from './food_16.png'
import food_17 from './food_17.png'
import food_18 from './food_18.png'
import food_19 from './food_19.png'
import food_20 from './food_20.png'

import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'


import founder_image from './our_founder.png'

export const fassets = {
  logo,
  basket_icon,
  header_image,
  search_icon,
  rating_starts,
  add_icon_green,
  add_icon_white,
  remove_icon_red,
  app_store,
  play_store,
  linkedin_icon,
  facebook_icon,
  twitter_icon,
  cross_icon,
  selector_icon,
  profile_icon,
  logout_icon,
  bag_icon,
  parcel_icon,
  founder_image
}


export const menu_list = [
  { menu_name: "Chicken Meals", menu_image: menu_1 },
  { menu_name: "Sandwiches", menu_image: menu_2 },
  { menu_name: "Sides", menu_image: menu_3 },
  { menu_name: "Wraps", menu_image: menu_4 },
  { menu_name: "Family Buckets", menu_image: menu_5 },
  { menu_name: "Burgers", menu_image: menu_6 },
  { menu_name: "Desserts", menu_image: menu_7 },
  { menu_name: "Drinks", menu_image: menu_8 },
]


export const food_list = [
  {
    _id: "1",
    name: "Crispy Chicken Combo",
    image: food_1,
    price: 10.99,
    description: "Golden fried chicken served with fries and our signature honey mustard sauce.",
    category: "Chicken Meals",
    rating: 5,
  },
  {
    _id: "2",
    name: "Spicy Chicken Sandwich",
    image: food_2,
    price: 8.49,
    description: "Crispy spicy chicken filet with lettuce, tomato, and Los Pollos sauce.",
    category: "Sandwiches",
    rating: 4,
  },
  {
    _id: "3",
    name: "Classic Chicken Wrap",
    image: food_3,
    price: 7.99,
    description: "Grilled chicken, cheese, lettuce, and sauce wrapped in a warm tortilla.",
    category: "Wraps",
    rating: 4,
  },
  {
    _id: "4",
    name: "Family Feast Bucket",
    image: food_4,
    price: 29.99,
    description: "12 pieces of chicken, 4 fries, 4 biscuits, and your choice of sauces.",
    category: "Family Buckets",
    rating: 5,
  },
  {
    _id: "5",
    name: "Los Pollos Deluxe Burger",
    image: food_5,
    price: 9.99,
    description: "Double chicken patty burger with cheese, pickles, and signature sauce.",
    category: "Burgers",
    rating: 4,
  },
  {
    _id: "6",
    name: "Curly Fries",
    image: food_6,
    price: 3.49,
    description: "Crispy, seasoned curly fries made fresh and golden.",
    category: "Sides",
    rating: 3,
  },
  {
    _id: "7",
    name: "Honey Butter Biscuit",
    image: food_7,
    price: 1.99,
    description: "Warm, flaky biscuit glazed with sweet honey butter.",
    category: "Sides",
    rating: 4,
  },
  {
    _id: "8",
    name: "Cole Slaw",
    image: food_8,
    price: 2.99,
    description: "Creamy, crunchy coleslaw for the perfect side balance.",
    category: "Sides",
    rating: 3,
  },
  {
    _id: "9",
    name: "Pollos Lemonade",
    image: food_9,
    price: 2.49,
    description: "Fresh-squeezed lemonade with a touch of honey.",
    category: "Drinks",
    rating: 5,
  },
  {
    _id: "10",
    name: "Gus’s Iced Coffee",
    image: food_10,
    price: 3.29,
    description: "Smooth cold brew coffee sweetened with vanilla cream.",
    category: "Drinks",
    rating: 4,
  },
  {
    _id: "11",
    name: "Tres Leches Cake",
    image: food_11,
    price: 4.99,
    description: "Soft sponge cake soaked in three milks, topped with whipped cream.",
    category: "Desserts",
    rating: 5,
  },
  {
    _id: "12",
    name: "Chocolate Churros",
    image: food_12,
    price: 3.99,
    description: "Warm cinnamon churros filled with rich chocolate cream.",
    category: "Desserts",
    rating: 4,
  },
  {
    _id: "13",
    name: "Southwestern Chicken Wrap",
    image: food_13,
    price: 8.49,
    description: "Spicy grilled chicken, chipotle mayo, lettuce, and cheese wrap.",
    category: "Wraps",
    rating: 4,
  },
  {
    _id: "14",
    name: "Spicy Chicken Nuggets",
    image: food_14,
    price: 6.99,
    description: "Crunchy chicken bites with a kick of spice and dipping sauce.",
    category: "Chicken Meals",
    rating: 4,
  },
  {
    _id: "15",
    name: "Fried Chicken Tenders",
    image: food_15,
    price: 9.29,
    description: "Five juicy tenders with honey mustard and ranch.",
    category: "Chicken Meals",
    rating: 5,
  },
  {
    _id: "16",
    name: "Los Pollos Club Sandwich",
    image: food_16,
    price: 9.49,
    description: "Grilled chicken, lettuce, tomato, and bacon on toasted bread.",
    category: "Sandwiches",
    rating: 5,
  },
  {
    _id: "17",
    name: "Cheesy Fries",
    image: food_17,
    price: 4.49,
    description: "Loaded fries with melted cheddar and creamy ranch drizzle.",
    category: "Sides",
    rating: 4,
  },
  {
    _id: "18",
    name: "Pollos Deluxe Bucket",
    image: food_18,
    price: 34.99,
    description: "16 pieces of crispy chicken, 4 large sides, and 4 biscuits.",
    category: "Family Buckets",
    rating: 5,
  },
  {
    _id: "19",
    name: "Pollos Sundae",
    image: food_19,
    price: 3.49,
    description: "Vanilla ice cream with caramel and nuts — Gus approved!",
    category: "Desserts",
    rating: 3,
  },
  {
    _id: "20",
    name: "Spicy Chicken Burger",
    image: food_20,
    price: 9.29,
    description: "Crispy spicy chicken, lettuce, tomato, and spicy mayo on a brioche bun.",
    category: "Burgers",
    rating: 4,
  },
]
