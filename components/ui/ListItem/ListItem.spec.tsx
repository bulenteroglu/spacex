import ListItem from './ListItem';
import {render} from '@testing-library/react-native';

const mockData = {
  flight_number: 1,
  mission_name: 'Mock Mission',

  rocketName: 'Mock Rocket Name',
  launch_date_utc: '1669635810',
  rocket: {
    rocket_id: '',
    rocket_name: '',
    rocket_type: '',
  },
};

test('render  ListItem', () => {
  const {getByText} = render(<ListItem item={mockData} />);
});
