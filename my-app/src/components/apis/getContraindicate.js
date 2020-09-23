import axios from 'axios';
const getContraindicate = async (itemName, mixtureItemName) => {
  let result = await axios({
    url: 'http://localhost:8000/graphql',
    method: 'POST',
    data: {
      query: `
          query{
            contraindicate(ITEM_NAME: \"${itemName}\", MIXTURE_ITEM_NAME: \"${mixtureItemName}\"){
              ITEM_NAME
              ENTP_NAME
              MIXTURE_ITEM_NAME
              MIXTURE_ENTP_NAME
              PROHBT_CONTENT
            }
          }
        `
    }
  });
  return result.data.data.contraindicate;
};

export default getContraindicate;
