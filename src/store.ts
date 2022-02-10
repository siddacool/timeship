import { createMemo, createSignal } from 'solid-js';
import { setDefaultStorageName, createStore as createSathaStore } from '@satha/core';
import { createStore } from 'solid-js/store';
import { getDateUTC } from './time';

setDefaultStorageName('timeship-store-1');

const previewListLocalStorage = createSathaStore('preview-list', []);
const darkThemeLocalStorage = createSathaStore('dark-theme', false);
const utcDetailsLocalStorage = createSathaStore('utc-details', false);

const body = document.querySelector('body');
const themeColor = document.querySelector('meta[name="theme-color"]');

interface ITimezone {
  _id: string;
  name: string;
  timestamp: string;
  timezone: string;
  countryCode: string;
  countryName: string;
  noCities: boolean;
  timeOfDay?: string;
}

interface IUtcTimeInitialData {
  data: string;
}

interface IPreviewList {
  data:
    | {
        _id: string;
        name: string;
        timestamp: string;
        timezone: string;
        countryCode: string;
        countryName: string;
        noCities: boolean;
      }[]
    | any[];
}

interface IOrderList {
  data:
    | {
        name: string;
        timestamp: string;
        timezone: string;
        countryCode: string;
        countryName: string;
        noCities: boolean;
      }[]
    | any[];
  active: boolean;
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
  if (timezones.data.length) {
    return;
  }

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

const previewListInitialState: IPreviewList = {
  data: previewListLocalStorage.get(),
};

export const [previewList, setPreviewList] = createStore(previewListInitialState);

const previewListSaver = (data = []) => {
  setPreviewList('data', () => [...data]);

  previewListLocalStorage.set(() => data);
};

export const poplulateAllItemsToPreviewList = async () => {
  const res = await fetch('./data.json');
  const json = (await res.json()) || [];

  previewListSaver(json);
};

export const resetPreviewList = () => {
  const data = [
    {
      _id: '1',
      name: 'Alofi',
      timestamp: 'UTC-11',
      timezone: 'Pacific/Niue',
      countryCode: 'nu',
      countryName: 'Niue',
      timeOfDay: 'night',
    },
    {
      _id: '2',
      name: 'Tanjung Pinang',
      timestamp: 'UTC+7',
      timezone: 'Asia/Pontianak',
      countryCode: 'id',
      countryName: 'Indonesia',
      timeOfDay: 'earlyMorning',
    },
    {
      _id: '3',
      name: 'Mumbai',
      timestamp: 'UTC+5:30',
      timezone: 'Asia/Kolkata',
      countryCode: 'in',
      countryName: 'India',
      timeOfDay: 'sunrise',
    },
    {
      _id: '4',
      name: 'Antarctica',
      timestamp: 'UTC+6',
      timezone: 'Antarctica/Vostok',
      countryCode: 'aq',
      countryName: 'Antarctica',
      noCities: true,
      timeOfDay: 'morning',
    },
    {
      countryCode: 'cl',
      countryName: 'Chile',
      name: 'Antofagasta',
      timestamp: 'UTC-4',
      timezone: 'America/Santiago',
      _id: 'cl__UTC-4__Antofagasta',
      timeOfDay: 'noon',
    },
    {
      countryCode: 'kn',
      countryName: 'Saint Kitts and Nevis',
      name: 'Middle Island',
      timestamp: 'UTC-4',
      timezone: 'America/St_Kitts',
      _id: 'kn__UTC-4__Middle_Island',
      timeOfDay: 'sunset',
    },
    {
      countryCode: 'gl',
      countryName: 'Greenland',
      name: 'Greenland',
      noCities: true,
      timestamp: 'UTC-4',
      timezone: 'America/Thule',
      _id: 'gl__UTC-4__blank',
      timeOfDay: 'lateEvening',
    },
  ];

  previewListSaver(data);
};

const orderListInitialState: IOrderList = {
  data: [],
  active: false,
};

export const [orderList, setOrderList] = createStore(orderListInitialState);

export const poplulateOrderList = (data = []) => {
  setOrderList('data', () => [...data]);
};

export const poplulateOrderListFromPreviewList = () => {
  setOrderList('data', () => [...previewList.data]);
};

export const orderListActiveToggle = () => {
  setOrderList('active', (active) => !active);
};

export const orderListSetOrder = (id = '', action = 'up') => {
  setOrderList('data', (d) => {
    const index = d.findIndex((x) => x._id === id);
    const maxIndex = d.length;

    if (!maxIndex) {
      return [...d];
    }

    if (index === 0 && action === 'up') {
      return [...d];
    }

    if (index === maxIndex - 1 && action === 'down') {
      return [...d];
    }

    const newIndex = action === 'up' ? index - 1 : index + 1;

    const element = d[index];
    d.splice(index, 1);
    d.splice(newIndex, 0, element);

    return [...d];
  });
};

export const orderListRemoveItem = (id = '') => {
  setOrderList('data', (d) => {
    const newData = d.filter((d) => d._id !== id) || [];

    return [...newData];
  });
};

export const saveOrderList = () => {
  previewListSaver(orderList.data);
  orderListActiveToggle();
};

export const cancelOrderList = () => {
  setOrderList('data', () => []);
  orderListActiveToggle();
};

const utcTimeInitialData: IUtcTimeInitialData = {
  data: '',
};

export const [utcTime, setUtcTime] = createStore(utcTimeInitialData);

export const updateUtCTime = () => {
  const timeNow = getDateUTC();

  if (timeNow === utcTime.data) {
    return;
  }

  setUtcTime('data', () => timeNow);
};

export const [actionMenuOpen, setActionMenuOpen] = createSignal(false);

export const handleActionMenuToggle = () => {
  setActionMenuOpen(!actionMenuOpen());
};

export const [addModal, setAddModal] = createStore({ active: false });

export const addModalToggle = () => {
  setAddModal('active', (active) => !active);
};

export const [selectedFromList, setSelectedFromList] = createStore({ data: [] });

export const poplutateSelected = () => {
  setSelectedFromList('data', () => [...previewList.data.map((d) => d._id)]);
};

export const selectToggle = (id = '') => {
  setSelectedFromList('data', (d) => {
    if (d.includes(id)) {
      const index = d.indexOf(id);
      if (index > -1) {
        d.splice(index, 1);
      }
    } else {
      d.push(id);
    }

    return [...d];
  });
};

export const saveSelectedToPreviewList = () => {
  const listToSave =
    timezones.data.filter((d) => {
      if (selectedFromList.data.includes(d._id)) {
        return d;
      }
    }) || [];

  const alreadyInPreviewList =
    previewList.data.filter((d1) => listToSave.map((d2) => d2._id).includes(d1._id)) || [];

  const notInPreviewList =
    listToSave.filter((d1) => !previewList.data.map((d2) => d2._id).includes(d1._id)) || [];

  previewListSaver([...alreadyInPreviewList, ...notInPreviewList]);
  setSelectedFromList('data', () => []);
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
    } else if (timezones.filters.sortBy === 'selected') {
      const selected =
        ordered.filter((d) => {
          if (selectedFromList.data.includes(d._id)) {
            return d;
          }
        }) || [];

      if (selected && selected.length) {
        const notSelected =
          ordered.filter((d) => {
            if (!selectedFromList.data.includes(d._id)) {
              return d;
            }
          }) || [];

        ordered = [...selected, ...notSelected];

        if (timezones.filters.sortOrder === 'DSC') {
          ordered = ordered.reverse();
        }
      }
    }
  }

  return ordered;
});

export const [darkTheme, setDarkTheme] = createStore({ active: darkThemeLocalStorage.get() });

export const darkThemeToggle = () => {
  const newCondition = !darkTheme.active;
  darkThemeLocalStorage.set(() => newCondition);

  setDarkTheme('active', () => newCondition);

  if (newCondition) {
    body?.classList.add('dark');

    themeColor.content = '#0a214d';
  } else {
    body?.classList.remove('dark');

    themeColor.content = '#e9e9e9';
  }
};

export const [settings, setSettings] = createStore({ utcDetails: utcDetailsLocalStorage.get() });

export const utcDetailsToggle = () => {
  const newCondition = !settings.utcDetails;
  utcDetailsLocalStorage.set(() => newCondition);

  setSettings('utcDetails', () => newCondition);
};

if (import.meta.env.DEV) {
  window.poplulateAllItemsToPreviewList = poplulateAllItemsToPreviewList;
  window.resetPreviewList = resetPreviewList;
}
