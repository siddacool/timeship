function getTimeZone() {
  const offset = new Date().getTimezoneOffset();
  const o = Math.abs(offset);
  return (offset < 0 ? '+' : '-') + ('00' + Math.floor(o / 60)).slice(-2) + ':' + ('00' + (o % 60)).slice(-2);
}

export default getTimeZone;
