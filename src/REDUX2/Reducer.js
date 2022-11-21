import { GET_TODOS, TODO_SUCCESSFULL, TODO_UNSUCCESSFULL } from "./Constants";

const initialstate={
    isloading:false,
    error:false,
    todo:[],
}


const Reducer2=(state=initialstate, action)=>{


    switch (action.type) {

        case GET_TODOS:
            
            return{
                ...state,
                isloading:true,
                error:false,
                
            }
                    case TODO_SUCCESSFULL:
            
            return{
                ...state,
                isloading:false,
                error:false,
                todo:action.payload,
                
            }


            case TODO_UNSUCCESSFULL:
            
                return{
                    ...state,
                    isloading:false,
                    error:true,
                    todo:[],
                    
                }
    
        default:
            return state;
    }
}



export default Reducer2;