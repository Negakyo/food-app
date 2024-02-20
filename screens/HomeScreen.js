import React, { useState } from 'react'
import { ScrollView, TouchableOpacity, View, FlatList } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import * as Text from '../components/atoms/text/index';
import { SafeAreaView } from 'react-native-safe-area-context';

import SearchBar from '../components/molecules/SearchBar';
import CategoriePill from '../components/molecules/CategoriePill';
import FoodCard from '../components/molecules/FoodCard';
import { categories, foodItems } from '../assets/data';

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState("Tous")
  const [search, setSearch] = useState("");

  const filteredFoodItems = activeCategory === "Tous" 
  ? Object.values(foodItems).flat().filter(item => item.nom.toLowerCase().includes(search.toLowerCase()))
  : foodItems[activeCategory].filter(item => item.nom.toLowerCase().includes(search.toLowerCase()));

  return (
    <SafeAreaView className="flex-1 bg-green-300">
      <View className="h-full w-full">
        <View className="mx-8">
          <View className="py-4 flex-row items-center justify-between">
            <Icon name='menu' size={30}/>
            <Text.Subtitle bold={true} content="Bienvenue" color="#d97706" />
            <Icon name='face-man-profile' size={30}/>
          </View>

          <View className="py-8">
            <Text.Title content="Trouvons votre plat préféré !" />
          </View>
          <View className="py-6">
            <SearchBar value={search} onChangeText={setSearch} />
          </View>

          <View className="py-4">
            <Text.Subtitle bold={true} content="Catégories" />
          </View>

        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className='my-2'>
          {categories.map((categorie, index) => (
            <TouchableOpacity key={index} onPress={() => setActiveCategory(categorie.nom)} className="px-4">
              <CategoriePill categorie={categorie} isActive={categorie.nom === activeCategory} />
            </TouchableOpacity>
          ))}
        </ScrollView>


        <ScrollView 
          contentContainerStyle={{paddingHorizontal: 20}}
          horizontal showsHorizontalScrollIndicator={false}
          className="h-70"
        >
          {
            filteredFoodItems.sort(() => Math.random() - 0.5).map((item, index) => <FoodCard item={item} key={index} />)
          }
        </ScrollView>
        
      </View>
    </SafeAreaView>
  )
}