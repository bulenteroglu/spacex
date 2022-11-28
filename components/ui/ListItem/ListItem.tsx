import {format} from 'date-fns';
import {StyleSheet, Text, View} from 'react-native';
import {Launch} from '../../../types/launch';

export default function ListItem({item}: {item: Launch}) {
  return (
    <View style={[styles.card, styles.shadowProp]}>
      <View style={{flex: 0.4}}>
        <Text style={styles.flightNumber}>#{item.flight_number}</Text>
      </View>
      <View style={{flex: 0.6}}>
        <Text style={styles.missionName}>{item.mission_name}</Text>
      </View>

      <View
        style={{
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flex: 0.4,
        }}>
        <Text style={styles.missionDate}>
          {format(new Date(item.launch_date_utc), 'do MMM yyyy')}
        </Text>
        <Text style={styles.rocketName}>{item.rocket.rocket_name}</Text>
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
    marginVertical: 10,
    paddingLeft: 32,
    paddingRight: 12,
    paddingVertical: 20,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  flightNumber: {
    fontSize: 32,
    fontFamily: 'BrandonGrotesque-Medium',
  },
  missionName: {
    fontSize: 26,
    fontFamily: 'BrandonGrotesque-Medium',
  },
  missionDate: {
    fontSize: 12,
    fontFamily: 'BrandonGrotesque-Regular',
  },
  rocketName: {
    fontSize: 22,
    fontFamily: 'BrandonGrotesque-Bold',
  },
});
