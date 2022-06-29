export const fetchCategories = () =>
  fetch(
    'https://cors-anywhere.herokuapp.com/https://api.iforbet.pl/rest/market/categories'
  )
    .then(res => res.json())
    .then(data => data.data)
