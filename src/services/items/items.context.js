import React, { useState, createContext, useEffect, useMemo } from "react";

import { itemsRequest } from "./items.service";

export const ItemsContext = createContext();

export const ItemsContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveItems = () => {
    setIsLoading(true);
    setTimeout(() => {
      itemsRequest()
        .then((result) => {
          setIsLoading(false);
          setItems(result);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    retrieveItems();
  }, []);

  return (
    <ItemsContext.Provider
      value={{
        items,
        isLoading,
        error,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
