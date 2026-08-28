import { createContext } from 'react';
import ChildA from './ChilldA';

const Data = createContext();
const Data1 = createContext();
const username = "Daniyal";
const useremail = "daniyal@gmail.com";

const App = () => {
  return (

    <Data.Provider value={username}>
      <Data1.Provider value={useremail}>

      <ChildA />

      </Data1.Provider>
    </Data.Provider>

  );
};

export { Data , Data1 }
export default App
