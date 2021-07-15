import moment from 'moment';

export const formatDateTime = timestamp => {
  const convertedTime = moment.unix(timestamp / 1000).format('lll');
  return convertedTime
}