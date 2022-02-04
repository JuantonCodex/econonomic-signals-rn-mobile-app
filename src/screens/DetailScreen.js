import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { globalStyles } from '../theme/appTheme';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Components
import { MainHeader } from '../components/MainHeader';
import { Loader } from '../components/Loader';
import { Chart } from '../components/Chart';

// Request
import { getItem } from '../api/getItem';

export const DetailScreen = ({ route, navigation }) => {
  const { title } = route.params;
  const { top } = useSafeAreaInsets();
  const [loading, setLoading] = useState(1);
  const [description, setDescription] = useState('');
  const [dateList, setDateList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const apiResponse = await getItem(title);
        const datesResponse = Object.keys(apiResponse.values).map((item) => {
          return {
            date: item,
            value: apiResponse.values[item],
          };
        });

        setDateList(datesResponse);
        setDescription(apiResponse.name);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(0);
      }
    })();

    return () => {};
  }, []);

  return (
    <View
      style={{ flex: 1, ...globalStyles.globalMargin, marginTop: top + 20 }}
    >
      <TouchableHighlight
        activeOpacity={0.4}
        underlayColor="white"
        style={{ width: 120 }}
        onPress={() => navigation.pop()}
      >
        <View style={styles.backButtonContainer}>
          <Ionicons name="chevron-back-sharp" size={22} color="#999999" />
          <Text style={styles.backButtonText}>Volver</Text>
        </View>
      </TouchableHighlight>

      <View>
        <MainHeader title={title} />
        {loading ? (
          <Loader />
        ) : (
          <View style={styles.boxDescription}>
            <Text style={styles.textDescription}>{description}</Text>
            <Chart dateList={dateList} />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backButtonContainer: {
    flexDirection: 'row',
  },
  backButtonText: {
    fontSize: 16,
    marginLeft: 10,
  },
  boxDescription: {},
  textDescription: {
    fontSize: 18,
    marginBottom: 20,
  },
});
