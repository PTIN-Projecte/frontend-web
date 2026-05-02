import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { RoleProvider } from "../features/eventos/informacion_eventos/context/RoleContext";
import { NavigationProvider } from "../features/eventos/informacion_eventos/context/NavigationContext";
import InformacionEvento from "../features/eventos/informacion_eventos/pages/InformacionEvento";
import DietasEspeciales from "../features/eventos/informacion_eventos/pages/DietasEspeciales";

/**
 * AppRouter — central routing config for the whole app.
 *
 * URL structure:
 *   /eventos/:eventoId                  → InformacionEvento
 *   /eventos/:eventoId/dietas           → DietasEspeciales
 *
 * :eventoId will be the real event slug/id from the API once available.
 * For now we redirect / → /eventos/boda-rivero-martinez so the app
 * always lands on a valid route during development.
 *
 * Providers are placed here (inside BrowserRouter) so that
 * NavigationProvider can access useNavigate from React Router.
 */
export default function AppRouter() {
  return (
    <BrowserRouter>
      <RoleProvider>
        <NavigationProvider>
          <Routes>
            {/* Dev redirect: bare root → default event */}
            <Route
              path="/"
              element={<Navigate to="/eventos/evt-1" replace />}
            />

            {/* Event detail page */}
            <Route
              path="/eventos/:eventoId"
              element={<InformacionEvento />}
            />

      

            {/* Dietas y Alergias sub-page */}
            <Route
              path="/eventos/:eventoId/dietas"
              element={<DietasEspeciales />}
            />

            {/* Catch-all: unknown routes → redirect to default event */}
            <Route
              path="*"
              element={<Navigate to="/eventos/evt-1" replace />}
            />
          </Routes>
        </NavigationProvider>
      </RoleProvider>
    </BrowserRouter>
  );
}