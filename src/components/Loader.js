import React from 'react';
import { ActivityIndicator, View } from 'react-native';

export const Loader = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
      }}
    >
      <ActivityIndicator size="large" color="#999999" />
    </View>
  );
};
