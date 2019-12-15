/* eslint-disable require-jsdoc */
export default class Search {
  static find(Collections, searchKey, searchValue) {
    let result = null;
    if (searchKey === "topic") {
      result = Collections.filter(
        collection =>
          !collection.deleted && collection[searchKey].includes(searchValue)
      );
    } else {
      result = Collections.filter(
        collection =>
          !collection.deleted && collection[searchKey] == searchValue
      );
    }
    return result;
  }
}
