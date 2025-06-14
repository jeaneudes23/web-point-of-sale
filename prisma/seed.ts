import prisma from "@/lib/prisma"
import { Prisma } from "@prisma/client"

const products: Prisma.ProductCreateInput[] = [
  {
    name: "Burger",
    price: 15,
    image: "https://www.foodandwine.com/thmb/XE8ubzwObCIgMw7qJ9CsqUZocNM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSG-Smash-Burger-FT-RECIPE0124-d9682401f3554ef683e24311abdf342b.jpg"
  },
  {
    name: "Pizza",
    price: 20,
    image: "https://ooni.com/cdn/shop/articles/20220211142347-margherita-9920_ba86be55-674e-4f35-8094-2067ab41a671.jpg?v=1737104576&width=1080"
  },
  {
    name: "Sushi",
    price: 25,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz17mDyBBO38Q00BUjSCjDI5rvr_-Qj-5lGw&s"
  },
  {
    name: "Pasta",
    price: 18,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz17mDyBBO38Q00BUjSCjDI5rvr_-Qj-5lGw&s"
  },
  {
    name: "Salad",
    price: 12,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz17mDyBBO38Q00BUjSCjDI5rvr_-Qj-5lGw&s"
  },
  {
    name: "Steak",
    price: 30,
    image: "https://hips.hearstapps.com/hmg-prod/images/how-to-cook-steak-in-the-oven-index-66a3eda7b9f52.jpg?crop=0.502xw:1.00xh;0.147xw,0&resize=1200:*"
  },
  {
    name: "Tacos",
    price: 14,
    image: "https://hips.hearstapps.com/hmg-prod/images/how-to-cook-steak-in-the-oven-index-66a3eda7b9f52.jpg?crop=0.502xw:1.00xh;0.147xw,0&resize=1200:*"
  },
  {
    name: "Ice Cream",
    price: 8,
    image: "https://hips.hearstapps.com/hmg-prod/images/how-to-cook-steak-in-the-oven-index-66a3eda7b9f52.jpg?crop=0.502xw:1.00xh;0.147xw,0&resize=1200:*"
  },
  {
    name: "Sandwich",
    price: 10,
    image: "https://hips.hearstapps.com/hmg-prod/images/how-to-cook-steak-in-the-oven-index-66a3eda7b9f52.jpg?crop=0.502xw:1.00xh;0.147xw,0&resize=1200:*"
  },
  {
    name: "Fried Chicken",
    price: 16,
    image: "https://www.allrecipes.com/thmb/WSSoRAz2IygrMPkiJxHPbt9gqMg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8635-southern-fried-chicken-ddmfs_4x3-90736ab31a7a4bb59eb04e2380ccebe7.jpg"
  }
]

export async function main() {
  await prisma.product.createMany({
    data: products
  })

}

main()