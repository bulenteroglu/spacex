import {format} from 'date-fns';
import {StyleSheet, Text, View} from 'react-native';
import {Launch} from '../../../types/launch';

export default function ListItem({item}: {item: Launch}) {
  return (
    <View style={[styles.card, styles.shadowProp]}>
      <View style={{flex: 0.3}}>
        <Text>#{item.flight_number}</Text>
      </View>
      <View style={{flex: 1}}>
        <Text>{item.mission_name}</Text>
      </View>

      <View style={{alignItems: 'flex-end'}}>
        <Text>{format(new Date(item.launch_date_utc), 'do MMM yyyy')}</Text>
        <Text>{item.rocket.rocket_name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    paddingHorizontal: 15,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
