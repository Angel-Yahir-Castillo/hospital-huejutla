import  { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState<number | string>('');
  const [height, setHeight] = useState<number | string>('');
  const [result, setResult] = useState<number | null>(null);

  const calculateIMC = () => {
    if (weight && height) {
      const imc = Number(Number(weight) / (Number(height) * Number(height))).toFixed(2);
  
      let message = '';
  
      if (Number(imc) < 18.5) {
        message = 'Tu IMC es bajo. Se recomienda consultar a un profesional de la salud.';
      } else if (Number(imc) >= 18.5 && Number(imc) < 24.9) {
        message = 'Tu IMC es saludable. ¡Mantén un estilo de vida activo!';
      } else if (Number(imc) >= 25 && Number(imc) < 29.9) {
        message = 'Tienes sobrepeso. Considera hacer ejercicio y llevar una dieta equilibrada.';
      } else {
        message = 'Tienes obesidad. Te recomendamos buscar asesoramiento médico y hacer cambios en tu estilo de vida.';
      }
  
      setResult(Number(imc));
      alert(`Tu IMC es: ${imc}. ${message}`);
    }
  };
  

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <div>
        <label>Peso (kg):</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <div>
        <label>Altura (m):</label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <button onClick={calculateIMC}>Calcular IMC</button>
      {result && <p>Tu IMC es: {result}</p>}
    </div>
  );
}

export default App;