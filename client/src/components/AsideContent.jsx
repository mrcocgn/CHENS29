import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase/supabaseClient';
import '../styles/AsideContent.css';

const AsideContent = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data?.session?.user ?? null);
    };

    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setMessage(error ? error.message : 'Login erfolgreich!');
  };

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    setMessage(error ? error.message : 'Registrierung erfolgreich! Bitte E-Mail bestätigen.');
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    setMessage(error ? error.message : 'Erfolgreich ausgeloggt.');
  };

  return (
    <div className="aside-content auth-box">
      {user ? (
        <>
          <h2 className="auth-title">Willkommen, {user.email}</h2>
          <button className="auth-button" onClick={handleLogout}>Logout</button>
          {message && <p className="auth-message">{message}</p>}
        </>
      ) : (
        <>
          <h2 className="auth-title">{isLogin ? 'Login' : 'Registrierung'}</h2>

          <input
            type="email"
            placeholder="E-Mail"
            className="auth-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Passwort"
            className="auth-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {isLogin ? (
            <button className="auth-button" onClick={handleLogin}>Login</button>
          ) : (
            <button className="auth-button" onClick={handleRegister}>Registrieren</button>
          )}

          <p className="auth-toggle">
            {isLogin ? 'Noch kein Konto?' : 'Schon registriert?'}{' '}
            <button className="auth-link" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Registrieren' : 'Login'}
            </button>
          </p>

          {message && <p className="auth-message">{message}</p>}
        </>
      )}
    </div>
  );
};

export default AsideContent;
