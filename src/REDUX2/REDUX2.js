import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import gettodos from './Action';
import './redux2.css'

const REDUX2 = () => {

const dispatch =useDispatch();
const {todo,isloading,error} =useSelector((state)=>state);





useEffect(() => {

    dispatch(gettodos());

  


}, []);



  return (







    <div className='container'>

                      {isloading && <span>data is loading</span>}
                      {error && <psan>{error.message}</psan>}

                     {todo && todo.map((e)=>
                     
                     <div className='card'>
                       <h4>{e.title}</h4>
                        <h3>{e.username}</h3>
                       </div>
                

                     )}
    </div>
  )
}

export default REDUX2;


