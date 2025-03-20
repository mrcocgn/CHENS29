import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

function AuthCheck() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
    };

    getSession();
  }, []);

  return (
    <div>
      {session ? <p>Eingeloggt als {session.user.email}</p> : <p>Bitte anmelden.</p>}
    </div>
  );
}

export default AuthCheck;
