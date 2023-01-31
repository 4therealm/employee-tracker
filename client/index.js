//retrieves all data from db
const getAll = () =>
  fetch('/api/getall', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });