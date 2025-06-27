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
    <div style={{ maxWidth: 600, margin: '0 auto', fontFamily: 'Arial' }}>
      <h1>Sourdough Recipe Calculator</h1>
      <label>Flour (g):</label>
      <input type="number" value={flour} onChange={(e) => setFlour(e.target.value)} />
      <label>Hydration %:</label>
      <input type="number" value={hydration} onChange={(e) => setHydration(e.target.value)} />
      <label>Starter %:</label>
      <input type="number" value={starterPercent} onChange={(e) => setStarterPercent(e.target.value)} />
      <label>Salt %:</label>
      <input type="number" value={saltPercent} onChange={(e) => setSaltPercent(e.target.value)} />
      <h2>Ingredients:</h2>
      <ul>
        <li>Flour (not in starter): {ingredients.flour}g</li>
        <li>Water (not in starter): {ingredients.water}g</li>
        <li>Starter: {ingredients.starter}g</li>
        <li>Salt: {ingredients.salt}g</li>
        <li>Total Dough: {ingredients.total}g</li>
      </ul>
    </div>
  );
}
