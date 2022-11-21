import { GET_TODOS, TODO_SUCCESSFULL, TODO_UNSUCCESSFULL } from "./Constants"
import axios from 'axios';



const gettodos=()=> async (dispatch)=>{

    dispatch({type:GET_TODOS});

    try {
      const res =  await axios.get("https://restful-api-blogs.herokuapp.com/api/posts");
      dispatch({type:TODO_SUCCESSFULL,payload:res.data});
    } catch (error) {
        dispatch({type:TODO_UNSUCCESSFULL,payload:error.message});
    }


}


export default gettodos;