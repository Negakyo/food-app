import React from 'react';
import { Text } from 'react-native';

const Title = ({ content, bold, color }) => {
  const fontFamily = bold ? 'Montserrat-SemiBold' : 'Montserrat-Medium';
  
  return <Text className="text-3xl" style={{ fontFamily, color }}>{content}</Text>;
};

export default Title;