import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { Session, User } from '@supabase/supabase-js';

// Definujeme tvar kontextu
interface AuthContextType {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

// Vytvoříme kontext
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Vytvoříme Provider komponentu
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Funkce pro přihlášení přes Google
  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  // Funkce pro odhlášení
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
     if (error) {
      console.error("Error signing out:", error);
    }
  };

  // Tento useEffect je nejdůležitější. Naslouchá změnám stavu přihlášení.
  useEffect(() => {
    setIsLoading(true);
    // Získáme aktuální session hned při načtení
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    // Supabase má listener, který nás informuje o každé změně (přihlášení, odhlášení, atd.)
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setIsLoading(false);
      }
    );
    
    // Důležité je listener po sobě uklidit, když komponenta zmizí
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const value = {
    user,
    session,
    isLoading,
    signInWithGoogle,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Vytvoříme vlastní hook pro snadné použití kontextu
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
