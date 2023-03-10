const BASE_URL = 'https://pixabay.com/api/';
const KEY = '32828546-a8b3cc930d15adedebd405197';

export const getPictures = (name, page) => {
  return fetch(
    `${BASE_URL}?key=${KEY}&q=${name}&image_type=photo&per_page=12&page=${page}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('Something went wrong'));
  });
};
