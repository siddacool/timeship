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
