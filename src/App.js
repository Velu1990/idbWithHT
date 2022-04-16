import React , {useEffect} from 'react';
import './App.css';
import {idb} from './utils/idb'
import HTable from './component/HTable';

function App() {

  useEffect (()=>{
    idb('ME' , 'id,value, books, fruit ,sathish',  1)
  },[])

  // 

  return (
    <div className="App">
      {/* <button type='button' onClick={()=>handlClick()}>Create DB</button> */}
      <HTable />
    </div>
  );
}

export default App;


//  {'velu' : 30 , 'Sathish':27}
// [30 , 27 , 'test']
// ['velu' , 'sathis' , 'news']