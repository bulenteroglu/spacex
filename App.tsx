import React, {useEffect, useState, type PropsWithChildren} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import Button from './components/ui/Button/Button';
import ListItem from './components/ui/ListItem/ListItem';
import {Launch} from './types/launch';
import fetchLaunches from './utils/fetchLaunches';
import sortDate from './utils/sortDate';

const App = () => {
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [descending, setDescending] = useState(true);
  const [pickerValue, setPickerValue] = useState('');

  async function getData(value?: string) {
    const data = await fetchLaunches(value);

    if (data) {
      setLaunches(data);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  function handlePickerSelect(value: string) {
    getData(value);
  }

  function handleRefreshButton() {
    getData();
    setDescending(true);
    setPickerValue('');
  }

  function handleOrder() {
    setLaunches(sortDate(launches, descending));
    setDescending(!descending);
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />

      <View>
        <FlatList
          style={styles.container}
          ListHeaderComponent={
            <View>
              <View style={{alignSelf: 'flex-end', marginBottom: 25}}>
                <Button
                  label={'Refresh'}
                  icon="refresh"
                  handleClick={handleRefreshButton}
                />
              </View>
              <View
                style={[
                  {
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    marginBottom: 10,
                  },
                ]}>
                <Button
                  label={'Filter by year'}
                  icon="select"
                  picker
                  handlePickerSelect={handlePickerSelect}
                  pickerValue={pickerValue}
                  setPickerValue={setPickerValue}
                />
                <Button
                  handleClick={handleOrder}
                  label={`Sort ${descending ? 'Descending' : 'Ascending'}`}
                  icon="sort"
                />
              </View>
            </View>
          }
          data={launches}
          renderItem={ListItem}
          keyExtractor={(launch: Launch, index: number) =>
            `launch_mission_${launch.flight_number + '_' + index}`
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});

export default App;
