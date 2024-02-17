import { TextInput, View } from 'react-native'
import React from 'react'
import * as Text from '../atoms/text/index';
import Icon from "react-native-vector-icons/MaterialIcons"

const SearchBar = ({value, onChangeText}) => {
  return (
    <View className="relative justify-center">

      <TextInput 
        className="bg-white py-4 px-4 rounded-2xl text-[#7b7b7b] text-base"
        style={{ fontFamily: "Montserrat-Medium"}}
        placeholderTextColor="#7b7b7b"
        value = {value}
        onChangeText={onChangeText}
        placeholder="Rechercher" 
      />

      <View className="absolute right-4">
        <Icon name="search" size={30} color="#7b7b7b" />
      </View>
    </View>
  )
}

export default SearchBar