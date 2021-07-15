import moment from 'moment';

export const formatDateTime = timestamp => {
  const convertedTime = moment.unix(timestamp).utc().format('LLL')
  return convertedTime
}