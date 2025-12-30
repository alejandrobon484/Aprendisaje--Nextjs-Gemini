// app/page.tsx
import Link from 'next/link';
import Card from '@/components/Card';
import Counter from '@/components/Counter'; // <--- Importamos el contador

export default function Home() {
  return (
    <Card>
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-600 mb-6">
        ¡Hola Next.js!
      </h1>
      
      <p className="text-lg text-slate-300 mb-4">
        Probando la interactividad con Client Components:
      </p>

      {/* Aquí insertamos el componente interactivo */}
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