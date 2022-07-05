import { DELETE_USER_UP, EDIT_USER_UP, UPDATE_USER_UP } from "../Type";
const initialState = {
  user: localStorage.getItem("111")
    ? JSON.parse(localStorage.getItem("111"))
    : [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER_UP:
      var list = state.user;
      list.splice(action.payload.id, 1);
      // localStorage.setItem(list,'111')
      localStorage.setItem("111", JSON.stringify(list));
      return {
        ...state,
        user: [...list],
      };
      case EDIT_USER_UP:
          var item = JSON.parse(localStorage.getItem("111"));
          const isEdit=item[action.payload]
          console.log('mkmk',isEdit)
          
          console.log('ppp',action.payload)
          return {
               ...state,
              edit_user:isEdit,
              id:action.payload
          }
          case UPDATE_USER_UP:
            console.log("f",action.payload)
            var Update = JSON.parse(localStorage.getItem("111"));
            var UpdateData=action.payload
            Update.splice(action.payload.id,1,UpdateData)
            localStorage.setItem("111", JSON.stringify(Update));
            return{
              ...state,
              
            }

    default:
      return state;
  }
};
export default reducer;
