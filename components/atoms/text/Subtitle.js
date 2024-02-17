import React from 'react';
import { Text } from 'react-native';

const Subtitle = ({ content, bold, color }) => {
  const fontFamily = bold ? 'Montserrat-SemiBold' : 'Montserrat-Medium';
  
  return <Text className="text-xl" style={{ fontFamily, color }}>{content}</Text>;
};

export default Subtitle;