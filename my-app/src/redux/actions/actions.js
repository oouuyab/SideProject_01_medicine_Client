import { SEARCH_KEYWORD } from '../actionsTypes';

export const searchKeyword = (keyword) => ({
  type: SEARCH_KEYWORD,
  keyword
});
