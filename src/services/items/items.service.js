import { items } from "./mock/data";

export const itemsRequest = () => {
  return new Promise((resolve, reject) => {
    const mock_items = items;
    if (!mock_items) {
      reject("No items found...");
    }
    resolve(mock_items);
  });
};

itemsRequest()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
