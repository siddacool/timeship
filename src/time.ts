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

  const [month = '', day = '', year = ''] = date.split('/') || [];
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
