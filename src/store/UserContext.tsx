import { createContext, ReactNode, useState } from "react";
import { User } from "@/interface/user";

interface UserContextValue {
  user: User | null;
  token: string | null;
  login: ({ user, token }: { user: User; token: string }) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextValue | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const value = {
    user,
    token,
    login: ({ user, token }: { user: User; token: string }) => {
      setUser(user);
      setToken(token);
    },
    logout: () => {
      setToken(null);
      setUser(null);
    },
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
