import moment from 'moment';

export default function () {
  const wrapper = document.getElementById('wrapper');

  wrapper.innerHTML = moment().utc().utcOffset('+00:30').format();
}
