import moment from 'moment';

function runningTime(target, format = 'hh:mm:ssA DD MMM') {
  const thisTarget = target;
  const thisTimezone = thisTarget.getAttribute('data-timezone');

  function step() {
    const timeToUpdate = moment.utc().utcOffset(thisTimezone).format(format);

    thisTarget.textContent = timeToUpdate;

    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export default runningTime;
