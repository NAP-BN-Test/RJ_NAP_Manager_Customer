// import { GET_USER_INFO } from "../constants";


const initState: any = {
  userinfo: {
    name: '',
  },
  accesstoken: '',
  permisson: '',
};

const rdc_Auth = (state = initState, action: any) => {
  switch (action.type) {
    // case GET_USER_INFO:
    //   return action.value;
    default:
      return state;
  }
};

export default rdc_Auth;