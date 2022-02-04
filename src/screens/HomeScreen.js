import React, { useEffect, useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import { globalStyles } from '../theme/appTheme';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

// Components
import { Loader } from '../components/Loader';
import { MainHeader } from '../components/MainHeader';
import { ItemSeparator } from '../components/ItemSeparator';
import { FlatListMenuItem } from '../components/FlatListMenuItem';

// Request
import { getList } from '../api/getList';

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const [loading, setLoading] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    const func = async () => {
      try {
        const apiResponse = await getList();
        const parsedResponse = Object.keys(apiResponse).map(
          (value) => apiResponse[value]
        );
        setData(parsedResponse);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(0);
      }
    };

    func();
  }, []);

  return (
    <SafeAreaProvider style={{ flex: 1, marginTop: top }}>
      <View style={{ flex: 1, ...globalStyles.globalMargin }}>
        {loading ? (
          <Loader />
        ) : (
          <FlatList
            style={{ marginBottom: 20 }}
            data={data}
            renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
            keyExtractor={(item) => item.key}
            ListHeaderComponent={() => (
              <MainHeader title="Indicadores Económicos" />
            )}
            ItemSeparatorComponent={() => <ItemSeparator />}
          />
        )}
      </View>
    </SafeAreaProvider>
  );
};
