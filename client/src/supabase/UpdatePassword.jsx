import { useState } from 'react';
import { supabase } from './supabaseClient';

function UpdatePassword() {
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handlePasswordUpdate = async () => {
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      setMessage(`Fehler: ${error.message}`);
    } else {
      setMessage('Passwort erfolgreich geändert!');
    }
  };

  return (
    <div>
      <h2>Neues Passwort setzen</h2>
      <input
        type="password"
        placeholder="Neues Passwort"
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={handlePasswordUpdate}>Passwort ändern</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default UpdatePassword;
