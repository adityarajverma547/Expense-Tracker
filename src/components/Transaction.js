import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transac from './Transac';

const Transaction = () => {
const {transaction}=useContext(GlobalContext);


  return (
    <>
    <h3>History</h3>
    <ul  className ="list">
      {transaction.map((transaction) => (
        <Transac key={transaction.id} transaction={transaction}/>))}
    </ul>
    </>
  )
}

export default Transaction