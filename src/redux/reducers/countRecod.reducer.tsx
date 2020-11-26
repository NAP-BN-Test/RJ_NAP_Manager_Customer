import { GET_COUNT_ARRAY } from "../constanst";

const initState = {
  count: 0,
};

function rdc_count(state = initState, action: any) {
  switch (action.type) {
    case GET_COUNT_ARRAY:
        return{
            count: action.count
        }
    default:
      return state;
  }
}

export default rdc_count;
