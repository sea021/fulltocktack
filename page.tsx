import Head from 'next/head'

const products = [
  {
    id: 1,
    name: 'Basic T-shirt',
    price: '$19.99',
    image: 'https://media.studio7thailand.com/154746/iPhone_16_Pro_Desert_Titanium_PDP_Image_Position_1a_Desert_Titanium_Color__TH-TH-square_medium.png',
  },
  {
    id: 2,
    name: 'Cool Sneakers',
    price: '$49.99',
    image: 'https://media.studio7thailand.com/153361/iPhone_15_Pink.png',
  },
  {
    id: 3,
    name: 'Stylish Backpack',
    price: '$39.99',
    image: 'https://www.istudiobyspvi.com/cdn/shop/files/iPhone_13_Midnight_PDP_Image_Position-1A__GBEN.jpg?v=1718110367',
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>iphoneShop - Home</title>
      </Head>

      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">iphoneShop</h1>
          <nav className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-500">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-500">Shop</a>
            <a href="#" className="text-gray-600 hover:text-blue-500">Contact</a>
          </nav>
        </div>
      </header>

      <main className="bg-gray-50 min-h-screen">
        <section className="bg-blue-100 text-center py-16">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Welcome to ShopEase</h2>
          <p className="text-lg text-blue-700">Your one-stop shop for everyday essentials</p>
        </section>

        <section className="container mx-auto px-4 py-12">
          <h3 className="text-2xl font-semibold mb-6">Featured Products</h3>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow p-4">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded" />
                <h4 className="mt-4 text-lg font-semibold">{product.name}</h4>
                <p className="text-blue-600 font-bold">{product.price}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-white shadow-inner py-6">
        <div className="container mx-auto text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
        </div>
      </footer>
    </>
  )
}
