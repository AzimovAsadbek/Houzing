import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
const PropertiesContet = createContext();

const PropertiesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <PropertiesContet.Provider value={[state, dispatch]}>
      {children}
    </PropertiesContet.Provider>
  );
};
export default PropertiesProvider;
