import { useState } from 'react';
import { supabase } from './supabaseClient';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handlePasswordReset = async () => {
    const { error } = await supabase.auth.resetPasswordForEmail(email);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Passwort-Reset-E-Mail wurde gesendet. Bitte überprüfe dein Postfach.');
    }
  };

  return (
    <div>
      <h2>Passwort vergessen?</h2>
      <input
        type="email"
        placeholder="E-Mail-Adresse eingeben"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handlePasswordReset}>Passwort zurücksetzen</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ForgotPassword;
