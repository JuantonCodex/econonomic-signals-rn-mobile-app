import React from 'react';
import { View } from 'react-native';

export const ItemSeparator = () => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#999999',
        opacity: 0.6,
        marginVertical: 25,
      }}
    />
  );
};
