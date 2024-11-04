import React from 'react';
import  Header  from './components/header'
import  Balance  from './components/Balance'
import  IncomeExpenses  from './components/IncomeExpenses'
import  Transaction  from './components/Transaction'
import  AddTransaction  from './components/AddTransaction'
import './App.css';
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
    <div>
      <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance/>
        <IncomeExpenses/>
        <Transaction/>
        <AddTransaction/>
      </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
