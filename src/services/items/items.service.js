import { items } from "./mock/data";
import { getItemsFromDatabase } from "../authentication/authentication.service";

export const itemsRequest = () => {
  return new Promise((resolve, reject) => {
    const items = getItemsFromDatabase();
    if (!items) {
      reject("No items found...");
    }
    resolve(items);
  });
};

itemsRequest()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
