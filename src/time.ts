import spacetime from 'spacetime';

const getSpaceTimeNow = (timezone = '') => (timezone ? spacetime.now(timezone) : spacetime.now());
const getSpaceTime = (epoch: number, timezone = '') => spacetime(epoch, timezone);

export const getDateUTC = () => getSpaceTimeNow('Africa/Abidjan').epoch;

export const formattedTime = ({ hour, minute, am }) => {
  return `${hour}:${minute} ${am}`;
};

export const formattedDay = ({ month, day }) => {
  return `${day}, ${month}`;
};

export const getDateTimeDetails = (utcTime: number, timezone: string | undefined) => {
  const d = getSpaceTime(utcTime, timezone)
    .format('{month}__{date-ordinal}__{hour}__{minute-pad}__{ampm}')
    .split('__');

  const [month, day, hour, minute, am] = d;

  return {
    month,
    day,
    hour,
    minute,
    am,
  };
};
