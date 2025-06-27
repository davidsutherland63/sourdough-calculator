
import React, { useState } from "react";

export default function SourdoughCalculator() {
  const [flour, setFlour] = useState(500);
  const [hydration, setHydration] = useState(70);
  const [starterPercent, setStarterPercent] = useState(20);
  const [saltPercent, setSaltPercent] = useState(2);

  const calculateIngredients = () => {
    const flourAmount = parseFloat(flour);
    const hydrationRatio = parseFloat(hydration) / 100;
    const starterRatio = parseFloat(starterPercent) / 100;
    const saltRatio = parseFloat(saltPercent) / 100;

    const totalFlour = flourAmount;
    const water = hydrationRatio * totalFlour;
    const starter = starterRatio * totalFlour;
    const starterFlour = starter / 2;
    const starterWater = starter / 2;
    const salt = saltRatio * totalFlour;

    return {
      flour: (totalFlour - starterFlour).toFixed(1),
      water: (water - starterWater).toFixed(1),
      starter: starter.toFixed(1),
      salt: salt.toFixed(1),
      total: (totalFlour + water + salt).toFixed(1)
    };
  };

  const ingredients = calculateIngredients();

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-xl w-full text-gray-800 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-center">Sourdough Calculator</h1>
      <div className="grid gap-4">
        <label className="block">
          Flour (g):
          <input type="number" value={flour} onChange={(e) => setFlour(e.target.value)} className="w-full mt-1 p-2 border rounded" />
        </label>
        <label className="block">
          Hydration %:
          <input type="number" value={hydration} onChange={(e) => setHydration(e.target.value)} className="w-full mt-1 p-2 border rounded" />
        </label>
        <label className="block">
          Starter %:
          <input type="number" value={starterPercent} onChange={(e) => setStarterPercent(e.target.value)} className="w-full mt-1 p-2 border rounded" />
        </label>
        <label className="block">
          Salt %:
          <input type="number" value={saltPercent} onChange={(e) => setSaltPercent(e.target.value)} className="w-full mt-1 p-2 border rounded" />
        </label>
      </div>
      <div className="mt-6 p-4 bg-gray-100 rounded">
        <h2 className="font-semibold mb-2">Your Ingredients:</h2>
        <ul className="list-disc pl-6">
          <li>Flour (not in starter): {ingredients.flour}g</li>
          <li>Water (not in starter): {ingredients.water}g</li>
          <li>Starter: {ingredients.starter}g</li>
          <li>Salt: {ingredients.salt}g</li>
          <li>Total Dough: {ingredients.total}g</li>
        </ul>
      </div>
      <footer className="mt-6 text-sm text-center text-gray-600">
        Brought to you by <a href="https://www.brewsandques.co.nz" className="underline text-blue-600">Brews And Ques NZ</a>
      </footer>
    </div>
  );
}
