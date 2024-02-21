import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FavoritesContext from '../../context/FavoritesContext';

export default function FoodCard({ item }) {
  const { favorites, toggleFavorites } = useContext(FavoritesContext);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const checkIfFavorite = () => {
      setIsFavorite(favorites.includes(item.nom));
    };

    checkIfFavorite();
  }, [favorites, item]);

  const handleToggleFavorites = () => {
    toggleFavorites(item.nom);
    setIsFavorite(!isFavorite);
  };

  return (
    <View className="w-56 h-70 my-5 mr-6 p-3 py-5 rounded-3xl bg-light">
      <Image source={item.image} className="w-full h-32 rounded-lg" />
      <View className="p-4 flex h-36 justify-between">
        <Text className="text-lg font-semibold mb-2">{item.nom}</Text>
        <View className="flex-row items-center justify-between">
          <Text className="text-gray-800">{item.prix} €</Text>
          <TouchableOpacity onPress={handleToggleFavorites}>
            <Icon 
              name={isFavorite ? 'bookmark-minus' : 'bookmark-plus-outline'} 
              size={30} 
              color={isFavorite ? 'red' : 'green'} 
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
