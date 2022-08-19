import { useEffect, useState } from 'react';
import './App.css';

/* Props
const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )
}
*/

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("counter changed to " + counter);
  }, [counter]);

  return (
    <div className="App">

    <button onClick={() => setCounter((prevCounter) => prevCounter - 1)}>-</button>
    <h1>{counter}</h1>
    <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>+</button>

    {/* Props
        <Person 
          name={'John'} 
          lastName={'Die'} 
          age={21} 
        />
        <Person 
          name='Jane' 
          lastName='Die' 
          age={25} 
        />
  */}

    </div>
  );
}

export default App;
