import axios from 'axios';

const apiPath = 'https://covid19.th-stat.com/json/covid19v2/getTodayCases.json';

export const fetchData = async () => {
  try {
    const { data } = await axios.get(apiPath);
    return data
  } catch (e) {
    return e;
  }
}