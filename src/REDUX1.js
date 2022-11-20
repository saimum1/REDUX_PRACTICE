import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { counterDecrement, counterIncrement, counterReset } from "./reduxtoolkit/Action";


const Redux1 = () => {

    



const dispatch =useDispatch();
const count =useSelector(state=>state.count);

function handleinc() {
        dispatch(counterIncrement());
    }

const handledec=()=>{
 dispatch(counterDecrement())
};

const handlereset=()=>{
  dispatch(counterReset())
};




  return (
    
<>

<span>Counter:{count}</span>
<button onClick={handleinc}>inc</button>
<button  onClick={handledec}>dec</button>
<button   onClick={handlereset}>reset</button>
</>

  )
}

export default Redux1