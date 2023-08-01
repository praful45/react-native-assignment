import axios from 'axios';

export const FetchData = async (start, LIMIT) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/todos?_start=${start}&_limit=${LIMIT}`,
  );
  return response.data;
};
