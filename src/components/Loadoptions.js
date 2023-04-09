import {
  sleep,
  getRequestApiData,
  loadPayload,
} from '../utils/loadOptionUtils';
import { faker } from '@faker-js/faker';

export const largeData = new Array(100000).fill().map((value, index) => ({
  id: index,
  label: faker.internet.userName(),
  value: faker.internet.userName(),
}));

export const loadOptions = async (search, prevOptions, option) => {
  const options = [];
  //const tempOptions = await getRequestApiData(option);
  const tempOptions = largeData;
  loadPayload(options, option, tempOptions);
  await sleep(300); //wait time to load the dropdown data

  let filteredOptions;
  if (!search) {
    filteredOptions = options;
  } else {
    const searchLower = search.toLowerCase();

    filteredOptions = options.filter(({ label }) =>
      label.toLowerCase().includes(searchLower)
    );
  }

  const hasMore = filteredOptions.length > prevOptions.length + 10;
  const slicedOptions = filteredOptions.slice(
    prevOptions.length,
    prevOptions.length + 10
  );

  return {
    options: slicedOptions,
    hasMore,
  };
};
