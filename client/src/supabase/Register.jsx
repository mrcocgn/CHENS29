import { useState } from 'react';
import { supabase } from './supabaseClient';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Registrierung erfolgreich! Bitte überprüfe deine E-Mails zur Verifizierung.');
    }
  };

  return (
    <div>
      <h2>Registrieren</h2>
      <input type="email" placeholder="E-Mail" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Passwort" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Registrieren</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Register;
