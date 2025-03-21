import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

function UserProfile() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
        setUsername(user.user_metadata?.username || '');
      }
    };
    fetchUser();
  }, []);

  const updateProfile = async () => {
    const { error } = await supabase.auth.updateUser({
      data: { username },
    });

    if (error) {
      setMessage(`Fehler: ${error.message}`);
    } else {
      setMessage('Profil erfolgreich aktualisiert!');
    }
  };

  return (
    <div>
      <h2>Profil bearbeiten</h2>
      {user ? (
        <>
          <p>E-Mail: {user.email}</p>
          <input
            type="text"
            placeholder="Benutzername"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={updateProfile}>Profil speichern</button>
          {message && <p>{message}</p>}
        </>
      ) : (
        <p>Bitte anmelden.</p>
      )}
    </div>
  );
}

export default UserProfile;
