import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const storeFavorites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favorites", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const retrieveFavorites = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@favorites");
      return jsonValue != null ? setFavorites(JSON.parse(jsonValue)) : null;
    } catch (e) {
      console.log(e);
    }
  };

  const add = (item) => {
    setFavorites([...favorites, item]);
  };

  const remove = (item) => {
    const newFavorites = favorites.filter((x) => x.placeId !== item.placeId);

    setFavorites(newFavorites);
  };

  useEffect(() => {
    retrieveFavorites();
  }, []); // if [] empty array --> do this on the app's first mount

  useEffect(() => {
    storeFavorites(favorites);
  }, [favorites]); // Whenever favorites changes, do this

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites: add,
        removeFromFavorites: remove,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
