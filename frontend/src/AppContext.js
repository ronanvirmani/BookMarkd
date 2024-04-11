/* eslint-disable no-undef */

import { React, createContext, useContext, useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { getProfileInfo } from "./functions";
// Create a context
const AppContext = createContext();

// Create a provider component
export function AppProvider({ children }) {

  const [user, setUser] = useState(null); // User information
  const [loading, setLoading] = useState(true); // Loading state for fetching profile information
  const supabase = createClient(
    process.env.REACT_APP_SUPABASE_URL,
    process.env.REACT_APP_SUPABASE_ANON_KEY,
  );  
  
  useEffect(() => {
    console.log("AppProvider useEffect");
    getProfileInfo(
      supabase,
      user,
      setUser,
    ).then(() => {
      setLoading(false);
    });
  }, []);

  

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        supabase,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// Custom hook to access the context
export function useAppContext() {
  return useContext(AppContext);
}
