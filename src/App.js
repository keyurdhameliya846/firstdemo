import logo from './logo.svg';
import './App.css';
import { increment,decrement,demoapp,incrementByAmount } from './app/reducers/counterSlice';
import { useDispatch,useSelector } from 'react-redux';
import { useState } from 'react';
function App() {
  const count = useSelector((state) => state.counter.value)
  const name = useSelector((state) => state.counter.name)
  const dispatch = useDispatch();

  const [data,setdata] = useState('');

  return (
    <div className="App">
      <h1>{count}</h1>
      <h1>{name}</h1>
      <input type='button' value="Incerment" onClick={ () => dispatch(increment()) }></input>
      <input type='button' value="Decerment" onClick={ () => dispatch(decrement()) }></input>
      <input type='button' value="Demoapp" onClick={ () => dispatch(demoapp()) }></input>
    <br></br><br></br>
      <input type='text' onChange={(e) =>{ setdata(e.target.value) }}></input>
      <input type='button' value="TextVal" onClick={ () => dispatch(incrementByAmount(parseInt(data)))}></input>


    </div>
  );
}

export default App;
