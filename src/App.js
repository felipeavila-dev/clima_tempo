import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Header} from './components/Header';
import {Navbar} from './components/Navbar';
import {InfoArea} from './components/InfoArea';
import {Footer} from './components/Footer';
import { useState } from 'react';
// import {fetchData} from './helpers/fetchData';
// import { useState } from 'react';

function App() {
  const [data, setData] = useState({
    name: '', 
    region: '', 
    country: '',
    localtime: '', 
    condition: { icon: '', text: '' }, 
    temperature: 0, 
    feelslike: 0,
  });

  const [handler, setHandler] = useState(false);

  const handleData = (cityData) => {
    if(cityData !== '') {
      setHandler(true)
    } else {
      setHandler(false);
    };
    
    setData(cityData); 
  }
  return (
    <div className="app-container">
      <Header data={handleData}/>
      <Navbar />
      <InfoArea handler={handler} info={data}/>  
      <Footer />
    </div>
  );
}

export default App;
