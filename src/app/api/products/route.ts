import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){

const products = [
  {
    id: 1,
    name: 'Basic T-shirt',
    price: '$19.99',
    image: 'https://placehold.co/300x300',
  },
  {
    id: 2,
    name: 'Cool Sneakers',
    price: '$49.99',
    image: 'https://placehold.co/300x300',
  },
  {
    id: 3,
    name: 'Stylish Backpack',
    price: '$39.99',
    image: 'https://placehold.co/300x300',
  },
]




    return NextResponse.json({
        data: products
    })
}