import { supabase } from './supabaseClient';

function Logout() {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  return (
    <button onClick={handleLogout}>Abmelden</button>
  );
}

export default Logout;
