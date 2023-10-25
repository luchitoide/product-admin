import React, { createContext, useContext, useReducer } from "react";

const NameContext = createContext();

export const useNameContext = () => {
  return useContext(NameContext);
};

const initialState = {
  nombre: "",
  descripcion: "",
};

const nameReducer = (state, action) => {
  switch (action.type) {
    case "SET_NOMBRE":
      return { ...state, nombre: action.payload };
    case "SET_DESCRIPCION":
      return { ...state, descripcion: action.payload };
    default:
      return state;
  }
};

const NameProvider = ({ children }) => {
  const [nameState, dispatch] = useReducer(nameReducer, initialState);

  return (
    <NameContext.Provider value={{ nameState, dispatch }}>
      {children}
    </NameContext.Provider>
  );
};

export default NameProvider;