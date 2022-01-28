import { createMemo, createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';
import { getDateUTC } from './time';

interface ITimezone {
  _id: string;
  name: string;
  timestamp: string;
  timezone: string;
  countryCode: string;
  countryName: string;
  noCities: boolean;
}

interface IUtcTimeInitialData {
  data: any;
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

const previewListInitialState: IPreviewList = {
  data: [],
};

export const [previewList, setPreviewList] = createStore(previewListInitialState);

export const poplulateAllItemsToPreviewList = async () => {
  const res = await fetch('./data.json');
  const json = (await res.json()) || [];

  setPreviewList('data', () => [...json]);
};

export const resetPreviewList = () => {
  setPreviewList('data', () => [
    {
      _id: '1',
      name: 'Alofi',
      timestamp: 'UTC-11',
      timezone: 'Pacific/Niue',
      countryCode: 'nu',
      countryName: 'Niue',
    },
    {
      _id: '2',
      name: 'Tanjung Pinang',
      timestamp: 'UTC+7',
      timezone: 'Asia/Pontianak',
      countryCode: 'id',
      countryName: 'Indonesia',
    },
    {
      _id: '3',
      name: 'Mumbai',
      timestamp: 'UTC+5:30',
      timezone: 'Asia/Kolkata',
      countryCode: 'in',
      countryName: 'India',
    },
    {
      _id: '4',
      name: 'Antarctica',
      timestamp: 'UTC+6',
      timezone: 'Antarctica/Vostok',
      countryCode: 'aq',
      countryName: 'Antarctica',
      noCities: true,
    },
  ]);
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
  setPreviewList('data', () => [...orderList.data]);
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
  const utcTime = getDateUTC();

  setUtcTime('data', () => utcTime);
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

  setPreviewList('data', () => [...listToSave]);
  setSelectedFromList('data', () => []);
};

if (import.meta.env.DEV) {
  window.poplulateAllItemsToPreviewList = poplulateAllItemsToPreviewList;
  window.resetPreviewList = resetPreviewList;
}
