import {Launch} from '../types/launch';

export default function sortDate(array: Launch[], descending: boolean) {
  const sortedArray = array.sort(
    (a: Launch, b: Launch) =>
      Number(new Date(descending ? b.launch_date_utc : a.launch_date_utc)) -
      Number(new Date(descending ? a.launch_date_utc : b.launch_date_utc)),
  );

  return sortedArray;
}
