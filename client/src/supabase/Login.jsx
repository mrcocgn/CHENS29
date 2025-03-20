import { useState } from 'react';
import { supabase } from './supabaseClient';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Anmeldung erfolgreich!');
    }
  };

  return (
    <div>
      <h2>Anmelden</h2>
      <input type="email" placeholder="E-Mail" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Passwort" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Anmelden</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;
