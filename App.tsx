import React, {useEffect, useState, type PropsWithChildren} from 'react';
import {
  FlatList,
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
  const isDarkMode = useColorScheme() === 'dark';
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
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>
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
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
