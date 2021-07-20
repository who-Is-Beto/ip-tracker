import fetch from "node-fetch";

const fetchData = (ip: string) => {
  return fetch(`https://ipapi.co/${ip}/json/`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
};

export { fetchData };
