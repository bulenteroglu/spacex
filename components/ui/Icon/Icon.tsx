import {Image} from 'react-native';
import {IconTypes} from '../../../types/button';

export default function Icon({icon}: {icon: IconTypes}) {
  switch (icon) {
    case 'sort':
      return <Image source={require('../../../assets/images/sort.png')} />;
    case 'refresh':
      return <Image source={require('../../../assets/images/refresh.png')} />;
    case 'select':
      return <Image source={require('../../../assets/images/select.png')} />;
    default:
      return null;
  }
}
