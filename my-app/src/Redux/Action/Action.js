import { DELETE_USER, Get_USER, EDIT_USER ,UPDATE_USER} from "../Type";

export const GetUSER = (data) => {
  return {
    type: Get_USER,
    data,
  };
};

export const DeleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};
export const EditUser = (id) =>{
    return{
        type: EDIT_USER,
        payload: id,
    }
}
export const UpdateUser = (data) =>{
  return{
    type: UPDATE_USER,
    payload:data
  }
}