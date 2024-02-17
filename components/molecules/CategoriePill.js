import { View, Image } from 'react-native';
import React from 'react';
import * as Text from '../atoms/text/index';

const CategoriePill = ({ categorie }) => {
  return (
    <View className="flex-row items-center h-12 w-36 rounded-2xl justify-between px-3 bg-white">
        <Image className="h-8 w-8" source={categorie.image} />
        <Text.Regular bold={true} content={categorie.nom} />
    </View>
  );
}

export default CategoriePill;