import { View, Text, Image } from 'react-native';
import React from 'react'

export default function FoodCard({ item }) {
    return (
      <View className="w-56 h-70 my-5 mr-6 p-3 py-5 rounded-3xl bg-light">
        <Image source={item.image} className="w-full h-32 rounded-lg" />
        <View className="p-4 flex h-36 justify-between">
          <Text className="text-lg font-semibold mb-2">{item.nom}</Text>
          <View className="flex-row items-center justify-between">
            <Text className="text-gray-800">{item.prix} €</Text>
          </View>
        </View>
      </View>
    )
}  