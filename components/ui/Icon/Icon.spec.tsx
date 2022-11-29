import Icon from './Icon';
import {render} from '@testing-library/react-native';

test('render refresh icon', () => {
  const {getByText} = render(<Icon icon="refresh" />);
});

test('render select icon', () => {
  const {getByText} = render(<Icon icon="select" />);
});

test('render sort icon', () => {
  const {getByText} = render(<Icon icon="sort" />);
});
