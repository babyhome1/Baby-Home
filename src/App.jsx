import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const products = [
  { name: 'Body manga larga G', price: 4000 },
  { name: 'Conjunto osito', price: 9500 },
  { name: 'Manta polar rosada', price: 5200 },
  { name: 'Babero estampado', price: 1500 },
  { name: 'Pack medias 3 pares', price: 2200 },
  { name: 'Enterito plush celeste', price: 7800 },
  { name: 'Toallon con capucha', price: 4900 },
  { name: 'Pijama algodón rayado', price: 5600 }
];

export default function BabyHome() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const cartMessage = cart.map(item => `${item.name} - $${item.price}`).join('%0A');

  const mpLink = `https://wa.me/5491135742446?text=Hola! Quiero comprar:%0A${cartMessage}%0ATotal: $${total}`;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-pink-600">Baby Home</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product, idx) => (
          <Card key={idx} className="rounded-2xl shadow-md">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-lg mb-2 text-gray-600">${product.price.toLocaleString()}</p>
              <Button onClick={() => addToCart(product)}>Agregar al carrito</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 border-t pt-4">
        <h2 className="text-2xl font-bold mb-2">Carrito de compras</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">Tu carrito está vacío.</p>
        ) : (
          <div>
            <ul className="mb-2">
              {cart.map((item, idx) => (
                <li key={idx}>{item.name} - ${item.price.toLocaleString()}</li>
              ))}
            </ul>
            <p className="font-semibold">Total: ${total.toLocaleString()}</p>
            <a href={mpLink} target="_blank" rel="noopener noreferrer">
              <Button className="mt-2 bg-green-600 hover:bg-green-700">Finalizar compra por WhatsApp</Button>
            </a>
          </div>
        )}
      </div>

      <footer className="mt-10 text-center text-sm text-gray-500">
        <p>Seguinos en Instagram: <a href="https://www.instagram.com/baby.home.l" target="_blank" className="text-pink-600 font-semibold">@baby.home.l</a></p>
      </footer>
    </div>
  );
}
