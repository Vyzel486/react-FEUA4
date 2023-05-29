import React, { useState } from 'react';

function WeightCalculator() {
    const [kilograms, setKilograms] = useState('');
    const [tons, setTons] = useState(0);
    const [grams, setGrams] = useState(0);
    const [pounds, setPounds] = useState(0);

    const convert = () => {
        const kg = parseFloat(kilograms);

        if (!isNaN(kg)) {
            const t = (kg * 0.001).toFixed(3);
            const g = kg * 1000;
            const lb = (kg * 2.20462262185).toFixed(3);

            setTons(t);
            setGrams(g);
            setPounds(lb);
        }
    };

    return (
        <div>
            <input
                type="text"
                onChange={(e) => setKilograms(e.target.value)}
            />
            <button onClick={convert}>Convert</button>

            {tons > 0 && <p>Tons: {tons}</p>}
            {grams > 0 && <p>Grams: {grams}</p>}
            {pounds > 0 && <p>Pounds: {pounds}</p>}
        </div>
    )
}

export default WeightCalculator