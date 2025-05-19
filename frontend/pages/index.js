import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    aboutMe: '',
    birthdate: '',
    addressStreet: '',
    addressCity: '',
    addressState: '',
    addressZip: ''
  });
  const [layout, setLayout] = useState({ 2: [], 3: [] });

  useEffect(() => {
    axios.get('http://localhost:8080/api/config').then(res => {
      const config = { 2: [], 3: [] };
      res.data.forEach(c => config[c.step].push(c.component));
      setLayout(config);
    });
  }, []);

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios.post('http://localhost:8080/api/users', formData).then(() => {
      alert('User submitted');
    });
  };

  return (
    <div>
      <h1>Custom Onboarding Wizard</h1>
      <p>Step {step} of 3</p>
      {step === 1 && (
        <>
          <input name="email" placeholder="Email" onChange={handleChange} /><br />
          <input name="password" placeholder="Password" type="password" onChange={handleChange} /><br />
        </>
      )}
      {step === 2 && layout[2].map(component => (
        <Component key={component} name={component} formData={formData} handleChange={handleChange} />
      ))}
      {step === 3 && layout[3].map(component => (
        <Component key={component} name={component} formData={formData} handleChange={handleChange} />
      ))}
      <div>
        {step > 1 && <button onClick={handlePrev}>Back</button>}
        {step < 3 && <button onClick={handleNext}>Next</button>}
        {step === 3 && <button onClick={handleSubmit}>Submit</button>}
      </div>
    </div>
  );
}

function Component({ name, formData, handleChange }) {
  switch (name) {
    case 'about':
      return <textarea name="aboutMe" placeholder="About Me" onChange={handleChange} />;
    case 'birthdate':
      return <input type="date" name="birthdate" onChange={handleChange} />;
    case 'address':
      return (
        <div>
          <input name="addressStreet" placeholder="Street" onChange={handleChange} /><br />
          <input name="addressCity" placeholder="City" onChange={handleChange} /><br />
          <input name="addressState" placeholder="State" onChange={handleChange} /><br />
          <input name="addressZip" placeholder="ZIP" onChange={handleChange} /><br />
        </div>
      );
    default:
      return null;
  }
}
