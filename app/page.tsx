import Link from 'next/link';
import Card from '@/components/Card';
import Counter from '@/components/Counter';

// 1. Definimos una función para pedir datos
// Esta función se ejecuta EN EL SERVIDOR, no en el navegador del usuario.
async function getRandomQuote() {
  // Pedimos una frase a una API pública
  // cache: 'no-store' le dice a Next.js: "No guardes esto, quiero una nueva cada vez"
  const res = await fetch('https://dummyjson.com/quotes/random', { cache: 'no-store' });
  
  if (!res.ok) {
    // Si la API falla, lanzamos un error (Next.js lo manejará)
    throw new Error('No se pudo obtener la frase');
  }

  return res.json();
}

// 2. Convertimos el componente en 'async'
export default async function Home() {
  console.log("👻 SOY UN FANTASMA: Estoy en el Servidor (Terminal)"); // <--- AÑADE ESTO
  // 3. Esperamos a que lleguen los datos antes de pintar nada
  const quoteData = await getRandomQuote();

  return (
    <Card>
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-600 mb-6">
        ¡Hola Next.js!
      </h1>
      
      {/* 4. Mostramos los datos que trajo el servidor */}
      <div className="bg-slate-700/30 p-4 rounded-lg border-l-4 border-yellow-500 text-left mb-6 italic">
        <p className="text-lg text-slate-200">"{quoteData.quote}"</p>
        <p className="text-sm text-slate-400 mt-2 text-right">- {quoteData.author}</p>
      </div>

      <p className="text-sm text-slate-400 mb-4">
        Prueba el contador interactivo (Client Component):
      </p>

      <Counter />

      <div className="mt-8">
        <Link 
          href="/contacto" 
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105 inline-block"
        >
          Ir a Contacto 🚀
        </Link>
      </div>
    </Card>
  );
}