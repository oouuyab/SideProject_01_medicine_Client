import axios from 'axios';
import parseXML from '../../util/parseXML';
import dotenv from 'dotenv';

dotenv.config();
const url = '/1470000/DURPrdlstInfoService';
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
      method: 'GET'
    });
    let parsedData = parseXML(getInfo.data).response.body.items;
    let recommend = parsedData.item;
    if (recommend && recommend.length > 0) {
      recommend = recommend.slice(0, 10);
    }
    return recommend;
  } catch (err) {
    console.log('searchMediInfo err');
    console.log(err);
  }
};

export default searchMediInfo;
