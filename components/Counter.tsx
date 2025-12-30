// components/Counter.tsx
'use client'; // <--- ¡LA LLAVE MÁGICA! Sin esto, el useState fallará.

import { useState } from 'react';

export default function Counter() {
  console.log("😎 Me verás voler..."); // <--- AÑADE ESTO
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 my-6 p-4 bg-slate-700/50 rounded-xl border border-slate-600">
      <p className="text-xl font-mono text-blue-300">
        Clics: <span className="text-white font-bold">{count}</span>
      </p>

      <div className="flex gap-4">
        <button 
          onClick={() => setCount(count - 1)}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition"
        >
          -1
        </button>

        <button 
          onClick={() => setCount(count + 1)}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition"
        >
          +1
        </button>
      </div>
      
      {count > 5 && (
        <p className="text-yellow-400 text-sm animate-pulse">
          ¡Vas muy rápido! 🔥
        </p>
      )}
    </div>
  );
}