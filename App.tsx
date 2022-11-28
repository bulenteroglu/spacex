import React, {useEffect, useState, type PropsWithChildren} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import Button from './components/ui/Button/Button';
import ListItem from './components/ui/ListItem/ListItem';
import {Launch} from './types/launch';
import fetchLaunches from './utils/fetchLaunches';

const App = () => {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetchLaunches();

      if (data) {
        setLaunches(data);
      }
    }

    getData();
  }, []);

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <View style={[styles.container]}>
        <View
          style={[
            styles.buttonContainer,
            {flexDirection: 'row', justifyContent: 'flex-end'},
          ]}>
          <Button
            label={'Filter by year'}
            icon={<Image source={require('./assets/images/select.png')} />}
          />
          <Button
            label={'Sort Descending'}
            icon={<Image source={require('./assets/images/sort.png')} />}
          />
        </View>
        <FlatList
          data={launches}
          renderItem={ListItem}
          keyExtractor={(launch: Launch, index: number) =>
            `Launch_mission_${launch.flight_number + '_' + index}`
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 10,
  },
  buttonContainer: {},
});

export default App;
