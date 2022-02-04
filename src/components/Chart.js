import React from 'react';
import { Dimensions, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export const Chart = ({ dateList }) => {
  const valuesPerYear = {};
  const years = [];

  dateList.forEach((item) => {
    const date = new Date(item.date * 1000);
    const strYear = date.getFullYear().toString();

    // Promedio por año
    if (!valuesPerYear[strYear]) {
      valuesPerYear[strYear] = [item.value];
    } else {
      valuesPerYear[strYear].push(item.value);
    }

    // Lista de años
    if (!years.includes(strYear)) years.push(strYear);
  });

  const average = {};
  Object.keys(valuesPerYear).map((year) => {
    average[year] =
      valuesPerYear[year].reduce((partialSum, num) => partialSum + num) /
      valuesPerYear[year].length;
  });

  return (
    <View>
      <LineChart
        data={{
          labels: years,
          datasets: [
            {
              data: Object.values(average),
              strokeWidth: 3,
            },
          ],
          legend: ['Valor promedio por año'],
        }}
        width={Dimensions.get('window').width - 40}
        height={260}
        fromZero="true"
        verticalLabelRotation={270}
        xLabelsOffset={15}
        chartConfig={{
          backgroundColor: '#090979',
          backgroundGradientFrom: '#090979',
          backgroundGradientTo: '#0097ff',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};
