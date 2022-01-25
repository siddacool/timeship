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

  const [month = '1', day = '1', year = ''] = date.split('/') || [];
  const am = time.includes('PM') ? 'PM' : 'AM';
  const [hour = '', minute = '', second = ''] =
    time.replace(' PM', '').replace(' AM', '').split(':') || [];

  return {
    month,
    day,
    year,
    am,
    hour,
    minute,
    second,
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

export const formattedTime = (utcTime: string, timezone: string | undefined) => {
  const { hour, minute, am } = getCurruntTimeFromDateUtc(utcTime, timezone);

  return `${hour}:${minute} ${am}`;
};

export const formattedDay = (utcTime: string, timezone: string | undefined) => {
  const { month = '1', day } = getCurruntTimeFromDateUtc(utcTime, timezone);
  const monthNumber = Number(month) - 1;
  const monthName = monthsListFullNames[monthNumber];

  return `${day}, ${monthName}`;
};
