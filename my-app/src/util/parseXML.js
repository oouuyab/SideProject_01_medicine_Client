let parser = require('fast-xml-parser');
let he = require('he');

let options = {
  attributeNamePrefix: '@_',
  attrNodeName: 'attr', //default is 'false'
  textNodeName: '#text',
  ignoreAttributes: true,
  ignoreNameSpace: false,
  allowBooleanAttributes: false,
  parseNodeValue: true,
  parseAttributeValue: false,
  trimValues: true,
  cdataTagName: '__cdata', //default is 'false'
  cdataPositionChar: '\\c',
  parseTrueNumberOnly: false,
  arrayMode: false, //"strict"
  attrValueProcessor: (val, attrName) => he.decode(val, { isAttributeValue: true }), //default is a=>a
  tagValueProcessor: (val, tagName) => he.decode(val), //default is a=>a
  stopNodes: ['parse-me-as-string']
};

const parseXML = (xmlData) => {
  try {
    let tObj = parser.getTraversalObj(xmlData, options);
    let jsonObj = parser.convertToJson(tObj, options);
    return jsonObj;
  } catch (err) {
    console.log('parseXML err');
    console.log(err);
  }
};
export default parseXML;
