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
      tempOptions.products.map((option) => {
        options.push({
          value: option.title,
          label: option.title,
        });
      });
      break;
    case 'price':
      tempOptions.comments.map((option) => {
        options.push({
          value: option.body,
          label: option.body,
        });
      });
      break;
    case 'itemName':
      tempOptions.quotes.map((option) => {
        options.push({
          value: option.author,
          label: option.author,
        });
      });
      break;
    case 'itemGroup':
      tempOptions.todos.map((option) => {
        options.push({
          value: option.userId + ' ' + option.todo,
          label: option.userId + ' ' + option.todo,
        });
      });
      break;
    default:
      break;
  }
}
