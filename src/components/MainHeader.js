import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const MainHeader = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={{ ...styles.title, fontFamily: 'Quicksand-Bold' }}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    backgroundColor: '#0097ff',
    borderRadius: 2,
    alignItems: 'center',
    marginBottom: 40,
    paddingVertical: 10,
  },
  title: {
    fontFamily: 'Quicksand-Bold',
    color: '#FFFFFF',
    textTransform: 'capitalize',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
