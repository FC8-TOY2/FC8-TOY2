import {
  HOUR_TO_MINUTE,
  MINUTE_TO_SECOND,
  SECOND_TO_MILLISECOND,
  TIME_DIFF_KST_AND_UTC,
} from '@/constants/time';

export function getCurrentDateInKorea() {
  const nowDate = new Date();
  const kstOffset = TIME_DIFF_KST_AND_UTC * HOUR_TO_MINUTE;
  const timeInUtc =
    nowDate.getTime() +
    nowDate.getTimezoneOffset() * MINUTE_TO_SECOND * SECOND_TO_MILLISECOND;
  const dateInKorea = new Date(
    timeInUtc + kstOffset * MINUTE_TO_SECOND * SECOND_TO_MILLISECOND,
  );

  const year = dateInKorea.getFullYear();
  const month = String(dateInKorea.getMonth() + 1).padStart(2, '0');
  const day = String(dateInKorea.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}
