import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const favoritesFromStorage = await AsyncStorage.getItem('favorites');
        if (favoritesFromStorage) {
          setFavorites(JSON.parse(favoritesFromStorage));
        }
      } catch (error) {
        console.error('Error fetching favorites from storage:', error);
      }
    };

    fetchFavorites();
  }, []);

  const toggleFavorites = async (foodItemName) => {
    try {
      let updatedFavorites;
      if (favorites.includes(foodItemName)) {
        updatedFavorites = favorites.filter(item => item !== foodItemName);
      } else {
        updatedFavorites = [...favorites, foodItemName];
      }
      setFavorites(updatedFavorites);
      await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } catch (error) {
      console.error('Error toggling favorites:', error);
    }
  };

  /* const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.clear();
      console.log('AsyncStorage vidé avec succès.');
    } catch (error) {
      console.error('Erreur lors de la suppression de AsyncStorage :', error);
    }
  };

  clearAsyncStorage();

  console.log(favorites);*/

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
