import axios from 'axios';

const apiPath = 'https://covid19.th-stat.com/api/open/today';

export const fetchData = async () => {
  try {
    const { data } = await axios.get(apiPath);
    console.log(JSON.stringify(data));
    return data.map(({covid}) => ({Confirmed: covid}));
  } catch (e) {
    return e;
  }
}