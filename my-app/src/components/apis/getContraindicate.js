import axios from 'axios';
const getContraindicate = async (itemName) => {
  let result = await axios({
    url: 'http://localhost:8000/graphql',
    method: 'POST',
    data: {
      query: `
          query{
            getContraindicate(ITEM_NAME: \"${itemName}\"){
              ENTP_NAME
              ITEM_NAME
              MIXTURE_ENTP_NAME
              MIXTURE_ITEM_NAME
              PROHBT_CONTENT
            }
          }
        `
    }
  });
  console.log(result.data.data.getContraindicate);
};

export default getContraindicate;
