import React from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import * as Text from '../components/atoms/text/index';
import { SafeAreaView } from 'react-native-safe-area-context';

import SearchBar from '../components/molecules/SearchBar';
import CategoriePill from '../components/molecules/CategoriePill';
import { categories } from '../assets/data';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-secondary">
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
            <SearchBar />
          </View>

          <View className="py-4">
            <Text.Subtitle bold={true} content="Catégories" />
          </View>

        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className='my-2'>
          {categories.map((categorie, index) => (
            <TouchableOpacity key={index} className="px-2">
              <CategoriePill categorie={categorie} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}