import Button from './Button';
import {render} from '@testing-library/react-native';

test('given empty GroceryShoppingList, user can add an item to it', () => {
  const {getByText} = render(<Button label="Button Label" />);

  expect(getByText('Button Label')).toBeTruthy();
});
