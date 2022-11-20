import { DECREMENT, INCREMENT, RESET } from "./Constatnts";





const Initialstate={count:0};


const Reducer=(state=Initialstate,action)=>{


    switch (action.type) {
        case INCREMENT:
            
            return {
                ...state,
                count:state.count+1
            }

            case DECREMENT:
            
            return {
                ...state,
                count:state.count-1
            }

            case RESET:

            
            return {
                ...state,
                count:0
            }

         
        default:
            return state;
    }

};


export default Reducer;