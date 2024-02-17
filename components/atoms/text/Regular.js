import React from 'react';
import { Text } from 'react-native';

const Regular = ({ content, bold, color }) => {
  const fontFamily = bold ? 'Montserrat-Medium' : 'Montserrat-Regular';

  return <Text className="text-base" style={{ fontFamily, color }}>{content}</Text>;
};

export default Regular;