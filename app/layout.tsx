import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Mi Primera App Next.js',
  description: 'Creada con IA',
}

// Fíjate en esta línea, es la que soluciona el error:
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-slate-900 text-white min-h-screen flex flex-col">
        
        <nav className="bg-slate-800 border-b border-slate-700 p-4">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <div className="font-bold text-xl">🚀 MiWeb</div>
            <div className="space-x-4">
              <Link href="/" className="hover:text-blue-400 transition">Inicio</Link>
              <Link href="/contacto" className="hover:text-blue-400 transition">Contacto</Link>
            </div>
          </div>
        </nav>

        <main className="flex-grow flex flex-col items-center justify-center">
          {children}
        </main>

        <footer className="p-4 text-center text-slate-500 text-sm">
          Creado con Next.js y mucha curiosidad
        </footer>

      </body>
    </html>
  )
}