"use client";
import { useFetchUser } from "@/hooks/useFetchUser";
import { User } from "@/types/common";
import { createContext, ReactNode, useContext } from "react";

type AuthContextType = {
  user: User | undefined;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data: user, isLoading: loading } = useFetchUser(1);
  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error(`useAuth must be used inside AuthProvider`);
  return context;
};
