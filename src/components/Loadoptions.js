import {
  sleep,
  getRequestApiData,
  loadPayload,
} from '../utils/loadOptionUtils';

export const loadOptions = async (search, prevOptions, option) => {
  const options = [];
  const tempOptions = await getRequestApiData(option);
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
