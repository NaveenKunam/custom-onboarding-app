import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Admin() {
  const [step2, setStep2] = useState(['about']);
  const [step3, setStep3] = useState(['birthdate']);

  const handleSave = () => {
    const payload = [
      ...step2.map(c => ({ step: 2, component: c })),
      ...step3.map(c => ({ step: 3, component: c }))
    ];
    axios.post('http://localhost:8080/api/config', payload).then(() => alert('Saved'));
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <div>
        <h2>Step 2 Components</h2>
        <ComponentSelector selected={step2} setSelected={setStep2} />
      </div>
      <div>
        <h2>Step 3 Components</h2>
        <ComponentSelector selected={step3} setSelected={setStep3} />
      </div>
      <button onClick={handleSave}>Save Config</button>
    </div>
  );
}

function ComponentSelector({ selected, setSelected }) {
  const all = ['about', 'birthdate', 'address'];

  const toggle = (comp) => {
    setSelected(selected.includes(comp) ? selected.filter(c => c !== comp) : [...selected, comp]);
  };

  return (
    <div>
      {all.map(c => (
        <label key={c}>
          <input type="checkbox" checked={selected.includes(c)} onChange={() => toggle(c)} /> {c}
        </label>
      ))}
    </div>
  );
}
