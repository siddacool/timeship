export const monthsListFullNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const monthsList = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

export const getCurruntTime = (timezone: string | undefined) => {
  const date = new Date();
  const dataUtc = new Date(
    Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds(),
    ),
  );

  return dataUtc.toLocaleString('en-US', {
    timeZone: timezone,
  });
};

export const getCurruntTimeFromDateUtc = (
  dataUtc: { toLocaleString: (arg0: string, arg1: { timeZone: string | undefined }) => any },
  timezone: string | undefined,
) => {
  const [date = '', time = ''] =
    `${dataUtc.toLocaleString('en-US', {
      timeZone: timezone,
    })}`.split(', ') || [];

  const [month = '1', day = '1'] = date.split('/') || [];
  const am = time.includes('PM') ? 'PM' : 'AM';
  const [hour = '', minute = ''] = time.replace(' PM', '').replace(' AM', '').split(':') || [];

  const hour24 = am === 'PM' ? parseInt(hour, 10) + 12 : parseInt(hour, 10);
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
  };
};

export const getDateUTC = () => {
  const date = new Date();

  return new Date(
    Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds(),
    ),
  );
};

export const formattedTime = ({ am, hour, minute }) => {
  return `${hour}:${minute} ${am}`;
};

export const formattedDay = ({ month = '1', day }) => {
  const monthNumber = Number(month) - 1;
  const monthName = monthsList[monthNumber];

  return `${monthName} ${day}`;
};
