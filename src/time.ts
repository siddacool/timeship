import spacetime from 'spacetime';

export const getDateUTC = () => spacetime.now().format('time-24');

export const getCurruntTimeFromDateUtc = (
  dataUtc: { toLocaleString: (arg0: string, arg1: { timeZone: string | undefined }) => any },
  timezone: string | undefined,
) => {
  const d = spacetime
    .now(timezone)
    .format('{date}__{day-short}__{month-short}__{hour}__{minute-pad}__{hour-24}__{ampm}');

  const [day, weekday, month, hour, minute, hour24String, am] = d.split('__');

  const hour24 = Number(hour24String);
  let timeOfDay = 'night';

  if (hour24 >= 20 && hour24 <= 24) {
    timeOfDay = 'night';
  } else if (hour24 >= 1 && hour24 <= 4) {
    timeOfDay = 'earlyMorning';
  } else if (hour24 >= 5 && hour24 <= 6) {
    timeOfDay = 'sunrise';
  } else if (hour24 >= 7 && hour24 <= 11) {
    timeOfDay = 'morning';
  } else if (hour24 >= 12 && hour24 <= 16) {
    timeOfDay = 'noon';
  } else if (hour24 >= 16 && hour24 <= 18) {
    timeOfDay = 'sunset';
  } else if (hour24 >= 18 && hour24 <= 19) {
    timeOfDay = 'lateEvening';
  }

  return {
    month,
    day,
    am,
    hour,
    minute,
    hour24,
    timeOfDay,
    weekday,
  };
};

export const formattedTime = ({ am = '', hour = '', minute = '' }) => {
  return `${hour}:${minute} ${am}`;
};

export const formattedDay = ({ month = '', day = '', weekday = '' }) => {
  return `${weekday}, ${month} ${day}`;
};
