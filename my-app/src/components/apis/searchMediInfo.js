import axios from 'axios';
import parseXML from '../../util/parseXML';
import dotenv from 'dotenv';

dotenv.config();
const url = process.env.REACT_APP_MEDICINE_URL;
const key = process.env.REACT_APP_MEDICINE_KEY;
const searchMediInfo = async (entpName, itemName) => {
  try {
    let queryParams = '?' + encodeURIComponent('serviceKey') + '=' + key;
    let type = '/getDurPrdlstInfoList';
    queryParams += '&' + encodeURIComponent('entpName') + '=' + encodeURIComponent(entpName);
    queryParams += '&' + encodeURIComponent('itemName') + '=' + encodeURIComponent(itemName);
    queryParams +=
      '&' +
      encodeURIComponent('pageNo') +
      '=' +
      encodeURIComponent('1') +
      '&' +
      encodeURIComponent('numOfRows') +
      '=' +
      encodeURIComponent('100'); /* */

    let getInfo = await axios({
      url: url + type + queryParams,
      method: 'GET',
      headers: { 'Access-Control-Allow-Origin': 'https://velog.io/@oouuyab' }
    });
    let parsedData = parseXML(getInfo.data).response.body.items;
    console.log(parsedData);
    return parsedData;
  } catch (err) {
    console.log('searchMediInfo err');
    console.log(err);
  }
};

export default searchMediInfo;
