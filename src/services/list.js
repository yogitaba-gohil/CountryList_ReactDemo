export function getList() {
    return fetch('https://restcountries.com/v3.1/all')
      .then(data => data.json())
  }

  