import { createMemo } from 'solid-js';
import { createStore } from 'solid-js/store';

interface ITimezone {
  name: string;
  timestamp: string;
  timezone: string;
  countryCode: string;
  countryName: string;
  noCities: boolean;
}

export const [timezones, setTimezones] = createStore({
  data: [],
  filters: {
    search: '',
    sortBy: '',
    sortOrder: 'ASC',
  },
});

export const fetchTimezones = async () => {
  const res = await fetch('./data.json');
  const json = (await res.json()) || [];

  setTimezones('data', () => [...json]);
};

export const searchTimezones = (search = '') => {
  setTimezones('filters', (filters) => Object.assign({}, { ...filters, search }));
};

export const orderTimezones = (sortBy = '') => {
  let sortByInternal = sortBy;
  let sortOrder = 'ASC';

  if (timezones.filters.sortBy === sortBy) {
    if (timezones.filters.sortOrder === 'ASC') {
      sortByInternal = sortBy;
      sortOrder = 'DSC';
    } else {
      sortByInternal = '';
      sortOrder = 'ASC';
    }
  }

  setTimezones('filters', (filters) =>
    Object.assign({}, { ...filters, sortBy: sortByInternal, sortOrder }),
  );
};

export const filteredTimeZones = createMemo(() => {
  const searchTerm = timezones.filters.search.toLocaleLowerCase().trim();
  const searched =
    timezones.data.filter((d: ITimezone) => {
      if (searchTerm) {
        if (
          d.countryName.toLocaleLowerCase().trim().includes(searchTerm) ||
          d.name.toLocaleLowerCase().trim().includes(searchTerm)
        ) {
          return d;
        }
      } else {
        return d;
      }
    }) || [];

  let ordered = searched;

  if (timezones.filters.sortBy) {
    if (timezones.filters.sortBy === 'Name') {
      ordered = ordered.sort((a: ITimezone, b: ITimezone) => a.name.localeCompare(b.name));

      if (timezones.filters.sortOrder === 'DSC') {
        ordered = ordered.reverse();
      }
    } else if (timezones.filters.sortBy === 'CountryName') {
      ordered = ordered.sort((a: ITimezone, b: ITimezone) =>
        a.countryName.localeCompare(b.countryName),
      );

      if (timezones.filters.sortOrder === 'DSC') {
        ordered = ordered.reverse();
      }
    } else if (timezones.filters.sortBy === 'CountryCode') {
      ordered = ordered.sort((a: ITimezone, b: ITimezone) =>
        a.countryName.localeCompare(b.countryName),
      );

      if (timezones.filters.sortOrder === 'DSC') {
        ordered = ordered.reverse();
      }
    }
  }

  return ordered;
});
