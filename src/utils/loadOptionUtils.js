import axios from 'axios';

export const sleep = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined);
    }, ms);
  });

export const requestObj = {
  name: 'https://dummyjson.com/products',
  price: 'https://dummyjson.com/comments',
  itemName: 'https://dummyjson.com/quotes',
  itemGroup: 'https://dummyjson.com/todos',
};

export async function getRequestApiData(option) {
  const response = await axios.get(requestObj[option]);
  if (response.data) {
    return response.data;
  }
  return response.data;
}

export function loadPayload(options, option, tempOptions) {
  switch (option) {
    case 'name':
      tempOptions.map((option) => {
        return options.push({
          value: option.value,
          label: option.value,
        });
      });
      break;
    case 'price':
      tempOptions.map((option) => {
        return options.push({
          value: option.value,
          label: option.value,
        });
      });
      break;
    case 'itemName':
      tempOptions.map((option) => {
        return options.push({
          value: option.value,
          label: option.value,
        });
      });
      break;
    case 'itemGroup':
      tempOptions.map((option) => {
        return options.push({
          value: option.value,
          label: option.value,
        });
      });
      break;
    default:
      break;
  }
}
