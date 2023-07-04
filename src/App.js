// import { useState } from 'react';
// import './style.css';
// import BackProping from './BackProping';
import ApiFetchAxios from './ApiFetchAxios';
import FetchApi from './FetchApi';
import FetchApiTable from './FetchApiTable';

function App() {

  // const [UIcolor, setUIColor] = useState(null);

  // const getColor = (color) => {
  //   setUIColor(color);
  // }

  return (
    <div className="App">
      {/* <div className='App_color-container' style={{background:`${UIcolor}`}}>
      </div>
      <BackProping getColor={getColor} /> */}
      {/* <FetchApi/> */}
      {/* <FetchApiTable/> */}
      <ApiFetchAxios/>
    </div>
  );
}

export default App;
