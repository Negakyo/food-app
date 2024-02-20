import { View, Image } from 'react-native';
import React from 'react';
import * as Text from '../atoms/text/index';

const CategoriePill = ({ categorie, isActive }) => {
  return (
    <View className={` flex flex-row items-center h-12 rounded-2xl px-4 ${isActive ? 'bg-[#d97706]' : 'bg-white'}`}>
        <Image className="h-8 w-8 flex bg-primary rounded-full" source={categorie.image} />
        <View className="ml-4">
        <Text.Regular bold={true} content={categorie.nom} color={isActive ? 'white' : '#000000'} />
        </View>
    </View>
  );
}

export default CategoriePill;