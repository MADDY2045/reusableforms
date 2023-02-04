import { response } from '../mock/fakeData';
const options = [];

// for (let i = 0; i < 50; ++i) {
//   options.push({
//     value: i + 1,
//     label: `Option ${i + 1}`,
//   });
// }

response.map((option) => {
  options.push({
    value: option.email,
    label: option.email,
  });
});

const sleep = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined);
    }, ms);
  });

export const loadOptions = async (search, prevOptions) => {
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
