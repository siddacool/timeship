import { createMemo } from 'solid-js';
import { createStore } from 'solid-js/store';

export const [timezones, setTimezones] = createStore({
  data: [],
  filters: {
    search: '',
  },
});

export const fetchTimezones = async () => {
  const res = await fetch('./data.json');
  const json = (await res.json()) || [];

  setTimezones('data', () => [...json]);
};

export const searchTimezones = (searchTerm = '') => {
  setTimezones('filters', (filters) => Object.assign({}, { ...filters, search: searchTerm }));
};

interface ITimezone {
  timestamp: string;
  timezone: string;
  countryCode: string;
  countryName: string;
  cities: string[];
}

export const filteredTimeZones = createMemo(() => {
  const searchTerm = timezones.filters.search.toLocaleLowerCase().trim();
  const searched =
    timezones.data.filter((d: ITimezone) => {
      if (searchTerm) {
        if (
          d.countryName.toLocaleLowerCase().trim().includes(searchTerm) ||
          d.cities.join(' ').toLocaleLowerCase().trim().includes(searchTerm)
        ) {
          return d;
        }
      } else {
        return d;
      }
    }) || [];

  return searched;
});
