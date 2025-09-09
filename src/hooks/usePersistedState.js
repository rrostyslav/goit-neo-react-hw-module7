import { useState } from 'react';

const usePersistedState = (key, initialValue) => {
  const [state, setState] = useState(() => {
    const persistedState = localStorage.getItem(key);

    if (!persistedState) {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }

    try {
      return persistedState ? JSON.parse(persistedState) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setPersistedState = (value) => {
    const newValue = typeof value === 'function' ? value(state) : value;
    setState(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [state, setPersistedState];
};

export default usePersistedState;
