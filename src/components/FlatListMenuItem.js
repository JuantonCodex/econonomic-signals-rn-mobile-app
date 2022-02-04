import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export const FlatListMenuItem = ({ menuItem }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() =>
        navigation.navigate('DetailScreen', {
          title: menuItem.key,
          description: menuItem.name,
        })
      }
    >
      <View testID="flat-list-item" style={styles.container}>
        <Entypo name="line-graph" size={20} color="gray" />
        <Text style={styles.textItem}>{menuItem.key}</Text>
        <View style={{ flex: 1 }} />
        <FontAwesome name="angle-right" size={24} color="gray" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingRight: 5,
  },
  textItem: {
    textTransform: 'capitalize',
    fontSize: 18,
    color: '#666666',
    marginLeft: 10,
  },
});
