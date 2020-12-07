import * as SearchUtil from "../util/search_api_util";
import {receiveQuestions} from "./question_actions";

export const fetchSearch = (searchString) => {
  return (dispatch) => {
    return SearchUtil.fetchSearch(searchString)
      .then((payload) => dispatch(receiveQuestions(payload)))
  };
}

