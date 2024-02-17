import React from 'react';
import { Text } from 'react-native';

const Small = ({ content, bold, color }) => {
  const fontFamily = bold ? 'Montserrat-Medium' : 'Montserrat-Regular';
  
  return <Text className="text-sm" style={{ fontFamily, color }}>{content}</Text>;
};

export default Small;