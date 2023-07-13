export const exerciseOptions ={
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.react_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4e31bcc393msh71d6035b365ca5dp1ea54fjsn96a0fe9cbd68',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};
export const fetchData = async (url, options) => {
  // Check if data already exists in local storage
  const cachedData = localStorage.getItem(url);
  if (cachedData) {
    return JSON.parse(cachedData); // Return cached data
  }

  const response = await fetch(url, options);
  const data = await response.json();

  // Store data in local storage
  localStorage.setItem(url, JSON.stringify(data));

  return data;
};
