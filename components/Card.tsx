// components/Card.tsx
// Forzando actualización de Git <--- ESTO ES NUEVO
export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-red-800 p-10 rounded-2xl shadow-2xl border border-slate-700 text-center max-w-md w-full">
      {children}
    </div>
  );
}