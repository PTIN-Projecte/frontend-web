import { RoleProvider } from "./features/eventos/informacion_eventos/context/RoleContext";
import InformacionEvento from "./features/eventos/informacion_eventos/pages/InformacionEvento";
 
export default function App() {
  return (
    <RoleProvider>
      <InformacionEvento />
    </RoleProvider>
  );
}