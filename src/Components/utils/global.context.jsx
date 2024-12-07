import axios from 'axios';
import React, { createContext, useContext, useReducer, useEffect, useMemo } from 'react';
import { reducer } from '../../reducers/reducer';

const lsFavs = JSON.parse(localStorage.getItem('favs')) || [];
const initialState = { 
  theme: 'light', 
  dentists: [], 
  favs: lsFavs 
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        dispatch({ type: 'SET_DENTISTS', payload: res.data });
      })
      .catch(error => {
        console.error("Error fetching dentists:", error);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favs));
  }, [state.favs]);

  const toggleTheme = () => {
    dispatch({ type: 'SET_THEME', payload: state.theme === 'light' ? 'dark' : 'light' });
  };

  const value = useMemo(() => ({
    theme: state.theme,
    dentists: state.dentists,
    favs: state.favs,
    toggleTheme,
  }), [state.theme, state.dentists, state.favs]);

  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal);