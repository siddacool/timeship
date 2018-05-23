import { DateTime } from 'luxon';

function runningTime(target, format = 'hh:mm:ssa dd MMM') {
  const thisTarget = target;
  const thisTimezone = thisTarget.getAttribute('data-timezone');

  function step() {
    const timeToUpdate = DateTime.utc().setZone(`UTC${thisTimezone}`).toFormat(format);

    thisTarget.textContent = timeToUpdate;

    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export default runningTime;
