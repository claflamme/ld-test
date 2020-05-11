import fetch from "node-fetch";

export function get(apiPath) {
  return fetch(`https://www.themealdb.com/api/json/${apiPath}`);
}
