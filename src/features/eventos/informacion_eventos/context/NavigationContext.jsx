/**
 * NavigationContext
 *
 * Now a thin wrapper around React Router's useNavigate.
 * Provides `navigate` and `goBack` so page components don't
 * import directly from react-router-dom (easier to swap later).
 */
import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const NavigationContext = createContext(null);

export function NavigationProvider({ children }) {
  const routerNavigate = useNavigate();

  const navigate = (path) => routerNavigate(path);
  const goBack = () => routerNavigate(-1);

  return (
    <NavigationContext.Provider value={{ navigate, goBack }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const ctx = useContext(NavigationContext);
  if (!ctx) throw new Error("useNavigation must be used inside NavigationProvider");
  return ctx;
}